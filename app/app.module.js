import AppComponent from './app.component';
import ngCore from '@angular/core';
import ngPlatformBrowser from '@angular/platform-browser';

var AppModule = ngCore.NgModule({
    imports: [ ngPlatformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });

export default AppModule;
