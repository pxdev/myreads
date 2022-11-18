import NoImage from '../../assets/no_data_list.png'
const NoData = (props) => {


    return (
        <div className="flex-fill tx-center no-data">
            <div><img src={NoImage} className="mg-x-auto" width={300} alt="" /></div>
                <h4 className="tx-body tx-medium">{props.text}</h4>
                <p className="mg-b-0 op-6">{props.sub}</p>
        </div>
    )
}

export default NoData
