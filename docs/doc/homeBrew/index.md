# homeBrew

[homeBrew 官网](https://brew.sh/index_zh-cn);

## 安装

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
2. 如何切换下载源
3. brew 安装 nvm
