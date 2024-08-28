import {  Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule, FormsModule, DropdownModule,
    CardModule, AvatarModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit{
    basicData: any;
    data: any;
    cities: City[] | undefined;
    selectedProvince: City | undefined;

    ngOnInit(): void {
      
      this.cities = [
        { name: 'Azuay', code: 'AZ' },
        { name: 'Bolivar', code: 'BO' },
        { name: 'Cañar', code: 'CÑ' },
        { name: 'Carchi', code: 'CH' },
        { name: 'El Oro', code: 'EO' }
      ];

      this.basicData = {
        labels: ['Lista 1', 'Lista 2', 'Lista 3', 'Lista 4'],
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

      this.data = {
        labels: ['Válidos', 'Nulos', 'Blancos'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                hoverBackgroundColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)']
            }
        ]
      };
    }
}
