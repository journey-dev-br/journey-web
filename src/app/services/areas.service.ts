import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, delay } from 'rxjs/operators';

import { Area } from '../models/area'

import { environment } from 'src/environments/environment';
const URL = environment.apiUrl + 'areas.json'

@Injectable({
    providedIn: 'root'
})
export class AreasService {
    public responseCache = new Map();
    public areas: Area[] = []

    constructor(
        private httpClient: HttpClient
    ) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }    

    /*-- Recupera Areas da API --*/
    public getAreasAPI(): Observable<Area[]> {
        const areasFromCache = this.responseCache.get(URL);
        if (areasFromCache) {
            this.areas = areasFromCache
            return of(areasFromCache);
        }
        const response = this.httpClient.get<Area[]>(URL)
            .pipe( retry(2) )     // delay(2000),
        response.subscribe(areas => {
            this.areas = areas
            this.responseCache.set(URL, areas)
        })
        return response
    }

    /*-- Retorna todas as Areas --*/
    public getAreas(): Area[] {
        return this.areas
    }

    /*-- Retorna uma Area --*/
    public getArea(name: string): Area {
        var response: Area
        for ( let area of this.areas ) {
            if ( area.name == name ) { response = area }
        }
        return response
    }

}
