export type Question = {
  id: number;
  subject: string;
  text: string;
  options: string[];
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    subject: "Mathematics",
    text: "Which of the following best describes a variable in programming?",
    options: [
      "A fixed value that cannot change",
      "A named storage location for data",
      "A type of internet browser",
      "A tool used only in databases",
    ],
    correctAnswer: "A named storage location for data",
  },
  {
    id: 2,
    subject: "Mathematics",
    text: "What does HTML stand for?",
    options: [
      "Hyper Transfer Markup Language",
      "HighText Machine Language",
      "HyperText Markup Language",
      "Hyper Tool Multi Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    id: 3,
    subject: "Mathematics",
    text: "Which of these is used to style web pages?",
    options: ["Python", "CSS", "SQL", "Node.js"],
    correctAnswer: "CSS",
  },
  {
    id: 4,
    subject: "Mathematics",
    text: "Which JavaScript method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "map()"],
    correctAnswer: "push()",
  },
  {
    id: 5,
    subject: "Mathematics",
    text: "Which symbol is commonly used for comments in JavaScript single-line comments?",
    options: ["<!-- -->", "//", "##", "/* */"],
    correctAnswer: "//",
  },
];