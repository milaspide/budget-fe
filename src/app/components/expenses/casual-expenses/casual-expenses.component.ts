import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { AlertService } from 'src/app/services/alert.service';
import { Expense } from 'src/app/shared/model/expense';

@Component({
  selector: 'app-casual-expenses',
  templateUrl: './casual-expenses.component.html',
  styleUrls: ['./casual-expenses.component.css'],
})
export class CasualExpensesComponent implements OnInit {
  casualExpenses?: Expense[] = [];

  constructor(private expense: ExpenseService, private alert: AlertService) {}

  ngOnInit(): void {
    const actualMonth = new Date().getMonth() + 1;
    this.expense.getCasualExpensesByMonth(2, actualMonth).subscribe((resp) => {
      this.casualExpenses = resp;
    });
  }
}
