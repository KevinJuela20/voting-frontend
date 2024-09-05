import {  Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { VotingScreenComponent } from '../voting-screen/voting-screen.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog'
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';

interface City {
  name: string;
  code: number;
}

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule, TableModule, DropdownModule,
    FormsModule , ButtonModule, CommonModule, DialogModule,
    SidebarModule, VotingScreenComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit{
  fechaActual: Date = new Date();
  total:Number = 10000;
  options_bar : any;
  basicData: any;
  data: any;
  cities: City[] | undefined;
  selectedProvince: City | undefined;
  candidates_list = ['Luisa González', 'Pedro Granja', 'Daniel Noboa', 'Francesco Tabacchi']
  //
  votingSideBar: boolean = false;


  // Aspectos de votación
  showDialog() {
      this.votingSideBar = true;
  }
  

    ngOnInit(): void {
      
      this.cities = [
        { name: 'Ecuador', code: 0 },
        { name: 'Azuay', code: 1 },
        { name: 'Bolívar', code: 2 },
        { name: 'Cañar', code: 3 },
        { name: 'Carchi', code: 4 },
        { name: 'Chimborazo', code: 5 },
        { name: 'Cotopaxi', code: 6 },
        { name: 'El Oro', code: 7 },
        { name: 'Esmeraldas', code: 8 },
        { name: 'Galápagos', code: 9 },
        { name: 'Guayas', code: 10 },
        { name: 'Imbabura', code: 11 },
        { name: 'Loja', code: 12 },
        { name: 'Los Ríos', code: 13 },
        { name: 'Manabí', code: 14 },
        { name: 'Morona Santiago', code: 15 },
        { name: 'Napo', code: 16 },
        { name: 'Orellana', code: 17 },
        { name: 'Pastaza', code: 18 },
        { name: 'Pichincha', code: 19 },
        { name: 'Santa Elena', code: 20 },
        { name: 'Santo Domingo', code: 21 },
        { name: 'Sucumbíos', code: 22 },
        { name: 'Tungurahua', code: 23 },
        { name: 'Zamora Chinchipe', code: 24 }
    ];

    //Gráfico de barras
      this.basicData = {
        labels: this.candidates_list,
        datasets: [
          {
            label: 'Votos',
            data: [540, 325, 702, 620],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
          }
        ]
      };

      //Configuración horizontal
      this.options_bar = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: 'rgb(0, 0, 0)'
                }
            }
        },
      }

      //Gráfico de dona
      this.data = {
        labels: ['Válidos', 'Nulos', 'Blancos'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['rgba(255, 159, 64, 0.7)', 'rgba(127, 229, 228, 0.7)', 'rgba(134, 223, 157, 0.7)'],
                hoverBackgroundColor: ['rgb(255, 159, 64)', 'rgb(127, 229, 228 )', 'rgb(134, 223, 157)']
            }
        ]
      };
    }
}
