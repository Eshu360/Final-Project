import { Component, OnInit } from '@angular/core';

import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapsStyle';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title:"google-maps" | undefined
  private map: google.maps.Map | undefined

  ngOnInit(): void {

    let loader=new Loader({
      apiKey:''
    });
    loader.load().then(()=>{
      console.log("map loaded")
      const location = { lat:17.3850, lng:78.4867 };

      this.map=new google.maps.Map(document.getElementById('map')!,{
        center:location,
        zoom:6,
        styles:styles
      })

      const marker= new google.maps.Marker({
        position:location,
        map:this.map
      })




    })


  }



  constructor() { }


}
