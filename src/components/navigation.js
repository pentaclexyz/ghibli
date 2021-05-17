import React, {Component} from "react"
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return <nav>
            <ul className={"nav-content"}>
                <li><Link to="/ethereum">Ethereum</Link></li>
                <li><Link to="/solana">Solana</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    }
}

export default Navigation
