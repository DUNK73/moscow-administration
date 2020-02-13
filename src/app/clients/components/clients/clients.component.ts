import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ClientsDataService } from 'src/app/core/dtata-services/clients-data.service';
import { CompaniesDataService } from 'src/app/core/dtata-services/companies-data.service';
import { Company } from 'src/app/models/company';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  public company$: Observable<Array<Company>>;

  public selected: Company;

  public searchForm: FormGroup = new FormGroup({
    title: new FormControl(),
    turnoverSum: new FormControl(),
    exportSum: new FormControl(),
  });

  constructor(
    private clientsDataService: ClientsDataService,
    private companiesDataService: CompaniesDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {


    this.company$ = this.companiesDataService.getCompanies()
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
                    return (f.title_com || '').toUpperCase().includes((searchValue.title || '').toUpperCase())
                      && (f.export_turnover && f.export_turnover.toString() || '')
                        .includes((searchValue.turnoverSum && searchValue.turnoverSum.toString() || ''))
                      && (f.revenue && f.revenue.toString() || '')
                        .includes((searchValue.exportSum && searchValue.exportSum.toString() || ''));
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
  //         right-tile-outlet: ['clients-right-tile', item.id],
  //         'bottom-tile-outlet': ['../','clients-bottom-tile', item.id]
  //       }
  //     }
  //   ]"

  public toggleSelected(item: Company) {

    let outlets: {
      [key: string]: Array<any>
    };

    if (this.selected === item) {
      this.selected = null;
      outlets = {
        'bottom-tile-outlet': ['general-bottom-tile'],
        'right-tile-outlet': ['general-right-tile'],
      };
    } else {
      this.selected = item;
      outlets = {
        'right-tile-outlet': ['clients-right-tile', item.id],
        'bottom-tile-outlet': ['clients-bottom-tile', item.id]
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
