<template>
  <div>
    <h1>切换事件</h1>
    <p>这里是页面1的内容。</p>
    <a @[dynamicEvent]="handleEvent">点击或悬停我</a><br/>    <p>事件类型: {{ eventType }}</p><br/>
    <button @click="toggleEvent">切换事件类型</button><br/>
    <hr/>
    <p>{{count}}</p>
    <button @click="count++">count++</button>
    <hr/>
    <!--阻止表单的默认提交行为&禁止提交后的刷新页面 -->
      <form @submit.prevent="onSubmit">
      <label for="name">姓名:</label>
      <input type="text" id="name" v-model="formData.name" /><br/>
      <label for="email">邮箱:</label>
      <input type="email" id="email" v-model="formData.email" /><br/>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 定义一个响应式变量来控制事件类型
const useClick = ref(true);
const eventType = ref('');
const count  = ref(0);
const formData = ref({
  name:'',
  email:''
})

// 动态事件名称
const dynamicEvent = computed(() => {
  console.log('触发l动态事件名称')
  return useClick.value ? 'click' : 'mouseover';
});

// 事件处理函数
const handleEvent = (event) => {
  console.log(event)
  eventType.value = event.type;
  console.log(`触发了 ${event.type} 事件`);
};

// 切换事件类型
const toggleEvent = () => {
  useClick.value = !useClick.value;
  console.log(`切换到 ${useClick.value ? 'click' : 'mouseover'} 事件`);
};
const onSubmit = async ()=>{
  console.log('提交表单,name=',formData.value.name,'email=',formData.value.email);
  formData.value={
    name:'',
    email:''
  }
}
</script>

<style>
/* 添加一些基本样式 */
a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

button {
  margin-top: 10px;
}
</style>