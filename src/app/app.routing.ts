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

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'new-event', component: EventCrudComponent},
    {path: 'home', component: HomeComponent},
    {path: 'user-profile', component: ProfileComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'nucleoicons', component: NucleoiconsComponent},
    {path: 'events/:id', component: EventDetailsComponent }
    // {path: '', redirectTo: 'home-page', pathMatch: 'full'}
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
