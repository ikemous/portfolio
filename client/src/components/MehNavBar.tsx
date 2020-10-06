import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
 

function MehNavBar() {
    const location = useLocation();
    return (
        <Navbar expand="lg">
            <Navbar.Brand id="top">Ikemous -&#160;
                {
                    location.pathname==="/"?"Home":
                    location.pathname==="/portfolio"?"Portfolio":
                    location.pathname==="/testimonials"?"Testimonials":
                    ""
                }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="this-nav-basic" />
            <Navbar.Collapse id="this-nav-basic" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/" className={location.pathname === "/"?"active":""}>Home</Nav.Link>
                    <Nav.Link href="/portfolio" className={location.pathname === "/portfolio"?"active":""}>Portfolio</Nav.Link>
                    <Nav.Link href="/testimonials" className={location.pathname === "/testimonials"?"active":""}>Testimonials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MehNavBar;