import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/shared/model/expense';

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.component.html',
  styleUrls: ['./fixed-expenses.component.css'],
})
export class FixedExpensesComponent implements OnInit {
  fixedExpenses?: Expense[] = [];

  constructor(
    private expenseService: ExpenseService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    const actualMonth = new Date().getMonth() + 1;
    this.expenseService.getFixedExpensesByMonth(2, actualMonth).subscribe({
      next: (resp) => {
        this.fixedExpenses = resp;
      },
      error: (resp) => {
        this.alert.error(resp.message, {
          autoClose: true,
        });
      },
    });
  }
}
