import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicComponent } from './topics/topic/topic.component';

import { DocumentationService } from './shared/documentation.service';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DocumentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
