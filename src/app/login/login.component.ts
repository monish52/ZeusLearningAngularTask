import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar-comp/navbar-comp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}
