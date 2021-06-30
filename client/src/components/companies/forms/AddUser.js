import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Back from "components/reusable/Back";
import AddUserFormFields from "./AddUserFormFields";

const AddUser = ({
  match: {
    params: { id }
  },
  location: {
    state: { companyName }
  },
  history
}) => {
  let edit = false;
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      <h1 className="u-margin-top-3 text-center">New {companyName} user</h1>
      <AddUserFormFields id={id} history={history} edit={edit} />
    </>
  );
};

export default AddUser;
