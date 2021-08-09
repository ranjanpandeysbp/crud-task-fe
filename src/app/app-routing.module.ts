import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskScreenComponent } from './screens/task-screen/task-screen.component';

const routes: Routes = [
  { path: '', component: TaskScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
