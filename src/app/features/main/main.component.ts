import { Component } from '@angular/core';
import { HomeScreenModule } from '../home_screen/home_screen.module';
import { ChartsComponent } from "../home_screen/charts/charts.component";
import { LoginModule } from '../login/login.module';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeScreenModule, ChartsComponent, LoginModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
