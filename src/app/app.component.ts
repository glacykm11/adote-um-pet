import { Component, OnInit } from '@angular/core';
import { GatinhosService } from './shared/gatinhos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'barato-coletivo';
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
