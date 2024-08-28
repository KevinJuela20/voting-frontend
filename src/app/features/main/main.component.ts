import { Component } from '@angular/core';
import { HomeScreenModule } from '../home_screen/home_screen.module';
import { ChartsComponent } from "../home_screen/Components/charts/charts.component";
import { HeaderComponent } from '../../layout/header/header.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeScreenModule, ChartsComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
