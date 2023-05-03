import { MatDateFormats } from '@angular/material/core';

export const DATE_FORMATS: MatDateFormats = {
	parse: {
		dateInput: 'LL',
	},
	display: {
		dateInput: 'YYYY-MM-DD',
		monthYearLabel: 'YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'YYYY'
	}
}
