import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasualExpensesComponent } from './pages/casual-expenses/casual-expenses.component';
import { FixedExpensesComponent } from './pages/fixed-expenses/fixed-expenses.component';

const routes: Routes = [
  { path: 'casual-expenses', component: CasualExpensesComponent },
  { path: 'fixed-expenses', component: FixedExpensesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
