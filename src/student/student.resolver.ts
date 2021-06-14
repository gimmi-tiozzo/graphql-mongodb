import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

/**
 * Resolver per la gestione del tipo Student
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((_of) => StudentType)
export class StudentResolver {
  /**
   * Costruttore
   * @param studentService servizio per la gestione delle operazioni CRUD di Student
   */
  constructor(private studentService: StudentService) {}

  /**
   * Crea un nuovo Student
   *
   *mutation {
   *  createStudent(createStudentInput: {
   *    firstName: "Gimmi",
   *    lastName: "Tiozzo"
   *  }), {
   *    id,
   *    firstName,
   *    lastName
   *  }
   *}
   *
   * @param createStudentInput input
   * @returns Promise allo Student
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((_returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  /**
   * Ottieni tutte gli studenti
   *
   *query {
   *  students {
   *    id,
   *    firstName
   *  }
   *}
   *
   * @returns Tutte gli studenti
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((_returns) => [StudentType])
  students(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  /**
   * Ricerca Student
   *
   *query {
   *  student(id: "49cbd950-c8f1-4f64-9e31-15b8aa457023"), {
   *  	firstName,
   *    id,
   *  }
   *}
   *
   * @param id id Student
   * @returns Promise Student
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((_returns) => StudentType)
  student(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  }
}
