import { Component, OnInit, Input } from '@angular/core';

import { Area } from '../../models/area'

@Component({
    selector: 'app-area-button',
    templateUrl: './area-button.component.html',
    styleUrls: ['./area-button.component.css']
})
export class AreaButtonComponent implements OnInit {

    constructor() { }

    @Input() isLink: boolean
    @Input() area: Area

    ngOnInit(): void {
        console.log("area-button> isLink: ", this.isLink, " eh ", typeof this.isLink)
    }

}
