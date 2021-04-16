import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, delay } from 'rxjs/operators';

import { Article } from '../models/article'

import { environment } from 'src/environments/environment';
const URL = environment.apiUrl + 'articles.json'

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {
    public responseCache = new Map();
    public articles: Article[] = []

    constructor(
        private httpClient: HttpClient
    ) { }

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
            .pipe(
                retry(2),
                delay(4000),
                catchError(this.handleError))
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

    /*-- Manipulação de erros --*/
    private handleError(error: HttpErrorResponse) {
        let errorMessage = ''
        if (error.error instanceof ErrorEvent) {    // Erro ocorreu no lado do client
        errorMessage = error.error.message
        } else {                                    // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`
        }
        console.log(errorMessage)
        return throwError(errorMessage)
    }  

}
