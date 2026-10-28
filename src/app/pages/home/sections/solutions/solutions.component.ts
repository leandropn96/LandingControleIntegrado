import { Component, inject } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-solutions-section',
  imports: [TablerIconsModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsSectionComponent {
  readonly steps = inject(LandingDataService).solutionSteps;
}
