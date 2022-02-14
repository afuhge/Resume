import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  exports: [
    SkillsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SkillsModule { }
