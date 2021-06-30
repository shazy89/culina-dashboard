import React, { useState, useEffect } from "react";
import api from "utils/api";
import { Link } from "react-router-dom";
import Back from "components/reusable/Back";
import Spinner from "components/layout/Spinner";
import UserPersonalInfo from "./userProfile/UserInfo";
import UserAdress from "./userProfile/UserAdress";
import UserSalary from "./userProfile/UserSalary";
import { Edit } from "react-feather";
const UserProfile = ({
  match: {
    params: { id, userId }
  },
  history
}) => {
  const [profileInfo, setprofileInfo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await api.get(`/companies/${id}/user/${userId}`);
      setprofileInfo(res.data);
      setLoading(false);
    };
    fetchUserInfo();
  }, [id, userId]);

  return (
    <>
      <div>
        <Back history={history} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="u-margin-top user__profile-box">
          <div className="w-50">
            <UserPersonalInfo profileInfo={profileInfo} />
            <UserAdress profileInfo={profileInfo} />
          </div>
          <div className="w-50 padding--1">
            <Link
              className="culina--link"
              to={{
                pathname: `/companies/${id}/user/${userId}/edit`,
                state: { profileInfo }
              }}
            >
              {" "}
              <h4 className="user__profile-edit">
                Edit <Edit className="company__edit--button" />
              </h4>
            </Link>
            <UserSalary profileInfo={profileInfo} />
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
