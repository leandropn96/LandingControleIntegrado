import { Component, HostListener, inject, signal } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LandingDataService } from '../../../core/services/landing-data.service';

@Component({
  selector: 'app-site-header',
  imports: [TablerIconsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly data = inject(LandingDataService);
  readonly links = this.data.navLinks;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
