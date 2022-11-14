import {Fragment} from "react";
import BookComponent from "./BookComponent";

const CategoriesComponent = (props) => {

    return (
        <Fragment>
            <div className="category mg-b-30 bd-b pd-b-30">
                <div className="d-flex justify-content-between align-items-center mg-b-20">
                    <div className="pd-b-10">
                        <h3 className="tx-22">{props.name} </h3>
                        <p className="tx-14 op-6">{props.sub}</p>
                    </div>
                    <p>Total Books <span className="tx-secondary tx-body">({props.books.length})</span></p>
                </div>

                <div className="d-flex flex-wrap category-books gap-25">
                    {props.books.map((book, index) => (<BookComponent key={book.id + index} book={book}/>))}
                </div>
            </div>
        </Fragment>
    )
}

export default CategoriesComponent
