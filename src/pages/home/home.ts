import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var NativeKeyboard;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showNativeKeyboard() {
    NativeKeyboard.showMessenger({
      rightButton: {
        type: 'fontawesome',
        value: 'fa-paper-plane-o'
      },
      leftButton: {
        type: 'fontawesome',
        value: 'times',
        onPress: function() {
          NativeKeyboard.hideMessenger();
        }
      },
      showKeyboard: true,
      secure: false,
      type: 'default',
      animated: false,
      placeholder: 'Dein Kommentar ...',
      onSubmit: function(text) {
        NativeKeyboard.hideMessenger();
      },
      scrollToBottomAfterMessengerShows: false
    });
  }

}
