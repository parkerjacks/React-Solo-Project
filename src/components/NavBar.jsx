import React, { Component } from 'react';
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav'


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled> Disabled </Nav.Link>
                    </Nav.Item>
                </Nav>





            </div>



        );
    }
}

export default NavBar;