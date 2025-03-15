import {Component} from '@angular/core';
import {UsersService} from './users.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  // oddNumbers = [1, 3, 5];
  // evenNumbers = [2, 4];
  // onlyOdd = false;
}
