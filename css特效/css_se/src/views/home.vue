<template>
  <div class="home">
    <!-- <the-button></the-button> -->
    <scroll-sticky></scroll-sticky>
  </div>
</template>

<script>
import theButton from "@/components/theButton";
import scrollSticky from "@/components/scroll_sticky";
export default {
  components: {
    theButton,
    scrollSticky
  }
};
</script>
<style>
.home{
  padding: 0;
  margin: 0;
}
</style>