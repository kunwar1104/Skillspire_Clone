import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { DemoComponent } from './prectice/demo/demo.component';
import { MaterixComponent } from './prectice/materix/materix.component';
import { QuizComponent } from './prectice/quiz/quiz.component';
import { StarPatternComponent } from './prectice/star-pattern/star-pattern.component';
import { ParentChildComponent } from './prectice/parent-child/parent-child.component';


const routes: Routes = [
  {
     path: "", 
    redirectTo: '',
    pathMatch : 'full'
  },
  
  {
    path: "",
    loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "",
    loadChildren: () => import ('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: "",
    loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  
 {
   path: 'demo',
   component : DemoComponent
 },
 {
  path: "materix",
  component: MaterixComponent
 },
 {
  path : "quiz",
  component : QuizComponent
 },
 {
  path: "star",
  component : StarPatternComponent
 },
 {
  path: "parent-child",
  component: ParentChildComponent
 },
 {
  path: "",
  loadChildren: () => import ('./prectice/parent-child/parent.module').then(m => m.ParentModule) 
}
  
  
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
