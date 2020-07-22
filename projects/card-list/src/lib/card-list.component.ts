
import { Component, OnInit ,Input} from '@angular/core';
import { List } from './list';

@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: [ './card-list.component.css'
  ]
})
export class CardListComponent implements OnInit {

  
  constructor() { }
  
  @Input()
  public listItems:List[];
  @Input()
  s : string ;

  ngOnInit(): void {
  }

}
