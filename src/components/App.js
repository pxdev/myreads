import React, {useState, useEffect, Fragment} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

// UI Components
import * as BooksAPI from "../utils/BooksAPI";
import CategoriesComponent from "./CategoriesComponent";

const App = () => {

    let navigate = useNavigate();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
        };

        getBooks();
    }, []);

    // const removeContact = (contact) => {
    //   ContactsAPI.remove(contact);
    //
    //   setContacts(contacts.filter((c) => c.id !== contact.id));
    // };

    // const createContact = (contact) => {
    //   const create = async () => {
    //     const res = await ContactsAPI.create(contact);
    //     setContacts(contacts.concat(res));
    //   };
    //
    //   create();
    //   navigate("/");
    // };

    console.log(books)

    return (
        <Fragment>
            <CategoriesComponent books={books} name={'Current Reading'}/>
        </Fragment>
        // <Routes>
        //   <Route
        //     exact
        //     path="/"
        //     element={
        //       <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        //     }
        //   />
        //   <Route
        //     path="/create"
        //     element={
        //       <CreateContact
        //         onCreateContact={(contact) => {
        //           createContact(contact);
        //         }}
        //       />
        //     }
        //   />
        // </Routes>
    );
};

export default App;
