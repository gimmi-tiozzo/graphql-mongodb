import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

/**
 * Input per la mutation di creazione di un tipo Student
 */
@InputType()
export class CreateStudentInput {
  /**
   * Nome
   */
  @MinLength(1)
  @Field()
  firstName: string;

  /**
   * Cognome
   */
  @MinLength(1)
  @Field()
  lastName: string;
}
