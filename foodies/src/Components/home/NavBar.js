import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { observer } from "mobx-react";

import authStore from "../../stores/authStore";

function NavBar() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="home">Knights Kitchen</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="categories">Categories</Nav.Link>
              <Nav.Link href="home">pricing</Nav.Link>
              {!authStore.user ? (
                <>
                  <SignInModal />
                  
                  <SignUpModal />
                </>
              ) : (
                <Nav.Link
                  href="home"
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
