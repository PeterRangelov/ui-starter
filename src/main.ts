import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';
import { environment } from './environments/environment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DATE_FORMATS } from "./app/config/constants";

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		BrowserModule,
		HttpClientModule,
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE]
		},
		{
			provide: MAT_DATE_FORMATS,
			useValue: DATE_FORMATS
		},
		importProvidersFrom(
			RouterModule.forRoot(ROUTES),
			HttpClientModule,
			AuthModule.forRoot({
				domain: environment.auth.domain,
				clientId: environment.auth.clientId,
				authorizationParams: {
					redirect_uri: window.location.origin
				}
			}),
		),
	]
});