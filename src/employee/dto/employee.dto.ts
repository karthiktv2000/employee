import {
    Equals,
    IsAlpha,
    IsEmail,
    IsNumber,
    IsPhoneNumber,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class registrationDTO {
    @IsAlpha('en-US')
    name: string;
  
    @IsEmail({
      message: 'Must be in right email format',
    })
    email: string;
  
    @MinLength(8, {
      message: 'Password: Minimum length must be 8',
    })
    password: string;
  
    @MinLength(10, {
      message: 'Phone: Minimum must be 10',
    })
    @MaxLength(10, {
      message: 'Phone: Minimum must be 10',
    })
    phone: number;
  
    address: string;
  
    @IsNumber()
    salary: number;
  
    role: string;
  }
  