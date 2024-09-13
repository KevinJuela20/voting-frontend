import {  Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
//PrimeNG
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog'
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
// Models
import { ProvinceModule } from '../../models/ProvinceModule';
// Services
import { ProvinceService } from 'src/app/core/services/province/province.service';
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule, TableModule, DropdownModule,
    FormsModule , ButtonModule, CommonModule, DialogModule,
    SidebarModule, DividerModule, ConfirmDialogModule, ToastModule,
  InputTextModule, PanelModule, ReactiveFormsModule, InputNumberModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class ChartsComponent implements OnInit{
  fechaActual: Date = new Date();
  total:Number = 10000;
  options_bar : any;
  basicData: any;
  data: any;
  cities: ProvinceModule[] | undefined;
  selectedProvince: ProvinceModule | undefined;
  selectedProvince_2: ProvinceModule | undefined;
  candidates_list = ['Luisa González', 'Pedro Granja', 'Daniel Noboa', 'Francesco Tabacchi']

  //
  votingSideBar: boolean = false;

  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    private _formBuilder: FormBuilder,
    private _province: ProvinceService
  ) {
    this.columns = [
      {field: 'name', header: 'Candidato'},
      {field: 'image', header: 'Fotografía'},
      {field: 'numberParty', header: 'Partido'}
    ];
  }

  // Aspectos de votación
  showDialog() {
      this.votingSideBar = true;
  }

  closeDialog() {
    this.votingSideBar = false;  // Cerrar el modal
  }
  

  ngOnInit(): void {
    this.obtenerProvincias();
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

  //Obtener listado de provincias
  obtenerProvincias(): void {
    this._province.getProvinces()
    .then((res) => {
      this.cities = res;
    })
  }

  // Sidebar
  recargar = true;
  columns: any [];
  candidateRowSelection: any;

  json_candidatos: any =
    [
      {id:1, name: 'Luisa González', party: 'Revolución Ciudadana', numberParty: '5', voteCount: 200, image:'images/candidates/Gonzalez-removebg-preview.png'},
      {id:2, name: 'Daniel Noboa', party: 'Accion Democrática Nacional', numberParty: '7', voteCount: 400, image:'images/candidates/Noboa-removebg-preview.png'},
      {id:3, name: 'Francesco Tabacchi', party: 'Creo', numberParty: '21', voteCount: 120, image:'images/candidates/Tabacchi-removebg-preview.png'},
      {id:4, name: 'Pedro Granja', party: 'Partido Socialista', numberParty: '17', voteCount: 200, image:'images/candidates/Granja-removebg-preview.png'},
      {id:5, name: 'Luisa González', party: 'Revolución Ciudadana', numberParty: '5', voteCount: 200, image:'images/candidates/Gonzalez-removebg-preview.png'},
      {id:6, name: 'Daniel Noboa', party: 'Accion Democrática Nacional', numberParty: '7', voteCount: 400, image:'images/candidates/Noboa-removebg-preview.png'},
      {id:7, name: 'Francesco Tabacchi', party: 'Creo', numberParty: '21', voteCount: 120, image:'images/candidates/Tabacchi-removebg-preview.png'},
      {id:8, name: 'Pedro Granja', party: 'Partido Socialista', numberParty: '17', voteCount: 200, image:'images/candidates/Granja-removebg-preview.png'},
    ]

  recargarTabla(): void {
    this.recargar = false;
    setTimeout(() => {
      this.recargar = true;
    }, 0);
  }

  //Captura la selección de la fila en la tabla de detalles
  onRowSelectCandidate(event:any): void {
    if (event.data) {
      // * unicamente si data existe
      this.candidateRowSelection = event.data;
      this.confirm();
    }
  }

  // Captura el evento de deselección de la tabla detalles
  onRowUnselectCandidate(event:any): void {
    // * vamos a borrar los datos temporales
    this.candidateRowSelection = null;
  }

  confirm() {
      this.confirmationService.confirm({
        message: '¿Estás seguro de tu decisión?',
        header: 'Confirmar voto',
          accept: () => {
              //this.messageService.add({ severity: 'info', summary: 'Voto', detail: 'Registrado', life: 3000 });
              this.visibleRegister()
          },
          reject: () => {
              //this.messageService.add({ severity: 'error', summary: 'Voto', detail: 'Cancelado', life: 3000 });
              this.candidateRowSelection = false;
              this,this.closeDialog();
          }
      });
  }

  // Record
  visibleRecord: boolean = false;
  formRegister!: FormGroup;

  visibleRegister() {
    this.visibleRecord = true
  }

  createFormRegister(){
    this.formRegister = this._formBuilder.group({
      correo: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      edad: ['', [Validators.required]]
    })
  }

  guardarVoto():void{
    this.messageService.add({ severity: 'info', summary: 'Voto', detail: 'Registrado', life: 3000 });
    this.visibleRecord = false;
    this,this.closeDialog();
  }

  CancelarVoto():void{
    this.messageService.add({ severity: 'error', summary: 'Voto', detail: 'Cancelado', life: 3000 });
    this,this.closeDialog();
  }
}
