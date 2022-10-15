import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { employee, employeeSchema } from './employee.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/employee4'),
    MongooseModule.forFeature([
      { name: employee.name, schema: employeeSchema },
    ]),
    JwtModule.register({ secret: 'hard!to-guess_secret' }),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
