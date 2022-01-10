import React from "react";
import "./About.css";
import Typical from "react-typical";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="layout2">
        <div className="about-right">
          <img src="me.png" alt="" />
        </div>
        <h1 className="title">About Me</h1>
        <div className="about-left">
          <p>
            My dream is to be a developer since high school. I enjoy coding to
            solve problems and achieve goals. As of now I can code in plenty of
            programming languages and frameworks.
          </p>
          <p>
            My front-end experiences:
            <Typical
              wrapper="b"
              loop={Infinity}
              steps={[
                " HTML",
                1000,
                " CSS",
                1000,
                " JavaScript",
                1000,
                " React JS",
                1000,
                " Express JS",
                1000,
                " Sass",
                1000,
              ]}
            />
          </p>
          <p>
            My back-end experiences:
            <Typical
              wrapper="b"
              loop={Infinity}
              steps={[
                " Node JS",
                1000,
                " Java",
                1000,
                " Spring Boot",
                1000,
                " Python",
                1000,
              ]}
            />
          </p>
          <button>
            <a href="Ricky_Wang_Resume.docx" download="Ricky_Wang_Resume.docx">
              Take a look at my resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
