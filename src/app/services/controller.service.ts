import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Area } from '../models/area'
import { Theme } from '../models/theme'
import { Article } from '../models/article'
import { AreaTheme } from '../models/area-theme'

import { AreasService } from './areas.service'
import { ThemesService } from './themes.service'
import { ArticlesService } from './articles.service'

@Injectable({
    providedIn: 'root'
})
export class ControllerService {
    private errorMsg: string
    private inGetAreas: boolean = false
    private inGetThemes: boolean = false
    private inGetArticles: boolean = false
    private areas: Area[] = []
    private themes: Theme[] = []
    private articles: Article[] = []
    private areaThemes: AreaTheme[] = []
    private inCounter: boolean = false

    constructor(
        private areasService: AreasService,
        private themesService: ThemesService,
        private articlesService: ArticlesService
    ) { }

    /*-- Recupera as Areas, Temas e Artigos --*/
    public recoverDataAPI(resultRecoverAPI: Function) {

        /*-- Aciona API das Areas --*/
        this.areasService.getAreasAPI()
            .pipe( catchError(error => {
                    if (error.error instanceof ErrorEvent) {
                        this.errorMsg = `Error: ${error.error.message}`;
                    } else {
                        this.errorMsg = `Error: ${error.message}`;
                    }
                    console.log(this.errorMsg)
                    return of([])
            }) )
            .subscribe(response => {
                this.areas = response
                this.inGetAreas = true
                this.checksResult(resultRecoverAPI, "areas")
            })

        /*-- Aciona API dos Temas --*/
        this.themesService.getThemesAPI()
            .pipe( catchError(error => {
                if (error.error instanceof ErrorEvent) {
                    this.errorMsg = `Error: ${error.error.message}`;
                } else {
                    this.errorMsg = `Error: ${error.message}`;
                }
                console.log(this.errorMsg)
                return of([])
                }) )
            .subscribe(response => {
                this.themes = response
                this.inGetThemes = true
                this.checksResult(resultRecoverAPI, "themes")
            })

        /*-- Aciona API dos Artigos --*/
        this.articlesService.getArticlesAPI()
            .pipe( catchError(error => {
                if (error.error instanceof ErrorEvent) {
                    this.errorMsg = `Error: ${error.error.message}`;
                } else {
                    this.errorMsg = `Error: ${error.message}`;
                }
                console.log(this.errorMsg)
                return of([])
                }) )
            .subscribe(response => {
                this.articles = response
                this.inGetArticles = true
                this.checksResult(resultRecoverAPI, "articles")
            })

    }

    /*-- Verifica o resultado dos Gets das APIs --*/
    private checksResult(resultRecoverAPI: Function, get: string) {
        if ( this.inGetAreas && this.inGetThemes && this.inGetArticles ) {
            /*-- Conta a quantidade de Artigos dos Temas/Areas --*/
            if ( !this.inCounter ) {
                this.countAreaTheme()
            }
            /*-- Retorna o resultado dos arrays recuperados da API --*/
            if ( this.areas.length > 0 && this.themes.length > 0 && this.articles.length > 0 ) {
                resultRecoverAPI(get, true, '')
            } else {
                resultRecoverAPI(get, false, this.errorMsg)
            }
        }
    }

    /*-- Contas os Artigos de uma Area/Tema --*/
    private countAreaTheme(): void {
        this.inCounter = true
        this.areaThemes = []
        var count: number
        for ( let area of this.areas ) {
            for ( let theme of this.themes ) {
                count = 0
                for ( let article of this.articles ) {
                    if ( article.area == area.name && article.theme == theme.name ) { count++ }
                }
                if ( count > 0 ) {
                    this.setAreaTheme( area.name , theme.name , theme.title , count )
                }
            }
        }
    }

    /*-- Grava a contagem dos Artigos da Area/Tema --*/
    private setAreaTheme( area: string, name: string, title: string, quantity: number = 0 ): void {
        this.areaThemes.push({ area, name, title, quantity })
    }

    /*-- Retorna os Temas de uma Area, com a contagem de Artigos --*/
    public getAreaThemes( area: string ): AreaTheme[] {
        return this.areaThemes.filter( t => t.area == area )
    }

}
