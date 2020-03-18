import {Component, Input, OnInit} from '@angular/core';
import {Border} from '../../interfaces/border';
import {FavoriteBordersStoreService} from '../../services/favorite-borders-store.service';

@Component({
  selector: 'app-border-card',
  template: `
    <mat-card class="border-card mx-auto" xmlns="http://www.w3.org/1999/html">
      <mat-card-header>
        <p class="card-title">{{border.name}} {{border.crossing_name ? '- ' + border.crossing_name : ''}} </p>
      </mat-card-header>
      <mat-card-content>


        <mat-accordion>

          <mat-expansion-panel [expanded]="false">
            <mat-expansion-panel-header>
              <mat-panel-title>
                <b>Updated:</b>
              </mat-panel-title>
              <mat-panel-description>
                {{border?.taken_at |  dateAgo}}
              </mat-panel-description>
            </mat-expansion-panel-header>

            <mat-grid-list cols="5" rowHeight="45">
              <div class="table-headers">
                <mat-grid-tile></mat-grid-tile>
                <mat-grid-tile>Std.</mat-grid-tile>
                <mat-grid-tile>Ready</mat-grid-tile>
                <mat-grid-tile>Sentri</mat-grid-tile>
                <mat-grid-tile>Fast</mat-grid-tile>
              </div>

              <mat-grid-tile class="table_icon">
                <mat-icon class="lane_icon">directions_walk</mat-icon>
              </mat-grid-tile>
              <div class="table_value">
                <mat-grid-tile>{{formatValue(border.data?.pedestrian?.standard_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.pedestrian?.ready_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.pedestrian?.NEXUS_SENTRI_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.pedestrian?.FAST_lanes?.delay_minutes)}}</mat-grid-tile>
              </div>

              <mat-grid-tile class="table_icon">
                <mat-icon class="lane_icon">directions_car</mat-icon>
              </mat-grid-tile>
              <div class="table_value">
                <mat-grid-tile>{{formatValue(border.data?.passenger?.standard_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.passenger?.ready_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.passenger?.NEXUS_SENTRI_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.passenger?.FAST_lanes?.delay_minutes)}}</mat-grid-tile>
              </div>

              <mat-grid-tile class="table_icon">
                <mat-icon class="lane_icon">local_shipping</mat-icon>
              </mat-grid-tile>
              <div class="table_value">
                <mat-grid-tile>{{formatValue(border.data?.commercial?.standard_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.commercial?.ready_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.commercial?.NEXUS_SENTRI_lanes?.delay_minutes)}}</mat-grid-tile>
                <mat-grid-tile>{{formatValue(border.data?.commercial?.FAST_lanes?.delay_minutes)}}</mat-grid-tile>
              </div>
            </mat-grid-list>
          </mat-expansion-panel>
        </mat-accordion>


      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-button (click)="addToFavoritesBorders(border.number)">
          <mat-icon aria-hidden="false" aria-label="Example home icon">favorite</mat-icon>
        </button>

      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card-header {
      padding: 5px;
      background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    }

    mat-grid-list {
      top: 5px;
    }

    mat-card-footer {
      margin-left: 5px;
      font-size: 0.8rem;
    }

    .lane_icon {
      font-size: 28px;
    }

    .border-card {
      min-width: 250px;
      margin: 10px;
    }

    .card-title {
      font-size: 1.3rem;
      margin-left: -20px;
      margin-top: 5px;
    }

    .table-headers {
      font-size: 0.8rem;
      font-weight: bold;
    }

    .table_value {
      font-size: 0.85rem;
      opacity: 0.7;
    }
  `]

})
export class BorderCardComponent implements OnInit {
  @Input() border: Border;

  constructor(private  favoriteBordersStoreService: FavoriteBordersStoreService) {
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

  addToFavoritesBorders(number) {
    this.favoriteBordersStoreService.push(number);
  }

}
