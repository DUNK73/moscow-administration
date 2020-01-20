import { Component, OnInit, OnDestroy, AfterViewInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { tap, takeUntil, switchMap } from 'rxjs/operators';
import { Company } from 'src/app/models/company';
import { Subject, Observable } from 'rxjs';
import { ClientsDataService } from 'src/app/core/dtata-services/clients-data.service';
import { CompaniesDataService } from 'src/app/core/dtata-services/companies-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-info-results-tile',
  templateUrl: './client-info-results-tile.component.html',
  styleUrls: ['./client-info-results-tile.component.css']
})
export class ClientInfoResultsTileComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4maps.MapChart;
  public company$: Observable<Company> = new Observable();

  @ViewChild('chartContainer')
  private chartContainer: ElementRef;

  private unsubscribe$$ = new Subject();

  constructor(
    private clientsDataService: ClientsDataService,
    private companiesDataService: CompaniesDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private zone: NgZone,
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(params => {

          let companyId = +params['companyId'];

          return this.companiesDataService.getCompany(companyId)
            .pipe(
              tap((company: Company) => {
                this.initChart(company);
              })
            );
        }),
        takeUntil(this.unsubscribe$$)
      )
      .subscribe();
  }

  public initChart(company: Company) {
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
      polygonTemplate.tooltipText = '{name}';
      polygonTemplate.fill = am4core.color('gray');

      // Create hover state and set alternative fill color
      const hs = polygonTemplate.states.create('hover');
      hs.properties.fill = am4core.color('#367B25');

      // Remove Antarctica
      polygonSeries.exclude = ['AQ'];

      const color1 = am4core.color('#F05C5C');
      const color2 = am4core.color('rgb(92, 240, 183)');

      polygonSeries.data = company.aim_countries.map(country => {
        return {
          id: country.alpha2,
          name: country.name,
          fill: color1
        }
      });

      // Add some data
      // [
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

      // Bind "fill" property to "fill" key in data
      polygonTemplate.propertyFields.fill = 'fill';

      // Create image series
      const imageSeries = chart.series.push(new am4maps.MapImageSeries());

      // Create a circle image in image series template so it gets replicated to all new images
      const imageSeriesTemplate = imageSeries.mapImages.template;
      const circle = imageSeriesTemplate.createChild(am4core.Circle);
      circle.radius = 4;
      circle.fill = am4core.color('#B27799');
      circle.stroke = am4core.color('#FFFFFF');
      circle.strokeWidth = 2;
      circle.nonScaling = true;
      circle.tooltipText = '{title}';

      // Set property fields
      imageSeriesTemplate.propertyFields.latitude = 'latitude';
      imageSeriesTemplate.propertyFields.longitude = 'longitude';

      // Add data for the three cities
      // imageSeries.data = [{
      //   latitude: 48.856614,
      //   longitude: 2.352222,
      //   title: 'Paris'
      // }, {
      //   latitude: 40.712775,
      //   longitude: -74.005973,
      //   title: 'New York'
      // }, {
      //   latitude: 49.282729,
      //   longitude: -123.120738,
      //   title: 'Vancouver'
      // }];

    });
  }


  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
    this.unsubscribe$$.next();
  }

}
