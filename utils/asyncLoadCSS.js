!function(a){'use strict';var b=function(b,c,d){function j(a){return e.body?a():void setTimeout(function(){j(a)})}function l(){f.addEventListener&&f.removeEventListener('load',l),f.media=d||'all'}if(b){var g,e=a.document,f=e.createElement('link');if(c)g=c;else{var h=(e.body||e.getElementsByTagName('head')[0]).childNodes;g=h[h.length-1]}var i=e.styleSheets;f.rel='stylesheet',f.href=b,f.media='only x',j(function(){g.parentNode.insertBefore(f,c?g:g.nextSibling)});var k=function(a){for(var b=f.href,c=i.length;c--;){var d=i[c].href;if(d&&d.indexOf(b)>-1)return a()}setTimeout(function(){k(a)})};return f.addEventListener&&f.addEventListener('load',l),f.onloadcssdefined=k,k(l),f}};a.loadCSS=b}(this),function(a){if(a.loadCSS){var b=loadCSS.relpreload={};b.support=function(){try{return a.document.createElement('link').relList.supports('preload')}catch(b){}},b.poly=function(){for(var b=a.document.getElementsByTagName('link'),c=0;c<b.length;c++){var d=b[c];'preload'===d.rel&&'style'===d.getAttribute('data-as')&&a.loadCSS(d.href,d)}},b.support()||b.poly()}}(this);