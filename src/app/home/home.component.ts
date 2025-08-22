import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../components/home/hero-section/hero-section.component';
import { AboutComponent } from '../components/home/about/about.component';
import { ExperienceComponent } from '../components/home/experience/experience.component';
import { SkillsComponent } from '../components/home/skills/skills.component';
import { EducationComponent } from '../components/home/education/education.component';
import { ContactComponent } from '../components/home/contact/contact.component';
import { BlogService } from '@/core/services/blog.service';
import { AwardsComponent} from '../components/home/awards/awards.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    AwardsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
      }
    });
  }
}