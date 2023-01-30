import { HttpErrorResponse } from "@angular/common/http";
import { ExpenseObj } from "../expenseObj";

export interface GetExpensesListResponse extends HttpErrorResponse {
    expensesList?: ExpenseObj[];
  }