import { Component, OnInit } from '@angular/core';

import { ControllerService } from '../../services/controller.service'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    public recoverAPI: boolean = false
    public recoverError: boolean = false
    public errorMsg: string = ''

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
