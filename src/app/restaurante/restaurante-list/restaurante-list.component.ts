import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante'
import { RestauranteService } from '../restaurante.service';
 
@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {

  restaurantes: Array<Restaurante> = [];
  rating: number = 0;
  name: string = "";
  selected: boolean = false;
  selectedRestaurante!: Restaurante;

  constructor(private restauranteService: RestauranteService) { }


  getRestaurantes(): void {
    this.restauranteService.getRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
      this.rating = 0;
      this.restaurantes.forEach((restaurante) => {
        if (restaurante.rating> this.rating) {
          this.rating = restaurante.rating;
          this.name = restaurante.name;
        }
      });
    });
  }

  onSelected(restaurante: Restaurante): void {
      this.selected = true;
      this.selectedRestaurante = restaurante;
  }

  ngOnInit() {
    this.getRestaurantes();
  }

}