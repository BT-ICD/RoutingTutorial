import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'

import { AppComponent } from './app.component';
import { ProductListComponent } from './Product/List/product-list.component';
import { ProductDetailComponent } from './Product/Detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { TeamMemberListComponent } from './team/list/team-member-list.component';
import { TeamMemberDetailComponent } from './team/detail/team-member-detail.component';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { EmployeeDetailComponent } from './employee/detail/employee-detail.component';
import { PipeDemoListComponent } from './PipeDemo/list/pipe-demo-list.component';
import { ProductCategoryPipe } from './PipeDemo/product-category.pipe';
import { PipeDemoDetailComponent } from './PipeDemo/detail/pipe-demo-detail.component';
import { DataStoreService } from './data/data-store.service';
import { InMemoryProductListComponent } from './InMemoryAPIDemo/list/in-memory-product-list.component';
import { InMemoryProductDetailComponent } from './InMemoryAPIDemo/detail/in-memory-product-detail.component';
import { AsyncPipeDemoListComponent } from './asyncPipeDemo/list/async-pipe-demo-list.component';
import { RLab1Component } from './ReactiveDemo/rlab1/rlab1.component';
import { PdfMakeDemoModule } from './pdf-make-demo/pdf-make-demo.module';
import { PdfDemo1Component } from './pdf-make-demo/pdf-demo1/pdf-demo1.component';
import { DynamicFormDemo1Module } from './dynamic-form-demo1/dynamic-form-demo1.module';
import { MainFormComponent } from './dynamic-form-demo1/main-form/main-form.component';
import { CameraDemoModule } from './camera-demo/camera-demo.module';
import { CameraComp1Component } from './camera-demo/camera-comp1/camera-comp1.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    PageNotFoundComponent,
    TeamMemberListComponent,
    TeamMemberDetailComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    PipeDemoListComponent,
    ProductCategoryPipe,
    PipeDemoDetailComponent,
    InMemoryProductListComponent,
    InMemoryProductDetailComponent,
    AsyncPipeDemoListComponent,
    RLab1Component
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormDemo1Module,
    CameraDemoModule,
    HttpClientInMemoryWebApiModule.forRoot(DataStoreService) ,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent},
      {path:'products/:id',component:ProductDetailComponent},
      {path:'team',component:TeamMemberListComponent},
      {path:'team/:id',component:TeamMemberDetailComponent},
      {path:'employee',component:EmployeeListComponent},
      {path:'employee/:id',component:EmployeeDetailComponent},
      {path:'pipedemo1', component:PipeDemoListComponent},
      {path:'pipedemo1/:id',component:PipeDemoDetailComponent},
      {path:'inmemory', component:InMemoryProductListComponent},
      {path:'inmemory/:id', component:InMemoryProductDetailComponent},
      {path:'asyncpipelist', component:AsyncPipeDemoListComponent},
      // {path:'formarraylab1',component:EmpDetailFormArrayComponent},
      {path:'rlab1',component:RLab1Component},
      {path:'home',component:HomeComponent},
      {path:'pdfdemo1',component:PdfDemo1Component},
      {path:'mainform', component:MainFormComponent},
      {path:'camera1', component:CameraComp1Component},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ]),
    PdfMakeDemoModule,
    DynamicFormDemo1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
