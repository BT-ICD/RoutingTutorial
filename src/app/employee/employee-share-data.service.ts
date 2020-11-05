import { Injectable } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { IEmployee } from './employee-types';

@Injectable({
  providedIn: 'root'
})
export class EmployeeShareDataService {
  private _selectedEmployee: IEmployee;
  public get selectedEmployee(): IEmployee {
    return this._selectedEmployee;
  }
  public set selectedEmployee(value: IEmployee) {
    this._selectedEmployee = value;
  }
  constructor() { }
}
