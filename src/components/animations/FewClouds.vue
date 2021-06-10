<template>
    <div class="sun">
      <i class="fas fa-sun sunIcon"></i>
      <i class="far fa-sun sunIcon sunIcon--out"></i>
      <i class="far fa-sun sunIcon sunIcon--out sunInverse"></i>
      <i class="fas fa-cloud cloudIcon"></i>
      <i class="fas fa-cloud cloudIcon cloudIcon--mod"></i>
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

@keyframes fewClouds {
    0%{
        transform: translateY(60px) translateX(-150px) scale(1.2);
    }

    50%{
        transform: translateY(50px) translateX(0px) scale(1);
    }

    100%{
        transform: translateY(60px) translateX(-150px) scale(1.2);
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

.cloudIcon{
    position: absolute;
    font-size: 250px;
    color: whitesmoke;
    animation: fewClouds 60s ease-in-out infinite;
}

.cloudIcon--mod{
    margin-left: 40px;
    color: white;
}

</style>