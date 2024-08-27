import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ChartsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
