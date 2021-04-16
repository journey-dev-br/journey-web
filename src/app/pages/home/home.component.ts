import { Component, OnInit } from '@angular/core';

import { Area } from '../../models/area'
import { Article } from '../../models/article'

import { ControllerService } from '../../services/controller.service'
import { AreasService } from '../../services/areas.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public recoverAPI: boolean = false
    public areas: Area[] = []
    public articles: Article[] = []

    constructor(
        private controllerService: ControllerService,
        private areasService: AreasService,
        private articlesService: ArticlesService
    ) { }

    ngOnInit(): void {
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI() {
        this.recoverAPI = true
        this.areas = this.areasService.getAreas()
        this.articles = this.articlesService.getArticles()
    }

}
