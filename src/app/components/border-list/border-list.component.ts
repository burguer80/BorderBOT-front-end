import {Component, Input, OnInit} from '@angular/core';
import {Border} from '../../interfaces/border';
import {Observable} from 'rxjs';
import {BorderService} from '../../border.service';

@Component({
  selector: 'app-border-list',
  templateUrl: './border-list.component.html',
  styleUrls: ['./border-list.component.scss']
})
export class BorderListComponent implements OnInit {
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
