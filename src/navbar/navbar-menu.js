import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { menuAtivo: '/home' };
        this.alteraActive = this.alteraActive.bind(this);
    }

    alteraActive(link, self) {
        self.setState({ menuAtivo: link });
        console.log(this.state)
    }

    render() {
        let self = this;
        let lista = this.props.menu.map(function (value, index) {
            return (
                <li key={index} className={self.state.menuAtivo === value.link ? 'active' : ''}>
                    <a href={value.link}>{value.titulo}</a>
                </li>
            );
        });

        return (
            <ul id="nav-mobile" className="right">
                {lista}
            </ul>
        );
    }
}

export default NavMenu;    