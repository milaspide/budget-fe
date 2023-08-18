import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CasualExpensesComponent } from './components/expenses/casual-expenses/casual-expenses.component';
import { FixedExpensesComponent } from './components/expenses/fixed-expenses/fixed-expenses.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casual-expenses', component: CasualExpensesComponent, /* canActivate: [AuthGuard] */ },
  { path: 'fixed-expenses', component: FixedExpensesComponent, /* canActivate: [AuthGuard] */ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
