import { Component, Input } from '@angular/core';

@Component({
  selector: 'poc-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  @Input()
  public 'number': string;
}
