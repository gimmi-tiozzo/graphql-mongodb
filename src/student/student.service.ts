import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
import { v4 as uuid } from 'uuid';

/**
 * Servizio per le operazioni CRUD sul tipo Student
 */
@Injectable()
export class StudentService {
  /**
   * Costruttore
   * @param studentRepository Repository per l'accesso alle operazioni CRUD di Student
   */
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  /**
   * Crea uno Student
   * @param createStudentInput input
   * @returns Promise allo Student creato
   */
  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const lesson = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(lesson);
  }

  /**
   * Ottieni tutti gli studenti
   * @returns Promise a tutti gli studenti
   */
  getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  /**
   * Ottieni uno studente
   * @param id Id studente
   * @returns Promise al tipo Studente
   */
  getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  /**
   * Ottieni la lista degli studenti dai loro ids
   * @param studentIds Ids studenti
   * @returns Promise alla lista degli studenti trovati per ids
   */
  getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }
}
