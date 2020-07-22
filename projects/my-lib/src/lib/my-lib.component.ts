import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.css']
  /*selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: [
  ]*/
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
