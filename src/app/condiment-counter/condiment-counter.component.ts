import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-condiment-counter',
  templateUrl: './condiment-counter.component.html',
  styleUrls: ['./condiment-counter.component.scss']
})
export class CondimentCounterComponent implements OnInit {

  @Input() condiment: any;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.condiment.count++;
  }

  remove() {
    this.condiment.count--;
    if (this.condiment.count == 0) this.condiment.count = null;
  }

  canRemove() {
    return this.condiment.count <= 0;
  }
}
