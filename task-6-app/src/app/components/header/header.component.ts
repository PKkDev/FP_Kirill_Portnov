import { Component, Inject, Renderer2 } from '@angular/core';
import { CompackSideBarService, SideBarConfig } from 'ngx-compack';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private csbs: CompackSideBarService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  public onOpenFeedbackForm() {
    const config: SideBarConfig = {
      title: 'Форма обратной связи',
      dialogWidth: '35vw',
      viewCloseBtn: true
    };

    this.renderer2.setStyle(this.document.body, 'overflow', 'hidden')

    this.csbs.openSideBar(FeedbackFormComponent, config)
      .subscribe(() => {
        this.renderer2.setStyle(this.document.body, 'overflow', 'auto')
      });
  }
}
