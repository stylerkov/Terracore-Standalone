import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParallelizatorService} from "./parallelizator.service";
import {NodeEditorService} from "./node-editor.service";
import {UnityService} from "./unity.service";
import {DataService} from "./data.service";
import {NWJSPlatfromSpecificFunctions} from "./util/platform-specific";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ParallelizatorService, NodeEditorService, UnityService, DataService, NWJSPlatfromSpecificFunctions]
})
export class ModelModule {
}
