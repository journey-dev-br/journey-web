import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { SearchComponent } from './pages/search/search.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleComponent } from './pages/article/article.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ProcessErrorComponent } from './shared/process-error/process-error.component';
import { ArticleButtonComponent } from './components/article-button/article-button.component';
import { ArticleShowComponent } from './components/article-show/article-show.component';
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';
import { AreaButtonComponent } from './components/area-button/area-button.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        HelpComponent,
        ContactComponent,
        AboutComponent,
        MenuComponent,
        PageNotFoundComponent,
        ThemesComponent,
        SearchComponent,
        ArticlesComponent,
        ArticleComponent,
        LoadingComponent,
        ProcessErrorComponent,
        ArticleButtonComponent,
        ArticleShowComponent,
        ThemeButtonComponent,
        AreaButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
