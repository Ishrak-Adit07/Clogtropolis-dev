export const DUMMY_QUESTIONS: Question[] = [
  {
    id: "q1",
    task_id: "hogwarts101",
    type: "short_descriptive_answer",
    question_text:
      "Why did Harry Potter live in a cupboard under the stairs instead of using magic to get a better room?",
    answer:
      "Because child protection laws apparently don't apply to wizards. Also, plot.",
  },
  {
    id: "q2",
    task_id: "cse_lolz",
    type: "multiple_choice_single",
    question_text:
      "What’s the first thing you fix when your code doesn’t work?",
    options: [
      { id: "1", text: "Restart the code" },
      { id: "2", text: "Blame the compiler" },
      { id: "3", text: "Comment it out and act like it never happened" },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
      { id: "1", text: "Restart the code" },
      { id: "2", text: "Blame the compiler" },
      { id: "3", text: "Comment it out and act like it never happened" },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
      { id: "1", text: "Restart the code" },
      { id: "2", text: "Blame the compiler" },
      { id: "3", text: "Comment it out and act like it never happened" },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
      {
        id: "4",
        text: "Google the error and hope StackOverflow saves the day",
      },
    ],
    correct_option_id: "4",
  },
  {
    id: "q3",
    task_id: "world_trivia",
    type: "multiple_choice_multiple",
    question_text:
      "Which of the following are actual countries? (Hint: Not your imagination)",
    options: [
      { id: "1", text: "Wakanda" },
      { id: "2", text: "Narnia" },
      { id: "3", text: "Chad" },
      { id: "4", text: "Peru" },
    ],
    correct_option_ids: ["3", "4"],
  },
  {
    id: "q4",
    task_id: "movie_time",
    type: "short_descriptive_answer",
    question_text: "Why did Rancho run away from college in *3 Idiots*?",
    answer:
      "To invent cool stuff and confuse everyone with his deep quotes about life and excellence.",
  },
  {
    id: "q5",
    task_id: "serious_matters",
    type: "multiple_choice_single",
    question_text:
      "Which of the following is a major cause of global water crisis?",
    options: [
      { id: "1", text: "Aliens stealing our water" },
      { id: "2", text: "Overuse and mismanagement of water resources" },
      { id: "3", text: "Mermaids hoarding it underwater" },
      { id: "4", text: "Too many people taking long showers" },
    ],
    correct_option_id: "2",
  },
];
