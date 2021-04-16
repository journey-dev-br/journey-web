import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { HelpComponent } from './pages/help/help.component'
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component'
import { SearchComponent } from './pages/search/search.component'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'

import { ThemesComponent } from './pages/themes/themes.component'
import { ArticlesComponent } from './pages/articles/articles.component'
import { ArticleComponent } from './pages/article/article.component'

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'help', component: HelpComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'search', component: SearchComponent },
    { path: 'themes/:area', component: ThemesComponent },
    { path: 'articles/:area/:theme', component: ArticlesComponent },
    { path: 'article/:id', component: ArticleComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
