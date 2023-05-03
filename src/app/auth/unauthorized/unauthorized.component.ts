import { ChangeDetectionStrategy, Component } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
	selector: "asbs-unauthorized",
	templateUrl: "./unauthorized.component.html",
	styleUrls: ["unauthroized.component.scss"],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnauthorizedComponent {
}
