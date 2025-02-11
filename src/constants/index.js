import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const NAME = "Chandralekha Polepalle"

export const HERO_CONTENT = `Creative Full-Stack Developer with 3+ years of experience delivering scalable backend systems and visually stunning web applications. Proficient in Python, Django, React.js, Java and SQL, with an eye for design and a budding passion for UI/UX development. I believe great design and clean code go hand-in-hand, turning complex ideas into intuitive user experiences. For me, technology isn’t just about writing code—it’s about building solutions that solve challenges, drive growth, and make life easier. Performance optimization, user engagement, and pixel-perfect designs are my forte—all while fueled by good music!`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Shift AI",
    description: `•	Built and optimized shiftfleet.ai, an AI-driven fleet management website, increasing organic traffic by 30% and user engagement by 40% through SEO best practices and analytics integration.
•	Modernized platform infrastructure by integrating CI/CD pipelines (GitHub Actions, Docker, Heroku) and AWS RDS for database scaling, reducing deployment time by 50% and improving system resilience.
•	Developed and optimized a backend system using Django, GraphQL (with Graphene-Django), and PostgreSQL, enabling seamless fleet tracking and automating business workflows for fleet managers.
•	Built and integrated the HouseStack chatbot using LangChain, LLM, and Retrieval-Augmented Generation (RAG), improving customer interactions and enhancing conversational AI performance by 25%.
•	Optimized the chatbot's retrieval pipeline by implementing vector databases (FAISS) and prompt engineering techniques, improving response accuracy and reducing query latency by 40%.
`,
    technologies: ["React.js", "LLM", "Langchain","Postgres", "Figma"],
  },
  {
    year: "2023 - 2024",
    role: "Full Stack Developer",
    company: "Little Blessings Studio",
    description: `Developed a React-based client interaction platform leveraging Azure Blob Storage, improving efficiency and streamlining image delivery. Automated photo organization workflows using Python scripts, significantly reducing processing time and boosting editor productivity. Designed a scalable web application, integrating robust cloud storage solutions for efficient handling of high-resolution media.`,
    technologies: ["HTML", "CSS", "React.js", "Azure"],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Decision Point",
    description: `Developed a custom Planogram tool using Flask, SQL Alchemy, and React, resulting in a significant sales increase for an FMCG client. Implemented Azure Active Directory-based OAuth 2.0 authentication to enhance security. Utilized Azure services, including App Service, Blob Storage, and SQL Server, for deployment and maintenance. Included comprehensive API documentation and Swagger integration for the Planogram tool to improve developer experience and maintainability. Developed a price optimization tool utilizing Spring Boot and AWS Lambda for efficient data processing and serverless calculations.`,
    technologies: ["Python", "Django", "SQL", "Java", "AWS"],
  },
  {
    year: "2020 - 2021",
    role: "Associate Developer",
    company: "IBM",
    description: `Developed an optimized onboarding portal for clients, significantly reducing onboarding time. Built a scalable backend architecture using Python, Django, and SQL to support high concurrency. Utilized VMware vCenter to effectively deploy and decommission over 100 servers.`,
    technologies: ["Python", "Django", "SQL", "VMware","Azure"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: project1,
    description:
      "Developed a professional portfolio website to feature my skills and completed projects.",
    technologies: ["React.js", "Tailwind CSS", "Git"],
    link: "#"
  },
  {
    title: "Shift AI Business Solutions Site",
    image: project2,
    description:
      "Created a website to showcase the services of Shift AI, utilizing basic web technologies for a responsive design. Integrated HubSpot CRM for automated engagement and streamlined client interactions.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma","Heroku"],
    link:"https://github.com/ChandralekhaPolepalle/Shift"
  },
  {
    title: "Architecture Firm Website",
    image: project3,
    description:
      "Developed a web application for branding an architecture firm using the Django framework, showcasing the firm's services and projects. Designed the user interface with Figma to ensure a modern and visually appealing layout for an enhanced user experience.",
    technologies: ["HTML", "CSS", "Django", "Figma"],
    link:"https://www.youtube.com/watch?v=N8Bqr41YWzc"
  },
  {
    title: "E-Commerce Website (Fashion)",
    image: project4,
    description:
      "Developed a clothing store web application using Django with MVC architecture and deployed it on Heroku for easy access. Designed the application's homepage with Procreate to create a visually appealing user experience.",
    technologies: ["HTML", "CSS", "Bootstrap", "Django","Heroku"],
    link:"https://www.youtube.com/watch?v=YFbZKJeTzqI"
  },
];

export const CONTACT = {
  
  phoneNo: "+1 647 640 9969 ",
  email: "chandralekhapolepalle@gmail.com",
  description: "Ready to bring your vision to life? Let’s connect and create something extraordinary together. Whether it's collaboration or a new opportunity, I'm all ears and excited to make it happen!"
};
