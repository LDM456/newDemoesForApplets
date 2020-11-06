<template>
  <div class="theButton">
    <a href="#" class="btn">button</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style >
.theButton{
  height: 100vh;
  width: 100%;
  background: #000;
}
.btn{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  text-align: center;
  line-height: 60px;
  height: 60px;
  width: 200px;
  color: #fff;
  text-transform: uppercase;
  box-sizing: border-box;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  border-radius: 30px;
  background-size: 400%;
}

.btn:hover{
  animation: animate 6s linear infinite;
}
@keyframes animate {
  0%{
    background-position: 0%;
  }
  100%{
    background-position: 100%;

  }
}

.btn::before{
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  z-index: -1;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
}
.btn:hover:before{
  filter: blur(20px);
  opacity: 1;
   animation: animate 6s linear infinite;
}

</style>
