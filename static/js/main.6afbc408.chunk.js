(this["webpackJsonpml-react"]=this["webpackJsonpml-react"]||[]).push([[0],{185:function(e,t,a){e.exports=a(376)},190:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(62),c=a.n(l),i=(a(190),a(69)),u=a(94),o=(a(191),a(67)),m=a(147),s=a(161),d=a(9),E=a.n(d),p=a(47),f=a.n(p),v=a(17),b=a(31);function h(){var e=Object(u.a)(["\nquery GetPredictions ( $version: Int! ) {\n    predictions ( where: { prediction: { _is_null: false }, actual: { _is_null: false }, _version: { _eq: $version }}) {\n        actual id time\n        instrument\n        prediction\n        _version\n    }\n}"]);return h=function(){return e},e}function g(){var e=Object(u.a)(["\nquery GetVersions {\n    versions { id }\n}\n"]);return g=function(){return e},e}var j=f()(g()),y=f()(h());function O(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(i.a)(c,2),d=u[0],p=u[1],f=Object(o.b)(j).data,v=Object(o.a)(y),b=Object(i.a)(v,2),h=b[0],g=b[1],O=g.data,k=g.loading;Object(n.useEffect)((function(){return h({variables:{version:d}})}),[d]);var S=E.a.get(O,"predictions"),M=E.a.filter(S,["_version",d]),_=E.a.map(E.a.get(f,"versions"),"id");Object(n.useEffect)((function(){d||p(Math.max(_))}),[_]);var q=E.a.uniq(E.a.map(M,"instrument"));Object(n.useEffect)((function(){a||l(E.a.first(q))}),[q]);var w=E.a.filter(M,["instrument",a]);return r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Visualisation and Stats analysis of my ML model"),r.a.createElement("p",null,"All predictions pulled for my model, visualised and analysed.")),r.a.createElement("div",{className:"options"},r.a.createElement("div",null,r.a.createElement("p",null,"Select Version:"),r.a.createElement("select",{value:d,onChange:function(e){return p(e.target.value)}},!E.a.isEmpty(_)&&E.a.map(_,(function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",null,r.a.createElement("p",null,"Select Instruments:"),r.a.createElement("select",{value:a,onChange:function(e){return l(e.target.value)}},!E.a.isEmpty(q)&&E.a.map(q,(function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),k||!d?r.a.createElement("div",{className:"loader"},r.a.createElement(m.a,{icon:s.a,spin:!0,size:"3x"})):r.a.createElement(r.a.Fragment,null,E.a.isEmpty(w)?r.a.createElement("p",null,"Nothing to display - change a filter!"):r.a.createElement("div",{className:"chart"},r.a.createElement("hr",null),r.a.createElement("div",{className:"stats"},r.a.createElement(N,{data:w})),r.a.createElement("hr",null),r.a.createElement("div",{className:"scatter"},r.a.createElement(x,{data:w})),r.a.createElement("hr",null),r.a.createElement("div",{className:"distribution"},r.a.createElement(F,{data:w})))))}var x=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return{actual:(100*t).toFixed(4),prediction:(100*a).toFixed(4)}})),n=E.a.map(t,(function(e){return[100*e.actual,100*e.prediction]})),l=E.a.reduce(a,(function(e,t){var a=Math.abs(E.a.get(t,"actual")),n=Math.abs(E.a.get(t,"prediction"));return a>n?a>e?a:e:n>e?n:e}),-1/0),c=[-1*Math.ceil(2*l)/2,1*Math.ceil(2*l)/2],i=Object(b.linearRegressionLine)(Object(b.linearRegression)(n)),u=[{actual:c[0],prediction:i(c[0])},{actual:c[1],prediction:i(c[1])}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Predictions vs Actuals scatter"),r.a.createElement(v.e,null,r.a.createElement(v.g,{margin:{top:20,bottom:20},data:a},r.a.createElement(v.a,null),r.a.createElement(v.i,{type:"number",dataKey:"actual",name:"actual",domain:c,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),r.a.createElement(v.j,{type:"number",dataKey:"prediction",name:"prediction",domain:c,label:{value:"Predicted Change (cents)",position:"centerBottom",angle:-90,offset:5}}),r.a.createElement(v.h,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(v.f,{data:a,fill:"#82ca9d",shape:"triangle"}),r.a.createElement(v.f,{line:{stroke:"#e16162",strokeWidth:1},data:u,shape:"circle",fill:"#e16162"}))))}),E.a.isEqual),F=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),n=2*Object(b.max)([0-Object(b.min)(a),Object(b.max)(a)]),l=n/20,c=n/2*-1,i=E.a.map(E.a.range(0,21),(function(e){var t=Number((c+l*(e-.5)).toFixed(5)),n=Number((c+l*e).toFixed(5)),r=Number((c+l*(e+.5)).toFixed(5)),i=E.a.filter(a,(function(e){return e>t&&e<=r}));return{name:n,value:E.a.size(i)}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Variations distribution"),r.a.createElement(v.e,null,r.a.createElement(v.b,{data:i,margin:{top:20,bottom:20,left:-25}},r.a.createElement(v.i,{dataKey:"name"}),r.a.createElement(v.j,{dataKey:"value"}),r.a.createElement(v.h,null),r.a.createElement(v.c,{type:"natural",dataKey:"value",stroke:"#82ca9d",dot:!1}),r.a.createElement(v.d,{x:0,stroke:"#e16162",label:"Zero"}))))}),E.a.isEqual),N=function(e){var t=e.data,a=E.a.size(t),n=E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>0&&a>0||t<0&&a<0})),l=100*E.a.size(n)/a,c=E.a.filter(n,(function(e){var t=e.actual,a=e.prediction;return Math.abs(t)>=Math.abs(a)})),i=100*E.a.size(c)/a,u=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),o=Object(b.mean)(u),m=Object(b.standardDeviation)(u);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Basic Stats"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Number of Samples:"),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("td",null,"Sample mean:"),r.a.createElement("td",null,o.toFixed(5))),r.a.createElement("tr",null,r.a.createElement("td",null,"Sample Standard Deviation (have not checked if curve is normal..):"),r.a.createElement("td",null,m.toFixed(5))),r.a.createElement("tr",null,r.a.createElement("td",null,"Percentage of all predictions which got the direction correct:"),r.a.createElement("td",null,l.toFixed(1),"%")),r.a.createElement("tr",null,r.a.createElement("td",null,"Percentage of direction-correct predictions which did not overestimate the actual outcome:"),r.a.createElement("td",null,i.toFixed(1),"%"))))},k=a(16),S=a(162);function M(){var e=new S.a({uri:"https://boiling-ridge-24261.herokuapp.com/v1/graphql"});return r.a.createElement(k.a,{client:e},r.a.createElement(O,null))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.6afbc408.chunk.js.map