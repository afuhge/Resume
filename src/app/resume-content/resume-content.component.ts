import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {  faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume-content',
  templateUrl: './resume-content.component.html',
  styleUrls: ['./resume-content.component.scss']
})
export class ResumeContentComponent {
  public link: IconDefinition = faExternalLinkAlt;

}
