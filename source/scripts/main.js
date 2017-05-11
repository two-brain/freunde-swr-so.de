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




// $('li.cris-lois-selection-page a').click(function(e) {
// 				if(!history.pushState) {
// 					return true; // browser doesn't have push state, normally load page (IE8,9)
// 				}
// 				if($(this).hasClass('active')) {
// 					return false; // already on the page
// 				}
//
// 				// switch the body classes
// 				$('body.cris-lois-selection-page').toggleClass('cris-selected').toggleClass('lois-selected');
//
// 				// change .active class
// 				$('li.cris-lois-selection-page, a.cris-lois-selection-page, span.cris-lois-selection-page').toggleClass('active');
//
// 				// don't change the page, but push the state
// 				e.preventDefault();
// 				e.stopPropagation();
// 				if(window.history.pushState) window.history.pushState(null, null, $(this).attr('href'));
// 				adjustBackground(); // update the svg path
// 			});
//
// 			// when a subpage is selected
// 			$('body.cris-lois-selection-page .mod_article.cris-navigation a').click(function(e) {
// 				// check that this is not a social media link
// 				if($(this).parent().hasClass('social-media-icons')) {
// 					return;
// 				}
// 				// animate to full page, rest is done my smoothstate
// 				$('body').addClass('show-content-animation').addClass('show-cris-content-animation');
// 				$(this).parents('ul').find('.active').removeClass('active'); // remove old arrow
// 				$(this).addClass('active'); // keep the arrow till the new page is loaded
// 			});
// 			$('body.cris-lois-selection-page .mod_article.lois-navigation a').click(function(e) {
// 				if($(this).parent().hasClass('social-media-icons')) {
// 					return;
// 				}
// 				// animate to full page, rest is done my smoothstate
// 				$('body').addClass('show-content-animation').addClass('show-lois-content-animation');
// 				$(this).parents('ul').find('.active').removeClass('active'); // remove old arrow
// 				$(this).addClass('active'); // keep the arrow till the new page is loaded
// 			});
