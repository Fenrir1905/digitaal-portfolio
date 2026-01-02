import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "BUUT Android application",
    description: "Mobile application developed as a school project for a small non-profit organization that rents out a limited number of boats. Users could reserve boats using time slots, making sure that there is an even usage of the boat batteries. Administrators had access to an overview of all reservations and could modify them. Authentication was handled via Auth0.",
    technologies: ["Kotlin", "Retrofit", "MongoDB", "Auth0", "Jira"],
    type: "School project in a team of 7 plus 4 students from the networking specialization (for the Ops part)",
    learnings: "Gained experience with Android development in Kotlin, building REST APIs with Retrofit, and integrating external authentication via Auth0. We also worked fully according to Scrum (using Jira), and every two weeks a different team member was appointed as the product owner, responsible for managing the sprint and deciding what will be worked on.",
    challenges: "Correctly managing reservation logic and battery usage, as well as implementing role-based access for administrators. Additionally, implementing an offline mode so users could view their reservations without an internet connection was challenging. Finally, Kotlin was largely self-taught, as we had never worked with it before this project. Each week we received some info on best practices and how to implement key features.",
    shortdescription: "Android application for boat reservations with admin functionalities."
  },
  {
    id: 2,
    title: "BUUT web application",
    description: "Fullstack web application developed as a school project for the same non-profit organization as the Android application. Users could reserve boats using time slots, while administrators had an overview of all reservations and could manage them. The application was built with a Blazor WASM frontend and a .NET backend, using Auth0 for authentication.",
    technologies: ["C#/.NET", "Blazor WASM", "MongoDB", "Auth0", "Jira"],
    type: "School project in a team of 7 plus 4 students from the networking specialization (for the Ops part)",
    learnings: "Gained experience with fullstack development in .NET and Blazor WASM, and securing applications using Auth0. The team worked fully according to Scrum (with Jira), and every two weeks a different team member took on the role of product owner, managing the sprint and determining its scope.",
    challenges: "Correctly setting up authentication and authorization using Auth0. Additionally, C# and Blazor were mostly self-taught, as we had not worked with them before this project. Weekly guidance was provided on best practices and correct implementation approaches.",
    shortdescription: "Fullstack web application for boat reservations with admin management."
  },
  {
    id: 3,
    title: "Festival application",
    description: "Fullstack web application developed as a school project for a fictional festival. Users could register, log in, and purchase tickets. Administrators had access to an overview of sold tickets and could manage them.",
    technologies: ["Java Spring Boot", "Thymeleaf", "Maven", "Apache Tomcat"],
    type: "School project (individual)",
    learnings: "Gained insight into Java Spring Boot with Thymeleaf and deploying applications on Apache Tomcat.",
    challenges: "Correctly implementing user authentication and managing ticket statuses. Personally, working with Java Spring Boot was challenging because I encountered some difficulties with authentication and authorization during the project.",
    shortdescription: "Web application for ticket sales with an admin overview."
  },
  {
    id: 4,
    title: "Order management web application",
    description: "Fullstack web application developed as a team project (5 people) for school. The application allowed suppliers to manage orders with different statuses, while customers could place orders through a user-friendly interface.",
    technologies: ["Java", "JavaFX", "REST API", "MySQL", "JavaScript", "React", "Bootstrap", "JWT"],
    type: "School project in a team of 5",
    learnings: "Experience gained in teamwork, working with JWT authentication, and developing a REST API connected to a modern frontend. This was my first larger project, which required finding a solid project structure and development approach. I also gained experience with (limited) Scrum practices.",
    challenges: "Aligning frontend and backend development within a team and working with Scrum for the first time (in a limited capacity).",
    shortdescription: "Order management application for suppliers and customers."
  },
  {
    id: 5,
    title: "Reservation web application",
    description: "Fullstack web application developed as a school project for managing restaurant reservations. Customers could place reservations, while administrators had an overview of all bookings.",
    technologies: ["TypeScript", "React", "Bootstrap", "NodeJS", "Koa", "MySQL", "REST API"],
    type: "School project (individual)",
    learnings: "Gained experience with TypeScript, NodeJS, and building REST APIs using Koa. This was also my first REST API combined with a self-built frontend.",
    challenges: "Correctly validating reservations and structuring a scalable backend. Additionally, figuring out how to properly implement authentication and authorization was challenging.",
    shortdescription: "Web application for restaurant reservations."
  },
  {
    id: 6,
    title: "Splendor",
    description: "Digital version of the board game Splendor, developed as a team-based school project. The game was built using Java and JavaFX and included persistent storage of game data.",
    technologies: ["Java", "JavaFX", "MySQL"],
    type: "School project in a team of 4",
    learnings: "Applying object-oriented programming in a real project and working with JavaFX for desktop applications. This was my first school project and my first team-based project.",
    challenges: "Correctly translating the game rules into code and synchronizing game states.",
    shortdescription: "Digital version of the board game Splendor."
  }
];
