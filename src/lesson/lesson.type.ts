import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

/**
 * Tipo Lezione (corso)
 */
@ObjectType('Lesson')
export class LessonType {
  /**
   * Id lezione
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => ID)
  id: string;

  /**
   * Nome del corso
   */
  @Field()
  name: string;

  /**
   * Ora di inizio lezione
   */
  @Field()
  startDate: string;

  /**
   * Ora fine lezione
   */
  @Field()
  enddate: string;

  /**
   * Studenti associati alla lezione
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => [StudentType])
  students: string[];
}
