import React, { useState } from "react";

import { useGlobalContext } from "../App";

import axios from "axios";
import { FaEllipsisV, FaTrash, FaEdit } from "react-icons/fa";

function Contact({ _id, firstName, lastName, phone }) {
  const [showOptions, setShowOptions] = useState(false);
  const { getContacts, handleEdit, deleteContact } = useGlobalContext();

  return (
    <li className="contact flex">
      <div className="right flex">
        <span className="initial">
          {firstName && firstName[0].toUpperCase()}
        </span>
        <div className="contact__info">
          <p className="name">{`${firstName} ${lastName}`}</p>
          <p className="phone">{phone}</p>
        </div>
      </div>

      <button
        onClick={() => setShowOptions(!showOptions)}
        className="options-btn"
        aria-label="options"
      >
        <FaEllipsisV />
      </button>

      {showOptions && (
        <div className="controls">
          <button onClick={() => handleEdit(_id)} className="edit-btn">
            <FaEdit />
            Edit
          </button>
          <button onClick={() => deleteContact(_id)} className="delete-btn">
            <FaTrash />
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default Contact;
