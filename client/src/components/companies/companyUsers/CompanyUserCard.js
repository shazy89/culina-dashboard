import React from "react";

import { Image as CloudinaryImage, Transformation } from "cloudinary-react";

const CompanyUserCard = ({ info: { firstName, lastName, avatar } }) => {
  return (
    <div className="slider--box">
      <CloudinaryImage
        className="slider--circle__image"
        cloudName="dytheecsk"
        publicId={avatar}
      >
        <Transformation width="130" crop="scale" />
      </CloudinaryImage>

      <h2>{firstName + " " + lastName}</h2>
    </div>
  );
};

export default CompanyUserCard;
