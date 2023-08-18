export interface Expense {
  expenseId: number;
  expenseCategory: string;
  expenseType: string;
  description: string;
  expenseAmount: number;
  paymentDate: Date;
}
