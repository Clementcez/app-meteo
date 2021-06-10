<template>
    <div class="sun">
      <i class="fas fa-sun sunIcon"></i>
      <i class="far fa-sun sunIcon sunIcon--out"></i>
      <i class="far fa-sun sunIcon sunIcon--out sunInverse"></i>
      <div class="sun sun__rayon">
        <div class="rayon"></div><div class="rayon rayon--mod1"></div><div class="rayon rayon--mod2"></div>
      </div>
    </div>
</template>

<style scoped>
@keyframes sunRotate {
  0%{
    transform: rotate(0);
  }

  100%{
    transform: rotate(360deg);
  }
}

@keyframes sunRotateInverse {
  0%{
    opacity: 0.3;
    transform: scale(1) rotate(360deg);
  }

  50%{
    transform: scale(1.8) rotate(180deg);
  }

  100%{
    opacity: 0.3;
    transform: scale(1) rotate(0);
  }
}

@keyframes rayonRotateInverse {
  0%{
    opacity: 0.5;
    transform: rotate(0deg);
  }

  25%{
    transform: rotate(25deg);
  }

  50%{
    transform: rotate(0deg);
  }

  75%{
    transform: rotate(-25deg);
  }

  100%{
    opacity: 0.5;
    transform: rotate(0deg);
  }
}


.sun{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sunIcon{
  position: absolute;
  font-size: 120px;
  color: rgb(252, 227, 9);
  animation: sunRotate 40s infinite linear;
}

.sunIcon--out{
  font-size: 200px;
}

.sunInverse{
  animation: sunRotateInverse 60s infinite linear;
}

.rayon{
  position: absolute;
  background-color: yellow;
  width: 450px;
  height: 6px;
  border-radius: 1px;
  transform: rotate(0deg);
  background: linear-gradient(90deg, transparent 200px, yellow 0) right,
              linear-gradient(270deg, transparent 200px, yellow 0) left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

.rayon--mod1{
  transform: rotate(45deg);
}

.rayon--mod2{
  transform: rotate(315deg);
}

.sun__rayon{
  animation: rayonRotateInverse 60s infinite ease-in-out;
}
</style>