import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SidebarService} from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent{

  isExpanded = true;

  menuItems = [
    {
      icon: 'bi-person-plus',
      label: 'User Management',
      path: '/layout/user'
    },
    {
      icon: 'bi-gear',
      label: 'Loan Configuration',
      path: '/layout/loan-config'
    },
    {
      icon: 'bi-file-earmark-text',
      label: 'Human Resources',
      path: '/layout/human-resources'
    },
    {
      icon: 'bi-people',
      label: 'Employee',
      path: '/layout/employees'
    },
    {
      icon: 'bi-card-checklist',
      label: 'Loan Status',
      path: '/layout/loan-status'
    }
  ];

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isExpanded$.subscribe(
      (isExpanded) => this.isExpanded = isExpanded
    );
  }

}
