import React, {Fragment, useEffect, useState} from "react";
import * as BooksAPI from "../utils/BooksAPI";
import CategoriesComponent from "./CategoriesComponent";

const Search = (props) => {

    const [query, setQuery] = useState("");

    const [searchBooks, setSearchBooks] = useState([]);

    const getSearchBooks = async () => {
        if (query) {
            const res = await BooksAPI.search(query)

            if (typeof res === 'undefined' || res.error) {
                setSearchBooks([])
            } else {
                res.map((book) => {
                    let bookId = book.id;
                    let bookCategory = props.originalBooks.find((element) => element.id === bookId);
                    if (bookCategory) {
                        book['shelf'] = bookCategory.shelf
                    }
                    return book;
                })
                setSearchBooks(res)
            }
        }
    };

    useEffect(() => {
        getSearchBooks();
    });

    const updateQuery = (query) => {

        setQuery(query);

        if (query === "") {
            setSearchBooks([])
        } else {
            getSearchBooks()
        }
    };

    const clearQuery = () => {
        updateQuery("");
        setSearchBooks([])
    };


    return (
        <Fragment>
            <main className={"container"}>
                <div className="search-component">

                    <section className={"search-bar pd-y-30"}>
                        <div className="search-box pre-input flex-fill ">
                            <span className="pre-icon"><i className="ri-search-line"/></span>
                            <input value={query} onChange={(e) => updateQuery(e.target.value)} type="text"
                                   className="form-control xl" placeholder="Search for books ..."/>

                            <button className={"btn clear"} onClick={clearQuery}><i
                                className={query ? "ri-close-circle-line tx-22 tx-danger" : ""}/>
                            </button>

                        </div>
                        <p className={"tx-12 op-8 pd-y-5"}>Search by title, author, or ISBN</p>
                    </section>

                    <CategoriesComponent isSearch={true} onChangeCategory={props.onChangeCategory}
                                         books={searchBooks} name={'Search Results'}
                                         sub={query ? "Search Results for " + query : "No Keywords Provided"}/>


                </div>
            </main>
        </Fragment>
    )
}

export default Search
