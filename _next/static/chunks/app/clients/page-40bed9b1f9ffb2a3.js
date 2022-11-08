(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{8642:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(a&&(a+=" "),a+=n);else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(n&&(n+=" "),n+=t);return n}},6952:function(e,t,r){Promise.resolve().then(r.bind(r,5747))},5747:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(1844),a=r(6716),o=r(2481),s=r(5004),i=r(8642),l=r(5675),g=r.n(l),d=r(5304),m=r.n(d);function u(){let e=a.L.clients;return(0,n.jsxs)("div",{className:(0,i.Z)(m().clients,"container"),children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("h1",{className:(0,i.Z)(m().clients__heading,"column-4"),children:e.heading})}),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("p",{className:"column-2 paragraph-large",children:e.ingress})})]}),(0,n.jsxs)("section",{className:m()["clients-list"],children:[(0,n.jsx)("h2",{className:"sr-only",children:"Clients"}),e.clients.map((e,t)=>(0,n.jsx)("div",{className:(0,i.Z)(m()["clients-list__client"],"row"),children:(0,n.jsx)("div",{className:t%2==0?"column":"column-2",children:(0,n.jsx)(s.Z,{alignRight:t%2!=0,image:(0,n.jsxs)("div",{className:m().background,children:[(0,n.jsx)(g(),{src:e.backgroundPath,width:"379",height:"431",quality:"100",alt:""}),(0,n.jsx)("div",{className:m().logo,children:(0,n.jsx)(g(),{src:e.logoPath,alt:e.name+" logo",width:"379",height:"431",className:m().logo__image})})]}),children:(0,n.jsxs)("div",{className:"vertical-align-center",children:[(0,n.jsx)("small",{style:{display:"block"},children:"Client"}),(0,n.jsx)("span",{className:"h3",children:e.name}),(0,n.jsx)("p",{children:e.text}),(0,n.jsx)("a",{href:e.websiteUrl,children:(0,n.jsxs)(o.Button,{children:["Visit ",e.name]})})]})})})},e.name))]})]})}},2481:function(e,t,r){"use strict";r.r(t),r.d(t,{Button:function(){return i}});var n=r(1844),a=r(8642);r(5784);var o=r(6584),s=r.n(o);let i=e=>{let{type:t="arrow",size:r="medium",color:o="primary",marginBottom:i=!1,children:l,onClick:g}=e,d=(0,a.Z)(s().button,"arrow"===t?s()["button--arrow"]:s()["button--plus"],"small"===r?s()["button--small"]:"large"===r?s()["button--large"]:"",s()["button--".concat(o)],i?s()["button--mb-l"]:"");return(0,n.jsxs)("button",{onClick:g,className:d,children:[(0,n.jsx)("div",{className:s().button__content,children:l}),(0,n.jsx)("div",{className:s().button__icon,children:"arrow"===t?(0,n.jsx)("i",{className:"far fa-long-arrow-right fa-fw fa-md"}):(0,n.jsx)("i",{className:"far fa-plus fa-fw fa-md"})})]})}},5004:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(1844),a=r(8642);r(5784);var o=r(8113),s=r.n(o);let i=e=>{let{alignRight:t=!1,image:r,children:o}=e;return(0,n.jsxs)("div",{className:(0,a.Z)(s().card,t&&s()["card--right"]),children:[(0,n.jsx)("div",{className:s().card__figure,children:r}),(0,n.jsx)("div",{className:s().card__body,children:o})]})}},5304:function(e){e.exports={background:"page_background__jxMd0","background-light":"rgba(0,0,0,.1607843137)",secondary:"#fceafc",magenta:"#e01de0","secondary-dark":"#830a77","secondary-darker":"#3d023f","primary-dark":"#420cb1",primary:"#712cff",clients__heading:"page_clients__heading__Rsia1","clients-list__client":"page_clients-list__client__RPwqF","clients-list":"page_clients-list__EeN_o",logo:"page_logo__m_aSY",logo__image:"page_logo__image__RIxe4"}},6584:function(e){e.exports={background:"#130013","background-light":"rgba(0,0,0,.1607843137)",secondary:"#fceafc",magenta:"#e01de0","secondary-dark":"#830a77","secondary-darker":"#3d023f","primary-dark":"#420cb1",primary:"#712cff",button:"Button_button__lRDLP",button__icon:"Button_button__icon__x7v1i","button--arrow":"Button_button--arrow__Rj1jJ","button--plus":"Button_button--plus__NZBk8","button--large":"Button_button--large__hDC80","button--small":"Button_button--small__59ofH","button--mb-l":"Button_button--mb-l__HCpFS","button--background":"Button_button--background__dVvEb","button--background-light":"Button_button--background-light__fCZp3","button--secondary":"Button_button--secondary__GI8XI","button--magenta":"Button_button--magenta__lEAwD","button--secondary-dark":"Button_button--secondary-dark__v_n8B","button--secondary-darker":"Button_button--secondary-darker__T6t53","button--primary-dark":"Button_button--primary-dark__tPJZu","button--primary":"Button_button--primary__xx4N0"}},8113:function(e){e.exports={background:"#130013","background-light":"rgba(0,0,0,.1607843137)",secondary:"#fceafc",magenta:"#e01de0","secondary-dark":"#830a77","secondary-darker":"#3d023f","primary-dark":"#420cb1",primary:"#712cff",card:"Card_card__SA_YP","card--right":"Card_card--right__TwT1C",card__figure:"Card_card__figure__YpyhB",card__body:"Card_card__body__SroF4"}},9803:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n=r(5784),a=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,l={},g=null,d=null;for(n in void 0!==r&&(g=""+r),void 0!==t.key&&(g=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:a,type:e,key:g,ref:d,props:l,_owner:s.current}}t.jsx=l,t.jsxs=l},1844:function(e,t,r){"use strict";e.exports=r(9803)},5675:function(e,t,r){e.exports=r(30)},6716:function(e){"use strict";e.exports=JSON.parse('{"L":{"home":{"metaTitle":"Savvy | Hjem","metaDescription":"Velkommen til Savvy!","heading":"Vi er Savvy.","ingress":"Vi er Savvy, seniorutviklere som er h\xe5ndplukket gjennom relasjoner, der alle eier en bit av selskapet. Vi har tung kompetanse, kombinert med en klar r\xf8st. Vi skriver ikke bare kode, vi bidrar med kompetanse og tydelige meninger i prosjektene vi jobber p\xe5. ","clients":[{"logoPath":"/images/vipps.svg","backgroundPath":"/images/client-background-1.svg","name":"BankID"},{"logoPath":"/images/fjordtours.svg","backgroundPath":"/images/client-background-3.svg","name":"Fjord Tours"},{"logoPath":"/images/Sbanken_logo.svg","backgroundPath":"/images/Sbanken_bakgrunn.png","name":"Sbanken"},{"logoPath":"/images/adventure_tech_logo.svg","backgroundPath":"/images/client-background-4.svg","name":"Adventure Tech"}],"competence":["Software development","Architecture","Agile","Mobile","Web","Frontend","Backend","Full stack","Tech Lead","Java",".NET","Javascript","React","Angular"]},"clients":{"metaTitle":"Savvy | Kunder","metaDescription":"Dette er kundene v\xe5re!","heading":"V\xe5re kunder","ingress":"Vi er stolte av kundene v\xe5re og verdien de tilf\xf8rer samfunnet. Kundene v\xe5re spenner fra sm\xe5 til store selskaper, fra reiselivsn\xe6ringen til finans.","clients":[{"logoPath":"/images/bankid.svg","backgroundPath":"/images/client-background-1-wide.svg","name":"BankID BankAxept","text":"BankID er Norges foretrukne l\xf8sning for ID-tjenester, benyttet av offentlige tjenester, banker, forsikringselskaper og mange flere. Savvy bidrar i arbeidet med neste generasjon av BankID sine tjenester.","websiteUrl":"https://bankid.no"},{"logoPath":"/images/adventure_tech_logo.svg","backgroundPath":"/images/client-background-4.svg","name":"Adventure Tech","text":"Adventure Tech er et norsk teknologiselskap som leverer IT-l\xf8sninger til reiselivsbransjen.","websiteUrl":"https://adventuretech.no/"},{"logoPath":"/images/fjordtours.svg","backgroundPath":"/images/client-background-2-wide.svg","name":"Fjord Tours","text":"Fjord Tours AS er en sentral akt\xf8r i norsk reiseliv og tilbyr en rekke produkter i Norge. Fjord Tours er en distribut\xf8r for en rekke andre akt\xf8rer og har sterk tilknytning til akt\xf8rer som Tide og Vy. Kjernen av deres virksomhet er salg av pakketurer i Norge, hvor deres mest kjente produkt er Norway in a Nutshell.","websiteUrl":"https://fjordtours.com"},{"logoPath":"/images/Sbanken_logo.svg","backgroundPath":"/images/Sbanken_bakgrunn.png","name":"Sbanken","text":"Sbanken er en bank med hovedkontor i Bergen, og er Norges f\xf8rste rene nettbank. Savvy er en del av et team som utvikler neste generasjons nettbank.","websiteUrl":"https://sbanken.no"},{"logoPath":"/images/imove_logo.svg","backgroundPath":"/images/imove_bakgrunn.png","name":"imove","text":"Imove er en ny og innovativ abonnementstjeneste for elbil som ofte blir sammenlignet med Spotify for musikk og Netflix for film. Savvy bidrar til utviklingen av deres kjerneplattform.","websiteUrl":"https://imove.no"},{"logoPath":"/images/quantik-logo.svg","backgroundPath":"/images/client-background-2.svg","name":"Quantik","text":"Quantik er et FinTech-selskap som s\xf8ker \xe5 forenkle alle bedrifters hverdag. Selskapet utfordrer den tradisjonelle m\xe5ten \xe5 h\xe5ndtere arbeidsflyten rundt inng\xe5else, signering og oppf\xf8lging av avtaler og kontrakter.","websiteUrl":"https://quantik.app"},{"logoPath":"/images/fdir.svg","backgroundPath":"/images/client-background-2.svg","name":"Fiskeridirektoratet","text":"Fiskeridirektoratet er myndighetenes fremste r\xe5dgivende og ut\xf8vende organ innen fiskeriforvaltningen i Norge. Direktoratets hovedoppgave er planmessig \xe5 arbeide for at norsk fiskeri- og havbruksn\xe6ring fremmes og utvikles til beste for dem som arbeider i n\xe6ringen og slik at fiskeressursene p\xe5 lang sikt gir et optimalt utbytte.","websiteUrl":"https://fiskeridir.no"}]},"agency":{"metaTitle":"Savvy | Selskapet","metaDescription":"Vi er Savvy!","heading":"Vi er Savvy","ingress":"Savvy ble grunnlagt av erfarne konsulenter fra IT-bransjen med en ambisjon om \xe5 lage et selskap som \xe5pent og p\xe5litelig. Alle som jobber i Savvy er ogs\xe5 medeiere i selskapet. Dette fordi vi vet at dyktige konsulenter som har eierskap til arbeidsplassen gir det lille ekstra for at v\xe5re kunder skal lykkes.","text":"","guilty":{"heading":"Savvy & Guilty","text":"Sammen med v\xe5rt s\xf8sterselskap er vi et kompetansehus med 25 spesialister innen design, teknologi og forretningsutvikling.","webpageUrl":"http://guilty.no"},"list":{"heading":"Det vi brenner for;","items":[{"name":"Modig","modalContent":"Vi er kompetente utviklere. For at kundene v\xe5re skal f\xe5 maksimalt utbytte av kompetansen vi innehar s\xe5 trenger de at vi deler den. Vi rir ikke kjepphester, men vi g\xe5r ikke ut av et m\xf8te uten \xe5 ha delt meningene v\xe5re."},{"name":"\xc5pen","modalContent":"Vi mener at den beste m\xe5ten \xe5 s\xf8rge for at alt vi gj\xf8r t\xe5ler dagens lys er \xe5 konstant oppholde seg i dagens lys. Alle v\xe5re ansatte har full innsikt i avtalene selskapet inng\xe5r og retningen selskapet tar. Beslutningene vi tar st\xe5r vi inne for, sammen."},{"name":"Stolt","modalContent":"Vi er stolt av den faglige kompetansen v\xe5r og arbeidet vi leverer. Hver og en av oss er stolt av egne ferdigheter s\xe5 vel som kollegaene v\xe5re."}]},"team":[{"imagePath":"/images/people/hakon.png","name":"H\xe5kon Gimnes Kaurel","title":"Daglig leder / Konsulent","about":"H\xe5kon er en fullstack-utvikler med et bredt sett av ferdigheter. Han er komfortabel med \xe5 jobbe p\xe5 omtrent hvilken som helst plattform og har flere \xe5rs erfaring med \xe5 jobbe med b\xe5de Java og .NET. Fremfor alt ser H\xe5kon p\xe5 seg selv som en pragmatisk programvareutvikler som vil jobbe hardt for \xe5 sikre at arbeidet hans genererer verdi for kundene sine.","email":"hakon@savvy.no"},{"imagePath":"/images/people/joachim.png","name":"Joachim Carlsen","title":"Konsulent","about":"Joachim er en utvikler med flere \xe5rs erfaring fra \xe5 jobbe med kjente merkevarer som Vipps, TV2 og Altibox. I l\xf8pet av sin karriere har Joachim jobbet med flere teknologier og har bygget solid kompetanse p\xe5 Java-plattformen og som iOS-utvikler.","email":"joachim@savvy.no"},{"imagePath":"/images/people/erlend.png","name":"Erlend Rekve","title":"Konsulent","about":"Erlend er full stack-utvikler med en mastergrad i informatikk. Han har flere \xe5rs erfaring med \xe5 jobbe med komplekse systemer prim\xe6rt p\xe5 .NET-plattformen. Han er kjent av sine kolleger for \xe5 v\xe6re en grundig og innovativ utvikler.","email":"erlend@savvy.no"},{"imagePath":"/images/people/abdullah.png","name":"Abdullah Shaheen","title":"Konsulent","about":"Abdullah er en utvikler med erfaring fra arbeid med store og komplekse systemer. Han har erfaring fra arbeid p\xe5 .NET-plattformen samt flere ulike frontend-teknologier.","email":"abdullah@savvy.no"},{"imagePath":"/images/people/trandal.png","name":"H\xe5kon Trandal","title":"Konsulent","about":"H\xe5kon er en fullstack-utvikler med 8 \xe5rs .NET-erfaring. Han har jobbet med alt fra sm\xe5 nettsider til dataspill og store bedriftssystemer. H\xe5kon jobber godt i team og er godt respektert for sin evne til \xe5 forklare begreper.","email":"hakon.trandal@savvy.no"},{"imagePath":"/images/people/sindre.png","name":"Sindre M\xf8gster Braaten","title":"Konsulent","email":"sindre@savvy.no","about":"Sindre er en systemutvikler som trives like godt med \xe5 jobbe med backend, som \xe5 jobbe med frontend, under utvikling av systemer. Han har alltid hatt en fasinasjon for \xe5 finne ut hvordan systemer faktisk virker, uavhengig av om det gjelder hvordan effektivt gj\xf8r tunge operasjoner p\xe5 en server, eller et brukergrensesnitt skal oppf\xf8re seg s\xe5 smidig som mulig."},{"imagePath":"/images/header-image-1.png","name":"Ole Eskild Steensen","title":"Konsulent","email":"ole@savvy.no","about":"Ole Eskild har erfaring med en rekke teknologier og metodikker og har jobbet med alt fra API-tjenester og sky-infrastuktur til komplekse frontend applikasjoner. Han trives best med eierskap til hele teknologi-stacken, men liker ogs\xe5 \xe5 bryne seg p\xe5 rene backend eller frontend prosjekter. "},{"imagePath":"/images/people/asbjorn.png","name":"Asbj\xf8rn Rekve","title":"Konsulent","email":"asbjorn@savvy.no","about":"Asbj\xf8rn er en allsidig utvikler med bred kompetanse innen utvikling av webl\xf8sninger. Gjennom prosjekter hos Guilty, Sbanken, Forsvaret, Equinor, og tidligere som CTO for Powerzeek, har han hatt utfordrende arbeidsoppgaver og er vant med stort ansvar. Han har erfaring med \xe5 jobbe b\xe5de selvstendig og sammen med andre, og har spesielt god erfaring fra autonome team."},{"imagePath":"/images/header-image-1.png","name":"Ny ansatt","title":"Konsulent","email":"","about":"Vi f\xe5r en ny ansatt i januar!"},{"imagePath":"/images/header-image-1.png","name":"Ny ansatt","title":"Konsulent","email":"","about":"Vi f\xe5r en ny ansatt i februar!"}]},"contact":{"metaTitle":"Savvy | Kontakt oss","metaDescription":"Kontakt oss","text":"Vi er alltid \xe5pen for nye muligheter og samarbeid. Ikke n\xf8l med \xe5 kontakte oss dersom du har behov for en Savvy konsulent, eller \xf8nsker \xe5 samarbeide med oss p\xe5 andre m\xe5ter."}},"l":{"footer":{"address":"Lars Hilles gate 30","postal":"5008 Bergen","email":"hei@savvy.no","telephone":"+47 93 65 53 77"}}}')}},function(e){e.O(0,[30,17,744],function(){return e(e.s=6952)}),_N_E=e.O()}]);