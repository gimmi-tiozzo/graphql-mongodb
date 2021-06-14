import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';

/**
 * Input per la mutation di creazione di Lesson
 */
@InputType()
export class CreateLessonInput {
  /**
   * Nome corso
   */
  @MinLength(1)
  @Field()
  name: string;
  /**
   * Data inizio corso
   */
  @IsDateString()
  @Field()
  startDate: string;
  /**
   * Data fine corso
   */
  @IsDateString()
  @Field()
  endDate: string;

  /**
   * Lista degli id degli studenti associati alla lezione
   */
  @IsUUID('4', { each: true })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => [ID], { defaultValue: [] })
  students: string[];
}
