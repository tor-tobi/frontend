(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{45365:function(e,t,a){Promise.resolve().then(a.bind(a,47590))},47590:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var s=a(74940),n=a(15337),r=a(18868),l=a(98965),c=a(38728),i=a(15392),u=a(41576),o=a(44957),d=a(42376),w=a(52720),x=a(87758),f=a(83546),m=a(56791),h=a(58673),k=a(44772),g=a(90558),p=a(4824),v=a(58166),j=a(84960),y=a(75215),N=a(50588);function b(){var e=[{key:v.BU.Goerli,value:v.w5.Wagmi},{key:v.BU.Sepolia,value:v.w5.Wagmi},{key:v.BU.Mumbai,value:v.w5.Wagmi},{key:v.BU.StarkNet,value:v.w5.ArgentX}],t=(0,l._)((0,f.useState)(!1),2),a=t[0],b=t[1],_=(0,l._)((0,f.useState)({key:"",value:v.w5.Wagmi}),2),C=_[0],S=_[1],W=(0,l._)((0,f.useState)({address:"",wallet:"",network:""}),2),A=W[0],B=W[1],U=(0,l._)((0,f.useState)({chain:"",proof:"",address:""}),2),E=U[0],P=U[1],X=(0,y.mA)(),Z=X.address,M=X.isConnected,O=(0,j.useAccount)(),Y=O.address,F=O.isConnected,G=(0,y.LN)().chain,I=(0,y.g0)().switchNetwork;function K(){return(K=(0,s._)(function(){return(0,c.__generator)(this,function(e){switch(e.label){case 0:switch(b(!0),C.value){case v.w5.Wagmi:return[3,1];case v.w5.ArgentX:return[3,3]}return[3,5];case 1:case 3:case 5:return[4,new Promise(function(e){return setTimeout(e,1e3)})];case 2:return e.sent(),console.log("withdrawEVM",null==G?void 0:G.name),console.log(E.chain,E.proof,E.address),[3,7];case 4:return e.sent(),console.log("withdrawStarkNet",null==G?void 0:G.name),[3,7];case 6:return e.sent(),console.log("withdrawDefault"),[3,7];case 7:return b(!1),[2]}})})).apply(this,arguments)}return(0,f.useEffect)(function(){if(M&&C.value==v.w5.Wagmi){switch(C.key){case v.BU.Goerli:null==I||I(5);break;case v.BU.Sepolia:null==I||I(11155111);break;case v.BU.Mumbai:null==I||I(80001)}B(function(){return{network:C.key,wallet:C.value,address:null!=Z?Z:""}})}else F&&C.value==v.w5.ArgentX?B(function(){return{network:C.key,wallet:C.value,address:null!=Y?Y:""}}):C.value==v.w5.Wagmi?B(function(){return{network:C.key,wallet:C.value,address:null!=Z?Z:""}}):B(function(){return{network:C.key,wallet:C.value,address:null!=Y?Y:""}})},[C.key,Z,Y]),(0,f.useEffect)(function(){P({chain:C.key,proof:E.proof,address:E.address})},[E]),(0,i.jsxs)("div",{className:"max-w-70 pt-12 mb-12 mx-4 lg:mx-0",children:[a&&(0,i.jsx)(g.Z,{}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(o.Z,{children:"Withdraw"}),(0,i.jsx)(d.Z,{className:"bg-cat-mantle p-5 rounded",children:(0,i.jsxs)(w.e,{className:"space-y-2",children:[(0,i.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-2",children:[(0,i.jsx)(x.x,{className:"text-cat-text",children:"Chain"}),""!==C.key?C.value==v.w5.ArgentX?(0,i.jsx)(k.Y,{}):(0,i.jsx)(N.O,{}):(0,i.jsx)(p.q,{disabled:!0,children:"Please Select Network"})]}),(0,i.jsx)("div",{className:"flex flex-row items-center justify-between space-x-2",children:(0,i.jsx)(m.j,{items:e,placeholder:"From",setState:{setWalletNetwork:S}})}),(0,i.jsx)("div",{className:"flex flex-row items-center justify-between pt-5",children:(0,i.jsx)(x.x,{className:"text-cat-text",children:"Proof"})}),(0,i.jsx)(h.I,{className:"bg-cat-mantle text-cat-text",type:"text",placeholder:"Your Proof",onChange:function(e){var t=e.target.value;P((0,r._)((0,n._)({},E),{proof:t}))}}),(0,i.jsx)("div",{className:"flex flex-row items-center justify-between pt-5",children:(0,i.jsx)(x.x,{className:"text-cat-text",children:"Address"})}),(0,i.jsx)(h.I,{className:"bg-cat-mantle text-cat-text",type:"text",placeholder:"Your Address",onChange:function(e){var t=e.target.value;P((0,r._)((0,n._)({},E),{address:t}))}}),(0,i.jsx)(p.C,{placeholder:""!=A.address&&""!=A.network?"Kamui":"Please Connect First",className:"pt-10",process:function(){return K.apply(this,arguments)},loading:a,loadingText:"Kamuiing",walletConfig:A})]})})]})]})}}},function(e){e.O(0,[7762,9648,8085,1198,7691,3236,1245,6444,6318,8339,7720,1744],function(){return e(e.s=45365)}),_N_E=e.O()}]);