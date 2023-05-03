import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Patient } from "../patient.model";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
	selector: 'rt-patient-list',
	templateUrl: './patient-list.component.html',
	styleUrls: ['./patient-list.component.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientListComponent implements OnInit {
	patients$ = new BehaviorSubject<Patient[]>([])
	
	constructor() {
	}
	
	ngOnInit(): void {
		this._getPatients();
	}
	
	private _getPatients() {
	
	}
	
}
