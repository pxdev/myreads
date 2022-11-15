const Loading = (props) => {

    return (
        <div className="app-loading">
            <div className="tx-center pd-50 bg-white rounded shadow">
                <svg xmlns="http://www.w3.org/2000/svg" height="138px" width="138px" viewBox="0 0 138 138"
                     className="mg-b-15 pl">
                    <defs>
                        <linearGradient y2="1" x2="0" y1="0" x1="0" id="pl-grad">
                            <stop stop-color="#3A99B9" offset="0%"></stop>
                            <stop stop-color="#35BCE9" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <circle stroke-linecap="round" stroke-width="16" stroke="hsla(0,10%,10%,0.1)" fill="none" cy="64"
                            cx="64" r="56"
                            className="pl__ring"></circle>
                    <path stroke-dashoffset="10" stroke-dasharray="44 1111" stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="16" stroke="url(#pl-grad)" fill="none"
                          d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
                          className="pl__worm"></path>
                </svg>
                <h3 className="tx-info">Loading</h3>
                <p className="op-6">Loading contents please wait ..</p>
            </div>
        </div>
    )
}

export default Loading
