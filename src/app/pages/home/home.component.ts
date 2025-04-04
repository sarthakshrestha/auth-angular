import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate(
          '600ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition(':decrement', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate(
          '600ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements AfterViewInit {
  currentFeatureIndex = 0;
  autoSlideInterval: any;

  features = [
    {
      icon: 'schedule',
      title: 'Instant',
      description: 'Real-time updates and live tracking',
    },
    {
      icon: 'insights',
      title: 'Analytics',
      description: 'Clear insights, better decisions',
    },
    {
      icon: 'devices',
      title: 'Anywhere',
      description: 'Access from any device, anytime',
    },
  ];

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextFeature();
    }, 4000); // Slightly faster rotation
  }

  nextFeature() {
    this.currentFeatureIndex =
      (this.currentFeatureIndex + 1) % this.features.length;
  }

  selectFeature(index: number) {
    this.currentFeatureIndex = index;
    this.stopAutoSlide(); // Stop auto-sliding when user manually selects
    this.startAutoSlide(); // Restart auto-sliding
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
