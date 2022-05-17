import calculator from "../images/calculator.png"
import connectFour from "../images/connect-four.png"
import morseCode from "../images/morse-code-translator.png"
import positivePup from "../images/positive-pup.png"
import punkApi from "../images/punk-api.png"
import ticketTracker from "../images/ticket-tracker.png"

const projects = [
  {
    id: 1,
    title: "Full Stack Project",
    description: "A full stack CRUD app allowing users to log and keep track of their skydives. The front end was built using React and hosted on GitHub pages whilst the backend is built with Java spring and the API and database is hosted with GCP.",
    stack: ["React", "SCSS", "Java", "GCP", "Spring", "MySQL"],
    image: "",
    github: "https://github.com/nology-tech/positive-pup",
    preview: "https://nology-tech.github.io/positive-pup/"
  },
  {
    id: 2,
    title: "Client Project",
    description: "A four week client project delivered as part of an eight person agile team. Throughout this project I developed experience including agile practices, pair programming, CI/CD pipelines, GitHub actions and writing user stories.",
    stack: ["React", "SCSS"],
    image: positivePup,
    github: "https://github.com/Andy-Reynolds/full-stack-project",
    preview: "https://andy-reynolds.github.io/full-stack-project/"
  },
  {
    id: 3,
    title: "Punk API",
    description: "A React project built to enable users to browse, search and filter Brewdog beers. This data fectched from punkapi.com and the project developed my understanding of useState and useEffect.",
    stack: ["React", "SCSS", "Postman"],
    image: punkApi,
    github: "https://github.com/Andy-Reynolds/punk-api",
    preview: "https://andy-reynolds.github.io/punk-api/"
  },
  {
    id: 4,
    title: "Ticket Tracker",
    description: "An app built to track the number of completed tickets per employee in an agile team. This was my first project built using React and particularly tested my understanding of props and useState",
    stack: ["React", "SCSS"],
    image: ticketTracker,
    github: "https://github.com/Andy-Reynolds/ticket-tracker",
    preview: "https://andy-reynolds.github.io/ticket-tracker/"
  },
  {
    id: 5,
    title: "Morse Code Translator",
    description: "A technial skills challenge built on the nology course to test understanding of objects and DOM manipulation. This challenge was later developed with Jest unit testing.",
    stack: ["HTML", "Javascript", "Jest"],
    image: morseCode,
    github: "https://github.com/Andy-Reynolds/morse-code-translator",
    preview: "https://andy-reynolds.github.io/morse-code-translator/"
  },
  {
    id: 6,
    title: "Connect Four",
    description: "A connect four game created using HTML, SASS and Javascript. Further developing skills in DOM manipulation, Javascript functions and UI/UX design.",
    stack: ["HTML", "SCSS", "Javascript"],
    image: connectFour,
    github: "https://github.com/Andy-Reynolds/connect-four-project",
    preview: "https://andy-reynolds.github.io/connect-four-project/"
  },
  {
    id: 7,
    title: "Calculator",
    description: "A calculator built using HTML, SASS and Javascript. This project particularly developed skills in DOM manipulation and Javascript functions and was my first introduction to unit testing and E2E testing using Cypress.", 
    stack: ["HTML", "SCSS", "Javascript", "Cypress"],
    image: calculator,
    github: "https://github.com/Andy-Reynolds/calculator-challenge",
    preview: "https://github.com/Andy-Reynolds/calculator-challenge"
  },
];

export default projects;