import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from 'src/app/share/models';

@Component({
  selector: 'app-brand-home',
  templateUrl: './brand-home.component.html',
  styleUrls: ['./brand-home.component.scss']
})
export class BrandHomeComponent implements OnInit {
  query = true;
  menu: BreadCrumbItem[];
  home: BreadCrumbItem;
  ownLink = 'core/brand';
  constructor() { }

  ngOnInit() {
    this.setting();
  }

  setting() {
    this.home = { label: 'Trang chủ', icon: 'home-outline', routerLink: 'core/camera', replaceUrl: true };
    this.menu = [
      { label: 'Thương hiệu', icon: 'grid-outline', routerLink: this.ownLink, replaceUrl: true }
    ];
  }

  toggleQuery = () => {
    this.query = !this.query;
  }
}
