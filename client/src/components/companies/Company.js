import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { Button } from "react-bootstrap";
import Back from "../reusable/Back";

import CompanyLeft from "./CompanyLeft";

import Alert from "components/layout/Alerts";
import CompanyRight from "./CompanyRight";

const Company = ({
  match: {
    params: { id }
  },
  loading,
  history,
  alerts,
  companies
}) => {
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const findCompany = companies.find((company) => id === company._id);
  const className = edit ? "display_form" : "";

  if (!findCompany) {
    return <Redirect to="/companies" />;
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="company">
          <div>
            <Back history={history} />
          </div>
          {alerts && <Alert />}
          <div className="features__">
            <Link
              to={{
                pathname: `/companies/${id}/newuser`,
                state: { companyName: findCompany.name }
              }}
            >
              <Button variant="secondary" className="culina__link">
                New User
              </Button>
            </Link>
            <Link to={`/companies/${id}/newproject`}>
              {" "}
              <Button variant="secondary" className="culina__link">
                New Project
              </Button>
            </Link>
          </div>

          <div className="company__display">
            <div className="company__display--box-1">
              <CompanyLeft
                edit={edit}
                setEdit={setEdit}
                company={findCompany}
                className={className}
              />
            </div>
            <div className="company__display--box-2">
              <CompanyRight
                id={id}
                company={findCompany}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateProps = (state) => ({
  loading: state.company.loading,
  companies: state.company.companies,
  alerts: state.alert
});

export default connect(mapStateProps)(Company);
