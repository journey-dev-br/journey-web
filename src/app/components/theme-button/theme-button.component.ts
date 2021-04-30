import { Component, OnInit, Input } from '@angular/core';

import { AreaTheme } from '../../models/area-theme'

@Component({
    selector: 'app-theme-button',
    templateUrl: './theme-button.component.html',
    styleUrls: ['./theme-button.component.css']
})
export class ThemeButtonComponent implements OnInit {

    constructor() { }

    @Input() isLink: boolean
    @Input() theme: AreaTheme
    @Input() showQuantity: boolean

    ngOnInit(): void {
    }

}
