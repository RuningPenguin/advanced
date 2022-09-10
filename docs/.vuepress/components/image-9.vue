<template>
	<div class="wrap">
		<div class="image">
			<div class="image-item"></div>
			<div class="image-item"></div>
			<div class="image-item"></div>
			<div class="image-item"></div>
			<div class="image-item"></div>
			<div class="image-item"></div>
			<div class="image-item"></div>
			<div class="image-item"></div>
			<div class="image-item"></div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.wrap {
	width: 100%;
	height: 500px;
	background-color: #282c34;
	display: flex;
	justify-content: center;
	align-items: center;
}
.image {
	position: relative;
	width: 300px;
	height: 300px;
	display: flex;
	flex-wrap: wrap;
	z-index: 2;
}
.image-item {
	position: relative;
	flex: 0 0 33.333%;
	width: 100px;
	height: 100px;
	box-shadow: 0 0 2px #ccc;
	background: url(./image/image-9.png);
	// 横轴
	&:nth-child(3n + 1) {
		left: -20px;
		background-position-x: 0px;
	}
	&:nth-child(3n + 2) {
		left: 0px;
		background-position-x: -100px;
	}
	&:nth-child(3n) {
		left: 20px;
		background-position-x: -200px;
	}
	// 纵轴
	& {
		top: 20px;
		background-position-y: -200px;
	}
	&:nth-child(-n + 6) {
		top: 0;
		background-position-y: -100px;
	}
	&:nth-child(-n + 3) {
		top: -20px;
		background-position-y: 0px;
	}
}
.image:hover .image-item {
	top: 0;
	left: 0;
	box-shadow: 0 0 0px #ccc;
}
</style>
