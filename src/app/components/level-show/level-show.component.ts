import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-level-show',
    templateUrl: './level-show.component.html',
    styleUrls: ['./level-show.component.css']
})
export class LevelShowComponent implements OnInit {
    public levels: number[] 

    constructor() { }

    @Input() level: number
    
    ngOnInit(): void {
        this.levels = new Array(this.level)
    }

}
