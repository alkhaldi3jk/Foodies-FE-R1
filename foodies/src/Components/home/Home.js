import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>
        "A recipe has no soul. You, as the cook, must bring soul to the recipe."
      </h1>
      <Link to="/category">
        <Button variant="outline-dark">Join Our Community</Button>
      </Link>
    </div>
  );
}

export default Home;
