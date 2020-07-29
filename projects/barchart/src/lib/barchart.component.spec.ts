import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartComponent } from './barchart.component';
import { barchartdata } from './barchartdata';
import { NgApexchartsModule } from 'ng-apexcharts';
 
describe('BarchartComponent', () => {
  let component: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartComponent ],
      imports:[NgApexchartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('input should be correct',()=>{
    const input:barchartdata={
       name1 : "Sessions",
       name2: "Revenue",
       data1:[30, 12, 2],
       data2:[56, 2, 0],
       categories:['desktop', 'mobile', 'tablet']
    }
    component.bardata=input;
    expect(component.bardata).toEqual(input);
    expect(component.bardata.categories).toEqual(['desktop', 'mobile', 'tablet']);
  })
});
