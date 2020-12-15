import React from 'react';



const Input = props => {
    return(
        <form onSubmit={props.loadweather} className="input-wrap">
            <div>{props.error ? error() : ""}</div>
            <div className="input-group">      
                <input
                    type="text"
                    className="form-control search-bar"
                    placeholder="Enter city..."
                    aria-label=""
                    aria-describedby="button-addon2"
                    name="query"
                />
                <div className="input-group-append">
                    <button
                    className="btn"
                    type="button"
                    id="button-addon2">Search</button>
                </div>
            </div>
        </form>
    )
}

const error = props => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City and Country...!
      </div>
    );
  };

export default Input;
