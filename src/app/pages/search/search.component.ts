import { Component, OnInit } from '@angular/core';

import { Article } from '../../models/article'

import { ControllerService } from '../../services/controller.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public articles: Article[] = []

    constructor(
        private controllerService: ControllerService,
        private articlesService: ArticlesService
    ) { }

    ngOnInit(): void {
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        console.log("themes> get: ", get, " success: ", success)
        this.recoverAPI = true
        this.recoverError = !success
        this.articles = this.articlesService.getArticles()
    }

}
