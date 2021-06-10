<template>
    <div class="clouds">
        <i class="fas fa-cloud cloudIcon"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon--mod"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon__right"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon__right cloudIcon--mod"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon__top"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon__top cloudIcon--mod"></i>
        <i class="fas fa-bolt bolt"></i>
        <i class="fas fa-bolt bolt bolt__left"></i>
        <i class="fas fa-bolt bolt bolt__top"></i>
    </div>
</template>

<style scoped>

@keyframes fewClouds {
    0%{
        transform: translateX(0px) scale(1.2);
    }

    50%{
        transform: translateY(10px) translateX(150px) scale(1);
    }

    100%{
        transform: translateX(0px) scale(1.2);
    }
}

@keyframes fewCloudsRight {
    0%{
        transform: rotateY(180deg) translateX(0px) scale(1.2);
    }

    50%{
        transform: rotateY(180deg) translateY(20px) translateX(150px) scale(1);
    }

    100%{
        transform: rotateY(180deg) translateX(0px) scale(1.2);
    }
}

@keyframes fewCloudsTop {
    0%{
        transform: translateY(0px) scale(1);
    }

    50%{
        transform: translateY(40px) scale(1.2);
    }

    100%{
        transform: translateY(0px) scale(1);
    }
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
    animation: fewClouds 60s ease-in-out infinite;
}

.cloudIcon--mod{
    margin-left: 40px;
    color: gray;
}

.cloudIcon__right{
    animation: fewCloudsRight 60s ease-in-out infinite;
}

.cloudIcon__top{
    margin-bottom: 300px;
    animation: fewCloudsTop 60s ease-in-out infinite;
}

.bolt{
    position: absolute;
    font-size: 100px;
    color: yellow;
    margin-top: 400px;
    margin-left: 100px;
    animation: fewClouds 60s ease-in-out infinite;
}

.bolt__left{
    margin-right: 200px;
    animation: fewCloudsRight 60s ease-in-out infinite;
}

.bolt__top{
    margin-bottom: 300px;
    animation: fewCloudsTop 60s ease-in-out infinite;
}
</style>