export type Answer = { content: string; isCorrect: boolean };

export type Question = {
  number: number;
  content: string;
  answers: Answer[];
};
export type LinkProp = { path: string; name: string };
