import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar-comp.service';

@Component({
  selector: 'app-navbar-comp',
  templateUrl: './navbar-comp.component.html',
  styleUrls: ['./navbar-comp.component.css']
})
export class NavbarCompComponent implements OnInit {
  showNav: boolean = false;
  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
  }

}
