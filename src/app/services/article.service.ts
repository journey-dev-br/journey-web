import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, delay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(
        private httpClient: HttpClient
    ) { }
        
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'text/html' })
    }    
        
    /*-- Recupera o texto de umn Artigo da API --*/
    public getArticleAPI( id: string ): any {
        const URL = environment.apiUrl + 'articles/' + id + '.html'  
        const response = this.httpClient.get(URL, {responseType: 'text'})
            .pipe( retry(2) )     // delay(2000),
        return response
    }

}
