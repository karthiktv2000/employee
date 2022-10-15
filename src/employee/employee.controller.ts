import { Body, Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
import {EmployeeService} from './employee.service';
import { registrationDTO } from './dto/employee.dto';

@Controller('employee')
export class EmployeeController {
constructor(private readonly appService: EmployeeService) {}
  @Post('register')
  public async postemployee(
    @Body() empdetails: registrationDTO,
    @Res() res: Response,
  ) {
    return await this.appService.postemployee(empdetails, res);
  }
  @Post('login')
  public async login(
    @Body() body: { email: string; password: string },
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.appService.login(body, req, res);
  }
  @Get('dashboard')
  public async dashboard(@Req() req: Request, @Res() res: Response) {
    this.appService.dashboard(req, res);
  }
  @Delete('logout')
  public async logout(@Req() req: Request, @Res() res: Response) {
    this.appService.logout(req, res);
  }

}
