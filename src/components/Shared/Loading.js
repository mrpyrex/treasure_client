import React from "react";

const Loading = () => {
  return (
    <div className="container text-center mt-4">
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
