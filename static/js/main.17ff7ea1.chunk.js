(this.webpackJsonpacnh_genome_calculator=this.webpackJsonpacnh_genome_calculator||[]).push([[0],{249:function(e,o,r){e.exports=r(453)},254:function(e,o,r){},255:function(e,o,r){},256:function(e,o,r){},453:function(e,o,r){"use strict";r.r(o);var l,a,t,n=r(1),c=r.n(n),_=r(14),i=r.n(_),s=(r(254),r(18)),m=(r(255),r(256),r(77)),u=r(484),p=r(506),d=r(497),g=r(512),b=r(498),y=r(493),f=r(505),w=r(513),h={flowers:{hyacinth:{island:{orange:"01_11_00",pink:"01_00_01",blue:"11_01_00"},seed:{white:"00_00_01",yellow:"00_11_00",red:"11_00_01"},genomes:{"01_01_01":{color:"yellow"},"01_00_01":{color:"pink",island:1},"01_01_11":{color:"yellow"},"01_00_11":{color:"white"},"01_11_01":{color:"yellow"},"01_11_11":{color:"yellow"},"11_01_00":{island:1,color:"blue"},"11_00_00":{color:"red"},"00_11_00":{seed:1,color:"yellow"},"00_00_00":{color:"white"},"00_01_00":{color:"yellow"},"11_11_00":{color:"purple"},"01_01_00":{color:"orange"},"01_00_00":{color:"red"},"01_11_00":{color:"orange",island:1},"11_01_11":{color:"red"},"11_00_11":{color:"red"},"11_00_01":{seed:1,color:"red"},"11_01_01":{color:"red"},"00_11_11":{color:"yellow"},"00_11_01":{color:"yellow"},"00_01_11":{color:"white"},"00_00_11":{color:"blue"},"00_01_01":{color:"yellow"},"00_00_01":{color:"white",seed:1},"11_11_11":{color:"purple"},"11_11_01":{color:"purple"}},colors:["blue","orange","pink","purple","red","white","yellow"]},windflower:{colors:["blue","orange","pink","purple","red","white"],island:{blue:"01_00_11",pink:"11_11_01"},seed:{white:"00_00_01",orange:"00_11_00",red:"11_00_00"},genomes:{"01_11_00":{color:"orange"},"01_00_00":{color:"red"},"01_01_00":{color:"pink"},"00_00_01":{color:"white",seed:1},"00_01_01":{color:"orange"},"00_00_11":{color:"blue"},"00_01_11":{color:"blue"},"11_11_01":{island:1,color:"pink"},"11_11_11":{color:"purple"},"11_01_01":{color:"red"},"11_00_01":{color:"red"},"11_00_11":{color:"purple"},"11_01_11":{color:"purple"},"00_11_01":{color:"orange"},"00_11_11":{color:"orange"},"01_11_11":{color:"orange"},"01_11_01":{color:"orange"},"01_00_11":{color:"blue",island:1},"01_01_11":{color:"pink"},"01_00_01":{color:"red"},"01_01_01":{color:"pink"},"00_00_00":{color:"white"},"00_01_00":{color:"orange"},"11_11_00":{color:"pink"},"11_01_00":{color:"red"},"11_00_00":{seed:1,color:"red"},"00_11_00":{color:"orange",seed:1}}},cosmos:{island:{orange:"11_01_01",pink:"01_01_11"},seed:{white:"00_00_01",yellow:"00_11_01",red:"11_00_00"},genomes:{"01_00_01":{color:"pink"},"01_01_01":{color:"orange"},"01_01_11":{island:1,color:"pink"},"01_00_11":{color:"pink"},"01_11_01":{color:"orange"},"01_11_11":{color:"orange"},"11_00_00":{color:"red",seed:1},"11_01_00":{color:"orange"},"00_11_00":{color:"yellow"},"00_00_00":{color:"white"},"00_01_00":{color:"yellow"},"11_11_00":{color:"black"},"01_00_00":{color:"pink"},"01_01_00":{color:"orange"},"01_11_00":{color:"orange"},"11_00_11":{color:"red"},"11_01_11":{color:"red"},"11_01_01":{island:1,color:"orange"},"11_00_01":{color:"red"},"00_11_11":{color:"yellow"},"00_11_01":{seed:1,color:"yellow"},"00_01_11":{color:"white"},"00_00_11":{color:"white"},"00_00_01":{seed:1,color:"white"},"00_01_01":{color:"yellow"},"11_11_11":{color:"red"},"11_11_01":{color:"black"}},colors:["black","orange","pink","red","white","yellow"]},pansy:{colors:["blue","orange","purple","red","white","yellow"],seed:{red:"11_00_00",yellow:"00_11_00",white:"00_00_01"},island:{orange:"11_11_01",blue:"01_00_11"},genomes:{"11_01_00":{color:"red"},"11_00_00":{seed:1,color:"red"},"00_11_00":{seed:1,color:"yellow"},"00_01_00":{color:"yellow"},"00_00_00":{color:"white"},"11_11_00":{color:"orange"},"01_01_01":{color:"orange"},"01_00_01":{color:"red"},"01_00_11":{island:1,color:"blue"},"01_01_11":{color:"orange"},"01_11_01":{color:"yellow"},"01_11_11":{color:"yellow"},"11_00_11":{color:"purple"},"11_01_11":{color:"purple"},"11_01_01":{color:"red"},"11_00_01":{color:"red"},"00_11_11":{color:"yellow"},"00_11_01":{color:"yellow"},"00_00_11":{color:"blue"},"00_01_11":{color:"blue"},"00_01_01":{color:"yellow"},"00_00_01":{color:"white",seed:1},"11_11_11":{color:"purple"},"11_11_01":{color:"orange",island:1},"01_00_00":{color:"red"},"01_01_00":{color:"orange"},"01_11_00":{color:"yellow"}}},lily:{colors:["black","orange","pink","red","white","yellow"],seed:{yellow:"00_11_00",white:"00_00_11",red:"11_00_01"},island:{orange:"11_11_01",black:"11_01_00",pink:"11_01_11"},genomes:{"01_11_00":{color:"orange"},"01_01_00":{color:"orange"},"01_00_00":{color:"red"},"00_00_11":{color:"white",seed:1},"00_01_11":{color:"white"},"00_00_01":{color:"white"},"00_01_01":{color:"white"},"11_11_11":{color:"white"},"11_11_01":{color:"orange",island:1},"11_01_11":{color:"pink",island:1},"11_00_11":{color:"pink"},"11_01_01":{color:"red"},"11_00_01":{seed:1,color:"red"},"00_11_11":{color:"white"},"00_11_01":{color:"yellow"},"01_11_01":{color:"yellow"},"01_11_11":{color:"yellow"},"01_01_01":{color:"yellow"},"01_00_01":{color:"pink"},"01_01_11":{color:"yellow"},"01_00_11":{color:"white"},"00_01_00":{color:"yellow"},"00_00_00":{color:"white"},"11_11_00":{color:"orange"},"11_01_00":{island:1,color:"black"},"11_00_00":{color:"black"},"00_11_00":{seed:1,color:"yellow"}}},tulip:{colors:["black","orange","pink","purple","red","white","yellow"],island:{black:"11_01_00",orange:"01_11_00",pink:"01_00_01"},genomes:{"00_11_11":{color:"yellow"},"00_11_01":{color:"yellow"},"11_00_11":{color:"red"},"11_01_11":{color:"red"},"11_00_01":{seed:1,color:"red"},"11_01_01":{color:"red"},"11_11_11":{color:"purple"},"11_11_01":{color:"purple"},"00_00_11":{color:"white"},"00_01_11":{color:"white"},"00_00_01":{color:"white",seed:1},"00_01_01":{color:"yellow"},"01_00_00":{color:"red"},"01_01_00":{color:"orange"},"01_11_00":{island:1,color:"orange"},"00_11_00":{color:"yellow",seed:1},"11_01_00":{color:"black",island:1},"11_00_00":{color:"black"},"11_11_00":{color:"purple"},"00_00_00":{color:"white"},"00_01_00":{color:"yellow"},"01_01_01":{color:"yellow"},"01_00_01":{island:1,color:"pink"},"01_00_11":{color:"white"},"01_01_11":{color:"yellow"},"01_11_01":{color:"yellow"},"01_11_11":{color:"yellow"}},seed:{red:"11_00_01",yellow:"00_11_00",white:"00_00_01"}},rose:{island:{pink:"11_00_11_11",orange:"11_11_01_01"},seed:{white:"00_00_01_00",yellow:"00_11_00_00",red:"11_00_00_01"},genomes:{"00_01_11_11":{color:"purple"},"00_00_01_11":{color:"white"},"00_00_00_00":{color:"white"},"01_11_11_01":{color:"pink"},"11_11_11_11":{color:"white"},"11_00_11_11":{color:"pink",island:1},"00_11_00_00":{seed:1,color:"yellow"},"01_00_11_01":{color:"pink"},"01_01_01_01":{color:"pink"},"11_01_01_11":{color:"white"},"11_01_00_00":{color:"orange"},"00_11_01_11":{color:"yellow"},"01_11_01_00":{color:"orange"},"00_01_00_01":{color:"yellow"},"11_11_00_01":{color:"orange"},"01_11_00_11":{color:"yellow"},"01_00_00_11":{color:"white"},"11_00_00_01":{seed:1,color:"red"},"01_00_01_00":{color:"red"},"01_01_11_00":{color:"red"},"00_00_00_11":{color:"white"},"11_11_11_00":{color:"blue"},"00_01_11_00":{color:"purple"},"00_00_01_00":{seed:1,color:"white"},"01_01_00_01":{color:"yellow"},"11_01_00_11":{color:"yellow"},"00_11_01_00":{color:"yellow"},"11_00_11_00":{color:"black"},"00_11_00_11":{color:"yellow"},"11_01_01_00":{color:"red"},"00_01_01_01":{color:"white"},"01_11_00_00":{color:"orange"},"00_00_11_01":{color:"purple"},"11_11_01_01":{island:1,color:"orange"},"01_11_01_11":{color:"yellow"},"01_00_01_11":{color:"white"},"11_00_01_01":{color:"red"},"11_01_11_01":{color:"red"},"01_01_11_11":{color:"purple"},"00_11_11_01":{color:"white"},"01_00_00_00":{color:"red"},"11_11_00_00":{color:"orange"},"00_00_11_11":{color:"purple"},"00_01_01_11":{color:"white"},"00_01_00_00":{color:"yellow"},"11_11_01_11":{color:"yellow"},"01_11_01_01":{color:"yellow"},"11_01_11_11":{color:"purple"},"01_01_11_01":{color:"pink"},"01_00_01_01":{color:"pink"},"11_00_01_11":{color:"pink"},"00_11_11_11":{color:"white"},"11_00_00_00":{color:"black"},"00_00_00_01":{color:"white"},"01_11_11_00":{color:"red"},"01_01_00_11":{color:"yellow"},"11_01_00_01":{color:"orange"},"01_01_01_00":{color:"red"},"01_00_11_00":{color:"red"},"00_11_00_01":{color:"yellow"},"00_01_00_11":{color:"yellow"},"11_11_01_00":{color:"orange"},"11_11_00_11":{color:"yellow"},"01_11_00_01":{color:"yellow"},"00_00_11_00":{color:"purple"},"00_01_01_00":{color:"white"},"01_00_00_01":{color:"pink"},"00_11_11_00":{color:"white"},"11_00_00_11":{color:"pink"},"11_01_11_00":{color:"black"},"11_00_01_00":{color:"black"},"00_00_01_01":{color:"white"},"00_01_11_01":{color:"purple"},"01_11_11_11":{color:"white"},"11_11_11_01":{color:"red"},"01_01_01_11":{color:"white"},"11_01_01_01":{color:"red"},"11_00_11_01":{color:"red"},"01_00_11_11":{color:"purple"},"00_11_01_01":{color:"yellow"},"01_01_00_00":{color:"orange"}},colors:["black","blue","orange","pink","purple","red","white","yellow"]},mum:{colors:["green","pink","purple","red","white","yellow"],seed:{red:"11_00_00",white:"00_00_01",yellow:"00_11_00"},island:{pink:"01_01_11",purple:"11_01_01"},genomes:{"11_11_01":{color:"green"},"11_11_11":{color:"red"},"00_00_01":{color:"white",seed:1},"00_01_01":{color:"yellow"},"00_01_11":{color:"white"},"00_00_11":{color:"purple"},"00_11_01":{color:"yellow"},"00_11_11":{color:"yellow"},"11_00_01":{color:"red"},"11_01_01":{color:"purple",island:1},"11_00_11":{color:"red"},"11_01_11":{color:"red"},"01_11_00":{color:"purple"},"01_01_00":{color:"yellow"},"01_00_00":{color:"pink"},"11_11_00":{color:"green"},"00_01_00":{color:"yellow"},"00_00_00":{color:"white"},"00_11_00":{color:"yellow",seed:1},"11_01_00":{color:"purple"},"11_00_00":{color:"red",seed:1},"01_11_11":{color:"purple"},"01_11_01":{color:"purple"},"01_01_11":{island:1,color:"pink"},"01_00_11":{color:"pink"},"01_01_01":{color:"red"},"01_00_01":{color:"pink"}}}}};!function(e){e.black="black",e.blue="blue",e.orange="orange",e.red="red",e.yellow="yellow",e.purple="purple",e.green="green",e.pink="pink",e.white="white"}(l||(l={})),function(e){e.hyacinth="hyacinth",e.windflower="windflower",e.mum="mum",e.lily="lily",e.pansy="pansy",e.rose="rose",e.tulip="tulip",e.cosmos="cosmos"}(a||(a={})),function(e){e.black="#999",e.blue="#36f",e.orange="#f93",e.red="#f33",e.yellow="#ff3",e.purple="#96f",e.green="#9c0",e.pink="#f9f",e.white="#fff"}(t||(t={}));var E={"0000":["00"],"0001":["00","01"],"0011":["01"],"0100":["00","01"],"0101":["00","01","01","11"],"0111":["01","11"],1100:["01"],1101:["01","11"],1111:["11"]},k={0:"00",1:"01",2:"11"},v=["r","R"],j=["y","Y"],C=["W","w"],x=["s","S"],O=[v,j,x],F=[v,j,C],S={rose:[v,j,C,x],cosmos:[v,j,x],lily:O,pansy:F,tulip:O,hyacinth:F,mum:F,windflower:[v,["o","O"],C]},I=h.flowers,N=/(?:[01]{2}(\S)){2,3}[01]{2}/,P=/[\d]{3,4}/,T=/(seed|island) (red|pink|yellow|orange|black|blue|purple|white)/i;function G(e,o){var r=function(e,o){var r=I[e].genomes[o],l=function(e){var o=e.color,r=e.seed,l=e.island,a=o;l?a+=" (island)":r&&(a+=" (seed)");return a}(r);return{species:e,genome:o,backgroundColor:t[r.color],colorDisplayString:l,color:r.color}}(e,o),l=function(e){return e.split("_").map((function(e){return e.split("").reduce((function(e,o){return(parseInt(e,2)+parseInt(o,2)).toString()}))})).join("")}(o),a=function(e,o){var r=o.split("_"),l=S[e];return r.map((function(e,o){return e.split("").map((function(e){return l[o][parseInt(e,2)]})).sort().join("")})).join("-")}(e,o);return Object(m.a)({genome:o,alphaGenome:a,condensedGenome:l,species:e},r)}function M(e,o){var r=[],l=I[e].genomes;return Object.keys(l).forEach((function(a){l[a].color===o&&r.push(G(e,a))})),r}function W(e,o){var r=e.split(","),a=[];return r.forEach((function(e){var r=e.trim(),t=[],n=0;r.toLowerCase()in l&&(n=1,M(o,r.toLowerCase()).forEach((function(e){t=e.genome.split("_"),a.push(t)})));if(!n){var c=N.exec(r);c&&c[1]&&(n=1,t=r.split(c[1]),a.push(t))}if(!n){var _=P.exec(r);_&&_[0]&&(n=1,t=r.split("").map((function(e){return k[parseInt(e,3)]})),a.push(t))}if(!n&&T.exec(r)){var i=r.toLowerCase().split(" "),s=i[0],m=i[1],u=I[o][s][m];t=u.split("_"),a.push(t)}if(!function(e,o){return e.length===S[o].length}(t,o))throw new Error("Could not parse parent ".concat(e," for species ").concat(o))})),a}function K(e,o){switch(o){case"binary":return e.genome;case"condensed":return e.condensedGenome;case"alpha":return e.alphaGenome;default:return""}}function B(e,o,r){try{var l=W(e,r),a=W(o,r),t={};l.forEach((function(e){a.forEach((function(o){if(!t[e.join("_")+","+o.join("_")]&&!t[o.join("_")+","+e.join("_")]){var r=[];e.forEach((function(l,a){var t=e[a]+o[a];r.push(E[t])}));var l=function e(o){if(1===o.length)return o[0];var r=o.shift(),l=e(o),a=[];return null===r||void 0===r||r.forEach((function(e){l.forEach((function(o){a.push(e+"_"+o)}))})),a}(r);t[e.join("_")+","+o.join("_")]=l}}))}));var n=[];return Object.keys(t).forEach((function(e){var o={},l=e.split(",");o.parents=l,o.offspring=[];var a={},c=0;t[e].forEach((function(e){a[e]=a[e]?a[e]+1:1,c++})),Object.keys(a).sort().forEach((function(e){var l=G(r,e);o.offspring.push(Object(m.a)({probability:a[e]/c},l))})),n.push(o)})),{res:n}}catch(c){return{res:[],error:c}}}function D(e,o){var r=e.probability;if("percentage"===o)return 100*r+"%";var l=256/function e(o,r){return 0===r?o:e(r,o%r)}(256*r,256);return r*l+":"+l}var R=r(131),z=r(487),A=r(489),L=r(490),q=r(507),H=r(491),J=r(492),Q=r(508);function V(e,o,r){return o[r]<e[r]?-1:o[r]>e[r]?1:0}var Y=Object(u.a)((function(e){return Object(p.a)({offspringChip:{width:"100%",border:"1px solid black",fontWeight:"bold"},root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})}));function $(e){var o=e.classes,r=e.order,l=e.orderBy,a=e.onRequestSort,t=e.showProbability,n=void 0===t||t,_=e.showGenome,i=void 0===_||_,s=[].concat(Object(R.a)(i?[{sortKey:"genome",numeric:!1,disablePadding:!0,label:"Genome"}]:[]),[{sortKey:"colorDisplayString",numeric:!1,disablePadding:!1,label:"Color"}],Object(R.a)(n?[{sortKey:"probability",numeric:!0,disablePadding:!1,label:"Probability"}]:[]));return c.a.createElement(z.a,null,c.a.createElement(A.a,null,s.map((function(e){return c.a.createElement(L.a,{key:e.sortKey,align:"center",padding:"none",sortDirection:l===e.sortKey&&r},c.a.createElement(q.a,{active:l===e.sortKey,direction:l===e.sortKey?r:"asc",onClick:(t=e.sortKey,function(e){a(e,t)}),hideSortIcon:!0},e.label,l===e.sortKey?c.a.createElement("span",{className:o.visuallyHidden},"desc"===r?"sorted descending":"sorted ascending"):null));var t}))))}var U=function(e){var o=e.offspring,r=e.genomeFormat,l=e.showProbability,a=void 0===l||l,t=e.showGenome,n=void 0===t||t,_=e.probabilityFormat,i=void 0===_?"percentage":_,m=Y(),u=c.a.useState("asc"),p=Object(s.a)(u,2),d=p[0],g=p[1],b=c.a.useState("genome"),f=Object(s.a)(b,2),w=f[0],h=f[1];return c.a.createElement(H.a,{size:"small",padding:"none"},c.a.createElement($,{classes:m,order:d,orderBy:w,onRequestSort:function(e,o){g(w===o&&"asc"===d?"desc":"asc"),h(o)},showProbability:a,showGenome:n}),c.a.createElement(J.a,null,function(e,o){var r=e.map((function(e,o){return[e,o]}));return r.sort((function(e,r){var l=o(e[0],r[0]);return 0!==l?l:e[1]-r[1]})),r.map((function(e){return e[0]}))}(o,function(e,o){return"desc"===e?function(e,r){return V(e,r,o)}:function(e,r){return-V(e,r,o)}}(d,w)).map((function(e){return c.a.createElement(A.a,{key:e.genome},n&&c.a.createElement(L.a,{align:"center"},K(e,r)),c.a.createElement(L.a,{align:"center"},c.a.createElement(Q.a,{style:{backgroundColor:e.backgroundColor},className:m.offspringChip,label:c.a.createElement(y.a,{variant:"subtitle2"},e.colorDisplayString)})),a&&c.a.createElement(L.a,{align:"center"},D(e,i)))}))))},X=function(e){var o=e.headers,r=e.resultsTable,l=e.cornerIcon;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"dialogue-character-wrap"},o.map((function(e){var o=e.backgroundColor,r=e.key,l=e.text;return c.a.createElement("div",{className:"dialogue-character",style:{backgroundColor:o},key:r},c.a.createElement("slot",{name:"character"},c.a.createElement("b",null,l)))}))),c.a.createElement("div",{className:"dialogue"},c.a.createElement("div",{className:"dialogue-text"},l,r)))},Z=X,ee=r(196),oe=r.n(ee),re=function(e){var o=e.showChart;return c.a.createElement("span",{onClick:o,style:{position:"absolute",top:"10px",right:"27px",zIndex:3}},c.a.createElement(oe.a,{fontSize:"small",style:{position:"absolute"}}))},le=function(e){var o=e.pairing,r=e.showChart,l=o.parents,a=o.offspring,t=o.species,n=o.genomeFormat,_=o.probabilityFormat,i=[G(t,l[0]),G(t,l[1])].map((function(e){return{text:K(e,n),key:e.genome,backgroundColor:e.backgroundColor}}));return c.a.createElement(X,{headers:i,cornerIcon:c.a.createElement(re,{showChart:function(){r(o)}}),resultsTable:c.a.createElement(U,{offspring:a,genomeFormat:n,probabilityFormat:_})})},ae=r(494),te=r(509),ne=r(503),ce=r(511),_e=Object(u.a)((function(e){return Object(p.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),ie=Object.keys(a),se=function(e){var o=e.species,r=e.setSpecies,l=_e();return c.a.createElement(c.a.Fragment,null,c.a.createElement(ae.a,{className:l.formControl},c.a.createElement(te.a,{shrink:!0,id:"species-select-label"},"Species"),c.a.createElement(ne.a,{labelId:"species-select-label",id:"species-select",value:o,onChange:function(e){return r(e.target.value)},displayEmpty:!0,className:l.selectEmpty},ie.sort().map((function(e){return c.a.createElement(ce.a,{key:e,value:e},e)})))))},me=r(80),ue=r(209),pe=r.n(ue),de=function(e){var o=e.pairing,r=e.probabilityFormat,l=e.closeModal,a=e.genomeFormat,n={};o.offspring.forEach((function(e){var o=e.color;n[o]=n[o]?n[o]+e.probability:e.probability}));var _=o.parents,i=o.species,s=[G(i,_[0]),G(i,_[1])].map((function(e){return{text:K(e,a),key:e.genome,backgroundColor:e.backgroundColor}})),m=Object.keys(n).map((function(e){return{genome:e,colorDisplayString:e,backgroundColor:t[e],color:e,probability:n[e]}})),u=m.map((function(e){return{name:e.color,value:e.probability,color:t[e.color]}})),p=Math.PI/180;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"breakdown-bubble-container"},c.a.createElement(Z,{headers:s,cornerIcon:c.a.createElement("span",{onClick:l,style:{position:"absolute",top:"-10px",right:"27px",zIndex:3}},c.a.createElement(pe.a,null)),resultsTable:c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:12,md:6},c.a.createElement("div",{className:"pie-container"},c.a.createElement(me.d,null,c.a.createElement(me.c,null,c.a.createElement(me.b,{data:u,dataKey:"value",label:function(e){var o=e.cx,r=e.cy,l=e.midAngle,a=e.innerRadius,t=e.outerRadius,n=e.percent,_=(e.index,a+.5*(t-a)),i=o+_*Math.cos(-l*p),s=r+_*Math.sin(-l*p);return c.a.createElement("text",{x:i,y:s,fill:"black",textAnchor:i>o?"start":"end",dominantBaseline:"central",fontSize:"12px"},"".concat(100*n,"%"))},labelLine:!1},u.map((function(e,o){return c.a.createElement(me.a,{key:"cell-".concat(o),fill:u[o].color})}))))))),c.a.createElement(d.a,{item:!0,xs:12,md:4},c.a.createElement(U,{offspring:m,showGenome:!1,genomeFormat:"binary",probabilityFormat:r}))))})))},ge=Object(u.a)((function(e){return Object(p.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),be=function(e){var o=e.genomeFormat,r=e.probabilityFormat,l=e.parent1,a=e.parent2,t=e.setParent1,_=e.setParent2,i=e.res,u=e.setRes,p=e.species,h=e.setSpecies,E=ge(),k=Object(n.useState)(""),v=Object(s.a)(k,2),j=v[0],C=v[1],x=Object(n.useState)(!1),O=Object(s.a)(x,2),F=O[0],S=O[1],I=Object(n.useState)({}),N=Object(s.a)(I,2),P=N[0],T=N[1],G=function(){S(!1)},M=function(e){T(e),S(!0)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:E.root,noValidate:!0,autoComplete:"off"},c.a.createElement("div",null,c.a.createElement(d.a,{container:!0,alignContent:"center",justify:"center",spacing:0},c.a.createElement(d.a,{item:!0,xs:12,xl:6},c.a.createElement(d.a,{container:!0,justify:"center"},c.a.createElement(d.a,{item:!0,xs:12,sm:4,xl:3},c.a.createElement(g.a,{label:"Parent 1",value:l,onChange:function(e){return t(e.target.value)},helperText:"e.g. 00_01_00, 010, seed red, island pink"})),c.a.createElement(d.a,{item:!0,xs:12,sm:4,xl:3},c.a.createElement(g.a,{label:"Parent 2",value:a,onChange:function(e){return _(e.target.value)}})),c.a.createElement(d.a,{item:!0,xs:12,sm:3},c.a.createElement(se,{species:p,setSpecies:function(e){u([]),h(e)}})))),c.a.createElement(d.a,{item:!0,xs:4},c.a.createElement(b.a,{variant:"contained",color:"primary",disabled:!p,onClick:function(e){C("");var o=B(l,a,p);o.error?(C(o.error.message),u([])):u(o.res)}},"Calculate"))))),c.a.createElement(d.a,{container:!0,className:"resultsContainer",alignItems:"flex-start",alignContent:"center",justify:"center",spacing:0},c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(d.a,{container:!0,spacing:3,alignItems:"flex-start",alignContent:"center",justify:"center"},j&&c.a.createElement(y.a,{color:"error",variant:"h6"},j),i.map((function(e){return c.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,xl:3,key:e.parents.join("x"),component:"div"},c.a.createElement(le,{key:e.parents.join("x"),pairing:Object(m.a)({species:p,genomeFormat:o,probabilityFormat:r},e),showChart:M}))}))))),c.a.createElement(f.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:F,onClose:G,closeAfterTransition:!0,BackdropComponent:w.a,BackdropProps:{timeout:500}},c.a.createElement("div",null,c.a.createElement(de,{pairing:P,probabilityFormat:r,genomeFormat:o,closeModal:G}))))},ye=h.flowers,fe=Object(u.a)((function(e){return Object(p.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),we=function(e){var o=e.genomeFormat,r=e.species,l=e.setSpecies,a=e.color,n=e.setColor,_=fe(),i=M(r,a);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{container:!0,justify:"center"},c.a.createElement(d.a,{item:!0},c.a.createElement(se,{species:r,setSpecies:l})),c.a.createElement(d.a,{item:!0},c.a.createElement(ae.a,{className:_.formControl},c.a.createElement(te.a,{shrink:!0,id:"color-select-label"},"Color"),c.a.createElement(ne.a,{labelId:"color-select-label",id:"color-select",value:a,onChange:function(e){return n(e.target.value)},displayEmpty:!0,className:_.selectEmpty},r&&ye[r].colors.map((function(e){return c.a.createElement(ce.a,{key:e,value:e},e)})))))),c.a.createElement(d.a,{container:!0,className:"resultsContainer",alignItems:"flex-start",alignContent:"center",justify:"center",spacing:0},c.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,xl:3,component:"div"},c.a.createElement(Z,{headers:[{backgroundColor:t[a],key:"key",text:a+" "+r}],resultsTable:c.a.createElement(U,{offspring:i,genomeFormat:o,showProbability:!1})}))))},he=r(210),Ee=r.n(he),ke=r(214),ve=r(500),je=r(501),Ce=r(504),xe=r(502),Oe=r(499),Fe=Object(u.a)((function(e){return Object(p.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),Se=function(e){var o=e.genomeFormat,r=e.setGenomeFormat,l=Fe();return c.a.createElement(c.a.Fragment,null,c.a.createElement(ae.a,{className:l.formControl},c.a.createElement(te.a,{shrink:!0,id:"format-select-label"},"Genome Display"),c.a.createElement(ne.a,{labelId:"species-select-label",id:"species-select",value:o,onChange:function(e){return r(e.target.value)},displayEmpty:!0,className:l.selectEmpty},["binary","condensed","alpha"].map((function(e){return c.a.createElement(ce.a,{key:e,value:e},e)})))))},Ie=Object(u.a)((function(e){return Object(p.a)({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}})})),Ne=function(e){var o=e.probabilityFormat,r=e.setProbabilityFormat,l=Ie();return c.a.createElement(c.a.Fragment,null,c.a.createElement(ae.a,{className:l.formControl},c.a.createElement(te.a,{shrink:!0,id:"format-select-label"},"Probability Display"),c.a.createElement(ne.a,{labelId:"species-select-label",id:"species-select",value:o,onChange:function(e){return r(e.target.value)},displayEmpty:!0,className:l.selectEmpty},["percentage","fraction"].map((function(e){return c.a.createElement(ce.a,{key:e,value:e},e)})))))},Pe=r(211),Te=r.n(Pe),Ge=r(212),Me=r.n(Ge),We=r(213),Ke=r.n(We),Be=Object(ke.a)({typography:{fontFamily:"Quicksand",fontSize:12,fontWeightBold:"bold"},palette:{primary:{main:Oe.a[500]},secondary:{main:"#11cb5f"}}});var De=function(){var e=Object(n.useState)(0),o=Object(s.a)(e,2),r=o[0],l=o[1];function t(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var _=Object(n.useState)(localStorage.getItem("acnh_calc_genome_format")||"binary"),i=Object(s.a)(_,2),m=i[0],u=i[1],p=Object(n.useState)(localStorage.getItem("acnh_calc_prob_format")||"percentage"),d=Object(s.a)(p,2),g=d[0],b=d[1],y=Object(n.useState)(""),f=Object(s.a)(y,2),w=f[0],E=f[1],k=Object(n.useState)(""),v=Object(s.a)(k,2),j=v[0],C=v[1],x=Object(n.useState)([]),O=Object(s.a)(x,2),F=O[0],S=O[1],I=Object.keys(a),N=Object(n.useState)(I[0]),P=Object(s.a)(N,2),T=P[0],G=P[1],M=Object(n.useState)(h.flowers[T].colors[0]),W=Object(s.a)(M,2),K=W[0],B=W[1],D=function(e){S([]),G(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Quicksand:400,700",rel:"stylesheet",type:"text/css"}),c.a.createElement(ve.a,{theme:Be},c.a.createElement("div",{className:"App"},c.a.createElement(je.a,{position:"static",color:"secondary"},c.a.createElement(Ce.a,{value:r,onChange:function(e,o){l(o)},indicatorColor:"primary",textColor:"primary","aria-label":"scrollable auto tabs example",centered:!0},c.a.createElement(xe.a,Object.assign({icon:c.a.createElement(Te.a,null)},t(0))),c.a.createElement(xe.a,Object.assign({icon:c.a.createElement(Me.a,null)},t(1))),c.a.createElement(xe.a,Object.assign({icon:c.a.createElement(Ke.a,null)},t(2))))),c.a.createElement(Ee.a,{axis:"x",index:r,onChangeIndex:function(e){l(e)}},c.a.createElement("div",{className:"swipeable"},c.a.createElement(be,{genomeFormat:m,probabilityFormat:g,parent1:w,parent2:j,setParent1:E,setParent2:C,res:F,setRes:S,species:T,setSpecies:D})),c.a.createElement("div",{className:"swipeable"},c.a.createElement(we,{genomeFormat:m,species:T,setSpecies:D,color:K,setColor:B})),c.a.createElement("div",{className:"swipeable"},c.a.createElement(Se,{genomeFormat:m,setGenomeFormat:function(e){u(e),localStorage.setItem("acnh_calc_genome_format",e)}}),c.a.createElement(Ne,{probabilityFormat:g,setProbabilityFormat:function(e){b(e),localStorage.setItem("acnh_calc_prob_format",e)}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[249,1,2]]]);
//# sourceMappingURL=main.17ff7ea1.chunk.js.map