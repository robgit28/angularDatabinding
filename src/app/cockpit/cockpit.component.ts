import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  // properties from app html, event that we emit
  @Output() serverCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();
  // used in HTML so defined here
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput;

  constructor() { }

  ngOnInit() {
  }
  // pass local reference in and type
  onAddServer(nameInput: HTMLInputElement) {
    // call emit method, emit new event of this type
    // pass the object in
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // call emit method, emit new event of this type
    // pass the object in
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
}
}
