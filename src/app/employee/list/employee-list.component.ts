import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';
import { EmployeeShareDataService } from '../employee-share-data.service';
import { IEmployee } from '../employee-types';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employeeList:IEmployee[]
  constructor(private employeeDataService: EmployeeDataService, private employeeShareDataService:EmployeeShareDataService, private router:Router) { }

  ngOnInit(): void {
    this.employeeList = this.employeeDataService.getEmployees();
    if(this.employeeShareDataService.selectedEmployee)
      console.log('From Employee List - Selected Employee : ' + JSON.stringify(this.employeeShareDataService.selectedEmployee));
    else
      console.log('From Employee List - Selected Employee is not available')
  }
  showDetail(emp:IEmployee){
    this.employeeShareDataService.selectedEmployee=emp;
    this.router.navigate(['/employee',emp.id]);
  }
}
