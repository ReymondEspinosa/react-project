import React from 'react'

export const GlobalTextField = prop => {
    return (
        <div className="form-group row mb-1">
            <label className="has-float-label col-12 p-0">
                <input className="form-control rounded-0" autoComplete="off" type={prop.type} 
                    name={prop.name} value={prop.value} onFocus={prop.onFocus} 
                    onChange={prop.onChange} onBlur={prop.onBlur}/>
                <span className={prop.spanClass}>{prop.spanName}</span>
            </label>
        </div>
    )
}

export const GlobalCheckbox = prop => {
    return (
        <div className="form-check mb-1 mr-sm-2">
            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                <input checked={prop.checked} type="checkbox" className="custom-control-input" id={prop.name} 
                name={prop.name} onChange={prop.onChange}/>
                <label className="custom-control-label" htmlFor={prop.name}>Remember me</label>
            </div>
        </div>
    )
}