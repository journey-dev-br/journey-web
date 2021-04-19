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
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    public isLinkArea: boolean = true
    public isLinkTheme: boolean = false
    public isLinkArticle: boolean = true
    public showQuantity: boolean = false
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public errorMsg: string = ''
    public parm_area: string
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
        this.parm_area = this.route.snapshot.paramMap.get("area")
        this.parm_theme = this.route.snapshot.paramMap.get("theme")
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        this.recoverAPI = true
        this.recoverError = !success
        this.errorMsg = errorMsg
        this.area = this.areasService.getArea(this.parm_area)
        this.theme = this.themesService.getTheme(this.parm_theme)
        this.articles = this.articlesService.getArticlesAreaTheme( this.parm_area , this.parm_theme )
    }

}
