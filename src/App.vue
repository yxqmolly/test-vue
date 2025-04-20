<!-- src/App.vue -->
<template>
    <div id="app">
        <!-- 顶部部分 -->
        <div class="header">闫新强的vue学习之旅</div>

        <!-- 下方两列布局 -->
        <div class="content">
            <div class="left-column">
                <!-- 左侧按钮列表 -->
                <button v-for="(menu, index) in menus" :key="index" @click="navigateToPage(menu.route)"
                    :class="{ active: activeMenu === index }">
                    {{ menu.label }}
                </button>
            </div>
            <div class="right-column">
                <!-- 右侧内容区域 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';



// 定义菜单数据
const menus = [
{ label: 'vue原始', route: '/HelloWorld' },
  { label: '菜单1名字', route: '/PageOne' },
  { label: '菜单2', route: '/PageTwo' },
  { label: '菜单3', route: '/PageThree' }
  // 其他菜单项...
];

// 当前激活的菜单索引
const activeMenu = ref(0);

// 使用 Vue Router 进行页面跳转
const router = useRouter();
const route = useRoute();

const navigateToPage = (route) => {
  router.push(route);
};
if(route.path == '/'){
  router.push(menus[0].route);
}

// 监听路由变化以更新激活的菜单
watch(
  () => route.path,
  (newPath) => {
    const index = menus.findIndex(menu => menu.route === newPath);
    if (index !== -1) {
      activeMenu.value = index;
    }
  },
  { immediate: true }
);
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 页面高度占满视口 */
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc; /* 添加底部边框 */
  z-index: 100; /* 确保顶部层级最高 */
}

.content {
  display: flex;
  flex: 1; /* 占满剩余空间 */
  overflow: hidden; /* 防止内容溢出 */
  margin-top: 60px; /* 为顶部固定内容留出空间 */
}

.left-column {
  width: 15%; 
  height: 100%;
  position: fixed;
  background-color: #87CEEB; /* 设置背景颜色为蔚蓝色 */
  padding: 10px; /* 添加内边距 */
  display: flex;
  flex-direction: column;
  gap: 10px; /* 按钮之间的间距 */
  overflow: auto; /* 支持垂直滚动 */
  max-height: calc(100vh - 40px); /* 限制高度 */
}
.right-column {
  width: 85%; 
  height: 100%;
  position: fixed;
  background-color: #e0e0e0;
  padding: 20px;

  margin-left: 17%; /* 为左侧导航栏留出空间 */
  overflow-y: auto; /* 支持垂直滚动 */
  max-height: calc(100vh - 40px); /* 限制高度 */
  marker-mid: 0;
}

/* 按钮样式 */
button {
  padding: 10px;
  border: none;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 80%; 
  box-sizing: border-box; /* 确保 padding 不影响宽度 */
  text-align: center; /* 文本居中 */
}

button.active {
  background-color: #007bff;
  color: white;
}

button:hover {
  background-color: #999;
}
</style>
