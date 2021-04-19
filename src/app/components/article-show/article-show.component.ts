import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Article } from '../../models/article'

import { ArticleService } from '../../services/article.service'

@Component({
    selector: 'app-article-show',
    templateUrl: './article-show.component.html',
    styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit, AfterViewInit {
    @ViewChild('HTMLArticleContent', { static: true }) articleContent
    public errorMsg: string
    public recoverAPI: boolean = false
    public recoverError: boolean = false

    constructor(
        private articleService: ArticleService
    ) { }

    @Input() article: Article 

    ngOnInit(): void {
    }

    ngAfterViewInit() {

        this.articleService.getArticleAPI( this.article.id )
            .pipe(
                catchError(error => {
                    if (error.error instanceof ErrorEvent) {
                        this.errorMsg = `Error: ${error.error.message}`;
                    } else {
                        this.errorMsg = `Error: ${error.message}`;
                    }
                    console.log(this.errorMsg)
                    return of('')
                })
            )
            .subscribe(response => {
                this.articleContent.nativeElement.innerHTML = response
                this.recoverAPI = true
                if ( response == '' ) {
                    this.recoverError = true
                }
        })        
    }

    public clicou(link: string): void {
        console.log("*** Clicou no link ", link, " ***")
    }

}
