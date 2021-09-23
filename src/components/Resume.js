import React from "react";
import { Button } from "@material-ui/core";

/**
 * Contact section of the webpage
 *
 * @component
 * @example
 * const data = {
 *   education: [{
 *      school: "Lassonde School of Engineering, York University",
 *      degree: "BSc. in Computer Science",
 *      graduated: "April 2020",
 *      description: "",
 *    }],
 *    work: [{
 *      company: "Surge-ERP",
 *      title: "Graphic Designer ",
 *      years: "Feb 2019 - Feb-2020",
 *      description: "Utilized Adobe Photoshop and Adobe ...",
      },
    ],
 * }
 * return (
 *   <Contact data={data} />
 * )
 */
function Resume(props) {
  const education = props.data.education.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });
  const work = props.data.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="/files/Kenny_Gosai_Resume_092321.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="primary">Download Resume</Button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
