import React, {useState, useEffect, Fragment} from "react";
import { Route, Routes } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import * as BooksAPI from "../utils/BooksAPI";
import CategoriesComponent from "./CategoriesComponent";
import Loading from "./Loading";
import Search from "./Search";
import PageHeader from "./ui/PageHeader";

const App = () => {

    const [isLoading, setLoading ] = useState(false);

    let navigate = useNavigate();

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        setLoading(true);
        const res = await BooksAPI.getAll();
        setBooks(res);
        setLoading(false);
    };

    useEffect(() => {
        getBooks();
    }, []);

    const ChangeCategory = (book, category) => {
        BooksAPI.update(book, category).then(async ()=>{
           await getBooks();
        });
        navigate('/');
    }



    return (
        <Fragment>

            {isLoading ? <Loading /> : ""}

            <PageHeader />

            <Routes>
                <Route path="/search" element={<Search onChangeCategory={ChangeCategory} originalBooks={books} />}/>
                <Route path={"/"} element={
                    <div className={"homePage"}>

                        <main className="container main-categories">
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
                    </div>
                } />
            </Routes>


        </Fragment>
    );
};

export default App;
