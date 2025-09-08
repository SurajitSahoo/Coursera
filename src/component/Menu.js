import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import { Link } from "react-router";

const Menu=()=>
{
    return(
        <ListGroup className="menu" >
            <Link className="list-group-item list-group-item-action " tag="a"  to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action " tag="a"  to="/Add-Courses" action>Add Courses</Link>
            <Link className="list-group-item list-group-item-action "  tag="a"  to="/View-Courses" action>View Courses</Link>
            <Link className="list-group-item list-group-item-action " tag="a" to="/AbouttUs" action>About Us</Link>
            <Link className="list-group-item list-group-item-action " tag="a"  to="/ContactUs" action>Contact Us</Link>
        </ListGroup>
    )
}
export default Menu;