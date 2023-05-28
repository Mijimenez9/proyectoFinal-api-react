(this["webpackJsonpsw-wiki"]=this["webpackJsonpsw-wiki"]||[]).push([[0],{118:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(88),r=a.n(c),s=a(13),i=a(3),o=a(4),m=a(12),u=a.n(m),p=a(249),E=a(248),d=a(7),b=a(29),f=a.n(b),v=a(30),g=a.n(v),h=a(31),y=a.n(h),S=a(89),O=a.n(S);a(118);var j=function(e){return l.a.createElement("header",null,l.a.createElement("nav",{className:"nav-main"},l.a.createElement(s.b,{to:"/"},l.a.createElement("img",{src:O.a,alt:"Logo Star Wars"})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/",className:"home"},"HOME")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/personajes",className:"personajes"},"CHARACTERS")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/planetas",className:"planetas"},"PLANETS")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/espacio-naves",className:"espacio-naves"},"STARSHIPS")))))};a(123);var N=function(){return l.a.createElement("footer",null)},P=a(92),w=a.n(P),k=(a(124),a(125),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){u.a.get("https://swapi.dev/api/films/").then((function(e){var t=e.data.results;c(t)}))}),[]),l.a.createElement("div",{id:"home-page"},l.a.createElement(j,{url:"home"}),l.a.createElement("div",{className:"content"},l.a.createElement("img",{src:w.a,alt:"Logo Star Wars"}),l.a.createElement("section",null,l.a.createElement("h1",null,"Star Wars Wiki"),l.a.createElement("p",null,"Star Wars Wiki, the most complete wikipedia about the Star Wars universe."),l.a.createElement("p",null,"Here you find everything you need to know about the Star Wars universe.")),l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"card-spotlight"},l.a.createElement("img",{src:f.a,alt:"Icone Personajes"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Characters"),l.a.createElement("p",null,"Here you can find information about all the characters in the Star Wars franchise."),l.a.createElement(s.b,{to:"/personajes"},"View more ",l.a.createElement(d.c,null)))),l.a.createElement("div",{className:"card-spotlight"},l.a.createElement("img",{src:g.a,alt:"Icone Planetas"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Planets"),l.a.createElement("p",null,"Here you can find information about all the planets in the Star Wars franchise."),l.a.createElement(s.b,{to:"/planetas"},"View more ",l.a.createElement(d.c,null)))),l.a.createElement("div",{className:"card-spotlight"},l.a.createElement("img",{src:y.a,alt:"Icone Espa\xe7o-Naves"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Startships"),l.a.createElement("p",null,"Here you can find information about all the starships in the Star Wars franchise."),l.a.createElement(s.b,{to:"/espacio-naves"},"View more ",l.a.createElement(d.c,null))))),l.a.createElement("section",{className:"section-timeline"},l.a.createElement("h2",null,"Classic Star Wars Movies"),l.a.createElement(p.a,{className:"timeline"},a.map((function(e){return l.a.createElement(p.a.Item,{dot:l.a.createElement(d.d,null)},l.a.createElement("h3",null,e.title),l.a.createElement("strong",null,"Episode ",e.episode_id),l.a.createElement("p",null,Object(E.a)(new Date(e.release_date),"dd/MM/yyyy")),l.a.createElement("p",null,e.opening_crawl))}))))),l.a.createElement(N,null))}),I=(a(241),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),i=s[0],m=s[1],p=Object(n.useState)(1),E=Object(o.a)(p,2),b=E[0],v=E[1],g=Object(n.useState)([]),h=Object(o.a)(g,2),y=h[0],S=h[1],O=Object(n.useState)([]),P=Object(o.a)(O,2),w=P[0],k=P[1];return Object(n.useEffect)((function(){u.a.get("https://swapi.dev/api/people/?page=".concat(b)).then((function(e){var t=e.data.count,a=e.data.results;m(t),c(a),null===e.data.next?document.getElementById("btnNext").style.display="none":document.getElementById("btnNext").style.display="block",null===e.data.previous?document.getElementById("btnPrevious").style.display="none":document.getElementById("btnPrevious").style.display="block"}))}),[b]),Object(n.useEffect)((function(){u.a.get("https://swapi.dev/api/species/?page=".concat(b)).then((function(e){var t=e.data.results.map((function(e){return e.name}));S(t)}))}),[b]),Object(n.useEffect)((function(){u.a.get("https://swapi.dev/api/planets/?page=".concat(b)).then((function(e){var t=e.data.results.map((function(e){return e.name}));k(t)}))}),[b]),l.a.createElement("div",{id:"main"},l.a.createElement(j,null),l.a.createElement("div",{className:"count"},l.a.createElement("h1",null,"TOTAL CHARACTERS: ",i),l.a.createElement("img",{src:f.a,alt:"Imagem Personaje"})),l.a.createElement("div",{id:"content"},a.map((function(e){return l.a.createElement("div",{className:"card-personaje",key:e.name},l.a.createElement("h2",null,e.name),l.a.createElement("span",null,"Height: ",e.height/100," m"),l.a.createElement("span",null,"Mass: ",e.mass," kg"),l.a.createElement("span",null,"Hair Color: ",e.hair_color),l.a.createElement("span",null,"Skin Color: ",e.skin_color),l.a.createElement("span",null,"Eye Color: ",e.eye_color),l.a.createElement("span",null,"Birth Year: ",e.birth_year),l.a.createElement("span",null,"Gender: ",e.gender),l.a.createElement("span",null,"Species: ",y[String(e.species[0]).substr(29,3).replace("/","")-1]),l.a.createElement("span",null,"Homeworld: ",w[String(e.homeworld).substr(29,3).replace("/","")-1]))}))),l.a.createElement("div",{className:"navigation-page"},l.a.createElement("button",{id:"btnPrevious",onClick:function(){v(b-1)}},l.a.createElement(d.a,null),"PREVIOUS PAGE"),l.a.createElement("button",{id:"btnNext",onClick:function(){v(b+1)}},"NEXT PAGE",l.a.createElement(d.b,null))),l.a.createElement(N,null))}),C=(a(242),function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),i=s[0],m=s[1],p=Object(n.useState)([]),E=Object(o.a)(p,2),b=E[0],f=E[1],v=Object(n.useState)([]),h=Object(o.a)(v,2),y=h[0],S=h[1];return Object(n.useEffect)((function(){u.a.get("https://swapi.dev/api/planets/?page=".concat(a)).then((function(e){var t=e.data.count,a=e.data.results;m(t),f(a),null===e.data.next?document.getElementById("btnNext").style.display="none":document.getElementById("btnNext").style.display="block",null===e.data.previous?document.getElementById("btnPrevious").style.display="none":document.getElementById("btnPrevious").style.display="block"}))}),[a]),Object(n.useEffect)((function(){u.a.get("https://swapi.dev/api/people/?page=".concat(a)).then((function(e){var t=e.data.results.map((function(e){return e.name}));S(t)}))}),[a]),l.a.createElement("div",{id:"main"},l.a.createElement(j,null),l.a.createElement("div",{className:"count"},l.a.createElement("h1",null,"TOTAL PLANETS: ",i),l.a.createElement("img",{src:g.a,alt:"Imagem Planeta"})),l.a.createElement("div",{id:"content"},b.map((function(e){return l.a.createElement("div",{className:"card-planetas",key:e.name},l.a.createElement("h2",null,e.name),l.a.createElement("span",null,"Rotation Period: ",e.rotation_period),l.a.createElement("span",null,"Orbital Period: ",e.orbital_period),l.a.createElement("span",null,"Diameter: ",e.diameter),l.a.createElement("span",null,"Climate: ",e.climate),l.a.createElement("span",null,"Gravity: ",e.gravity),l.a.createElement("span",null,"Terrain: ",e.terrain),l.a.createElement("span",null,"Surface Water: ",e.surface_water),l.a.createElement("span",null,"Population: ",e.population),l.a.createElement("span",null,"Residents: ",y[String(e.residents[0]).substr(28,3).replace("/","")-1]))}))),l.a.createElement("div",{className:"navigation-page"},l.a.createElement("button",{id:"btnPrevious",onClick:function(){c(a-1)}},l.a.createElement(d.a,null),"PREVIOUS PAGE"),l.a.createElement("button",{id:"btnNext",onClick:function(){c(a+1)}},"NEXT PAGE",l.a.createElement(d.b,null))),l.a.createElement(N,null))}),x=(a(243),function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),i=s[0],m=s[1],p=Object(n.useState)([]),E=Object(o.a)(p,2),b=E[0],f=E[1],v=Object(n.useState)([]),g=Object(o.a)(v,2),h=g[0],S=g[1];return Object(n.useEffect)((function(){u.a.get("https://swapi.dev/api/starships/?page=".concat(a)).then((function(e){var t=e.data.count,a=e.data.results;m(t),f(a),null===e.data.next?document.getElementById("btnNext").style.display="none":document.getElementById("btnNext").style.display="block",null===e.data.previous?document.getElementById("btnPrevious").style.display="none":document.getElementById("btnPrevious").style.display="block"}))}),[a]),Object(n.useEffect)((function(){u.a.get("https://swapi.dev/api/people/?page=".concat(a)).then((function(e){var t=e.data.results.map((function(e){return e.name}));S(t)}))}),[a]),l.a.createElement("div",{id:"main"},l.a.createElement(j,null),l.a.createElement("div",{className:"count"},l.a.createElement("h1",null,"TOTAL STARSHIPS: ",i),l.a.createElement("img",{src:y.a,alt:"Imagem Espa\xe7o-Nave"})),l.a.createElement("div",{id:"content"},b.map((function(e){return l.a.createElement("div",{className:"card-naves",key:e.name},l.a.createElement("h2",null,e.name),l.a.createElement("span",null,"Model: ",e.model),l.a.createElement("span",null,"Manufacturer: ",e.manufacturer),l.a.createElement("span",null,"Cost in Credits: ",e.cost_in_credits),l.a.createElement("span",null,"Length: ",e.length),l.a.createElement("span",null,"max_atmosphering_speed: ",e.max_atmosphering_speed),l.a.createElement("span",null,"Crew: ",e.crew),l.a.createElement("span",null,"Passengers: ",e.passengers),l.a.createElement("span",null,"Cargo Capacity: ",e.cargo_capacity),l.a.createElement("span",null,"Consumables: ",e.consumables),l.a.createElement("span",null,"Hyperdrive Rating: ",e.hyperdrive_rating),l.a.createElement("span",null,"MGLT: ",e.MGLT),l.a.createElement("span",null,"Starship Class: ",e.starship_class),l.a.createElement("span",null,"Pilots: ",h[String(e.pilots[0]).substr(28,3).replace("/","")-1]))}))),l.a.createElement("div",{className:"navigation-page"},l.a.createElement("button",{id:"btnPrevious",onClick:function(){c(a-1)}},l.a.createElement(d.a,null),"PREVIOUS PAGE"),l.a.createElement("button",{id:"btnNext",onClick:function(){c(a+1)}},"NEXT PAGE",l.a.createElement(d.b,null))),l.a.createElement(N,null))}),_=function(){return l.a.createElement(s.a,{basename:"/proyectoFinal-api-react"},l.a.createElement(i.a,{path:"/",exact:!0,component:k}),l.a.createElement(i.a,{path:"/personajes",component:I}),l.a.createElement(i.a,{path:"/planetas",component:C}),l.a.createElement(i.a,{path:"/espacio-naves",component:x}))};a(244);var T=function(){return l.a.createElement(_,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root"))},29:function(e,t,a){e.exports=a.p+"static/media/stormtrooper.04ef2bb6.png"},30:function(e,t,a){e.exports=a.p+"static/media/planeta.de1364c7.png"},31:function(e,t,a){e.exports=a.p+"static/media/nave.ed5ab9e5.png"},89:function(e,t,a){e.exports=a.p+"static/media/logoHorizontal.93d3a123.svg"},92:function(e,t,a){e.exports=a.p+"static/media/logoYellow.f5bdff62.png"},96:function(e,t,a){e.exports=a(245)}},[[96,1,2]]]);
//# sourceMappingURL=main.dbeb23ac.chunk.js.map