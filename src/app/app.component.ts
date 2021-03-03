import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const defaultLang = 'en'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'medical-angular11';

  constructor(translate: TranslateService) {
    translate.setDefaultLang(defaultLang);
    translate.use(defaultLang)
  }
}
