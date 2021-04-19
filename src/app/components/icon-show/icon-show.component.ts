import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-icon-show',
    templateUrl: './icon-show.component.html',
    styleUrls: ['./icon-show.component.css']
})
export class IconShowComponent implements OnInit {
    public urlIcon: string 
    public numWidth: number = 32
    public numHeight: number = 32
    public width: string = "32px"
    public height: string = "32px"
    public radius: string = "50%"
    constructor() { }

    @Input() icon: string

    ngOnInit(): void {
        switch (this.icon) {
            case "angular":
                this.urlIcon = "assets/icons/angular-48px.png"
                break;
            case "nodejs":
                this.urlIcon = "assets/icons/nodejs-48px.png"
                break;
            case "javascript":
                this.urlIcon = "assets/icons/javascript-48px.png"
                break;
            default:
                this.urlIcon = "assets/icons/coding-48px.png"
                break;
        }
    }

}
