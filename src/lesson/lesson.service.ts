import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

/**
 * Servizio per gestire le operazioni CRUD sulla entità Lesson
 */
@Injectable()
export class LessonService {
  /**
   * Costruttore
   * @param lessonRepository Repository per l'accesso alle operazioni CRUD di Lesson
   */
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  /**
   * Crea una lezione
   * @param createLessonInput input
   * @returns Promise alla lesson creata
   */
  createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });

    return this.lessonRepository.save(lesson);
  }

  /**
   * Ricerca una lezione
   * @param id id lezione
   * @returns Promise alla lesson trovato
   */
  getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }

  /**
   * Ritorna tutte le lesson presenti
   * @returns Promise all'array di tutte le lesson presenti
   */
  getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find({});
  }

  /**
   * Associa degli studenti alla lezione
   * @param lessonId Id lezione
   * @param studentIds Ids studenti
   * @returns Promise alla lezione a cui sono stati associati gli studenti
   */
  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRepository.save(lesson);
  }
}
