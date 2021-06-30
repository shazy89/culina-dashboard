const Project = require("../models/Project");
const Company = require("../models/newCompany");
const normalizeData = require("../services/normalizeData");

// New Project  culina/companyId/project
exports.newProject = async function (
  { params: { companyId }, user, body },
  res
) {
  const { _id, ...rest } = body;

  const projectFields = {
    companyId,
    ...rest
  };
  try {
    // Note to do later if its not a company user cannot create a new project for this company!!
    if (user.admin || (position === "Manager" && companyId === user.company)) {
      const companyProject = await Company.findOne({ _id: companyId });
      const newProject = await new Project(projectFields);

      const companyProjectFields = {
        projectId: newProject._id,
        projectName: newProject.projectName,
        email: newProject.email,
        contactName: newProject.contactName
      };

      companyProject.projects.unshift(companyProjectFields);
      await newProject.save();
      await companyProject.save();

      res.json({ companyProject, newProject });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// PUT
// edit the project
// culina/:companuId/project/edit
exports.editProject = async function (
  { params: { companyId }, user, body },
  res
) {
  const { _id, ...rest } = body;

  const projectFields = {
    ...rest
  };
  try {
    if (user.admin || (position === "Manager" && companyId === user.company)) {
      let companyProject = await Company.findOne({ _id: companyId });

      const project = await Project.findOneAndUpdate(
        { _id: _id }, // filter
        { $set: projectFields }, // update
        { new: true }
      );

      const companyProjectFields = {
        projectId: project._id,
        projectName: project.projectName,
        email: project.email,
        contactName: project.contactName
      };
      // add projects to the company

      companyProject.projects = companyProject.projects.filter(
        (proj) => proj.projectId.toString() !== project._id.toString()
      );
      companyProject.projects.unshift(companyProjectFields);
      await companyProject.save();
      res.json({ companyProject, project });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//
// culina/:companyId/project/:projectId
// GET  project by :id
exports.projectById = async function (
  { params: { companyId, projectId }, user },
  res
) {
  try {
    if (
      user.admin ||
      (user.position === "Manager" && companyId === user.company)
    ) {
      const project = await Project.findOne({ _id: projectId });

      if (!project) return res.status(400).json({ msg: "Project not found" });

      return res.json(project);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
// remove the project by the :id
// DEL culina/:companyId/project/:projectId
exports.removeProject = async function (
  { params: { companyId, projectId }, user },
  res
) {
  try {
    if (user.admin || (position === "Manager" && companyId === user.company)) {
      await Project.findOneAndRemove({ _id: projectId });
      const companyProject = await Company.findOne({ _id: companyId });

      // remove the project from the company projects array
      companyProject.projects = companyProject.projects.filter(
        (proj) => proj.projectId.toString() !== projectId.toString()
      );
      await companyProject.save();
      res.json({ msg: "Project deleted" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
