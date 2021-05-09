import { Injectable } from '@angular/core';

import { Area } from '../models/area'
import { Theme } from '../models/theme'
import { Article } from '../models/article'
import { AreaTheme } from '../models/area-theme'

import { AreasService } from './areas.service'
import { ThemesService } from './themes.service'

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {
    private articles: Article[] = []

    private areas: Area[] = []
    private themes: Theme[] = []

    private areaThemes: AreaTheme[] = []
    public inCounter: boolean = false

    constructor(
        private areasService: AreasService,
        private themesService: ThemesService,
    ) { 
        this.setArticlesToolsAngular()
        this.setArticlesToolsNodeJS()
        this.setArticlesTipsAngular()
        this.setArticlesTipsJavascript()
        this.setArticlesTipsHTML()
        this.setArticlesTipsCSS()
        this.areas = this.areasService.getAreas()
        this.themes = this.themesService.getThemes()
        this.countAreaTheme()
    }

    /*-- Retorna todos os Artigos --*/
    public getArticles(): Article[] {
        return this.articles
    }

    /*-- Retorna um Artigo --*/
    public getArticle(id: string): Article {
        var response: Article = undefined
        for ( let article of this.articles ) {
            if ( article.id == id ) { response = article }
        }
        return response
    }

    /*-- Retorna Artigos de uma Area e Tema --*/
    public getArticlesAreaTheme(area: string, theme: string): Article[] {
        var response: Article[] = []
        for ( let article of this.articles ) {
            if ( article.area == area && article.theme == theme ) { response.push(article) }
        }
        return response
    }

    /*-- Retorna os novos Artigos --*/
    public getNewArticles(): Article[] {
        return this.articles.filter( a => a.isNew )
    }

    /*-- Pesquisa Artigos por array de Palavras --*/
    public searchArticlesForWords(search: string[]): Article[] {
        let listSearch = search.map( w => w.toLowerCase() )
        return this.articles.filter(article => {
            let splitTitle = article.title.split(' ')
            let filteredWords = splitTitle.filter((word) => listSearch.includes(word.toLowerCase()))
            if ( filteredWords.length > 0 ) { return true } else { return false }
        })
    }
    
    /*===========================================================================*/
    /**          CARREGA O ARRAY DE TEMAS COM AS QUANTIDADES POR AREA           **/
    /*===========================================================================*/

    /*-- Contas os Artigos de uma Area/Tema --*/
    private countAreaTheme(): void {
        this.inCounter = true
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

    /*-- Grava a contagem dos Artigos da Area/Tema --*/
    private setAreaTheme( area: string, name: string, title: string, quantity: number = 0 ): void {
        this.areaThemes.push({ area, name, title, quantity })
    }

    /*-- Retorna os Temas de uma Area, com a contagem de Artigos --*/
    public getAreaThemes( area: string ): AreaTheme[] {
        return this.areaThemes.filter( t => t.area == area )
    }

    /*-- Retorna um Tema de uma Area, com a contagem de Artigos --*/
    public getAreaTheme( area: string, theme: string ): AreaTheme {
        var response: AreaTheme = undefined
        this.areaThemes.map( t => { 
            if ( t.area == area && t.name == theme ) { response = t }
        })
        return response
    }

    /*===========================================================================*/
    /**                        CARREGAMENTOS DOS ARTIGOS                        **/
    /*===========================================================================*/

    private setArticlesToolsAngular(): void {
        this.setArticle( "a0200100001", "tools", "angular", "Conhecendo o framework Angular", 
        "O que é e como o Angular pode lhe ajudar a organizar e ter desempenho no desenvolvimento de seu software para web.",
        new Date("2021-04-20T18:19:00.000Z"), false, 1, "", "a0200100002" )
        this.setArticle( "a0200100002", "tools", "angular", "As versões do Angular", 
        "A versão 1 do Angular (Angular JS) e a ruptura a partir da versão 2 (Angular).",
        new Date("2021-04-27T18:22:00.000Z"), false, 1, "a0200100001", "a0200100003" )
        this.setArticle( "a0200100003", "tools", "angular", "Instalação do Angular", 
        "Passo a passo para instalar o framework Angular no sistema operacional Windows.",
        new Date("2021-04-20T18:30:00.000Z"), false, 1, "a0200100002", "a0200100004" )
        this.setArticle( "a0200100004", "tools", "angular", "Primeiro App Angular - Hello Word", 
        "Crie o primeiro projeto Angular e altere a aplicação que exibir um Hello Word.",
        new Date("2021-04-20T18:32:00.000Z"), false, 1, "a0200100003", "" )
    }
    
    private setArticlesToolsNodeJS(): void {
        this.setArticle( "a0200600002", "tools", "nodejs", "Instalação do Node JS", 
        "Passo a passo para instalar e testar o Node JS no sistema operacional Windows.",
        new Date("2021-04-20T18:40:00.000Z"), false, 1, "a0200600001", "" )
    }
    
    private setArticlesTipsAngular(): void {
        this.setArticle( "a0300100001", "tips", "angular", "Como exibir data no formato DD/MM/AAAA com Pipe", 
        "Como exibir um objeto Date no formato padrão de datas utilizado no Brasil utilizando Pipe do Angular.",
        new Date("2021-04-20T18:45:00.000Z"), true, 1, "", "" )
    }

    private setArticlesTipsJavascript(): void {
        this.setArticle( "a0300200001", "tips", "javascript", "Como recuperar parametros e informações da URL", 
        "Dica prática de como recuperar no código javascript parametros e informações da URL atual com a variável de ambiente window.location.",
        new Date("2021-04-25T12:10:00.000Z"), true, 1, "", "" )
    }

    private setArticlesTipsHTML(): void {
        this.setArticle( "a0300300001", "tips", "html", "Como abrir um link em uma nova aba do navegador", 
        "Veja como fazer para que quando um link for clicado seja aberto em uma nova aba do navegador.",
        new Date("2021-04-25T22:12:00.000Z"), true, 1, "", "" )
    }

    private setArticlesTipsCSS(): void {
        this.setArticle( "a0300400001", "tips", "css", "Exemplo de fonte size responsivo com CSS", 
        "Como implementar tamanho de fonte(font-size) responsivo baseado no tamanho horizontal(width) da tela.",
        new Date("2021-04-23T11:25:00.000Z"), true, 2, "", "" )
    }

    /*-- Carrega um artigo no array de Artigos --*/
    private setArticle( id: string, area: string, theme: string, title: string, 
        description: string, date: Date, isNew: boolean, level: number,
        last: string, next: string,
    ): void {
        this.articles.push({ 
            id, area, theme, title, description, 
            date, isNew, level, last, next,
        })
    }

}

      
