(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{300:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(0),i=a.n(c),o=a(157),l=a(311),m=(a(54),a(160),a(113),a(566),a(69),a(2)),s=a.n(m),d=a(21),p=a(462),u=a.n(p),f=a(568),y=a.n(f),h=a(628),x=a.n(h),g=(a(637),a(639),a(641),y.a.Item),b=x.a.TextArea,E=function(e){var t=e.form.getFieldDecorator;function a(t){t.preventDefault(),e.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),function(e){var t=this;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object.assign({"form-name":"contact"},e),Object.keys(a).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])}).join("&"))}).then(function(){console.log("Form submission success"),Object(d.navigate)("/success")}).catch(function(e){console.error("Form submission error:",e),t.handleNetworkError()});var a}(t))})}return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.ThemeContext.Consumer,null,function(e){return i.a.createElement("div",{className:s.a.dynamic([["1647325995",[e.color.brand.primary,e.color.brand.primary]]])+" form"},i.a.createElement(y.a,{name:"contact",onSubmit:a,"data-netlify":"true","data-netlify-honeypot":"bot-field"},i.a.createElement(g,{label:"Name"},t("name",{rules:[{whitespace:!0}]})(i.a.createElement(x.a,{name:"name"}))),i.a.createElement(g,{label:"E-mail"},t("email",{rules:[{required:!0,message:"Please input your e-mail address!",whitespace:!0,type:"email"}]})(i.a.createElement(x.a,{name:"email"}))),i.a.createElement(g,{label:"Message"},t("message",{rules:[{required:!0,message:"Please input your message!",whitespace:!0}]})(i.a.createElement(b,{name:"message",placeholder:"I love raw plants!",autosize:{minRows:4,maxRows:10}}))),i.a.createElement(g,null,i.a.createElement(u.a,{type:"primary",htmlType:"submit"},"Submit"))),i.a.createElement(s.a,{styleId:"1647325995",css:[".form.__jsx-style-dynamic-selector{background:transparent;}",".form.__jsx-style-dynamic-selector .ant-row.ant-form-item{margin:0 0 1em;}",".form.__jsx-style-dynamic-selector .ant-row.ant-form-item:last-child{margin-top:1em;}",".form.__jsx-style-dynamic-selector .ant-form-item-control{line-height:1em;}",".form.__jsx-style-dynamic-selector .ant-form-item-label{line-height:1em;margin-bottom:0.5em;}",".form.__jsx-style-dynamic-selector .ant-form-item{margin:0;}",".form.__jsx-style-dynamic-selector .ant-input{-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:auto;font-size:1.2em;padding:0.5em 0.6em;}",".form.__jsx-style-dynamic-selector .ant-btn-primary{height:auto;font-size:1.2em;padding:0.5em 3em;background:"+e.color.brand.primary+";border:1px solid "+e.color.brand.primary+";}",".form.__jsx-style-dynamic-selector .ant-form-explain{margin-top:0.2em;}","@media screen and (min-width:1024px){.form.__jsx-style-dynamic-selector input{max-width:50%;}}"],dynamic:[e.color.brand.primary,e.color.brand.primary]}))}))};E.propTypes={form:r.a.object};var w=y.a.create({})(E),_=a(316),k=a(307),j=a(5);a.d(t,"query",function(){return z});var v=function(e){var t=e.data.site.siteMetadata.facebook;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.ThemeContext.Consumer,null,function(e){return i.a.createElement(l.a,{theme:e},i.a.createElement("header",null,i.a.createElement(_.a,{title:"Contact",theme:e})),i.a.createElement("p",null,"We love hearing from members of the community! Feel free to reach out to use for any reason, and we should respond back in               1 to 2 business days. Thank you for your patience."),i.a.createElement("br",null),i.a.createElement("li",null," ",i.a.createElement(j.m,null)," ",i.a.createElement("a",{href:"http://derp.com"},"(201) 555-4200")),i.a.createElement("li",null," ",i.a.createElement(j.i,null)," ",i.a.createElement("a",{href:"jim@wisdomofjim.com"},"jim@wisdomofjim.com")),i.a.createElement("li",null," ",i.a.createElement(j.g,null)," ",i.a.createElement("a",{href:"240 E 5th St, New York, New York, 10010"},"240 E 5th St, New York, New York, 10010")),i.a.createElement("br",null),i.a.createElement(w,{theme:e}))}),i.a.createElement(k.a,{facebook:t}))};v.propTypes={data:r.a.object.isRequired};t.default=v;var z="3238590904"},307:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),i=a.n(c),o=a(325),l=a.n(o),m=a(48),s=a.n(m),d=function(e){var t=e.data,a=e.facebook,n=((t||{}).frontmatter||{}).title,c=((t||{}).frontmatter||{}).description,i=((t||{}).frontmatter||{}).cover,o=((t||{}).fields||{}).slug,m=n?n+" - "+s.a.shortSiteTitle:s.a.siteTitle,d=c||s.a.siteDescription,p=i||s.a.siteImage,u=s.a.siteUrl+s.a.pathPrefix+o;return r.a.createElement(l.a,{htmlAttributes:{lang:s.a.siteLanguage,prefix:"og: http://ogp.me/ns#"}},r.a.createElement("title",null,m),r.a.createElement("meta",{name:"description",content:d}),r.a.createElement("meta",{property:"og:url",content:u}),r.a.createElement("meta",{property:"og:title",content:m}),r.a.createElement("meta",{property:"og:description",content:d}),r.a.createElement("meta",{property:"og:image",content:p}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"fb:app_id",content:a.appId}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:s.a.authorTwitterAccount?s.a.authorTwitterAccount:""}))};d.propTypes={data:i.a.object,facebook:i.a.object.isRequired};var p=d;a.d(t,"a",function(){return p})},311:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(0),i=a.n(c),o=a(1),l=a.n(o),m=function(e){var t=e.children,a=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("article",{className:r.a.dynamic([["2846578189",[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]]])+" article"},t),i.a.createElement(r.a,{styleId:"2846578189",css:[".article.__jsx-style-dynamic-selector{padding:"+a.space.inset.default+";margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+") calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2);max-width:"+a.text.maxWidth.desktop+";}}"],dynamic:[a.space.inset.default,"calc("+a.space.default+") calc("+a.space.default+" * 2)",a.text.maxWidth.tablet,"calc("+a.space.default+" * 2 + 90px) 0 calc("+a.space.default+" * 2)",a.text.maxWidth.desktop]}))};m.propTypes={children:l.a.node.isRequired,theme:l.a.object.isRequired};var s=m;a.d(t,"a",function(){return s})},316:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(0),i=a.n(c),o=a(1),l=a.n(o),m=function(e){var t=e.title,a=e.children,n=e.theme;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement("h1",{className:r.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},t):i.a.createElement("h1",{className:r.a.dynamic([["1826841480",[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},a),i.a.createElement(r.a,{styleId:"1826841480",css:["h1.__jsx-style-dynamic-selector{font-size:"+n.font.size.xxl+";margin:"+n.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:"+n.time.duration.long+";-webkit-animation-duration:"+n.time.duration.long+";animation-duration:"+n.time.duration.long+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+n.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+n.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+n.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.4);}}"],dynamic:[n.font.size.xxl,n.space.stack.l,n.time.duration.long,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]}))};m.propTypes={title:l.a.string,children:l.a.node,theme:l.a.object.isRequired},t.a=m}}]);
//# sourceMappingURL=component---src-pages-contact-js-a98a804c1cdcc9961a79.js.map