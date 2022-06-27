"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{2485:(e,t,n)=>{var r=n(1292),a=n(4702),i=n(19),o=n(9510),s=n(2746),c=n(7576),l=n(3110),u=n(6591),d=n(3457),p=n(6281),f=n(3688),v=n.n(f),m=n(5202);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=window;const b=function(e){var t=e.mapId,n=e.setAddLayerVisible,r=g.cgpv,a=r.api,i=r.react,o=r.ui,s=a.layerTypes,c=s.ESRI_DYNAMIC,l=s.ESRI_FEATURE,f=s.GEOJSON,y=s.WMS,b=s.WFS,x=s.OGC_FEATURE,j=s.XYZ_TILES,O=i.useState,w=o.elements,S=w.Select,E=w.Stepper,N=w.TextField,C=w.Button,Z=w.ButtonGroup,L=w.Typography,k=w.Autocomplete,P=O(0),I=(0,d.Z)(P,2),A=I[0],T=I[1],R=O(""),B=(0,d.Z)(R,2),G=B[0],D=B[1],F=O(""),_=(0,d.Z)(F,2),W=_[0],V=_[1],M=O([]),U=(0,d.Z)(M,2),J=U[0],Y=U[1],z=O(""),K=(0,d.Z)(z,2),Q=K[0],q=K[1],X=O([]),H=(0,d.Z)(X,2),$=H[0],ee=H[1],te=o.makeStyles((function(){return{buttonGroup:{paddingTop:12,gap:6}}}))(),ne=function(){return W===c},re=[[c,"ESRI Dynamic Service"],[l,"ESRI Feature Service"],[f,"GeoJSON"],[y,"OGC Web Map Service (WMS)"],[b,"OGC Web Feature Service (WFS)"],[x,"OGC API Features"],[j,"XYZ Raster Tiles"]],ae=function(e){switch(e){case c:return{err:"ESRI Map",capability:"Map"};case l:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},ie=function(e){a.event.emit((0,u.Zu)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," cannot be empty")}))},oe=function(e){a.event.emit((0,u.Zu)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"URL is not a valid ".concat(e," Server")}))},se=function(e,n,r){a.event.emit((0,u.Zu)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," does not support current map projection ").concat(n,", only ").concat(r.join(", "))}))},ce=function(){var e=(0,p.Z)(v().mark((function e(){var n,r,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.map(t).projection.getCRS().code,r=[],e.prev=2,e.next=5,a.geoUtilities.getWMSServiceMetadata(G,"");case 5:if(i=e.sent,(r=i.Capability.Layer.CRS).includes(n)){e.next=9;break}throw new Error("proj");case 9:1===(o=i.Capability.Layer.Layer.map((function(e){return[e.Name,e.Title]}))).length?(q(o[0][1]),ee([{id:o[0][0]}])):Y(o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),"proj"===e.t0?se("WMS",n,r):oe("WMS"),e.abrupt("return",!1);case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=(0,p.Z)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(G);case 3:t=e.sent,1===(n=t.FeatureTypeList.FeatureType.map((function(e){return[(0,u.ZQ)(e.Name["#text"].split(":")[1]),e.Title["#text"]]}))).length?(q(n[0][1]),ee([{id:n[0][0]}])):Y(n),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),oe("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,p.Z)(v().mark((function e(){var t,n,r,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["collections","links"],e.prev=1,e.next=4,fetch("".concat(G,"/collections?f=json"));case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,t.every((function(e){return Object.keys(r).includes(e)}))){e.next=11;break}throw new Error("err");case 11:1===(a=r.collections.map((function(e){return[e.id,e.title]}))).length?(q(a[0][1]),ee([{id:a[0][0]}])):Y(a),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(1),oe("OGC API Feature"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,p.Z)(v().mark((function e(t){var n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(G);case 3:if(!(n=e.sent).capabilities.includes(ae(t).capability)){e.next=8;break}"layers"in n?1===(r=n.layers.map((function(e){return[e.id,e.name]}))).length?(q(r[0][1]),ee([{index:r[0][0]}])):Y(r):(q(n.name),ee([{index:n.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),oe(ae(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){for(var e=a.map(t).projection.getCRS().code,n=["{x}","{y}","{z}"],r=0;r<n.length;r+=1)if(!G.includes(n[r]))return oe("XYZ Tile"),!1;return"EPSG:3857"===e||(se("XYZ Tiles",e,["EPSG:3857"]),!1)},fe=function(){var e=(0,p.Z)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(G);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,["FeatureCollection","Feature"].includes(n.type)){e.next=9;break}throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),oe("GeoJSON"),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,p.Z)(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!0,void 0===W&&(t=!1,ie("Service Type")),W!==y){e.next=6;break}return e.next=5,ce();case 5:t=e.sent;case 6:if(W!==b){e.next=10;break}return e.next=9,le();case 9:t=e.sent;case 10:if(W!==x){e.next=16;break}return e.next=13,ue();case 13:t=e.sent,e.next=36;break;case 16:if(W!==j){e.next=20;break}t=pe(),e.next=36;break;case 20:if(W!==c){e.next=26;break}return e.next=23,de(c);case 23:t=e.sent,e.next=36;break;case 26:if(W!==l){e.next=32;break}return e.next=29,de(l);case 29:t=e.sent,e.next=36;break;case 32:if(W!==f){e.next=36;break}return e.next=35,fe();case 35:t=e.sent;case 36:t&&T(2);case 37:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=!0,r=Q,i=G,o=$;W===c?i=a.geoUtilities.getMapServerUrl(G):W===l&&(i="".concat(a.geoUtilities.getMapServerUrl(G),"/").concat($[0].index),o=[]),""===Q&&(e=!1,ie(ne()?"Name":"Layer"));var s={id:a.generateId(),name:{en:r,fr:r},layerType:W,url:{en:i,fr:i},layerEntries:o};e&&(a.map(t).layer.addLayer(s),n(!1))},ye=function(){T((function(e){return e-1}))},he=function(e){q(e.target.value)};function ge(e){var t=e.isFirst,n=void 0!==t&&t,r=e.isLast,a=void 0!==r&&r,i=e.handleNext;return(0,m.jsxs)(Z,{className:te.buttonGroup,children:[(0,m.jsx)(C,{variant:"contained",type:"text",onClick:i,children:a?"Finish":"Continue"}),!n&&(0,m.jsx)(C,{variant:"contained",type:"text",onClick:ye,children:"Back"})]})}return(0,m.jsx)(E,{activeStep:A,orientation:"vertical",steps:[{stepLabel:{children:"Enter URL"},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(N,{sx:{width:"100%"},label:"URL",variant:"standard",value:G,onChange:function(e){D(e.target.value),V(""),Y([]),q(""),ee([])}}),(0,m.jsx)("br",{}),(0,m.jsx)(ge,{isFirst:!0,handleNext:function(){var e=!0;""===G.trim()&&(e=!1,ie("URL")),e&&T(1)}})]})}},{stepLabel:{children:"Select format"},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(S,{fullWidth:!0,labelId:"service-type-label",value:W,onChange:function(e){V(e.target.value),Y([]),q(""),ee([])},label:"Service Type",inputLabel:{id:"service-type-label"},menuItems:re.map((function(e){var t=(0,d.Z)(e,2),n=t[0];return{key:n,item:{value:n,children:t[1]}}}))}),(0,m.jsx)(ge,{handleNext:ve})]})}},{stepLabel:{children:"Configure layer"},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[0===J.length&&0===$.length&&(0,m.jsx)(N,{label:"Name",variant:"standard",value:Q,onChange:he}),0===J.length&&$.length>0&&(0,m.jsx)(L,{children:Q}),J.length>1&&(0,m.jsx)(k,{fullWidth:!0,multiple:ne(),disableCloseOnSelect:!0,disableClearable:!ne(),id:"service-layer-label",options:J,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,m.jsx)("span",h(h({},e),{},{children:t[1]}))},onChange:function(e,t){ne()?(ee(t.map((function(e){return W===c?{index:parseInt(e[0],10)}:{id:e[0]}}))),q(t.map((function(e){return e[1]})).join(", "))):(ee(W===c?[{index:parseInt(t[0],10)}]:[{id:t[0]}]),q(t[1]))},renderInput:function(e){return(0,m.jsx)(N,h(h({},e),{},{label:"Select Layer"}))}}),(0,m.jsx)("br",{}),(0,m.jsx)(ge,{isLast:!ne(),handleNext:ne()?function(){var e=!0;0===$.length&&(e=!1,ie("Layer")),e&&T(3)}:me})]})}},ne()?{stepLabel:{children:"Enter Name"},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(N,{sx:{width:"100%"},label:"Name",variant:"standard",value:Q,onChange:he}),(0,m.jsx)("br",{}),(0,m.jsx)(ge,{isLast:!0,handleNext:me})]})}}:null]})};var x=n(4201);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=window;const S=function(e){var t=e.mapId,n=e.layers,r=e.language,a=w.cgpv,i=a.ui,o=a.react,s=a.api,c=a.leaflet,f=o.useState,y=o.useEffect,h=f(""),g=(0,d.Z)(h,2),b=g[0],j=g[1],S=f({}),E=(0,d.Z)(S,2),N=E[0],C=E[1],Z=f({}),L=(0,d.Z)(Z,2),k=L[0],P=L[1],I=f(c.polygon([])),A=(0,d.Z)(I,2),T=A[0],R=A[1],B=f({}),G=(0,d.Z)(B,2),D=G[0],F=G[1],_=f({}),W=(0,d.Z)(_,2),V=W[0],M=W[1],U=f({}),J=(0,d.Z)(U,2),Y=J[0],z=J[1],K=i.elements,Q=K.Button,q=K.Slider,X=K.Tooltip,H=K.Checkbox,$=(0,u.ZQ)({"en-CA":{bounds:"Toggle Bounds",zoom:"Zoom to Layer",remove:"Remove Layer",opacity:"Adjust Opacity",visibility:"Toggle Visibility"},"fr-CA":{bounds:"Basculer la limite",zoom:"Zoom sur la Couche",remove:"Supprimer la Couche",opacity:"Ajuster l'opacité",visibility:"Basculer la Visibilité"}}),ee=i.makeStyles((function(){return{layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3,border:"none",width:"100%"},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%",height:"32px"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",marginLeft:"10px",display:"flex",alignItems:"center",gap:6},flexGroup:{display:"flex",justifyContent:"flex-end",alignItems:"baseline",gap:12},flexGroupButton:{height:38,minHeight:38,width:25,minWidth:25,"& > div":{textAlign:"center"}},slider:{width:"100%",paddingLeft:20,paddingRight:20},legendSubLayerGroup:{display:"flex",justifyContent:"space-between"}}}));y((function(){var e=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,l.Z)({},t.id,[]))}),{});C((function(t){return O(O({},e),t)})),Object.values(n).forEach(function(){var e=(0,p.Z)(v().mark((function e(t){var n,r,a,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,u.DR)(t)){e.next=9;break}return e.next=3,t.getLegendGraphic();case 3:n=e.sent,r=t.url.includes("/MapServer")?t.name:"",a=[{name:r,dataUrl:n}],C((function(e){return O(O({},e),{},(0,l.Z)({},t.id,a))})),e.next=15;break;case 9:if(!(0,u.mJ)(t)&&!(0,u.o1)(t)){e.next=15;break}return e.next=12,t.getLegendJson();case 12:i=e.sent,o=Array.isArray(i)?i:[i],C((function(e){return O(O({},e),{},(0,l.Z)({},t.id,o))}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var t=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,l.Z)({},t.id,c.latLngBounds([])))}),{});P((function(e){return O(O({},t),e)})),Object.values(n).forEach(function(){var e=(0,p.Z)(v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBounds();case 2:n=e.sent,P((function(e){return O(O({},e),{},(0,l.Z)({},t.id,n))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var r=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,l.Z)({},t.id,100))}),{});F((function(e){return O(O({},r),e)}));var a=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,l.Z)({},t.id,!0))}),{});M((function(e){return O(O({},a),e)}));var i=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,l.Z)({},t.id,t.entries))}),{});z((function(e){return O(O({},i),e)}))}),[n,c]);var te=ee(),ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=e.getEast()-e.getWest(),r=[];r.push(e.getSouthWest());for(var a=1;a<=t;a+=1){var i=n*(a/(t+1)),o=e.getWest()+i;r.push({lat:e.getSouth(),lng:o})}r.push(e.getSouthEast()),r.push(e.getNorthEast());for(var l=1;l<=t;l+=1){var u=n*(l/(t+1)),d=e.getEast()-u;r.push({lat:e.getNorth(),lng:d})}return r.push(e.getNorthWest()),c.polygon(r,{id:s.generateId(),color:"red"})};return(0,m.jsx)("div",{className:te.layersContainer,children:Object.values(n).map((function(e){return(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{type:"button",className:te.layerItem,onClick:function(){return t=e.id,void j(t!==b?t:"");var t},children:(0,m.jsx)("div",{className:te.layerCountTextContainer,children:(0,m.jsx)("div",{className:te.layerItemText,title:e.name,children:e.name})})}),b===e.id&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:te.flexGroup,children:[(0,m.jsx)(Q,{className:te.flexGroupButton,tooltip:$[r].zoom,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">zoom_in</i>',onClick:function(){return function(e){return s.map(t).fitBounds(k[e.id])}(e)}}),(0,m.jsx)(Q,{className:te.flexGroupButton,tooltip:$[r].bounds,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">crop_free</i>',onClick:function(){return function(e){var n=ne(k[e.id]);JSON.stringify(n.toGeoJSON())===JSON.stringify(T.toGeoJSON())?(T.remove(),R(c.polygon([]))):(T.remove(),n.addTo(s.map(t).map),R(n))}(e)}}),(0,m.jsx)(Q,{className:te.flexGroupButton,tooltip:$[r].remove,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">remove</i>',onClick:function(){return function(e){var n=ne(k[e.id]);JSON.stringify(n.toGeoJSON())===JSON.stringify(T.toGeoJSON())&&(T.remove(),R(c.polygon([]))),s.map(t).layer.removeLayer(e)}(e)}})]}),(0,m.jsxs)("div",{className:te.flexGroup,children:[(0,m.jsx)(X,{title:$[r].opacity,children:(0,m.jsx)("i",{className:"material-icons",children:"contrast"})}),(0,m.jsx)("div",{className:te.slider,children:(0,m.jsx)(q,{id:s.generateId(),min:0,max:100,size:"small",value:D[e.id],valueLabelDisplay:"auto",customOnChange:function(t){return function(e,t){F((function(n){return O(O({},n),{},(0,l.Z)({},t.id,e))}));var n=V[t.id]?e/100:0;t.setOpacity(n)}(t,e)}})}),(0,m.jsx)(X,{title:$[r].visibility,children:(0,m.jsx)(H,{checked:V[e.id],onChange:function(t){return function(e,t){M((function(n){return O(O({},n),{},(0,l.Z)({},t.id,e))}));var n=e?D[t.id]/100:0;t.setOpacity(n),e&&t.setEntries&&(z((function(e){return O(O({},e),{},(0,l.Z)({},t.id,t.entries))})),t.setEntries(t.entries)),!e&&t.setEntries&&(z((function(e){return O(O({},e),{},(0,l.Z)({},t.id,[]))})),t.setEntries([]))}(t.target.checked,e)}})})]}),N[e.id].map((function(t,n){var a,i,o,s,c,u;return(0,m.jsxs)("div",{children:[t.legend&&(0,m.jsxs)("div",{className:te.legendSubLayerGroup,children:[(0,m.jsx)("div",{className:te.layerItemText,title:t.layerName,children:t.layerName}),(0,m.jsx)(X,{title:$[r].visibility,children:(0,m.jsx)(H,{checked:Y[e.id].includes(t.layerId),onChange:function(n){return r=n.target.checked,a=e,i=t.layerId,o=Y[a.id],s=r?(0,x.Z)(new Set([].concat((0,x.Z)(o),[i]))):o.filter((function(e){return e!==i})),0===o.length&&(M((function(e){return O(O({},e),{},(0,l.Z)({},a.id,!0))})),a.setOpacity(D[a.id]/100)),0===s.length&&(M((function(e){return O(O({},e),{},(0,l.Z)({},a.id,!1))})),a.setOpacity(0)),z((function(e){return O(O({},e),{},(0,l.Z)({},a.id,s))})),void(a.setEntries&&a.setEntries(s));var r,a,i,o,s}})})]}),"simple"===(null===(a=t.drawingInfo)||void 0===a?void 0:a.renderer.type)&&(null===(i=t.drawingInfo)||void 0===i?void 0:i.renderer.symbol.imageData)&&(0,m.jsxs)("div",{className:te.layerItemText,children:[(0,m.jsx)("img",{alt:"Layer Legend",src:"data:".concat(null===(o=t.drawingInfo)||void 0===o?void 0:o.renderer.symbol.contentType,";base64,").concat(null===(s=t.drawingInfo)||void 0===s?void 0:s.renderer.symbol.imageData)}),(null===(c=t.drawingInfo)||void 0===c?void 0:c.renderer.label)||t.name]}),"uniqueValue"===(null===(u=t.drawingInfo)||void 0===u?void 0:u.renderer.type)&&t.drawingInfo.renderer.uniqueValueInfos[0].symbol.imageData&&t.drawingInfo.renderer.uniqueValueInfos.map((function(e,t){return(0,m.jsxs)("div",{className:te.layerItemText,children:[(0,m.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.symbol.contentType,";base64,").concat(e.symbol.imageData)}),e.label]},t)})),t.legend&&t.legend.map((function(e,n){return(0,m.jsxs)("div",{className:te.layerItemText,children:[(0,m.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.contentType,";base64,").concat(e.imageData)}),e.label||t.layerName]},n)})),t.dataUrl&&(0,m.jsxs)("div",{className:te.layerItemText,children:[(0,m.jsx)("img",{alt:"Layer Legend",src:t.dataUrl}),t.name]})]},n)}))]})]},e.id)}))})};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=window;const Z=function(e){var t=e.mapId,n=e.buttonPanel,r=C.cgpv,a=r.api,i=r.react,o=r.ui,s=i.useState,c=i.useEffect,l=s(!1),p=(0,d.Z)(l,2),f=p[0],v=p[1],y=s({}),h=(0,d.Z)(y,2),g=h[0],x=h[1],j=o.elements.Button,O=a.map(t).language,w=(0,u.ZQ)({"en-CA":{addLayer:"Add Layer"},"fr-CA":{addLayer:"Ajouter Couche"}}),E=o.makeStyles((function(){return{mainContainer:{display:"flex",flexDirection:"row"},addLayerButton:{width:50,minWidth:50,"& > div":{textAlign:"center"}}}}))();return c((function(){return x((function(){return N({},a.map(t).layer.layers)})),a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){return x((function(){return N({},a.map(t).layer.layers)}))}),t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,(function(){return x((function(){return N({},a.map(t).layer.layers)}))}),t),a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,(function(){v(!1)}),t,n.id),function(){a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t),a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,t,n.id)}}),[a,n.id,t]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:E.mainContainer,children:(0,m.jsx)(j,{className:E.addLayerButton,tooltip:w[O].addLayer,tooltipPlacement:"right",variant:"contained",type:"icon",icon:'<i class="material-icons">add</i>',onClick:function(){return v((function(e){return!e}))}})}),f&&(0,m.jsx)(b,{mapId:t,setAddLayerVisible:v}),(0,m.jsx)("div",{style:{display:f?"none":"inherit"},children:(0,m.jsx)(S,{mapId:t,layers:g,language:O})})]})},L=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"languages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en-CA","fr-CA"]},"default":["en-CA","fr-CA"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["languages"]}'),k=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"languages":["en-CA","fr-CA"]}');function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var I=window,A=function(e){(0,o.Z)(n,e);var t=P(n);function n(e,a){var o;return(0,r.Z)(this,n),o=t.call(this,e,a),(0,l.Z)((0,i.Z)(o),"schema",(function(){return L})),(0,l.Z)((0,i.Z)(o),"defaultConfig",(function(){return(0,u.ZQ)(k)})),(0,l.Z)((0,i.Z)(o),"translations",(0,u.ZQ)({"en-CA":{layersPanel:"Layers"},"fr-CA":{layersPanel:"Couches"}})),(0,l.Z)((0,i.Z)(o),"added",(function(){var e,t,n,r,a,i=o.pluginProps.mapId,s=I.cgpv,c=s.api,l=s.ui.elements.LayersOutlinedIcon,u=c.map(i).language;a=null===(e=o.configObj)||void 0===e||null===(t=e.isOpen)||void 0===t?void 0:t.large;var d={id:"layersPanelButton",tooltip:o.translations[u].layersPanel,tooltipPlacement:"right",children:(0,m.jsx)(l,{}),visible:!0},p={title:o.translations[u].layersPanel,icon:'<i class="material-icons">layers</i>',width:200,status:a};o.buttonPanel=c.map(i).appBarButtons.createAppbarPanel(d,p,null),null===(n=o.buttonPanel)||void 0===n||null===(r=n.panel)||void 0===r||r.changeContent((0,m.jsx)(Z,{buttonPanel:o.buttonPanel,mapId:i}))})),o.buttonPanel=null,o}return(0,a.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=I.cgpv.api;this.buttonPanel&&t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.id)}}]),n}(u.EV);I.plugins=I.plugins||{},I.plugins["layers-panel"]=(0,u.RF)(A)}},e=>{var t;t=2485,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map