import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";

const AllUsersTable = ({ info, companyId }) => {
  const table = info.map((user, index) => {
    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <th>
          {" "}
          <CloudinaryImage
            className="table--circle__image"
            cloudName="dytheecsk"
            publicId="portfolio/me_ocryct.jpg"
          >
            <Transformation width="80" crop="scale" />
          </CloudinaryImage>
        </th>
        <Link
          className="culina--link"
          to={`/companies/${companyId}/user/${user.userId}`}
        >
          <th>{user.firstName + " " + user.firstName}</th>
        </Link>
      </tr>
    );
  });
  return (
    <Table striped bordered hover size="xl">
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Employee Name</th>
        </tr>
      </thead>
      <tbody className="font-size-normal">{table}</tbody>
    </Table>
  );
};

AllUsersTable.propTypes = {};

export default AllUsersTable;
