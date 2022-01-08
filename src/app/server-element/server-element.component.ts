import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild,
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class ServerElementComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // allows us to pass data to nested component & define types of element
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) heading; // was header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentParagraph;

  // playing around with lifecycle hooks
  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log(this.contentParagraph.nativeElement.textContent);
    console.log(this.heading.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    console.log(this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log(this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }
}
