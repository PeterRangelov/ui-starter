import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
	selector: 'rt-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [
		RouterOutlet
	]
})
export class AppComponent {
	title = 'RT';
}
