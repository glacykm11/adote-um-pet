import { Component, OnInit } from '@angular/core';
import { GatinhosService } from './shared/services/gatinhos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    gatos: any;
    constructor(private gatinhosService: GatinhosService){}

    ngOnInit(): void {
        console.log(this.gatinhosService.getCatsBreed())
        this.gatinhosService.getCatsBreed()
        .subscribe(
            (dados) => {
                this.gatos = dados
            }
        )
    }
}
