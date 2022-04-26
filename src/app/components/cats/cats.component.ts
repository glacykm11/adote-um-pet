import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
 name = 'gatinho fofo'
 image = 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
 description = 'The Abyssinian is easy to care for, and a joy to have in your home'
  constructor() { }

  ngOnInit(): void {
  }

}
