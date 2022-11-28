import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormularioComponent } from './views/formulario/formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CuadrosComponent } from './views/cuadros/cuadros.component';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MensajeComponent } from './views/mensaje/mensaje.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: '#',
    pathMatch: 'full',
  },

  {
    path: 'index',
    component: IndexComponent,
  },

  {
    path: 'mensaje',
    component: MensajeComponent,
  },

  {
    path: '**',
    component: IndexComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FormularioComponent,
    CuadrosComponent,
    MensajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    HttpClientModule,
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
