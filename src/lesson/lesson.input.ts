import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

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
}
