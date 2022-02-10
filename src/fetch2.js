import React, { useState } from "react";

const Tour = ({ id, name, email, body }) => {
  return (
    <article className="sigle-Tour">
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{body}</p>
    </article>
  );
};

export default Tour;
