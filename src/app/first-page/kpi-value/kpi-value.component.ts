import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-value',
  templateUrl: './kpi-value.component.html',
  styleUrls: ['./kpi-value.component.less']
})
export class KpiValueComponent implements OnInit {

  @Input()
  public value: number;
  @Input()
  public status: string;
  @Input()
  public percent: number;

  constructor() { }

  ngOnInit() {
  }

}
