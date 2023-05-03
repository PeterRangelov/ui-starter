import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { AuthService } from "@auth0/auth0-angular";

@Injectable({
	providedIn: "root"
})
export class RtAuthService {
	authenticated$ = new BehaviorSubject<boolean>(false);
	displayName$ = new BehaviorSubject<string>('');
	
	// displayRole$ = new BehaviorSubject<string>(null);
	
	constructor(private http: HttpClient, private auth: AuthService) {
		this.auth.isAuthenticated$.subscribe(auth => this.authenticated$.next(auth))
		// For now, assume user is logged in if token is present
		// if (this.getToken()) {
		// 	this.authenticated$.next(true);
		// 	this.displayName$.next(this.getUserName());
		// }
		
	}
	
	login() {
		this.auth.loginWithPopup();
	}
	
	authorized$(role: string): Observable<boolean> {
		return of(true);
		// return of(this.isInRole(role));
	}
	
	// getToken(): string {
	// 	return this.sStorage.retrieve(StorageKeys.ACCESSTOKEN);
	// }
	//
	// getUserName(): string {
	// 	return this.sStorage.retrieve(StorageKeys.DISPLAYNAME);
	// }
	//
	// isInRole(role: Role): boolean {
	// 	if (!role) {
	// 		return true;
	// 	}
	//
	// 	return this.sStorage.retrieve(StorageKeys.USERROLES)?.includes(role.toString());
	// }
	
	
	// login(user: User) {
	// 	//TODO: the access token in the body will ulitimately be some sort of SAML token from DMDC or EAMS
	// 	let body = new AuthRequest(user.id.toString(), "9191991992303aabb");
	//
	// 	return this.authenticate(body).pipe(
	// 		concatMap((authResponse) => {
	// 			var data = new AuthenticationReponse(authResponse.body);
	//
	// 			this.sStorage.store(StorageKeys.DISPLAYNAME, data.displayName);
	// 			this.sStorage.store(StorageKeys.ACCESSTOKEN, authResponse.headers.get("Authorization"));
	// 			this.displayName$.next(data.displayName);
	// 			return this.authorize();
	// 		}),
	// 		map((authorization) => {
	// 			this.logger.debug("permissions " + JSON.stringify(authorization.permissions));
	// 			this.logger.debug("roles " + JSON.stringify(authorization.roles));
	// 			this.ability.update(authorization.permissions);
	// 			this.sStorage.store(StorageKeys.USERROLES, JSON.stringify(authorization.roles));
	// 			this.displayRole$.next(authorization.roles[0].roleDescr);
	// 			this.authenticated$.next(true);
	// 		}),
	// 		catchError((err) => {
	// 			return throwError(() => err);
	// 		})
	// 	); // end pipe
	// }
	
	
	logout() {
		this.authenticated$.next(false);
	}
}
