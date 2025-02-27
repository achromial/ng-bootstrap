import { Component } from '@angular/core';
import { NgbDropdownModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-scrollspy-navbar',
	imports: [NgbScrollSpyModule, NgbDropdownModule],
	templateUrl: './scrollspy-navbar.html',
})
export class NgbdScrollSpyNavbar {}
