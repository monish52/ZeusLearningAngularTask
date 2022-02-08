import { Component, OnInit } from '@angular/core';
import { NavbarCompComponent } from '../navbar-comp/navbar-comp.component';
import { NavbarService } from '../navbar-comp/navbar-comp.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showNav: boolean = true;
  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
