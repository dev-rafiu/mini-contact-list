import React from "react";
import { HiUserAdd } from "react-icons/hi";

function CreateNewContact() {
  return (
    <div className="create-new-section container">
      <HiUserAdd />
      <button className="create-new-btn" aria-label="create new contact">
        Create new contact
      </button>
    </div>
  );
}

export default CreateNewContact;
