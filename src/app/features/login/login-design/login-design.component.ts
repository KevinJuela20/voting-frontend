import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login-design',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-design.component.html',
  styleUrl: './login-design.component.scss'
})
export class LoginDesignComponent implements AfterViewInit {

  name:string = '';
  provinces:string[] = [
    'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi', 'El Oro', 'Esmeraldas',
    'Galápagos', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí', 'Morona Santiago',
    'Napo', 'Orellana', 'Pastaza', 'Pichincha', 'Santa Elena', 'Santo Domingo de los Tsáchilas',
    'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'
  ];
  age:number | null = null;
  email:string = '';
  password:string = '';
  selectedProvince:string = '';

  @ViewChild('signInBtn') signInBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('signUpBtn') signUpBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('container') container!: ElementRef<HTMLButtonElement>;
  @ViewChild('signInBtn2') signInBtn2!: ElementRef<HTMLButtonElement>;
  @ViewChild('signUpBtn2') signUpBtn2!: ElementRef<HTMLButtonElement>;
  ngAfterViewInit(): void {
    // Accede al botón después de que la vista se haya inicializado
    const signInBtn = this.signInBtn.nativeElement;
    const signUpBtn = this.signUpBtn.nativeElement;
    const container = this.container.nativeElement;
    const signInBtn2 = this.signInBtn2.nativeElement;
    const signUpBtn2 = this.signUpBtn2.nativeElement;

    // Ahora puedes usar `signInBtn` para agregar eventos o manipular el botón
    signUpBtn.addEventListener('click', () => {
      container.classList.add('sign-up-mode')
    });
    signInBtn.addEventListener('click', () => {
      container.classList.remove('sign-up-mode')
    });
    signUpBtn2.addEventListener('click', () => {
      container.classList.add('sign-up-mode2')
    });
    signInBtn2.addEventListener('click', () => {
      container.classList.remove('sign-up-mode2')
    });
  }
  //prueba de inicio de sesion
  datosInicioSesion():void{
    console.log('mi correo: ', this.email)
    console.log('mi password: ', this.password)
  }

  //prueba de crear sesion
  datosCrearSesion():void{
    console.log('mi correo: ', this.email)
    console.log('mi password: ', this.password)
    console.log('mi nombre: ', this.name)
    console.log('mi edad: ', this.age)
    console.log('mi provincia: ', this.selectedProvince)
    
  }

}
