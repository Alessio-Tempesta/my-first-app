import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({

  selector: 'app-root',
  template: `<h1>Hello world!</h1>`,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HomeComponent,
  ]

})
export class AppComponent {

  title = 'homes';
}
