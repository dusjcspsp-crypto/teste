import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  create(@Body() createDto: any) {
    return this.schedulesService.create(createDto);
  }

  @Get()
  findAll() {
    return this.schedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schedulesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.schedulesService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(id);
  }
}
