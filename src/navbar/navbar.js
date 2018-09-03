import React, { Component } from 'react';
import NavMenu from './navbar-menu';


class NavBar extends Component {

    render() {
        let menu = [
            { titulo: "Home", link: "/" },
            { titulo: "Sobre", link: "/about" },
            { titulo: "Contato", link: "/contact" },
        ];

        let cor = "nav-wrapper " + this.props.cor;
        return (
            <nav>
                <div className={cor}>
                    <div className="container">
                        <a href="" className="brand-logo">{this.props.titulo}</a>
                        <NavMenu menu={menu} />
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;    