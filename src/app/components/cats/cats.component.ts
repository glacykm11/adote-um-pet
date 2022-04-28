import { Component, OnInit } from '@angular/core';
import { GatinhosService } from 'src/app/shared/gatinhos.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  gatos: any;

  constructor(private gatinhosService: GatinhosService) {}

  ngOnInit(): void {
    this.gatinhosService.getCatsBreed().subscribe((dados) => {
      this.gatos = dados;
    });
  }

  controlScrollLeft() {
    var container = document.getElementById('container');
    this.sideScroll(container, 'left', 40, 260, 10);
  }

  controlScrollRight() {
    var container = document.getElementById('container');
    this.sideScroll(container, 'right', 40, 260, 10);
  }

  sideScroll(
    element: any,
    direction: string,
    speed: number,
    distance: number,
    step: number
  ) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
}
