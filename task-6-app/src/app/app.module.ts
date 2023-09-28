import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
// compack
import { CompackSideBarModule, CompackButtonModule, CompackAlertModule, CompackIconModule } from 'ngx-compack';
// ngx-mask
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WrapperComponent,
    FeedbackFormComponent,
    ValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CompackSideBarModule,
    CompackButtonModule,
    CompackAlertModule,
    CompackIconModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
