import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    EducationComponent
  ],
  exports: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class EducationModule { }
