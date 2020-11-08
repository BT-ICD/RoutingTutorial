import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Product/List/product-list.component';
import { ProductDetailComponent } from './Product/Detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeamMemberListComponent } from './team/list/team-member-list.component';
import { TeamMemberDetailComponent } from './team/detail/team-member-detail.component';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { EmployeeDetailComponent } from './employee/detail/employee-detail.component';
import { PipeDemoListComponent } from './PipeDemo/list/pipe-demo-list.component';
import { ProductCategoryPipe } from './PipeDemo/product-category.pipe';
import { PipeDemoDetailComponent } from './PipeDemo/detail/pipe-demo-detail.component';


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
    PipeDemoDetailComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent},
      {path:'products/:id',component:ProductDetailComponent},
      {path:'team',component:TeamMemberListComponent},
      {path:'team/:id',component:TeamMemberDetailComponent},
      {path:'employee',component:EmployeeListComponent},
      {path:'employee/:id',component:EmployeeDetailComponent},
      {path:'pipedemo1', component:PipeDemoListComponent},
      {path:'pipedemo1/:id',component:PipeDemoDetailComponent},
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
