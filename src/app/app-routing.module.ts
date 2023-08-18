import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CasualExpensesComponent } from './components/expenses/casual-expenses/casual-expenses.component';
import { FixedExpensesComponent } from './components/expenses/fixed-expenses/fixed-expenses.component';
import { HomeComponent } from './components/home/home.component';
import { AddCasualExpenseComponent } from './components/expenses/casual-expenses/add-casual-expense/add-casual-expense.component';
import { AddFixedExpenseComponent } from './components/expenses/fixed-expenses/add-fixed-expense/add-fixed-expense.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casual-expenses', component: CasualExpensesComponent, /* canActivate: [AuthGuard] */ },
  { path: 'fixed-expenses', component: FixedExpensesComponent, /* canActivate: [AuthGuard] */ },
  { path: 'add-casual-expense', component: AddCasualExpenseComponent, /* canActivate: [AuthGuard] */ },
  { path: 'add-fixed-expense', component: AddFixedExpenseComponent, /* canActivate: [AuthGuard] */ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
