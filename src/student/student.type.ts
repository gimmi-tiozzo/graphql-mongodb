import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 * Tipo Studente
 */
@ObjectType('Student')
export class StudentType {
  /**
   * Id Student
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => ID)
  id: string;

  /**
   * Nome
   */
  @Field()
  firstName: string;

  /**
   * Cognome
   */
  @Field()
  lastName: string;
}
