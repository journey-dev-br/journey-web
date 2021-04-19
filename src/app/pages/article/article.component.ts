import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Article } from '../../models/article'

import { ControllerService } from '../../services/controller.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public errorMsg: string = ''    
    public article: Article
    public parm_id: string
    public isLinkArticle: boolean = false

    constructor(
        private route: ActivatedRoute,
        private controllerService: ControllerService,
        private articlesService: ArticlesService
    ) { }

    ngOnInit(): void {
        this.parm_id = this.route.snapshot.paramMap.get("id")
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        this.recoverAPI = true
        this.recoverError = !success
        this.errorMsg = errorMsg        
        this.article = this.articlesService.getArticle(this.parm_id)
    }

}
