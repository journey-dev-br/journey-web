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
                this.urlIcon = "assets/tools/angular-48px.png"
                break;
            case "css":
                this.radius = "0%"
                this.urlIcon = "assets/tools/css3.png"
                break;
            case "html":
                this.radius = "0%"
                this.urlIcon = "assets/tools/html5.png"
                break;
            case "javascript":
                this.urlIcon = "assets/tools/javascript-48px.png"
                break;
            case "nodejs":
                this.urlIcon = "assets/tools/nodejs-48px.png"
                break;
            default:
                this.urlIcon = "assets/tools/coding-48px.png"
                break;
        }
    }

}
