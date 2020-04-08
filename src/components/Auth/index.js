import React, { useState } from "react";

import Register from "./Register";
import Login from "./Login";

export default () => {
  const [newAuthor, setNewAuthor] = useState(true);

  return newAuthor ? (
    <Register setNewAuthor={setNewAuthor} />
  ) : (
    <Login setNewAuthor={setNewAuthor} />
  );
};
