(this.webpackJsonpacnh_genome_calculator=this.webpackJsonpacnh_genome_calculator||[]).push([[0],{250:function(e,o,r){e.exports=r(454)},255:function(e,o,r){},256:function(e,o,r){},257:function(e,o,r){},454:function(e,o,r){"use strict";r.r(o);var l,a,t,n=r(1),c=r.n(n),_=r(14),i=r.n(_),s=(r(255),r(18)),m=(r(256),r(257),r(485)),u=r(507),p=r(492),d=r(511),g=r(493),b=r(77),f={flowers:{hyacinth:{island:{orange:"01_11_00",pink:"01_00_01",blue:"11_01_00"},seed:{white:"00_00_01",yellow:"00_11_00",red:"11_00_01"},genomes:{"01_01_01":{color:"yellow"},"01_00_01":{color:"pink",island:1},"01_01_11":{color:"yellow"},"01_00_11":{color:"white"},"01_11_01":{color:"yellow"},"01_11_11":{color:"yellow"},"11_01_00":{island:1,color:"blue"},"11_00_00":{color:"red"},"00_11_00":{seed:1,color:"yellow"},"00_00_00":{color:"white"},"00_01_00":{color:"yellow"},"11_11_00":{color:"purple"},"01_01_00":{color:"orange"},"01_00_00":{color:"red"},"01_11_00":{color:"orange",island:1},"11_01_11":{color:"red"},"11_00_11":{color:"red"},"11_00_01":{seed:1,color:"red"},"11_01_01":{color:"red"},"00_11_11":{color:"yellow"},"00_11_01":{color:"yellow"},"00_01_11":{color:"white"},"00_00_11":{color:"blue"},"00_01_01":{color:"yellow"},"00_00_01":{color:"white",seed:1},"11_11_11":{color:"purple"},"11_11_01":{color:"purple"}},colors:["blue","orange","pink","purple","red","white","yellow"]},windflower:{colors:["blue","orange","pink","purple","red","white"],island:{blue:"01_00_11",pink:"11_11_01"},seed:{white:"00_00_01",orange:"00_11_00",red:"11_00_00"},genomes:{"01_11_00":{color:"orange"},"01_00_00":{color:"red"},"01_01_00":{color:"pink"},"00_00_01":{color:"white",seed:1},"00_01_01":{color:"orange"},"00_00_11":{color:"blue"},"00_01_11":{color:"blue"},"11_11_01":{island:1,color:"pink"},"11_11_11":{color:"purple"},"11_01_01":{color:"red"},"11_00_01":{color:"red"},"11_00_11":{color:"purple"},"11_01_11":{color:"purple"},"00_11_01":{color:"orange"},"00_11_11":{color:"orange"},"01_11_11":{color:"orange"},"01_11_01":{color:"orange"},"01_00_11":{color:"blue",island:1},"01_01_11":{color:"pink"},"01_00_01":{color:"red"},"01_01_01":{color:"pink"},"00_00_00":{color:"white"},"00_01_00":{color:"orange"},"11_11_00":{color:"pink"},"11_01_00":{color:"red"},"11_00_00":{seed:1,color:"red"},"00_11_00":{color:"orange",seed:1}}},cosmos:{island:{orange:"11_01_01",pink:"01_01_11"},seed:{white:"00_00_01",yellow:"00_11_01",red:"11_00_00"},genomes:{"01_00_01":{color:"pink"},"01_01_01":{color:"orange"},"01_01_11":{island:1,color:"pink"},"01_00_11":{color:"pink"},"01_11_01":{color:"orange"},"01_11_11":{color:"orange"},"11_00_00":{color:"red",seed:1},"11_01_00":{color:"orange"},"00_11_00":{color:"yellow"},"00_00_00":{color:"white"},"00_01_00":{color:"yellow"},"11_11_00":{color:"black"},"01_00_00":{color:"pink"},"01_01_00":{color:"orange"},"01_11_00":{color:"orange"},"11_00_11":{color:"red"},"11_01_11":{color:"red"},"11_01_01":{island:1,color:"orange"},"11_00_01":{color:"red"},"00_11_11":{color:"yellow"},"00_11_01":{seed:1,color:"yellow"},"00_01_11":{color:"white"},"00_00_11":{color:"white"},"00_00_01":{seed:1,color:"white"},"00_01_01":{color:"yellow"},"11_11_11":{color:"red"},"11_11_01":{color:"black"}},colors:["black","orange","pink","red","white","yellow"]},pansy:{colors:["blue","orange","purple","red","white","yellow"],seed:{red:"11_00_00",yellow:"00_11_00",white:"00_00_01"},island:{orange:"11_11_01",blue:"01_00_11"},genomes:{"11_01_00":{color:"red"},"11_00_00":{seed:1,color:"red"},"00_11_00":{seed:1,color:"yellow"},"00_01_00":{color:"yellow"},"00_00_00":{color:"white"},"11_11_00":{color:"orange"},"01_01_01":{color:"orange"},"01_00_01":{color:"red"},"01_00_11":{island:1,color:"blue"},"01_01_11":{color:"orange"},"01_11_01":{color:"yellow"},"01_11_11":{color:"yellow"},"11_00_11":{color:"purple"},"11_01_11":{color:"purple"},"11_01_01":{color:"red"},"11_00_01":{color:"red"},"00_11_11":{color:"yellow"},"00_11_01":{color:"yellow"},"00_00_11":{color:"blue"},"00_01_11":{color:"blue"},"00_01_01":{color:"yellow"},"00_00_01":{color:"white",seed:1},"11_11_11":{color:"purple"},"11_11_01":{color:"orange",island:1},"01_00_00":{color:"red"},"01_01_00":{color:"orange"},"01_11_00":{color:"yellow"}}},lily:{colors:["black","orange","pink","red","white","yellow"],seed:{yellow:"00_11_00",white:"00_00_11",red:"11_00_01"},island:{orange:"11_11_01",black:"11_01_00",pink:"11_01_11"},genomes:{"01_11_00":{color:"orange"},"01_01_00":{color:"orange"},"01_00_00":{color:"red"},"00_00_11":{color:"white",seed:1},"00_01_11":{color:"white"},"00_00_01":{color:"white"},"00_01_01":{color:"white"},"11_11_11":{color:"white"},"11_11_01":{color:"orange",island:1},"11_01_11":{color:"pink",island:1},"11_00_11":{color:"pink"},"11_01_01":{color:"red"},"11_00_01":{seed:1,color:"red"},"00_11_11":{color:"white"},"00_11_01":{color:"yellow"},"01_11_01":{color:"yellow"},"01_11_11":{color:"yellow"},"01_01_01":{color:"yellow"},"01_00_01":{color:"pink"},"01_01_11":{color:"yellow"},"01_00_11":{color:"white"},"00_01_00":{color:"yellow"},"00_00_00":{color:"white"},"11_11_00":{color:"orange"},"11_01_00":{island:1,color:"black"},"11_00_00":{color:"black"},"00_11_00":{seed:1,color:"yellow"}}},tulip:{colors:["black","orange","pink","purple","red","white","yellow"],island:{black:"11_01_00",orange:"01_11_00",pink:"01_00_01"},genomes:{"00_11_11":{color:"yellow"},"00_11_01":{color:"yellow"},"11_00_11":{color:"red"},"11_01_11":{color:"red"},"11_00_01":{seed:1,color:"red"},"11_01_01":{color:"red"},"11_11_11":{color:"purple"},"11_11_01":{color:"purple"},"00_00_11":{color:"white"},"00_01_11":{color:"white"},"00_00_01":{color:"white",seed:1},"00_01_01":{color:"yellow"},"01_00_00":{color:"red"},"01_01_00":{color:"orange"},"01_11_00":{island:1,color:"orange"},"00_11_00":{color:"yellow",seed:1},"11_01_00":{color:"black",island:1},"11_00_00":{color:"black"},"11_11_00":{color:"purple"},"00_00_00":{color:"white"},"00_01_00":{color:"yellow"},"01_01_01":{color:"yellow"},"01_00_01":{island:1,color:"pink"},"01_00_11":{color:"white"},"01_01_11":{color:"yellow"},"01_11_01":{color:"yellow"},"01_11_11":{color:"yellow"}},seed:{red:"11_00_01",yellow:"00_11_00",white:"00_00_01"}},rose:{island:{pink:"11_00_11_11",orange:"11_11_01_01"},seed:{white:"00_00_01_00",yellow:"00_11_00_00",red:"11_00_00_01"},genomes:{"00_01_11_11":{color:"purple"},"00_00_01_11":{color:"white"},"00_00_00_00":{color:"white"},"01_11_11_01":{color:"pink"},"11_11_11_11":{color:"white"},"11_00_11_11":{color:"pink",island:1},"00_11_00_00":{seed:1,color:"yellow"},"01_00_11_01":{color:"pink"},"01_01_01_01":{color:"pink"},"11_01_01_11":{color:"white"},"11_01_00_00":{color:"orange"},"00_11_01_11":{color:"yellow"},"01_11_01_00":{color:"orange"},"00_01_00_01":{color:"yellow"},"11_11_00_01":{color:"orange"},"01_11_00_11":{color:"yellow"},"01_00_00_11":{color:"white"},"11_00_00_01":{seed:1,color:"red"},"01_00_01_00":{color:"red"},"01_01_11_00":{color:"red"},"00_00_00_11":{color:"white"},"11_11_11_00":{color:"blue"},"00_01_11_00":{color:"purple"},"00_00_01_00":{seed:1,color:"white"},"01_01_00_01":{color:"yellow"},"11_01_00_11":{color:"yellow"},"00_11_01_00":{color:"yellow"},"11_00_11_00":{color:"black"},"00_11_00_11":{color:"yellow"},"11_01_01_00":{color:"red"},"00_01_01_01":{color:"white"},"01_11_00_00":{color:"orange"},"00_00_11_01":{color:"purple"},"11_11_01_01":{island:1,color:"orange"},"01_11_01_11":{color:"yellow"},"01_00_01_11":{color:"white"},"11_00_01_01":{color:"red"},"11_01_11_01":{color:"red"},"01_01_11_11":{color:"purple"},"00_11_11_01":{color:"white"},"01_00_00_00":{color:"red"},"11_11_00_00":{color:"orange"},"00_00_11_11":{color:"purple"},"00_01_01_11":{color:"white"},"00_01_00_00":{color:"yellow"},"11_11_01_11":{color:"yellow"},"01_11_01_01":{color:"yellow"},"11_01_11_11":{color:"purple"},"01_01_11_01":{color:"pink"},"01_00_01_01":{color:"pink"},"11_00_01_11":{color:"pink"},"00_11_11_11":{color:"white"},"11_00_00_00":{color:"black"},"00_00_00_01":{color:"white"},"01_11_11_00":{color:"red"},"01_01_00_11":{color:"yellow"},"11_01_00_01":{color:"orange"},"01_01_01_00":{color:"red"},"01_00_11_00":{color:"red"},"00_11_00_01":{color:"yellow"},"00_01_00_11":{color:"yellow"},"11_11_01_00":{color:"orange"},"11_11_00_11":{color:"yellow"},"01_11_00_01":{color:"yellow"},"00_00_11_00":{color:"purple"},"00_01_01_00":{color:"white"},"01_00_00_01":{color:"pink"},"00_11_11_00":{color:"white"},"11_00_00_11":{color:"pink"},"11_01_11_00":{color:"black"},"11_00_01_00":{color:"black"},"00_00_01_01":{color:"white"},"00_01_11_01":{color:"purple"},"01_11_11_11":{color:"white"},"11_11_11_01":{color:"red"},"01_01_01_11":{color:"white"},"11_01_01_01":{color:"red"},"11_00_11_01":{color:"red"},"01_00_11_11":{color:"purple"},"00_11_01_01":{color:"yellow"},"01_01_00_00":{color:"orange"}},colors:["black","blue","orange","pink","purple","red","white","yellow"]},mum:{colors:["green","pink","purple","red","white","yellow"],seed:{red:"11_00_00",white:"00_00_01",yellow:"00_11_00"},island:{pink:"01_01_11",purple:"11_01_01"},genomes:{"11_11_01":{color:"green"},"11_11_11":{color:"red"},"00_00_01":{color:"white",seed:1},"00_01_01":{color:"yellow"},"00_01_11":{color:"white"},"00_00_11":{color:"purple"},"00_11_01":{color:"yellow"},"00_11_11":{color:"yellow"},"11_00_01":{color:"red"},"11_01_01":{color:"purple",island:1},"11_00_11":{color:"red"},"11_01_11":{color:"red"},"01_11_00":{color:"purple"},"01_01_00":{color:"yellow"},"01_00_00":{color:"pink"},"11_11_00":{color:"green"},"00_01_00":{color:"yellow"},"00_00_00":{color:"white"},"00_11_00":{color:"yellow",seed:1},"11_01_00":{color:"purple"},"11_00_00":{color:"red",seed:1},"01_11_11":{color:"purple"},"01_11_01":{color:"purple"},"01_01_11":{island:1,color:"pink"},"01_00_11":{color:"pink"},"01_01_01":{color:"red"},"01_00_01":{color:"pink"}}}}};!function(e){e.black="black",e.blue="blue",e.orange="orange",e.red="red",e.yellow="yellow",e.purple="purple",e.green="green",e.pink="pink",e.white="white"}(l||(l={})),function(e){e.hyacinth="hyacinth",e.windflower="windflower",e.mum="mum",e.lily="lily",e.pansy="pansy",e.rose="rose",e.tulip="tulip",e.cosmos="cosmos"}(a||(a={})),function(e){e.black="#999",e.blue="#36f",e.orange="#f93",e.red="#f33",e.yellow="#ff3",e.purple="#96f",e.green="#9c0",e.pink="#f9f",e.white="#fff"}(t||(t={}));var y=r(130),h=r.n(y),w={"0000":["00"],"0001":["00","01"],"0011":["01"],"0100":["00","01"],"0101":["00","01","01","11"],"0111":["01","11"],1100:["01"],1101:["01","11"],1111:["11"]},E={0:"00",1:"01",2:"11"},k=["r","R"],v=["y","Y"],j=["W","w"],C=["s","S"],O=[k,v,C],F=[k,v,j],x={rose:[k,v,j,C],cosmos:[k,v,C],lily:O,pansy:F,tulip:O,hyacinth:F,mum:F,windflower:[k,["o","O"],j]},S=f.flowers,N=/(?:[01]{2}(\S)){2,3}[01]{2}/,I=/[\d]{3,4}/,P=/(seed|island) (red|pink|yellow|orange|black|blue|purple|white)/i;function T(e,o){var r=function(e,o){var r=S[e].genomes[o],l=function(e){var o=e.color,r=e.seed,l=e.island,a=o;l?a+=" (island)":r&&(a+=" (seed)");return a}(r);return{species:e,genome:o,backgroundColor:t[r.color],colorDisplayString:l,color:r.color}}(e,o),l=function(e){return e.split("_").map((function(e){return e.split("").reduce((function(e,o){return(parseInt(e,2)+parseInt(o,2)).toString()}))})).join("")}(o),a=function(e,o){var r=o.split("_"),l=x[e];return r.map((function(e,o){return e.split("").map((function(e){return l[o][parseInt(e,2)]})).sort().join("")})).join("-")}(e,o);return Object(b.a)({genome:o,alphaGenome:a,condensedGenome:l,species:e},r)}function G(e,o){var r=[],l=S[e].genomes;return Object.keys(l).forEach((function(a){l[a].color===o&&r.push(T(e,a))})),r}function M(e,o){var r=e.split(","),a=[];return r.forEach((function(e){var r=e.trim(),t=[],n=0;r.toLowerCase()in l&&(n=1,G(o,r.toLowerCase()).forEach((function(e){t=e.genome.split("_"),a.push(t)})));if(!n){var c=N.exec(r);c&&c[1]&&(n=1,t=r.split(c[1]),a.push(t))}if(!n){var _=I.exec(r);_&&_[0]&&(n=1,t=r.split("").map((function(e){return E[parseInt(e,3)]})),a.push(t))}if(!n&&P.exec(r)){var i=r.toLowerCase().split(" "),s=i[0],m=i[1],u=S[o][s][m];t=u.split("_"),a.push(t)}if(!function(e,o){return e.length===x[o].length}(t,o))throw new Error("Could not parse ".concat(e," for species ").concat(o))})),a}function W(e,o){switch(o){case"binary":return e.genome;case"condensed":return e.condensedGenome;case"alpha":return e.alphaGenome;default:return""}}function K(e,o,r,l){try{var a=M(e,l),t=M(o,l),n=[];r&&(n=M(r,l).map((function(e){return e.join("_")})));var c={};a.forEach((function(e){t.forEach((function(o){if(!c[e.join("_")+","+o.join("_")]&&!c[o.join("_")+","+e.join("_")]){var r=[];e.forEach((function(l,a){var t=e[a]+o[a];r.push(w[t])}));var l=function e(o){if(1===o.length)return o[0];var r=o.shift(),l=e(o),a=[];return null===r||void 0===r||r.forEach((function(e){l.forEach((function(o){a.push(e+"_"+o)}))})),a}(r);c[e.join("_")+","+o.join("_")]=l}}))}));var _=[];return Object.keys(c).forEach((function(e){var o={},r=e.split(",");o.parents=r,o.offspring=[];var a={},t=0;c[e].forEach((function(e){a[e]=a[e]?a[e]+1:1,t++})),Object.keys(a).sort().forEach((function(e){var r=T(l,e);o.offspring.push(Object(b.a)({probability:a[e]/t},r))})),n.length&&!h.a.some(o.offspring,(function(e){return h.a.some(n,(function(o){return o===e.genome}))}))||_.push(o)})),{res:_}}catch(i){return{res:[],error:i}}}function B(e,o){var r=e.probability;if("percentage"===o)return 100*r+"%";var l=256/function e(o,r){return 0===r?o:e(r,o%r)}(256*r,256);return r*l+":"+l}var D=r(488),R=r(508),A=r(504),L=r(510),z=Object(m.a)((function(e){return Object(u.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),q=Object.keys(a),H=function(e){var o=e.species,r=e.setSpecies,l=z();return c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,{className:l.formControl},c.a.createElement(R.a,{shrink:!0,id:"species-select-label"},"Species"),c.a.createElement(A.a,{labelId:"species-select-label",id:"species-select",value:o,onChange:function(e){return r(e.target.value)},displayEmpty:!0,className:l.selectEmpty},q.sort().map((function(e){return c.a.createElement(L.a,{key:e,value:e},e)})))))},J=Object(m.a)((function(e){return Object(u.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),Q=function(e){e.genomeFormat,e.probabilityFormat;var o=e.parent1,r=e.parent2,l=e.offspringFilter,a=e.setParent1,t=e.setParent2,n=e.setOffspringFilter,_=e.setRes,i=e.setErr,s=e.species,m=e.setSpecies,u=J(),b=c.a.useCallback((function(e){_([]),m(e)}),[_,m]),f=c.a.useCallback((function(e){i("");var a=K(o,r,l,s);a.error?(i(a.error.message),_([])):_(a.res)}),[l,o,r,i,_,s]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:u.root,noValidate:!0,autoComplete:"off"},c.a.createElement("div",null,c.a.createElement(p.a,{container:!0,alignContent:"center",justify:"center",spacing:0},c.a.createElement(p.a,{item:!0,xs:12,xl:6},c.a.createElement(p.a,{container:!0,justify:"center"},c.a.createElement(p.a,{item:!0,xs:12,sm:6,xl:3},c.a.createElement(d.a,{label:"Parent 1",value:o,onChange:function(e){return a(e.target.value)},helperText:"e.g. 00_01_00, 010, seed red, island pink"})),c.a.createElement(p.a,{item:!0,xs:12,sm:6,xl:3},c.a.createElement(d.a,{label:"Parent 2",value:r,onChange:function(e){return t(e.target.value)}})),c.a.createElement(p.a,{item:!0,xs:12,sm:3},c.a.createElement(H,{species:s,setSpecies:b})),c.a.createElement(p.a,{item:!0,xs:12,sm:4,xl:3},c.a.createElement(d.a,{label:"Offspring Filter",value:l,onChange:function(e){return n(e.target.value)}})))),c.a.createElement(p.a,{item:!0,xs:4},c.a.createElement(g.a,{variant:"contained",color:"primary",disabled:!s,onClick:f},"Calculate"))))))},V=r(133),Y=r(494),$=r(495),U=r(496),X=r(512),Z=r(497),ee=r(498),oe=r(513),re=r(499);function le(e,o,r){return o[r]<e[r]?-1:o[r]>e[r]?1:0}var ae=Object(m.a)((function(e){return Object(u.a)({offspringChip:{width:"100%",border:"1px solid black",fontWeight:"bold"},root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})}));function te(e){var o=e.classes,r=e.order,l=e.orderBy,a=e.onRequestSort,t=e.showProbability,n=void 0===t||t,_=e.showGenome,i=void 0===_||_,s=[].concat(Object(V.a)(i?[{sortKey:"genome",numeric:!1,disablePadding:!0,label:"Genome"}]:[]),[{sortKey:"colorDisplayString",numeric:!1,disablePadding:!1,label:"Color"}],Object(V.a)(n?[{sortKey:"probability",numeric:!0,disablePadding:!1,label:"Probability"}]:[]));return c.a.createElement(Y.a,null,c.a.createElement($.a,null,s.map((function(e){return c.a.createElement(U.a,{key:e.sortKey,align:"center",padding:"none",sortDirection:l===e.sortKey&&r},c.a.createElement(X.a,{active:l===e.sortKey,direction:l===e.sortKey?r:"asc",onClick:(t=e.sortKey,function(e){a(e,t)}),hideSortIcon:!0},e.label,l===e.sortKey?c.a.createElement("span",{className:o.visuallyHidden},"desc"===r?"sorted descending":"sorted ascending"):null));var t}))))}var ne=c.a.memo((function(e){var o=e.offspring,r=e.genomeFormat,l=e.showProbability,a=void 0===l||l,t=e.showGenome,n=void 0===t||t,_=e.probabilityFormat,i=void 0===_?"percentage":_,m=ae(),u=c.a.useState("asc"),p=Object(s.a)(u,2),d=p[0],g=p[1],b=c.a.useState("genome"),f=Object(s.a)(b,2),y=f[0],h=f[1];return c.a.createElement(Z.a,{size:"small",padding:"none"},c.a.createElement(te,{classes:m,order:d,orderBy:y,onRequestSort:function(e,o){g(y===o&&"asc"===d?"desc":"asc"),h(o)},showProbability:a,showGenome:n}),c.a.createElement(ee.a,null,function(e,o){var r=e.map((function(e,o){return[e,o]}));return r.sort((function(e,r){var l=o(e[0],r[0]);return 0!==l?l:e[1]-r[1]})),r.map((function(e){return e[0]}))}(o,function(e,o){return"desc"===e?function(e,r){return le(e,r,o)}:function(e,r){return-le(e,r,o)}}(d,y)).map((function(e){return c.a.createElement($.a,{key:e.genome},n&&c.a.createElement(U.a,{align:"center"},W(e,r)),c.a.createElement(U.a,{align:"center"},c.a.createElement(oe.a,{style:{backgroundColor:e.backgroundColor},className:m.offspringChip,label:c.a.createElement(re.a,{variant:"subtitle2"},e.colorDisplayString)})),a&&c.a.createElement(U.a,{align:"center"},B(e,i)))}))))})),ce=function(e){var o=e.headers,r=e.resultsTable,l=e.cornerIcon;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"dialogue-character-wrap"},o.map((function(e){var o=e.backgroundColor,r=e.key,l=e.text;return c.a.createElement("div",{className:"dialogue-character",style:{backgroundColor:o},key:r},c.a.createElement("slot",{name:"character"},c.a.createElement("b",null,l)))}))),c.a.createElement("div",{className:"dialogue"},c.a.createElement("div",{className:"dialogue-text"},l,r)))},_e=ce,ie=f.flowers,se=Object(m.a)((function(e){return Object(u.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),me=function(e){var o=e.genomeFormat,r=e.species,l=e.setSpecies,a=e.color,n=e.setColor,_=se(),i=G(r,a);return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{container:!0,justify:"center"},c.a.createElement(p.a,{item:!0},c.a.createElement(H,{species:r,setSpecies:l})),c.a.createElement(p.a,{item:!0},c.a.createElement(D.a,{className:_.formControl},c.a.createElement(R.a,{shrink:!0,id:"color-select-label"},"Color"),c.a.createElement(A.a,{labelId:"color-select-label",id:"color-select",value:a,onChange:function(e){return n(e.target.value)},displayEmpty:!0,className:_.selectEmpty},r&&ie[r].colors.map((function(e){return c.a.createElement(L.a,{key:e,value:e},e)})))))),c.a.createElement(p.a,{container:!0,className:"resultsContainer",alignItems:"flex-start",alignContent:"center",justify:"center",spacing:0},c.a.createElement(p.a,{item:!0,xs:12,sm:6,md:4,xl:3,component:"div"},c.a.createElement(_e,{headers:[{backgroundColor:t[a],key:"key",text:a+" "+r}],resultsTable:c.a.createElement(ne,{offspring:i,genomeFormat:o,showProbability:!1})}))))},ue=r(197),pe=r.n(ue),de=r(215),ge=r(501),be=r(502),fe=r(505),ye=r(503),he=r(506),we=r(514),Ee=r(500),ke=Object(m.a)((function(e){return Object(u.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),ve=function(e){var o=e.genomeFormat,r=e.setGenomeFormat,l=ke();return c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,{className:l.formControl},c.a.createElement(R.a,{shrink:!0,id:"format-select-label"},"Genome Display"),c.a.createElement(A.a,{labelId:"species-select-label",id:"species-select",value:o,onChange:function(e){return r(e.target.value)},displayEmpty:!0,className:l.selectEmpty},["binary","condensed","alpha"].map((function(e){return c.a.createElement(L.a,{key:e,value:e},e)})))))},je=Object(m.a)((function(e){return Object(u.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),Ce=function(e){var o=e.probabilityFormat,r=e.setProbabilityFormat,l=je();return c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,{className:l.formControl},c.a.createElement(R.a,{shrink:!0,id:"format-select-label"},"Probability Display"),c.a.createElement(A.a,{labelId:"species-select-label",id:"species-select",value:o,onChange:function(e){return r(e.target.value)},displayEmpty:!0,className:l.selectEmpty},["percentage","fraction"].map((function(e){return c.a.createElement(L.a,{key:e,value:e},e)})))))},Oe=r(212),Fe=r.n(Oe),xe=r(213),Se=r.n(xe),Ne=r(214),Ie=r.n(Ne),Pe=function(e){var o=e.icon,r=e.handler;return c.a.createElement("span",{className:"corner-icon",onClick:r},o)},Te=r(198),Ge=r.n(Te),Me=function(e){var o=e.pairing,r=e.showChart,l=o.parents,a=o.offspring,t=o.species,n=o.genomeFormat,_=o.probabilityFormat,i=[T(t,l[0]),T(t,l[1])].map((function(e){return{text:W(e,n),key:e.genome,backgroundColor:e.backgroundColor}}));return c.a.createElement(ce,{headers:i,cornerIcon:c.a.createElement(Pe,{handler:function(){r(o)},icon:c.a.createElement(Ge.a,null)}),resultsTable:c.a.createElement(ne,{offspring:a,genomeFormat:n,probabilityFormat:_})})},We=c.a.memo((function(e){var o=e.res,r=e.err,l=e.species,a=e.genomeFormat,t=e.probabilityFormat,n=e.showChart;return c.a.createElement(p.a,{container:!0,className:"resultsContainer",alignItems:"flex-start",alignContent:"center",justify:"center",spacing:0},c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(p.a,{container:!0,spacing:3,alignItems:"flex-start",alignContent:"center",justify:"center"},r&&c.a.createElement(re.a,{color:"error",variant:"h6"},r),o.map((function(e){return c.a.createElement(p.a,{item:!0,xs:12,sm:6,md:4,xl:3,key:e.parents.join("x"),component:"div"},c.a.createElement(Me,{key:e.parents.join("x"),pairing:Object(b.a)({species:l,genomeFormat:a,probabilityFormat:t},e),showChart:n}))})))))})),Ke=r(80),Be=r(211),De=r.n(Be),Re=function(e){var o=e.pairing,r=e.probabilityFormat,l=e.closeModal,a=e.genomeFormat,n={};o.offspring.forEach((function(e){var o=e.color;n[o]=n[o]?n[o]+e.probability:e.probability}));var _=o.parents,i=o.species,s=[T(i,_[0]),T(i,_[1])].map((function(e){return{text:W(e,a),key:e.genome,backgroundColor:e.backgroundColor}})),m=Object.keys(n).map((function(e){return{genome:e,colorDisplayString:e,backgroundColor:t[e],color:e,probability:n[e]}})),u=m.map((function(e){return{name:e.color,value:e.probability,color:t[e.color]}})),d=Math.PI/180;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"breakdown-bubble-container"},c.a.createElement(_e,{headers:s,cornerIcon:c.a.createElement(Pe,{icon:c.a.createElement(De.a,null),handler:l}),resultsTable:c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xs:12,md:6},c.a.createElement("div",{className:"pie-container"},c.a.createElement(Ke.d,null,c.a.createElement(Ke.c,null,c.a.createElement(Ke.b,{data:u,dataKey:"value",label:function(e){var o=e.cx,r=e.cy,l=e.midAngle,a=e.innerRadius,t=e.outerRadius,n=e.percent,_=(e.index,a+.5*(t-a)),i=o+_*Math.cos(-l*d),s=r+_*Math.sin(-l*d);return c.a.createElement("text",{x:i,y:s,fill:"black",textAnchor:i>o?"start":"end",dominantBaseline:"central",fontSize:"12px"},"".concat(100*n,"%"))},labelLine:!1},u.map((function(e,o){return c.a.createElement(Ke.a,{key:"cell-".concat(o),fill:u[o].color})}))))))),c.a.createElement(p.a,{item:!0,xs:12,md:4},c.a.createElement(ne,{offspring:m,showGenome:!1,genomeFormat:"binary",probabilityFormat:r}))))})))},Ae=Object(de.a)({typography:{fontFamily:"Quicksand",fontSize:12,fontWeightBold:"bold"},palette:{primary:{main:Ee.a[500]},secondary:{main:"#11cb5f"}}});var Le=function(){var e=Object(n.useState)(0),o=Object(s.a)(e,2),r=o[0],l=o[1];function t(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var _=Object(n.useState)(localStorage.getItem("acnh_calc_genome_format")||"binary"),i=Object(s.a)(_,2),m=i[0],u=i[1],p=Object(n.useState)(localStorage.getItem("acnh_calc_prob_format")||"percentage"),d=Object(s.a)(p,2),g=d[0],b=d[1],y=Object(n.useState)(""),h=Object(s.a)(y,2),w=h[0],E=h[1],k=Object(n.useState)(""),v=Object(s.a)(k,2),j=v[0],C=v[1],O=Object(n.useState)(""),F=Object(s.a)(O,2),x=F[0],S=F[1],N=Object(n.useState)(""),I=Object(s.a)(N,2),P=I[0],T=I[1],G=Object(n.useState)([]),M=Object(s.a)(G,2),W=M[0],K=M[1],B=Object.keys(a),D=Object(n.useState)(B[0]),R=Object(s.a)(D,2),A=R[0],L=R[1],z=Object(n.useState)(f.flowers[A].colors[0]),q=Object(s.a)(z,2),H=q[0],J=q[1],V=Object(n.useState)(!1),Y=Object(s.a)(V,2),$=Y[0],U=Y[1],X=Object(n.useState)({}),Z=Object(s.a)(X,2),ee=Z[0],oe=Z[1],re=c.a.useCallback((function(e){K([]),L(e)}),[K,L]),le=function(){U(!1)},ae=c.a.useCallback((function(e){oe(e),U(!0)}),[oe,U]),te=c.a.useCallback((function(e){b(e),localStorage.setItem("acnh_calc_prob_format",e)}),[b]),ne=c.a.useCallback((function(e){u(e),localStorage.setItem("acnh_calc_genome_format",e)}),[u]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Quicksand:400,700",rel:"stylesheet",type:"text/css"}),c.a.createElement(ge.a,{theme:Ae},c.a.createElement("div",{className:"App"},c.a.createElement(be.a,{position:"static",color:"secondary"},c.a.createElement(fe.a,{value:r,onChange:function(e,o){l(o)},indicatorColor:"primary",textColor:"primary","aria-label":"scrollable auto tabs example",centered:!0},c.a.createElement(ye.a,Object.assign({icon:c.a.createElement(Fe.a,null)},t(0))),c.a.createElement(ye.a,Object.assign({icon:c.a.createElement(Se.a,null)},t(1))),c.a.createElement(ye.a,Object.assign({icon:c.a.createElement(Ie.a,null)},t(2))))),c.a.createElement(pe.a,{axis:"x",index:r,onChangeIndex:function(e){l(e)}},c.a.createElement("div",{className:"swipeable"},c.a.createElement(Q,{genomeFormat:m,probabilityFormat:g,parent1:w,parent2:j,setParent1:E,setParent2:C,offspringFilter:P,setOffspringFilter:T,setErr:S,setRes:K,species:A,setSpecies:re}),c.a.createElement(We,{res:W,err:x,species:A,genomeFormat:m,probabilityFormat:g,showChart:ae}),c.a.createElement(he.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:$,onClose:le,closeAfterTransition:!0,BackdropComponent:we.a,BackdropProps:{timeout:500}},c.a.createElement(Re,{pairing:ee,probabilityFormat:g,genomeFormat:m,closeModal:le}))),c.a.createElement("div",{className:"swipeable"},c.a.createElement(me,{genomeFormat:m,species:A,setSpecies:re,color:H,setColor:J})),c.a.createElement("div",{className:"swipeable"},c.a.createElement(ve,{genomeFormat:m,setGenomeFormat:ne}),c.a.createElement(Ce,{probabilityFormat:g,setProbabilityFormat:te}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[250,1,2]]]);
//# sourceMappingURL=main.8b7cedaf.chunk.js.map