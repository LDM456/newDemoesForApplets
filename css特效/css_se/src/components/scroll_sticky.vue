<template>
  <div class="page">
    <!-- <section>Scroll Down</section> -->
    <!-- <div class="container">
      <span style="--i:0"></span>
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
      <span style="--i:4"></span>
      <span style="--i:5"></span>
      <span style="--i:6"></span>
      <span style="--i:7"></span>
      <span style="--i:8"></span>
      <span style="--i:9"></span>
    </div> -->
    <h2>
      <span style="--i:0">C</span>
      <span style="--i:1">S</span>
      <span style="--i:2">S</span>
      <span style="--i:3">_</span>
      <span style="--i:4">S</span>
      <span style="--i:5">T</span>
      <span style="--i:6">I</span>
      <span style="--i:7">C</span>
      <span style="--i:8">K</span>
      <span style="--i:9">Y</span>
    </h2>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.page {
  padding: 0;
  margin: 0;
}
h2{
    padding: 0;
    margin: 0;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 8em;
  font-weight: 700;
  background: #000;
  color: #fff;
  text-transform: uppercase;
}
.container {
  position: relative;
  display: flex;
  background: #000;
}
.container span {
  position: sticky;
  top: 0;
  width: 10%;
  height: 100vh;
  background: skyblue;
  margin-top: calc(100vh * var(--i));
}
h2 {
  position: relative;
  background: linear-gradient(0deg, #ff0076, #cc00ff, #ffae00, #1fea99, skyblue);
  display: flex;
  justify-content: center;
}
h2 span {
  position: sticky;
  top: 0;
  line-height: 100vh;
  height: 100vh;
  color: #fff;
  font-size: 6em;
  margin-top: calc(100vh * var(--i));
}
</style>