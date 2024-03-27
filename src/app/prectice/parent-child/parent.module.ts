import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildComponent } from './parent-child.component';
import { RouterModule } from '@angular/router';
import { ChildrenComponent } from './children.component';



@NgModule({
  declarations: [
    ParentChildComponent,
    ChildrenComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParentModule { }
