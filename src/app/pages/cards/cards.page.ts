import { AlertController } from '@ionic/angular';
import { Person } from './../../interfaces/person.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  public people: Person[] = [
    {
      name: 'Hittler',
      img:
        'https://s1.eestatic.com/2020/04/28/cultura/historia/Segunda_Guerra_Mundial-Nazismo-Holocausto-Adolf_Hitler-Efemerides-Historia_485962165_151094771_1706x960.jpg',
    },
    {
      name: 'Shakira',
      img:
        'https://depor.com/resizer/p_ixJ0YfldEgs2F-d-8fMFlqZro=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/H42EXSOSQVCQ7HWEAIFVJNKH2Y.jpg',
    },
    {
      name: 'Isayama :v',
      img:
        'https://www.nintenderos.com/wp-content/uploads/2018/11/Hajime-Isayama.jpg',
    },
    {
      name: 'Tobey',
      img:
        'https://los40.com/los40/imagenes/2020/06/09/album/1591711050_193320_1591712353_album_normal.jpg',
    },
    {
      name: 'tom holland',
      img:
        'https://www.telam.com.ar/advf/imagenes/2020/09/5f5e98a292de9_1004x565.jpg',
    },
    {
      name: 'Gal gadot',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gal_Gadot_2018_cropped_retouched.jpg/1200px-Gal_Gadot_2018_cropped_retouched.jpg',
    },
    {
      name: 'Ben affleck',
      img:
        'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/10/15/802188.jpg',
    },
    {
      name: 'trump',
      img:
        'https://as.com/meristation/imagenes/2021/01/08/noticias/1610103469_751328_1610103733_noticia_normal.jpg',
    },
    {
      name: 'Manute :v',
      img: 'https://pbs.twimg.com/media/EUY63e5XgAITCWf.jpg',
    },
    {
      name: 'Jason momoa',
      img:
        'https://elintransigente.com/wp-content/uploads/2020/10/Jason-Momoa1.jpg',
    },
  ];

  constructor(private ac: AlertController) {}

  ngOnInit() {}

  async showAlert(artist: Person) {
    const alert = await this.ac.create({
      header: 'Artista seleccionado',
      subHeader: artist.name,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
