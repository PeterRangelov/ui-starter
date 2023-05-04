import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PatientListComponent } from "./patients/patient-list/patient-list.component";
import { AuthGuard } from "./auth/auth.guard";
import { UnauthorizedComponent } from "./auth/unauthorized/unauthorized.component";

export const ROUTES: Routes = [
	{
		path: "",
		component: DashboardComponent
	},
	{
		path: "patients",
		component: PatientListComponent,
		canActivate: [AuthGuard]
	},
	{
		path: "unauthorized",
		component: UnauthorizedComponent,
	},
]