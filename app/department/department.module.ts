import { NgModule } from '@angular/core';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class DepartmentModule { }
