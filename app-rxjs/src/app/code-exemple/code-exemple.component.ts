import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-exemple',
  templateUrl: './code-exemple.component.html',
  styleUrls: ['./code-exemple.component.css']
})
export class CodeExempleComponent {
  @Input() listCode: string[] = [];
}
