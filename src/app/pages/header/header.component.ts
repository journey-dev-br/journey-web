import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { NavigationStart, NavigationError, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public inSearch: boolean = false
    public linkSearch: string = "/search"

    constructor(
        private router: Router
    ) { 
        //Router subscriber
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                console.log("header> Start")
            }

            if (event instanceof NavigationError) {
                // Handle error
                console.log("header> Erro")
            }

            if (event instanceof NavigationEnd) {
                console.log("header> End")
                if ( !(window.location.pathname === '/search') ) {
                    console.log("header> Entrou no IF")
                    this.inSearch = true
                } else {
                    console.log("header> NÃO entrou no IF")
                    this.inSearch = false
                }
            }
        })
    }

    ngOnInit(): void {
        if ( !(window.location.pathname === '/search') ) {
            this.inSearch = true
        }
        console.log('URL:' + window.location.href);
        console.log('Path:' + window.location.pathname);
        console.log('Host:' + window.location.host);
        console.log('Hostname:' + window.location.hostname);
        console.log('Origin:' + window.location.origin);
        console.log('Port:' + window.location.port);
        console.log('Search String:' + window.location.search);
    }

}
