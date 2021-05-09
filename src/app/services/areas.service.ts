import { Injectable } from '@angular/core';

import { Area } from '../models/area'

@Injectable({
    providedIn: 'root'
})
export class AreasService {
    public areas: Area[] = []

    constructor(
    ) { 
        this.setArea( "courses" , "CURSOS")
        this.setArea( "tools" , "FERRAMENTAS")
        this.setArea( "tips" , "DICAS")
        this.setArea( "projects" , "PROJETOS")
        this.setArea( "varieties" , "VARIEDADES")
    }

    public setArea( name: string, title: string ): void {
        this.areas.push({ name, title })
    }

    /*-- Retorna todas as Areas --*/
    public getAreas(): Area[] {
        return this.areas
    }

    /*-- Retorna uma Area --*/
    public getArea(name: string): Area {
        var response: Area
        for ( let area of this.areas ) {
            if ( area.name == name ) { response = area }
        }
        return response
    }

}
