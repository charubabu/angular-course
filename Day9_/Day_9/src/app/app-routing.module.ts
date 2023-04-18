import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogcontentComponent } from './papers/dialogcontent/dialogcontent.component';

const routes: Routes = [
  {path:"dialog",component:DialogcontentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
