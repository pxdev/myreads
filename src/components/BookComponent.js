import {Fragment, useState} from "react";

const BookComponent = (props) => {


    let [isDropDown, setDropDown] = useState(false)

    const toggleDropDown = ()=>{
        setDropDown = ! setDropDown
    }


    return (
        <Fragment>
            <div className="book mg-b-20 card bd rounded ">
                <div className="d-flex justify-content-between align-items-center pd-10">
                    <div className="d-flex">
                        {props.book.categories ? props.book.categories.map((category, index) => (
                            <div key={category + index} className="tx-12 bg-gray bd-l pd-5">{category}</div>
                        )) : "No Categories"}
                    </div>

                    <div className={isDropDown ? 'dropdown shown' : 'dropdown'}>
                        <button onClick={toggleDropDown} className="btn dropdown-btn pd-0"><i className="ri-more-2-fill tx-18"></i></button>
                        <div className="dropdown-menu">
                            <a href="#" className="menu-item">1</a>
                            <a href="#" className="menu-item">1</a>
                        </div>
                    </div>
                </div>
                <div className="book-thumb pd-30 rounded bg-gray d-flex justify-content-center">
                    <img className="rounded" src={props.book.imageLinks.thumbnail} alt=""/>
                </div>
                <div className="pd-20 tx-center">
                    <h4 className="mg-b-5">{props.book.title}</h4>
                    <div className="mg-b-15">
                        {props.book.subtitle ? <p className="op-6">{props.book.subtitle}</p> :
                            <p className="op-6">No Subtitle</p>}
                    </div>
                    <div className="d-flex flex-wrap justify-content-center gap-5">
                        {props.book.authors.map((author, index) => (
                            <div key={index} className="tx-12 bg-gray bd rounded pd-5">{author}</div>
                        ))}
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

export default BookComponent
