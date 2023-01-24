import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DialogModule } from 'primeng/dialog';
// import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { MomentModule } from 'ngx-moment';
import { HomeComponent } from './pages/home/home.component';
import { CasualExpensesComponent } from './pages/casual-expenses/casual-expenses.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CasualExpensesComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // DialogModule,
    // DynamicDialogModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    // MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
