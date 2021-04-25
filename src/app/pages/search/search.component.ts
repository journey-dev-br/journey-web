import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
    public inArticles: boolean = false
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public errorMsg: string = ''

    public articles: Article[] = []
    public text_search = new FormControl('')
    private debounce: number = 400;
    public list_no_search: string[] = []

    public list_search: string[] = []

    constructor(
        private controllerService: ControllerService,
        private articlesService: ArticlesService
    ) { 
        this.listNoSearch()
    }

    ngOnInit(): void {
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
        this.text_search.valueChanges
            .pipe(debounceTime(this.debounce), distinctUntilChanged())
            .subscribe(query => { this.textSearchVerify(query) })
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        this.recoverAPI = true
        this.recoverError = !success
        this.errorMsg = errorMsg
    }

    public textSearchVerify(query: string = ''): void {
        this.list_search = query.split(' ')
            .filter( w => w.length > 2 )
            .filter(w => !(this.list_no_search.includes(w)) )
        this.inArticles = false
        if ( this.list_search.length == 0 ) {
            this.articles = []
        } else {
            this.articles = this.articlesService.searchArticlesForWords(this.list_search)
            if ( this.articles.length > 0 ) { this.inArticles = true }
        }
        return
    }

    private listNoSearch(): void {
        this.list_no_search = [
            'ante',
            'após',
            'até',
            'com',
            'das',
            'dos',
            'nos',
            'nas',
            'para',
            'sem',
            'sob',
        ]
        return
    }
}
