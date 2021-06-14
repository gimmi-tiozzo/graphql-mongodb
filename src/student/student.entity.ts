import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

/**
 * Entità studente
 */
@Entity()
export class Student {
  /**
   * Id Student mondogdb
   */
  @ObjectIdColumn()
  _id: string;

  /**
   * Id Student
   */
  @PrimaryColumn()
  id: string;

  /**
   * Nome
   */
  @Column()
  firstName: string;

  /**
   * Cognome
   */
  @Column()
  lastName: string;
}
