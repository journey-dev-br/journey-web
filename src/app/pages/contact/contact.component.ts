import { Component, OnInit } from '@angular/core';

import { ControllerService } from '../../services/controller.service'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
