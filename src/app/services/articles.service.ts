import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, delay } from 'rxjs/operators';

import { Article } from '../models/article'

import { environment } from 'src/environments/environment';
const URL = 'assets/json/articles_' + environment.versionArticles + '.json'

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {
    public responseCache = new Map();
    public articles: Article[] = []

    constructor(
        private httpClient: HttpClient
    ) { console.log("articles.service> URL.: ", URL) }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }    

    /*-- Recupera Artigos da API --*/
    public getArticlesAPI(): Observable<Article[]> {
        const articlesFromCache = this.responseCache.get(URL);
        if (articlesFromCache) {
            this.articles = articlesFromCache
            return of(articlesFromCache);
        }
        const response = this.httpClient.get<Article[]>(URL)
            .pipe( retry(2) )     // delay(4000),
        response.subscribe(articles => {
            this.articles = articles
            this.responseCache.set(URL, articles)
        })
        return response
    }

    /*-- Retorna todos os Artigos --*/
    public getArticles(): Article[] {
        return this.articles
    }

    /*-- Retorna um Artigo --*/
    public getArticle(id: string): Article {
        var response: Article = undefined
        for ( let article of this.articles ) {
            if ( article.id == id ) { response = article }
        }
        return response
    }

    /*-- Retorna Artigos de uma Area e Tema --*/
    public getArticlesAreaTheme(area: string, theme: string): Article[] {
        var response: Article[] = []
        for ( let article of this.articles ) {
            if ( article.area == area && article.theme == theme ) { response.push(article) }
        }
        return response
    }

    /*-- Retorna os novos Artigos --*/
    public getNewArticles(): Article[] {
        return this.articles.filter( a => a.isNew )
    }

    /*-- Pesquisa Artigos por array de Palavras --*/
    public searchArticlesForWords(search: string[]): Article[] {
        let listSearch = search.map( w => w.toLowerCase() )
        return this.articles.filter(article => {
            let splitTitle = article.title.split(' ')
            let filteredWords = splitTitle.filter((word) => listSearch.includes(word.toLowerCase()))
            if ( filteredWords.length > 0 ) { return true } else { return false }
        })
    }

}
