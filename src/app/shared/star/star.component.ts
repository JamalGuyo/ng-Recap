import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  constructor() {}

  ngOnInit(): void {
    this.starWidth = (this.rating * 100) / 5;
  }
}
