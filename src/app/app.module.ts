import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
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
import { EventsService } from './services/events.service';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LandingComponent,
        ProfileComponent,
        FooterComponent,
        HomePageComponent,
        FeaturedEventsComponent,
        FeaturedEventComponent,
        EventsComponent,
        EventComponent,
        HeaderComponent,
        EventCrudComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [
        EventsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
