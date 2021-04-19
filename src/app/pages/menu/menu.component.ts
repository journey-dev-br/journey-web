import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from '../../models/menu'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public menu: Menu[] = []
//    public name: object
  
    constructor(
        private router: Router
    ) {
        this.setMenu("HOME", "/home", true)
        this.setMenu("AJUDA", "/help", false)
        this.setMenu("CONTATO", "/contact", false)
        this.setMenu("SOBRE", "/about", false)
    }
    
    private setMenu(title: string, link: string, active: boolean): void {
        this.menu.push({ title, link, active})
    }
    
    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.menu.map((m,i) => {
            if ( m.link == this.router.url ) {
                this.menu[i].active = true
            } else {
                this.menu[i].active = false
            }
        })
    }    
}
