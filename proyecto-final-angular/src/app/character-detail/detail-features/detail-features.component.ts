import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-features',
  templateUrl: './detail-features.component.html',
  styleUrls: ['./detail-features.component.scss']
})
export class DetailFeaturesComponent {

  @Input('parentToChild') name: any;

}
