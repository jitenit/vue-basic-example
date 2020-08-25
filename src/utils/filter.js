import Vue from "vue";

Vue.filter("lowercase", function(value) {
  if (value) {
    return value.toLowerCase();
  } else return value;
});
