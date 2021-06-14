import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

/**
 * Modulo per le gestione delle operazioni CRUD per il tipo Student
 */
@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
