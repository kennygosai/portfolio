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
    description: "Currently a Web Developer at Megram Consulting Services Ltd.",
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
        company: "Megram Consulting Services Ltd.",
        title: "Web Developer",
        years: "Aug 2020 - Present",
        description:
          "Responsible for the architecture, design and development of high volume web service applications. Contracted Web Development projects in technologies such as HTML5, CSS, JavaScript, PHP, Drupal & WordPress. Managed company website back-end including plugins, tools, and database. Coordinated websites to be transformed into SEO-friendly and optimized websites.",
      },
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
        title: "Watch List",
        category:
          "Hosted with AWS and uses HTML, CSS, JavaScript, MySQL and a Node.js Express server to allow users to store movies and TV shows they would like to watch.",
        image: "watchlist.png",
        url: "http://watchlist-env.eba-3euhr9p4.us-east-2.elasticbeanstalk.com/",
        github: "https://github.com/kennygosai/watchlist",
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
