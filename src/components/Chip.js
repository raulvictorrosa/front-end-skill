import React from "react";

const Chip = props => {
  const { className, title, avatar, children } = props;
  return (
    <div className={`${className}`}>
      <img src={props.avatar} alt="asdasd" title="sdasdas" />
      {children}
    </div>
  );
};

export default Chip;
