import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const ProjectsTable = ({ projects }) => {
  const table = projects.map((project, index) => {
    return (
      <tr key={index}>
        <th>{index}</th>
        <th>{project.contactName}</th>
        <th>{project.email}</th>
        <th>{project.projectName}</th>
      </tr>
    );
  });
  return (
    <Table striped bordered hover size="xl">
      <thead>
        <tr>
          <th>#</th>
          <th>Contact Name</th>
          <th>email</th>
          <th>Project</th>
        </tr>
      </thead>
      <tbody className="font-size-normal">{table}</tbody>
    </Table>
  );
};
ProjectsTable.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectsTable;
