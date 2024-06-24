import React, { useEffect } from "react";

import Contact from "./Contact";
import { useGlobalContext } from "../App";

function ContactList() {
  const { query, contacts, getContacts } = useGlobalContext();

  const searchedContacts = contacts.data?.filter((contact) =>
    contact.firstName.toLowerCase().includes(query.toLowerCase())
  );

  // console.log(searchedContacts);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="contact-list-section container">
      <ul className="contact-list">
        {searchedContacts?.map((contact) => (
          <Contact key={contact._id} {...contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
