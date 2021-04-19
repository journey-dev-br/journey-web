import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-process-error',
    templateUrl: './process-error.component.html',
    styleUrls: ['./process-error.component.css']
})
export class ProcessErrorComponent implements OnInit {

    constructor() { }

    @Input() errorMsg: string

    ngOnInit(): void {
    }

}
