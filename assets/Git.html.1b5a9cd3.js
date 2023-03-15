import{_ as c,r as p,o as l,c as n,a as t,b as e,d as o,e as a}from"./app.e12c69cb.js";const d="/Kaikai-s-Blog/images/tools/Git/git.png",r={},g=t("h1",{id:"git",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),e(" Git")],-1),s=t("p",null,[e("\u6CA1\u8BB0\u9519\u7684\u8BDD\uFF0C\u8FD9\u662F"),t("strong",null,"Kaikai"),e("\u5199\u7684\u7B2C\u4E00\u7BC7\u6280\u672F\u6587\u6863\u3002\u{1F60B}")],-1),h={href:"http://www.ruanyifeng.com/blog/2018/10/git-internals.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>Hello world!</p><h2 id="first-\u767B\u5F55\u7528\u6237\u540D\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#first-\u767B\u5F55\u7528\u6237\u540D\u90AE\u7BB1" aria-hidden="true">#</a> First.\u767B\u5F55\u7528\u6237\u540D\u90AE\u7BB1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="second-\u521B\u5EFA\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#second-\u521B\u5EFA\u4ED3\u5E93" aria-hidden="true">#</a> <em>Second.\u521B\u5EFA\u4ED3\u5E93</em></h2><ol><li>\u672C\u5730\u4ED3\u5E93\u521B\u5EFA\u540Epush\u5230\u8FDC\u7A0B\u5E93\uFF08\u5148\u6709\u672C\u5730\u5E93\uFF09</li></ol><ul><li><p>\u521B\u5EFA\u7A7A\u76EE\u5F55\uFF1A<code>mkdir learngit</code> \u2192 <code>cd learngit</code> \u2192**<code>pwd</code>(pwd\u7528\u4E8E\u663E\u793A\u5F53\u524D\u76EE\u5F55)**</p></li><li><p>\u521D\u59CB\u5316\u4ED3\u5E93\uFF1A<code>git init</code></p></li><li><p>git remote add origin <a href="mailto:git@github.com">git@github.com</a>:Kaikaikaifang/hello_world.git</p><p>origin:\u8FDC\u7A0B\u5E93\u7684\u540D\u5B57</p><p>git push -u origin main</p><p>main:\u5206\u652F\u7684\u540D\u5B57\uFF0C\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u540C\u540Dmain</p></li><li><p>u\u53C2\u6570\u4F7F\u5F97git\u5728\u5C06\u672C\u5730\u7684main\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u65B0\u7684main\u5206\u652F\u7684\u540C\u65F6\uFF0C\u5C06\u8FDC\u7A0B\u7684main\u5206\u652F\u4E0E\u672C\u5730\u7684main\u5206\u652F\u5173\u8054\u8D77\u6765</p></li></ul><ol start="2"><li>\u4ECE\u8FDC\u7A0B\u5E93clone\u5230\u672C\u5730\uFF08\u5148\u6709\u8FDC\u7A0B\u5E93\uFF09</li></ol><p>\u{1F4A2}\u6CE8\u610Fclone\u524D\u5148<code>cd</code>\u8FDB\u5165\u653E\u7F6E\u672C\u5730\u4ED3\u5E93\u7684\u8DEF\u5F84</p><p><code>git clone [git@github.com](mailto:git@github.com):Kaikaikaifang/&lt;repository name&gt;.git</code></p><ol start="3"><li>\u521B\u5EFA\u8FDC\u7A0B\u5E93</li></ol><p>ssh\u5BC6\u94A5\uFF1A</p><p><code>$ ssh-keygen -t rsa -C &quot;[email address]&quot;</code></p><p>\u521B\u5EFA.ssh \u6587\u4EF6\uFF0C\u5185\u6709id_rsa\u79C1\u94A5\u548Cid_rsa.pub\u516C\u94A5</p><p>github \u6DFB\u52A0 ssh\u5BC6\u94A5 \uFF0C</p><p>\u5C06id_rsa.pub\u4E2D\u7684\u5185\u5BB9\u6DFB\u52A0\u5230key\u6587\u672C\u6846</p><p>.pub\u6587\u4EF6\u6253\u5F00\u65B9\u6CD5\uFF1A</p><p>\u5F53\u524D\u6587\u4EF6\u76EE\u5F55\uFF08.ssh\uFF09\u8F93\u5165cmd</p><p>\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\uFF1A<code>type id_rsa.pub</code></p><hr><h2 id="third-\u672C\u5730\u4ED3\u5E93\u7684\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#third-\u672C\u5730\u4ED3\u5E93\u7684\u7EC4\u6210" aria-hidden="true">#</a> Third.\u672C\u5730\u4ED3\u5E93\u7684\u7EC4\u6210</h2><p><img src="`+d+`" alt="Git"></p><h3 id="\u5DE5\u4F5C\u533A" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u533A" aria-hidden="true">#</a> \u5DE5\u4F5C\u533A</h3><p>\u5DE5\u4F5C\u533A\u7684\u64CD\u4F5C\u662F\u76F4\u63A5\u5728\u6587\u4EF6\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u64CD\u4F5C\u6587\u4EF6\u53CA\u6587\u4EF6\u5939</p><p>git add \u4E4B\u524D\u53EF\u4EE5<code>git diff</code> \u67E5\u770B\u505A\u51FA\u7684\u4FEE\u6539</p><p><code>git add &lt;filename&gt;</code> \uFF1A\u628A\u4FEE\u6539\u6DFB\u52A0\u5230\u6682\u5B58\u533A</p><p>\u5DE5\u4F5C\u533A\u4E0E\u7248\u672C\u5E93\u76F8\u5BF9\u72EC\u7ACB\uFF0C\u901A\u8FC7git add \u8054\u7CFB\u8D77\u6765</p><h3 id="\u7248\u672C\u5E93" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u5E93" aria-hidden="true">#</a> \u7248\u672C\u5E93</h3><p>\u5DE5\u4F5C\u533A\u5185\u7684\u4E00\u4E2A\u9690\u85CF\u76EE\u5F55 .git</p><ul><li>\u6682\u5B58\u533A(index/stage)</li></ul><p><code>git commit -m \u201Cmessage\u201D</code> :\u628A\u6682\u5B58\u533A\u7684\u6240\u6709\u5185\u5BB9\u63D0\u4EA4\u5230\u5F53\u524D\u5206\u652F</p><p>\u5176\u5B9E\u5C31\u662FHEAD\u6307\u9488\u6307\u5411\u7684branch\u6307\u9488\u6307\u5411\u8FD9\u4E2A\u65B0\u7684commit</p><p>git commit\u76F8\u5F53\u4E8E\u7ED9\u73B0\u5728\u7684\u5DE5\u4F5C\u533A\u62CD\u4E86\u4E2A\u201C<strong>\u5FEB\u7167</strong>\u201D\u3002</p><ul><li>\u63D0\u4EA4\u533A</li></ul><p>\u6BCF\u4E00\u6B21\u7684\u63D0\u4EA4\u90FD\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684commit_id</p><p>commit_id\u672C\u8D28\u662F\u4E00\u4E32SHA-1\u751F\u6210\u7684\u54C8\u5E0C\u7801</p><p>\u7528\u4E8E\u8868\u793A\u4E00\u4E2Agit\xA0commit \u5BF9\u8C61\uFF08\u5FEB\u7167\uFF09</p><p>\u9996\u5148\uFF0C\u6BCF\u4E2Acommit\u5BF9\u8C61\u7684commit hash\u90FD\u662F\u4E0D\u540C\u7684</p><p>\u5176\u6B21\uFF0C\u8FD9\u4E00\u4E32commit hash \u5E76\u4E0D\u662F\u968F\u673A\u751F\u6210\u7684</p><p>\u800C\u662F\uFF0C\u57FA\u4E8E\u52A0\u5BC6\u5BF9\u8C61\u76F4\u63A5\u751F\u6210\u7684\u4E00\u4E2A\u52A0\u5BC6\u5B57\u7B26\u4E32</p><p>\u6240\u4EE5\u8BF4\uFF0C\u5982\u679C\u52A0\u5BC6\u5BF9\u8C61\u4E0D\u6539\u53D8\uFF0C\u90A3\u4E48\u751F\u6210\u7684commit hash\u4FBF\u4E0D\u4F1A\u6539\u53D8 \u3002</p><p>\u6BCF\u4E2Acommit\u90FD\u5305\u62EC\u4E0A\u4E00\u4E2Acommit\u7684commit hash\uFF0C</p><p>\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7</p><p><code>git\xA0commit log --graph</code></p><p>\u5F97\u5230\u56FE\u5F62\u5316\u7684\u63D0\u4EA4\u5386\u53F2\uFF0C\u76F8\u90BB\u4E24\u4E2Acommit\u4E4B\u6240\u4EE5\u80FD\u591F\u76F8\u8FDE\u63A5\uFF0C\u5C31\u662F\u56E0\u4E3A\u6BCF\u4E2Acommit\u90FD\u5305\u542B\u4E86\u4E0A\u4E00\u6B21commit\u7684\u54C8\u5E0C\u503C\u3002</p><ul><li>HEAD\u6307\u9488</li></ul><p>HEAD\u6307\u9488\u4F4D\u4E8E\u7248\u672C\u5E93\uFF0C\u80FD\u591F\u5728\u4EFB\u4F55\u5206\u652F\uFF08\u6307\u5411branch\u6307\u9488\uFF09\u548C\u7248\u672C\uFF08\u6307\u5411\u5FEB\u7167\uFF0C \u{1F423}\u67D0\u6B21commit\uFF09\u4E4B\u95F4\u79FB\u52A8(\u901A\u8FC7<code>git checkout</code>)\uFF0C\u901A\u8FC7\u79FB\u52A8HEAD\u6307\u9488\u53EF\u4EE5\u5C06\u6570\u636E\u8FD8\u539F\u81F3\u4EFB\u4F55\u7248\u672C\u3002</p><p>1.\u6307\u5411branch\u4F1A\u548Cbranch\u6307\u9488\u4E00\u8D77\u5411\u540E\u79FB\u52A8\uFF0C</p><p>2.\u4E0D\u6307\u5411branch\u63D0\u4EA4\u65F6\u4F1A\u5728\u4E00\u4E2Adetached\u72B6\u6001\uFF08\u6E38\u79BB\u72B6\u6001\uFF09\uFF0C\u{1F423}\u6CA1\u6709\u548C\u4EFB\u4F55\u5206\u652F\u7ED1\u5B9A\u3002</p><p><code>git checkout &lt;commit_id&gt;</code>\u4F1A\u4F7F\u5F97HEAD\u5904\u4E8E\u6E38\u79BB\u72B6\u6001</p><p>\u{1F4A2}\u5904\u4E8E\u6E38\u79BB\u72B6\u6001\u65F6\uFF0C\u8FDB\u884Ccommit\u662F\u5B58\u5728\u95EE\u9898\u7684\uFF1A\u6B64\u65F6HEAD\u6307\u9488\u76F4\u63A5\u6307\u5411commit\uFF0C\u800C\u4E0D\u662FHEAD\u6307\u9488\u6307\u5411branch\uFF0Cbranch\u6307\u5411commit</p><p>\u{1F440}\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><p>1.\u65B0\u5EFA\u5206\u652F\uFF1A</p><p><code>git branch &lt;branchName&gt;</code> \u2192<code>git checkout &lt;branchName&gt;</code></p><p>2.\u79FB\u52A8\u5DF2\u7ECF\u5B58\u5728\u7684branch\u6307\u9488\u6307\u5411HEAD\u6240\u6307\u5411\u7684commit\uFF1A</p><p><code>git branch -f &lt;old_branchName&gt; &lt;commit_id&gt;</code></p><blockquote><p>\u{1F4A5}git checkout \u548C git reset \u7684\u533A\u522B\uFF1A</p></blockquote><blockquote><p><code>git reset --hard &lt;commit_id&gt;</code>:reset \u4E0D\u4EC5\u53EF\u4EE5\u53BB\u5230\u8FC7\u53BB\u7684commit\uFF0C\u800C\u4E14\u53EF\u4EE5\u53BB\u5230\u5C06\u6765\u7684commit\uFF0C\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u201C\u65F6\u5149\u7A7F\u68AD\u201D\u4E4B\u540EHEAD\u6307\u9488\u7684\u6307\u5411\u5E76\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u672A\u6765\u521B\u5EFA\u7684branch\u6307\u9488\u4E0D\u4F1A\u6D88\u5931\u3002</p></blockquote><blockquote><p><code>git checkout</code>:checkout \u53EA\u80FD\u56DE\u5230\u8FC7\u53BB\u7684commit\uFF0C\u4E14HEAD\u6307\u9488\u4F1A\u5904\u4E8E\u6E38\u79BB\u72B6\u6001\u3002</p></blockquote><ul><li>branch\u6307\u9488</li></ul><p>git branch -f \u6765\u79FB\u52A8\u5206\u652F\u6307\u9488\uFF0C</p><p>\u79FB\u52A8\u7684\u5BF9\u8C61\u53EA\u80FD\u662F\u5FEB\u7167(\u53EA\u80FD\u6307\u5411\u5FEB\u7167)</p><hr><h2 id="fourth-\u4FEE\u6539\u4E0E\u64A4\u9500\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#fourth-\u4FEE\u6539\u4E0E\u64A4\u9500\u4FEE\u6539" aria-hidden="true">#</a> Fourth.\u4FEE\u6539\u4E0E\u64A4\u9500\u4FEE\u6539</h2><h3 id="\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a> \u4FEE\u6539</h3><p>#\u4FEE\u6539\u6587\u4EF6</p><p><code>git add &lt;filename&gt;</code></p><p><code>git commit -m\u201Dmessage\u201D</code></p><p>#\u5220\u9664\u6587\u4EF6\uFF1A</p><ol><li>\u5220\u9664\u5E76\u6DFB\u52A0\u5230\u6682\u5B58\u533A\uFF1A</li></ol><ul><li>\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u76F4\u63A5\u5220\u9664\u6587\u4EF6\uFF0C\u6216<code>rm &lt;filename&gt;</code>\u5220\u9664\u6587\u4EF6</li></ul><p>\u6587\u4EF6\u5220\u9664\u4E0E\u6587\u4EF6\u4FEE\u6539\u7C7B\u4F3C\uFF0C\u90FD\u662F\u6587\u4EF6\u505A\u51FA\u4E86\u6539\u53D8\uFF0C\u9700\u8981<code>git add</code>\u5C06change\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u3002</p><ul><li><code>git rm&lt;filename&gt;</code>\uFF1A\u64CD\u4F5C\u7ED3\u675F\u540E\u4E0D\u4EC5\u5220\u9664\u4E86\u6587\u4EF6\uFF0C\u4E14\u6DFB\u52A0\u5230\u4E86\u6682\u5B58\u533A</li></ul><ol><li>\u5C06change\u63D0\u4EA4\u5230\u7248\u672C\u5E93\uFF1A</li></ol><ul><li><code>git commit -m&quot;message&quot;</code></li></ul><p>\u8FD9\u6837\u4FBF\u5C06\u6587\u4EF6\u5F7B\u5E95\u7684\u4ECE\u7248\u672C\u5E93\u4E2D\u5220\u9664</p><h3 id="\u64A4\u9500\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u4FEE\u6539" aria-hidden="true">#</a> \u64A4\u9500\u4FEE\u6539</h3><p>\u5220\u9664\u6587\u4EF6\u4E5F\u662F\u4FEE\u6539\u6587\u4EF6\uFF0C\u64A4\u9500\u65B9\u6CD5\u76F8\u540C</p><p>1.\u5DE5\u4F5C\u533A\u6587\u4EF6\u505A\u51FA\u4FEE\u6539\uFF08\u672A git add\uFF09:</p><ul><li><code>git checkout -- &lt;filename&gt;</code></li><li><code>git restore &lt;filename&gt;</code></li><li>\u7ED3\u679C\u662F\u64A4\u9500\u4E86\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539</li></ul><p>2.\u4FEE\u6539\u540E\u5DF2\u7ECF\u6DFB\u52A0\u81F3\u6682\u5B58\u533A\uFF08\u5DF2git add\uFF09:</p><ul><li><strong><code>git reset HEAD &lt;filename&gt;</code></strong></li><li><code>git restore --staged &lt;filename&gt;</code></li><li>\u7ED3\u679C\u662F\u64A4\u9500\u6DFB\u52A0\u81F3\u6682\u5B58\u533A\uFF0C\u53EF\u8FDB\u884C1.\u7684\u64CD\u4F5C\u7EE7\u7EED\u64A4\u9500\u5DE5\u4F5C\u533A\u4FEE\u6539</li></ul><p>3.\u5DF2\u7ECF\u63D0\u4EA4\u81F3\u7248\u672C\u5E93\uFF08\u5DF2git commit,\u672A\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93\uFF09:</p><ul><li>\u7248\u672C\u56DE\u9000 <code>git reset --hard HEAD^</code></li></ul><p>4.\u5DF2\u7ECF\u63D0\u4EA4\u81F3\u7248\u672C\u5E93\uFF0C\u4E14\u63D0\u4EA4\u4E4B\u540E\u53D1\u751F\u8FC7\u63D0\u4EA4</p><ul><li><code>git checkout &lt;commit_id&gt; - - &lt;paths&gt;</code></li><li>\u901A\u8FC7paths\u627E\u51FA\u67D0\u4E00\u6587\u4EF6\uFF0C\u5E76\u628A\u5B83\u6062\u590D\u6210commit id \u6240\u5BF9\u5E94\u7684\u72B6\u6001\uFF0C\u6240\u4EE5\u8BF4checkout\u80FD\u591F\u5C06\u6307\u5B9A\u6587\u4EF6\u6062\u590D\u6210\u67D0\u4E00\u6307\u5B9A\u5386\u53F2\u72B6\u6001\uFF1Fyep!</li></ul><p>\u{1F4A2}\u547D\u4EE4<code>git rm</code>\u7528\u4E8E\u5220\u9664\u4E00\u4E2A\u6587\u4EF6\u3002\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u5DF2\u7ECF\u88AB\u63D0\u4EA4\u5230\u7248\u672C\u5E93\uFF0C\u90A3\u4E48\u4F60\u6C38\u8FDC\u4E0D\u7528\u62C5\u5FC3\u8BEF\u5220\uFF0C\u4F46\u662F\u8981\u5C0F\u5FC3\uFF0C\u4F60\u53EA\u80FD\u6062\u590D\u6587\u4EF6\u5230\u6700\u65B0\u7248\u672C\uFF0C\u4F60\u4F1A\u4E22\u5931<strong>\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4\u540E\u4F60\u4FEE\u6539\u7684\u5185\u5BB9</strong>\uFF1F\uFF1F</p><blockquote><p>\u6062\u590D\u6587\u4EF6\u4F1A\u4F7F\u5F97\u5220\u9664\u6587\u4EF6\u4E4B\u540E\u505A\u51FA\u7684change\u4E00\u5E76\u64A4\u9500\uFF0C\u5DE5\u4F5C\u533A\u201C\u56DE\u5230\u4E86\u5220\u9664\u6587\u4EF6\u4E4B\u524D\u201D</p></blockquote><hr><h2 id="fifth-\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u7684\u8054\u52A8" tabindex="-1"><a class="header-anchor" href="#fifth-\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u7684\u8054\u52A8" aria-hidden="true">#</a> Fifth.\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u7684\u8054\u52A8</h2><ul><li><code>git remote rm &lt;remoteRepository&gt;</code>\uFF1A\u5220\u9664\u5DF2\u5173\u8054\u7684\u8FDC\u7A0B\u5E93</li><li><code>git remote add &lt;repository**Name1**&gt; git@github(or gitee).com:Kaikaikaifang/&lt;repository**Name2**&gt;.git</code></li><li>Name1\u662Fgit\u7ED9\u8FDC\u7A0B\u5E93\u53D6\u7684\u522B\u540D\uFF08\u968F\u4FBF\u53D6\uFF0C\u65E0\u6240\u8C13\uFF09</li><li>Name2\u662F\u8FDC\u7A0B\u5E93\u7684\u672C\u540D\uFF08\u5FC5\u987B\u4E00\u81F4\uFF09</li></ul><p><code>git remote</code>:\u67E5\u770B\u8FDC\u7A0B\u5E93\u7684\u4FE1\u606F</p><p><code>git remote -v</code>:\u663E\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F</p><p><code>$\xA0git\xA0remote -v</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    origin git@github.com:Kaikaikaifang/hello_world.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
    origin git@github.com:Kaikaikaifang/hello_world.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1.\u63A8\u9001\u5206\u652F\u5C31\u662F\u628A\u8BE5\u5206\u652F\u4E0A\u7684\u6240\u6709\u672C\u5730\u63D0\u4EA4\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93</p><p><strong><code>git\xA0push &lt;\u8FDC\u7A0B\u5E93(origin)&gt; &lt;branchName(\u672C\u5730)&gt;</code></strong></p><p>main(master)\u4E3B\u5206\u652F\u8981\u65F6\u523B\u4E0E\u8FDC\u7A0B\u540C\u6B65</p><p>dev:\u5F00\u53D1\u5206\u652F\uFF0C\u6240\u6709\u6210\u5458\u90FD\u9700\u8981\u5728\u4E0A\u9762\u5DE5\u4F5C\uFF0C\u4E5F\u9700\u8981\u4E0E\u8FDC\u7A0B\u540C\u6B65</p><p>bug\u5206\u652F\uFF1A\u6CA1\u5FC5\u8981</p><p>feature\uFF1A\u53D6\u51B3\u4E8E\u662F\u5426\u5408\u4F5C\u5F00\u53D1</p><p>2.\u4ECE\u8FDC\u7A0B\u6293\u53D6</p><ul><li><code>git\xA0pull</code>\u6293\u53D6\u8FDC\u7A0B\u65B0\u63D0\u4EA4\u5E76\u4E0E\u672C\u5730\u5408\u5E76:</li></ul><p>\u82E5\u63D0\u793A no tracking information \u8BF4\u660E\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u94FE\u63A5\u5173\u7CFB\u6CA1\u6709\u521B\u5EFA</p><ul><li>\u5EFA\u7ACB\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u7684\u8054\u7CFB:</li></ul><p><code>git\xA0branch --set-upstream-to &lt;branch-name&gt; origin/&lt;branch-name&gt;</code></p><ul><li>\u672C\u5730\u521B\u5EFA\u548C\u8FDC\u7A0B\u5BF9\u5E94\u7684\u5206\u652F(\u5373\u5305\u62EC\u4E24\u9879\uFF1A\u521B\u5EFA\u5206\u652F\u548C\u5EFA\u7ACB\u8054\u7CFB)\uFF1A</li></ul><p><code>git\xA0checkout -b branch-name origin/branch-name</code></p><p><code>git\xA0switch -c branch-name origin/branch-name</code></p><hr><h2 id="sixth-\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#sixth-\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> Sixth.\u5206\u652F\u7BA1\u7406</h2><p>\u57FA\u672C\u539F\u5219\uFF1A</p><p>master\u5206\u652F\u5E94\u8BE5\u7A33\u5B9A\uFF0C\u4EC5\u7528\u6765\u53D1\u5E03\u65B0\u7248\u672C\uFF0C\u5E73\u65F6\u4E0D\u80FD\u5728\u4E0A\u9762\u5DE5\u4F5C</p><p>\u5DE5\u4F5C\u90FD\u5728dev\u5206\u652F\u4E0A\uFF0Cdev\u5206\u652F\u662F\u4E0D\u7A33\u5B9A\u7684\uFF0C\u7248\u672C\u53D1\u5E03\u65F6\u628Adev\u5408\u5E76\u5230master\uFF0C\u5728master\u5206\u652F\u53D1\u5E03\u65B0\u7248\u672C\u3002</p><p>\u521B\u5EFA\u5206\u652F\uFF1A<code>git\xA0checkout -b dev</code></p><p>-b \u8868\u793A\u521B\u5EFA\u5E76\u5207\u6362</p><p>\u76F8\u5F53\u4E8E\uFF1A</p><p>git\xA0branch dev \u521B\u5EFA</p><p>git\xA0checkout dev \u5207\u6362</p><p><code>git\xA0branch</code> :\u5217\u51FA\u6240\u6709\u5206\u652F</p><p><code>git\xA0checkout</code>:\u5207\u6362\u5206\u652F</p><p><code>git\xA0merge &lt;brand&gt;</code>:\u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</p><p><code>git\xA0branch -d &lt;branchName&gt;</code>:\u5220\u9664\u5206\u652F</p><p><strong>\u4F7F\u7528\u5206\u652F\u66F4\u5B89\u5168</strong></p><p><code>git\xA0switch -c &lt;branch&gt;</code>:\u521B\u5EFA\u5E76\u5207\u6362\u5230\u65B0\u7684\u5206\u652F</p><p><code>git\xA0switch &lt;branch&gt;</code>:\u5207\u6362\u81F3\u5DF2\u6709\u5206\u652F</p><ol><li>\u5408\u5E76\u5206\u652F</li></ol><p>Fast forward\u6A21\u5F0F\uFF1A\u5220\u9664\u5206\u652F\u540E\uFF0C\u4F1A\u4E22\u5931\u5206\u652F\u4FE1\u606F\uFF08git\xA0log --graph\u4E0D\u663E\u793A\u5206\u652F\uFF09</p><p>\u7981\u7528\uFF08<code>git\xA0merge\xA0**--no-ff -m &quot;message&quot;**\xA0&lt;brand&gt;</code>\uFF09\u540E\uFF0CGit\xA0\u4F1A\u5728merge\u65F6\u751F\u6210\u4E00\u4E2A\u65B0\u7684commit\uFF0C\u4ECE\u5206\u652F\u5386\u53F2\u53EF\u4EE5\u770B\u51FA\u5206\u652F\u4FE1\u606F</p><ul><li><code>git log --graph --pretty=oneline --abbrev-commit</code> \u67E5\u770B\u5206\u652F\u5408\u5E76\u60C5\u51B5</li><li><code>git log --graph</code>\u67E5\u770B\u5206\u652F\u5408\u5E76\u56FE</li><li>\u5F53\u4E24\u4E2A\u5206\u652F\u4FEE\u6539\u540C\u4E00\u4E2A\u6587\u4EF6\u65F6\uFF0C\u53EF\u80FD\u53D1\u751F\u4E24\u4E2A\u5206\u652F\u4E0D\u80FD\u81EA\u52A8\u5408\u5E76\u7684\u95EE\u9898\uFF0C\u9700\u8981\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\uFF08\u5408\u5E76\u65F6\uFF0CGit\u5C06\u51B2\u7A81\u6807\u8BC6\u4E86\u51FA\u6765\uFF09\uFF0C\u7136\u540E\u518D\u6B21\u63D0\u4EA4\uFF0C\u5373\u53EF\u5B8C\u6210\u5408\u5E76\u3002</li><li>\u4F7F\u7528\u53C2\u6570--no-ff\u7981\u7528\u5FEB\u5408\u5E76\u6A21\u5F0F\uFF0C<code>git merge --no-ff -m&quot;merge with no-ff&quot; dev</code>\uFF0C\u5408\u5E76</li></ul><ol start="2"><li>\u89E3\u51B3\u51B2\u7A81</li></ol><p>Git\u65E0\u6CD5\u81EA\u52A8\u5408\u5E76\u5206\u652F\u65F6\uFF0C\u5FC5\u987B\u9996\u5148\u89E3\u51B3\u51B2\u7A81\uFF0C\u51B2\u7A81\u89E3\u51B3\u540E\u518D\u63D0\u4EA4\uFF0C\u5408\u5E76\u5B8C\u6210</p><p>git log --graph\u53EF\u4EE5\u770B\u5230\u5206\u652F\u5408\u5E76\u56FE</p><ol start="3"><li>BUG\u5206\u652F</li></ol><p>bug\u901A\u8FC7\u4E00\u4E2A\u65B0\u7684\u4E34\u65F6\u5206\u652F\u4FEE\u590D\uFF0C\u4FEE\u590D\u540E\u5408\u5E76\u5206\u652F\uFF0C\u7136\u540E\u5C06\u4E34\u65F6\u5206\u652F\u5220\u9664</p><p><code>git stash</code>\uFF1A\u628A\u5F53\u524D\u5DE5\u4F5C\u73B0\u573A\u201C\u9690\u85CF\u201D\u8D77\u6765\uFF0C\u7B49\u4EE5\u540E\u6062\u590D\u73B0\u573A\u540E\u7EE7\u7EED\u5DE5\u4F5C</p><p><code>git stash list</code>:\u67E5\u770B\u201C\u9690\u85CF\u201D\u7684\u5DE5\u4F5C\u73B0\u573A</p><ol start="4"><li>\u6062\u590D\u73B0\u573A</li></ol><p><code>git stash apply</code>:\u6062\u590D\u540E\uFF0Cstash\u5185\u5BB9\u5E76\u4E0D\u5220\u9664</p><p><code>$ git stash apply stash@{0}</code> \u6062\u590D\u6307\u5B9A\u7684stash</p><p><code>git stash drop</code>\uFF1A\u5220\u9664stash\u5185\u5BB9</p><p><code>git stash pop</code>\uFF1A\u6062\u590D\u7684\u540C\u65F6\u5220\u9664</p><p>pop\u548Cdrop\u4E5F\u53EF\u4EE5\u6307\u5B9A <code>stash@{number}</code></p><p>number\u6309\u7167\u63D0\u4EA4\u987A\u5E8F\uFF0C\u4EA4\u5F97\u8D8A\u65E9\uFF0C\u6570\u5B57\u8D8A\u5927\uFF0C\u6700\u665A\u7684\u4E00\u6B21\u201C\u9690\u85CF\u201D\u662F0</p><p>#\u5C06\u4FEE\u590D\u201C\u590D\u5236\u201D\u5230\u5206\u652Fdev</p><p><code>$ git cherry-pick &lt;commit_id&gt;</code></p><p>\u590D\u5236\u4E00\u4E2A\u7279\u5B9A\u7684\u63D0\u4EA4\u5230\u5F53\u524D\u5206\u652F\uFF0C\u4E0D\u9700\u8981\u5728dev\u5206\u652F\u4E0A\u624B\u52A8\u4FEE\u6539\u4E00\u904Dbug</p><ol start="5"><li>Feature\u5206\u652F</li></ol><p>\u65B0\u529F\u80FD\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u5C06branch\u5408\u5E76\u5220\u9664</p><p><code>git branch -d &lt;branchName&gt;</code></p><p><code>git branch -D &lt;branchName&gt;</code>(\u5206\u652F\u5408\u5E76\u524D\u5F3A\u5236\u5220\u9664)</p><hr><h2 id="seventh-\u6807\u7B7E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#seventh-\u6807\u7B7E\u7BA1\u7406" aria-hidden="true">#</a> Seventh.\u6807\u7B7E\u7BA1\u7406</h2><p>\u6807\u7B7E\u662F\u7248\u672C\u5E93\u7684\u5FEB\u7167 \uFF0C\u662F\u6307\u5411\u67D0\u4E2Acommit \u7684\u6307\u9488</p><p>tag\u662F\u4E00\u4E2A\u8BA9\u4EBA\u5BB9\u6613\u8BB0\u4F4F\u7684\u6709\u610F\u4E49\u7684\u540D\u5B57\uFF0C\u8DDF\u67D0\u4E2Acommit\u7ED1\u5728\u4E00\u8D77</p><p><code>git\xA0tag &lt;name&gt;</code>:\u4FBF\u53EF\u4EE5\u6253\u4E00\u4E2A\u65B0\u6807\u7B7E \uFF08\u9ED8\u8BA4\u7ED9HEAD\u6253\u6807\u7B7E\uFF09</p><p><code>git\xA0tag</code>:\u67E5\u770B\u6240\u6709\u6807\u7B7E</p><p>git\xA0tag -l &quot;v1.8.5*&quot;:\u663E\u793A\u6709\u5173v1.8.5\u7684\u6240\u6709\u6807\u7B7E</p><p><code>git\xA0tag &lt;name&gt; &lt;commit_id&gt;</code> :\u7ED9\u4E4B\u524D\u7684\u63D0\u4EA4\u6253\u6807\u7B7E</p><p><code>git\xA0tag -a &lt;name&gt; -m &quot;message&quot; &lt;commit_id&gt;</code>:\u521B\u5EFA\u5E26\u6709\u8BF4\u660E\u7684\u6807\u7B7E\uFF0C-a\u6307\u5B9A\u6807\u7B7E\u540D\uFF0C-m\u6307\u5B9A\u8BF4\u660E\u6587\u5B57</p><p><code>git\xA0show &lt;tagname&gt;</code>:\u67E5\u770B\u6807\u7B7E\u4FE1\u606F</p><p>\u6807\u7B7E\u603B\u662F\u548Ccommit\u6302\u94A9\uFF0C\u88AB\u6253\u4E0A\u6807\u7B7E\u7684commit\u6240\u5728\u7684\u6240\u6709\u5206\u652F\u90FD\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2Atag</p><p><code>git\xA0push origin --tags</code>\uFF1A\u5C06\u4E0D\u5728\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u6807\u7B7E\u4E0A\u4F20\u5230\u8FDC\u7A0B\u4ED3\u5E93</p><p><code>git\xA0push origin &lt;tagname&gt;</code>:\u63A8\u9001\u7279\u5B9A\u6807\u7B7E</p><p><code>git\xA0tag -d &lt;tagname</code>&gt;:\u5220\u9664\u6807\u7B7E\uFF08\u672C\u5730\uFF09</p><p><code>git\xA0push origin :refs/tags/&lt;tagname&gt;</code>:\u4ECE\u8FDC\u7A0B\u5220\u9664</p><hr><h2 id="eighth-\u914D\u7F6E\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#eighth-\u914D\u7F6E\u522B\u540D" aria-hidden="true">#</a> Eighth.\u914D\u7F6E\u522B\u540D</h2><p><code>git config --global alias.&lt;\u522B\u540D&gt; &lt;\u672C\u540D&gt;</code></p><p>st -&gt; status</p><p>co -&gt; checkout</p><p>ci -&gt; commit</p><p>br -&gt; branch</p><p>reset HEAD-&gt;unstage \u6682\u5B58\u533A\u7684\u4FEE\u6539\u64A4\u9500</p><p>log -1 -&gt;last :\u663E\u793A\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4</p><p>log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit -&gt;lg :\u663E\u793A\u63D0\u4EA4\u65E5\u5FD7\u4FE1\u606F</p><ul><li>-global :\u5168\u5C40\u53C2\u6570\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u5728\u8FD9\u53F0\u7535\u8111\u7684\u6240\u6709Git\u4ED3\u5E93\u90FD\u6709\u7528\uFF0C\u5373\u5BF9\u5F53\u524D\u7528\u6237\u8D77\u4F5C\u7528</li></ul><p>\u4E0D\u52A0--global\u5219\u53EA\u5BF9\u5F53\u524D\u4ED3\u5E93\u8D77\u4F5C\u7528</p><p>\u6BCF\u4E2A\u4ED3\u5E93\u7684\u914D\u7F6E\u6587\u4EF6\u90FD\u653E\u5728.git/config\u6587\u4EF6\u4E2D</p><p>cat .git/config\u67E5\u770B</p><p>\u5F53\u524D\u7528\u6237\u7684\u914D\u7F6E\u6587\u4EF6\u653E\u5728\u4E3B\u76EE\u5F55\u7684\u9690\u85CF\u6587\u4EF6.gitconfig\u4E2D\uFF0C\u914D\u7F6E\u522B\u540D\u53EF\u76F4\u63A5\u4FEE\u6539\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u6539\u9519\u4E86\u5C31\u5220\u4E86\u3002</p><hr><h2 id="ninth-\u5FFD\u7565\u7279\u6B8A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#ninth-\u5FFD\u7565\u7279\u6B8A\u6587\u4EF6" aria-hidden="true">#</a> Ninth.\u5FFD\u7565\u7279\u6B8A\u6587\u4EF6</h2><ul><li>\u7F16\u5199.gitignore</li><li>.gitignore\u8981\u653E\u5728\u7248\u672C\u5E93\uFF0C\u53EF\u4EE5\u5BF9\u5176\u505A\u7248\u672C\u7BA1\u7406</li></ul><p>\u4E0D\u9700\u8981\u4ECE\u5934\u5199.gitignore \u6587\u4EF6\uFF0C\xA0GitHub\u5DF2\u7ECF\u51C6\u5907\u4E86\u5404\u79CD\u914D\u7F6E\u6587\u4EF6\uFF0C\u7EC4\u5408\u4E00\u4E0B\u4FBF\u53EF\u4EE5\u4F7F\u7528\u3002</p>`,185),b={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},f=a('<p>Git\xA0\u5DE5\u4F5C\u533A\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u7279\u6B8A\u7684.gitignore\u6587\u4EF6\uFF0C\u628A\u8981\u5FFD\u7565\u7684\u6587\u4EF6\u540D\u586B\u8FDB\u53BB</p><p>\u5FFD\u7565\u539F\u5219\uFF1A</p><p>1.\u5FFD\u7565\u64CD\u4F5C\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u7684\u6587\u4EF6</p><p>2.\u5FFD\u7565\u7F16\u8BD1\u751F\u6210\u7684\u4E2D\u95F4\u6587\u4EF6\uFF0C\u53EF\u6267\u884C\u6587\u4EF6\u7B49</p><p>3.\u5FFD\u7565\u5E26\u6709\u654F\u611F\u4FE1\u606F\u7684\u914D\u7F6E\u6587\u4EF6</p><p>\u6587\u4EF6\u88AB\u5FFD\u7565\u540E\uFF0C</p><p><code>git\xA0add {filename}</code></p><p>\u6DFB\u52A0\u4E0D\u5230git</p><p>\u9700\u8981\xA0<code>git\xA0add-f {filename}</code></p><p><code>git\xA0check-ignore -v {filename}</code> \u53EF\u4EE5\u68C0\u67E5.gitignore\u54EA\u91CC\u5199\u9519\u4E86</p><h2 id="tenth-\u4F7F\u7528github-desktop" tabindex="-1"><a class="header-anchor" href="#tenth-\u4F7F\u7528github-desktop" aria-hidden="true">#</a> Tenth.\u4F7F\u7528GitHub Desktop</h2>',11),k=t("p",null,"\u7531GitHub\u5B98\u65B9\u63A8\u51FA\u7684\u56FE\u5F62\u5316\u5DE5\u5177\uFF0C\u5B8C\u7F8E\u8054\u52A8git\u4E0EGitHub\uFF0C\u60A8\u7684\u4E0D\u4E8C\u4E4B\u9009\u{1F440}",-1),_={href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.github.com/cn/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop",target:"_blank",rel:"noopener noreferrer"},x=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"\u{1F4AD}"),t("p",null,"\u81EA\u4ECE\u7528\u4E86\u8FD9\u73A9\u610F\uFF0C\u53EF\u4EE5\u8BF4\u662F\u5F7B\u5E95\u6446\u8131Git\u547D\u4EE4\u4E86\u3002"),t("p",null,"\u4EC0\u4E48\uFF1F\u4F60\u8BF4\u90A3\u6211\u5B66\u4E0A\u9762\u90A3\u4E00\u5806Git\u547D\u4EE4\u5E72\u561B\uFF1F"),t("p",null,"\u6211\u53EF\u6CA1\u8BF4\u8981\u4F60\u5B66\u5965\u{1F921}")],-1);function q(w,H){const i=p("ExternalLinkIcon");return l(),n("div",null,[g,t("blockquote",null,[s,t("p",null,[t("a",h,[e("\u962E\u4E00\u5CF0\u7684Git\u6559\u7A0B"),o(i)])]),t("p",null,[t("a",m,[e("Git\u5E38\u7528\u547D\u4EE4"),o(i)])])]),u,t("p",null,[t("a",b,[e("github.com"),o(i)])]),f,t("blockquote",null,[k,t("p",null,[t("a",_,[e("GitHub Desktop \u5B98\u7F51"),o(i)])]),t("p",null,[t("a",v,[e("\u5B98\u65B9\u6559\u7A0B"),o(i)])])]),x])}const E=c(r,[["render",q],["__file","Git.html.vue"]]);export{E as default};
