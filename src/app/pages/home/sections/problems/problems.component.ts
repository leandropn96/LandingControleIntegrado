import { Component, inject } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-problems-section',
  imports: [TablerIconsModule],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.scss',
})
export class ProblemsSectionComponent {
  readonly items = inject(LandingDataService).problems;
}
