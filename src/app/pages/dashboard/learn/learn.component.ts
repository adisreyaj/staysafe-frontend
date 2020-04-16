/*
 * File: learn.component.ts
 * Project: staysafe-frontend
 * File Created: Friday, 10th April 2020 12:26:25 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 16th April 2020 10:42:11 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QuickStatsData } from '@staysafe/components/quick-stats/quick-stats.component';
import { LearnLinks } from './learn.interface';
import { DataService } from '@staysafe/services/data.service';
import { HeadingData } from '@staysafe/components/heading/heading.component';
import { ToggleService } from '@staysafe/services/toggle.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
})
export class LearnComponent implements OnInit {
  prevention = {
    title: 'Prevention',
    description: 'The best way to prevent illness is to avoid being exposed to this virus.',
    items: [
      {
        title: 'Wash your hands frequently',
        description:
          'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.',
        why:
          'Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.',
        link: {
          name: 'wash hands',
        },
      },
      {
        title: 'Maintain social distancing',
        description:
          'Keep up at least 1 meter (3 feet) distance among yourself and any individual who is coughing or sneezing.',
        why: `At the point when somebody coughs or sneezes they splash little liquid droplets from their nose or mouth which may contain the virus. On the off chance that you are excessively close, you can take in the droplets, including the COVID-19 virus if the individual coughing has the disease.`,
        link: { name: 'social distancing' },
      },
      {
        title: 'Avoid touching eyes, nose and mouth',
        description: 'This makes sure that you reduce the chance of spreading the virus into your body',
        why:
          'Hands touch many surfaces and can get viruses. When contaminated, hands can move the virus to your eyes, nose or mouth. From that point, the infection can enter your body and can make you weakened.',
        link: {
          name: 'hygiene',
        },
      },
      {
        title: 'Cover your cough',
        description:
          'Ensure you, and the people around you, follow great respiratory hygiene. This signifies covering your mouth and nose with your bowed elbow or tissue when you cough or sneeze. Then dispose of the used tissue right away.',
        why:
          'Droplets spread virus. By following great respiratory hygiene you protect the individuals around you from viruses, for example, cold, flu and COVID-19.',
        link: {
          name: 'precautions',
        },
      },
    ],
  };

  learnLinks: LearnLinks[] = [
    {
      title: 'World Health Organisation',
      link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019',
    },
    {
      title: 'Centers for Disease Control and Prevention',
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/faq.html',
    },
    {
      title: 'Ministry of Health and Family Welfare - GoI',
      link: 'https://www.mohfw.gov.in/',
    },
  ];

  quickStatsHeading: HeadingData = {
    main: 'Quick Stats',
    sub: 'Last Update: 23mins ago',
  };

  quickStats$: Observable<QuickStatsData[]>;

  currentLocation = 'india';

  constructor(private dataService: DataService, private toggleService: ToggleService) {}
  ngOnInit(): void {
    this.getQuickStats();
    this.listenToLocationSwitcher();
  }

  listenToLocationSwitcher() {
    this.toggleService.mainSelection$.subscribe((data) => {
      this.currentLocation = data;
      if (this.currentLocation !== data) {
        if (data === 'india') this.quickStats$ = this.dataService.getIndiaQuickStats();
        else this.quickStats$ = this.dataService.getWorldQuickStats();
      }
    });
  }

  private getQuickStats() {
    this.quickStats$ = this.dataService.getWorldQuickStats();
  }
}
