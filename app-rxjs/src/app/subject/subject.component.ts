import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy{

  title: string = '';
  content: string = '';
  listCode: string[] = [];
  exampleCodeService = `
  //usando um serviço externo para disponibilizar o subject para qualquer component se inscrever
  @Injectable()
  export class SubjectService {
    public message = new Subject<string>();
    
    setMessage(value: string) {
      this.message.next(value); 
    }
  }
  `
  exampleCode = `  
  
  // ja dentro do component ficaria desta forma
  message: string = '';
  messageSubScription: Subscription = new Subscription();
  listMessage: string[] = [];
  
  constructor(private subjectService: SubjectService) {}
  
  ngOnInit(): void {
    this.messageSubScription = this.subjectService.message.subscribe(value => {
      this.listMessage.push(value);    
    })
  }
  
  execute(event:any): void {
    this.subjectService.setMessage(event.value);
  }

  ngOnDestroy(): void {
    this.messageSubScription.unsubscribe
  }
  
  `;
  exampleHtml = `
  <mat-card>
    <mat-card-content> 
        <div class="box">            
            <input type="text" placeholder="Ex. Pizza"  #text>
            <button mat-raised-button color="primary" (click)="execute(text)">execute</button>
        </div>
        <mat-list role="list">
            <mat-list-item *ngFor="let message of listMessage"  role="listitem">
                {{message}}                
            </mat-list-item>
        </mat-list>       
    </mat-card-content>
  </mat-card>
  `;
  message: string = '';
  messageSubScription: Subscription = new Subscription();
  listMessage: string[] = [];
  
  constructor(private subjectService: SubjectService) {
    this.title = 'Subject';
    this.content = `O subject permite fazer um subscribe e um publish, em outras palavras, ele nos permite enviar e receber dados`;    
    this.listCode.push(this.exampleCodeService);
    this.listCode.push(this.exampleCode);
    this.listCode.push(this.exampleHtml); 
  }

  ngOnInit(): void {
    this.messageSubScription = this.subjectService.message.subscribe(value => {
      this.listMessage.push(value);    
    })
  }

  execute(event:any): void {
    this.subjectService.setMessage(event.value);
  }

  ngOnDestroy(): void {
    this.messageSubScription.unsubscribe
  }

}
