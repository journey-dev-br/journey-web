import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public inSearch: boolean = false

    constructor(
        private router: Router
    ) { 
        /*-- Router subscriber --*/
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                if ( window.location.pathname.includes("/search") ) {
                    this.inSearch = false
                } else {
                    this.inSearch = true
                }
            }
        })
    }

    ngOnInit(): void {
    }

}
