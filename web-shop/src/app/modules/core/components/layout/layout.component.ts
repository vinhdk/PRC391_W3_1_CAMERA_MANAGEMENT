import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menu: NbMenuItem[] = [
    {
      title: 'Máy ảnh',
      icon: 'camera-outline',
      url: '/#/core/camera',
    },
    {
      title: 'Loại máy',
      icon: 'pantone-outline',
      url: '/#/core/category',
    },
    {
      title: 'Thương hiệu',
      icon: 'grid-outline',
      url: '/#/core/brand',
    },
    {
      title: 'Tài khoản',
      icon: 'people-outline',
      url: '/#/core/account',
    },
    {
      title: 'Tác vụ',
      icon: 'shield-outline',
      url: '/#/core/role',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
