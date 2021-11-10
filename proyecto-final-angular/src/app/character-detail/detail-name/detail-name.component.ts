import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-name',
  templateUrl: './detail-name.component.html',
  styleUrls: ['./detail-name.component.scss']
})
export class DetailNameComponent {

  @Input('parentToChild') name: any;

}
