import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit {
  
  @Input() parentData: any;
  @Input() product:any;
  @ContentChild("child") ContentChild:any;
  @ViewChild("childHook") ViewChild:any;

  constructor(){
    console.log("Constructor called");
  }
  ngOnInit(): void {
    console.log("ngOnit called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called",changes);
  }
  ngDoCheck(): void {
    console.log("ngDoCheck",this.product);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterInit",this.ContentChild);
    // this.ContentChild.nativeElement.setAttribute("style", 'color:${this.parentData}')
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    this.ContentChild.nativeElement.setAttribute("style", 'color:${this.parentData}')
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

}
