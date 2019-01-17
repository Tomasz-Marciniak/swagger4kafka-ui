import { Component, OnInit } from '@angular/core';
import {Model} from '../shared/model.model';
import {DocumentationService} from '../shared/documentation.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
})
export class ModelsComponent implements OnInit {

  models: { [key: string]: Model };


  constructor(private documentationService: DocumentationService) { }

  ngOnInit() {
    this.models = this.documentationService.getModels();
  }

}
