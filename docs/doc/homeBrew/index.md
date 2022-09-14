# homeBrew

:::tips 写在前面
提前安装好 git
:::

[homeBrew 官网](https://brew.sh/index_zh-cn);

## 安装

[教程](https://zhuanlan.zhihu.com/p/111014448)

```sh:no-line-numbers
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

官网安装需要梯子,可以使用国内源代替

```sh:no-line-numbers
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

## 常用命令

| 操作           | 命令                  |
| -------------- | --------------------- |
| 更新 HomeBrew  | `brew update`         |
| 更新所有包     | `brew upgrade`        |
| 更新指定包     | `brew upgrade wget`   |
| 查找软件包     | `brew search wget`    |
| 安装软件包     | `brew install wget`   |
| 卸载软件包     | `brew uninstall wget` |
| 查看已安装包   | `brew list`           |
| 查看包信息     | `brew info wget`      |
| 列出包依赖关系 | `brew deps wget`      |
| 列出可更新的包 | `brew outdated `      |

## 常见问题

brew 安装目录一般在 `/usr/local/Homebrew`(x64) 或者 ~`/opt/Homebrew`(arm)

1. brew 安装完成下载包失败
   提示:fatal: not in a git directory

   ```sh:no-line-numbers
   git config --global --add safe.directory 你的homebrew-core路径
   git config --global --add safe.directory 你的homebrew-cask路径
   ```

2. 如何切换下载源

   `.zprofile` 文件是 brew 的下载源和 shellenv

3. brew 安装 nvm

- brew 安装 nvm 后需要一些配置

  - 在 .zshrc 文件中添加一些环境变量 安装完毕 nvm 后会提示

  ```sh:no-line-numbers
  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/Homebrew/opt/nvm/nvm.sh" ] && \. "/opt/Homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/Homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/Homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
  ```

  - 切换 nvm 下载源
    在 .bashrc 文件中添加

  ```sh:no-line-numbers
      export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
      export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
  ```
