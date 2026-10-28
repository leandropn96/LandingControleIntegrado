import { Injectable } from '@angular/core';
import { BENEFITS } from '../../shared/mocks/benefits.mock';
import { DIFFERENTIALS } from '../../shared/mocks/differentials.mock';
import { FAQ_ITEMS } from '../../shared/mocks/faq.mock';
import { FEATURES } from '../../shared/mocks/features.mock';
import { NAV_LINKS } from '../../shared/mocks/nav.mock';
import { STATS } from '../../shared/mocks/numbers.mock';
import { PLANS } from '../../shared/mocks/plans.mock';
import { PROBLEMS } from '../../shared/mocks/problems.mock';
import { SCREENS } from '../../shared/mocks/screens.mock';
import { SEGMENTS } from '../../shared/mocks/segments.mock';
import { SOLUTION_STEPS } from '../../shared/mocks/solutions.mock';
import { TESTIMONIALS } from '../../shared/mocks/testimonials.mock';

@Injectable({ providedIn: 'root' })
export class LandingDataService {
  readonly navLinks = NAV_LINKS;
  readonly problems = PROBLEMS;
  readonly solutionSteps = SOLUTION_STEPS;
  readonly features = FEATURES;
  readonly differentials = DIFFERENTIALS;
  readonly segments = SEGMENTS;
  readonly screens = SCREENS;
  readonly benefits = BENEFITS;
  readonly stats = STATS;
  readonly testimonials = TESTIMONIALS;
  readonly plans = PLANS;
  readonly faq = FAQ_ITEMS;
}
