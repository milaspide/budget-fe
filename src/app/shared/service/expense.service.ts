import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private client: HttpClient) { }

  public getCasualExpensesByMonth(id?: string, month?: string): Observable<Expense[]> {
    return this.client.get<Expense[]>(
      environment.baseUrl + '/expenses/casual/month/' + id + '?month=' + month
    );
  }
}
