import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
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
import { CandidateModule } from '../../models/CandidateModule';
// Services
import { ProvinceService } from 'src/app/core/services/province/province.service';
import { CandidateService } from 'src/app/core/services/candidate/candidate.service';
import { VoteService } from 'src/app/core/services/Vote/vote.service';
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule, TableModule, DropdownModule,
    FormsModule, ButtonModule, CommonModule, DialogModule,
    SidebarModule, DividerModule, ConfirmDialogModule, ToastModule,
    InputTextModule, PanelModule, ReactiveFormsModule, InputNumberModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class ChartsComponent implements OnInit {
  fechaActual: Date = new Date();
  total: Number = 10000;
  options_bar: any;
  basicData: any;
  data: any;
  selectedProvince: ProvinceModule | undefined;
  selectedProvince_2: ProvinceModule | undefined;
  candidates_list = ['Luisa González', 'Pedro Granja', 'Daniel Noboa', 'Francesco Tabacchi']

  //Variables de servicios
  cities: ProvinceModule[] | undefined;
  candidateData: CandidateModule[] | undefined;
  candidatos: CandidateModule [] | undefined; //drop-down
  selectedCandidate: CandidateModule | undefined; //selection of drop-down
  
  //
  votingSideBar: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private _formBuilder: FormBuilder,
    private _province: ProvinceService,
    private _candidate: CandidateService,
    private _vote:VoteService
  ) {

    //Obtener provincias
    this.obtenerProvincias();

    //Obtener candidatos
    this.obtenerCandidatos()

    this.columns = [
      {field: 'name', header: 'Nombre'},
      {field: 'image', header: 'Imagen'},
      {field: 'politicalParty', header: 'Partido'}
    ];
    this.obtenerProvincias();
    this.createFormRegister()

  }


  // Aspectos de votación
  showDialog() {
    this.votingSideBar = true;
  }

  closeDialog() {
    this.votingSideBar = false;  // Cerrar el modal
  }


ngOnInit(): void {

  // Inicializar gráfico con todos los candidatos
  this.basicData = {
    labels: this.list_candidate,
    datasets: [
      {
        label: 'Votos',
        data: this.list_votes,
        backgroundColor: ['rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgb(255, 159, 64)'],
        borderWidth: 2
      }
    ]
  };

  // Configuración del gráfico de barras
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
  };

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

  // Obtener listado de provincias
  obtenerProvincias(): void {
    this._province.getProvinces().subscribe({
      next: (data) => {
        /* const all_provinces: ProvinceModule = {id: 0, name: "Selecciona una provincia"}
        this.cities = [all_provinces, ...data] */
        this.cities = data;
      },
      error: (err) => {
        /* this.messageService.add({severity: 'error', summary: 'Provincias', detail: err, life: 3000 }) */
      }
    })
  }

  list_candidate: any;
  list_votes: any;
  // Obtener listado de candidatos
  obtenerCandidatos():void {
    this._candidate.getCandidates().subscribe({
      next: (data) => {
        this.candidateData = data;
        const all_candidates: CandidateModule = {candidateId: 0, name:"Todos", politicalParty:"", description:"", votes:0, imageUrl:""}
        this.candidatos = [all_candidates, ...data]
        this.list_candidate = this.candidateData?.map(candidate => candidate.name)
        this.list_votes = this.candidateData?.map(candidate => candidate.votes)
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Candidatos', detail: err, life: 3000 })
      }
    })
  }

  //guardar votos

  

  // FILTROS -----------------------------------------------
  filtro(event: any): void {
    if (this.selectedCandidate?.candidateId != 0) {
      // Filtrar solo el candidato seleccionado
      this.list_candidate = [this.selectedCandidate!.name];
      this.list_votes = [this.selectedCandidate!.votes];

      this.basicData = {
        labels: this.list_candidate,
        datasets: [
          {
            label: 'Votos',
            data: this.list_votes,
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 2
          }
        ]
      };
    } else {
      this.list_candidate = this.candidateData?.map(candidate => candidate.name)
      this.list_votes = this.candidateData?.map(candidate => candidate.votes)

      this.basicData = {
        labels: this.list_candidate,
        datasets: [
          {
            label: 'Votos',
            data: this.list_votes,
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 2
          }
        ]
      };
    }
  }
  

  // Sidebar
  recargar = true;
  columns: any[];
  candidateRowSelection: any;

  recargarTabla(): void {
    this.recargar = false;
    setTimeout(() => {
      this.recargar = true;
    }, 0);
  }

  //Captura la selección de la fila en la tabla de detalles
  onRowSelectCandidate(event: any): void {
    if (event.data) {
      // * unicamente si data existe
      this.candidateRowSelection = event.data;
      this.confirm();
    }
  }

  // Captura el evento de deselección de la tabla detalles
  onRowUnselectCandidate(event: any): void {
    // * vamos a borrar los datos temporales
    this.candidateRowSelection = null;
  }

  confirm() {
    this.confirmationService.confirm({
      message: '¿Estás seguro de tu decisión?',
      header: 'Confirmar voto',
      accept: () => {
        //this.messageService.add({ severity: 'info', summary: 'Voto', detail: 'Registrado', life: 3000 });
        this.obtenerProvincias()
        this.visibleRegister()
      },
      reject: () => {
        //this.messageService.add({ severity: 'error', summary: 'Voto', detail: 'Cancelado', life: 3000 });
        this.candidateRowSelection = false;
        this, this.closeDialog();
      }
    });
  }

  // Record
  visibleRecord: boolean = false;
  formRegister!: FormGroup;

  visibleRegister() {
    this.visibleRecord = true
  }

  createFormRegister() {
    this.formRegister = this._formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      provincia: [null, [Validators.required]],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(120)]]
    })
  }
  onProvinciaChange(event: any) {
    // Extrae solo el id del objeto seleccionado
    const selectedProvinceId = event.value ? event.value.id : null;
    this.formRegister.patchValue({ provincia: selectedProvinceId });
  }

  guardarVoto(): void {

    if(this.formRegister.valid){
      const formValue = this.formRegister.value
      const voteRequest = {
        candidateId: this.candidateRowSelection.candidateId 
      };
      const userRequest = {
        email: formValue.correo,
        age: formValue.edad,
        provinceId: formValue.provincia
      };

      this._vote.createVote(voteRequest, userRequest).subscribe({
        next: (response) => {
          console.log('Voto guardado exitosamente:', response);
        },
        error: (err) => {
          console.error('Error al guardar el voto:', err);
        }
      });

      console.log('Lo que se envia')
      console.log(voteRequest)
      console.log(userRequest)
      this.messageService.add({ severity: 'info', summary: 'Voto', detail: 'Registrado', life: 3000 });
      this.visibleRecord = false;
      this, this.closeDialog();



    }else{
      this.formRegister.markAllAsTouched();
    }
    
  }

  CancelarVoto(): void {
    this.messageService.add({ severity: 'error', summary: 'Voto', detail: 'Cancelado', life: 3000 });
    this.visibleRecord = false;
    this, this.closeDialog();
  }
}
