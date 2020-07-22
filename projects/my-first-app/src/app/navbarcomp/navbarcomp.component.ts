import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.css']
})
export class NavbarcompComponent implements OnInit {

  showNavbarHtml: boolean = false;
  showNavbarTs: boolean = false;
  showNavbarCss: boolean = false;
  toggleHtml(){
    this.showNavbarCss =false;
    this.showNavbarTs =false;
    this.showNavbarHtml = !this.showNavbarHtml;
  }
  toggleTs(){
    this.showNavbarHtml =false;
    this.showNavbarCss =false;
    this.showNavbarTs = !this.showNavbarTs;
  }
  toggleCss(){
    this.showNavbarTs =false;
    this.showNavbarHtml =false;
    this.showNavbarCss = !this.showNavbarCss;
  }
  public navbarHtmlCode = 
  `<mat-toolbar color="primary" class="navbar">
  <div>
    <mat-icon class="logo">eco</mat-icon>
    <span class="name">ADMIRE ADMIN</span>
    <mat-icon class="menu1">menu</mat-icon>
  </div>
  <div>
    <mat-icon class="icons">move_to_inbox</mat-icon> <span class="items">Inbox</span>
    <mat-icon class="icons">create</mat-icon><span class="items">Compose</span>
    <mat-icon class="icons">location_on</mat-icon><span class="items">Maps</span>
    <mat-icon class="icons">collections</mat-icon><span class="items">Gallery</span>
  </div>
</mat-toolbar>`;

  public navbarTsCode = 
  `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'lib-navbar',
    templateUrl:'navbar.component.html' ,
    styleUrls: ['navbar.component.css'
    ]
  })
  export class NavbarComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  `;

  public navbarCssCode = 
  `.navbar{
      justify-content: space-between;
  }
  span{
      padding-right: 1rem;
  }
  .name{
      position: relative;
      left: 0.2rem;
      vertical-align: super;
      font-size: 23px;
  }
  .menu1{
      position: relative;
      left: 3.5rem;
      font-size: 38px;
      vertical-align: sub;
  }
  .logo{
       vertical-align: super;
  }
  .icons{
      vertical-align: sub;
  }
  .items{
      font-size: 18px;
  }
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
