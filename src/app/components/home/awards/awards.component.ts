import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Award {
  title: string;
  issuer: string;
  issuedDate: string;
  skills?: string;
  image: string;
}

@Component({
  selector: 'app-awards',
  imports:  [CommonModule],
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AwardsComponent {
  awards: Award[] = [
    {
      title: 'Resilient Force – Wabtec Bronze Award',
      issuer: 'Wabtec Corporation',
      issuedDate: 'Jun 2025',
      image: 'assets/wabtec_jan.heic',
    },
    {
      title: 'Key Contributor - Wabtec Bronze Award',
      issuer: 'Wabtec Corporation',
      issuedDate: 'Jan 2025',
      image: 'assets/wabtce_june.heic',
    },
    {
      title: '1st Rank In International Speech Contest',
      issuer: 'Wabtec Corporation Toastmasters Club',
      issuedDate: 'Mar 2024',
      image: 'assets/toastmaster.jpeg',
    }
  ];
}
