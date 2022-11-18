import {Fragment, useState, useEffect, useRef} from "react";
import NoImage from '../assets/no_data_list.png'

const BookComponent = (props) => {
    /*
        dropdown method to toggle the book card dropdown menu
        also i have added an event listener on the document to close the dropdown
        if clicked outside the dropdown icon
        https://blog.logrocket.com/detect-click-outside-react-component-how-to/
     */
    const dropDownRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setDropDown(false)
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    let [isDropDown, setDropDown] = useState(false)

    const toggleDropDown = (e) => {
        e.preventDefault()
        setDropDown(isDropDown = !isDropDown)
    }
    /*
     props method to be sent to the app to handele category change.
     */
    const changeToCategory = (category) => {
       props.changeBookCategory(props.book, category)
    }


    return (
        <Fragment>
            <div className="book rounded shadow bd" >
                <div className="d-flex justify-content-end pd-x-15">
                    <div className={isDropDown ? 'dropdown shown' : 'dropdown'}>
                        <button onClick={toggleDropDown} className="btn d-flex align-items-center dropdown-btn pd-0" ref={dropDownRef}>
                             <i className={isDropDown ? 'ri-settings-3-line tx-22 tx-secondary' : 'ri-settings-3-line  tx-22'} />
                        </button>
                        <div className="dropdown-menu">
                            <h3 className="tx-12 pd-10 tx-body op-6">Move to...</h3>

                            {
                                props.book.shelf === 'currentlyReading' ? ''
                                    : <button type={"button"} className="btn tx-start menu-item btn-block"
                                              onClick={(e) => changeToCategory('currentlyReading')}>Currently
                                        Reading</button>
                            }
                            {
                                props.book.shelf === 'wantToRead' ? ''
                                    : <button type={"button"} className="btn tx-start menu-item btn-block"
                                              onClick={(e) => changeToCategory('wantToRead')}>Want to Read</button>
                            }
                            {
                                props.book.shelf === 'read' ? ''
                                    : <button type={"button"} className="btn tx-start menu-item btn-block"
                                              onClick={(e) => changeToCategory('read')}>Read</button>
                            }
                            {
                                props.book.shelf === '' || !props.book.shelf ? ''
                                    : <button type={"button"} className="btn tx-start  menu-item btn-block"
                                              onClick={(e) => changeToCategory('none')}><span
                                        className={"tx-danger"}>Remove</span></button>
                            }

                        </div>
                    </div>
                </div>
                <div className="book-thumb pd-10 rounded d-flex justify-content-center">
                    <img className="rounded" src={props.book.imageLinks ? props.book.imageLinks.thumbnail : NoImage} alt=""/>
                </div>
                <div className="pd-20 tx-center">
                    <h4 className="mg-b-5 tx-14 tx-secondary">{props.book.title}</h4>
                    <div className="mg-b-15">
                        {props.book.subtitle ? <p className="op-6 tx-12">{props.book.subtitle}</p> :
                            <p className="op-6 tx-12">No Subtitle</p>}
                    </div>
                    <div className="d-flex flex-wrap justify-content-center gap-5">
                        {props.book.authors ? props.book.authors.map((author, index) => (
                            <div key={index} className="tx-12 bg-white bd rounded pd-5">{author}</div>
                        )) : ""}
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

export default BookComponent
