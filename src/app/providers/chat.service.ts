import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Mensaje } from '../interface/mensaje.interface';


@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  constructor( private afs: AngularFirestore ) {

  }

  cargarMensajes() {

    // Traer los últimos 5 mensajes
    this.itemsCollection = this.afs.collection<Mensaje>('chats',
                                                        ref => ref.orderBy('fecha', 'desc')
                                                                  .limit(5)
                                                      );

    return this.itemsCollection.valueChanges()
                              .pipe(
                                map( (mensajes: Mensaje[] ) => {
                                  console.log(mensajes);
                                  this.chats = [];
                                  for ( const mensaje of mensajes  ) {

                                    this.chats.unshift( mensaje ); // Se da vuelta lo traido

                                  }

                                  return this.chats; // Opcional, es por si luego quiero trabajar con estos mensajes

                               })
                              );

  }

  agregarMensaje( texto: string ) {

    let mensaje: Mensaje = {

      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime(),

    };

    return this.itemsCollection.add( mensaje );

  }

}
