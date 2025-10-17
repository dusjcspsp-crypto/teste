import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetsService } from './budgets.service';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  create(@Body() createDto: any) {
    return this.budgetsService.create(createDto);
  }

  @Get()
  findAll() {
    return this.budgetsService.findAll();
  }

  @Get('stats')
  getStats() {
    return this.budgetsService.getStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.budgetsService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetsService.remove(id);
  }
}
