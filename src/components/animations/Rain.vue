<template>
    <div class="clouds">
        <i class="fas fa-sun sunIcon"></i>
        <i class="far fa-sun sunIcon sunIcon--out"></i>
        <i class="far fa-sun sunIcon sunIcon--out sunInverse"></i>
        <i class="fas fa-cloud-showers-heavy cloudIcon"></i>
        <i class="fas fa-cloud-showers-heavy cloudIcon cloudIcon--mod"></i>
        <i class="fas fa-cloud-showers-heavy cloudIcon cloudIcon__right"></i>
        <i class="fas fa-cloud-showers-heavy cloudIcon cloudIcon__right cloudIcon--mod"></i>
    </div>
</template><i class="fas fa-cloud-showers-heavy"></i>

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
        transform: translateY(60px) translateX(100px) scale(1.2);
    }

    50%{
        transform: translateY(50px) translateX(150px) scale(1);
    }

    100%{
        transform: translateY(60px) translateX(100px) scale(1.2);
    }
}

@keyframes fewCloudsRight {
    0%{
        transform: translateY(60px) translateX(-100px) scale(1.2);
    }

    50%{
        transform: translateY(80px) translateX(-150px) scale(1);
    }

    100%{
        transform: translateY(60px) translateX(-100px) scale(1.2);
    }
}

.sunIcon{
  position: absolute;
  margin-bottom: 50px;
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

.clouds{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cloudIcon{
    position: absolute;
    font-size: 250px;
    color: black;
    animation: fewClouds 60s linear infinite;
}

.cloudIcon--mod{
    margin-left: 40px;
    color: gray;
}

.cloudIcon__right{
    animation: fewCloudsRight 60s linear infinite;
}
</style>