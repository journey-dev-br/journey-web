import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Area } from '../../models/area'
import { Theme } from '../../models/theme'

import { ControllerService } from '../../services/controller.service'
import { AreasService } from '../../services/areas.service'
import { ThemesService } from '../../services/themes.service'

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public parm_area: string
    public area: Area = undefined
    public themes: Theme[] = []

    constructor(
        private route: ActivatedRoute,
        private controllerService: ControllerService,
        private areasService: AreasService,
        private themesService: ThemesService,
    ) { }

    ngOnInit(): void {
        this.parm_area = this.route.snapshot.paramMap.get("area")
        this.controllerService.recoverDataAPI(this.resultRecoverAPI.bind(this))
    }

    resultRecoverAPI(get: string = "", success: boolean = false) {
        this.recoverAPI = true
        this.recoverError = !success
        this.area = this.areasService.getArea(this.parm_area)
        this.themes = this.controllerService.getAreaThemes(this.parm_area)
    }

}
