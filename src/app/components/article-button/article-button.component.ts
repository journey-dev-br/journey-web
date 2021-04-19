import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../models/article'
import { Area } from '../../models/area'
import { Theme } from '../../models/theme'

import { AreasService } from '../../services/areas.service'
import { ThemesService } from '../../services/themes.service'

@Component({
    selector: 'app-article-button',
    templateUrl: './article-button.component.html',
    styleUrls: ['./article-button.component.css']
})
export class ArticleButtonComponent implements OnInit {
    public area: Area
    public theme: Theme

    constructor(
        private areasService: AreasService,
        private themesService: ThemesService
    ) { }

    @Input() isLink: boolean
    @Input() article: Article  

    ngOnInit(): void {
        this.area = this.areasService.getArea(this.article.area)
        this.theme = this.themesService.getTheme(this.article.theme)
    }

}
