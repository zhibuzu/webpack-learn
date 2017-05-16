
 /*----------------------------------------------------  
    Description: webpack learn demo
    Version: 
    Copyright (c) 2017 Jesse Hu
    
    05 12, 2017
------------------------------------------------------*/
 // import lodash dependencies
 import _ from 'lodash';

 function component () {
     var element = document.createElement('div');

     /* lodash is required for the next line to work */
     element.innerHTML = _.join(['Hello','webpack'], ' ');

     return element;
 }

 document.body.appendChild(component());
//  document.body.appendChild('hi, alex!');
//  console.log(a);
