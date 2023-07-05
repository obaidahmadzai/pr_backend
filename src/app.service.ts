import { Injectable } from '@nestjs/common';
import { data,ReportType } from './Data';
import {v4 as uuid} from "uuid";

interface Report {source: string; amount:number}
@Injectable()
export class AppService {
  getAllReports(type: string) {
    return data.report.filter((report) => report.type === type)
  }


  getReport(type:string, id:string) {
    return data.report.filter((report) =>  report.type ===  type).find((report) =>  report.id === id);
 
  }
  createReport(type:ReportType, {source, amount} : Report) {
    const newReport = {
      id: uuid(),
      source: source,
      amount: amount,
      created_at: new Date(),
      updated_at: new Date(),
      type
    }
    data.report.push(newReport);
    return newReport;
  }
  updateReport(body: Report, type: ReportType, id:string) {
    const reportToUpdate  =data.report.filter((report) =>  report.type ===  type).find((report) =>  report.id === id);
    if(!reportToUpdate) return ;
        const reportIndex =  data.report.findIndex((report) => report.id === reportToUpdate.id);
        data.report[reportIndex] = {
         ...data.report[reportIndex],
         ...body
        }
        return data.report[reportIndex];
  }
}
