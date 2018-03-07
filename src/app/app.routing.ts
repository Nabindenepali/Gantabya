import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventCrudComponent } from './event-crud/event-crud.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LoggedInGuard, LoggedOutGuard } from './guards';

const routes: Routes = [
    {path: '', component: HomePageComponent, canActivate: [LoggedInGuard]},
    {path: 'new-event', component: EventCrudComponent, canActivate: [LoggedInGuard]},
    {path: 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
    {path: 'auth-profile', component: ProfileComponent, canActivate: [LoggedInGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [LoggedOutGuard]},
    {path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard]},
    {path: 'landing', component: LandingComponent, canActivate: [LoggedInGuard]},
    {path: 'nucleoicons', component: NucleoiconsComponent, canActivate: [LoggedInGuard]},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [LoggedInGuard]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
