import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Emojis {
  name: string
}
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  observer$ = new Observable();
  listEmojis: Emojis[] = [];
  title: string = '';
  content: string = '';
  listCode: string[] = [];
  exampleCode = `
  execute() {
    const observable = new Observable((subscriber) => {
      subscriber.next({name: 'sunglasses'});
      subscriber.next({name: 'smiley'});
      subscriber.next({name: 'wink'});      
    }).subscribe((emoji: any) => emoji ? this.listEmojis.push(emoji): null)
  }`;


  exampleHtml = `
  <mat-card>
  <mat-card-content>
      <button mat-raised-button color="primary" (click)="execute()">Resultado</button>
      <mat-list role="list">
          <mat-list-item *ngFor="let emoji of listEmojis"  role="listitem">
              <angular-emojis [name]="emoji.name" size="20"> </angular-emojis>
          </mat-list-item>
        </mat-list>
  </mat-card-content>
  </mat-card>`

  constructor() {
    this.title = 'Observables';
    this.content = `Observable é uma funcionalidade da biblioteca rxjs, que é utilizada internamente pelo framework e já é
    instalada quando você cria uma nova aplicação Angular. Com Observables, conseguimos lidar com transferência
    de dados assíncrona. Muitas vezes, seu uso é semelhante ao de Promises do Javascript, porém, podendo ser uma
    fonte de transferência de dados contínua, ou seja, o Observable poderá emitir dados várias vezes em momentos
    distintos de sua existência.`;

    this.listCode.push(this.exampleCode)
    this.listCode.push(this.exampleHtml)
  }

  execute() {
    const observable = new Observable((subscriber) => {
      subscriber.next({name: 'sunglasses'});
      subscriber.next({name: 'smiley'});
      subscriber.next({name: 'wink'});      
    }).subscribe((emoji: any) => emoji ? this.listEmojis.push(emoji): null)
  }
}
