import { Component, OnInit, Input } from '@angular/core';

import { Theme } from '../../models/theme'

@Component({
    selector: 'app-theme-button',
    templateUrl: './theme-button.component.html',
    styleUrls: ['./theme-button.component.css']
})
export class ThemeButtonComponent implements OnInit {

    constructor() { }

    @Input() isLink: boolean
    @Input() theme: Theme
    @Input() showQuantity: boolean

    ngOnInit(): void {
        console.log("theme-button> isLink: ", this.isLink, " eh ", typeof this.isLink)
    }

}
