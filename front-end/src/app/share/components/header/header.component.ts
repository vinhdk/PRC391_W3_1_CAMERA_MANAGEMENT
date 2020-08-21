import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbSearchService } from '@nebular/theme';

import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LayoutService } from '../../../services/extra-services/layout.service';
import { TokenService } from '../../../services/extra-services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/extra-services/auth.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly = false;
  username = '';
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [
    {
      title: 'Hồ sơ',
      data: 'profile',
      icon: 'person-outline'
    },
    {
      title: 'Thoát',
      data: 'logout',
      icon: 'log-out-outline'
    }
  ];
  picture: any;
  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private searchService: NbSearchService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
    this.menuService.onItemClick().subscribe(
      (selected) => {
        if (selected.item.data === 'logout') {
          this.logout();
        } else {
          // const hash = document.location.hash.substring(2, document.location.hash.length).split('/');
          // this.router.navigateByUrl(hash[0] + '/' + hash[1] + '/' + hash[2] + '/profile');
        }
      }
    );
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        console.log(data);
      });
    this.searchService.onSearchInput()
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['auth']);
  }
}
