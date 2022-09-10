# vite 创建项目

::: warning 兼容性注意。
Vite 需要 Node.js 版本 14.18+，16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本
:::

- 使用 `create-vue` 创建

```sh:no-line-numbers
npm init vue@latest
```

[官方推荐,通过选择需要的功能,自动生成配置](https://cn.vuejs.org/guide/quick-start.html)

- 使用 `vite` 创建

```sh:no-line-numbers
npm create vite@latest
```

[初始只有所选 js 框架,支持高度自定义](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)

因为我此次选用的第二种创建方式,所以着重激励一下第二种

## vant 3.x

[Vant 3.x 版本，适用于 Vue 3 开发](https://vant-contrib.gitee.io/vant/#/zh-CN)

```sh:no-line-numbers
npm i vant
```

全局引入会增加打包体积 这里我们选用自动按需引入

1. 下载插件

```sh:no-line-numbers
npm i unplugin-vue-components
```

2. 在 `vit.config.js` 中配置插件

```js
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

export default {
	plugins: [
		vue(),
		Components({
			resolvers: [VantResolver()]
		})
	]
};
```

这时我们就可以在页面中直接使用 vant 的组件了

```vue:no-line-numbers
<van-button type="primary">click me</van-button>
```

但是 Vant 中有个别组件是以函数的形式提供的, 包括` Toast`, `Dialog`, `Notify` 和 `ImagePreview` 组件。在使用函数组件时, `unplugin-vue-components` 无法自动引入对应的样式, 因此需要手动引入样式。

```js
// Toast
import { Toast } from "vant";
import "vant/es/toast/style";

// Dialog
import { Dialog } from "vant";
import "vant/es/dialog/style";

// Notify
import { Notify } from "vant";
import "vant/es/notify/style";

// ImagePreview
import { ImagePreview } from "vant";
import "vant/es/image-preview/style";
```

当然, 我们也可以在项目的入口文件或公共模块中引入以上组件的样式, 这样在业务代码中使用组件时, 便不再需要重复引入样式了。

```js
// main.js

// Toast
import "vant/es/toast/style";

// Dialog
import "vant/es/dialog/style";

// Notify
import "vant/es/notify/style";

// ImagePreview
import "vant/es/image-preview/style";
```

::: tip 提示
在单个项目中不应该同时使用「全量引入」和「按需引入」，否则会导致代码重复、样式错乱等问题。
:::

## css

Vite 同时提供了对 `.scss`, `.sass`, `.less`, `.styl` 和 `.stylus` 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖

```sh:no-line-numbers
# .scss and .sass
npm add -D sass

# .less
npm add -D less

# .styl and .stylus
npm add -D stylus
```

如果使用的是单文件组件，可以通过 `<style lang="sass">`（或其他预处理器）自动开启。

## postCss

如果项目包含有效的 `PostCSS` 配置 (任何受 `postcss-load-config` 支持的格式，例如 `postcss.config.js`)，它将会自动应用于所有已导入的 CSS。

我们在开发移动端时一般会使用 rem 来适应多种设备,这里我们可以使用插件来实现

1. 下载插件

```sh:no-line-numbers
# postcss-pxtorem 实现px转rem
npm i postcss-pxtorem

# amfe-flexible 根据屏幕尺寸设置根节点(html)的 font-size
npm i amfe-flexible

# autoprefixer 浏览器样式兼容(给样式加各个浏览器的前缀) 可选
npm i autoprefixer
```

2. 在 `package.json` 同级新建 `postcss.config.cjs`

因为是 CommonJS 所以文件名为`.cjs`

```js
module.exports = {
	plugins: {
		autoprefixer: {
			overrideBrowserslist: [
				"Android 4.1",
				"iOS 7.1",
				"Chrome > 31",
				"not ie <= 11", //不考虑IE浏览器
				"ff >= 30", //仅新版本用“ff>=30
				"> 1%", //  全球统计有超过1%的使用率使用“>1%”;
				"last 2 versions" // 所有主流浏览器最近2个版本
			],
			grid: true // 开启grid布局的兼容(浏览器IE除外其他都能兼容grid，可以关闭开启)
		},
		"postcss-pxtorem": {
			rootValue: 37.5, // 设计稿宽度除以 10，  开头大写的Px 不转换 => height: 100Px, 内联样式不转换，需要 / 75 转成 rem
			unitPrecision: 6, // 计算结果保留 6 位小数
			selectorBlackList: [".no-rem", "no-rem"], // 要忽略的选择器并保留为px。
			propList: ["*"], // 可以从px更改为rem的属性  感叹号开头的不转换
			replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
			mediaQuery: true, // 允许在媒体查询中转换px。
			minPixelValue: 2, // 设置要替换的最小像素值。
			exclude: /node_modules/i // 排除 node_modules 文件(node_modules 内文件禁止转换)
		}
	}
};
```

## jsx

[vue 也是可以使用 jsx 的](https://cn.vuejs.org/guide/extras/render-function.html)

```sh:no-line-numbers
npm i @vitejs/plugin-vue-jsx
```

在 `vite.config.js` 中加入配置

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
	plugins: [vue(), vueJsx()]
});
```

页面中就可以愉快的使用 jsx 了

```jsx
import { defineComponent } from "vue";
import "./index.less";

export default defineComponent(() => {
	const render = () => {
		return (
			<>
				<h1>home</h1>
				<div class='content'></div>
			</>
		);
	};

	return render;
});
```

```jsx
import { defineComponent } from "vue";
import "./index.less";

export default defineComponent({
	setup() {
		const render = () => {
			return (
				<>
					<h1>home</h1>
					<div class='content'></div>
				</>
			);
		};

		return render;
	}
});
```

## 环境变量

[vite 配置环境与 webpack 有所不同](https://www.jianshu.com/p/1e85185796d8)

我们可以指定环境变量的文件夹 环境变量的开头需要以 `VITE-` 命名, 也可以自定义命名前缀

```js
// vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	envDir: "./viteEnv", //这里使用相对路径，绝对路径其实也可以
	envPrefix: ["VITE", "VENUS"], //这个时候，我们可以将VITE_、VENUS_开头的变量统统透传给客户端
	plugins: [vue()]
});
```

## vite.config.js

[最终的配置项,更多配置可以参考文档](https://cn.vitejs.dev/)

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";

//在服务端获取配置参数

// https://vitejs.dev/config/

export default defineConfig({
	envDir: "./viteEnv", //这里使用相对路径，绝对路径其实也可以
	plugins: [
		vue(),
		vueJsx(),
		Components({
			resolvers: [VantResolver()]
		})
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src")
		}
	},
	server: {
		host: "0.0.0.0",
		port: 11001
	}
});
```
