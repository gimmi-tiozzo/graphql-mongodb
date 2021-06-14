import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentService } from '../student/student.service';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
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
   * @param studentService servizio per la gestione delle operazioni CRUD per l'entità Student
   */
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  /**
   * Ricerca Lesson
   *
   *query {
   *  lesson(id: "49cbd950-c8f1-4f64-9e31-15b8aa457023"), {
   *  	name,
   *    id,
   *    startDate
   *  }
   *}
   *
   * @param id id lezione
   * @returns Promise Lesson
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((_returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  /**
   * Ottieni tutte le lezioni
   *
   *query {
   *  lessons {
   *    id,
   *    name
   *  }
   *}
   *
   * @returns Tutte le lezioni
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((_returns) => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  /**
   * Creazione Lesson
   * es.
   *
   * mutation {
   *  createLesson(createLessonInput: {
   *    name: "Lezione di prova",
   *    startDate: "2021-06-14T17:51:32.373Z",
   *    endDate: "2021-06-14T18:51:32.373Z"
   *    students: ["....", "...."]
   *  }), {
   *    id,
   *    name
   *  }
   *}
   *
   * @param createLessonInput input
   * @returns Promise Lesson
   *
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  /**
   * Assoccia gli studenti ad una lezione
   * @param assignStudentsToLessonInput input
   * @returns Promise alla lesson con gli studenti associati
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((_returns) => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  /**
   * Ottieni la lezione con associati gli studenti
   * @param lesson lezione
   * @returns Promise alla lezione
   */
  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
