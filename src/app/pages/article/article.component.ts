import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Area } from '../../models/area'
import { AreaTheme } from '../../models/area-theme'
import { Article } from '../../models/article'

import { AreasService } from '../../services/areas.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    public parm_id: string
    public article: Article
    public area: Area = undefined
    public theme: AreaTheme = undefined
    public isLinkArticle: boolean = false
    public isLinkArea: boolean = true
    public isLinkTheme: boolean = true
    public showQuantity: boolean = true

    constructor(
        private route: ActivatedRoute,
        private areasService: AreasService,
        private articlesService: ArticlesService,
    ) { }

    ngOnInit(): void {
        this.parm_id = this.route.snapshot.paramMap.get("id")
        this.article = this.articlesService.getArticle(this.parm_id)
        this.area = this.areasService.getArea(this.article.area)
        this.theme = this.articlesService.getAreaTheme(this.article.area, this.article.theme)
    }

}
