import api from "../utils/api";
import { setAlert } from "./alert";
import {
  NEW_COMPANY_USER,
  EDIT_COMPANY_USER,
  REMOVE_COMPANY_USER
} from "./types";

//new or edit
export const newCompanyUser = (formData, edit, history) => async (dispatch) => {
  try {
    if (edit) {
      const res = await api.put(
        `/companies/${formData.company}/editcurrent/user`,
        formData
      );
      dispatch({
        type: EDIT_COMPANY_USER,
        payload: res.data.company
      });

      history.push(`/companies/${formData.company}`);
      dispatch(setAlert("Sucsess", "success"));
    }
    if (!edit) {
      const res = await api.post(
        `/culina/${formData.company}/newuser`,
        formData
      );

      dispatch({
        type: NEW_COMPANY_USER,
        payload: res.data.company
      });
      history.push(`/companies/${formData.company}`);
      dispatch(setAlert("Sucsess", "success"));
    }
  } catch (err) {
    if (err) {
      dispatch(setAlert("Please try again", "danger"));
    }
  }
};
//Remove user

export const removeUser = (companyId, userId, history) => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone!")) {
    try {
      const res = await api.delete(`/companies/${companyId}/user/${userId}`);

      dispatch({ type: REMOVE_COMPANY_USER, payload: res.data });
      history.push(`/companies/${companyId}`);

      dispatch(setAlert("User Removed", "danger"));
    } catch (err) {
      console.error(err);
    }
  }
};
