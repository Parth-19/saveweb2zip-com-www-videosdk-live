"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2962],{2962:function(e,t,r){r.d(t,{Mg:function(){return L},PB:function(){return u},dX:function(){return M},iu:function(){return P},ns:function(){return S}});var n=r(67294),a=r(9008),o=r.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var l=["keyOverride"],c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},d=function(e,t,r){void 0===t&&(t=[]);var a=void 0===r?{}:r,o=a.defaultWidth,i=a.defaultHeight;return t.reduce((function(t,r,a){return t.push(n.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:r.url})),r.alt&&t.push(n.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(n.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(n.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(n.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:r.width.toString()})):o&&t.push(n.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:o.toString()})),r.height?t.push(n.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(n.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t}),[])},s=function(e){var t,r,a,o=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var s="";e.title?(s=e.title,c.templateTitle&&(s=c.templateTitle.replace(/%s/g,(function(){return s})))):e.defaultTitle&&(s=e.defaultTitle),s&&o.push(n.createElement("title",{key:"title"},s));var h,u,m=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,y=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var g=e.robotsProps,v=g.nosnippet,k=g.maxSnippet,G=g.maxImagePreview,b=g.maxVideoPreview,E=g.noarchive,w=g.noimageindex,O=g.notranslate,A=g.unavailableAfter;f=(v?",nosnippet":"")+(k?",max-snippet:"+k:"")+(G?",max-image-preview:"+G:"")+(E?",noarchive":"")+(A?",unavailable_after:"+A:"")+(w?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(O?",notranslate":"")}(m||y?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),o.push(n.createElement("meta",{key:"robots",name:"robots",content:(m?"noindex":"index")+","+(y?"nofollow":"follow")+f}))):o.push(n.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&o.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&o.push(n.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&o.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){o.push(n.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&o.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&o.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&o.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&o.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||s)&&o.push(n.createElement("meta",{key:"og:title",property:"og:title",content:(null==(h=e.openGraph)?void 0:h.title)||s}));(null!=(r=e.openGraph)&&r.description||e.description)&&o.push(n.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&o.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();o.push(n.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&o.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&o.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&o.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&o.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){o.push(n.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&o.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&o.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){o.push(n.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&o.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&o.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&o.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){o.push(n.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&o.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){o.push(n.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==T&&"video.episode"!==T&&"video.tv_show"!==T&&"video.other"!==T||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&o.push(n.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&o.push(n.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){o.push(n.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){o.push(n.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&o.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&o.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){o.push(n.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&o.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&o.push.apply(o,d("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&o.push.apply(o,d("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.audio&&o.push.apply(o,d("audio",e.openGraph.audio)),e.openGraph.locale&&o.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&o.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&o.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,r,a=e.keyOverride,c=p(e,l);o.push(n.createElement("meta",i({key:"meta:"+(null!=(t=null!=(r=null!=a?a:c.name)?r:c.property)?t:c.httpEquiv)},c)))})),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach((function(e){var t;o.push(n.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),o},h=function(e){return n.createElement(o(),null,s(e))},u=function(e){var t=e.title,r=e.themeColor,a=e.noindex,o=void 0!==a&&a,i=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,d=e.openGraph,u=e.facebook,m=e.twitter,y=e.additionalMetaTags,f=e.titleTemplate,g=e.defaultTitle,v=e.mobileAlternate,k=e.languageAlternates,G=e.additionalLinkTags,b=e.useAppDir,E=void 0!==b&&b;return n.createElement(n.Fragment,null,E?s({title:t,themeColor:r,noindex:o,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:u,openGraph:d,additionalMetaTags:y,twitter:m,titleTemplate:f,defaultTitle:g,mobileAlternate:v,languageAlternates:k,additionalLinkTags:G}):n.createElement(h,{title:t,themeColor:r,noindex:o,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:u,openGraph:d,additionalMetaTags:y,twitter:m,titleTemplate:f,defaultTitle:g,mobileAlternate:v,languageAlternates:k,additionalLinkTags:G}))},m=function(e,t){var r=t;Array.isArray(r)&&1===r.length&&(r=i({},t[0]));var n=Array.isArray(r)?r.map((function(t){return y(e,t)})):y(e,r);return{__html:JSON.stringify(n,k)}},y=function(e,t){var r=t.id,n=i({},(void 0===r?void 0:r)?{"@id":t.id}:{},t);return delete n.id,i({"@context":"https://schema.org","@type":e},n)},f=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),g=new RegExp("["+Object.keys(f).join("")+"]","g"),v=function(e){return f[e]},k=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(g,v);default:return}},G=["type","keyOverride","scriptKey","scriptId","dataArray","useAppDir"];function b(e){var t=e.type,r=void 0===t?"Thing":t,a=e.keyOverride,l=e.scriptKey,c=e.scriptId,d=void 0===c?void 0:c,s=e.dataArray,h=e.useAppDir,u=void 0!==h&&h,y=p(e,G),f=function(){return n.createElement("script",{type:"application/ld+json",id:d,"data-testid":d,dangerouslySetInnerHTML:m(r,void 0===s?i({},y):s),key:"jsonld-"+l+(a?"-"+a:"")})};return u?n.createElement(f,null):n.createElement(o(),null,f())}function E(e){return"string"===typeof e?{"@type":"Person",name:e}:e.name?{"@type":null!=(t=null==e?void 0:e.type)?t:"Person",name:e.name,url:null==e?void 0:e.url}:void 0;var t}function w(e){return Array.isArray(e)?e.map((function(e){return E(e)})).filter((function(e){return!!e})):e?E(e):void 0}function O(e){if(e)return{"@type":"ImageObject",url:e}}function A(e,t){if(e)return{"@type":"Organization",name:e,logo:O(t)}}function T(e){if(e)return Array.isArray(e)?1===e.length?x(e[0]):e.map(x):x(e)}function x(e){return"string"===typeof e?e:i({"@type":"PostalAddress"},e)}var _=["type","keyOverride","potentialActions"];function P(e){var t=e.type,r=void 0===t?"WebSite":t,a=e.keyOverride,o=e.potentialActions;var l=i({},p(e,_),{potentialAction:o.map((function(e){if(e){var t=e.target,r=e.queryInput;return{"@type":"SearchAction",target:t+"={"+r+"}","query-input":"required name="+r}}}))});return n.createElement(b,i({type:r,keyOverride:a},l,{scriptKey:"jsonld-siteLinksSearchBox"}))}function I(e){if(e&&e.length)return e.map((function(e){return i({"@type":"ContactPoint"},e)}))}var N=["type","keyOverride","address","contactPoints","contactPoint"];function S(e){var t=e.type,r=void 0===t?"Organization":t,a=e.keyOverride,o=e.address,l=e.contactPoints,c=e.contactPoint,d=i({},p(e,N),{address:T(o),contactPoint:I(c||l)});return n.createElement(b,i({type:r,keyOverride:a},d,{scriptKey:"organization"}))}function W(e){if(e&&e.length)return e.map((function(e){return{"@type":"Question",name:e.questionName,acceptedAnswer:{"@type":"Answer",text:e.acceptedAnswerText}}}))}var H=["type","keyOverride","mainEntity"];function L(e){var t=e.type,r=void 0===t?"FAQPage":t,a=e.keyOverride,o=e.mainEntity,l=i({},p(e,H),{mainEntity:W(o)});return n.createElement(b,i({type:r,keyOverride:a},l,{scriptKey:"faq-page"}))}var j=["type","keyOverride","url","title","images","datePublished","dateModified","authorName","publisherName","publisherLogo","description","isAccessibleForFree"];function M(e){var t=e.type,r=void 0===t?"Article":t,a=e.keyOverride,o=e.url,l=e.title,c=e.images,d=e.datePublished,s=e.dateModified,h=e.authorName,u=e.publisherName,m=void 0===u?void 0:u,y=e.publisherLogo,f=void 0===y?void 0:y,g=e.description,v=e.isAccessibleForFree,k=p(e,j),G=i({datePublished:d,description:g,mainEntityOfPage:{"@type":"WebPage","@id":o},headline:l,image:c,dateModified:s||d,author:w(h),publisher:A(m,f),isAccessibleForFree:v},k);return n.createElement(b,i({type:r,keyOverride:a},G,{scriptKey:"article"}))}}}]);