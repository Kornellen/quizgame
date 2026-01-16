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
    const questionId = Math.random() * 415;

    return this.questionRepo.getRandomQuestion(questionId);
  }
}
