import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/extra-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanLoad {

  constructor(protected authService: AuthService, protected router: Router) { }
  public canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    // return this.authService.touchToken().then(() => {
    //   return true;
    // }).catch((err) => {
    //   this.router.navigate(['auth']);
    //   return false;
    // });
    return true;
  }

}
