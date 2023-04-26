import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/shared/model/expense';

@Component({
  selector: 'app-casual-expenses',
  templateUrl: './casual-expenses.component.html',
  styleUrls: ['./casual-expenses.component.css']
})
export class CasualExpensesComponent implements OnInit {

  expenses?: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getCasualExpensesByMonth('2', '1').subscribe(
      expensesResponse => this.expenses = expensesResponse
    );
  }

}
