import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
})
export class WorkExperienceComponent {
  public link: IconDefinition = faExternalLinkAlt;

}
