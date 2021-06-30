import React from "react";
import { connect } from "react-redux";
import AddUserFormFields from "../forms/AddUserFormFields";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { newUserSchema } from "../forms/constants";
import Back from "components/reusable/Back";
import { removeUser } from "actions/newUser";

const EditUser = ({
  match: {
    params: { id }
  },
  location: {
    state: { profileInfo }
  },
  history,
  removeUser
}) => {
  const edit = true;

  const handleRemoveUser = (e) => {
    e.preventDefault();
    removeUser(id, profileInfo._id, history);
  };
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      <h2 className="text-center">
        Edit {profileInfo.firstName + " " + profileInfo.lastName}'s profile
      </h2>
      <AddUserFormFields
        id={id}
        profileInfo={profileInfo}
        newUserSchema={newUserSchema}
        history={history}
        edit={edit}
      />
      <div className="button-box">
        <Button
          onClick={handleRemoveUser}
          variant="outline-danger"
          className="u-margin-top-small button-btn font__size-2"
        >
          {" "}
          Remove User Account
        </Button>
      </div>
    </>
  );
};

export default connect(null, { removeUser })(EditUser);
