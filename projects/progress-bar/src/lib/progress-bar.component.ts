import { barvalues } from './barvalues';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrls: [ 'progress-bar.component.css'
  ]
})
export class ProgressBarComponent implements OnInit {

 
  @Input()
  public getval : barvalues[];
  constructor() { }
  ngOnInit(): void {
  }

}
