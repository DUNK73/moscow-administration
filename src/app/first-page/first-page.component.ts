import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { ActivityType } from '../analitics/models/activity-type.enum';
import { slideInAnimation as topTileAnimation, bottomTileAnimation, rightTileAnimation } from './animations';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less'],
  animations: [
    topTileAnimation,
    bottomTileAnimation,
    rightTileAnimation,
    // animation triggers go here
  ]
})
export class FirstPageComponent implements OnInit {

  public currentDate = new Date();
  public currentTab: string;

  public statisticButton: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.navigate(
      [
        {
          outlets: {
            'top-tile-outlet': ['general-top-tile'],
            'bottom-tile-outlet': ['general-bottom-tile'],
            'right-tile-outlet': ['general-right-tile'],
          }
        },
      ],
      { relativeTo: this.activatedRoute }
    );
  }

  public toggle(tab: 'client' | 'apk' | 'prom') {

    this.statisticButton = tab;

    let rout: string;

    const oulets: {
      'top-tile-outlet': Array<any>,
      'bottom-tile-outlet': Array<any>,
      'right-tile-outlet': Array<any>,
    } = {
      'top-tile-outlet': ['general-top-tile'],
      'bottom-tile-outlet': ['general-bottom-tile'],
      'right-tile-outlet': ['general-right-tile'],
    };



    if (this.currentTab === tab) {
      this.currentTab = null;
      rout = 'general-top-tile';
    } else {
      this.currentTab = tab;
      switch (tab) {

        case 'client':
          oulets['top-tile-outlet'] = ['clients-top-tile'];
          break;

        case 'apk':
          oulets['top-tile-outlet'] = ['analitics-top-tile', ActivityType.apk];
          oulets['bottom-tile-outlet'] = ['analitics-bottom-tile', ActivityType.apk];
          oulets['right-tile-outlet'] = ['analitics-right-tile', ActivityType.apk];
          break;

        case 'prom':
          oulets['top-tile-outlet'] = ['analitics-top-tile', ActivityType.prom];
          oulets['bottom-tile-outlet'] = ['analitics-bottom-tile', ActivityType.prom];
          oulets['right-tile-outlet'] = ['analitics-right-tile', ActivityType.prom];
          break;

        default:
          break;
      }
    }

    this.router.navigate(
      [
        {
          outlets: oulets
        },
      ],
      { relativeTo: this.activatedRoute }
    );


  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
