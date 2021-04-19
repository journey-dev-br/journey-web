import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Area } from '../../models/area'
import { Theme } from '../../models/theme'

import { ControllerService } from '../../services/controller.service'
import { AreasService } from '../../services/areas.service'

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
    public isLinkArea: boolean = false
    public isLinkTheme: boolean = true
    public showQuantity: boolean = true
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public errorMsg: string = ''
    public parm_area: string
    public area: Area = undefined
    public themes: Theme[] = []

    constructor(
        private route: ActivatedRoute,
        private controllerService: ControllerService,
        private areasService: AreasService,
    ) { }

    ngOnInit(): void {
        this.parm_area = this.route.snapshot.paramMap.get("area")
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false, errorMsg: string = '') {
        this.recoverAPI = true
        this.recoverError = !success
        this.errorMsg = errorMsg
        this.area = this.areasService.getArea(this.parm_area)
        this.themes = this.controllerService.getAreaThemes(this.parm_area)
    }

}
