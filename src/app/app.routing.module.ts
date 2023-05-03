import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { PatientListComponent } from "./patients/patient-list/patient-list.component";
import { AuthGuard } from "./auth/auth.guard";
import { UnauthorizedComponent } from "./auth/unauthorized/unauthorized.component";

export const routes: Routes = [
	{
		path: "",
		component: AppComponent
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

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}