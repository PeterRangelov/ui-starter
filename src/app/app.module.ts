import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { DATE_FORMATS } from "./config/constants";
import { MomentDateAdapter } from "@angular/material-moment-adapter";

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		AppRoutingModule
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
