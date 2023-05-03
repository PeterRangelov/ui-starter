import { ChangeDetectionStrategy, Component } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
	selector: "rt-unauthorized",
	templateUrl: "./unauthorized.component.html",
	styleUrls: ["unauthorized.component.scss"],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnauthorizedComponent {
}
