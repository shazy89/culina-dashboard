import * as Yup from "yup";
export const positions = [
  "Select ...",
  "Manager",
  "Electrical Technician",
  "Electrical Apprentice",
  "Rf Technician",
  "Rf Apprentice",
  "Warehouse Worker"
];
export const images = [
  "https://res.cloudinary.com/dytheecsk/image/upload/v1620505413/culina/depositphotos_59095205-stock-illustration-businessman-profile-icon_yytrhn.jpg",
  "https://res.cloudinary.com/dytheecsk/image/upload/v1620505407/culina/kisspng-computer-icons-user-profile-clip-art-icon-design-asha-rani-author-at-hire-help-5b6e34d7a84d83.7891420915339491436894_oowygj.jpg",
  "https://res.cloudinary.com/dytheecsk/image/upload/v1620505388/culina/flat-business-woman-user-profile-avatar-icon-vector-4334111_ym6qle.jpg",
  "https://res.cloudinary.com/dytheecsk/image/upload/v1620505385/culina/computer-icons-user-profile-person-thumbnail_bxdnq2.jpg"
];
export const newUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  birthday: Yup.string().required("Required"),
  position: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  annualSalary: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required")
});
export const editUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  birthday: Yup.string().required("Required"),
  position: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  annualSalary: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required")
});
