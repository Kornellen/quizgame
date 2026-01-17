import { Answer, Question } from "@/app/page";
import { IQuestionsRepo, QuestionDetials } from "./IQuestionsRepo";
import { QuestionsRepo } from "./Questions.repo";

export type DTOMapper<T, R> = (data: T) => R;

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
  async getRandomQuestion(): Promise<Question | null> {
    const questionId = Math.floor(Math.random() * 415) + 1;
    const question = await this.questionRepo.getRandomQuestion(questionId);

    if (!question) return null;

    const questionDataDTO: DTOMapper<QuestionDetials, Question> = (
      question,
    ) => ({
      number: question.id,
      content: question.content,
      answers: question.answers
        .sort(() => Math.random() - 0.5)
        .map(
          (answ): Answer => ({
            content: answ.content,
            isCorrect: answ.isCorrect,
          }),
        ),
    });

    return questionDataDTO(question);
  }

  async getAllQuestions(): Promise<Question[] | null> {
    const questions = await this.questionRepo.getAllQuestions();

    if (!questions) return null;

    const questionsDTO: DTOMapper<QuestionDetials[], Question[]> = (
      questions,
    ): Question[] =>
      questions.map(
        (question): Question => ({
          number: question.id,
          content: question.content,
          answers: question.answers
            .sort(() => Math.random() - 0.5)
            .map(
              (answ): Answer => ({
                content: answ.content,
                isCorrect: answ.isCorrect,
              }),
            ),
        }),
      );

    return questionsDTO(questions);
  }

  async getExamQuestions(indexes: number[]): Promise<Question[]> {
    const questions: QuestionDetials[] = [];

    for (let index = 0; index < indexes.length; index++) {
      const id = indexes[index];
      const question = await this.questionRepo.getQuestionById(id);

      if (question) questions.push(question);
    }

    const examQuestionsDTO: DTOMapper<QuestionDetials[], Question[]> = (
      questions,
    ): Question[] =>
      questions.map(
        (question): Question => ({
          number: question.id,
          content: question.content,
          answers: question.answers
            .sort(() => Math.random() - 0.5)
            .map(
              (answ): Answer => ({
                content: answ.content,
                isCorrect: answ.isCorrect,
              }),
            ),
        }),
      );

    return examQuestionsDTO(questions);
  }
}
