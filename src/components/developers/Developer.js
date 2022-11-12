import React from "react";

export default function Developer({ developer, onView }) {
  return (
    <>
      <tr class="text-center">
        <td>{developer.developer_id}</td>
        <td>{developer.first_name}</td>
        <td>{developer.last_name}</td>
        <td>{developer.email}</td>
        <td>{developer.phone_number}</td>
        <td><button class="btn btn-blue" onClick={onView}>View</button></td>
        <td><button class="btn-small btn-red">Del</button></td>
      </tr>
    </>
  );
}
