import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MomentModule } from 'ngx-moment';
import { HomeComponent } from './pages/home/home.component';
import { CasualExpensesComponent } from './pages/casual-expenses/casual-expenses.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CasualExpensesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    DynamicDialogModule,
    NgxSpinnerModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
