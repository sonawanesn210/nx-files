

import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly fileService: AppService) {}

  @Post("post")
  async writeFile(@Body() data: any) {
    await this.fileService.writeFile('data.bpmn', data);
    console.log("file has been saved",data)
    
  } 

 @Get()
  async readFile() {
    const data = await this.fileService.readFile('data.txt');
    return data;
  } 
}



////////////////////////////////

/* import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('file')
export class AppController {
  constructor(private readonly fileService: AppService) {}
  @Get('read') async readFile(@Res() res) {
    const filePath = 'data.json';
    try {
      const content = await this.fileService.readFile(filePath);
      return res
        .status(HttpStatus.OK)
        .send({ message: 'File read successfully', content });
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'File read failed', error: err });
    }
  }
  @Post('write') async writeFile(
    @Body() data: { filePath: string; content: string },
    @Res() res
  ) {
    try {
      await this.fileService.writeFile(data.filePath, data.content);
      return res
        .status(HttpStatus.OK)
        .send({ message: 'File written successfully' });
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'File write failed', error: err });
    }
  }
  @Post('append') async appendFile(
    @Body() data: { filePath: string; content: string },
    @Res() res
  ) {
    try {
      await this.fileService.appendFile(data.filePath, data.content);
      return res
        .status(HttpStatus.OK)
        .send({ message: 'File append successfully' });
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'File append failed', error: err });
    }
  }
  @Post('delete') async deleteFile(
    @Body() data: { filePath: string },
    @Res() res
  ) {
    try {
      await this.fileService.deleteFile(data.filePath);
      return res
        .status(HttpStatus.OK)
        .send({ message: 'File deleted successfully' });
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'File delete failed', error: err });
    }
  }
  @Post('rename') async renameFile(
    @Body() data: { oldPath: string; newPath: string },
    @Res() res
  ) {
    try {
      await this.fileService.renameFile(data.oldPath, data.newPath);
      return res
        .status(HttpStatus.OK)
        .send({ message: 'File renamed successfully' });
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'File rename failed', error: err });
    }
  }
}
 */