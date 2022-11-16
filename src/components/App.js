import React, {useState, useEffect, Fragment} from "react";
import { Link } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";

// UI Components
import * as BooksAPI from "../utils/BooksAPI";
import CategoriesComponent from "./CategoriesComponent";
import Loading from "./Loading";
import Search from "./Search";

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
        BooksAPI.update(book, category).then(async ()=>{
           await getBooks();
        });

    }

    return (
        <Fragment>

            {isLoading ? <Loading /> : ""}

            <header className="header">
                <div className="container">
                    <h1 className="pd-y-20">My Reads</h1>
                    <div className="main-nav">
                        <Routes>
                            <Route path="/search" element={<Search />}/>
                        </Routes>

                        <nav>
                            <ul>
                                <li><Link to={"/"} className={"router-link-active"}>Home</Link></li>
                                <li><Link to={"/search"}>Search</Link></li>
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
