import { Carrera } from './../../interfaces/carreras.interface';
import { Folder } from './../../interfaces/folder.interface';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  public folders: Folder[] = [
    { name: 'Ejercicios', icon: 'folder' },
    { name: 'Fotos', icon: 'camera' },
    { name: 'Documentos', icon: 'document' },
  ];

  public carreras: Carrera[] = [
    {
      name: 'Ingenieria en ciencias de la computacion',
      description: 'computacion',
    },
    { name: 'Psicologia', description: 'Caarrerade area social' },
    { name: 'Inegieria civil', description: 'civil' },
  ];

  constructor(private asc: ActionSheetController) {}

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.asc.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Reproducir',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Agregar a favoritos',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
