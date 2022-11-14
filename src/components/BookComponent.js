import {Fragment} from "react";

const BookComponent = (props) => {
    return (
        <Fragment>
            <div className="book mg-b-20 card bd rounded pd-20">
                <div className="book-thumb d-flex justify-content-center" >
                    <img src={props.book.imageLinks.thumbnail} alt=""/>
                </div>
                <div className="pd-20 tx-center">
                    <h6>{props.book.title}</h6>
                    {props.book.subtitle ? <p className="op-6">{props.book.subtitle}</p> :
                        <p className="op-6">No Subtitle Available</p>}
                </div>
            </div>
        </Fragment>
    )
}

export default BookComponent
