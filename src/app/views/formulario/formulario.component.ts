import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  foods: Food[] = [
    {value: 'Estrategia de marca-0', viewValue: 'Estrategia de marca'},
    {value: 'Branding-1', viewValue: 'Branding'},
    {value: 'Gestión de redes sociales-2', viewValue: 'Gestión de redes sociales '},
    {value: 'Digitalización-3', viewValue: 'Digitalización'}
  ];

  miFormulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    celular: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    empresa: new FormControl('', Validators.required),


  });

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

}
