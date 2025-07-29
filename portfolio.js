/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yoddikko",
  title: "Hi, I'm Ale",
  subTitle: emoji(
    "A passionate iOS Developer 🚀 having an experience in building mobile applications with Swift."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xQOp-skncx-j7neIY_iMbyJ5SqhGXGVo/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Yoddikko",
  linkedin: "https://www.linkedin.com/in/alessio-iodice-4a22131b0/",
  gmail: "yodikko@protonmail.com",
  //medium: "https://medium.com/@saadpasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Native iOS appications",
  skills: [
    emoji(
      "⚡ Develop highly interactive iOS applications"
    ),
    emoji(
      "🤖 Integration of different frameworks like CoreData, CoreML, AVFoundation, SceneKit, ARKit and much more"
    ),
    emoji(
      "🛸 I enjoy being creative and bringing my artistic vision into my projects. My passion for innovation and creativity drives me to always find original and surprising solutions"
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
    /*
    {
      skillName: "Apple ecosystem",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Linux ecosystem",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows ecosystem",
      fontAwesomeClassname: "fab fa-windows"
    },
    */
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Università degli Studi di Napoli Parthenope",
      logo: require("./assets/images/parthenopeLogo.png"),
      subHeader: "Bachelor's Degree in Computer Engineering",
      duration: "September 2019 - Now",
      desc: "Still working it ;)",
      descBullets: [
      "Studied C++"
      ]
    },
    {
      schoolName: "Apple Developer Academy - Pier Program",
      logo: require("./assets/images/developeracademy.png"),
      subHeader: "",
      duration: "July 2022 - June 2023",
      desc: " An educational program where the learning environment is based on real work experience. Throughout the year I worked on a single project with the same team, using agile methodologies and interfacing with a stake holder. My role was Backend Developer.",
      descBullets: ["Agile methodologies, Scrum framework" , " CoreData framework, UIKit framework, FileMaker, API calls and more"]
    },

    {
      schoolName: "Apple Developer Academy - Student Year",
      logo: require("./assets/images/developeracademy.png"),
      subHeader: "",
      duration: "September 2021 - June 2022",
      desc: "The 9-month experience at the Apple academy was an excellent opportunity. First of all, it was extremely useful because I learned how to develop native iOS applications. In addition to learning the code side, I also received notions of UI/UX and business. In addition to these hard skills I also had the opportunity to challenge myself, improving in English communication, improving in teamwork, and finally improving my my storytelling skills. The Apple Developer Academy is a partnership between the University of Napoli Federico II and Apple. Training at the Academy is aimed at developing apps for the world’s most innovative and vibrant app ecosystem. The program focuses on software development, startup creation and app design with an emphasis on creativity and collaboration",
      descBullets: ["Native iOS app development", "CBL process and app ideation process", "UI/UX prototyping and designing", "App business and marketing", "SwiftUI and all the other Swift frameworks"]
    },
    {
      schoolName: "iOS Foundation Program - advanced course",
      logo: require("./assets/images/foundationLogo.png"),
      subHeader: "",
      duration: "June 2020 - July 2020",
      desc: "It was a two-month experience where we delved into application development also for tvOS and watchOS.",
      descBullets: ["WatchOS and TvOS development", "CreateML and CoreML (machine learning)"]
    },
    {
      schoolName: "iOS Foundation Program - basic course",
      logo: require("./assets/images/foundationLogo.png"),
      subHeader: "",
      duration: "November 2019 - December 2019",
      desc: "It was a month-long experience where we were introduced to application development. It was in collaboration with the university 'Università degli studi di Napoli Parthenope'",
      descBullets: ["Storytelling and presentation", "App business and marketing", "iOS app development"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "iOS Developer",
      company: "Apple Developer Academy | Pier Program",
      companylogo: require("./assets/images/developeracademy.png"),
      date: "July 2022 – June 2023",
      desc: "During my second year at the Apple Developer Academy (Pier program) I worked on a suite of apps developed in collaboration with Barefoot College International. Due to the longevity and requirements of the project, I had to take over a 4-year-old codebase aimed at supporting older iOS versions. For this reason, the main framework used for building the interface was UIKit, while for data management I used Filemaker as the online database and CoreData as the local one.",
      descBullets: [
      ]
    },
    {
      role: "QA Automation Engineer",
      company: "M47 Labs",
      companylogo: require("./assets/images/m47_labs_logo.png"),
      date: "August 2023 – Present",
      desc: "M47 Labs is a multicultural AI centered company based in Spain, contributing to innovative projects in a diverse and dynamic environment.",
      descBullets: [
      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
        {
      image: require("./assets/images/sakhilogo.png"),
      projectName: "Barefoot Suite",
      projectDesc: "This is an ongoing project inherited from the previous years’ Piers, born from the collaboration between the Academy and Barefoot College. The barefoot suite is made of two apps and a framework. The main app is Sakhi. I was responsible for turning the app completely offline, managing the data and synchronisation with the server. I did refactoring and worked mainly on the logic of the app. The project is done in UIKit.",
      footerLink: [
        {
          name: "More info",
          url: "https://www.behance.net/gallery/172661547/Barefoot-Suite-iOS-iPadOS-applications"
        }
      ]

    },
    {
      image: require("./assets/images/yoddAiChatLogo.png"),
      projectName: "Yodd AI Chat",
      projectDesc: "This is my first solo important open source project. It was built in three weeks. It's a frontend app for the famous OpenAI's chatGPT API. \n Sadly the project is discountinued due to the fact that now the API are not free anymore. The app allows you to have a quick interaction with GPT and allows you to generate images using DALL-E. Completely done with SwiftUI and using the MVVM pattern, CoreData and SwiftLint.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Yoddikko/yoddChatGPT"
        },
        {
          name: "Appstore",
          url: "https://apps.apple.com/us/app/yoddaichat/id1672839275"
        }
        //  you can add extra buttons here.
      ]

    },
    {
      image: require("./assets/images/muralinklogo.png"),
      projectName: "Muralink",
      projectDesc: "Walk through the city discovering the murals that surround you, discover the details in AR and collect them. This app was made with the Carismatica team during my student year at the Apple Academy. It was made using SwiftUI, ARKit and Combine.",
      footerLink: [
        {
          name: "Appstore",
          url: "https://apps.apple.com/ag/app/muralink/id6443503883"
        }
      ]
    },
    {
      image: require("./assets/images/aslrecognizerlogo.png"),
      projectName: "ASL Recognizer",
      projectDesc: "A project made in just one week as deliverable, that analyses and recognises the alphabet in sign language using machine learning (CreateML and CoreML). It was made during my student year at the Apple Academy.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Yoddikko/ASL-Recognizer"
        }
      ]
    },
    {
      image: require("./assets/images/nowlogo.png"),
      projectName: "Now.",
      projectDesc: "WWDC 2023 WINNER  - This is a short experience made for the WWDC 2023 Swift challenge made in less than a week. The experience has to be max 3 minutes. Now. is a safe space where you may pause, unwind, and contemplate about the present. It sticks to the principles of Stoic philosophy.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Yoddikko/Now."
        },
        {
          name: "Video",
          url: "https://www.youtube.com/watch?v=p4cmUtHqRlM&ab_channel=Alessio"
        }

        
      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 2",
      subtitle:
        "",
      image: require("./assets/images/awsbadge2.png"),
      imageAlt: "AWS logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/fb3b2d67-f006-4dcf-9492-973230d48565/linked_in?t=rw6q51"
        }
      ]
    },
    {
      title: " WWDC SWIFT CHALLENGE 2023 WINNER",
      subtitle: "",
      image: require("./assets/images/wwdc2023logo.png"),
      imageAlt: "WWDC 2023 logo",
      footerLink: [
        {name: "Project", url: "https://github.com/Yoddikko/Now"}
      ]
    },
    {
      title: "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
      subtitle:
        "",
      image: require("./assets/images/awsbadge.png"),
      imageAlt: "AWS logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/533b8455-e410-45b5-bf7b-234a8c5ed5e9/linked_in_profile"
        }
      ]
    },
    {
      title: "Introduction to cybersecurity",
      subtitle: "",
      image: require("./assets/images/ciscointroductiontocybersecurity.png"),
      imageAlt: "Cisco Introduction to cybersecurity badge logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/9c4b7782-a924-4a6d-84d3-a5f936b7fab3/linked_in_profile"}
      ]
    },
    {
      title: "CCNA: Introduction to Networks",
      subtitle: "",
      image: require("./assets/images/CiscoCCNA.png"),
      imageAlt: "Cisco CCNA badge logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/ac2e0ab9-9687-474b-9b8c-3eb67235bb1c?source=linked_in_profile"}
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+39-3382183105",
  email_address: "yodikko@protonmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
