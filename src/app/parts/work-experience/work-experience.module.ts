import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    WorkExperienceComponent
  ],
  exports: [
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class WorkExperienceModule { }
