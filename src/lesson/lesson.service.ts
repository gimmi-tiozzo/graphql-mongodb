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
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
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
}
