import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	posts = [
		{
			imageUrl: 'assets/manuel-cosentino-n--CMLApjfI-unsplash (1).jpg',
			title: 'Chureito Pagoda',
			user: 'https://unsplash.com/@manucosen',
			body: 'Chureito Pagoda, Fujiyoshida-shi, Japan'
		},
		{
			imageUrl:
				'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			title: 'Getting myself lost in Japan',
			user: 'https://unsplash.com/@claybanks',
			body: 'Tokyo, Japan. IG: @clay.banks'
		},
		{
			imageUrl:
				'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
			title: 'Tokyo Tower',
			user: 'https://unsplash.com/@thetalkinglens',
			body:
				'The best place to take a photo of the Tokyo Tower is at the viewing deck of Mori building in Roponggi Hills'
		}
	];
}
