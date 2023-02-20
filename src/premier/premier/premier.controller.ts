import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { Body, Req } from '@nestjs/common/decorators';
import { Request } from 'express';

@Controller('premier')
export class PremierController {

    @Get()
    getPremier():string{
        const test ='i am a GET method !';
       
       
        return test;
    }
    
   @Get('/request')
    getHello(@Req() req: Request): string {
    console.log(req.path);
    return 'HELLO NEST';
    }
   @Post('/body')
   testPost(@Body() body) {
   console.log(body);
   }

    @Post()
    postPremier():string{
        const test ='i am a POST method !';
        return test;

    }

    @Delete()
    deletePremier():string{
        const test ='i am a DELETE method !';
        return test;

    }

    @Put()
    putPremier():string{
        const test ='i am a PUT method !';
        return test;

    }
    @Patch()
    patchPremier():string{
        const test ='i am a PATCH method !';
        return test;

    }




}
