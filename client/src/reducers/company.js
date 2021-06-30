import {
  GET_COMPANIES,
  COMPANIES,
  NEW_COMPANY,
  DELETE_COMPANY,
  NEW_COMPANY_USER,
  EDIT_COMPANY_USER,
  REMOVE_COMPANY_USER
} from "../actions/types";
const initialState = { companies: [], loading: true };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: payload,
        loading: false
      };

    case NEW_COMPANY:
      return {
        ...state,
        companies: [...state.companies, payload],
        loading: false
      };
    case COMPANIES:
      return {
        ...state,
        companies: state.companies.map((company) =>
          company._id === payload._id ? payload : company
        ),
        loading: false
      };
    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter((company) => company._id !== payload),
        loading: false
      };
    case REMOVE_COMPANY_USER:
    case EDIT_COMPANY_USER:
    case NEW_COMPANY_USER:
      return {
        ...state,
        companies: state.companies.map((company) =>
          company._id === payload._id ? payload : company
        ),
        loading: false
      };

    default:
      return state;
  }
}
