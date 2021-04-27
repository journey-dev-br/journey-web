import { Component, OnInit } from '@angular/core';

import { Area } from '../../models/area'
import { Article } from '../../models/article'

import { ControllerService } from '../../services/controller.service'
import { AreasService } from '../../services/areas.service'
import { ArticlesService } from '../../services/articles.service'

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public isLinkArea: boolean = true
    public isLinkArticle: boolean = true
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public errorMsg: string = ''
    public areas: Area[] = []
    public articles: Article[] = []

    constructor(
        private controllerService: ControllerService,
        private areasService: AreasService,
        private articlesService: ArticlesService
    ) { 
        console.log("journey-web.home> production: ", environment.production)
    }

    ngOnInit(): void {
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        this.recoverAPI = true
        this.recoverError = !success
        this.errorMsg = errorMsg
        this.areas = this.areasService.getAreas()
        this.articles = this.articlesService.getNewArticles()
    }

}
