import {Fragment} from "react";
import BookComponent from "./BookComponent";

const CategoriesComponent = (props) => {



    return (
        <Fragment>
            <h2>{props.name}</h2>

            <div className="d-flex">
                <BookComponent title={'Book1'} subtitle={'subtitle'}></BookComponent>
            </div>


        </Fragment>
    )
}

export default CategoriesComponent
