import React, { useState, useRef } from "react";
import axios from "axios";

import { useGlobalContext } from "../App";

function CreateArea() {
  const { handleSubmit, firstNameRef, lastNameRef, phoneRef, isEditing } =
    useGlobalContext();

  return (
    <div className="create-area container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-control flex">
          <span></span>
          <input type="text" ref={firstNameRef} placeholder="First Name" />
        </div>
        <div className="form-control">
          <input type="text" ref={lastNameRef} placeholder="Last Name" />
        </div>
        <div className="form-control flex">
          <span></span>
          <input type="number" ref={phoneRef} placeholder="Phone" />
        </div>
        <button type="submit" className="save-btn">
          {isEditing ? "Edit Contact" : "Save contact"}
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
