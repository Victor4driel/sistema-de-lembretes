import 'modules/bootstrap/dist/css/bootstrap.min.css' //navBar
import 'modules/font-awesome/css/font-awesome.min.css' //icones

import React from 'react'
import Routes from './routes'
import NavBar from '../common/template/navBar'

export default props => {
    return (
        <div className='container'>
            <NavBar/>
            <Routes />
        </div>
    )
}
