<template>
	<view class="content">
		<!-- <view class="input"> -->
			<!-- <textarea class="title-text" placeholder="请输入主题贴标题" auto-height="true" v-model="title"/> -->
		<!-- </view> -->
		<view class="input">
			<textarea class="content-text" placeholder="请输入回复内容" maxlength="-1" auto-height="true" v-model="content"/>
		</view>
		<button class="load-button" @tap="submitReply()">提交</button>
	</view>
</template>

<script>
	import {publicAnswer,getCurrentUserPhone} from '../../fetch/api.js'
	export default {
		data() {
			return {
				content : '',
				topicId : null,
				userPhone : null
			}
		},
		methods: {
			async submitReply() {
				if (this.content.length > 0) {
					const params = {
						"userPhone" : this.userPhone,
						"content" : this.content
					};
					await publicAnswer(this.topicId, params);
					var pages = getCurrentPages();
					var beforePage = pages[pages.length - 2];
					console.log(beforePage)
					beforePage.handleGetAnswer();
					uni.navigateBack({
						animationDuration: 500,
						animationType: 'pop-out'
					})
				}
			},
			async getCurrentUser() {
				this.userPhone = await getCurrentUserPhone()
				console.log(this.userPhone)
			},
			onLoad(id) {
				if(id) {
					this.topicId = id.id
					this.getCurrentUser()
				}
			}
		}
	}
</script>

<style>
	.input {
		width: 730rpx;
		margin: 0 10rpx 0 10rpx;
		border-width: 0rpx 0rpx 2rpx 0rpx;
		background-color: #ffffff;
		border-color: #9a9a9a;
		border-style: solid;
	}
	
	.title-text {
		width: 700rpx;
		padding: 15rpx;
		margin: 0rpx 0rpx 0rpx 0rpx;
		border-width: 0rpx 0rpx 0rpx 0rpx;
	}
	
	.content-text {
		width: 700rpx;
		padding: 15rpx;
		margin: 0rpx 0rpx 0rpx 0rpx;
		border-width: 0rpx 0rpx 0rpx 0rpx;
	}
	
	.load-button {
		text-align: center;
		display: flex;
		justify-content: center;
		width: 730rpx;
		margin: 10rpx 10rpx 0 10rpx;
		border: 0;
		align-items: center;
		color: #007AFF;
		background-color: #F6F6F6;
		font-size: 30rpx;
		border-radius: 12rpx;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
	}
</style>
