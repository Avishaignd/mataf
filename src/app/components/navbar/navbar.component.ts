import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navBarItems = [
    {
      title: 'Data',
      routerLink: '/data'
    },
    {
      title: 'Analysis',
      routerLink: '/analysis'
    },
    {
      title: 'Monitor',
      routerLink: '/monitor'
    }
  ]

}
