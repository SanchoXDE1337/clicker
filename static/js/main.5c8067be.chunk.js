(window.webpackJsonpclicker2=window.webpackJsonpclicker2||[]).push([[0],{48:function(e,t,a){e.exports=a(62)},53:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=(a(53),a(13)),o=a(15),s=a.n(o),u=a(25),h=a(23),m=a(14),d=a(26),p=a(27),f=a(31),v=(a(55),a(104)),g=a(102),b=a(103),E=a(42),y=a.n(E),k=a(96),x=a(101),C=a(99),w=a(100),j=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.content;return r.a.createElement(k.a,{style:{marginBottom:"10px"}},r.a.createElement(C.a,null,r.a.createElement(w.a,{variant:"h5",component:"h2"},t),r.a.createElement(w.a,{variant:"body2",component:"p",style:{paddingTop:"10px"}},a)),r.a.createElement(x.a,null,r.a.createElement(v.a,{variant:"outlined",color:"secondary",size:"small",onClick:this.props.onClick,id:this.props.id},r.a.createElement(y.a,null))))}}]),t}(r.a.Component),A=a(4),O=a(105),S=Object(A.a)({root:{color:"#52af77",height:20},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(O.a);function I(e){return r.a.createElement(S,{valueLabelDisplay:"auto","aria-label":"pretto slider",value:e.value,step:1,min:0,max:10,onChange:e.onChange})}var D=10,L=0,z=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],value:0},a.addArticle=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fish-text.ru/get?type=title");case 2:return e.next=4,e.sent.json();case 4:return t=e.sent.text,e.next=7,fetch("https://fish-text.ru/get");case 7:return e.next=9,e.sent.json();case 9:n=e.sent.text,a.setArticle({title:t,content:n});case 11:case"end":return e.stop()}}),e)}))),a.setArticle=function(e){return a.setState({articles:[].concat(Object(l.a)(a.state.articles),[e])})},a.deleteArticle=function(){a.state.articles.pop(),a.setState({articles:a.state.articles})},a.handleDecrement=function(){a.state.value!==L&&(a.setState({value:a.state.value-1}),a.deleteArticle())},a.handleIncrement=function(){a.state.value!==D&&(a.setState({value:a.state.value+1}),a.addArticle())},a.handleChange=function(e){if(e.target.value<=D&&e.target.value>=L){var t=e.target.value-a.state.value;t>0?Array.from({length:t}).forEach((function(e,t){return a.addArticle()})):Array.from({length:-1*t}).forEach((function(e,t){return a.deleteArticle()})),a.setState({value:+e.target.value})}},a.handleDeleteClick=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.a)(a.state.articles),r=t.target.id,c=a.state.value,n.splice(r,1),e.next=6,a.setState({articles:n});case 6:return e.next=8,a.setState({value:c-1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.inputClick=function(e){return e.target.select()},a.handleSliderChange=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=n-a.state.value)>0?Array.from({length:r}).forEach((function(e,t){return a.addArticle()})):Array.from({length:-1*r}).forEach((function(e,t){return a.deleteArticle()})),e.next=4,a.setState({value:n});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.addArticle();case 2:this.setState({value:this.state.articles.length});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.articles;return r.a.createElement(g.a,{container:!0,spacing:3,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(g.a,{item:!0},r.a.createElement("h1",null,"CLICKER")),r.a.createElement(g.a,{item:!0,className:"slider"},r.a.createElement(I,{value:a,onChange:this.handleSliderChange})),r.a.createElement(g.a,{item:!0},r.a.createElement(g.a,{container:!0,justify:"center",alignItems:"center",spacing:2},r.a.createElement(g.a,{item:!0},r.a.createElement(v.a,{variant:"outlined",color:"secondary",size:"large",onClick:this.handleDecrement},"-")),r.a.createElement(g.a,{item:!0},r.a.createElement(b.a,{id:"outlined-number",label:"Articles:",value:a,inputProps:{style:{textAlign:"center"}},onChange:this.handleChange,type:"number",onClick:this.inputClick,InputLabelProps:{shrink:!0},variant:"outlined"})),r.a.createElement(g.a,{item:!0},r.a.createElement(v.a,{variant:"outlined",color:"primary",size:"large",onClick:this.handleIncrement},"+")))),r.a.createElement(g.a,{item:!0,md:4,className:"main"},n.map((function(t,a){var n=t.title,c=t.content;return r.a.createElement(j,{title:n,content:c,key:a,id:a,articles:e.state.articles,onClick:e.handleDeleteClick})}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.5c8067be.chunk.js.map