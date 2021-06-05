<template>
    <div class="clouds">
        <i class="fas fa-cloud cloudIcon"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon--mod"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon__right"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon__right cloudIcon--mod"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon__top"></i>
        <i class="fas fa-cloud cloudIcon cloudIcon__top cloudIcon--mod"></i>
    </div>
</template>

<style scoped>

@keyframes fewClouds {
    0%{
        transform: translateY(60px) translateX(0px) scale(1.2);
    }

    50%{
        transform: translateY(50px) translateX(150px) scale(1);
    }

    100%{
        transform: translateY(60px) translateX(0px) scale(1.2);
    }
}

@keyframes fewCloudsRight {
    0%{
        transform: rotateY(180deg) translateY(60px) translateX(0px) scale(1.2);
    }

    50%{
        transform: rotateY(180deg) translateY(80px) translateX(150px) scale(1);
    }

    100%{
        transform: rotateY(180deg) translateY(60px) translateX(0px) scale(1.2);
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
    animation: fewClouds 60s linear infinite;
}

.cloudIcon--mod{
    margin-left: 40px;
    color: gray;
}

.cloudIcon__right{
    animation: fewCloudsRight 60s linear infinite;
}

.cloudIcon__top{
    margin-bottom: 300px;
    animation: fewCloudsTop 60s linear infinite;
}
</style>