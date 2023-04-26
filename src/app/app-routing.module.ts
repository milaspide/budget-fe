import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CasualExpensesComponent } from './components/casual-expenses/casual-expenses.component';
import { FixedExpensesComponent } from './components/fixed-expenses/fixed-expenses.component';

const routes: Routes = [
  { path: 'casual-expenses', component: CasualExpensesComponent, /* canActivate: [AuthGuard] */ },
  { path: 'fixed-expenses', component: FixedExpensesComponent, /* canActivate: [AuthGuard] */ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
