import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  stats = [
    { name: 'International Brands', value: 200 },
    { name: 'High-Quality Products', value: 2000 },
    { name: 'Happy Customers', value: 30000 },
  ];
  brands = [
    {
      name: 'Versace',
      logo: 'versace.svg',
      link: 'https://www.versace.com/',
    },
    {
      name: 'Zara',
      logo: 'zara.svg',
      link: 'https://www.zara.com/',
    },
    {
      name: 'Gucci',
      logo: 'gucci-logo-1.svg',
      link: 'https://www.gucci.com/',
    },

    {
      name: 'Prada',
      logo: 'prada-logo-1.svg',
      link: 'https://www.prada.com/',
    },
    {
      name: 'Calvin Klein',
      logo: 'calvin.svg',
      link: 'https://www.calvinklein.us/en',
    },
  ];
}
