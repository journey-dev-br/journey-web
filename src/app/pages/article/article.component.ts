import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Area } from '../../models/area'
import { Theme } from '../../models/theme'
import { Article } from '../../models/article'

import { ControllerService } from '../../services/controller.service'
import { AreasService } from '../../services/areas.service'
import { ThemesService } from '../../services/themes.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public parm_id: string
    public article: Article
    
    
    public parm_theme: string
    public area: Area = undefined
    public theme: Theme = undefined
    public articles: Article[] = []

    constructor(
        private route: ActivatedRoute,
        private controllerService: ControllerService,
        private areasService: AreasService,
        private themesService: ThemesService,
        private articlesService: ArticlesService
    ) { }

    ngOnInit(): void {
        this.parm_id = this.route.snapshot.paramMap.get("id")
        // this.parm_theme = this.route.snapshot.paramMap.get("theme")
        console.log("articles: parm_id: ", this.parm_id)
        //console.log("articles: parm_theme: ", this.parm_theme)
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false) {
        this.recoverAPI = true
        this.recoverError = !success
        this.article = this.articlesService.getArticle(this.parm_id)
        //this.area = this.areasService.getArea(this.parm_area)
        //this.theme = this.themesService.getTheme(this.parm_theme)
        //this.articles = this.articlesService.getArticlesAreaTheme( this.parm_area , this.parm_theme )
        //console.log("articles: area: ", this.area)
        //console.log("articles: theme: ", this.theme)
        //console.log("articles: articles: ", this.articles.length)
    }

}
