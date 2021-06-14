import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

/**
 * Resolver per la gestione del tipo Lesson
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((_of) => LessonType)
export class LessonResolver {
  /**
   * Costruttore
   * @param lessonService servizio per la gestione delle operazioni CRUD di Lesson
   */
  constructor(private lessonService: LessonService) {}

  /**
   * Ricerca Lesson
   * @param id id lezione
   * @returns Promise Lesson
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((_returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  /**
   * Creazione Lesson
   * @param createLessonInput input
   * @returns Promise Lesson
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
