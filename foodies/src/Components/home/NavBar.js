import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import SignUpModal from "../auth/SignUpModal";
import SignInModal from "../auth/SignInModal";
import { observer } from "mobx-react";

import authStore from "../../stores/authStore";

function NavBar() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Knights Kitchen</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="category">Categories</Nav.Link>
              <Nav.Link href="/">pricing</Nav.Link>
              {!authStore.user ? (
                <>
                  <SignInModal />

                  <SignUpModal />
                </>
              ) : (
                <Nav.Link
                  href=""
                  variant="contained"
                  justify="space-between"
                  onClick={authStore.signOut}
                >
                  Signout
                </Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default observer(NavBar);
