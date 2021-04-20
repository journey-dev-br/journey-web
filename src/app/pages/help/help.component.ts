import { Component, OnInit } from '@angular/core';

import { Article } from '../../models/article'

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
    public isLinkArticle: boolean = false
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
    ) { }

    ngOnInit(): void {
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        this.recoverAPI = true
        this.recoverError = !success
        this.errorMsg = errorMsg
    }

}
