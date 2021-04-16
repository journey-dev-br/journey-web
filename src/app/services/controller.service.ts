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

    constructor(
        private areasService: AreasService,
        private themesService: ThemesService,
        private articlesService: ArticlesService
    ) { }

    public recoverDataAPI(resultRecoverAPI: Function) {
        this.areasService.getAreasAPI().subscribe(response => {
            this.areas = response
            this.inGetAreas = true
            this.checksResult(resultRecoverAPI)
        })
        this.themesService.getThemesAPI().subscribe(response => {
            this.themes = response
            this.inGetThemes = true
            this.checksResult(resultRecoverAPI)
        })
        this.articlesService.getArticlesAPI().subscribe(response => {
            this.articles = response
            this.inGetArticles = true
            this.checksResult(resultRecoverAPI)
        })
    }

    checksResult(resultRecoverAPI: Function) {
        if ( this.inGetAreas && this.inGetThemes && this.inGetArticles ) {
            this.countAreaTheme()
            resultRecoverAPI()
        }
    }

    countAreaTheme(): void {
        console.log("controller> Vai contar os artigos dos temas...")
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
        console.log("controller> area: ", area, " theme: ", name, " quantity: ", quantity)
        this.areaThemes.push({ area, name, title, quantity })
    }

    public getAreaThemes( area: string ): AreaTheme[] {
        return this.areaThemes.filter( a => { return a.area == area } )
    }

}
