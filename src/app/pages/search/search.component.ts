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
    public isLinkArticle: boolean = true
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public errorMsg: string = ''
    public articles: Article[] = []

    constructor(
        private controllerService: ControllerService,
        private articlesService: ArticlesService
    ) { }

    ngOnInit(): void {
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        this.recoverAPI = true
        this.recoverError = !success
        this.errorMsg = errorMsg
        this.articles = this.articlesService.searchArticles('Instalação')
    }

}
