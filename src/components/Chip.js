import React from "react";

const Chip = props => {
  const { className, children } = props;
  let { avatar } = props;
  if (!avatar) {
    avatar =
      "https://www.netmagicsolutions.com/data/author/default_user_icon16-09-201474352760.png";
  }
  return (
    <div className={`chip ${className || ""}`}>
      <img
        className="chip-media"
        src={avatar}
        alt={children}
        title={children}
        width="34px"
        height="34px"
      />

      <div className="chip-label">{children}</div>
    </div>
  );
};

export default Chip;
