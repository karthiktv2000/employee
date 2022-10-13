import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { employee, employeeSchema } from './employee.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/employee2'),
    MongooseModule.forFeature([
      { name: employee.name, schema: employeeSchema },
    ]),
    JwtModule.register({ secret: 'hard!to-guess_secret' }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
