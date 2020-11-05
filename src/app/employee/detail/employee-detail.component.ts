import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeShareDataService } from '../employee-share-data.service';
import { IEmployee } from '../employee-types';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit , OnDestroy{
employee:IEmployee;
  constructor(private employeeShareDataService:EmployeeShareDataService, private router:Router) { }
  
  ngOnInit(): void {
    this.employee = this.employeeShareDataService.selectedEmployee;
    console.log(this.employee);
  }
  backToList():void{
    this.employee.name='Modified';
    this.router.navigate(['/employee']);
  }
  //To clear selected object from singleton EmployeeShareDataService
  ngOnDestroy(): void {
    this.employeeShareDataService.selectedEmployee=null;
  }

}
