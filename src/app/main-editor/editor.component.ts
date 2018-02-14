/// <reference path="../../../node_modules/d3-node-editor/src/index.d.ts"/>
import {
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {NodeEditorService} from "../model/node-editor.service";

@Component({
  selector: 'app-editor',
  template: `
    <div class="wrapper">
      <div #d3neEditor class="node-editor"></div>
    </div>
    <button matTooltip="Compile" (click)="this.nodeEditor.compile()" mat-fab color="accent">
      <mat-icon>code</mat-icon>
    </button> `,
  styleUrls: ['../../../node_modules/d3-node-editor/build/d3-node-editor.css', './d3ne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements AfterViewInit {

  @ViewChild('d3neEditor') container: ElementRef;

  ngAfterViewInit() {
    this.nodeEditor.refresh(this.container);
  }

  constructor(public nodeEditor: NodeEditorService) {
  }
}