import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { barvalues } from './barvalues';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('input should be correct',()=>{
    const myinput:barvalues[]=[
        {name:'Sales',value:52,color:"primary"},
    {name:'Projects',value:80,color:"accent"},
    {name:'Visitor',value:25,color:"warn"},
    {name:'New Users',value:80,color:"accent"},
    {name:'Revenue',value:50,color:"warn"},
    {name:'Total sold',value:40,color:"accent"}
      
    ]
    component.getval=myinput;
    expect(component.getval).toEqual(myinput);
  })

});
