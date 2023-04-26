import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [CommonModule, NgxSpinnerModule],
  declarations: [AlertComponent, HeaderComponent, FooterComponent],
  exports: [CommonModule, FormsModule, AlertComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
