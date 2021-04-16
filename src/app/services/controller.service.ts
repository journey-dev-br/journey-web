import { Injectable } from '@angular/core';

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
    private inGetAreas: boolean = false
    private inGetThemes: boolean = false
    private inGetArticles: boolean = false
    public areas: Area[] = []
    public themes: Theme[] = []
    public articles: Article[] = []
    public areaThemes: AreaTheme[] = []
    public inCounter: boolean = false

    constructor(
        private areasService: AreasService,
        private themesService: ThemesService,
        private articlesService: ArticlesService
    ) { }

    public recoverDataAPI(resultRecoverAPI: Function) {
        this.areasService.getAreasAPI().subscribe(response => {
            this.areas = response
            this.inGetAreas = true
            this.checksResult(resultRecoverAPI, "areas")
        })
        this.themesService.getThemesAPI().subscribe(response => {
            this.themes = response
            this.inGetThemes = true
            this.checksResult(resultRecoverAPI, "themes")
        })
        this.articlesService.getArticlesAPI().subscribe(response => {
            this.articles = response
            this.inGetArticles = true
            this.checksResult(resultRecoverAPI, "articles")
        })
    }

    checksResult(resultRecoverAPI: Function, get: string) {
        if ( this.inGetAreas && this.inGetThemes && this.inGetArticles ) {
            if ( !this.inCounter ) {
                this.countAreaTheme()
            }
            if ( this.areas.length > 0 && this.themes.length > 0 && this.articles.length > 0 ) {
                resultRecoverAPI(get, true)
            } else {
                resultRecoverAPI(get, false)
            }
        }
    }

    countAreaTheme(): void {
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

    setAreaTheme( area: string, name: string, title: string, quantity: number = 0 ): void {
        this.areaThemes.push({ area, name, title, quantity })
    }

    public getAreaThemes( area: string ): AreaTheme[] {
        return this.areaThemes.filter( t => t.area == area )
    }

}
