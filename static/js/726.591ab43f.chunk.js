"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[726],{4726:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(2791),a=n(9806),r=n(1632),s=n(8958),c=n(184),o=function(e){var t=e.data;return(0,c.jsx)("article",{className:"degree-container",children:(0,c.jsxs)("header",{children:[(0,c.jsxs)("p",{style:{float:"right"},children:["GPA: ",t.gpa]}),(0,c.jsx)("h4",{className:"degree",children:t.degree}),(0,c.jsxs)("p",{className:"school",children:[(0,c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},l=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"education",children:[(0,c.jsx)("div",{className:"link-to",id:"education"}),(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{style:{color:"#FF5809"},children:"Education"}),(0,c.jsx)("p",{}),(0,c.jsx)("p",{})]}),t.map((function(e){return(0,c.jsx)(o,{data:e},e.school)})),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]})};l.defaultProps={data:[]};var u=l,d=function(e){var t=e.data;return(0,c.jsxs)("article",{className:"jobs-container",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h4",{style:{float:"right"},children:t.location}),(0,c.jsx)("img",{src:t.icon,height:20,style:{float:"left",paddingRight:5,verticalAlign:"middle",paddingTop:5}}),(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:t.link,children:t.company})})]}),(0,c.jsx)("p",{className:"daterange",style:{float:"right"},children:t.daterange}),(0,c.jsx)("h4",{children:t.position})]}),(0,c.jsxs)("ul",{className:"points",children:[t.points.map((function(e){return(0,c.jsx)("li",{children:e},e)})),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]})]})},h=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"experience",children:[(0,c.jsx)("div",{className:"link-to",id:"experience"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h2",{style:{color:"#FF5809"},children:"Experience"})}),t.map((function(e){return(0,c.jsx)(d,{data:e},e.company)}))]})};h.defaultProps={data:[]};var g=h,p=n(5671),m=n(3144),y=n(136),f=n(5716),v=n(4942),x=n(1413),j=function(e){var t=e.handleClick,n=e.active,i=e.label;return(0,c.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},b=function(e){var t=e.data,n=e.categories,i=t.category,a=t.competency,r=t.title,s={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,x.Z)((0,x.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return(0,c.jsxs)("div",{className:"skillbar clearfix",children:[(0,c.jsx)("div",{className:"skillbar-title",style:s,children:(0,c.jsx)("span",{children:r})}),(0,c.jsx)("div",{className:"skillbar-bar",style:o}),(0,c.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};b.defaultProps={categories:[]};var k=b,w=function(e){(0,y.Z)(n,e);var t=(0,f.Z)(n);function n(e){var i;return(0,p.Z)(this,n),(i=t.call(this,e)).handleChildClick=function(e){i.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,i){return(0,x.Z)((0,x.Z)({},n),{},(0,v.Z)({},i,e===i&&!t.buttons[i]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},i.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,x.Z)((0,x.Z)({},e),{},(0,v.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),i}return(0,m.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,c.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,c.jsx)(j,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsx)("div",{className:"link-to",id:"skills"}),(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{style:{color:"#FF5809"},children:"Skills"}),(0,c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(i.Component);w.defaultProps={skills:[],categories:[]};var N=w,C=[{school:"Beijing University of Posts and Telecommunications",pic:"https://www.bupt.edu.cn/__local/C/8E/F7/EE902059AE32E0E6325EFEE8F46_B2D41D06_CD58.png",degree:"B.E. in Software Engineering",gpa:"87/100",link:"https://scs.bupt.edu.cn/",year:"class of 2019"}],P=[{company:"Microsoft",icon:"https://www.microsoft.com/favicon.ico",location:"Beijing, China",position:"Software Engineering Intern",link:"https://azure.microsoft.com/zh-cn/products/machine-learning/",daterange:"Feb. 2023 \u2013 Aug. 2023",points:["I\u2019m currently a software engineering intern at Microsoft China in Azure big data group.","I\u2019m developing autonomous machine learning platform using PySpark."]},{company:"National University of Singapore",location:"Singapore",icon:"https://static.wixstatic.com/media/be90e0_d38d1474023f4f5db9e222ae075096ee~mv2.png/v1/fill/w_190,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NExT%252B%252B_edited.png",position:"Research Assistant Intern",link:"https://www.nextcenter.org/",daterange:"Apr. 2022 \u2013 Present",points:["I am currently an intern research assistant at the NExT++ Centre in National University of Singapore, supervised by Prof. Tat-Seng Chua.","My research projects focus on Temporal Knowledge Graph, in detail event forecasting, and complex event retrieval.\nWe are currently preparing a conference manuscript to share our work."]},{company:"Tsinghua University",location:"Beijing, China",icon:"https://www.tsinghua.edu.cn/favicon.ico",position:"Research Assistant Intern",link:"https://yongjinliu.github.io/",daterange:"Aug. 2021 \u2013 Apr. 2022",points:["I did a research internship at the Institute of HCI and Media Integration in Tsinghua University supervised by Prof. Yongjin Liu.","There my research projects focused on multimodal sketch-based computer vision problems, including image retrieval, image generation, and text co-conditioned image generation."]}],E=n(2982),Z=[{title:"PyTorch",competency:4,category:["Machine Learning","Python"]},{title:"TensorFlow",competency:3,category:["Machine Learning","Python"]},{title:"Caffe",competency:1,category:["Machine Learning"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"Python",competency:5,category:["Programming Languages","Machine Learning"]},{title:"C++",competency:3,category:["Programming Languages"]},{title:"Java",competency:4,category:["Programming Languages","Java"]},{title:"C#",competency:2,category:["Programming Languages"]},{title:"Javascript",competency:2,category:["Web Development","Programming Languages","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Netty",competency:1,category:["Web Development","Java"]},{title:"MyBatis",competency:1,category:["Web Development","Java"]},{title:"JavaFX",competency:2,category:["Java"]},{title:"MySQL",competency:3,category:["Java","Web Development"]}].map((function(e){return(0,x.Z)((0,x.Z)({},e),{},{category:e.category.sort()})})),_=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],A=(0,E.Z)(new Set(Z.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:_[t]}})),F=function(){return(0,c.jsx)(s.Z,{title:"Resume",children:(0,c.jsxs)("article",{className:"post",id:"resume",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("a",{style:{textDecorationLine:null,float:"right"},href:"resume.pdf",download:"resume.pdf",children:(0,c.jsx)(a.G,{icon:r.kwI,size:"2x"})}),(0,c.jsx)("h2",{"data-testid":"heading",children:"Resume"})]})}),(0,c.jsx)(u,{data:C}),(0,c.jsx)(g,{data:P}),(0,c.jsx)(N,{skills:Z,categories:A})]})})}}}]);
//# sourceMappingURL=726.591ab43f.chunk.js.map