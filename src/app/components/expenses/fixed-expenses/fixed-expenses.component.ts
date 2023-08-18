import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/shared/model/expense';

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.component.html',
  styleUrls: ['./fixed-expenses.component.css'],
})
export class FixedExpensesComponent implements OnInit {
  fixedExpenses?: Expense[] = [];

  constructor(private expenseService: ExpenseService, private router: Router) {}

  ngOnInit(): void {
    const actualMonth = new Date().getMonth() + 1;
    this.expenseService
      .getFixedExpensesByMonth(2, actualMonth)
      .subscribe((resp) => {
        this.fixedExpenses = resp;
      });
  }

  goToAddFixedExpense() {
    this.router.navigate(['/add-fixed-expense']);
  }
}
