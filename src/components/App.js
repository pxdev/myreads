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


    console.log(books)

    return (
        <Fragment>
            <header className="header">
                <div className="container"><h1 className="pd-y-20">My Reads</h1></div>
            </header>
            <main className="container main">
                <CategoriesComponent books={books.filter(book => book.shelf === 'currentlyReading')} name={'Current Reading'}  sub={'Books i currently reading'}/>
                <CategoriesComponent books={books.filter(book => book.shelf === 'wantToRead')} name={'Want to Read'} sub={'Books i want to  read'}/>
                <CategoriesComponent books={books.filter(book => book.shelf === 'read')} name={'Read'} sub={'Books i have done reading'}/>
            </main>
        </Fragment>

    );
};

export default App;
