import React from "react";

const User = ({ user, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.email}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
    </tr>
  );
};

export default User;
