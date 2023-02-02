import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComunicacionCComponent } from './comunicacion/comunicacion-c/comunicacion-c.component';
import { PaisesCComponent } from './paises/paises-c/paises-c.component';

const routes: Routes = [
  {path: "comunicaciones", component: ComunicacionCComponent},
  {path: "paises", component: PaisesCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
