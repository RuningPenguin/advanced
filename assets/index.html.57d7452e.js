import{_ as p,r as a,o,c,a as i,b as n,w as l,d as r,e as s}from"./app.a8513dae.js";const u="/advanced/assets/conversion-rules.efea1690.png",d={},k=r('<h1 id="\u5947\u601D\u5999\u60F3" tabindex="-1"><a class="header-anchor" href="#\u5947\u601D\u5999\u60F3" aria-hidden="true">#</a> \u5947\u601D\u5999\u60F3</h1><h2 id="\u5B9E\u73B0-a-1-a-2-a-3" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-a-1-a-2-a-3" aria-hidden="true">#</a> \u5B9E\u73B0 a == 1 &amp;&amp; a == 2 &amp;&amp; a == 3</h2><p><img src="'+u+`" alt="==\u8F6C\u6362\u89C4\u5219"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">_a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_a<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9012\u5F52\u6C42\u548C" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u6C42\u548C" aria-hidden="true">#</a> \u9012\u5F52\u6C42\u548C</h2><blockquote><p>\u5047\u8BBE\u6709 <code>list = [1,2,3,4,5]</code> <br> \u5047\u8BBE\u6709 <code>f()</code> \u53EF\u4EE5\u6C42 list \u7B2C i \u4F4D\u5230\u672B\u5C3E\u7684\u548C \u90A3\u4E48 f(2) === list[2] + f(2 + 1) \u53EF\u77E5 f(i) === list[i] + f(i + 1) i \u5FC5\u987B\u5C0F\u4E8E\u6570\u7EC4\u957F\u5EA6</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> i <span class="token operator">&gt;=</span> list<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u4E5D\u5BAB\u683C\u5206\u5272\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E5D\u5BAB\u683C\u5206\u5272\u56FE\u7247" aria-hidden="true">#</a> \u5B9E\u73B0\u4E5D\u5BAB\u683C\u5206\u5272\u56FE\u7247</h2>`,8),m=s("\u6280\u672F\u70B9:"),h=s(":nth-child");function v(b,_){const e=a("RouterLink"),t=a("image-9");return o(),c("div",null,[k,i("p",null,[m,n(e,{to:"/code/nth-child.html"},{default:l(()=>[h]),_:1})]),n(t)])}const g=p(d,[["render",v],["__file","index.html.vue"]]);export{g as default};
