<template>
  <div>
    <slot>
      <div class="alert alert-success" role="alert" v-if="errorObj.msg.length">
        <ul>
          <li v-for="(msg,index) in errorObj.msg" :key="index">
            <strong>{{msg}}</strong>
          </li>
        </ul>
      </div>

      <!--
    <div class="alert alert-info" role="alert">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
    <div class="alert alert-warning" role="alert">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </div>-->
      <div class="alert alert-danger" role="alert" v-if="errorObj.errors.length">
        <ul>
          <li v-for="(error,index) in errorObj.errors" :key="index">
            <strong>{{error}}</strong>
          </li>
        </ul>
      </div>
    </slot>
  </div>
</template>


<script>
export default {
  name: "Error",
  props: {
    errorObj: {
      type: Object,
      required: true,
    },
  },
};
</script>