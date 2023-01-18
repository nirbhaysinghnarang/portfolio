const projects = [
  {
    name: "SimPL",
    stack: "OCaml",
    desc: "Interpreted language with support for recursion, loops, objects, and other programming features implemented in OCaml with REPL support. ",
    img: "https://iconape.com/wp-content/files/mg/381783/svg/381783.png",
    tags: ["OCaml", "Programming Languages"],
  },
  {
    name: "HM Type Inference",
    stack: "OCaml",
    desc: "Implemented the Hindley-Milner type inference algorithm for a simple programming language that includes integer constants, variables, function applications, and lambda expressions in OCaml using a recursive descent parser.",
    img: "https://iconape.com/wp-content/files/mg/381783/svg/381783.png",
    tags: ["OCaml", "Programming Languages"],
  },
  {
    name: "Vanilla NER",
    stack: "Python",
    desc: "Built, using Python and without any external libraries, a Hidden Markov Model and Maximum Entropy Markov Model to extract and label named entities in text, trained on the WikiNEuRal dataset. Implemented the Viterbi algorithm using dynamic programming to reduce training time by 60% with 80% accuracy ",
    img: "https://c.neevacdn.net/image/fetch/s--RLGXJo31--/https%3A//tse3.mm.bing.net/th%3Fid%3DOIP.AQ5rAzGvicbIAudCjnmlyQHaHa%26pid%3DApi?savepath=th",
    tags: ["Python", "Machine Learning", "NLP"],
  },
  {
    name: "Version Control CLI",
    stack: "Python",
    img: "https://c.neevacdn.net/image/fetch/s--RLGXJo31--/https%3A//tse3.mm.bing.net/th%3Fid%3DOIP.AQ5rAzGvicbIAudCjnmlyQHaHa%26pid%3DApi?savepath=th",
    tags: ["Python", "Tooling"],
    desc: "Using Python, built a custom CLI-based version control system abstracting from Git, with functionality for creating, committing to, and branching from repositories with hashing, serializing, and logging",
  },
  {
    name: "CaseOwl",
    stack: "React, AWS Cloud",
    img: "https://c.neevacdn.net/image/fetch/s--192b-psk--/https%3A//tse4.mm.bing.net/th%3Fid%3DOIP.eKbxYkDrLB6bxpFhhZHUGAHaFO%26pid%3DApi?savepath=th",
    tags: ["ReactJS", "AWS Lambda", "AWS APIGateway", "Fullstack"],
    desc: "Web app built in React with a serverless backend using AWS Lambda, DynamoDB, and AWS APIGateway to optimise legal firm management with features like client, case, and calendar management. Added push notifications using AWS EventBridge. ",
  },
  {
    name: "InvenTree",
    stack: "Swift (UIKit), Firebase",
    img: "https://c.neevacdn.net/image/fetch/s--uTsP93Ub--/https%3A//tse1.mm.bing.net/th%3Fid%3DOIP.XozeB5BRQSzNCO6k7om62QHaHa%26pid%3DApi?savepath=th",
    tags: ["Swift", "Firebase", "Google Maps SDK", "Fullstack"],
    desc: "Full-stack iOS application with Firebase serving a Swift app, with a real-time interactive map using the Google Maps SDK.",
  },
  {
    name: "Garbify",
    stack: "Swift (UIKit), CreateML",
    img: "https://c.neevacdn.net/image/fetch/s--uTsP93Ub--/https%3A//tse1.mm.bing.net/th%3Fid%3DOIP.XozeB5BRQSzNCO6k7om62QHaHa%26pid%3DApi?savepath=th",
    tags: ["Swift", "Machine Learning"],
    desc: "Using Swift and CreateML, built an Object Detection and Classification application for classifying types of trash and suggesting suitable recycling methods for iOS. ",
  },
  {
    name: "Safely.ai",
    stack: "Swift, Python, YOLO Models",
    img: "https://c.neevacdn.net/image/fetch/s--uTsP93Ub--/https%3A//tse1.mm.bing.net/th%3Fid%3DOIP.XozeB5BRQSzNCO6k7om62QHaHa%26pid%3DApi?savepath=th",
    tags: ["Swift", "Python", "Machine Learning"],
    desc: "Using Python, a YOLO Object Detection Model, and a COCO annotator, built a Real-Time Heavy-Vehicle Detection with integrated ANPR capabilities. Using TensorFlow for Swift, developed a Real-Time Road Pothole Detection based on the YOLO model. ",
  },
  {
    name: "SeeSpeech",
    stack: "Python",
    desc: "NLP-based Speech/Text to Indian Sign Language Translator built in Python. The translator can take speech/text/handwriting as input and will then output a .mp4 file containing the ISL translation. ",
    tags: ["Python", "NLP", "Tooling"],
    img: "https://c.neevacdn.net/image/fetch/s--RLGXJo31--/https%3A//tse3.mm.bing.net/th%3Fid%3DOIP.AQ5rAzGvicbIAudCjnmlyQHaHa%26pid%3DApi?savepath=th",
  },
  {
    name: "FindMyParty",
    stack: "Swit",
    desc: "Heroku-hosted Flask backend serving a Swift app to help users find parties around them",
    tags: ["Python", "Swift", "Fullstack"],
    img: "https://c.neevacdn.net/image/fetch/s--uTsP93Ub--/https%3A//tse1.mm.bing.net/th%3Fid%3DOIP.XozeB5BRQSzNCO6k7om62QHaHa%26pid%3DApi?savepath=th",
  },
];

export default projects;
