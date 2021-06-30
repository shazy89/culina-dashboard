import React from "react";
import { Card } from "react-bootstrap";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";

const UserInfo = ({
  profileInfo: { avatar, firstName, lastName, email, position }
}) => {
  console.log(avatar);
  return (
    <Card className="user__personal user__shadow">
      <Card.Body className="font__size-3">
        <div className="user__card-box">
          {" "}
          <CloudinaryImage
            className="user__image"
            cloudName="dytheecsk"
            publicId={avatar}
          >
            <Transformation width="140" crop="scale" />
          </CloudinaryImage>
          <h2 className="user__card-header font__size-4">
            {firstName + " " + lastName}
            <br />
            <span className="user__card-position font__size-3">{position}</span>
            <br />
            <span className="font__size-2">
              {" "}
              <Card.Link href={`mailto:${email}`}>{email}</Card.Link>
            </span>
          </h2>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
