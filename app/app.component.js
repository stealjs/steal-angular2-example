import ngCore from '@angular/core';
import template from './app.template';
import './app.less';

var AppComponent = ngCore.Component({
    selector: 'my-app',
    template
  })
  .Class({
    constructor: function() {}
  });

export default AppComponent;
