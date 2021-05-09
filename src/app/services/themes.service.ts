import { Injectable } from '@angular/core';

import { Theme } from '../models/theme'

@Injectable({
    providedIn: 'root'
})
export class ThemesService {
    public themes: Theme[] = [] 

    constructor(
    ) { 
        this.setTheme( "angular", "Angular" )        
        this.setTheme( "javascript", "Javascript" )        
        this.setTheme( "css", "CSS" )        
        this.setTheme( "html", "HTML" )        
        this.setTheme( "nodejs", "Node JS" )        
        this.setTheme( "vscode", "VSCode" )        
        this.setTheme( "internet", "Internet" )        
    }

    private setTheme( name: string, title: string ): void {
        this.themes.push({ name, title })
    }

    /*-- Retorna todos os Temas --*/
    public getThemes(): Theme[] {
        return this.themes
    }

    /*-- Retorna um Tema --*/
    public getTheme(name: string): Theme {
        var response: Theme
        for ( let theme of this.themes ) {
            if ( theme.name == name ) { response = theme }
        }
        return response
    }

}
