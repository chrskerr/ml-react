(this["webpackJsonpml-react"]=this["webpackJsonpml-react"]||[]).push([[0],{190:function(e,t,a){e.exports=a(380)},195:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(63),i=a.n(r),c=(a(195),a(29)),u=a(96),o=a(68),m=a(69),d=a(71),s=a(3),E=a.n(s),p=a(46),f=a.n(p),b=a(13),v=(a(104),a(8));function h(e){var t=e.data;return l.a.createElement("div",{className:"charts absolute"},l.a.createElement("hr",null),l.a.createElement("div",{className:"stats"},l.a.createElement(F,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"distribution"},l.a.createElement(x,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"scatter"},l.a.createElement(y,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"scatter"},l.a.createElement(g,{data:t})))}var g=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return{actual:Number(t.toFixed(4)),prediction:Number(a.toFixed(4)),z:1}})),n=E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a>n?a>e?a:e:n>e?n:e}),-1/0),r=[E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a<n?a<e?a:e:n<e?n:e}),1/0),n];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Price distribution scatter"),l.a.createElement(v.c,null,l.a.createElement(v.e,{margin:{top:50,bottom:20,right:70,left:20}},l.a.createElement(v.a,null),l.a.createElement(v.g,{type:"number",dataKey:"actual",name:"actual",domain:r,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),l.a.createElement(v.h,{type:"number",dataKey:"prediction",name:"prediction",domain:r,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),l.a.createElement(v.i,{dataKey:"z",range:[1,10]}),l.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(v.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:1},lineType:"fitting"}))))})),y=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction,n=e.close;return{actual:Number((t-n).toFixed(4)),prediction:Number((a-n).toFixed(4)),z:1}})),n=Object(b.standardDeviation)(E.a.map(a,"actual")),r=-1*n,i=E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a>n?a>e?a:e:n>e?n:e}),-1/0),c=[E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a<n?a<e?a:e:n<e?n:e}),1/0),i];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Prediction difference distribution scatter"),l.a.createElement(v.c,null,l.a.createElement(v.e,{margin:{top:50,bottom:20,right:70,left:20}},l.a.createElement(v.a,null),l.a.createElement(v.g,{type:"number",dataKey:"actual",name:"actual",domain:c,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),l.a.createElement(v.h,{type:"number",dataKey:"prediction",name:"prediction",domain:c,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),l.a.createElement(v.i,{dataKey:"z",range:[1,10]}),l.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(v.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:2},lineType:"fitting"}),l.a.createElement(v.b,{x:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideBottomRight"}}),l.a.createElement(v.b,{x:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideBottomRight"}}),l.a.createElement(v.b,{y:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideTopLeft"}}),l.a.createElement(v.b,{y:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideTopLeft"}}))))})),x=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),n=2*Object(b.max)([0-Object(b.min)(a),Object(b.max)(a)]),r=n/50,i=Object(b.mean)(a),c=Object(b.standardDeviation)(a),u=n/2*-1,o=E.a.map(E.a.range(0,51),(function(e){var t=Number((u+r*(e-.5)).toFixed(5)),n=Number((u+r*e).toFixed(5)),l=Number((u+r*(e+.5)).toFixed(5)),i=E.a.filter(a,(function(e){return e>t&&e<=l}));return{name:n,value:E.a.size(i),size:0}})),m=i+c,d=i-c;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Variations distribution"),l.a.createElement(v.c,null,l.a.createElement(v.e,{margin:{top:20,bottom:20,left:-25}},l.a.createElement(v.g,{dataKey:"name"}),l.a.createElement(v.h,{dataKey:"value"}),l.a.createElement(v.i,{dataKey:"size",range:[1,10]}),l.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(v.d,{data:o,line:{stroke:"#82ca9d",strokeWidth:1},stroke:"#82ca9d"}),l.a.createElement(v.b,{x:i,stroke:"#C98BBE",label:{value:"Mean",orientation:90,position:"insideBottomRight"}}),l.a.createElement(v.b,{x:m,stroke:"#C98BBE",label:{value:"+ \u03c3",orientation:90,position:"insideBottomRight"}}),l.a.createElement(v.b,{x:d,stroke:"#C98BBE",label:{value:"- \u03c3",orientation:90,position:"insideBottomRight"}}))))})),F=Object(n.memo)((function(e){var t=e.data,a=Object(n.useState)(10),r=Object(c.a)(a,2),i=r[0],u=r[1],o=E.a.size(t),m=E.a.map(t,(function(e){var t=e.actual,a=e.prediction,n=e.close;return{actual:Number((t-n).toFixed(4)),prediction:Number((a-n).toFixed(4))}})),d=E.a.map(m,"actual"),s=Object(b.standardDeviation)(d),p=i>=0?s*i/100:s,f=p,v=-1*p,h=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t>f&&a>f}))),g=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t>f&&a>=v&&a<=f}))),y=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t>f&&a<v}))),x=E.a.size(E.a.filter(m,(function(e){return e.actual>f}))),F=E.a.size(E.a.filter(m,(function(e){return e.prediction>f}))),k=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t>=v&&t<=f&&a>f}))),O=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t>=v&&t<=f&&a>=v&&a<=f}))),z=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t>=v&&t<=f&&a<v}))),j=E.a.size(E.a.filter(m,(function(e){var t=e.actual;return t>=v&&t<=f}))),B=E.a.size(E.a.filter(m,(function(e){var t=e.prediction;return t>=v&&t<=f}))),N=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t<v&&a>f}))),D=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t<v&&a>=v&&a<=f}))),C=E.a.size(E.a.filter(m,(function(e){var t=e.actual,a=e.prediction;return t<v&&a<v}))),S=E.a.size(E.a.filter(m,(function(e){return e.actual<v}))),_=E.a.size(E.a.filter(m,(function(e){return e.prediction<v}))),w=E.a.map(m,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),K=Object(b.mean)(w),P=Object(b.standardDeviation)(w);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Basic Stats"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Number of Samples:"),l.a.createElement("td",null,o)),l.a.createElement("tr",null,l.a.createElement("td",null,"Sample mean:"),l.a.createElement("td",null,K.toFixed(5))),l.a.createElement("tr",null,l.a.createElement("td",null,"Sample Standard Deviation:"),l.a.createElement("td",null,P.toFixed(5))))),l.a.createElement("br",null),l.a.createElement("div",{className:"options"},l.a.createElement("div",null,l.a.createElement("p",null,"Set difference threshold percent:"),l.a.createElement("input",{type:"number",onChange:function(e){return u(Number(e.target.value))},value:i,min:0}))),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Actuals Standard Dev:"),l.a.createElement("td",null,s.toFixed(3))),l.a.createElement("tr",null,l.a.createElement("td",null,"Difference Threshold:"),l.a.createElement("td",null,p.toFixed(3))))),l.a.createElement("br",null),l.a.createElement("table",{className:"comparison-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Prediction Up"),l.a.createElement("th",null,"Prediction Flat"),l.a.createElement("th",null,"Prediction Down"),l.a.createElement("th",null,"Total"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Up"),l.a.createElement("td",null,h," / ",(h/F*100).toFixed(1),"%"),l.a.createElement("td",null,g," / ",(g/B*100).toFixed(1),"%"),l.a.createElement("td",null,y," / ",(y/_*100).toFixed(1),"%"),l.a.createElement("td",null,x)),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Flat"),l.a.createElement("td",null,k," / ",(k/F*100).toFixed(1),"%"),l.a.createElement("td",null,O," / ",(O/B*100).toFixed(1),"%"),l.a.createElement("td",null,z," / ",(z/_*100).toFixed(1),"%"),l.a.createElement("td",null,j)),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Down"),l.a.createElement("td",null,N," / ",(N/F*100).toFixed(1),"%"),l.a.createElement("td",null,D," / ",(D/B*100).toFixed(1),"%"),l.a.createElement("td",null,C," / ",(C/_*100).toFixed(1),"%"),l.a.createElement("td",null,S)),l.a.createElement("tr",null,l.a.createElement("th",null,"Total"),l.a.createElement("td",null,F),l.a.createElement("td",null,B),l.a.createElement("td",null,_),l.a.createElement("td",null,x+j+S," / ",F+B+_)))),l.a.createElement("p",null,"% are of number of predictions per the actual, so accuracy in that actual direction"))}));function k(e){var t=e.data;return l.a.createElement("div",{className:"charts change"},l.a.createElement("hr",null),l.a.createElement("div",{className:"stats"},l.a.createElement(j,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"distribution"},l.a.createElement(z,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"scatter"},l.a.createElement(O,{data:t})))}var O=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return{actual:Number(100*t.toFixed(4)),prediction:Number(100*a.toFixed(4)),z:1}})),n=Object(b.standardDeviation)(E.a.map(a,"actual")),r=-1*n,i=E.a.reduce(a,(function(e,t){var a=Math.abs(E.a.get(t,"actual")),n=Math.abs(E.a.get(t,"prediction"));return a>n?a>e?a:e:n>e?n:e}),-1/0),c=[-1*Math.ceil(2*i)/2,1*Math.ceil(2*i)/2];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Predictions vs Actuals scatter"),l.a.createElement(v.c,null,l.a.createElement(v.e,{margin:{top:50,bottom:20,right:70,left:20}},l.a.createElement(v.a,null),l.a.createElement(v.g,{type:"number",dataKey:"actual",name:"actual",domain:c,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),l.a.createElement(v.h,{type:"number",dataKey:"prediction",name:"prediction",domain:c,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),l.a.createElement(v.i,{dataKey:"z",range:[1,10]}),l.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(v.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:1},lineType:"fitting"}),l.a.createElement(v.b,{x:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideBottomRight"}}),l.a.createElement(v.b,{x:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideBottomRight"}}),l.a.createElement(v.b,{y:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideTopLeft"}}),l.a.createElement(v.b,{y:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideTopLeft"}}))))})),z=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number(100*(t-a).toFixed(4))})),n=2*Object(b.max)([0-Object(b.min)(a),Object(b.max)(a)]),r=n/50,i=Object(b.mean)(a),c=Object(b.standardDeviation)(a),u=n/2*-1,o=E.a.map(E.a.range(0,51),(function(e){var t=Number((u+r*(e-.5)).toFixed(5)),n=Number((u+r*e).toFixed(5)),l=Number((u+r*(e+.5)).toFixed(5)),i=E.a.filter(a,(function(e){return e>t&&e<=l}));return{name:n,value:E.a.size(i),size:0}})),m=i+c,d=i-c;return console.log(d,m),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Variations distribution"),l.a.createElement(v.c,null,l.a.createElement(v.e,{margin:{top:20,bottom:20,left:-25}},l.a.createElement(v.g,{dataKey:"name"}),l.a.createElement(v.h,{dataKey:"value"}),l.a.createElement(v.i,{dataKey:"size",range:[1,10]}),l.a.createElement(v.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(v.d,{data:o,line:{stroke:"#82ca9d",strokeWidth:1},stroke:"#82ca9d"}),l.a.createElement(v.b,{x:i,stroke:"#C98BBE",label:{value:"Mean",orientation:90,position:"insideBottomRight"}}),l.a.createElement(v.b,{x:m,stroke:"#C98BBE",label:{value:"+ \u03c3",orientation:90,position:"insideBottomRight"}}),l.a.createElement(v.b,{x:d,stroke:"#C98BBE",label:{value:"- \u03c3",orientation:90,position:"insideBottomRight"}}))))})),j=Object(n.memo)((function(e){var t=e.data,a=E.a.size(t),n=E.a.map(t,"actual"),r=Object(b.mean)(n),i=Object(b.standardDeviation)(n)-r,c=r-i,u=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>i&&a>i}))),o=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>i&&a>=c&&a<=i}))),m=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>i&&a<c}))),d=E.a.size(E.a.filter(t,(function(e){return e.actual>i}))),s=E.a.size(E.a.filter(t,(function(e){return e.prediction>i}))),p=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=c&&t<=i&&a>i}))),f=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=c&&t<=i&&a>=c&&a<=i}))),v=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=c&&t<=i&&a<c}))),h=E.a.size(E.a.filter(t,(function(e){var t=e.actual;return t>=c&&t<=i}))),g=E.a.size(E.a.filter(t,(function(e){var t=e.prediction;return t>=c&&t<=i}))),y=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<c&&a>i}))),x=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<c&&a>=c&&a<=i}))),F=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<c&&a<c}))),k=E.a.size(E.a.filter(t,(function(e){return e.actual<c}))),O=E.a.size(E.a.filter(t,(function(e){return e.prediction<c}))),z=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),j=Object(b.mean)(z),B=Object(b.standardDeviation)(z);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Basic Stats"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Number of Samples:"),l.a.createElement("td",null,a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Sample mean:"),l.a.createElement("td",null,j.toFixed(5))),l.a.createElement("tr",null,l.a.createElement("td",null,"Sample Standard Deviation:"),l.a.createElement("td",null,B.toFixed(5))))),l.a.createElement("br",null),l.a.createElement("table",{className:"comparison-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Prediction Up"),l.a.createElement("th",null,"Prediction Flat"),l.a.createElement("th",null,"Prediction Down"),l.a.createElement("th",null,"Total"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Up"),l.a.createElement("td",null,u," / ",(u/s*100).toFixed(1),"%"),l.a.createElement("td",null,o," / ",(o/g*100).toFixed(1),"%"),l.a.createElement("td",null,m," / ",(m/O*100).toFixed(1),"%"),l.a.createElement("td",null,d)),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Flat"),l.a.createElement("td",null,p," / ",(p/s*100).toFixed(1),"%"),l.a.createElement("td",null,f," / ",(f/g*100).toFixed(1),"%"),l.a.createElement("td",null,v," / ",(v/O*100).toFixed(1),"%"),l.a.createElement("td",null,h)),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Down"),l.a.createElement("td",null,y," / ",(y/s*100).toFixed(1),"%"),l.a.createElement("td",null,x," / ",(x/g*100).toFixed(1),"%"),l.a.createElement("td",null,F," / ",(F/O*100).toFixed(1),"%"),l.a.createElement("td",null,k)),l.a.createElement("tr",null,l.a.createElement("th",null,"Total"),l.a.createElement("td",null,s),l.a.createElement("td",null,g),l.a.createElement("td",null,O),l.a.createElement("td",null,d+h+k," / ",s+g+O)))),l.a.createElement("p",null,"% are of number of predictions per the actual, so accuracy in that actual direction"))}));function B(){var e=Object(u.a)(["\nquery GetPredictions ( $version: Int!, $was_back_predicted: [Boolean!], $start_time: timestamptz! ) {\n    predictions ( where: { \n        prediction: { _is_null: false }, \n        actual: { _is_null: false }, \n        _version: { _eq: $version }, \n        was_back_predicted: { _in: $was_back_predicted },\n        time: { _gte: $start_time }\n    }) {\n        actual id time\n        instrument\n        prediction\n        _version\n        close\n    }\n}"]);return B=function(){return e},e}function N(){var e=Object(u.a)(["\nquery GetVersions {\n    versions ( order_by: { id: asc } ) { id prediction_type }\n}\n"]);return N=function(){return e},e}var D=f()(N()),C=f()(B());function S(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(-1),u=Object(c.a)(i,2),s=u[0],p=u[1],f=Object(n.useState)(!0),v=Object(c.a)(f,2),g=v[0],y=v[1],x=Object(n.useState)(7),F=Object(c.a)(x,2),O=F[0],z=F[1],j=0===O?new Date(0).toISOString():new Date(Date.now()-864e5*O).toISOString(),B=Object(o.b)(D).data,N=Object(o.a)(C),S=Object(c.a)(N,2),_=S[0],w=S[1],K=w.data,P=w.loading;Object(n.useEffect)((function(){return _({variables:{version:s,was_back_predicted:g?[!0,!1]:[!1],start_time:j}})}),[s,g,O]);var A=E.a.get(K,"predictions"),T=E.a.map(E.a.get(B,"versions"),"id");Object(n.useEffect)((function(){-1!==s||E.a.isEmpty(T)||p(Object(b.max)(T))}),[T]);var R=E.a.get(E.a.find(E.a.get(B,"versions"),["id",s]),"prediction_type"),M=E.a.uniq(E.a.map(A,"instrument"));Object(n.useEffect)((function(){return r(E.a.first(M))}),[M,s]);var I=E.a.filter(A,["instrument",a]);return l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Visualisation and Stats analysis of my ML model"),l.a.createElement("p",null,"All predictions pulled for my model, visualised and analysed.")),l.a.createElement("div",{className:"options"},l.a.createElement("div",null,l.a.createElement("p",null,"Select Version:"),l.a.createElement("select",{value:s,onChange:function(e){return p(Number(e.target.value))}},!E.a.isEmpty(T)&&E.a.map(T,(function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",null,l.a.createElement("p",null,"Select Instruments:"),l.a.createElement("select",{value:a,onChange:function(e){return r(e.target.value)}},!E.a.isEmpty(M)&&E.a.map(M,(function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{onClick:function(){return y(!g)}},l.a.createElement("p",null,"Include back-predicted results"),g?l.a.createElement(m.a,{icon:d.a}):l.a.createElement(m.a,{icon:d.c,className:"unchecked"})),l.a.createElement("div",null,l.a.createElement("p",null,"How many days back (0 = all)?"),l.a.createElement("input",{type:"number",onChange:function(e){return z(Number(e.target.value))},value:O}))),P||!s?l.a.createElement("div",{className:"loader"},l.a.createElement(m.a,{icon:d.b,spin:!0,size:"3x"})):l.a.createElement(l.a.Fragment,null,E.a.isEmpty(I)?l.a.createElement("p",null,"Nothing to display - change a filter!"):l.a.createElement(l.a.Fragment,null,"absolute"===R&&l.a.createElement(h,{data:I}),"change"===R&&l.a.createElement(k,{data:I}))))}var _=a(18),w=a(163);function K(){var e=new w.a({uri:"https://boiling-ridge-24261.herokuapp.com/v1/graphql"});return l.a.createElement(_.a,{client:e},l.a.createElement(S,null))}i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.0668de28.chunk.js.map