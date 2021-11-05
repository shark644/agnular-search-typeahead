import { Component } from '@angular/core';
import { AppComponents } from './AppComponents.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<div><app-search></app-search></div>`
})
export class AppComponent {
  title = 'serchbox';

  constructor() { }
 

 ngOnInit() {
}

}
