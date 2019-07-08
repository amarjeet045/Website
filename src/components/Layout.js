import React from 'react'
import {container} from 'react-bootstrap';

function Layout(props) {
    return (
        <div>
            <container>
                {props.children}
            </container>
            
        </div>
    )
}
export default  Layout;