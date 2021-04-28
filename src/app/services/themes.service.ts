import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, delay } from 'rxjs/operators';

import { Theme } from '../models/theme'

import { environment } from 'src/environments/environment';
const URL = 'assets/json/themes_' + environment.versionThemes + '.json'

@Injectable({
    providedIn: 'root'
})
export class ThemesService {
    public responseCache = new Map();
    public themes: Theme[] = [] 

    constructor(
        private httpClient: HttpClient
    ) { console.log("themes.service> URL...: ", URL) }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }    

    /*-- Recupera Temas da API --*/
    public getThemesAPI(): Observable<Theme[]> {
        const areasFromCache = this.responseCache.get(URL);
        if (areasFromCache) {
            if ( this.themes.length == 0 ) { this.themes = areasFromCache }
            return of(areasFromCache);
        }
        const response = this.httpClient.get<Theme[]>(URL)
            .pipe( retry(2) )     // delay(1000),
        response.subscribe(themes => {
            this.themes = themes
            this.responseCache.set(URL, themes)
        });
        return response
    }

    /*-- Retorna todos os Temas --*/
    public getThemes(): Theme[] {
        return this.themes
    }

    /*-- Retorna um Tema --*/
    public getTheme(name: string): Theme {
        var response: Theme
        for ( let theme of this.themes ) {
            if ( theme.name == name ) { response = theme }
        }
        return response
    }

}
