import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { combineLatestWith, map, Observable, tap } from 'rxjs';
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
		// return of(true)
		return this.auth0.isAuthenticated$
			.pipe(
				tap(console.log),
				combineLatestWith(this.auth.authorized$('')),
				tap(([authenticated, authorized]) => {
						if (!authenticated) {
							this.auth.login()
						}
					}
				),
				map(([authenticated, authorized]) => authenticated && authorized)
			);
		
	}
	
}
