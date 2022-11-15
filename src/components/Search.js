
const Search = (props) => {


    return (
        <section className={"search-bar mg-y-30"}>
            <div className="container">
                <h5 className={"tx-body tx-12 pd-y-5"}>Search For New Books</h5>
                <div className="search-box pre-input flex-fill ">
                    <span className="pre-icon"><i className="ri-search-line"></i></span>
                    <input type="text" className="form-control xl" placeholder=""/>
                </div>
            </div>
        </section>
    )
}

export default Search
