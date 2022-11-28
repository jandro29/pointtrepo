import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
  FormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  foods: Food[] = [
    { value: 'Estrategia de marca-0', viewValue: 'Estrategia de marca' },
    { value: 'Branding-1', viewValue: 'Branding' },
    {
      value: 'Gestión de redes sociales-2',
      viewValue: 'Gestión de redes sociales ',
    },
    { value: 'Digitalización-3', viewValue: 'Digitalización' },
  ];

  formLoading: boolean = false;

  contactForm = this.builder.group({
    nombre: ['', Validators.required],
    celular: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    empresa: ['', Validators.required],
    servicio: ['', Validators.required],
    mensaje: ['', Validators.required],
  });

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit() {
    if (this.formLoading) return;
    if (!this.contactForm.valid) return;

    const contactData = {
      nombre: this.contactForm.value.nombre,
      celular: this.contactForm.value.celular,
      apellido: this.contactForm.value.apellido,
      email: this.contactForm.value.email,
      empresa: this.contactForm.value.empresa,
      servicio: this.contactForm.value.servicio,
      mensaje: this.contactForm.value.mensaje,
    };

    this.formLoading = true;
    this.contactForm.disable();

    this.http
      .post<any>('https://pointtagencia.com/send-mail.php', contactData)
      .subscribe(
        (resp) => {
          this.formLoading = false;
          this.resetForm();
          this.contactForm.enable();
          this.router.navigate(['/mensaje']);
        },
        (error) => {
          alert(
            'Ocurrió un error. Por favor, inténtelo nuevamente en unos minutos.'
          );
          this.formLoading = false;
          this.contactForm.enable();
        }
      );
  }

  resetForm() {
    this.contactForm.controls['nombre'].patchValue('');
    this.contactForm.controls['celular'].patchValue('');
    this.contactForm.controls['apellido'].patchValue('');
    this.contactForm.controls['email'].patchValue('');
    this.contactForm.controls['empresa'].patchValue('');
    this.contactForm.controls['servicio'].patchValue('');
    this.contactForm.controls['mensaje'].patchValue('');
  }

  constructor(
    private http: HttpClient,
    private builder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
