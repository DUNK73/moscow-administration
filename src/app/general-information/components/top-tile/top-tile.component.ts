import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { AnaliticsDataService } from 'src/app/core/dtata-services/analitics-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-top-tile',
  templateUrl: './top-tile.component.html',
  styleUrls: ['./top-tile.component.css']
})
export class TopTileComponent implements OnInit, OnDestroy {

  public currentDate = new Date();

  public data$ = this.analiticsDataService  .getAnaliticsExportInformation();

  constructor(
    private analiticsDataService: AnaliticsDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private zone: NgZone,
  ) { }

  ngOnInit() {

    // this.analiticsDataService
    //   .getAnaliticsExportInformation()
    //   .pipe(
    //     tap(data => {
    //       this.initChart(data);
    //     }),
    //     takeUntil(this.unsubscribe$$)
    //   )
    //   .subscribe();

  }

  ngOnDestroy() {
    // this.zone.runOutsideAngular(() => {
    //   if (this.chart) {
    //     this.chart.dispose();
    //   }
    // });
    // this.unsubscribe$$.next();
  }

}
