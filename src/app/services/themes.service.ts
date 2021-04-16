import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, delay } from 'rxjs/operators';

import { Theme } from '../models/theme'

import { environment } from 'src/environments/environment';
const URL = environment.apiUrl + 'themes.json'

@Injectable({
    providedIn: 'root'
})
export class ThemesService {
    public responseCache = new Map();
    public themes: Theme[] = [] 

    constructor(
        private httpClient: HttpClient
    ) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }    

    public getThemesAPI(): Observable<Theme[]> {
        const areasFromCache = this.responseCache.get(URL);
        if (areasFromCache) {
            this.themes = areasFromCache
            return of(areasFromCache);
        }
        const response = this.httpClient.get<Theme[]>(URL)
            .pipe(
                retry(2),
                delay(1000),
                catchError(this.handleError))
        response.subscribe(themes => {
            this.themes = themes
            this.responseCache.set(URL, themes)
        });
        return response
    }

    public getThemes(): Theme[] {
        return this.themes
    }

    /*-- Manipulação de erros --*/
    handleError(error: HttpErrorResponse) {
        let errorMessage = ''
        if (error.error instanceof ErrorEvent) {   // Erro ocorreu no lado do client
        errorMessage = error.error.message
        } else {                                   // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`
        }
        console.log(errorMessage)
        return throwError(errorMessage)
    }  

}
