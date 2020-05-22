(this["webpackJsonpherolo-weather"]=this["webpackJsonpherolo-weather"]||[]).push([[0],{114:function(e,t,n){e.exports=n(140)},140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=n(18),u=n(40),l=n(92),m=n(38),s=function(e,t){var n=localStorage.getItem(e);return(n=JSON.parse(n))||(n=t),n},f=function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},d="celsius",p="fahrenheit",g="favorites",h="themeType",b="temperatureUnit",v="light",j="dark",O={favorites:s(g,[]),themeType:s(h,v),temperatureUnit:s(b,d)},E=Object(u.c)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITES":return Object(m.a)({},e,{favorites:t.favorites});case"SET_THEME_TYPE":return Object(m.a)({},e,{themeType:t.themeType});case"SET_TEMPERATURE_UNIT":return Object(m.a)({},e,{temperatureUnit:t.temperatureUnit});default:return e}}}),x=Object(u.e)(E,{},Object(u.d)(Object(u.a)(l.a))),y=n(6),w=n(198),T=n(195),D=n(196),k=n(7);function F(){var e=Object(k.a)(["\n  body,\n  html,\n  #root {\n    height: 100%;\n    width: 100%;\n  }\n"]);return F=function(){return e},e}var C,L=Object(y.b)(F()),S=n(23),I=n(101),A=n(201),N=(C={},Object(S.a)(C,v,Object(I.a)()),Object(S.a)(C,j,Object(I.a)({palette:{type:"dark"},overrides:{MuiAppBar:{colorPrimary:{backgroundColor:"#212121"}}}})),C),W=n(44),P=n(16),M=n(32),U=n(9),R=n(142),_=n(178);function z(){var e=Object(k.a)(["\n  position: absolute;\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return z=function(){return e},e}function B(){var e=Object(k.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return B=function(){return e},e}var V=y.c.div(B()),H=y.c.div(z(),(function(e){return e.isLoading?"flex":"none"})),J=function(e){var t=e.loading,n=e.hasData,a=e.noDataMessage,c=e.children,i=e.className,o=!n&&!t,u=n&&!t;return r.a.createElement(V,{className:i},u&&c,o&&r.a.createElement(R.a,{variant:"h6",color:"textSecondary"},a),r.a.createElement(H,{isLoading:t},r.a.createElement(_.a,null)))};function q(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  width: 80%;\n  max-width: 1000px;\n  margin: 0 auto;\n\n  "," {\n    width: 90%;\n  }\n\n  "," {\n    width: 100%;\n  }\n"]);return q=function(){return e},e}var G=y.c.div(q(),(function(e){return e.theme.breakpoints.down("sm")}),(function(e){return e.theme.breakpoints.down("xs")})),K=n(183),Y=n(199),X=n(182),$=n(181);function Q(){var e=Object(k.a)(["\n  display: grid;\n  grid-auto-rows: 1fr;\n  grid-template-columns: 1fr auto;\n  grid-column-gap: 10px;\n  align-items: center;\n  width: 100%;\n"]);return Q=function(){return e},e}var Z=y.c.div(Q()),ee=n(54),te=n.n(ee),ne=function(e){return Object(U.get)(e,"data",null)},ae=function(e){var t=ne(e);return Array.isArray(t)?t:[]},re=ne,ce=function(e){return 9*e/5+32},ie="https://dataservice.accuweather.com",oe={apikey:"BFuoqwlacoAXxCR09HfAIG4j8vexFjII",language:"en-us"},ue=function(e){return"".concat("https://vortex.accuweather.com/adc2010/images/slate/icons","/").concat(e,".svg")},le={getLocationByGeoPosition:function(e,t){var n=Object(m.a)({q:"".concat(e,",").concat(t)},oe);return te.a.get("".concat(ie,"/locations/v1/cities/geoposition/search"),{params:n}).then((function(e){var t=re(e);return{id:Object(U.get)(t,"Key"),city:Object(U.get)(t,"EnglishName"),country:Object(U.get)(t,"Country.EnglishName"),administrativeArea:Object(U.get)(t,"AdministrativeArea.ID")}}))},getAutoCompleteLocations:function(e){var t=Object(m.a)({q:e},oe);return te.a.get("".concat(ie,"/locations/v1/cities/autocomplete"),{params:t}).then((function(e){return ae(e).map((function(e){return{id:Object(U.get)(e,"Key"),city:Object(U.get)(e,"LocalizedName"),country:Object(U.get)(e,"Country.LocalizedName"),administrativeArea:Object(U.get)(e,"AdministrativeArea.ID")}}))}))},getCurrentWeather:function(e){return te.a.get("".concat(ie,"/currentconditions/v1/").concat(e),{params:oe}).then((function(e){var t,n=ae(e)[0],a=Object(U.get)(n,"WeatherIcon");return{timestamp:Object(U.get)(n,"EpochTime"),text:Object(U.get)(n,"WeatherText"),icon:ue(a),temperature:(t={},Object(S.a)(t,d,Object(U.get)(n,"Temperature.Metric.Value")),Object(S.a)(t,p,Object(U.get)(n,"Temperature.Imperial.Value")),t)}}))},getFiveDayForecasts:function(e){return te.a.get("".concat(ie,"/forecasts/v1/daily/5day/").concat(e),{params:oe}).then((function(e){var t=re(e);return Object(U.get)(t,"DailyForecasts",[]).map((function(e){var t,n,a=Object(U.get)(e,"Day.Icon"),r=Object(U.get)(e,"Temperature.Minimum.Value"),c=Object(U.get)(e,"Temperature.Maximum.Value");return{timestamp:Object(U.get)(e,"EpochDate"),text:Object(U.get)(e,"Day.IconPhrase"),icon:ue(a),minTemperature:(t={},Object(S.a)(t,d,r),Object(S.a)(t,p,ce(r)),t),maxTemperature:(n={},Object(S.a)(n,d,c),Object(S.a)(n,p,ce(c)),n)}}))}))}},me=function(e){var t=e.fetchData,n=e.dataName,r=e.defaultData,c=void 0===r?null:r,i=e.updateLoadingOnlyWhenDataEmpty,o=void 0!==i&&i,u=e.clearDataOnlyWhenFetchFailed,l=void 0!==u&&u,m=e.clearDataBeforeFetch,s=void 0===m||m,f=Object(a.useState)(c),d=Object(M.a)(f,2),p=d[0],g=d[1],h=Object(a.useState)(!1),b=Object(M.a)(h,2),v=b[0],j=b[1],O=Object(a.useRef)(),E=s&&!l;O.current=!o||Object(U.isEmpty)(p);var x=function(){O.current=!0,g(c)};return{data:p,loadData:function(){return E&&x(),O.current&&j(!0),t.apply(void 0,arguments).then((function(e){return g(e)})).catch((function(e){l&&x(),console.error("Error while fetching ".concat(n," -"),e)})).finally((function(){return j(!1)}))},isLoading:v,clearData:x}},se=function(e){var t=Object(a.useState)(""),n=Object(M.a)(t,2),r=n[0],c=n[1],i=me({fetchData:le.getAutoCompleteLocations,dataName:"autoComplete locations",defaultData:[],updateLoadingOnlyWhenDataEmpty:!0,clearDataOnlyWhenFetchFailed:!0});return Object(a.useEffect)((function(){var e=setTimeout((function(){r.length>=2?i.loadData(r):i.clearData()}),500);return function(){return clearTimeout(e)}}),[r]),{locations:i.data,isLoading:i.isLoading,setInputValue:c,useMyLocation:function(){navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,a=n.latitude,r=n.longitude;le.getLocationByGeoPosition(a,r).then((function(t){return e(t)}))}))}}},fe=n(45),de=n(179),pe=n(197),ge=n(180),he=r.a.createElement(de.a,{position:"start"},r.a.createElement(ge.a,null)),be=function(e){var t=e.InputProps,n=Object(fe.a)(e,["InputProps"]);return r.a.createElement(pe.a,Object.assign({placeholder:"Enter a Location",variant:"outlined",InputProps:Object(m.a)({},t,{startAdornment:he})},n))},ve=function(e){var t=e.onSelect,n=se(t),a=n.locations,c=n.isLoading,i=n.setInputValue,o=n.useMyLocation;return r.a.createElement(Z,null,r.a.createElement(Y.a,{autoComplete:!0,forcePopupIcon:!1,openOnFocus:!1,options:a,loading:c,getOptionLabel:function(e){return"".concat(e.city,", ").concat(e.administrativeArea,", ").concat(e.country)},getOptionSelected:function(e,t){return e.id===t.id},renderInput:be,onChange:function(e,n){return t(n)},onInputChange:function(e,t){return i(t)}}),r.a.createElement(X.a,{title:"Use my location"},r.a.createElement($.a,{onClick:o},r.a.createElement(K.a,null))))},je=n(186),Oe=n(50),Ee=function(e){return e.settings},xe=Object(Oe.a)(Ee,(function(e){return e.themeType})),ye=Object(Oe.a)(Ee,(function(e){return e.temperatureUnit})),we=Object(Oe.a)(Ee,(function(e){return e.favorites})),Te=Object(Oe.b)((function(e){return Object(Oe.a)(we,(function(t){return t.some((function(t){return t.id===e}))}))})),De=n(103),ke=function(e){return f(b,e),{type:"SET_TEMPERATURE_UNIT",temperatureUnit:e}},Fe=function(e){return function(t,n){var a=n(),r=we(a),c=r.findIndex((function(t){return t.id===e.id})),i=Object(De.a)(r);c>=0?i.splice(c,1):i.push(e),t(function(e){return f(g,e),{type:"SET_FAVORITES",favorites:e}}(i))}},Ce=n(66),Le=n.n(Ce),Se=n(200);function Ie(){var e=Object(k.a)(["\n  height: 100%;\n  width: 100%;\n"]);return Ie=function(){return e},e}function Ae(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]);return Ae=function(){return e},e}var Ne=y.c.div(Ae()),We=y.c.img(Ie()),Pe=function(e){var t=e.src,n=e.className;return r.a.createElement(Ne,{className:n},r.a.createElement(We,{src:t}))};function Me(){var e=Object(k.a)(["\n  &:after {\n    content: '\xb0';\n  }\n"]);return Me=function(){return e},e}var Ue=Object(y.c)(R.a)(Me()),Re=function(e){var t=e.temperature,n=Object(fe.a)(e,["temperature"]),a=Object(o.c)(ye),c=parseFloat(t[a]).toFixed(1);return r.a.createElement(Ue,Object.assign({component:"span"},n),c)},_e=n(104);function ze(){var e=Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n\n  & > * {\n    margin: 0 5px;\n  }\n"]);return ze=function(){return e},e}function Be(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto minmax(50px, 1fr) auto;\n  grid-gap: 5px;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n\n  "," {\n    grid-template-columns: 50px 50px 1fr 1fr;\n    grid-template-rows: 100%;\n    grid-gap: 10px;\n  }\n"]);return Be=function(){return e},e}var Ve=Object(y.c)(_e.a)(Be(),(function(e){return e.theme.breakpoints.down("xs")})),He=y.c.div(ze()),Je=function(e){var t=e.item,n=Le.a.unix(t.timestamp).format("ddd");return r.a.createElement(X.a,{title:t.text,placement:"top",arrow:!0},r.a.createElement(Ve,{elevation:3},r.a.createElement(R.a,{variant:"h6"},n),r.a.createElement(Pe,{src:t.icon}),r.a.createElement(He,null,r.a.createElement(Re,{temperature:t.minTemperature}),r.a.createElement(Re,{temperature:t.maxTemperature,color:"textSecondary"})),r.a.createElement(Se.a,{smUp:!0},r.a.createElement(R.a,{variant:"h6"},t.text))))};function qe(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n  grid-template-rows: 150px;\n  grid-gap: 20px;\n  width: 100%;\n\n  "," {\n    grid-template-columns: 1fr;\n    grid-template-rows: unset;\n    grid-auto-rows: 100px;\n  }\n"]);return qe=function(){return e},e}var Ge=y.c.div(qe(),(function(e){return e.theme.breakpoints.down("xs")})),Ke=function(e){var t=e.items;return r.a.createElement(Ge,null,t.map((function(e){return r.a.createElement(Je,{key:e.timestamp,item:e})})))};function Ye(){var e=Object(k.a)(["\n  font-size: 80px;\n  margin-left: 15px;\n\n  "," {\n    font-size: 50px;\n  }\n"]);return Ye=function(){return e},e}function Xe(){var e=Object(k.a)(["\n  display: grid;\n  grid-auto-rows: minmax(0, 1fr);\n  grid-template-columns: minmax(100px, 1fr) auto;\n  align-items: center;\n  justify-content: center;\n  min-height: 80px;\n  flex: 1;\n  margin-top: 15px;\n  width: 100%;\n"]);return Xe=function(){return e},e}function $e(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return $e=function(){return e},e}function Qe(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-rows: minmax(0, 1fr);\n  grid-template-columns: minmax(100px, 30%) minmax(200px, 400px);\n  grid-gap: 20px;\n  padding-right: 40px;\n  width: 100%;\n\n  "," {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto minmax(200px, 300px);\n    grid-gap: 10px;\n  }\n\n  "," {\n    padding-right: 0;\n    padding-top: 40px;\n  }\n"]);return Qe=function(){return e},e}var Ze=y.c.div(Qe(),(function(e){return e.theme.breakpoints.down("sm")}),(function(e){return e.theme.breakpoints.down("xs")})),et=y.c.div($e()),tt=y.c.div(Xe()),nt=Object(y.c)(Re)(Ye(),(function(e){return e.theme.breakpoints.down("xs")})),at=function(e){var t=e.location,n=e.currentWeather,a=Le.a.unix(n.timestamp).format("dddd");return r.a.createElement(Ze,null,r.a.createElement("div",null,r.a.createElement(R.a,{variant:"h3"},t.city),r.a.createElement(R.a,{variant:"h5",color:"textSecondary"},t.administrativeArea,", ",t.country),r.a.createElement(R.a,{variant:"h4"},a)),r.a.createElement(et,null,r.a.createElement(R.a,{variant:"h3"},n.text),r.a.createElement(tt,null,r.a.createElement(Pe,{src:n.icon}),r.a.createElement(nt,{temperature:n.temperature}))))},rt=n(184),ct=n(185),it=function(e,t){return Object(a.forwardRef)((function(n,a){var c=Object(U.omit)(n,t);return r.a.createElement(e,Object.assign({ref:a},c))}))};function ot(){var e=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 20px;\n  color: ",";\n"]);return ot=function(){return e},e}function ut(){var e=Object(k.a)(["\n  display: grid;\n  grid-auto-columns: 100%;\n  grid-template-rows: minmax(0, 1fr) auto;\n  grid-row-gap: 20px;\n  height: 100%;\n  width: 100%;\n"]);return ut=function(){return e},e}function lt(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  margin-top: 20px;\n  min-height: 400px;\n  max-height: 600px;\n  flex: 1;\n\n  "," {\n    max-height: unset;\n  }\n"]);return lt=function(){return e},e}var mt=Object(y.c)(rt.a)(lt(),(function(e){return e.theme.breakpoints.down("xs")})),st=Object(y.c)(ct.a)(ut()),ft=it($.a,["isFavorite"]),dt=Object(y.c)(ft)(ot(),(function(e){var t=e.theme;return e.isFavorite&&t.palette.error[t.palette.type]})),pt=function(e){var t=e.weather,n=t.location,a=t.currentWeather,c=t.dailyForecasts,i=Object(o.c)(Te(n.id)),u=Object(o.b)();return r.a.createElement(mt,null,r.a.createElement(X.a,{title:"Add to Favorites"},r.a.createElement(dt,{isFavorite:i,onClick:function(){u(Fe(n))}},r.a.createElement(je.a,{fontSize:"large"}))),r.a.createElement(st,null,r.a.createElement(at,{location:n,currentWeather:a}),r.a.createElement(Ke,{items:c})))},gt=function(e){var t=le.getCurrentWeather(e.id),n=le.getFiveDayForecasts(e.id);return Promise.all([t,n]).then((function(t){var n=Object(M.a)(t,2),a=n[0],r=n[1];return{location:e,currentWeather:a,dailyForecasts:r}}))},ht=function(e){var t=me({fetchData:gt,dataName:"weather",defaultData:null});return Object(a.useEffect)((function(){e?t.loadData(e):t.clearData()}),[e]),{weather:t.data,isLoading:t.isLoading}},bt=function(){var e=Object(P.g)(),t=Object(a.useState)(e.state),n=Object(M.a)(t,2),c=n[0],i=n[1],o=ht(c),u=o.weather,l=o.isLoading;return r.a.createElement(G,null,r.a.createElement(ve,{onSelect:i}),r.a.createElement(J,{loading:l,hasData:!Object(U.isEmpty)(u),noDataMessage:"No Location Selected"},r.a.createElement(pt,{weather:u})))};function vt(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 230px);\n  grid-auto-rows: 250px;\n  grid-gap: 20px;\n  width: 100%;\n  height: 100%;\n\n  "," {\n    grid-template-columns: 1fr;\n    grid-auto-rows: 200px;\n  }\n"]);return vt=function(){return e},e}var jt=y.c.div(vt(),(function(e){return e.theme.breakpoints.down("xs")})),Ot="/",Et="/favorites";function xt(){var e=Object(k.a)(["\n  font-size: 40px;\n  margin-left: 15px;\n"]);return xt=function(){return e},e}function yt(){var e=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  width: 100%;\n"]);return yt=function(){return e},e}function wt(){var e=Object(k.a)(["\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-template-rows: auto auto 60px auto;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n  grid-gap: 5px;\n  padding: 10px;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n"]);return wt=function(){return e},e}var Tt=Object(y.c)(_e.a)(wt()),Dt=y.c.div(yt()),kt=Object(y.c)(Re)(xt()),Ft=function(e){var t=e.weather,n=Object(P.f)(),a=t.location,c=t.currentWeather;return r.a.createElement(Tt,{elevation:3,onClick:function(){n.push(Ot,a)}},r.a.createElement(R.a,{variant:"h5"},a.city),r.a.createElement(R.a,{variant:"h6",color:"textSecondary"},a.administrativeArea,", ",a.country),r.a.createElement(Dt,null,r.a.createElement(Pe,{src:c.icon}),r.a.createElement(kt,{temperature:c.temperature})),r.a.createElement(R.a,{variant:"h5"},c.text))},Ct=function(e){return le.getCurrentWeather(e.id).then((function(t){return{location:e,currentWeather:t}})).catch((function(){return null}))},Lt=function(e){var t=e.map(Ct);return Promise.all(t).then((function(e){var t=e.filter((function(e){return!Object(U.isEmpty)(e)}));if(Object(U.isEmpty)(t))throw new Error("no results found");return t}))},St=function(e){var t=me({fetchData:Lt,dataName:"favorite weather locations",defaultData:[]});return Object(a.useEffect)((function(){!Object(U.isEmpty)(e)&&t.loadData(e)}),[e]),{weatherLocations:t.data,isLoading:t.isLoading}},It=function(){var e=Object(o.c)(we),t=St(e),n=t.weatherLocations,a=t.isLoading;return r.a.createElement(J,{loading:a,hasData:!Object(U.isEmpty)(n),noDataMessage:"No Favorite Added"},r.a.createElement(jt,null,n.map((function(e){return r.a.createElement(Ft,{key:e.location.id,weather:e})}))))},At=n(191),Nt=n(102),Wt=n(194),Pt=n(189),Mt=n(190),Ut=n(192),Rt=n(193),_t=n(187);function zt(){var e=Object(k.a)(["\n  border: 1px solid #fff;\n  border-radius: 10px;\n  overflow: hidden;\n\n  "," {\n    :first-child {\n      border-top-left-radius: inherit;\n      border-bottom-left-radius: inherit;\n    }\n\n    :last-child {\n      border-top-right-radius: inherit;\n      border-bottom-right-radius: inherit;\n    }\n  }\n"]);return zt=function(){return e},e}function Bt(){var e=Object(k.a)(["\n  border-radius: 0;\n  padding: 0;\n  min-width: 30px;\n  overflow: hidden;\n"]);return Bt=function(){return e},e}var Vt=Object(y.c)(_t.a).attrs({variant:"contained",disableRipple:!0,disableElevation:!0})(Bt()),Ht=y.c.div(zt(),Vt),Jt="default",qt="secondary",Gt=function(e,t){var n=Jt;return e===t&&(n=qt),n},Kt=function(){var e=Object(o.c)(ye),t=Object(o.b)();return r.a.createElement(Ht,null,r.a.createElement(X.a,{title:"Celsius"},r.a.createElement(Vt,{color:Gt(e,d),onClick:function(){return t(ke(d))}},"\xb0C")),r.a.createElement(X.a,{title:"Fahrenheit"},r.a.createElement(Vt,{color:Gt(e,p),onClick:function(){return t(ke(p))}},"\xb0F")))};function Yt(){var e=Object(k.a)(["\n  margin-left: 5px;\n  cursor: pointer;\n"]);return Yt=function(){return e},e}function Xt(){var e=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: none;\n  margin-left: 10px;\n  font-weight: bold;\n\n  &.selected {\n    color: ",";\n  }\n"]);return Xt=function(){return e},e}var $t=Object(y.c)(W.b).attrs({activeClassName:"selected",exact:!0})(Xt(),(function(e){var t=e.theme;return t.palette.secondary[t.palette.type]})),Qt=y.c.label(Yt()),Zt=function(e){var t=e.label,n=e.icon,a=Object(fe.a)(e,["label","icon"]);return r.a.createElement($t,a,r.a.createElement(n,null),r.a.createElement(Qt,null,t))},en=n(188),tn=n(202);function nn(){var e=Object(k.a)(["\n  margin-left: 0;\n  width: 100%;\n"]);return nn=function(){return e},e}function an(){var e=Object(k.a)(["\n  margin-right: 10px;\n"]);return an=function(){return e},e}function rn(){var e=Object(k.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return rn=function(){return e},e}function cn(){var e=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  & > *:not(:first-child) {\n    margin-left: 20px;\n  }\n\n  "," {\n    flex: 1;\n  }\n"]);return cn=function(){return e},e}function on(){var e=Object(k.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex: 1;\n  margin: 0 20px;\n"]);return on=function(){return e},e}function un(){var e=Object(k.a)(["\n  font-size: 20px;\n"]);return un=function(){return e},e}function ln(){var e=Object(k.a)(["\n  color: inherit;\n  padding: 0;\n"]);return ln=function(){return e},e}function mn(){var e=Object(k.a)(["\n  white-space: nowrap;\n"]);return mn=function(){return e},e}var sn,fn=Object(y.c)(en.a)(mn()),dn=Object(y.c)($.a)(ln()),pn=y.c.span(un()),gn=y.c.div(on()),hn=y.c.div(cn(),(function(e){return e.theme.breakpoints.down("xs")})),bn=Object(y.c)(tn.a)(rn()),vn=Object(y.c)(R.a).attrs({variant:"p",noWrap:!0})(an()),jn=Object(y.c)(Zt)(nn()),On=(sn={},Object(S.a)(sn,v,r.a.createElement(Pt.a,null)),Object(S.a)(sn,j,r.a.createElement(Mt.a,null)),sn),En=function(){var e=Object(a.useState)(null),t=Object(M.a)(e,2),n=t[0],c=t[1],i=Object(o.c)(xe),u=Object(o.b)(),l=Object(U.get)(On,i,On[v]),m=function(){c(null)},s=function(){var e=v;i===v&&(e=j),u(function(e){return f(h,e),{type:"SET_THEME_TYPE",themeType:e}}(e))};return r.a.createElement(At.a,{position:"static"},r.a.createElement(fn,null,r.a.createElement(pn,{variant:"h6"},"Herolo Weather"),r.a.createElement(Se.a,{xsDown:!0},r.a.createElement(gn,null,r.a.createElement(Zt,{to:Ot,label:"Home",icon:Ut.a}),r.a.createElement(Zt,{to:Et,label:"Favorites",icon:je.a}))),r.a.createElement(hn,null,r.a.createElement(Se.a,{xsDown:!0},r.a.createElement(Kt,null),r.a.createElement(X.a,{title:"Toggle light/dark theme"},r.a.createElement(dn,{onClick:s},l))),r.a.createElement(Se.a,{smUp:!0},r.a.createElement(dn,{onClick:function(e){c(e.currentTarget)}},r.a.createElement(Rt.a,null)))),r.a.createElement(Nt.a,{anchorEl:n,open:Boolean(n),onClose:m},r.a.createElement(bn,null,r.a.createElement(jn,{to:Ot,label:"Home",icon:Ut.a,onClick:m})),r.a.createElement(bn,null,r.a.createElement(jn,{to:Et,label:"Favorites",icon:je.a,onClick:m})),r.a.createElement(Wt.a,null),r.a.createElement(bn,null,r.a.createElement(vn,null,"Temperature"),r.a.createElement(Kt,null)),r.a.createElement(bn,null,r.a.createElement(vn,null,"Theme"),r.a.createElement(dn,{onClick:s},l)))))};function xn(){var e=Object(k.a)(["\n  padding: 20px 30px;\n  flex: 1;\n  width: 100%;\n\n  "," {\n    padding: 10px;\n  }\n"]);return xn=function(){return e},e}function yn(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n"]);return yn=function(){return e},e}var wn=y.c.div(yn()),Tn=y.c.div(xn(),(function(e){return e.theme.breakpoints.down("xs")})),Dn=function(){return r.a.createElement(W.a,{basename:"."},r.a.createElement(wn,null,r.a.createElement(En,null),r.a.createElement(Tn,null,r.a.createElement(P.c,null,r.a.createElement(P.a,{path:Ot,exact:!0,component:bt}),r.a.createElement(P.a,{path:Et,exact:!0,component:It})))))},kn=function(){var e=function(e){return Object(A.a)(N[e])}(Object(o.c)(xe));return r.a.createElement(T.a,{theme:e},r.a.createElement(y.a,{theme:e},r.a.createElement(w.b,{injectFirst:!0},r.a.createElement(D.a,null),r.a.createElement(L,null),r.a.createElement(Dn,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:x},r.a.createElement(kn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.68def2cd.chunk.js.map