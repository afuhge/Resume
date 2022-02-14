import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faBirthdayCake, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-resume-content-header',
  templateUrl: './resume-content-header.component.html',
  styleUrls: ['./resume-content-header.component.scss']
})
export class ResumeContentHeaderComponent {
  envelope: IconDefinition = faEnvelope;
  home: IconDefinition = faHome;
  phone: IconDefinition = faPhone;
  birthdayCake: IconDefinition = faBirthdayCake;
  github: IconDefinition = faGithub;
}
