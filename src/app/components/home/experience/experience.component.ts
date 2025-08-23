import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { experiences } from '@/utils/data/experience';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class ExperienceComponent {
  experiences = experiences;
  workIcon = faBriefcase;
  lottieFile: any;

selectedIndex: number | null = null;

toggleExperience(index: number) {
  this.selectedIndex = this.selectedIndex === index ? null : index;
}

}