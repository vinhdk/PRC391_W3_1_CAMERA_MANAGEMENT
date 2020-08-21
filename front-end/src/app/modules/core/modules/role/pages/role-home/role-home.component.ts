import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from 'src/app/share/models';

@Component({
  selector: 'app-role-home',
  templateUrl: './role-home.component.html',
  styleUrls: ['./role-home.component.scss']
})
export class RoleHomeComponent implements OnInit {
  query = true;
  menu: BreadCrumbItem[];
  home: BreadCrumbItem;
  ownLink = 'core/role';
  constructor() { }

  ngOnInit() {
    this.setting();
  }

  setting() {
    this.home = { label: 'Trang chủ', icon: 'home-outline', routerLink: 'core/camera', replaceUrl: true };
    this.menu = [
      { label: 'Tác vụ', icon: 'shield-outline', routerLink: this.ownLink, replaceUrl: true }
    ];
  }

  toggleQuery = () => {
    this.query = !this.query;
  }
}
