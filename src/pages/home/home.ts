import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// importing DetailPage reference from the resp file
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    // defining items array to be of any types.
    items: any[];
    
    constructor(public navCtrl: NavController) {
        this.items = [];
        for(let i = 0; i < 10; i++){
            this.items.push({
                text: 'Item ' + i,
                id: i
            });
        }

    }
    
    itemSelected(item){
        this.navCtrl.push(DetailPage,{
            item: item
        });
    }

}
