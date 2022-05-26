import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './dev/dev.component';
import { HtmlDesignerComponent } from './html-designer/html-designer.component';

const routes: Routes = [
  { path: 'dev', component: DevComponent },
  { path: 'design', component: HtmlDesignerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
