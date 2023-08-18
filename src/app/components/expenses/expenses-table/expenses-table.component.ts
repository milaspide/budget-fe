import { Component, Input } from '@angular/core';
import { Expense } from 'src/app/shared/model/expense';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css'],
})
export class ExpensesTableComponent {
  @Input() expenses?: Expense[] = [];
}
