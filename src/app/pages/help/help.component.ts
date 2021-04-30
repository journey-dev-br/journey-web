import { Component, OnInit } from '@angular/core';

import { Area } from '../../models/area'
import { Theme } from '../../models/theme'
import { Article } from '../../models/article'
import { AreaTheme } from '../../models/area-theme'

import { AreasService } from '../../services/areas.service'
import { ThemesService } from '../../services/themes.service'
import { ControllerService } from '../../services/controller.service'

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public errorMsg: string = ''
    public areas: Area[] = []
    public themes: Theme[] = []
    public area_themes: AreaTheme[] = []
    public showQuantity: boolean = true
    public isLink: boolean = false
    public level_1: number = 1
    public level_2: number = 2
    public level_3: number = 3
    public article: Article = {
        id: 'X0000000001',
        area: 'tips',     
        theme: 'javascript',    
        title: 'Titulo do Artigo',
        description: 'Descrição detalhada do Artigo',
        date: new Date(),
        isNew: true,
        level: 2,
        last: '',
        next: '',        
    }

    constructor(
        private controllerService: ControllerService,
        private areasService: AreasService,
        private themesService: ThemesService
    ) { }

    ngOnInit(): void {
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        this.recoverAPI = true
        this.recoverError = !success
        this.errorMsg = errorMsg
        this.areas = this.areasService.getAreas()
        this.themes = this.themesService.getThemes()
        if ( this.area_themes.length == 0 ) {
            let i = 0
            this.themes.map( t => {
                i++
                this.setAreaThemes( '', t.name, t.title, i )
            })
        } 
    }

    private setAreaThemes(
        area: string,
        name: string,
        title: string,
        quantity: number
    ): void {
        this.area_themes.push({
            area,
            name,
            title,
            quantity,
        })
    }

}

