import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.scss']
})
export class DetailImageComponent{

  @Input('parentToChild') name: any;

}
