<template>
  <div class="about">
    <!---Print Child Data Here-->
    ChildData:{{ childData }}
    <HelloWorld @passData="getChildData" :msg="`Welcome to Your Vue.js App`" />

    <!-- Directive & Filters 24-08-20 Training-->
    <div v-changecolor>{{ `Custom Directive` | lowercase }}</div>
    Kilo:
    <input v-model="kilometer" />
    Meter:
    <input v-model="meter" />

    <!--computed-->

    Total Cost: {{ totalCost }}
  </div>
</template>

<script>
// @ is an alias to /src

//import PageTitile from "@/components/PageTitle.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "about",
  components: {
  //  PageTitile,
    HelloWorld
  },
  data() {
    return {
      childData: null,
      kilometer: 1,
      meter: 100,
      discount: 10,
      price: 90
    };
  },
  watch: {
    kilometer(newVal) {
      console.log(newVal);
      this.meter = newVal * 1000;
    },
    meter(newVal) {
      this.kilometer = newVal / 1000;
    }
  },
  computed: {
    totalCost() {
      return this.price - this.discount;
    }
  },
  methods: {
    eventHandler(event, arg) {
      console.log(event, arg);
      console.log("Hi..");
    },
    getChildData(payload) {
      this.childData = payload.data;
    }
  }
};
</script>
