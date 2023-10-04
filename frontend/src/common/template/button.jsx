import React from "react";
import If from "../operator/If";

import './Button.css'

export default props => {
    return (
        <If test={!props.hide}>
            <button className={'btn'}
            style={{
                backgroundColor:`${props.backgroundColor || 'blue'}`,
                color:`${props.color || 'white'}`,
                width:`${props.width || '10px'}`,
                height:`${props.height || '10px'}`     
            }}
                onClick={props.onClick}>
                {props.children}
            </button>
        </If>
    )
}
