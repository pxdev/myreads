import {Fragment} from "react";

const BookComponent = (props) => {
    return (
        <Fragment>
            <div className="book card">

                <h3>{props.title}</h3>
                <p className="op-6">{props.subtitle}</p>


            </div>
        </Fragment>
    )
}

export default BookComponent
