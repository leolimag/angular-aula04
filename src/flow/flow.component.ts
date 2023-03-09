import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flow',
  imports: [CommonModule, FormsModule],
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
  standalone: true,
})
export class FlowComponent implements OnInit {
  constructor() {}
  n: number = 10;
  ngOnInit() {}

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }
}
