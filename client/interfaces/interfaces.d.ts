interface User {
  id: string;
  name: string;
  role: string;
  org: string;
  image: string | null;
}

interface TaskLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  postal_code: number;
}

interface Task {
  id: string;
  employee: User;
  location: TaskLocation;
  date: string;
  status: string;
  description: string;
}

interface BaseQuestion {
  id: string;
  task_id: string;
  type:
    | "short_descriptive_answer"
    | "multiple_choice_single"
    | "multiple_choice_multiple";
  question_text: string;
}

interface ShortDescriptiveAnswerQuestion extends BaseQuestion {
  type: "short_descriptive_answer";
  answer?: string;
}

interface MultipleChoiceOption {
  id: string;
  text: string;
}

interface MultipleChoiceSingleAnswerQuestion extends BaseQuestion {
  type: "multiple_choice_single";
  options: MultipleChoiceOption[];
  correct_option_id?: string;
}

interface MultipleChoiceMultipleAnswerQuestion extends BaseQuestion {
  type: "multiple_choice_multiple";
  options: MultipleChoiceOption[];
  correct_option_ids?: string[];
}

type Question =
  | ShortDescriptiveAnswerQuestion
  | MultipleChoiceSingleAnswerQuestion
  | MultipleChoiceMultipleAnswerQuestion;
