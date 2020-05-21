<template>
  <div>
    <h1>登录成功</h1>
    <h1>用户信息</h1>
    <h2>
      账号：{{user.login}}
    </h2>
    <h2>
      用户id：{{user.id}}
    </h2>
    <h2>
      <img :src="user.avatar_url"/>
    </h2>
    <button @click="logout" style="cursor:pointer">注销</button>
    <br>
    <!-- <button @click="res" style="cursor:pointer">获取资源从资源服务器</button> -->
  </div>
</template>

