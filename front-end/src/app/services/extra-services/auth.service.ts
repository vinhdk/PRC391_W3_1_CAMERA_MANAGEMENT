import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiPaths = environment.apiLink;
  constructor(private http: HttpClient) { }

  public getToken = (data: { username: string, password: string }): Promise<Token> => {
    return this.http.post<Token>(`${this.apiPaths.endPoint}${this.apiPaths.auth.token}`, data).toPromise();
  }
  public touchToken = (): Promise<unknown> => {
    return this.http.get<unknown>(`${this.apiPaths.endPoint}${this.apiPaths.auth.main}`).toPromise();
  }
}
