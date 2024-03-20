import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordLayoutComponent } from '../layout/dashbord-layout/dashbord-layout.component';
import { DashboardComponent } from './dashboard.component';
import { MyPortalComponent } from './my-portal/my-portal.component';
import { JobsComponent } from './jobs/jobs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProgramsComponent } from './programs/programs.component';

import { PersonalInfoComponent } from './my-portal/personal-info/personal-info.component';
import { TrainersComponent } from './trainers/trainers.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashbordLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: "my-portal",
        component: MyPortalComponent
      },
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'blog',
        component: BlogsComponent
      },
      {
        path: "programs",
        component: ProgramsComponent
      },
      {
        path: 'trainers',
        component: TrainersComponent
      },
      {
        path: "",
        loadChildren: () => import('./my-portal/my-portal.module').then(m => m.MyPortalModule)
      },
      {
        path: 'pers-info',
        component: PersonalInfoComponent
      },
      {
        path: '',
        loadChildren: () => import('./programs/programs.module').then(m =>m.ProgramsModule )
      },
      {
        path: '',
        loadChildren:() => import('./blogs/blogs.module').then(m => m.BlogsModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule),
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
