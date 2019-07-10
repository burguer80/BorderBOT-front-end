import {Component, Input, OnInit} from '@angular/core';
import {Border} from '../../interfaces/border';

@Component({
  selector: 'app-border-card',
  template: `
    <mat-card class="border-card mx-auto" xmlns="http://www.w3.org/1999/html">
      <mat-card-header>
        <p class="card-title">{{border.name}} - {{border.crossing_name}} </p>
      </mat-card-header>
      <mat-card-content>
        <mat-grid-list cols="5" rowHeight="35">
          <div class="table-headers">
            <mat-grid-tile></mat-grid-tile>
            <mat-grid-tile>Std.</mat-grid-tile>
            <mat-grid-tile>Ready</mat-grid-tile>
            <mat-grid-tile>Sentri</mat-grid-tile>
            <mat-grid-tile>Fast</mat-grid-tile>
          </div>

          <mat-grid-tile class="table_icon">
            <mat-icon>directions_walk</mat-icon>
          </mat-grid-tile>
          <div class="table_value">
            <mat-grid-tile>{{formatValue(border.data?.pedestrian?.standard_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.pedestrian?.ready_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.pedestrian?.NEXUS_SENTRI_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.pedestrian?.FAST_lanes?.delay_minutes)}}</mat-grid-tile>
          </div>

          <mat-grid-tile class="table_icon">
            <mat-icon>directions_car</mat-icon>
          </mat-grid-tile>
          <div class="table_value">
            <mat-grid-tile>{{formatValue(border.data?.passenger?.standard_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.passenger?.ready_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.passenger?.NEXUS_SENTRI_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.passenger?.FAST_lanes?.delay_minutes)}}</mat-grid-tile>
          </div>

          <mat-grid-tile class="table_icon">
            <mat-icon>local_shipping</mat-icon>
          </mat-grid-tile>
          <div class="table_value">
            <mat-grid-tile>{{formatValue(border.data?.commercial?.standard_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.commercial?.ready_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.commercial?.NEXUS_SENTRI_lanes?.delay_minutes)}}</mat-grid-tile>
            <mat-grid-tile>{{formatValue(border.data?.commercial?.FAST_lanes?.delay_minutes)}}</mat-grid-tile>
          </div>
        </mat-grid-list>
      </mat-card-content>
      <mat-card-footer>
        <p><b>Updated:</b> {{border?.taken_at |  date:'medium'}}<br>
          <b>Open hours:</b>{{border.hours}}</p>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [`
    mat-card-header {
      height: 90px;
      background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    }

    mat-grid-list {
      top: -25px;
    }

    mat-card-footer {
      margin-left: 5px;
      font-size: 11px;
    }

    mat-icon {
      font-size: 20px;
    }

    .border-card {
      max-width: 250px;
      min-width: 200px;
    }

    .card-title {
      font-size: 16px;
      margin-left: -20px;
      margin-top: 5px;
    }

    .table-headers {
      font-size: 11px;
      font-weight: bold;
    }

    .table_value {
      font-size: 11px;
      opacity: 0.7;
    }
  `]

})
export class BorderCardComponent implements OnInit {
  @Input() border: Border;

  constructor() {
  }

  ngOnInit() {
  }

  formatValue(value) {
    const cleaned_value = value || value === 0 ? value.toString().trim() : null;
    let formatted_value = '-';
    if (cleaned_value) {
      formatted_value = cleaned_value + 'm';
    }
    return formatted_value;
  }

}
