import React, { useState, createContext, useContext, useRef } from "react";
import axios from "axios";

import SearchInput from "./components/SearchInput";
import CreateNewContact from "./components/CreateNewContact";
import ContactList from "./components/ContactList";
import CreateArea from "./components/CreateArea";

const AppContext = createContext();

export function useGlobalContext() {
  return useContext(AppContext);
}

function App() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // get contacts from database
  const getContacts = async () => {
    try {
      const { data: contactList } = await axios.get("/api/contacts");
      setContacts(contactList);
    } catch (error) {
      console.log(error);
    }
  };

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);

  const reset = () => {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    phoneRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const phone = phoneRef.current.value;

    if (!firstName && !phone) {
      return;
    }
    // if firstName and phone are not empty and isEditing is true then edit the contact
    else if (firstName && phone && isEditing) {
      const contactToEdit = contacts.data.find(
        (contact) => contact._id === editID
      );
      contactToEdit.firstName = firstName;
      contactToEdit.lastName = lastName;
      contactToEdit.phone = phone;
      updateContact(contactToEdit);
    }
    // creating a new contact
    else {
      const newContact = { firstName, lastName, phone };
      createNewContact(newContact);
    }
    reset();
    setShowForm(false);
  };

  // =========
  //  function creates a new contacts and updates the ui by calling getContacts function
  // =========
  const createNewContact = async (contact) => {
    try {
      await axios.post("/api/contacts", contact);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  // =========
  //  function updates a contact and updates the ui by calling getContacts function
  // =========
  const updateContact = async (contact) => {
    try {
      await axios.put(`/api/contacts/${contact._id}`, contact);
      getContacts();
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  // =========
  //  function updates the input fields with values from the contact whose edit button is clicked
  // =========
  const handleEdit = (id) => {
    setIsEditing(true);
    setEditID(id);
    const contactToEdit = contacts.data.find((contact) => contact._id === id);
    const { firstName, lastName, phone } = contactToEdit;
    firstNameRef.current.value = firstName;
    lastNameRef.current.value = lastName;
    phoneRef.current.value = phone;
  };

  // =======
  // function deletes contact from database and UI
  // =======
  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    firstNameRef,
    lastNameRef,
    phoneRef,
    contacts,
    handleSubmit,
    query,
    setQuery,
    getContacts,
    isEditing,
    handleEdit,
    deleteContact,
    showForm,
    setShowForm,
  };

  return (
    <AppContext.Provider value={value}>
      <main className="main">
        <SearchInput />
        <CreateNewContact />
        <CreateArea />
        <ContactList />
      </main>
    </AppContext.Provider>
  );
}

export default App;
