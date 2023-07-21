import React, { useState } from "react";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
const MainNav = () => {
  const router = useRouter();

  const [isExpanded, setIsExpanded] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsExpanded(false);
    const searchField = e.target.elements.search.value;
    const query = `/artwork?title=true&q=${searchField}`;
    router.push(query);
  };
  return (
    <>
      <Navbar
        expand="md"
        expanded={isExpanded}
        className="fixed-top navbar-dark bg-primary"
      >
        <Navbar.Brand>Mayank Kumar</Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setIsExpanded(!isExpanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="basic-navbar-nav">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link onClick={() => setIsExpanded(false)}>Home</Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
              <Nav.Link onClick={() => setIsExpanded(false)}>
                Advanced Search
              </Nav.Link>
            </Link>
            &nbsp;
            <Form className="d-flex nav-form" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                name="search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
            &nbsp;
            <NavDropdown title="User Name" id="basic-nav-dropdown">
              <Link href="/favourites" passHref legacyBehavior>
                <Nav.Link>
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={() => setIsExpanded(false)}
                  >
                    Favourites
                  </NavDropdown.Item>
                </Nav.Link>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
    </>
  );
};

export default MainNav;
