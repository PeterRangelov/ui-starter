import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RtAuthService } from "./rt-auth.service";
import { AuthService } from "@auth0/auth0-angular";

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	
	constructor(private auth: RtAuthService,
							private auth0: AuthService,
							private router: Router) {
	}
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return of(true)
		// return this.auth.authenticated$;
		
		// return this.auth.authenticated$.pipe(
		// 	combineLatestWith(this.auth.authorized$(route.data.role)),
		// 	tap(([authenticated, authorized]) => {
		// 		if (!authenticated) {
		// 			this.router.navigateByUrl('login');
		// 		} else if (authenticated && !authorized) {
		// 			this.router.navigateByUrl('unauthorized');
		// 		}
		// 	}),
		// 	map(([authenticated, authorized]) => authenticated && authorized)
		// );
	}
	
}
