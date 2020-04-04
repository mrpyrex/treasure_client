import React from "react";

const Error = ({ error }) => {
  return (
    <div
      className="container m-auto alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {error.message}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Error;
