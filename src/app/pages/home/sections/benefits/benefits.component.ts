import { Component, inject } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-benefits-section',
  imports: [TablerIconsModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsSectionComponent {
  readonly items = inject(LandingDataService).benefits;
}
