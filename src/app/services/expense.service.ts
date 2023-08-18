import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expense } from '../shared/model/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  CASUAL_TYPE = 'CASUAL';
  FIXED_TYPE = 'FIXED';

  constructor(private client: HttpClient) {}

  public getCasualExpensesByMonth(
    userId: number,
    month?: number
  ): Observable<Expense[]> {
    return this.client.get<Expense[]>(
      environment.baseUrl + '/expenses?month=' + month,
      {
        params: {
          userId: userId,
          type: this.CASUAL_TYPE,
        },
      }
    );
  }

  public getFixedExpensesByMonth(
    userId: number,
    month?: number
  ): Observable<Expense[]> {
    return this.client.get<Expense[]>(
      environment.baseUrl + '/expenses?month=' + month,
      {
        params: {
          userId: userId,
          type: this.FIXED_TYPE,
        },
      }
    );
  }
}
