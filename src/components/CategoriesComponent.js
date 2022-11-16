import {Fragment} from "react";
import BookComponent from "./BookComponent";
import NoData from "./NoData";

const CategoriesComponent = (props) => {

    return (
        <Fragment>
            <div className={props.isSearch? "is-search" : ""}>
            <div className="category shadow card bd pd-50 mg-b-30">
                <div className="d-flex justify-content-between align-items-center mg-b-20">
                    <div className="pd-b-10">
                        <h3 className="tx-22">{props.name} </h3>
                        <p className="tx-14 op-6">{props.sub}</p>
                    </div>
                    <p>Total Books <span className="tx-secondary tx-body">({props.books.length})</span></p>
                </div>

                <div className="d-flex flex-wrap category-books">
                    {props.books.length ?
                        props.books.map((book, index) => (<BookComponent changeBookCategory={props.onChangeCategory} key={book.id + index} book={book}/>))
                        :
                        <NoData text='No Books to Display' sub="we cant find any books in this category" />
                    }
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default CategoriesComponent
