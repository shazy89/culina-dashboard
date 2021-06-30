import api from "../utils/api";
import { setAlert } from "./alert";
import { GET_COMPANIES, COMPANIES, NEW_COMPANY, DELETE_COMPANY } from "./types";

// Fetch all companies
export const getCompanies = () => async (dispatch) => {
  try {
    const res = await api.get("/companies/all");

    dispatch({
      type: GET_COMPANIES,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};

// Create or update company
export const createOrUpdate = (formData, edit, history) => async (dispatch) => {
  try {
    const res = await api.post("/companies", formData);

    if (edit) {
      dispatch({
        type: COMPANIES,
        payload: res.data
      });
      dispatch(setAlert("Company Updated", "success"));
    }

    if (!edit) {
      dispatch({
        type: NEW_COMPANY,
        payload: res.data.companyNew
      });
      dispatch(setAlert("Company Created", "success"));
      history.push(`/companies/${res.data.companyNew._id}`);
    }
  } catch (err) {
    console.error(err);
    let error = err.response.data.error;

    if (error) {
      dispatch(setAlert(error, "danger"));
    }

    //   dispatch({
    //     type: COMPANY_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status }
    //   });
  }
};

// Delete company
export const deleteCopany = (id, history) => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone!")) {
    try {
      await api.delete(`/companies/${id}`);

      dispatch({ type: DELETE_COMPANY, payload: id });
      history.push("/companies");
      //   dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Company has been permanently deleted", "danger"));
    } catch (err) {
      console.error(err);
      //   dispatch({
      //     type: PROFILE_ERROR,
      //     payload: { msg: err.response.statusText, status: err.response.status }
      //   });
    }
  }
};
