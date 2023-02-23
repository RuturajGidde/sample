import { Component } from '@angular/core';
import { DemoserviceService } from './demoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoAnemoi';

data: any;
constructor(private demoservice :DemoserviceService){}

  getData(){
    debugger
   this.demoservice.getData().subscribe((data:any)=>{
    console.log(data,'get data');
    
   })
  }
}
