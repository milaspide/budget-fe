import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetExpensesListResponse } from '../shared/model/response/getExpensesListResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  public getCasualExpenses(id?: string): Observable<GetExpensesListResponse> {
    return this.client.get<GetExpensesListResponse>(
      environment.baseUrl + '/expenses/casual/{userId}/{month}'
    );
  }
}
