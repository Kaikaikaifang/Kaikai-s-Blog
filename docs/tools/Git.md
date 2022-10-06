---
lang: zh-CN
title: Git
description: Git用于项目管理
---

# Git

> 没记错的话，这是**Kaikai**写的第一篇技术文档。:yum:
>
> [阮一峰的Git教程](http://www.ruanyifeng.com/blog/2018/10/git-internals.html)
>
> [Git常用命令](https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

Hello world!

## First.登录用户名邮箱

```bash
# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

---

## *Second.创建仓库*

1. 本地仓库创建后push到远程库（先有本地库）

- 创建空目录：`mkdir learngit` → `cd learngit` →**`pwd`(pwd用于显示当前目录)**
- 初始化仓库：`git init`
- git remote add origin [git@github.com](mailto:git@github.com):Kaikaikaifang/hello_world.git
    
    origin:远程库的名字
    
    git push -u origin main
    
    main:分支的名字，本地分支和远程分支同名main
    
- u参数使得git在将本地的main分支推送到远程新的main分支的同时，将远程的main分支与本地的main分支关联起来

2. 从远程库clone到本地（先有远程库）

💢注意clone前先`cd`进入放置本地仓库的路径

`git clone [git@github.com](mailto:git@github.com):Kaikaikaifang/<repository name>.git`

3. 创建远程库

ssh密钥：

`$ ssh-keygen -t rsa -C "[email address]"`

创建.ssh 文件，内有id_rsa私钥和id_rsa.pub公钥

github 添加 ssh密钥 ，

将id_rsa.pub中的内容添加到key文本框

.pub文件打开方法：

当前文件目录（.ssh）输入cmd

查看文件内容：`type id_rsa.pub`

---

## Third.本地仓库的组成

![Git](\images\tools\Git\git.png)

### 工作区

工作区的操作是直接在文件资源管理器中操作文件及文件夹

git add 之前可以`git diff` 查看做出的修改

`git add <filename>` ：把修改添加到暂存区

工作区与版本库相对独立，通过git add 联系起来

### 版本库

工作区内的一个隐藏目录 .git

- 暂存区(index/stage)

`git commit  -m “message”` :把暂存区的所有内容提交到当前分支

其实就是HEAD指针指向的branch指针指向这个新的commit

git commit相当于给现在的工作区拍了个“**快照**”。

- 提交区

每一次的提交都有一个对应的commit_id

commit_id本质是一串SHA-1生成的哈希码

用于表示一个git commit 对象（快照）

首先，每个commit对象的commit hash都是不同的

其次，这一串commit hash 并不是随机生成的

而是，基于加密对象直接生成的一个加密字符串

所以说，如果加密对象不改变，那么生成的commit hash便不会改变 。

每个commit都包括上一个commit的commit hash，

因此我们可以通过

`git commit log --graph`

得到图形化的提交历史，相邻两个commit之所以能够相连接，就是因为每个commit都包含了上一次commit的哈希值。

- HEAD指针

HEAD指针位于版本库，能够在任何分支（指向branch指针）和版本（指向快照， 🐣某次commit）之间移动(通过`git checkout`)，通过移动HEAD指针可以将数据还原至任何版本。

1.指向branch会和branch指针一起向后移动，

2.不指向branch提交时会在一个detached状态（游离状态），🐣没有和任何分支绑定。

`git checkout <commit_id>`会使得HEAD处于游离状态

💢处于游离状态时，进行commit是存在问题的：此时HEAD指针直接指向commit，而不是HEAD指针指向branch，branch指向commit

👀解决方法：

1.新建分支：

`git branch <branchName>` →`git checkout <branchName>`

2.移动已经存在的branch指针指向HEAD所指向的commit：

`git branch -f <old_branchName> <commit_id>`

> 💥git checkout 和 git reset 的区别：
> 

> `git reset --hard <commit_id>`:reset 不仅可以去到过去的commit，而且可以去到将来的commit，值得注意的是，“时光穿梭”之后HEAD指针的指向并不会发生改变，未来创建的branch指针不会消失。
> 

> `git checkout`:checkout 只能回到过去的commit，且HEAD指针会处于游离状态。
> 
- branch指针

git branch -f 来移动分支指针，

移动的对象只能是快照(只能指向快照)

---

## Fourth.修改与撤销修改

### 修改

#修改文件

`git add <filename>`

`git commit -m”message”`

#删除文件：

1. 删除并添加到暂存区：
- 在文件管理器直接删除文件，或`rm <filename>`删除文件

文件删除与文件修改类似，都是文件做出了改变，需要`git add`将change添加到暂存区。

- `git rm<filename>`：操作结束后不仅删除了文件，且添加到了暂存区
1. 将change提交到版本库：
- `git commit -m"message"`

这样便将文件彻底的从版本库中删除

### 撤销修改

删除文件也是修改文件，撤销方法相同

1.工作区文件做出修改（未 git add）:

- `git checkout -- <filename>`
- `git restore <filename>`
- 结果是撤销了工作区的修改

2.修改后已经添加至暂存区（已git add）:

- **`git reset HEAD <filename>`**
- `git restore --staged <filename>`
- 结果是撤销添加至暂存区，可进行1.的操作继续撤销工作区修改

3.已经提交至版本库（已git commit,未推送到远程库）:

- 版本回退 `git reset --hard HEAD^`

4.已经提交至版本库，且提交之后发生过提交

- `git checkout <commit_id> - - <paths>`
- 通过paths找出某一文件，并把它恢复成commit id 所对应的状态，所以说checkout能够将指定文件恢复成某一指定历史状态？yep!

💢命令`git rm`用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失**最近一次提交后你修改的内容**？？

> 恢复文件会使得删除文件之后做出的change一并撤销，工作区“回到了删除文件之前”

---

## Fifth.本地仓库与远程仓库的联动

- `git remote rm <remoteRepository>`：删除已关联的远程库
- `git remote add <repository**Name1**> git@github(or gitee).com:Kaikaikaifang/<repository**Name2**>.git`
- Name1是git给远程库取的别名（随便取，无所谓）
- Name2是远程库的本名（必须一致）

`git remote`:查看远程库的信息

`git remote -v`:显示详细的信息

`$ git remote -v`

```bash
    origin git@github.com:Kaikaikaifang/hello_world.git (fetch)
    origin git@github.com:Kaikaikaifang/hello_world.git (push)
```

1.推送分支就是把该分支上的所有本地提交推送到远程库

**`git push <远程库(origin)> <branchName(本地)>`**

main(master)主分支要时刻与远程同步

dev:开发分支，所有成员都需要在上面工作，也需要与远程同步

bug分支：没必要

feature：取决于是否合作开发

2.从远程抓取

- `git pull`抓取远程新提交并与本地合并:

若提示 no tracking information 说明本地分支和远程分支链接关系没有创建

- 建立本地分支和远程的联系:

`git branch --set-upstream-to <branch-name> origin/<branch-name>`

- 本地创建和远程对应的分支(即包括两项：创建分支和建立联系)：

`git checkout -b branch-name origin/branch-name`

`git switch -c branch-name origin/branch-name`

---

## Sixth.分支管理

基本原则：

master分支应该稳定，仅用来发布新版本，平时不能在上面工作

工作都在dev分支上，dev分支是不稳定的，版本发布时把dev合并到master，在master分支发布新版本。

创建分支：`git checkout -b dev`

-b 表示创建并切换

相当于：

git branch dev 创建

git checkout dev 切换

`git branch` :列出所有分支

`git checkout`:切换分支

`git merge <brand>`:合并指定分支到当前分支

`git branch -d <branchName>`:删除分支

**使用分支更安全**

`git switch -c <branch>`:创建并切换到新的分支

`git switch <branch>`:切换至已有分支

1. 合并分支

Fast forward模式：删除分支后，会丢失分支信息（git log --graph不显示分支）

禁用（`git merge **--no-ff -m "message"** <brand>`）后，Git 会在merge时生成一个新的commit，从分支历史可以看出分支信息

- `git log --graph --pretty=oneline --abbrev-commit` 查看分支合并情况
- `git log --graph`查看分支合并图
- 当两个分支修改同一个文件时，可能发生两个分支不能自动合并的问题，需要手动解决冲突（合并时，Git将冲突标识了出来），然后再次提交，即可完成合并。
- 使用参数--no-ff禁用快合并模式，`git merge --no-ff -m"merge with no-ff" dev`，合并

2. 解决冲突

Git无法自动合并分支时，必须首先解决冲突，冲突解决后再提交，合并完成

git log --graph可以看到分支合并图

3. BUG分支

bug通过一个新的临时分支修复，修复后合并分支，然后将临时分支删除

`git stash`：把当前工作现场“隐藏”起来，等以后恢复现场后继续工作

`git stash list`:查看“隐藏”的工作现场

4. 恢复现场

`git stash apply`:恢复后，stash内容并不删除

`$ git stash apply stash@{0}` 恢复指定的stash

`git stash drop`：删除stash内容

`git stash pop`：恢复的同时删除

pop和drop也可以指定 `stash@{number}`

number按照提交顺序，交得越早，数字越大，最晚的一次“隐藏”是0

#将修复“复制”到分支dev

`$ git cherry-pick <commit_id>`

复制一个特定的提交到当前分支，不需要在dev分支上手动修改一遍bug

5. Feature分支

新功能开发完成后，将branch合并删除

`git branch -d <branchName>`

`git branch -D <branchName>`(分支合并前强制删除)

---

## Seventh.标签管理

标签是版本库的快照 ，是指向某个commit 的指针

tag是一个让人容易记住的有意义的名字，跟某个commit绑在一起

`git tag <name>`:便可以打一个新标签 （默认给HEAD打标签）

`git tag`:查看所有标签

git tag -l "v1.8.5*":显示有关v1.8.5的所有标签

`git tag <name> <commit_id>` :给之前的提交打标签

`git tag -a <name> -m "message" <commit_id>`:创建带有说明的标签，-a指定标签名，-m指定说明文字

`git show <tagname>`:查看标签信息

标签总是和commit挂钩，被打上标签的commit所在的所有分支都可以看到这个tag

`git push origin --tags`：将不在远程仓库的所有标签上传到远程仓库

`git push origin <tagname>`:推送特定标签

`git tag -d <tagname`>:删除标签（本地）

`git push origin :refs/tags/<tagname>`:从远程删除

---

## Eighth.配置别名

`git config --global alias.<别名> <本名>`

st -> status

co -> checkout

ci -> commit

br -> branch

reset HEAD->unstage 暂存区的修改撤销

log -1 ->last :显示最近一次提交

log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit ->lg :显示提交日志信息

- -global :全局参数，这些命令在这台电脑的所有Git仓库都有用，即对当前用户起作用

不加--global则只对当前仓库起作用

每个仓库的配置文件都放在.git/config文件中

cat .git/config查看

当前用户的配置文件放在主目录的隐藏文件.gitconfig中，配置别名可直接修改这个文件，改错了就删了。

---

## Ninth.忽略特殊文件

- 编写.gitignore
- .gitignore要放在版本库，可以对其做版本管理

不需要从头写.gitignore 文件， GitHub已经准备了各种配置文件，组合一下便可以使用。

[github.com](https://github.com/github/gitignore)

Git 工作区根目录下创建一个特殊的.gitignore文件，把要忽略的文件名填进去

忽略原则：

1.忽略操作系统自动生成的文件

2.忽略编译生成的中间文件，可执行文件等

3.忽略带有敏感信息的配置文件

文件被忽略后，

`git add {filename}`

添加不到git

需要 `git add-f {filename}`

`git check-ignore -v {filename}` 可以检查.gitignore哪里写错了

## Tenth.使用GitHub Desktop

> 由GitHub官方推出的图形化工具，完美联动git与GitHub，您的不二之选👀
>
> [GitHub Desktop 官网](https://desktop.github.com/)
>
> [官方教程](https://docs.github.com/cn/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)

:::warning 💭
自从用了这玩意，可以说是彻底摆脱Git命令了。

什么？你说那我学上面那一堆Git命令干嘛？

我可没说要你学奥:clown_face:
:::
