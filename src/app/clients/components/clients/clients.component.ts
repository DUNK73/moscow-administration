import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { CompaniesDataService } from 'src/app/core/dtata-services/companies-data.service';
import { Client } from 'src/app/models/client';
import { ClientsDataService } from 'src/app/core/dtata-services/clients-data.service';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  public clients$: Observable<Array<Client>>;

  public selected: Client;

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

    this.companiesDataService.getCompanies()
      .subscribe();

    this.clients$ = this.clientsDataService.getClients()
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
                      && (f.turnoverSum && f.turnoverSum.toString() || '')
                        .includes((searchValue.turnoverSum && searchValue.turnoverSum.toString() || ''))
                      && (f.exportSum && f.exportSum.toString() || '')
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
  //         right-tile-outlet: ['client-info-results', item.id],
  //         'bottom-tile-outlet': ['../','client-info', item.id]
  //       }
  //     }
  //   ]"

  public toggleSelected(item: Client) {

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
        'right-tile-outlet': ['client-info-results', 0],
        'bottom-tile-outlet': ['client-info', 0]
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
