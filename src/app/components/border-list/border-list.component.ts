import {Component, Input, OnInit} from '@angular/core';
import {Border} from '../../interfaces/border';
import {Observable, Subscription} from 'rxjs';
import {pipe} from 'rxjs';
import {map, filter} from 'rxjs/operators';

import {BorderService} from '../../border.service';

@Component({
  selector: 'app-border-list',
  templateUrl: './border-list.component.html',
  styleUrls: ['./border-list.component.scss']
})
export class BorderListComponent implements OnInit {
  bordersList: Observable<Border[]>;
  visibleBorders: Border[];
  borders: [];
  @Input() filter = '';

  constructor(private _border: BorderService) {
  }

  ngOnInit() {
    this.bordersList = this._border.getBordersList();
    this.bordersList
      .subscribe(results => {
        // console.log(results);
        this.visibleBorders = results;
      });
  }
}
