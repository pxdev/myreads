import React, {Fragment, useEffect, useState} from "react";
import * as BooksAPI from "../utils/BooksAPI";
import CategoriesComponent from "./CategoriesComponent";
import {useNavigate} from "react-router-dom";


const Search = (props) => {

    let navigate = useNavigate();

    const closeSearch = () => {
        navigate("/");
        getBooks();
    }

    const [query, setQuery] = useState("");

    const [books, setBooks] = useState([]);

    const getBooks = async () => {

        const res = await BooksAPI.search(query)

        if (typeof res ==='undefined') {
            setBooks([])
        } else {
            setBooks(res)
        }

        console.log(books)

    };

    useEffect(() => {
        getBooks();
    }, []);

    const updateQuery = (query) => {
        setQuery(query.trim());
        getBooks()
    };

    const clearQuery = () => {
        updateQuery("");
    };

    // update book category
    const ChangeCategory = (book, category) => {
        BooksAPI.update(book, category).then(async ()=>{
            await getBooks();
        });


    }

    return (
        <div className="search-component">

            <button onClick={closeSearch} className={"btn close-btn"}><i className="ri-close-line tx-42"/></button>

            <section className={"search-bar mg-t-30"}>
                <div className="container">
                    <h5 className={"tx-body tx-12 pd-y-5"}>Search For New Books</h5>
                    <div className="search-box pre-input flex-fill ">
                        <span className="pre-icon"><i className="ri-search-line"/></span>
                        <input value={query} onChange={(e) => updateQuery(e.target.value)} type="text"
                               className="form-control xl" placeholder="Search for books ..."/>
                    </div>
                </div>
            </section>


            <main className="container main">

                <CategoriesComponent isSearch={true} onChangeCategory={ChangeCategory}
                                     books={books} name={'Read'}
                                     sub={'Books i have done reading'}/>

            </main>
        </div>
    )
}

export default Search
