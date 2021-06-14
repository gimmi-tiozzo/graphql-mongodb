import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { Lesson } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

/**
 * Modulo per la gestione dei corsi
 */
@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), StudentModule],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
