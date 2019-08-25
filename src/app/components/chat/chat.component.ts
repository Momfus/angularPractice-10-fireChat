import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  // tslint:disable: no-inferrable-types
  // tslint:disable: max-line-length

  mensaje: string = '';
  elemento: any;

  constructor( public _cs: ChatService ) {

    this._cs.cargarMensajes()
            .subscribe( () => {


              setTimeout( () => { // Lo de abajo lo hace mucho más rápido que cuando se renderiza el html, por lo que se hace ese leve atraso para ejecutarse

                this.elemento.scrollTop = this.elemento.scrollHeight; // Mover el scroll hacia abajo

              }, 20);


            });

  }

  ngOnInit() {

    this.elemento = document.getElementById( 'app-mensajes' );

  }

  enviar_mensaje() {

    console.log(this.mensaje);

    // Ignorar si el mensaje está vacio
    if ( this.mensaje.length === 0 ) {
      return;
    }

    // Agregar mensaje
    this._cs.agregarMensaje( this.mensaje )
            .then( () => this.mensaje = '' )
            .catch( (err) => console.error('Error al enviar', err ) );


          }

}
