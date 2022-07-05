import React from "react";
import LoginLoading from "../Shared/LoginLoading";
import { useQuery } from "react-query";
import User from "./User";

const Users = () => {
  // fetching data from backend using react-query:
  const { data: users, isLoading } = useQuery("user", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    return <LoginLoading></LoginLoading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <User user={user} key={user?.id} index={index}></User>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
