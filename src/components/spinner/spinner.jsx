import "./spinner.css"

function Spinner() {
    return (<div className="loading-page">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>   
        </div>
    )  
}

export default Spinner