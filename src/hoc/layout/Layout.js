import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
// import classes from './Layout.css'; need web pack
import './Layout.css'

class Layout extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="Toolbar">
                    <div className="Logo">
                        {/* <Logo /> */}
                        LOGO
                    </div>
                    {/* must be componnet later */}
                    <nav>
                        <ul className="NavigationItems">
                            <li className="NavigationItem">
                                <NavLink
                                    to='/'
                                    exact={true}
                                    activeClassName="active">Home</NavLink>
                            </li>
                            <li className="NavigationItem">
                                <NavLink
                                    to='/Products'
                                    exact={true}
                                    activeClassName="active">Products</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main className="Content">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}


export default Layout;