import React from "react";

const Image = ({ url, title }) => (
  <li>
    <img class="img-thumbnail rounded mt-5" src={url} alt={title} />
  </li>
);

export default Image;
