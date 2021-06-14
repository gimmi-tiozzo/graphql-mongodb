import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

/**
 * Input per associare gli studenti ad una lezione
 */
@InputType()
export class AssignStudentsToLessonInput {
  /**
   * Id lezione
   */
  @IsUUID()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => ID)
  lessonId: string;
  /**
   * Id studenti
   */
  @IsUUID('4', { each: true })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => [ID])
  studentIds: string[];
}
