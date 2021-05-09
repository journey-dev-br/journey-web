import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Area } from '../../models/area'
import { Theme } from '../../models/theme'

import { AreasService } from '../../services/areas.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
    public isLinkArea: boolean = false
    public isLinkTheme: boolean = true
    public showQuantity: boolean = true
    public parm_area: string
    public area: Area = undefined
    public themes: Theme[] = []

    constructor(
        private route: ActivatedRoute,
        private areasService: AreasService,
        private articlesService: ArticlesService,
    ) { }

    ngOnInit(): void {
        this.parm_area = this.route.snapshot.paramMap.get("area")
        this.area = this.areasService.getArea(this.parm_area)
        this.themes = this.articlesService.getAreaThemes(this.parm_area)
    }

}
