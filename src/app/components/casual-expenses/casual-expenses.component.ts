import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/shared/model/expense';

@Component({
  selector: 'app-casual-expenses',
  templateUrl: './casual-expenses.component.html',
  styleUrls: ['./casual-expenses.component.css'],
})
export class CasualExpensesComponent implements OnInit {
  expenses?: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getCasualExpensesByMonth('2', '1').subscribe({
      next: (resp) => {
        this.expenses = resp;
      },
      error: () => {
        this.expenses?.push({
          expenseId: 1,
          expenseCategory: 'Bollette',
          expenseType: 'Bolletta Luce',
          description: 'Bolletta bimestrale Acea',
          expenseAmount: 65,
          paymentDate: new Date(2023, 5, 16),
        });
      },
    });
  }
}
