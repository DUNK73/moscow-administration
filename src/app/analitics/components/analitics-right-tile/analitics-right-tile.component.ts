import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { AnaliticsByCountry } from '../../../models/industry';
import { ClientsDataService } from 'src/app/core/dtata-services/clients-data.service';
import { CompaniesDataService } from 'src/app/core/dtata-services/companies-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AnaliticsDataService } from '../../../core/dtata-services/analitics-data.service';
import { tap, startWith, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-analitics-right-tile',
  templateUrl: './analitics-right-tile.component.html',
  styleUrls: ['./analitics-right-tile.component.less']
})
export class AnaliticsRightTileComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4maps.MapChart;

  public data: Array<AnaliticsByCountry>;

  public actualDate: string;

  @ViewChild('chartContainer')
  private chartContainer: ElementRef;

  public searchForm: FormGroup = new FormGroup({
    title: new FormControl()
  });

  public data$: Observable<Array<AnaliticsByCountry>> = this.searchForm.valueChanges
    .pipe(
      map(value => value.title),
      map((title: string) => {
        if (this.data) {
          return this.data.filter(item => item.country.name.toLowerCase().includes(title.toLowerCase()))
        } else {
          return [];
        }
      })
    );


  constructor(
    private analiticsDataService: AnaliticsDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private zone: NgZone,
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    this.analiticsDataService.getAnaliticsForPromByCounties()
      .pipe(
        tap(data => {
          this.data = data;
          this.searchForm.setValue({ title: '' });
          this.actualDate = data[data.length - 1].month;
          this.initChart(data);
        })
      )
      .subscribe();
  }

  public initChart(analitics: Array<AnaliticsByCountry>) {
    this.zone.runOutsideAngular(() => {

      // Create map instance
      this.chart = am4core.create(this.chartContainer.nativeElement, am4maps.MapChart);
      const chart = this.chart;


      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Create map polygon series
      const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true;

      // Configure series
      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = '{name}:\n{value}';
      polygonTemplate.fill = am4core.color('gray');

      // Create hover state and set alternative fill color
      const hs = polygonTemplate.states.create('hover');
      hs.properties.fill = am4core.color('#000000');

      // Remove Antarctica
      // polygonSeries.exclude = ['AQ'];

      const color1 = am4core.color('#F05C5C');
      const color2 = am4core.color('rgb(92, 240, 183)');

      // Add some data
      // polygonSeries.data = [
      //   {
      //     id: 'US',
      //     name: 'United States',
      //     value: 100,
      //     fill: color1
      //   },
      //   {
      //     id: 'FR',
      //     name: 'France',
      //     value: 50,
      //     fill: color1
      //   },
      //   {
      //     id: 'CN',
      //     name: 'China',
      //     value: 500,
      //     fill: color2
      //   },
      //   {
      //     id: 'BH',
      //     name: 'Bahrain',
      //     value: 50,
      //     fill: color2
      //   },
      //   {
      //     id: 'BR',
      //     name: 'Brazil',
      //     value: 50,
      //     fill: color2
      //   },
      // ];

      polygonSeries.data = analitics.map(x => {
        return {
          id: x.country.alpha2,
          name: x.country.name,
          fill: color1,

          value: x.volume,
        }
      });

      // Bind "fill" property to "fill" key in data
      polygonTemplate.propertyFields.fill = 'fill';


    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}

