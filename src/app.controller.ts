import { Controller, Get, Inject, Req, Res, UseGuards } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { lastValueFrom, timeout } from 'rxjs';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('AUTH_CLIENT')
    private readonly client: ClientProxy) {}

  @UseGuards(AuthGuard)
  @Get()
  async getHello(@Req() req, @Res() res): Promise<any>  {
    console.log(req.user)
    return await res.json(req.user)
    }

 @Get("/bo/:id")
  async getBo(@Req() req){
   return await lastValueFrom(this.client.send({role:"auth", cmd:"kk"}, req.params.id).pipe())
   
 }
}
