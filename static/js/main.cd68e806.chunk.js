(this.webpackJsonpteamvoy=this.webpackJsonpteamvoy||[]).push([[0],{10:function(e,t,n){e.exports={pokemon:"pokemon_pokemon__2856R",imgContainer:"pokemon_imgContainer__2mzZf",line:"pokemon_line__pEc-M",tittle:"pokemon_tittle__2NYja",typeContainer:"pokemon_typeContainer__2nyU9",type:"pokemon_type__mhxkc"}},12:function(e,t,n){e.exports={pokemons:"pokemons_pokemons__1mDqE",header:"pokemons_header__1tEY8",leftAsite:"pokemons_leftAsite__hR1_5",loadMore:"pokemons_loadMore__2zUSd",rightSide:"pokemons_rightSide__jrLLc"}},13:function(e,t,n){e.exports={pokemon:"informTable_pokemon__fpXy6",imgContainer:"informTable_imgContainer__1NRLI",line:"informTable_line__LEUNV",tittle:"informTable_tittle__HRVj_",tableContainer:"informTable_tableContainer__1O9IK",stat:"informTable_stat__17qwA"}},42:function(e,t,n){},43:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(17),r=n.n(c),o=(n(42),n(43),n(26)),i=n(12),p=n.n(i),l=n(16),u=n(36),d=n(11),m="DOWNLOAD_POKEMONS",j="SET_STORE_POKEMONS",b="SET_OTHER_DATA",f="DOWNLOAD_POKEMON",h="SET_STORE_POKEMON",O={count:12,next:'"https://pokeapi.co/api/v2/pokemon/?offset=12&limit=12',previous:null,pokemons:[{name:"baltazar",url:"https://pokeapi.co/api/v2/pokemon/1/",stats:[{base_stat:60,effort:0,stat:{name:"hp",url:"https://pokeapi.co/api/v2/stat/1/"}},{base_stat:62,effort:0,stat:{name:"attack",url:"https://pokeapi.co/api/v2/stat/2/"}},{base_stat:63,effort:0,stat:{name:"defense",url:"https://pokeapi.co/api/v2/stat/3/"}},{base_stat:80,effort:1,stat:{name:"special-attack",url:"https://pokeapi.co/api/v2/stat/4/"}},{base_stat:80,effort:1,stat:{name:"special-defense",url:"https://pokeapi.co/api/v2/stat/5/"}},{base_stat:60,effort:0,stat:{name:"speed",url:"https://pokeapi.co/api/v2/stat/6/"}}],types:[{slot:1,type:{name:"grass",url:"https://pokeapi.co/api/v2/type/12/"}},{slot:2,type:{name:"poison",url:"https://pokeapi.co/api/v2/type/4/"}}]}]},x=function(e){return{type:b,payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{pokemons:t.pokemons});case b:return Object(d.a)(Object(d.a)({},e),{},{count:t.payload.count,next:t.payload.next,previous:t.payload.count});case h:return Object(d.a)(Object(d.a)({},e),{},{pokemons:Object(u.a)(e.pokemons.map((function(e){return e.name!==t.payload.name?e:Object(d.a)(Object(d.a)({},e),{},{types:t.payload.types,stats:t.payload.stats,weight:t.payload.weight})})))});default:return e}},k=n(10),_=n.n(k),y=n(3),g=function(e){var t=e.pokemon,n=e.setNumberPokemon,a=e.index,s=function(e){switch(e){case"grass":return"#4aff29";case"poison":return"#ca5cff";case"fire":return"#ff211c";case"electric":return"#ffac27";case"water":return"#858fff";case"flying":return"#f1e1d6";case"ground":return"#522d16";case"rock":return"#36261c";case"psychic":return"#8bffb0";case"steel":return"#17f5ff";case"ice":return"#a4e7ff";case"bug":return"#61ffd4";default:return"white"}};return Object(y.jsxs)("div",{className:_.a.pokemon,onClick:function(){n(a)},children:[Object(y.jsx)("div",{className:_.a.imgContainer,children:Object(y.jsxs)("svg",{height:"100%",width:"100%",children:[Object(y.jsx)("line",{className:_.a.line,x1:"0",y1:"0",x2:"100%",y2:"100%"}),Object(y.jsx)("line",{className:_.a.line,x1:"0",y1:"100%",x2:"100%",y2:"0"})]})}),Object(y.jsxs)("div",{className:_.a.boottomSide,children:[Object(y.jsx)("h3",{className:_.a.tittle,children:t.name}),Object(y.jsx)("div",{className:_.a.typeContainer,children:t.types&&t.types.map((function(e,t){return Object(y.jsx)("div",{style:{backgroundColor:s(e.type.name)},className:_.a.type,children:e.type.name},e.name||t)}))})]})]})},N=n(13),w=n.n(N),C=function(e){var t=e.pokemon;return Object(y.jsxs)("div",{className:w.a.pokemon,children:[Object(y.jsx)("div",{className:w.a.imgContainer,children:Object(y.jsxs)("svg",{height:"100%",width:"100%",children:[Object(y.jsx)("line",{className:w.a.line,x1:"0",y1:"0",x2:"100%",y2:"100%"}),Object(y.jsx)("line",{className:w.a.line,x1:"0",y1:"100%",x2:"100%",y2:"0"})]})}),Object(y.jsx)("h3",{className:w.a.tittle,children:t.name}),Object(y.jsx)("div",{className:w.a.tableContainer,children:void 0!==t.stats&&Object(y.jsxs)("div",{className:w.a.stat,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"type"}),Object(y.jsx)("div",{children:t.types[0].type.name})]}),t.stats.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:e.stat.name}),Object(y.jsx)("div",{children:e.base_stat})]},e.stat.name)})),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:"weight"}),Object(y.jsx)("div",{children:t.weight})]})]})})]})},S=function(){var e=Object(l.b)(),t=Object(a.useState)(12),n=Object(o.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(0),i=Object(o.a)(r,2),u=i[0],d=i[1],j=Object(l.c)((function(e){return e.pokemonPage.pokemons}));Object(a.useEffect)((function(){e({type:m,limit:s})}),[e,s]);var b=j[u];return Object(y.jsxs)("div",{className:p.a.pokemons,children:[Object(y.jsx)("header",{className:p.a.header,children:Object(y.jsx)("h1",{children:"Pokedex"})}),Object(y.jsxs)("main",{children:[Object(y.jsxs)("aside",{className:"".concat(p.a.leftAsite," ").concat(p.a.aside),children:[j.map((function(e,t){return Object(y.jsx)(g,{index:t,setNumberPokemon:d,pokemon:e},e.name)})),Object(y.jsx)("button",{className:p.a.loadMore,onClick:function(){c(s+6)},children:"Load More"})]}),Object(y.jsx)("aside",{className:"".concat(p.a.rightSide," ").concat(p.a.aside),children:b&&Object(y.jsx)(C,{pokemon:b},b.name)})]})]})};var E=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(S,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},P=n(14),M=n(37),A=n(35),L=n(5),R=n.n(L),D=n(8),K=n(24),F=n(25),I=function(e,t){console.warn(JSON.stringify(t)+e)},U=F.create({baseURL:"https://pokeapi.co/api/v2/",headers:{}}),z=function(){var e=Object(K.a)(R.a.mark((function e(){var t,n=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:52,e.prev=1,e.next=4,U.get("pokemon/?limit=".concat(t),{},{});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),I("problem in  downloadPokemonsApi",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(K.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get("".concat(t),{},{});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),I("problem in  downloadPokemonsApi",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),W=R.a.mark(V),q=R.a.mark(Y),B=R.a.mark(X),H=R.a.mark(Z);function V(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(m,Y);case 2:case"end":return e.stop()}}),W)}function Y(e){var t,n;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(D.b)(z,e.limit);case 2:return t=a.sent,a.next=5,Object(D.c)((c=t.data.results,{type:j,pokemons:c}));case 5:return a.next=7,Object(D.c)(x({next:t.data.next,count:t.data.count,previous:t.data.previous}));case 7:n=0;case 8:if(n===t.data.results.length){a.next=14;break}return a.next=11,Object(D.c)((s=t.data.results[n].url,{type:f,url:s}));case 11:n++,a.next=8;break;case 14:case"end":return a.stop()}var s,c}),q)}function X(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(f,Z);case 2:case"end":return e.stop()}}),B)}function Z(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.b)(J,e.url);case 2:return t=n.sent,n.next=5,Object(D.c)((a=t.data,{type:h,payload:a}));case 5:case"end":return n.stop()}var a}),H)}var G=R.a.mark(Q);function Q(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([V(),X()]);case 2:case"end":return e.stop()}}),G)}var $=Object(M.a)(),ee=Object(P.combineReducers)({pokemonPage:v}),te=Object(P.createStore)(ee,Object(A.composeWithDevTools)(Object(P.applyMiddleware)($)));$.run(Q),r.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(l.a,{store:te,children:Object(y.jsx)(E,{})})}),document.getElementById("root")),T()}},[[69,1,2]]]);
//# sourceMappingURL=main.cd68e806.chunk.js.map