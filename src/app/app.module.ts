import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { DATE_FORMATS } from "./config/constants";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { AuthModule } from "@auth0/auth0-angular";
import { environment } from "./environments/environment";
import { AppRoutingModule } from "./app.routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		// Import the module into the application, with configuration
		AuthModule.forRoot({
			domain: environment.auth.domain,
			clientId: environment.auth.clientId,
			authorizationParams: {
				redirect_uri: window.location.origin
			}
		}),
	],
	providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE]
		},
		{
			provide: MAT_DATE_FORMATS,
			useValue: DATE_FORMATS
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
