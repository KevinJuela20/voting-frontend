import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login-design',
  standalone: true,
  imports: [],
  templateUrl: './login-design.component.html',
  styleUrl: './login-design.component.scss'
})
export class LoginDesignComponent implements AfterViewInit {

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


}
