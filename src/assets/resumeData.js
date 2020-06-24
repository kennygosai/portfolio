/**
 * Details about your resume
 * @constant
 * @type {JSON}
 * @default
*/
export const resumeData = {
  main: {
    name: "Kenny Gosai",
    occupation: "Software Developer",
    description: "",
    image: "profilepic.jpg",
    contactmessage:
      "Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, give me a shout by using the form below.",
    address: {
      street: "(Your Street)",
      city: "Toronto",
      state: "(Your State)",
      zip: "(Your Zip/Postal Code)",
    },
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/kenny-gosai-a27030187/",
        className: "fa fa-linkedin",
      },
      {
        name: "github",
        url: "https://github.com/kennygosai",
        className: "fa fa-github",
      },
    ],
  },
  resume: {
    skillmessage:
      "Here you can create a short write-up of your skills to show off to employers",
    education: [
      {
        school: "Lassonde School of Engineering, York University",
        degree: "BSc. in Computer Science",
        graduated: "April 2020",
        description: "",
      },
    ],
    work: [
      {
        company: "Surge-ERP",
        title: "Graphic Designer ",
        years: "Feb 2019 - Feb-2020",
        description:
          "Utilized Adobe Photoshop and Adobe Illustrator to design and create company branding material, promotional event material and game development artwork. Created and managed additional website design aspects on Wordpress. Worked with ReactJS, Node.js and Python to perform image manipulation. Used Shotcut to create a promotional video for upcoming project releases while collaborating with other Graphic Designers.",
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: "FlowFina",
        category:
          "Uses ReactJS and a Firebase backend to help plan out Financial Goals. Uses Cloud Functions to keep track of payments and interest applied to the goal.",
        image: "flowfina.png",
        url: "https://www.flowfina.com",
      },
      {
        title: "Weather Checker",
        category:
          "Uses ReactJS and a Node.js Express server to get the weather forecast of a specific location. Also the location is saved using cookies for faster future uses.",
        image: "weatherChecker.png",
        url: "https://kennysweatherchecker.herokuapp.com/",
        github: "https://github.com/kennygosai/weather_checker",
      },
      {
        title: "Portfolio",
        category: "Created using ReactJS, See the code of this website!",
        image: "portfolio.png",
        github: "https://github.com/kennygosai/portfolio",
      },
    ],
  },
};
