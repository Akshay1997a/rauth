import React from "react";
import logo from "../logo.svg";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";

function Header() {
  const { user, signOut } = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ padding: "10px" }}>
        <Navbar.Brand href="#home">React Auth</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user.email}</a>
          </Navbar.Text>
          <div style={{ padding: "5px" }} />
          <Button onClick={signOut}>Sing out</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
