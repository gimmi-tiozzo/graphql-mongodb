import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

/**
 * Tipo Lezione (corso)
 */
@Entity()
export class Lesson {
  /**
   * Id lezione mondogdb
   */
  @ObjectIdColumn()
  _id: string;

  /**
   * Id lezione
   */
  @PrimaryColumn()
  id: string;

  /**
   * Nome del corso
   */
  @Column()
  name: string;

  /**
   * Ora di inizio lezione
   */
  @Column()
  startDate: string;

  /**
   * Ora fine lezione
   */
  @Column()
  endDate: string;
}
