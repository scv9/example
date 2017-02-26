import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() value: string;
  @Input() showPrompt: boolean;
  @Input() placeholder: string;
  @Input() title: string;
  @Input() template: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();

  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
  }

  emitValue(value) {
    this.valueEmitted.emit(value);
  }

  ngOnInit() {
  }

}
