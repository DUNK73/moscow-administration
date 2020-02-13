import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ChildPrimaryComponent',
  templateUrl: './ChildPrimaryComponent.component.html',
  styleUrls: ['./ChildPrimaryComponent.component.css']
})
export class ChildPrimaryComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {

  }

  setChildSecondary() {
    this.router.navigate(
      // [ 'fp2' ],
      [ { outlets: { 'right-tile-outlet': ['clients-right-tile'] } }],
      // { skipLocationChange: true }
      { relativeTo: this.route }
    );
  }

}
