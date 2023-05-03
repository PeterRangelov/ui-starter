import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	
	constructor(private auth: AuthService, private router: Router) {
	}
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.auth.authenticated$;
		
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
