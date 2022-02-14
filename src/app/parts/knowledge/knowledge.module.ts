import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeComponent } from './knowledge.component';



@NgModule({
  declarations: [
    KnowledgeComponent
  ],
  exports: [
    KnowledgeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KnowledgeModule { }
