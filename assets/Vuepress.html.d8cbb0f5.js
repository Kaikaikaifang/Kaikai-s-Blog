import{_ as l,r as o,o as u,c as d,a as n,b as s,d as a,w as c,e}from"./app.e12c69cb.js";const r="/Kaikai-s-Blog/images/tools/Vuepress/GithubPages.png",k={},v=n("h1",{id:"vuepress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),s(" Vuepress")],-1),m=n("p",null,"\u8C28\u4EE5\u6B64\u7BC7\u7EAA\u5FF52022\u5E74\u5341\u4E00\u671F\u95F4\u6B64\u535A\u5BA2\u7684\u642D\u5EFA\u{1F607}",-1),h={href:"https://github.com/vuepress/vuepress-next",target:"_blank",rel:"noopener noreferrer"},b={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},g=e('<h2 id="\u9879\u76EE\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u642D\u5EFA" aria-hidden="true">#</a> \u9879\u76EE\u642D\u5EFA\u{1F642}</h2><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u63A8\u8350\u4F7F\u7528Github Desktop\u65B0\u5EFA\u4E00\u4E2ARepository(\u4ED3\u5E93)\u3002</p></div><h3 id="\u914D\u7F6E\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883" aria-hidden="true">#</a> \u914D\u7F6E\u73AF\u5883</h3><ol><li>\u5B89\u88C5\u4F9D\u8D56</li></ol>',5),y=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`)])])],-1),_=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`)])])],-1),f={start:"2"},x=e(`<p><code>package.json</code> \u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs --clean-cache&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>  <span class="token comment">// \u58F0\u660Ejs\u811A\u672C\u662F\u6A21\u5757, \u4ECE\u800C\u5141\u8BB8js\u7684\u6A21\u5757\u5316\u5BFC\u5165</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q={class:"custom-container tip"},w=n("p",{class:"custom-container-title"},"JavaScript\u6A21\u5757",-1),E={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"},C=e(`<li><p><code>.gitignore</code>\u6587\u4EF6\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</p><div class="language-gitignore ext-gitignore line-numbers-mode"><pre class="language-gitignore"><code><span class="token entry string">node_modules</span>
<span class="token entry string">.cache</span>
<span class="token entry string">.temp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),G=e(`<h3 id="\u53D1\u8868blog" tabindex="-1"><a class="header-anchor" href="#\u53D1\u8868blog" aria-hidden="true">#</a> \u53D1\u8868Blog</h3><ol><li><p>\u5728\u9879\u76EE\u7684 <code>docs</code> \u76EE\u5F55\u5B58\u653E\u535A\u5BA2\u6587\u6863</p><ul><li>\u65B0\u5EFA <code>docs</code> \u6587\u4EF6\u5939<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u7F16\u5199 <code>/docs/README.md</code><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><div class="custom-container tip"><p class="custom-container-title">README.md</p><p><code>README.md</code> \u6587\u4EF6\u4F5C\u4E3A\u6839\u8DEF\u5F84\u88AB\u8BBF\u95EE, \u6BD4\u5982\u8BF4 <code>/docs</code> \u4F5C\u4E3A\u535A\u5BA2\u7684\u8D44\u6E90\u6839\u76EE\u5F55, \u5219 <code>/docs/README.md</code> \u7684\u8BBF\u95EE\u8DEF\u5F84\u540E\u7F00\u4E3A <code>/</code>, <code>/docs/notes/README.md</code>\u7684\u8BBF\u95EE\u8DEF\u5F84\u4E3A <code>/notes/</code></p></div></li><li><p>\u8FD0\u884C\u9879\u76EE</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre></div><div class="custom-container danger"><p class="custom-container-title">Congratulations!</p><p>\u81F3\u6B64\uFF0C\u535A\u5BA2\u7684\u96CF\u5F62\u5C31\u642D\u5EFA\u8D77\u6765\u55BD\uFF0C\u4E0D\u6127\u662F\u4F60\uFF01\u{1F60D}</p></div></li><li><p>\u7F8E\u5316\u535A\u5BA2\u{1F63B} Github\u4E0A\u6709\u8BB8\u591AVuepress\u7684\u4E3B\u9898\uFF0C\u53EF\u4EE5\u81EA\u884C\u9009\u62E9\u5B89\u88C5(\u61D2\u72D7\u76F4\u63A5\u9009\u62E9\u9ED8\u8BA4\u4E3B\u9898\u{1F634}, \u6BD4\u5982\u8BF4Kaikai)</p></li></ol><h2 id="\u9879\u76EE\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u90E8\u7F72" aria-hidden="true">#</a> \u9879\u76EE\u90E8\u7F72\u{1F609}</h2><h3 id="\u90E8\u7F72\u5230github-pages" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5230github-pages" aria-hidden="true">#</a> \u90E8\u7F72\u5230Github Pages</h3><h4 id="\u521B\u5EFA-github-action" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-github-action" aria-hidden="true">#</a> \u521B\u5EFA Github Action</h4><ol><li>\u65B0\u5EFA\u76EE\u5F55<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> .github/workflows
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u5C06\u4EE5\u4E0B\u5185\u5BB9\u6DFB\u52A0\u5230 <code>.github/workflows/docs.yaml</code><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
<span class="token comment"># \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span>
<span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
<span class="token comment"># \u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span>
<span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
<span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token comment"># \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55</span>
        <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token comment"># \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;16&#39;</span>

    <span class="token comment"># \u7F13\u5B58 node_modules</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache node modules
        <span class="token key atrule">id</span><span class="token punctuation">:</span> cache<span class="token punctuation">-</span>npm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token key atrule">cache-name</span><span class="token punctuation">:</span> cache<span class="token punctuation">-</span>node<span class="token punctuation">-</span>modules
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token comment"># npm cache files are stored in \`~/.npm\` on Linux/macOS</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm
        <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>build<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> env.cache<span class="token punctuation">-</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-build-\${{ env.cache-name }}-
            \${{ runner.os }}-build-
            \${{ runner.os }}-</span>

    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.cache<span class="token punctuation">-</span>npm.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39; <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> List the state of node modules
        <span class="token key atrule">continue-on-error</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm list

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install

    <span class="token comment"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run docs<span class="token punctuation">:</span>build

    <span class="token comment"># \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F</span>
    <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span>
        <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
        <span class="token comment"># \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55</span>
        <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
        <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u914D\u7F6EGithub Pages \u5728\u81EA\u5DF1\u7684repo\u4E2D\u6309\u4E0B\u56FE\u914D\u7F6E <img src="`+r+`" alt="GitHub Pages"></li></ol><h2 id="\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u7684\u95EE\u9898\u{1F925}</h2><h3 id="\u81EA\u5B9A\u4E49vue\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49vue\u7EC4\u4EF6" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49Vue\u7EC4\u4EF6</h3><div class="custom-container danger"><p class="custom-container-title">Reference Error</p><p>\u4F7F\u7528 <code>npm run docs:build</code> \u547D\u4EE4\u6253\u5305\u65F6\u7531\u4E8E\u5BA2\u6237\u7AEF\u7684window, localStroage\u7B49\u63A5\u53E3\u670D\u52A1\u7AEF\u4E0D\u5B58\u5728\u800C\u5BFC\u81F4\u7684\u9519\u8BEF\u3002</p></div><blockquote><p>\u89E3\u51B3\u65B9\u6848: \u5728 <code>.md</code> \u6587\u4EF6\u4E2D\u4F7F\u7528\u7EC4\u4EF6\u65F6\u6DFB\u52A0 <code>&lt;ClientOnly&gt;&lt;/ClientOnly&gt;</code> \u6807\u7B7E\u5305\u88F9\u7EC4\u4EF6</p></blockquote><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Component</p><p>\u5B89\u88C5 <code>@vuepress/plugin-register-components</code> \u63D2\u4EF6\u540E, \u7EC4\u4EF6\u540D\u81EA\u52A8\u751F\u6210, \u89C4\u5219\u4E3A:</p><ol><li><code>docs/.vuepress/components/</code>\u8DEF\u5F84\u4E0B\u7684\u8DEF\u5F84\u540D\u52A0\u6587\u4EF6\u540D\u62FC\u63A5\u800C\u6210\u3002</li><li>\u6BD4\u5982\u8BF4 <code>docs\\.vuepress\\components\\todo\\App.vue</code> \u5BF9\u5E94\u7684\u7EC4\u4EF6\u540D\u4E3A <code>&lt;todo-App/&gt;</code></li></ol></div>`,12);function V(D,j){const t=o("ExternalLinkIcon"),p=o("CodeGroupItem"),i=o("CodeGroup");return u(),d("div",null,[v,n("blockquote",null,[m,n("p",null,[s("Repo: "),n("a",h,[s("\u9879\u76EE\u4ED3\u5E93"),a(t)])]),n("p",null,[s("Doc: "),n("a",b,[s("\u5B98\u65B9\u6587\u6863"),a(t)])])]),g,a(i,null,{default:c(()=>[a(p,{title:"YARN"},{default:c(()=>[y]),_:1}),a(p,{title:"NPM",active:""},{default:c(()=>[_]),_:1})]),_:1}),n("ol",f,[n("li",null,[x,n("div",q,[w,n("p",null,[n("a",E,[s("\u5173\u4E8EJS\u6A21\u5757\u5316\u5BFC\u5165\u5BFC\u51FA\u7684\u5185\u5BB9, \u8BE6\u60C5\u8BF7\u70B9\u51FB\u8FD9\u91CC\u8BBF\u95EE"),a(t)])])])]),C]),G])}const N=l(k,[["render",V],["__file","Vuepress.html.vue"]]);export{N as default};
