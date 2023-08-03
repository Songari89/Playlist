import React from "react";

export default function Avatar({ image, name, isNew }) {
  return (
    <div className="avatarcontainer">
      <img className="avatarphoto" src={image} alt="coffee" />
      <p className="avatarname">{name}</p>
      {isNew && <div className="isnew">NEW</div> }
    </div>
  );
}
