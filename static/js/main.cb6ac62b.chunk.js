(this["webpackJsonpml-react"]=this["webpackJsonpml-react"]||[]).push([[0],{190:function(e,t,a){e.exports=a(380)},195:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(63),i=a.n(l),c=(a(195),a(42)),u=a(96),o=a(68),m=a(69),d=a(71),s=a(3),E=a.n(s),p=a(46),f=a.n(p),b=a(13),v=(a(104),a(8));function h(e){var t=e.data;return r.a.createElement("div",{className:"charts absolute"},r.a.createElement("hr",null),r.a.createElement("div",{className:"stats"},r.a.createElement(F,{data:t})),r.a.createElement("hr",null),r.a.createElement("div",{className:"distribution"},r.a.createElement(x,{data:t})),r.a.createElement("hr",null),r.a.createElement("div",{className:"scatter"},r.a.createElement(y,{data:t})),r.a.createElement("hr",null),r.a.createElement("div",{className:"scatter"},r.a.createElement(g,{data:t})))}var g=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return{actual:Number(t.toFixed(4)),prediction:Number(a.toFixed(4)),z:1}})),n=E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a>n?a>e?a:e:n>e?n:e}),-1/0),l=[E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a<n?a<e?a:e:n<e?n:e}),1/0),n];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Price distribution scatter"),r.a.createElement(v.c,null,r.a.createElement(v.e,{margin:{top:50,bottom:20,right:70,left:20}},r.a.createElement(v.a,null),r.a.createElement(v.g,{type:"number",dataKey:"actual",name:"actual",domain:l,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),r.a.createElement(v.h,{type:"number",dataKey:"prediction",name:"prediction",domain:l,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),r.a.createElement(v.i,{dataKey:"z",range:[1,10]}),r.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(v.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:1},lineType:"fitting"}))))})),y=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction,n=e.close;return{actual:Number((t-n).toFixed(4)),prediction:Number((a-n).toFixed(4)),z:1}})),n=Object(b.standardDeviation)(E.a.map(a,"actual")),l=-1*n,i=E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a>n?a>e?a:e:n>e?n:e}),-1/0),c=[E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a<n?a<e?a:e:n<e?n:e}),1/0),i];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Prediction difference distribution scatter"),r.a.createElement(v.c,null,r.a.createElement(v.e,{margin:{top:50,bottom:20,right:70,left:20}},r.a.createElement(v.a,null),r.a.createElement(v.g,{type:"number",dataKey:"actual",name:"actual",domain:c,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),r.a.createElement(v.h,{type:"number",dataKey:"prediction",name:"prediction",domain:c,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),r.a.createElement(v.i,{dataKey:"z",range:[1,10]}),r.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(v.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:2},lineType:"fitting"}),r.a.createElement(v.b,{x:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideBottomRight"}}),r.a.createElement(v.b,{x:l,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideBottomRight"}}),r.a.createElement(v.b,{y:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideTopLeft"}}),r.a.createElement(v.b,{y:l,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideTopLeft"}}))))})),x=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),n=2*Object(b.max)([0-Object(b.min)(a),Object(b.max)(a)]),l=n/50,i=Object(b.mean)(a),c=Object(b.standardDeviation)(a),u=n/2*-1,o=E.a.map(E.a.range(0,51),(function(e){var t=Number((u+l*(e-.5)).toFixed(5)),n=Number((u+l*e).toFixed(5)),r=Number((u+l*(e+.5)).toFixed(5)),i=E.a.filter(a,(function(e){return e>t&&e<=r}));return{name:n,value:E.a.size(i),size:0}})),m=i+c,d=i-c;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Variations distribution"),r.a.createElement(v.c,null,r.a.createElement(v.e,{margin:{top:20,bottom:20,left:-25}},r.a.createElement(v.g,{dataKey:"name"}),r.a.createElement(v.h,{dataKey:"value"}),r.a.createElement(v.i,{dataKey:"size",range:[1,10]}),r.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(v.d,{data:o,line:{stroke:"#82ca9d",strokeWidth:1},stroke:"#82ca9d"}),r.a.createElement(v.b,{x:i,stroke:"#C98BBE",label:{value:"Mean",orientation:90,position:"insideBottomRight"}}),r.a.createElement(v.b,{x:m,stroke:"#C98BBE",label:{value:"+ \u03c3",orientation:90,position:"insideBottomRight"}}),r.a.createElement(v.b,{x:d,stroke:"#C98BBE",label:{value:"- \u03c3",orientation:90,position:"insideBottomRight"}}))))})),F=Object(n.memo)((function(e){var t=e.data,a=E.a.size(t),n=E.a.map(t,(function(e){var t=e.actual,a=e.prediction,n=e.close;return{actual:Number((t-n).toFixed(4)),prediction:Number((a-n).toFixed(4))}})),l=E.a.map(n,"actual"),i=Object(b.mean)(l),c=Object(b.standardDeviation)(l)/2,u=c-i,o=i-c,m=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t>u&&a>u}))),d=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t>u&&a>=o&&a<=u}))),s=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t>u&&a<o}))),p=E.a.size(E.a.filter(n,(function(e){return e.actual>u}))),f=E.a.size(E.a.filter(n,(function(e){return e.prediction>u}))),v=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t>=o&&t<=u&&a>u}))),h=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t>=o&&t<=u&&a>=o&&a<=u}))),g=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t>=o&&t<=u&&a<o}))),y=E.a.size(E.a.filter(n,(function(e){var t=e.actual;return t>=o&&t<=u}))),x=E.a.size(E.a.filter(n,(function(e){var t=e.prediction;return t>=o&&t<=u}))),F=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t<o&&a>u}))),k=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t<o&&a>=o&&a<=u}))),z=E.a.size(E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return t<o&&a<o}))),O=E.a.size(E.a.filter(n,(function(e){return e.actual<o}))),j=E.a.size(E.a.filter(n,(function(e){return e.prediction<o}))),B=E.a.map(n,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),N=Object(b.mean)(B),D=Object(b.standardDeviation)(B);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Basic Stats"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Number of Samples:"),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("td",null,"Sample mean:"),r.a.createElement("td",null,N.toFixed(5))),r.a.createElement("tr",null,r.a.createElement("td",null,"Sample Standard Deviation:"),r.a.createElement("td",null,D.toFixed(5))))),r.a.createElement("br",null),r.a.createElement("table",{className:"comparison-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Prediction Up"),r.a.createElement("th",null,"Prediction Flat"),r.a.createElement("th",null,"Prediction Down"),r.a.createElement("th",null,"Total"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Actual Up"),r.a.createElement("td",null,m," / ",(m/f*100).toFixed(1),"%"),r.a.createElement("td",null,d," / ",(d/x*100).toFixed(1),"%"),r.a.createElement("td",null,s," / ",(s/j*100).toFixed(1),"%"),r.a.createElement("td",null,p)),r.a.createElement("tr",null,r.a.createElement("th",null,"Actual Flat"),r.a.createElement("td",null,v," / ",(v/f*100).toFixed(1),"%"),r.a.createElement("td",null,h," / ",(h/x*100).toFixed(1),"%"),r.a.createElement("td",null,g," / ",(g/j*100).toFixed(1),"%"),r.a.createElement("td",null,y)),r.a.createElement("tr",null,r.a.createElement("th",null,"Actual Down"),r.a.createElement("td",null,F," / ",(F/f*100).toFixed(1),"%"),r.a.createElement("td",null,k," / ",(k/x*100).toFixed(1),"%"),r.a.createElement("td",null,z," / ",(z/j*100).toFixed(1),"%"),r.a.createElement("td",null,O)),r.a.createElement("tr",null,r.a.createElement("th",null,"Total"),r.a.createElement("td",null,f),r.a.createElement("td",null,x),r.a.createElement("td",null,j),r.a.createElement("td",null,p+y+O," / ",f+x+j)))),r.a.createElement("p",null,"% are of number of predictions per the actual, so accuracy in that actual direction"))}));function k(e){var t=e.data;return r.a.createElement("div",{className:"charts change"},r.a.createElement("hr",null),r.a.createElement("div",{className:"stats"},r.a.createElement(j,{data:t})),r.a.createElement("hr",null),r.a.createElement("div",{className:"distribution"},r.a.createElement(O,{data:t})),r.a.createElement("hr",null),r.a.createElement("div",{className:"scatter"},r.a.createElement(z,{data:t})))}var z=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return{actual:Number(100*t.toFixed(4)),prediction:Number(100*a.toFixed(4)),z:1}})),n=Object(b.standardDeviation)(E.a.map(a,"actual")),l=-1*n,i=E.a.reduce(a,(function(e,t){var a=Math.abs(E.a.get(t,"actual")),n=Math.abs(E.a.get(t,"prediction"));return a>n?a>e?a:e:n>e?n:e}),-1/0),c=[-1*Math.ceil(2*i)/2,1*Math.ceil(2*i)/2];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Predictions vs Actuals scatter"),r.a.createElement(v.c,null,r.a.createElement(v.e,{margin:{top:50,bottom:20,right:70,left:20}},r.a.createElement(v.a,null),r.a.createElement(v.g,{type:"number",dataKey:"actual",name:"actual",domain:c,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),r.a.createElement(v.h,{type:"number",dataKey:"prediction",name:"prediction",domain:c,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),r.a.createElement(v.i,{dataKey:"z",range:[1,10]}),r.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(v.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:1},lineType:"fitting"}),r.a.createElement(v.b,{x:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideBottomRight"}}),r.a.createElement(v.b,{x:l,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideBottomRight"}}),r.a.createElement(v.b,{y:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideTopLeft"}}),r.a.createElement(v.b,{y:l,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideTopLeft"}}))))})),O=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number(100*(t-a).toFixed(4))})),n=2*Object(b.max)([0-Object(b.min)(a),Object(b.max)(a)]),l=n/50,i=Object(b.mean)(a),c=Object(b.standardDeviation)(a),u=n/2*-1,o=E.a.map(E.a.range(0,51),(function(e){var t=Number((u+l*(e-.5)).toFixed(5)),n=Number((u+l*e).toFixed(5)),r=Number((u+l*(e+.5)).toFixed(5)),i=E.a.filter(a,(function(e){return e>t&&e<=r}));return{name:n,value:E.a.size(i),size:0}})),m=i+c,d=i-c;return console.log(d,m),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Variations distribution"),r.a.createElement(v.c,null,r.a.createElement(v.e,{margin:{top:20,bottom:20,left:-25}},r.a.createElement(v.g,{dataKey:"name"}),r.a.createElement(v.h,{dataKey:"value"}),r.a.createElement(v.i,{dataKey:"size",range:[1,10]}),r.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(v.d,{data:o,line:{stroke:"#82ca9d",strokeWidth:1},stroke:"#82ca9d"}),r.a.createElement(v.b,{x:i,stroke:"#C98BBE",label:{value:"Mean",orientation:90,position:"insideBottomRight"}}),r.a.createElement(v.b,{x:m,stroke:"#C98BBE",label:{value:"+ \u03c3",orientation:90,position:"insideBottomRight"}}),r.a.createElement(v.b,{x:d,stroke:"#C98BBE",label:{value:"- \u03c3",orientation:90,position:"insideBottomRight"}}))))})),j=Object(n.memo)((function(e){var t=e.data,a=E.a.size(t),n=E.a.map(t,"actual"),l=Object(b.mean)(n),i=Object(b.standardDeviation)(n)-l,c=l-i,u=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>i&&a>i}))),o=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>i&&a>=c&&a<=i}))),m=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>i&&a<c}))),d=E.a.size(E.a.filter(t,(function(e){return e.actual>i}))),s=E.a.size(E.a.filter(t,(function(e){return e.prediction>i}))),p=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=c&&t<=i&&a>i}))),f=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=c&&t<=i&&a>=c&&a<=i}))),v=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=c&&t<=i&&a<c}))),h=E.a.size(E.a.filter(t,(function(e){var t=e.actual;return t>=c&&t<=i}))),g=E.a.size(E.a.filter(t,(function(e){var t=e.prediction;return t>=c&&t<=i}))),y=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<c&&a>i}))),x=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<c&&a>=c&&a<=i}))),F=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<c&&a<c}))),k=E.a.size(E.a.filter(t,(function(e){return e.actual<c}))),z=E.a.size(E.a.filter(t,(function(e){return e.prediction<c}))),O=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),j=Object(b.mean)(O),B=Object(b.standardDeviation)(O);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Basic Stats"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Number of Samples:"),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("td",null,"Sample mean:"),r.a.createElement("td",null,j.toFixed(5))),r.a.createElement("tr",null,r.a.createElement("td",null,"Sample Standard Deviation:"),r.a.createElement("td",null,B.toFixed(5))))),r.a.createElement("br",null),r.a.createElement("table",{className:"comparison-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Prediction Up"),r.a.createElement("th",null,"Prediction Flat"),r.a.createElement("th",null,"Prediction Down"),r.a.createElement("th",null,"Total"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Actual Up"),r.a.createElement("td",null,u," / ",(u/s*100).toFixed(1),"%"),r.a.createElement("td",null,o," / ",(o/g*100).toFixed(1),"%"),r.a.createElement("td",null,m," / ",(m/z*100).toFixed(1),"%"),r.a.createElement("td",null,d)),r.a.createElement("tr",null,r.a.createElement("th",null,"Actual Flat"),r.a.createElement("td",null,p," / ",(p/s*100).toFixed(1),"%"),r.a.createElement("td",null,f," / ",(f/g*100).toFixed(1),"%"),r.a.createElement("td",null,v," / ",(v/z*100).toFixed(1),"%"),r.a.createElement("td",null,h)),r.a.createElement("tr",null,r.a.createElement("th",null,"Actual Down"),r.a.createElement("td",null,y," / ",(y/s*100).toFixed(1),"%"),r.a.createElement("td",null,x," / ",(x/g*100).toFixed(1),"%"),r.a.createElement("td",null,F," / ",(F/z*100).toFixed(1),"%"),r.a.createElement("td",null,k)),r.a.createElement("tr",null,r.a.createElement("th",null,"Total"),r.a.createElement("td",null,s),r.a.createElement("td",null,g),r.a.createElement("td",null,z),r.a.createElement("td",null,d+h+k," / ",s+g+z)))),r.a.createElement("p",null,"% are of number of predictions per the actual, so accuracy in that actual direction"))}));function B(){var e=Object(u.a)(["\nquery GetPredictions ( $version: Int!, $was_back_predicted: [Boolean!], $start_time: timestamptz! ) {\n    predictions ( where: { \n        prediction: { _is_null: false }, \n        actual: { _is_null: false }, \n        _version: { _eq: $version }, \n        was_back_predicted: { _in: $was_back_predicted },\n        time: { _gte: $start_time }\n    }) {\n        actual id time\n        instrument\n        prediction\n        _version\n        close\n    }\n}"]);return B=function(){return e},e}function N(){var e=Object(u.a)(["\nquery GetVersions {\n    versions ( order_by: { id: asc } ) { id prediction_type }\n}\n"]);return N=function(){return e},e}var D=f()(N()),C=f()(B());function _(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(-1),u=Object(c.a)(i,2),s=u[0],p=u[1],f=Object(n.useState)(!0),v=Object(c.a)(f,2),g=v[0],y=v[1],x=Object(n.useState)(7),F=Object(c.a)(x,2),z=F[0],O=F[1],j=0===z?new Date(0).toISOString():new Date(Date.now()-864e5*z).toISOString(),B=Object(o.b)(D).data,N=Object(o.a)(C),_=Object(c.a)(N,2),S=_[0],w=_[1],K=w.data,P=w.loading;Object(n.useEffect)((function(){return S({variables:{version:s,was_back_predicted:g?[!0,!1]:[!1],start_time:j}})}),[s,g,z]);var A=E.a.get(K,"predictions"),T=E.a.map(E.a.get(B,"versions"),"id");Object(n.useEffect)((function(){-1!==s||E.a.isEmpty(T)||p(Object(b.max)(T))}),[T]);var R=E.a.get(E.a.find(E.a.get(B,"versions"),["id",s]),"prediction_type"),M=E.a.uniq(E.a.map(A,"instrument"));Object(n.useEffect)((function(){return l(E.a.first(M))}),[M,s]);var I=E.a.filter(A,["instrument",a]);return r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Visualisation and Stats analysis of my ML model"),r.a.createElement("p",null,"All predictions pulled for my model, visualised and analysed.")),r.a.createElement("div",{className:"options"},r.a.createElement("div",null,r.a.createElement("p",null,"Select Version:"),r.a.createElement("select",{value:s,onChange:function(e){return p(Number(e.target.value))}},!E.a.isEmpty(T)&&E.a.map(T,(function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",null,r.a.createElement("p",null,"Select Instruments:"),r.a.createElement("select",{value:a,onChange:function(e){return l(e.target.value)}},!E.a.isEmpty(M)&&E.a.map(M,(function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{onClick:function(){return y(!g)}},r.a.createElement("p",null,"Include back-predicted results"),g?r.a.createElement(m.a,{icon:d.a}):r.a.createElement(m.a,{icon:d.c,className:"unchecked"})),r.a.createElement("div",null,r.a.createElement("p",null,"How many days back (0 = all)?"),r.a.createElement("input",{type:"number",onChange:function(e){return O(Number(e.target.value))},value:z}))),P||!s?r.a.createElement("div",{className:"loader"},r.a.createElement(m.a,{icon:d.b,spin:!0,size:"3x"})):r.a.createElement(r.a.Fragment,null,E.a.isEmpty(I)?r.a.createElement("p",null,"Nothing to display - change a filter!"):r.a.createElement(r.a.Fragment,null,"absolute"===R&&r.a.createElement(h,{data:I}),"change"===R&&r.a.createElement(k,{data:I}))))}var S=a(18),w=a(163);function K(){var e=new w.a({uri:"https://boiling-ridge-24261.herokuapp.com/v1/graphql"});return r.a.createElement(S.a,{client:e},r.a.createElement(_,null))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.cb6ac62b.chunk.js.map