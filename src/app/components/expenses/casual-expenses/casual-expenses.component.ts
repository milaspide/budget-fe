import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/shared/model/expense';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casual-expenses',
  templateUrl: './casual-expenses.component.html',
  styleUrls: ['./casual-expenses.component.css'],
})
export class CasualExpensesComponent implements OnInit {
  casualExpenses?: Expense[] = [];

  constructor(private expense: ExpenseService, private router: Router) {}

  ngOnInit(): void {
    const actualMonth = new Date().getMonth() + 1;
    this.expense.getCasualExpensesByMonth(2, actualMonth).subscribe((resp) => {
      this.casualExpenses = resp;
    });
  }

  goToAddCasualExpense() {
    this.router.navigate(['/add-casual-expense']);
  }
}
