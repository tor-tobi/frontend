(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5590],{11314:function(){},79391:function(){},81388:function(){},43505:function(e,n,t){"use strict";var r,a,i,s,c,o;t.d(n,{BU:function(){return a},bv:function(){return i},w5:function(){return r}}),(s=r||(r={})).ArgentX="ArgentX",s.Wagmi="Wagmi",(c=a||(a={})).Ethereum="Ethereum",c.Goerli="Goerli",c.Sepolia="Sepolia",c.Polygon="Polygon",c.Mumbai="Mumbai",c.BSC="BSC",c.StarkNet="StarkNet",(o=i||(i={})).ETH="ETH",o.WETH="WETH"},39510:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(49421),a=t(91320);function i(){return(0,r.jsx)(a.LoadingSkeleton,{})}},19490:function(e,n,t){"use strict";t.d(n,{C:function(){return l},q:function(){return u}});var r=t(42483),a=t(2442),i=t(15337),s=t(18868),c=t(49421),o=t(6264),d=t(55138);function l(e){var n=(0,r._)({},(0,a._)(e));return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.xu,(0,s._)((0,i._)({},n),{children:(0,c.jsx)(u,{width:"100%",onClick:n.process,isLoading:n.loading,loadingText:n.loadingText,disabled:!!n.disabled&&n.disabled,textColor:n.textColor,children:n.placeholder})}))})}function u(e){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.z,(0,i._)({bg:e.disabled?"#d3d4e4":"transparent",borderColor:e.disabled?"#d3d4e4":"#fab387",borderWidth:1,borderRadius:"5px",paddingLeft:"10px",paddingTop:"5px",paddingBottom:"5px",paddingRight:"10px",color:(e.disabled,"#cdd6f4"),isLoading:e.isLoading,loadingText:e.loadingText,_hover:e.disabled?{}:{bg:"#fab387",color:"#1e1e2e"},spinner:e.spinner},e))})}},7976:function(e,n,t){"use strict";t.d(n,{O:function(){return l}});var r=t(15337),a=t(18868),i=t(49421),s=t(77295),c=t(84596),o=t.n(c),d=t(86161);function l(e){return e.children,(0,i.jsx)(s.NL.Custom,{children:function(e){var n,t=e.account,s=e.chain,c=e.openAccountModal,l=e.openChainModal,u=e.openConnectModal,f=e.mounted;return(0,i.jsx)("div",(0,a._)((0,r._)({},!f&&{"aria-hidden":!0,style:{opacity:0,pointerEvents:"none",userSelect:"none"}}),{children:f&&t&&s?s.unsupported?(0,i.jsx)(d.T,{onClick:l,children:"Wrong network"}):(0,i.jsxs)("div",{style:{display:"flex",gap:12},children:[(0,i.jsxs)(d.T,{onClick:l,style:{display:"flex",alignItems:"center"},children:[s.hasIcon&&(0,i.jsx)("div",{style:{background:s.iconBackground,width:12,height:12,borderRadius:999,overflow:"hidden",marginRight:4},children:s.iconUrl&&(0,i.jsx)(o(),{alt:null!==(n=s.name)&&void 0!==n?n:"Chain icon",src:s.iconUrl,width:12,height:12})}),s.name]}),(0,i.jsxs)(d.T,{onClick:c,children:[t.displayName,t.displayBalance?" (".concat(t.displayBalance,")"):""]})]}):(0,i.jsx)(d.T,{onClick:u,children:"Connect Wallet"})}))}})}},22034:function(e,n,t){"use strict";var r=t(49421);n.Z=function(e){var n=e.children;return(0,r.jsx)("div",{className:"max-w-2xl ms-auto me-auto mt-12",children:n})}},91320:function(e,n,t){"use strict";t.r(n),t.d(n,{LoadingSkeleton:function(){return f}});var r=t(49421),a=t(95118),i=t(61669),s=t(62234),c=t(50121),o=t(72825),d=t(165),l=t(75923),u=t(87758);function f(){var e=(0,a.q)().onClose;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.u_,{isOpen:!0,size:"full",onClose:e,children:[(0,r.jsx)(s.Z,{bg:"blackAlpha.300",backdropFilter:"blur(1px)"}),(0,r.jsx)(c.h,{bg:"transparent",children:(0,r.jsx)(o.r,{className:"flex absolute z-50 m-auto inset-0 text-center justify-center items-center",children:(0,r.jsxs)(d.P,{colSpan:1,children:[(0,r.jsx)(l.E,{src:"/frontend/Kamui.svg",alt:"Sharingan",className:"w-80 h-80 animate-spin"}),(0,r.jsx)(u.x,{fontSize:"3xl",as:"b",className:"text-cat-peach400 pt-10",children:"Kamuiing..."})]})})})]})})}},60829:function(e,n,t){"use strict";var r=t(49421);n.Z=function(e){var n=e.children;return(0,r.jsx)("div",{className:"mb-4 text-4xl text-center text-cat-text",children:n})}},47754:function(e,n,t){"use strict";t.d(n,{Z:function(){return j},j:function(){return b}});var r=t(15337),a=t(18868),i=t(49421),s=t(64728),c=t(66895),o=t(82277),d=t(17068),l=t(96915),u=t(64202),f=o.fC;o.ZA;var h=o.B4,x=c.forwardRef(function(e,n){var t=e.className,c=e.children,l=(0,s._)(e,["className","children"]);return(0,i.jsxs)(o.xz,(0,a._)((0,r._)({ref:n,className:(0,u.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t)},l),{children:[c,(0,i.jsx)(o.JO,{asChild:!0,children:(0,i.jsx)(d.Z,{className:"h-4 w-4 opacity-50"})})]}))});x.displayName=o.xz.displayName;var p=c.forwardRef(function(e,n){var t=e.className,c=e.children,d=e.position,l=void 0===d?"popper":d,f=(0,s._)(e,["className","children","position"]);return(0,i.jsx)(o.h_,{children:(0,i.jsx)(o.VY,(0,a._)((0,r._)({ref:n,className:(0,u.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===l&&"translate-y-1",t),position:l},f),{children:(0,i.jsx)(o.l_,{className:(0,u.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:c})}))})});p.displayName=o.VY.displayName,c.forwardRef(function(e,n){var t=e.className,a=(0,s._)(e,["className"]);return(0,i.jsx)(o.__,(0,r._)({ref:n,className:(0,u.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t)},a))}).displayName=o.__.displayName;var m=c.forwardRef(function(e,n){var t=e.className,c=e.children,d=(0,s._)(e,["className","children"]);return(0,i.jsxs)(o.ck,(0,a._)((0,r._)({ref:n,className:(0,u.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t)},d),{children:[(0,i.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,i.jsx)(o.wU,{children:(0,i.jsx)(l.Z,{className:"h-4 w-4"})})}),(0,i.jsx)(o.eT,{children:c})]}))});m.displayName=o.ck.displayName,c.forwardRef(function(e,n){var t=e.className,a=(0,s._)(e,["className"]);return(0,i.jsx)(o.Z0,(0,r._)({ref:n,className:(0,u.cn)("-mx-1 my-1 h-px bg-muted",t)},a))}).displayName=o.Z0.displayName;var g=t(25574);function b(e){var n=e.items,t=e.placeholder,s=e.className,c=e.setState,o=e.disabled;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(f,{onValueChange:function(e){if(c.setWalletNetwork&&(t=n.find(function(n){return n.key===e}))&&c.setWalletNetwork(t),c.setToken){var t,i,s=n.find(function(n){return n.key===e});s&&c.setToken(s)}c.setContractParameter&&(i=n.find(function(n){return n.key===e}))&&c.setContractParameter(function(e){return(0,a._)((0,r._)({},e),{targetChain:i.key})})},disabled:!!o&&o,children:[(0,i.jsx)(x,{className:s||"grow bg-cat-mantle text-cat-text",children:(0,i.jsx)(h,{placeholder:t})}),(0,i.jsx)(p,{className:"bg-cat-mantle text-cat-text",children:n.map(function(e,n){return(0,i.jsx)(m,{value:e.key,className:"hover:bg-cat-neutral500",children:e.key},n)})})]})})}function j(e){var n=e.disabled,t=e.setState;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(g.I,{className:"bg-cat-mantle text-cat-text",type:"number",placeholder:"0.00",disabled:!!n&&n,onChange:function(e){var n=e.target.value;Number(n)>0?t.setContractParameter(function(e){return(0,a._)((0,r._)({},e),{amount:n})}):t.setContractParameter(function(e){return(0,a._)((0,r._)({},e),{amount:""})})}})})}},86161:function(e,n,t){"use strict";t.d(n,{T:function(){return m},Y:function(){return j}});var r=t(42483),a=t(2442),i=t(15337),s=t(18868),c=t(49421),o=t(55138),d=t(7319),l=t(87758),u=t(6264),f=t(84960),h=t(66895),x=t(84596),p=t.n(x);function m(e){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.z,(0,i._)({bg:e.disabled?"#d3d4e4":"transparent",borderColor:e.disabled?"#d3d4e4":"#fab387",borderWidth:1,borderRadius:"5px",paddingLeft:"10px",paddingTop:"5px",paddingBottom:"5px",paddingRight:"10px",color:(e.disabled,"#cdd6f4"),isLoading:e.isLoading,loadingText:e.loadingText,_hover:e.disabled?{}:{bg:"#fab387",color:"#1e1e2e"},spinner:e.spinner},e))})}function g(){var e=(0,f.useConnectors)(),n=e.connectors,t=e.connect;return(0,c.jsx)(d.U,{w:"full",justifyContent:"center",children:n.map(function(e){return(0,c.jsx)(m,{width:"100%",onClick:function(){return t(e)},isDisabled:!e.available(),children:(0,c.jsx)(l.x,{children:"Connect Wallet"})},e.id())})})}function b(e){var n=(0,r._)({},(0,a._)(e)),t=(0,f.useAccount)().address,i=(0,f.useConnectors)().disconnect,s=(0,f.useBalance)({address:t}),o=s.data;s.isLoading,s.error,s.refetch;var l=(0,h.useMemo)(function(){return t?"".concat(t.slice(0,6),"...").concat(t.slice(-4)):""},[t]);return(0,c.jsxs)(d.U,{w:"full",justifyContent:"center",children:[(0,c.jsxs)(m,{style:{display:"flex",alignItems:"center"},children:[(0,c.jsx)("div",{style:{width:12,height:12,borderRadius:999,overflow:"hidden",marginRight:4},children:(0,c.jsx)(p(),{alt:"Starknet",src:"https://raw.githubusercontent.com/starknet-io/starknet-website/720804111f233c50e0a8020d031860482ef5e413/public/starknet-mark-light.svg",width:12,height:12})}),"Starknet"]}),(0,c.jsxs)(m,{width:"100%",onClick:n.deposit?n.deposit:n.withdraw?n.withdraw:i,isLoading:n.loading,loadingText:n.loadingText,spinner:n.spinner,children:[n.placeholder?n.placeholder:l,(null==o?void 0:o.formatted)?" (".concat(o.formatted," ").concat(o.symbol,")"):""]})]})}function j(e){var n=(0,r._)({},(0,a._)(e)),t=(0,f.useAccount)().address;return(0,c.jsx)(u.xu,(0,s._)((0,i._)({},n),{children:t?(0,c.jsx)(b,(0,i._)({},n)):(0,c.jsx)(g,{})}))}},64202:function(e,n,t){"use strict";t.d(n,{cn:function(){return i}});var r=t(49754),a=t(41898);function i(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.m)((0,r.clsx)(n))}}}]);