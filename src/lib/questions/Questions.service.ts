import { Question } from "@/app/page";
import { IQuestionsRepo } from "./IQuestionsRepo";
import { QuestionsRepo } from "./Questions.repo";

export class QuestionService {
  private static instance: QuestionService;
  private constructor(private questionRepo: IQuestionsRepo) {}
  public static getInstance(): QuestionService {
    if (!this.instance) {
      const repo = QuestionsRepo.getInstance();
      this.instance = new QuestionService(repo);
    }

    return this.instance;
  }
  async getRandomQuestion() {
    const questionId = Math.floor(Math.random() * 415) + 1;

    return this.questionRepo.getRandomQuestion(questionId);
  }

  async getAllQuestions() {
    return this.questionRepo.getAllQuestions();
  }

  async getExamQuestions(indexes: number[]): Promise<Question[]> {
    const questions: Question[] = [];

    for (let index = 0; index < indexes.length; index++) {
      const id = indexes[index];
      const question = await this.questionRepo.getQuestionById(id);

      if (question) questions.push(question);
    }

    return questions;
  }
}
