<template>
<div class="snow">
    <i class="far fa-snowflake snowIcon"></i>
    <i class="far fa-snowflake snowIcon snowIcon__right"></i>
    <i class="fas fa-snowflake snowIcon snowIcon__top snowInverse"></i>
</div>
</template>

<style scoped>

@keyframes snowRotate {
    0%{
        transform: scale(1) rotate(0);
    }

    50%{
        transform: scale(1.5) rotate(180deg);
    }

    100%{
        transform: scale(1) rotate(360deg);
    }
}

@keyframes snowRotateInverse {
    0%{
        opacity: 0.5;
        transform: scale(1) rotate(360deg);
    }

    50%{
        transform: scale(1.8) rotate(180deg);
    }

    100%{
        opacity: 0.5;
        transform: scale(1) rotate(0);
    }
}

.snow{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.snowIcon{
  position: absolute;
  margin-right: 250px;
  margin-top: 100px;
  font-size: 120px;
  color: whitesmoke;
  animation: snowRotate 40s infinite linear;
}

.snowIcon__right{
    margin-left: 350px;
    margin-bottom: 150px;
    font-size: 200px;
}

.snowInverse{
    margin-bottom: 200px;
    animation: snowRotateInverse 60s infinite linear;
}
</style>