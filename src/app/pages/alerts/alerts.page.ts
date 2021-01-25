import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  constructor(private ac: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.ac.create({
      cssClass: 'my-custom-class',
      header: 'Información',
      subHeader: 'Pruebas',
      message: 'Pruebas de funcionamiento.',
      buttons: ['OK', 'CANCEL'],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.ac.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal',
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel');
            console.log(data);
          },
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            console.log(data);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.ac.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true,
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5',
        },
        {
          name: 'radio6',
          type: 'radio',
          label:
            'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
