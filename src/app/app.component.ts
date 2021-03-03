import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const defaultLang = 'en';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'medical-angular11';

  constructor(translate: TranslateService) {
    translate.setDefaultLang(defaultLang);
    translate.use(defaultLang);
  }
}
