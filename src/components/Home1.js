import React from "react";
import Typewriter from "typewriter-effect";
import Brahmaji from "./Brahmaji.jpeg";

function Home1() {
  return (
    <div>
      <div className="my-3 d-flex">
        <img src={Brahmaji} alt="Rc" style={{ maxHeight: "90vh", width: "30%" }} />
        <div className="text-center text-light" style={{ marginTop: "10%", marginLeft: "15%" }}>
          <h1>HAI FRIENDS!</h1>
          <h1 class="text-danger">I'M Brahmaji
        </h1>
        <h3 class="text-danger mt-5">
        <Typewriter
            options={{
              strings: ["Web Developer","AI","Competative Coder"],
              autoStart: true,
              loop: true,
            }}
          />

        </h3>
        </div>
      </div>
    </div>
  );
}

export default Home1;
