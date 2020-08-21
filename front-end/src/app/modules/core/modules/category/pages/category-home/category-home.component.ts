import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from 'src/app/share/models';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss']
})
export class CategoryHomeComponent implements OnInit {
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
      { label: 'Loại máy', icon: 'pantone-outline', routerLink: this.ownLink, replaceUrl: true }
    ];
  }

  toggleQuery = () => {
    this.query = !this.query;
  }

}
