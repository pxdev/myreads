import React, {useState, useEffect, Fragment} from "react";
// import {Route, Routes, useNavigate} from "react-router-dom";

// UI Components
import * as BooksAPI from "../utils/BooksAPI";
import CategoriesComponent from "./CategoriesComponent";
import Loading from "./Loading";

const App = () => {

    const [isLoading, setLoading ] = useState(false);

    // let navigate = useNavigate();

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        setLoading(true);
        const res = await BooksAPI.getAll();
            setBooks(res);
            setLoading(false);
    };

    // fetch all books
    useEffect(() => {
        getBooks();
    }, []);

    // update book category
    const ChangeCategory = (book, category) => {
        console.log('Start')
        BooksAPI.update(book, category).then(async ()=>{
           await getBooks();
        });
        console.log('End' , books)

    }


   console.log(isLoading)

    return (
        <Fragment>

            {isLoading ? <Loading /> : ""}

            <header className="header">
                <div className="container">
                    <h1 className="pd-y-20">My Reads</h1>
                    <div className="main-nav">
                        <nav>
                            <ul>
                                <li><a href="/" className={"router-link-active"}>Home</a></li>
                                <li><a href="search">Search</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container main">
                <CategoriesComponent onChangeCategory={ChangeCategory}
                                     books={books.filter(book => book.shelf === 'currentlyReading')}
                                     name={'Current Reading'} sub={'Books i currently reading'}/>
                <CategoriesComponent onChangeCategory={ChangeCategory}
                                     books={books.filter(book => book.shelf === 'wantToRead')} name={'Want to Read'}
                                     sub={'Books i want to  read'}/>
                <CategoriesComponent onChangeCategory={ChangeCategory}
                                     books={books.filter(book => book.shelf === 'read')} name={'Read'}
                                     sub={'Books i have done reading'}/>
            </main>
        </Fragment>

    );
};

export default App;
