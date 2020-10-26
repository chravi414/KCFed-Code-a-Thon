import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements OnInit {
  @Input() tipName :string;

  @Input() tipDesc: any;

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  public isOpen : boolean = false;

  constructor() { }

  ngOnInit() {}

  public toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }

  public broadcastName(name: string): void {
    this.change.emit(name);
  }



}
