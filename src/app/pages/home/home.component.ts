import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/layout/header/header.component';
import { FooterComponent } from '../../core/layout/footer/footer.component';
import { HeroSectionComponent } from './sections/hero/hero.component';
import { ProblemsSectionComponent } from './sections/problems/problems.component';
import { SolutionsSectionComponent } from './sections/solutions/solutions.component';
import { FeaturesSectionComponent } from './sections/features/features.component';
import { AutomationSectionComponent } from './sections/automation/automation.component';
import { SegmentsSectionComponent } from './sections/segments/segments.component';
import { ScreensSectionComponent } from './sections/screens/screens.component';
import { BenefitsSectionComponent } from './sections/benefits/benefits.component';
import { NumbersSectionComponent } from './sections/numbers/numbers.component';
import { TestimonialsSectionComponent } from './sections/testimonials/testimonials.component';
import { PlansSectionComponent } from './sections/plans/plans.component';
import { FaqSectionComponent } from './sections/faq/faq.component';
import { ContactSectionComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ProblemsSectionComponent,
    SolutionsSectionComponent,
    FeaturesSectionComponent,
    AutomationSectionComponent,
    SegmentsSectionComponent,
    ScreensSectionComponent,
    BenefitsSectionComponent,
    NumbersSectionComponent,
    TestimonialsSectionComponent,
    PlansSectionComponent,
    FaqSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePageComponent {}
