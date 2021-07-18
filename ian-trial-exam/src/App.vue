<template>
  <div>
    <navbar></navbar>
    <router-view />
    <toast
      :show="toast.show"
      :text="toast.text"
      @hide-toast="hideToast"
    ></toast>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Toast from "./components/Toast.vue";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Toast,
  },
  computed: {
    toast() {
      return this.$store.getters.toast;
    },
  },
  methods: {
    hideToast() {
      this.$store.commit("hideToast");
    },
  },
};
</script>
<style scoped lang="scss"></style>
