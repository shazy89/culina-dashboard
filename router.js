const Authentication = require("./controllers/CulinaAuth");
const Company = require("./controllers/Companies");
const CompanyUser = require("./controllers/CompanyUser");
const Project = require("./controllers/Project");
// const pasportService = require("./services/pasport");

const requireAuth = require("./services/requireAuth");

module.exports = function (app) {
  //culina admin users
  app.post("/auth/signup", Authentication.culinaSignup);
  app.post("/auth/signin", Authentication.culinaSignin);
  app.get("/auth", requireAuth, Authentication.getUser);

  // companies
  app.post("/companies", requireAuth, Company.newOrUpdate);
  app.get("/companies/all", requireAuth, Company.allCompanies);
  app.get("/companies/:id", requireAuth, Company.companyProfile);
  app.delete("/companies/:id", requireAuth, Company.removeCompany);
  app.post(
    "/culina/:companyId/newuser",
    requireAuth,
    CompanyUser.newCompanyUser
  );

  app.post("/companies/:id/user/signin", CompanyUser.signInCompanyUser);

  app.put(
    "/companies/:companyId/editcurrent/user",
    requireAuth,
    CompanyUser.editCompanyUSer
  );
  app.get(
    "/companies/:companyId/user/:userId",
    requireAuth,
    CompanyUser.companyUserById
  );
  app.delete(
    "/companies/:companyId/user/:userId",
    requireAuth,
    CompanyUser.removeCompanyUser
  );
  //projects
  app.post("/culina/:companyId/project/new", requireAuth, Project.newProject);
  app.put("/culina/:companyId/project/edit", requireAuth, Project.editProject);
  app.get(
    "/culina/:companyId/project/:projectId",
    requireAuth,
    Project.projectById
  );
  app.delete(
    "/culina/:companyId/project/:projectId",
    requireAuth,
    Project.removeProject
  );
};
