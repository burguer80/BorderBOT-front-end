import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

// Interfaces
import {Border} from './interfaces/border';

// Services
import {BorderService} from './border.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bordersList: Observable<Border[]>;

  constructor(private _border: BorderService) {
  }

  ngOnInit() {
    this.bordersList = this._border.getBordersList();
    console.dir(this.bordersList);

    // this.bordersList.subscribe(data => {
    //   this.borderListUpdated(data.length);
    // });
  }

  borderListUpdated(data) {
    console.log(data);
  }
}
