// Import dependencies
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components

// Page function
export default function EditDeveloperPage() {
  const navigate = useNavigate();

  // DOM return
  return (
    <>
      <h1 class="text-3xl p-6 text-center"> Edit Task Details</h1>

      <div id="Add Project Form" class="p-8 bg-gray-300 mx-auto w-1/2">
        <form class="flex flex-col">
          <label for="first_name">Description</label>
          <input type="text" id="first_name" name="first_name" />
          <label for="last_name">Due Date</label>
          <input type="text" id="last_name" name="last_name" />
          <label for="email">Priority</label>
          <input type="date" id="email" name="email" />
          <label for="phone_number">Status</label>
          <input type="text" id="phone_number" name="phone_number" />
          <label for="phone_number">Project ID</label>
          <input type="text" id="phone_number" name="phone_number" />

          <div class="flex justify-between mt-6">
            <button class="btn-small btn-gray">Reset</button>
            <button class="btn btn-green">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}