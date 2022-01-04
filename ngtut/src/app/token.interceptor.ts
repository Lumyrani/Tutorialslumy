import { Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const token = "Bearer xx.yy.zz"
    // let authService = this.injector.get(AuthService)
    const tokenizedReq=request.clone({setHeaders:{
      // Authorization:"Bearer xx.yy.zz"
      // Authorization:`Bearer ${this.authService.getToken()}`
      Authorization:`Bearer ${this.authService.getToken()}`
      }})
    return next.handle(tokenizedReq);
    // return next.handle(request);
  }
}
