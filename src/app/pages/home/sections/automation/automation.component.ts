import { Component, inject } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-automation-section',
  imports: [TablerIconsModule],
  templateUrl: './automation.component.html',
  styleUrl: './automation.component.scss',
})
export class AutomationSectionComponent {
  readonly items = inject(LandingDataService).differentials;
}
