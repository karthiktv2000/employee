import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type employeeDocument = employee & Document;

@Schema()
export class employee {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false})
  phone: number;

  @Prop({ required: false })
  address: string;

  @Prop({ required: false})
  salary: number;

  @Prop({ required: false })
  role: string;

  @Prop({ default: false })
  leave: boolean;
}

export const employeeSchema = SchemaFactory.createForClass(employee);
