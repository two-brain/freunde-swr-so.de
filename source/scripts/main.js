'use strict';

/*
 * Loading main js files
 */

 // Simple JS feature detection
 var className, html;
 html = document.documentElement;
 className = html.className.replace('no-js', 'js');
 html.className = className;

 $(document).foundation();

 $('table').addClass('stack');
 $('.powermail_submit').addClass('button');
 $('.powermail_fieldset legend').remove();

