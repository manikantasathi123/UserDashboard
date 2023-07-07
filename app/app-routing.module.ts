import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FinanceComponent } from './department/finance/finance.component';

const routes: Routes = [


  { path: '',component:LoginComponent},

  {path:'',children:[{path:'finance',component:FinanceComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
