import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow',
  imports: [CommonModule],
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
  standalone: true,
})
export class FlowComponent implements OnInit {
  constructor() {}
  name: string = 'iris';
  ngOnInit() {}

  getNumbers() {
    return [10, 3, 45, 0, 69, 12, 11];
  }
}
