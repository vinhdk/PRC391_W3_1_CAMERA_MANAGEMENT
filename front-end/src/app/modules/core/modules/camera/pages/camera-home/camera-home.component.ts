import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from 'src/app/share/models';

@Component({
  selector: 'app-camera-home',
  templateUrl: './camera-home.component.html',
  styleUrls: ['./camera-home.component.scss']
})
export class CameraHomeComponent implements OnInit {
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
      { label: 'Máy ảnh', icon: 'camera-outline', routerLink: this.ownLink, replaceUrl: true }
    ];
  }

  toggleQuery = () => {
    this.query = !this.query;
  }

}
