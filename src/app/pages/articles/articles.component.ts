import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Area } from '../../models/area'
import { AreaTheme } from '../../models/area-theme'
import { Article } from '../../models/article'

import { AreasService } from '../../services/areas.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    public isLinkArea: boolean = true
    public isLinkTheme: boolean = false
    public isLinkArticle: boolean = true
    public showQuantity: boolean = true
    public parm_area: string
    public parm_theme: string
    public area: Area = undefined
    public theme: AreaTheme = undefined
    public articles: Article[] = []

    constructor(
        private route: ActivatedRoute,
        private areasService: AreasService,
        private articlesService: ArticlesService
    ) { }

    ngOnInit(): void {
        this.parm_area = this.route.snapshot.paramMap.get("area")
        this.parm_theme = this.route.snapshot.paramMap.get("theme")
        this.area = this.areasService.getArea(this.parm_area)
        this.theme = this.articlesService.getAreaTheme(this.parm_area, this.parm_theme)
        this.articles = this.articlesService.getArticlesAreaTheme(this.parm_area, this.parm_theme)
    }

}
