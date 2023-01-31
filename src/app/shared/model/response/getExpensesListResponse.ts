import { HttpErrorResponse } from "@angular/common/http";
import { Expense } from "../expense";

export interface GetExpensesListResponse extends HttpErrorResponse {
    expensesList?: Expense[];
  }
