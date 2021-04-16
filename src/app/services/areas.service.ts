import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, delay } from 'rxjs/operators';

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

    public getAreasAPI(): Observable<Area[]> {
        const areasFromCache = this.responseCache.get(URL);
        if (areasFromCache) {
            this.areas = areasFromCache
            return of(areasFromCache);
        }
        const response = this.httpClient.get<Area[]>(URL)
            .pipe(
                retry(2),
                delay(2000),
                catchError(this.handleError))
        response.subscribe(areas => {
            this.areas = areas
            this.responseCache.set(URL, areas)
        })
        return response
    }

    public getAreas(): Area[] {
        return this.areas
    }

    public getArea(name: string): Area {
        var response: Area
        for ( let area of this.areas ) {
            if ( area.name == name ) { response = area }
        }
        return response
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
