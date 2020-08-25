import Vue from "vue";

Vue.directive("changecolor", {
  bind(e1) {
    e1.style.color = "red";
    e1.style.fontSize = "30px";
  }
});
