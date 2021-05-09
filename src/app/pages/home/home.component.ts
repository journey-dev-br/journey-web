import { Component, OnInit } from '@angular/core';

import { Area } from '../../models/area'
import { Article } from '../../models/article'

import { AreasService } from '../../services/areas.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public isLinkArea: boolean = true
    public isLinkArticle: boolean = true
    public areas: Area[] = []
    public articles: Article[] = []

    constructor(
        private areasService: AreasService,
        private articlesService: ArticlesService,
    ) { 
    }

    ngOnInit(): void {
        this.areas = this.areasService.getAreas()
        this.articles = this.articlesService.getNewArticles()
    }

}
