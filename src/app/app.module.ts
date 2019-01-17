import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicComponent } from './topics/topic/topic.component';

import { DocumentationService } from './shared/documentation.service';
import { ModelComponent } from './model/model.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    TopicComponent,
    ModelComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DocumentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
