import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path: '', redirectTo: './AppComponent', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'subject', component: SubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
