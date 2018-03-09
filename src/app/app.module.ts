import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

import { HomeModule } from './home/home.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturedEventsComponent } from './featured-events/featured-events.component';
import { FeaturedEventComponent } from './featured-event/featured-event.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventCrudComponent } from './event-crud/event-crud.component';
import { ApiService, EventsService, AuthService } from './services';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LoggedInGuard, LoggedOutGuard } from './guards';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        ProfileComponent,
        FooterComponent,
        HomePageComponent,
        FeaturedEventsComponent,
        FeaturedEventComponent,
        EventsComponent,
        EventComponent,
        HeaderComponent,
        EventCrudComponent,
        RegisterComponent,
        LoginComponent,
        EventDetailsComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        HttpModule
    ],
    providers: [
        ApiService,
        EventsService,
        AuthService,
        LoggedInGuard,
        LoggedOutGuard,
        { provide: 'API_URL', useValue: 'http://localhost:3000' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
