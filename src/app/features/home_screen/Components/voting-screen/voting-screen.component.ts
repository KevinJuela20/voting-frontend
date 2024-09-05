import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-voting-screen',
  standalone: true,
  imports: [TableModule, CommonModule, ConfirmDialogModule, ToastModule, ButtonModule],
  templateUrl: './voting-screen.component.html',
  styleUrl: './voting-screen.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class VotingScreenComponent {

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

  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) {
    this.columns = [
      {field: 'name', header: 'Candidato'},
      {field: 'image', header: 'Fotografía'},
      {field: 'numberParty', header: 'Partido'}
    ]
  }

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
        icon: 'pi pi-check-square',
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
          }
      });
  }


}
