import { Component, OnInit, Input } from '@angular/core';

import { Area } from '../../models/area'

@Component({
    selector: 'app-button-area',
    templateUrl: './button-area.component.html',
    styleUrls: ['./button-area.component.css']
})
export class ButtonAreaComponent implements OnInit {

    constructor() { }

    @Input() public area: Area

    ngOnInit(): void {
    }

}
