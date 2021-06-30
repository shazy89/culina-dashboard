import React from "react";
import spinner from "../../css/assets/images/spinner.gif";
const Spinner = () => (
  <section className="culina__spinner">
    <div className="culina__center">
      <img className="culina__image" src={spinner} alt="Loading..." />
    </div>
  </section>
);

export default Spinner;
