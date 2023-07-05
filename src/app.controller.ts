import { Controller, Delete, Get, Post, Put, Param, Body,HttpCode} from '@nestjs/common';
import { AppService } from './app.service';
import { data, ReportType } from './Data';
import {v4 as uuid} from "uuid";
@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @HttpCode(200)
  @Get()
  getAllReports(@Param('type') type:string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
   return this.appService.getAllReports(reportType);
   
    
    
  };
  @Get(":id")
  getReport(@Param('type') type:string, @Param('id') id:string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReport(reportType,id);
     
  }

  @Post()
  createReport(@Body() {source, amount}:{source: string; amount:number}, @Param('type') type: string){
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
     return  this.appService.createReport(reportType,{source, amount})
    
  }
  @Put(":id") 
    updateReport(@Body() body:  {source: string; amount:number}, @Param('type') type: string, @Param('id') id:string)  {
      const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateReport(body, reportType, id);

  }
  @Delete(":id")
  deleteReport( @Param('id') id:string): boolean {
    const reportIndex =  data.report.findIndex((report) => report.id === id);
    if(reportIndex === -1) return false;

    data.report.splice(reportIndex, 1);
    return  true;
  }

 

}
