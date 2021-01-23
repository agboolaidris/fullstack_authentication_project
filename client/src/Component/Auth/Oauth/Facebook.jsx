import React from 'react'
import {Facebook} from '../../../Action/AuthAction'
import {connect} from 'react-redux'

function Facebooks({Facebook}) {
const handleClick = ()=>{
    Facebook()
}

    return (
        <button onClick={handleClick}>
           Facebook 
        </button>
    )

    }
export default connect(null, {Facebook})(Facebooks)
