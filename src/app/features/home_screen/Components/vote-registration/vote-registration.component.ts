import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-vote-registration',
  standalone: true,
  imports: [TableModule, DropdownModule,
    FormsModule, ButtonModule, CommonModule, DialogModule,
    SidebarModule, DividerModule, ConfirmDialogModule, ToastModule,
    InputTextModule, PanelModule, ReactiveFormsModule, InputNumberModule],
  templateUrl: './vote-registration.component.html',
  styleUrl: './vote-registration.component.scss',
  providers:  [ConfirmationService, MessageService]

})
export class VoteRegistrationComponent {
  visibleRecord: boolean = false;
  formRegister!: FormGroup;
  cities= ['Ambato', 'Ibarra']

  votingSideBar: boolean = false;
  constructor(
    private messageService: MessageService
  ){}
  guardarVoto(): void {
    this.messageService.add({ severity: 'info', summary: 'Voto', detail: 'Registrado', life: 3000 });
    this.visibleRecord = false;
    this, this.closeDialog();
  }
  ngOnInit():void{
    
    this.visibleRegister()
  }

  visibleRegister() {
    this.visibleRecord = true
  }
  CancelarVoto(): void {
    this.messageService.add({ severity: 'error', summary: 'Voto', detail: 'Cancelado', life: 3000 });
    this, this.closeDialog();
  }
  closeDialog() {
    this.votingSideBar = false;  // Cerrar el modal
  }
}
