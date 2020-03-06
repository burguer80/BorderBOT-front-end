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
  visibleBorders: Border[];
  @Input() filter = '';

  constructor(private _border: BorderService) {
  }

  ngOnInit() {
    this._border.getBordersList()
      .subscribe(borders => {
        console.log(borders);
        this.visibleBorders = borders;
      });


    this._border.getBorders()
      .subscribe(res => console.log(res[0].payload.doc.data()));
  }
}
