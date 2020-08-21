import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService, AuthService, TokenService } from 'src/app/services';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanLoad {

  constructor(
    protected readonly authService: AuthService,
    protected readonly roleService: RoleService,
    protected readonly tokenService: TokenService,
    protected readonly router: Router
  ) { }
  public canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.touchToken().then((account) => {
      return this.roleService.getById(account.RoleId)
        .then((res) => {
          if (res.Name === 'Admin') {
            return true;
          } else {
            swal.fire('Thông báo', 'Bạn không có quyền truy cập hoặc chưa đăng nhập', 'error');
            this.tokenService.clearToken();
            this.router.navigate(['auth/login']);
            return false;
          }
        }).catch((err) => {
          swal.fire('Thông báo', 'Bạn không có quyền truy cập hoặc chưa đăng nhập', 'error');
          this.tokenService.clearToken();
          this.router.navigate(['auth/login']);
          return false;
        });
    }).catch((err) => {
      swal.fire('Thông báo', 'Bạn không có quyền truy cập hoặc chưa đăng nhập', 'error');
      this.tokenService.clearToken();
      this.router.navigate(['auth/login']);
      return false;
    });
  }

}
