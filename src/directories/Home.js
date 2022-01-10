import React from "react";
import Typical from "react-typical";
import "./Home.css";

export default function Home() {
  return (
    <section class="home" id="home">
      <div class="layout">
        <div class="intro">
          <div class="intro1">Hello! My name is</div>
          <div class="intro2">Ricky Wang</div>
          <div class="intro3">I'm a Full Stack Developer</div>
          <div class="intro4">
            I'm good at
            <span class="intro5">
              <Typical
                loop={Infinity}
                steps={[
                  "Integration of Front End and Back End Development",
                  1000,
                  "Asynchronous/Object-orientated Programming",
                  1000,
                  "SPA Design and Production",
                  1000,
                  "RESTFUL APIs and Web Services",
                  1000,
                  "React + Node JS Development",
                  1000,
                  "Java/J2EE and Spring Boot applications",
                  1000,
                ]}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
