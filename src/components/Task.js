import React from "react";

export default function Task({ task }) {
  return (
    <>
      <tr class="text-center">
        <td>{task.description}</td>
        <td>{task.dueDate}</td>
        <td>{task.priority}</td>
        <td>{task.status}</td>
        <td>
          <button class="btn btn-green">View</button>
        </td>
      </tr>
    </>
  );
}
