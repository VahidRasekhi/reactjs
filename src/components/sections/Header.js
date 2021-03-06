import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavItem from "../NavItem";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Project name</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <NavItem activeOnlyWhenExact={true} activeClassName="selected" to="/">Home</NavItem>
                            <NavItem to="/about">About</NavItem>
                            <NavItem to="/contact">Contact</NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
