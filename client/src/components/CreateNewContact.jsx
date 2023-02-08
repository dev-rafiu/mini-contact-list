import React from "react";
import { HiUserAdd } from "react-icons/hi";
import { useGlobalContext } from "../App";

function CreateNewContact() {
  const { setShowForm } = useGlobalContext();

  return (
    <div className="create-new-section container">
      <HiUserAdd />
      <button onClick={() => setShowForm(true)} className="create-new-btn">
        Create new contact
      </button>
    </div>
  );
}

export default CreateNewContact;
