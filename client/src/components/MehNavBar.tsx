import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
 

function MehNavBar() {
    const location = useLocation();
    useEffect(() => console.log(location), [location])
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">Ikemous -&#160;
                {
                    location.pathname==="/"?"Home":
                    location.pathname==="/projects"?"Projects":
                    location.pathname==="/testimonials"?"Testimonials":
                    ""
                }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="this-nav-basic" />
            <Navbar.Collapse id="this-nav-basic" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/" className={location.pathname === "/"?"active":""}>Home</Nav.Link>
                    <Nav.Link href="/projects" className={location.pathname === "/projects"?"active":""}>Projects</Nav.Link>
                    <Nav.Link href="/" className={location.pathname === "/testimonials"?"active":""}>Testimonials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MehNavBar;