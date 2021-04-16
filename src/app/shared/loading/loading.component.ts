import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
    public urlIcon: string = "assets/gifs/Rolling-1.2s-48px.gif" 

    constructor() { }

    ngOnInit(): void {
    }

}
