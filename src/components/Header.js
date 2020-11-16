import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


export default class Header extends React.Component{

    constructor(props){
        super(props);

        this.navigationMenu = this.navigationMenu.bind(this);

        this.state = {
            handleDrawer: false,
            logged: true
        };
    }

    navigationMenu(){
        this.setState({handleDrawer: !this.state.handleDrawer });
    }

    render(){
        return (
            <Nav
            activeKey="/home"
            onSelect={(selectedKey) => {}}
            >
            <Nav.Item>
                <Nav.Link><Link  to="/home">Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link  to="/users">Users</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>
        );
    }
}