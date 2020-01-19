import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { AnaliticsDataService } from 'src/app/core/dtata-services/analitics-data.service';
import { Industry } from '../../../models/industry';
import { ActivityType, ActivityTypeMapper } from '../../models/activity-type.enum';

@Component({
  selector: 'app-analitics-top-tile',
  templateUrl: './analitics-top-tile.component.html',
  styleUrls: ['./analitics-top-tile.component.less']
})
export class AnaliticsTopTileComponent implements OnInit {

  public data$: Observable<Array<Industry>>;

  public selected: Industry;

  public activityType: ActivityType;
  public activityTypeLabel: string;
  public industryLabel: string;

  public searchForm: FormGroup = new FormGroup({
    title: new FormControl(),
    turnoverSum: new FormControl(),
    exportSum: new FormControl(),
  });

  constructor(
    private analiticsDataService: AnaliticsDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.activityType = this.activatedRoute.snapshot.params['activityType'];
    this.activityTypeLabel = ActivityTypeMapper.getLabel(this.activityType);

    this.data$ = this.analiticsDataService.getAnalitics()
      .pipe(
        switchMap((clients) => {
          return this.searchForm.valueChanges
            .pipe(
              startWith(null),
              map((searchValue: {
                title: string;
                turnoverSum: number;
                exportSum: number;
              }) => {
                if (searchValue) {
                  return clients.filter(f => {
                    return (f.title || '').toUpperCase().includes((searchValue.title || '').toUpperCase())
                    //  && (f.turnoverSum && f.turnoverSum.toString() || '')
                    //    .includes((searchValue.turnoverSum && searchValue.turnoverSum.toString() || ''))
                    //  && (f.exportSum && f.exportSum.toString() || '')
                    //    .includes((searchValue.exportSum && searchValue.exportSum.toString() || ''));
                  });
                } else {
                  return clients;
                }
              })
            );
        })
      );
  }

  // [routerLink]="[
  //   '../',
  //     {
  //       outlets: {
  //         right-tile-outlet: ['client-info-results', item.id],
  //         'bottom-tile-outlet': ['../','client-info', item.id]
  //       }
  //     }
  //   ]"

  public toggleSelected(item: Industry) {

    let outlets: {
      [key: string]: Array<any>
    };

    if (this.selected === item) {
      this.selected = null;
      outlets = {
        'bottom-tile-outlet': ['analitics-bottom-tile', this.activityType],
        'right-tile-outlet': ['analitics-right-tile', this.activityType],
      };
    } else {
      this.selected = item;
      outlets = {
        'bottom-tile-outlet': ['analitics-bottom-tile-for-subindustry', this.activityType, item.id],
        'right-tile-outlet': ['analitics-right-tile-for-subindustry', this.activityType, item.id],
      };
    }

    this.router.navigate(
      [
        {
          outlets: outlets,
        }
      ],
      { relativeTo: this.activatedRoute.parent }
    );
  }


}
