import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'rt-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
