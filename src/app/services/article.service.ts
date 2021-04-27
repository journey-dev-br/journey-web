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
        var URL = environment.apiUrl + 'articles/' + id + '.html'  
        if ( this.isTestArticle(id) ) {
            URL = 'assets/articles/' + id + '.html'  
        } 
        const response = this.httpClient.get(URL, {responseType: 'text'})
            .pipe( retry(2) )     // delay(2000),
        return response
    }

    /*-- Retorna se artigo em teste de desenvolvimento --*/
    // Obs.: Carrega o artigo dp assets - exemplo: "assets/articles/a0300300001.html"
    private isTestArticle( id: string ): boolean {
        if ( !environment.production ) {
            if ( 
                id == 'a0200600001' ||   // Node 
                id == 'a0200600002' ||   // Node
                id == 'a0300100001' ||   // Dica
                id == 'a0300200001' ||   // Dica
                id == 'a0300400001' ||   // Dica
                id == 'a020010000e'  
            ) { return true }
        }
        return false
    }

}
