(this["webpackJsonpml-react"]=this["webpackJsonpml-react"]||[]).push([[0],{190:function(e,t,a){e.exports=a(380)},195:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(63),c=a.n(r),i=(a(195),a(26)),u=a(97),o=a(68),m=a(69),d=a(71),s=a(2),E=a.n(s),p=a(46),f=a.n(p),b=(a(73),a(5)),v=a(12);function g(e){var t=e.data,a=e.constants;return l.a.createElement("div",{className:"charts absolute"},l.a.createElement("hr",null),l.a.createElement("div",{className:"stats"},l.a.createElement(F,{data:t,constants:a})),l.a.createElement("hr",null),l.a.createElement("div",{className:"distribution"},l.a.createElement(x,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"scatter"},l.a.createElement(y,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"scatter"},l.a.createElement(h,{data:t})))}var h=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return{actual:Number(t.toFixed(4)),prediction:Number(a.toFixed(4)),z:1}})),n=E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a>n?a>e?a:e:n>e?n:e}),-1/0),r=[E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a<n?a<e?a:e:n<e?n:e}),1/0),n];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Price distribution scatter"),l.a.createElement(b.c,null,l.a.createElement(b.e,{margin:{top:50,bottom:20,right:70,left:20}},l.a.createElement(b.a,null),l.a.createElement(b.g,{type:"number",dataKey:"actual",name:"actual",domain:r,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),l.a.createElement(b.h,{type:"number",dataKey:"prediction",name:"prediction",domain:r,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),l.a.createElement(b.i,{dataKey:"z",range:[1,10]}),l.a.createElement(b.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(b.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:1},lineType:"fitting"}))))})),y=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction,n=e.close;return{actual:Number((t-n).toFixed(4)),prediction:Number((a-n).toFixed(4)),z:1}})),n=Object(v.standardDeviation)(E.a.map(a,"actual")),r=-1*n,c=E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a>n?a>e?a:e:n>e?n:e}),-1/0),i=[E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a<n?a<e?a:e:n<e?n:e}),1/0),c];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Prediction difference distribution scatter"),l.a.createElement(b.c,null,l.a.createElement(b.e,{margin:{top:50,bottom:20,right:70,left:20}},l.a.createElement(b.a,null),l.a.createElement(b.g,{type:"number",dataKey:"actual",name:"actual",domain:i,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),l.a.createElement(b.h,{type:"number",dataKey:"prediction",name:"prediction",domain:i,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),l.a.createElement(b.i,{dataKey:"z",range:[1,10]}),l.a.createElement(b.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(b.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:2},lineType:"fitting"}),l.a.createElement(b.b,{x:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideBottomRight"}}),l.a.createElement(b.b,{x:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideBottomRight"}}),l.a.createElement(b.b,{y:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideTopLeft"}}),l.a.createElement(b.b,{y:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideTopLeft"}}))))})),x=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((a-t).toFixed(4))})),n=2*Object(v.max)([0-Object(v.min)(a),Object(v.max)(a)]),r=n/50,c=Object(v.mean)(a),i=Object(v.standardDeviation)(a),u=n/2*-1,o=E.a.map(E.a.range(0,51),(function(e){var t=Number((u+r*(e-.5)).toFixed(5)),n=Number((u+r*e).toFixed(5)),l=Number((u+r*(e+.5)).toFixed(5)),c=E.a.filter(a,(function(e){return e>t&&e<=l}));return{name:n,value:E.a.size(c),size:0}})),m=c+i,d=c-i;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Variations distribution"),l.a.createElement(b.c,null,l.a.createElement(b.e,{margin:{top:20,bottom:20,left:-25}},l.a.createElement(b.g,{dataKey:"name"}),l.a.createElement(b.h,{dataKey:"value"}),l.a.createElement(b.i,{dataKey:"size",range:[1,10]}),l.a.createElement(b.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(b.d,{data:o,line:{stroke:"#82ca9d",strokeWidth:1},stroke:"#82ca9d"}),l.a.createElement(b.b,{x:c,stroke:"#C98BBE",label:{value:"Mean",orientation:90,position:"insideBottomRight"}}),l.a.createElement(b.b,{x:m,stroke:"#C98BBE",label:{value:"+ \u03c3",orientation:90,position:"insideBottomRight"}}),l.a.createElement(b.b,{x:d,stroke:"#C98BBE",label:{value:"- \u03c3",orientation:90,position:"insideBottomRight"}}))))})),F=Object(n.memo)((function(e){var t=e.data,a=e.constants,r=Object(n.useState)(100),c=Object(i.a)(r,2),u=c[0],o=c[1],m=Object(n.useState)(E.a.get(a,"spread")),d=Object(i.a)(m,2),s=d[0],p=d[1],f=Object(n.useState)(E.a.get(a,"avgRange")),b=Object(i.a)(f,2),g=b[0],h=b[1],y=E.a.size(t);Object(n.useEffect)((function(){p(E.a.get(a,"spread")),h(E.a.get(a,"avgRange"))}),[a]);var x=E.a.map(t,(function(e){var t=e.actual,a=e.prediction,n=e.close,l=e.id,r=e.ma100;return{actual:Number((t-n).toFixed(5)),prediction:Number((a-n).toFixed(5)),accuracy:Number((a-t).toFixed(5)),id:l,close:n,ma100:r}})),F=E.a.map(x,"accuracy"),k=Object(v.mean)(F),N=Object(v.standardDeviation)(F),z=N*u/100+s,B=-1*z,O=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction;return t>s&&a>z}))),j=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction;return t>0&&a>=B&&a<=z}))),D=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction;return t>-1*s&&a<B}))),C=E.a.size(E.a.filter(x,(function(e){return e.prediction>z}))),_=E.a.size(E.a.filter(x,(function(e){var t=e.prediction;return t>=B&&t<=z}))),R=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction;return t<s&&a>z}))),S=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction;return t<0&&a>=B&&a<=z}))),P=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction;return t<-1*s&&a<B}))),A=E.a.size(E.a.filter(x,(function(e){return e.prediction<B}))),K=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t>s&&a>z&&n&&l>n}))),T=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t>0&&a>=B&&a<=z&&n&&l>n}))),w=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t>-1*s&&a<B&&n&&l>n}))),M=E.a.size(E.a.filter(x,(function(e){var t=e.prediction,a=e.ma100,n=e.close;return t>z&&a&&n>a}))),U=E.a.size(E.a.filter(x,(function(e){var t=e.prediction,a=e.ma100,n=e.close;return t>=B&&t<=z&&a&&n>a}))),W=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t<s&&a>z&&n&&l>n}))),L=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t<0&&a>=B&&a<=z&&n&&l>n}))),I=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t<-1*s&&a<B&&n&&l>n}))),V=E.a.size(E.a.filter(x,(function(e){var t=e.prediction,a=e.ma100,n=e.close;return t<B&&a&&n>a}))),$=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t>s&&a>z&&n&&l<n}))),G=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t>0&&a>=B&&a<=z&&n&&l<n}))),q=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t>-1*s&&a<B&&n&&l<n}))),H=E.a.size(E.a.filter(x,(function(e){var t=e.prediction,a=e.ma100,n=e.close;return t>z&&a&&n<a}))),J=E.a.size(E.a.filter(x,(function(e){var t=e.prediction,a=e.ma100,n=e.close;return t>=B&&t<=z&&a&&n<a}))),X=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t<s&&a>z&&n&&l<n}))),Y=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t<0&&a>=B&&a<=z&&n&&l<n}))),Q=E.a.size(E.a.filter(x,(function(e){var t=e.actual,a=e.prediction,n=e.ma100,l=e.close;return t<-1*s&&a<B&&n&&l<n}))),Z=E.a.size(E.a.filter(x,(function(e){var t=e.prediction,a=e.ma100,n=e.close;return t<B&&a&&n<a})));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Basic Stats"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Number of Samples:"),l.a.createElement("td",null,y)),l.a.createElement("tr",null,l.a.createElement("td",null,"Accuracy ( Prediction minus Actual ) mean:"),l.a.createElement("td",null,k.toFixed(5))),l.a.createElement("tr",null,l.a.createElement("td",null,"Accuracy Standard Deviation:"),l.a.createElement("td",null,N.toFixed(5))),l.a.createElement("tr",null,l.a.createElement("td",null,"Spread on file:"),l.a.createElement("td",null,E.a.get(a,"spread","none"))),l.a.createElement("tr",null,l.a.createElement("td",null,"True range on file:"),l.a.createElement("td",null,E.a.get(a,"avgRange","none"))))),l.a.createElement("br",null),l.a.createElement("div",{className:"options"},l.a.createElement("div",null,l.a.createElement("p",null,"Modelling true range:"),l.a.createElement("input",{type:"number",onChange:function(e){return h(Number(e.target.value))},value:g,min:0})),l.a.createElement("div",null,l.a.createElement("p",null,"Modelling spread:"),l.a.createElement("input",{type:"number",onChange:function(e){return p(Number(e.target.value))},value:s,min:0})),l.a.createElement("div",null,l.a.createElement("p",null,"Modelling % of accuracy Standard Deviation:"),l.a.createElement("input",{type:"number",onChange:function(e){return o(Number(e.target.value))},value:u,min:0}))),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Total threshold to trade:"),l.a.createElement("td",null,z.toFixed(5))),l.a.createElement("tr",null,l.a.createElement("td",null,"Threshold % of True Range:"),l.a.createElement("td",null,(z/g*100).toFixed(2))))),l.a.createElement("br",null),l.a.createElement("table",{className:"comparison-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No trend"),l.a.createElement("th",null,"Prediction: Up"),l.a.createElement("th",null,"Prediction: None"),l.a.createElement("th",null,"Prediction: Down"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Up"),l.a.createElement("td",null,O," / ",(O/C*100).toFixed(1),"%"),l.a.createElement("td",null,j," / ",(j/_*100).toFixed(1),"%"),l.a.createElement("td",null,D," / ",(D/A*100).toFixed(1),"%")),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Down"),l.a.createElement("td",null,R," / ",(R/C*100).toFixed(1),"%"),l.a.createElement("td",null,S," / ",(S/_*100).toFixed(1),"%"),l.a.createElement("td",null,P," / ",(P/A*100).toFixed(1),"%")),l.a.createElement("tr",null,l.a.createElement("th",null,"Total"),l.a.createElement("td",null,C),l.a.createElement("td",null,_),l.a.createElement("td",null,A)))),l.a.createElement("br",null),l.a.createElement("table",{className:"comparison-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Up Trend"),l.a.createElement("th",null,"Prediction: Up"),l.a.createElement("th",null,"Prediction: None"),l.a.createElement("th",null,"Prediction: Down"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Up"),l.a.createElement("td",null,K," / ",(K/M*100).toFixed(1),"%"),l.a.createElement("td",null,T," / ",(T/U*100).toFixed(1),"%"),l.a.createElement("td",null,w," / ",(w/V*100).toFixed(1),"%")),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Down"),l.a.createElement("td",null,W," / ",(W/M*100).toFixed(1),"%"),l.a.createElement("td",null,L," / ",(L/U*100).toFixed(1),"%"),l.a.createElement("td",null,I," / ",(I/V*100).toFixed(1),"%")),l.a.createElement("tr",null,l.a.createElement("th",null,"Total"),l.a.createElement("td",null,M),l.a.createElement("td",null,U),l.a.createElement("td",null,V)))),l.a.createElement("br",null),l.a.createElement("table",{className:"comparison-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Down Trend"),l.a.createElement("th",null,"Prediction: Up"),l.a.createElement("th",null,"Prediction: None"),l.a.createElement("th",null,"Prediction: Down"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Up"),l.a.createElement("td",null,$," / ",($/H*100).toFixed(1),"%"),l.a.createElement("td",null,G," / ",(G/J*100).toFixed(1),"%"),l.a.createElement("td",null,q," / ",(q/Z*100).toFixed(1),"%")),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Down"),l.a.createElement("td",null,X," / ",(X/H*100).toFixed(1),"%"),l.a.createElement("td",null,Y," / ",(Y/J*100).toFixed(1),"%"),l.a.createElement("td",null,Q," / ",(Q/Z*100).toFixed(1),"%")),l.a.createElement("tr",null,l.a.createElement("th",null,"Total"),l.a.createElement("td",null,H),l.a.createElement("td",null,J),l.a.createElement("td",null,Z)))))}));function k(e){var t=e.data;return l.a.createElement("div",{className:"charts change"},l.a.createElement("hr",null),l.a.createElement("div",{className:"stats"},l.a.createElement(B,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"distribution"},l.a.createElement(z,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"scatter"},l.a.createElement(N,{data:t})))}var N=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return{actual:Number(100*t.toFixed(4)),prediction:Number(100*a.toFixed(4)),z:1}})),n=Object(v.standardDeviation)(E.a.map(a,"actual")),r=-1*n,c=E.a.reduce(a,(function(e,t){var a=Math.abs(E.a.get(t,"actual")),n=Math.abs(E.a.get(t,"prediction"));return a>n?a>e?a:e:n>e?n:e}),-1/0),i=[-1*Math.ceil(2*c)/2,1*Math.ceil(2*c)/2];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Predictions vs Actuals scatter"),l.a.createElement(b.c,null,l.a.createElement(b.e,{margin:{top:50,bottom:20,right:70,left:20}},l.a.createElement(b.a,null),l.a.createElement(b.g,{type:"number",dataKey:"actual",name:"actual",domain:i,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),l.a.createElement(b.h,{type:"number",dataKey:"prediction",name:"prediction",domain:i,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),l.a.createElement(b.i,{dataKey:"z",range:[1,10]}),l.a.createElement(b.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(b.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:1},lineType:"fitting"}),l.a.createElement(b.b,{x:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideBottomRight"}}),l.a.createElement(b.b,{x:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideBottomRight"}}),l.a.createElement(b.b,{y:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideTopLeft"}}),l.a.createElement(b.b,{y:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideTopLeft"}}))))})),z=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number(100*(t-a).toFixed(4))})),n=2*Object(v.max)([0-Object(v.min)(a),Object(v.max)(a)]),r=n/50,c=Object(v.mean)(a),i=Object(v.standardDeviation)(a),u=n/2*-1,o=E.a.map(E.a.range(0,51),(function(e){var t=Number((u+r*(e-.5)).toFixed(5)),n=Number((u+r*e).toFixed(5)),l=Number((u+r*(e+.5)).toFixed(5)),c=E.a.filter(a,(function(e){return e>t&&e<=l}));return{name:n,value:E.a.size(c),size:0}})),m=c+i,d=c-i;return console.log(d,m),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Variations distribution"),l.a.createElement(b.c,null,l.a.createElement(b.e,{margin:{top:20,bottom:20,left:-25}},l.a.createElement(b.g,{dataKey:"name"}),l.a.createElement(b.h,{dataKey:"value"}),l.a.createElement(b.i,{dataKey:"size",range:[1,10]}),l.a.createElement(b.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(b.d,{data:o,line:{stroke:"#82ca9d",strokeWidth:1},stroke:"#82ca9d"}),l.a.createElement(b.b,{x:c,stroke:"#C98BBE",label:{value:"Mean",orientation:90,position:"insideBottomRight"}}),l.a.createElement(b.b,{x:m,stroke:"#C98BBE",label:{value:"+ \u03c3",orientation:90,position:"insideBottomRight"}}),l.a.createElement(b.b,{x:d,stroke:"#C98BBE",label:{value:"- \u03c3",orientation:90,position:"insideBottomRight"}}))))})),B=Object(n.memo)((function(e){var t=e.data,a=E.a.size(t),n=E.a.map(t,"actual"),r=Object(v.mean)(n),c=Object(v.standardDeviation)(n)-r,i=r-c,u=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>c&&a>c}))),o=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>c&&a>=i&&a<=c}))),m=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>c&&a<i}))),d=E.a.size(E.a.filter(t,(function(e){return e.actual>c}))),s=E.a.size(E.a.filter(t,(function(e){return e.prediction>c}))),p=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=i&&t<=c&&a>c}))),f=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=i&&t<=c&&a>=i&&a<=c}))),b=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t>=i&&t<=c&&a<i}))),g=E.a.size(E.a.filter(t,(function(e){var t=e.actual;return t>=i&&t<=c}))),h=E.a.size(E.a.filter(t,(function(e){var t=e.prediction;return t>=i&&t<=c}))),y=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<i&&a>c}))),x=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<i&&a>=i&&a<=c}))),F=E.a.size(E.a.filter(t,(function(e){var t=e.actual,a=e.prediction;return t<i&&a<i}))),k=E.a.size(E.a.filter(t,(function(e){return e.actual<i}))),N=E.a.size(E.a.filter(t,(function(e){return e.prediction<i}))),z=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((t-a).toFixed(4))})),B=Object(v.mean)(z),O=Object(v.standardDeviation)(z);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Basic Stats"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Number of Samples:"),l.a.createElement("td",null,a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Sample mean:"),l.a.createElement("td",null,B.toFixed(5))),l.a.createElement("tr",null,l.a.createElement("td",null,"Sample Standard Deviation:"),l.a.createElement("td",null,O.toFixed(5))))),l.a.createElement("br",null),l.a.createElement("table",{className:"comparison-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Prediction Up"),l.a.createElement("th",null,"Prediction Flat"),l.a.createElement("th",null,"Prediction Down"),l.a.createElement("th",null,"Total"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Up"),l.a.createElement("td",null,u," / ",(u/s*100).toFixed(1),"%"),l.a.createElement("td",null,o," / ",(o/h*100).toFixed(1),"%"),l.a.createElement("td",null,m," / ",(m/N*100).toFixed(1),"%"),l.a.createElement("td",null,d)),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Flat"),l.a.createElement("td",null,p," / ",(p/s*100).toFixed(1),"%"),l.a.createElement("td",null,f," / ",(f/h*100).toFixed(1),"%"),l.a.createElement("td",null,b," / ",(b/N*100).toFixed(1),"%"),l.a.createElement("td",null,g)),l.a.createElement("tr",null,l.a.createElement("th",null,"Actual Down"),l.a.createElement("td",null,y," / ",(y/s*100).toFixed(1),"%"),l.a.createElement("td",null,x," / ",(x/h*100).toFixed(1),"%"),l.a.createElement("td",null,F," / ",(F/N*100).toFixed(1),"%"),l.a.createElement("td",null,k)),l.a.createElement("tr",null,l.a.createElement("th",null,"Total"),l.a.createElement("td",null,s),l.a.createElement("td",null,h),l.a.createElement("td",null,N),l.a.createElement("td",null,d+g+k," / ",s+h+N)))),l.a.createElement("p",null,"% are of number of predictions per the actual, so accuracy in that actual direction"))}));function O(e){var t=e.data;return l.a.createElement("div",{className:"charts absolute"},l.a.createElement("hr",null),l.a.createElement("div",{className:"stats"},l.a.createElement(_,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"distribution"},l.a.createElement(C,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"scatter"},l.a.createElement(D,{data:t})),l.a.createElement("hr",null),l.a.createElement("div",{className:"scatter"},l.a.createElement(j,{data:t})))}var j=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return{actual:Number(t.toFixed(4)),prediction:Number(a.toFixed(4)),z:1}})),n=E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a>n?a>e?a:e:n>e?n:e}),-1/0),r=[E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a<n?a<e?a:e:n<e?n:e}),1/0),n];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Price distribution scatter"),l.a.createElement(b.c,null,l.a.createElement(b.e,{margin:{top:50,bottom:20,right:70,left:20}},l.a.createElement(b.a,null),l.a.createElement(b.g,{type:"number",dataKey:"actual",name:"actual",domain:r,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),l.a.createElement(b.h,{type:"number",dataKey:"prediction",name:"prediction",domain:r,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),l.a.createElement(b.i,{dataKey:"z",range:[1,10]}),l.a.createElement(b.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(b.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:1},lineType:"fitting"}))))})),D=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction,n=e.close;return{actual:Number((t-n).toFixed(4)),prediction:Number((a-n).toFixed(4)),z:1}})),n=Object(v.standardDeviation)(E.a.map(a,"actual")),r=-1*n,c=E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a>n?a>e?a:e:n>e?n:e}),-1/0),i=[E.a.reduce(a,(function(e,t){var a=E.a.get(t,"actual"),n=E.a.get(t,"prediction");return a<n?a<e?a:e:n<e?n:e}),1/0),c];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Prediction difference distribution scatter"),l.a.createElement(b.c,null,l.a.createElement(b.e,{margin:{top:50,bottom:20,right:70,left:20}},l.a.createElement(b.a,null),l.a.createElement(b.g,{type:"number",dataKey:"actual",name:"actual",domain:i,label:{value:"Actual Change (cents)",position:"bottom",offset:0}}),l.a.createElement(b.h,{type:"number",dataKey:"prediction",name:"prediction",domain:i,label:{value:"Predicted Change (cents)",position:"left",angle:-90,offset:0}}),l.a.createElement(b.i,{dataKey:"z",range:[1,10]}),l.a.createElement(b.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(b.d,{data:a,fill:"#82ca9d",shape:"circle",line:{stroke:"#e16162",strokeWidth:2},lineType:"fitting"}),l.a.createElement(b.b,{x:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideBottomRight"}}),l.a.createElement(b.b,{x:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideBottomRight"}}),l.a.createElement(b.b,{y:n,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"+ \u03c3",position:"insideTopLeft"}}),l.a.createElement(b.b,{y:r,stroke:"#C98BBE",strokeDasharray:"3 6",label:{value:"- \u03c3",position:"insideTopLeft"}}))))})),C=Object(n.memo)((function(e){var t=e.data,a=E.a.map(t,(function(e){var t=e.actual,a=e.prediction;return Number((a-t).toFixed(4))})),n=2*Object(v.max)([0-Object(v.min)(a),Object(v.max)(a)]),r=n/50,c=Object(v.mean)(a),i=Object(v.standardDeviation)(a),u=n/2*-1,o=E.a.map(E.a.range(0,51),(function(e){var t=Number((u+r*(e-.5)).toFixed(5)),n=Number((u+r*e).toFixed(5)),l=Number((u+r*(e+.5)).toFixed(5)),c=E.a.filter(a,(function(e){return e>t&&e<=l}));return{name:n,value:E.a.size(c),size:0}})),m=c+i,d=c-i;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Variations distribution"),l.a.createElement(b.c,null,l.a.createElement(b.e,{margin:{top:20,bottom:20,left:-25}},l.a.createElement(b.g,{dataKey:"name"}),l.a.createElement(b.h,{dataKey:"value"}),l.a.createElement(b.i,{dataKey:"size",range:[1,10]}),l.a.createElement(b.f,{cursor:{strokeDasharray:"3 3"}}),l.a.createElement(b.d,{data:o,line:{stroke:"#82ca9d",strokeWidth:1},stroke:"#82ca9d"}),l.a.createElement(b.b,{x:c,stroke:"#C98BBE",label:{value:"Mean",orientation:90,position:"insideBottomRight"}}),l.a.createElement(b.b,{x:m,stroke:"#C98BBE",label:{value:"+ \u03c3",orientation:90,position:"insideBottomRight"}}),l.a.createElement(b.b,{x:d,stroke:"#C98BBE",label:{value:"- \u03c3",orientation:90,position:"insideBottomRight"}}))))})),_=Object(n.memo)((function(e){var t=e.data,a=E.a.size(t),n=E.a.map(t,(function(e){var t=e.actual,a=e.prediction,n=e.close;return{actual:Number((t-n).toFixed(5)),prediction:Number((a-n).toFixed(5)),accuracy:Number((a-t).toFixed(5))}})),r=E.a.map(n,"accuracy"),c=Object(v.mean)(r),i=Object(v.standardDeviation)(r);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Basic Stats"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Number of Samples:"),l.a.createElement("td",null,a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Accuracy ( Prediction minus Actual ) mean:"),l.a.createElement("td",null,c.toFixed(5))),l.a.createElement("tr",null,l.a.createElement("td",null,"Accuracy Standard Deviation:"),l.a.createElement("td",null,i.toFixed(5))))))}));function R(){var e=Object(u.a)(["\nquery GetPredictions ( $version: Int!, $was_back_predicted: [Boolean!], $start_time: timestamptz! ) {\n    predictions ( where: { \n        prediction: { _is_null: false }, \n        actual: { _is_null: false }, \n        close: { _is_null: false }, \n        _version: { _eq: $version }, \n        was_back_predicted: { _in: $was_back_predicted },\n        time: { _gte: $start_time }\n    }) {\n        actual id time\n        prediction\n        _version\n        close ma100\n    }\n}"]);return R=function(){return e},e}function S(){var e=Object(u.a)(["\nquery GetVersions {\n    versions ( order_by: { id: asc } ) { id prediction_type instrument depth granularity }\n}"]);return S=function(){return e},e}var P=f()(S()),A=f()(R()),K={GBP_JPY:{M15:{spread:.015,avgRange:.1}},EUR_USD:{M30:{spread:5e-5,avgRange:.003},H1:{spread:5e-5,avgRange:.015},H4:{spread:5e-5,avgRange:.06},M15:{spread:5e-5,avgRange:5e-4}},XAU_USD:{M30:{spread:.65,avgRange:3}},MBTC_USD:{M15:{spread:.6,avgRange:.4},H1:{spread:.6,avgRange:.5}},GBP_USD:{M15:{spread:8e-4,avgRange:.001}},AU200_AUD:{M5:{avgRange:5,spread:1}}};function T(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),u=Object(i.a)(c,2),s=u[0],p=u[1],f=Object(n.useState)(0),b=Object(i.a)(f,2),v=b[0],h=b[1],y=0===v?new Date(0).toISOString():new Date(Date.now()-864e5*v).toISOString(),x=Object(o.b)(P).data,F=Object(o.a)(A),N=Object(i.a)(F,2),z=N[0],B=N[1],j=B.data,D=B.loading,C=E.a.get(x,"versions"),_=E.a.get(a,"id"),R=E.a.get(j,"predictions"),S=E.a.get(a,"prediction_type"),T=E.a.get(a,"instrument"),w=E.a.get(a,"granularity"),M=E.a.get(a,"depth"),U=E.a.get(K,[T,w],{});return Object(n.useEffect)((function(){E.a.isEmpty(a)&&!E.a.isEmpty(C)&&r(E.a.last(C))}),[C]),Object(n.useEffect)((function(){_&&z({variables:{version:_,was_back_predicted:s?[!0,!1]:[!1],start_time:y}})}),[a,s,v]),l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Visualisation and Stats analysis of my ML model"),l.a.createElement("p",null,"All predictions pulled for my model, visualised and analysed.")),l.a.createElement("div",{className:"options"},l.a.createElement("div",null,l.a.createElement("p",null,"Select Version:"),l.a.createElement("select",{value:_,onChange:function(e){return r(E.a.find(C,["id",Number(e.target.value)]))}},!E.a.isEmpty(C)&&E.a.map(C,(function(e){var t=e.id;return l.a.createElement("option",{key:t,value:t},t)})))),l.a.createElement("div",{onClick:function(){return p(!s)}},l.a.createElement("p",null,"Include back-predicted results"),s?l.a.createElement(m.a,{icon:d.a}):l.a.createElement(m.a,{icon:d.c,className:"unchecked"})),l.a.createElement("div",null,l.a.createElement("p",null,"How many days back (0 = all)?"),l.a.createElement("input",{type:"number",onChange:function(e){return h(Number(e.target.value))},value:v}))),l.a.createElement("div",{className:"version-info"},l.a.createElement("p",null,"Instrument: ",l.a.createElement("span",null,T)),l.a.createElement("p",null,"Granularity: ",l.a.createElement("span",null,w)),l.a.createElement("p",null,"Depth: ",l.a.createElement("span",null,M))),l.a.createElement("br",null),D||!a?l.a.createElement("div",{className:"loader"},l.a.createElement(m.a,{icon:d.b,spin:!0,size:"3x"})):l.a.createElement(l.a.Fragment,null,E.a.isEmpty(R)?l.a.createElement("p",null,"Nothing to display - change a filter!"):l.a.createElement(l.a.Fragment,null,"absolute"===S&&l.a.createElement(g,{data:R,constants:U}),"change"===S&&l.a.createElement(k,{data:R,constants:U}),"highs"===S&&l.a.createElement(O,{data:R,constants:U}))))}var w=a(18),M=a(163);function U(){var e=new M.a({uri:"https://boiling-ridge-24261.herokuapp.com/v1/graphql"});return l.a.createElement(w.a,{client:e},l.a.createElement(T,null))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.1603e225.chunk.js.map