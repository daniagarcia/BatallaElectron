import { Component, OnInit } from '@angular/core';
import { Barco } from '../../Clases/Barco';
import Ws from '@adonisjs/websocket-client';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

 ws = Ws('ws://localhost:3333')
  constructor() { }

  barcos:Barco[]=[];
  barco2:Barco[]=[];
  letras:string[]=["A","B","C","D","E","F"];
  numeros:number[]=[1,2,3,4,5,6];
  barcosposicion:string[]=[];
  botones:string[]=[];

  ngOnInit() {
    this.ws.connect();
    const chat = this.ws.subscribe('chat');

    chat.on('ready', () => {
      // chat.emit('message', 'hello')
      chat.on('error', (error) => {
        console.log(error)
      })
    })

    function subscribeToChannel () {
      const chat = this.ws.subscribe('chat')
    
      chat.on('error', () => {
        // ('.connection-status').removeClass('connected')
      })
    
      chat.on('message', (message) => {
        // $('.messages').append(`
        //   <div class="message"><h3> ${message.username} </h3> <p> ${message.body} </p> </div>
        // `)
        console.log("conect")
      })
    }

    var contador=0;
    // debugger
    for (let i = 0; i < 6; i++) {  

      for (let j = 0; j < 6; j++) {
        const barco  =  new Barco();
        barco.cordenada=this.letras[i]+this.numeros[j];
        this.botones.push(barco.cordenada);
        const haybarco= Math.round((Math.random() * 1) + 0) === 0 && this.barcosposicion.length<8;
        if(haybarco){
          this.barcosposicion.push(barco.cordenada);
        }
        this.barcos.push(barco);    
        
      }
    
    }
    // debugger
    // for (let i = 0; i < 6; i++) {  

    //   for (let j = 0; j < 6; j++) {
    //     const barcodos  =  new Barco();
    //     barcodos.cordenada=this.letras[i]+this.numeros[j];
    //     this.botones.push(barcodos.cordenada);
    //     const haybarco= Math.round((Math.random() * 1) + 0) === 0 && this.barcosposicion.length<8;
    //     if(haybarco){
    //       this.barcosposicion.push(barcodos.cordenada);
    //     }
    //     this.barcos.push(barcodos);    
        
    //   }
    
    // }












    console.log(this.barcosposicion);
    console.log(this.barcos);
  }



}
