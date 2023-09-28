import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit, OnDestroy {

  private formChangesSubs?: Subscription;

  private emailRegexp: RegExp = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
  // private emailRegexp: RegExp = /^(.+)@(.+).(.+)$/;

  private phoneRegexp: RegExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

  public viewError = false;

  constructor(private fb: FormBuilder, private cookieService: CookieService) { }

  public feedbackForm = this.fb.group(
    {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailRegexp)]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    }
  );

  ngOnInit() {
    this.formChangesSubs = this.feedbackForm.valueChanges.subscribe({
      next: (value) => {
        localStorage.setItem('form', JSON.stringify(value));
      },
    })

    const savedForm = localStorage.getItem('form');
    if (savedForm) {
      const savedFormObj = JSON.parse(savedForm);
      if (savedFormObj) {
        this.viewError = true;
        this.feedbackForm.patchValue({
          firstName: savedFormObj?.firstName ?? '',
          lastName: savedFormObj?.lastName ?? '',
          email: savedFormObj?.email ?? '',
          phone: savedFormObj?.phone ?? '',
          message: savedFormObj?.message ?? '',
        });
      }
    }
  }

  ngOnDestroy() {
    this.formChangesSubs?.unsubscribe();
  }

  public onSubmit() {

    const isSend = this.cookieService.getCookie('isSend') == 'true';
    if (isSend) {
      const firstName = this.cookieService.getCookie('firstName');
      alert(`${firstName}, ваше обращение обрабатывается!`)
    } else {
      const value = this.feedbackForm.value;

      this.cookieService.setCookie({ name: 'firstName', value: value.firstName!, session: true });
      this.cookieService.setCookie({ name: 'lastName', value: value.lastName!, session: true });
      this.cookieService.setCookie({ name: 'isSend', value: "true", session: true });

      alert(`${value.firstName}, Спасибо за обращение`)
    }
  }

}
