import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Article } from '../../models/article'

import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public isLinkArticle: boolean = true
    public inWords: boolean = true
    public articles: Article[] = []
    public text_search = new FormControl('')
    private debounce: number = 800;
    public list_no_search: string[] = []
    public list_search: string[] = []

    constructor(
        private articlesService: ArticlesService
    ) {
        this.listNoSearch()
    }

    ngOnInit(): void {
        this.text_search.valueChanges
            .pipe(debounceTime(this.debounce), distinctUntilChanged())
            .subscribe(query => { this.textSearchVerify(query) })
    }

    public textSearchVerify(query: string = ''): void {
        this.list_search = query.split(' ')
            .filter(w => w.length > 2)
            .filter(w => !(this.list_no_search.includes(w)))
        this.inWords = false
        if (this.list_search.length == 0) {
            this.articles = []
            this.inWords = true
        } else {
            this.articles = this.articlesService.searchArticlesForWords(this.list_search)
            if (this.articles.length > 0) { this.inWords = true } else { this.inWords = false }
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
