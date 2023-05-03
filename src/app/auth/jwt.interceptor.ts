import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RtAuthService } from "./rt-auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private authService: RtAuthService) {
	}
	
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		// const token = this.authService.getToken();
		const token = '';
		if (token != null) {
			request = request.clone({
				setHeaders: {
					Authorization: "Bearer " + token,
				},
			});
		}
		
		return next.handle(request);
	}
}
