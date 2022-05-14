<template>
    <div :class="`vifnslb-container-${direction === 'vertical' ? 'vertical' : 'horizontal'}`">
        <div :class="`vifnslb-element-${direction === 'vertical' ? 'vertical' : 'horizontal'}`" :style="customStyle">
            <div v-for="i in 2" :key="i" :class="`vifnslb-bar-${direction === 'vertical' ? 'vertical' : 'horizontal'}`">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup> 
import {computed} from "vue"; const props = defineProps({ barStyle: Object, duration: {type: String, default: "12s"}, direction: {type: String, default: "normal"}, delay: {type: String, default: "0s"} }) 
const customStyle = computed(()=>{ return Object.assign({}, props.barStyle, { "animation-duration": props.duration, "animation-direction": props.direction, "animation-delay": props.delay }) })
</script> 

<style scoped>
@keyframes slideHorizontal { 
    100% { 
        transform: translateX(-50%); 
    } 
} 

.vifnslb-container-horizontal { 
    width: 100%; 
    overflow: hidden; 
}

.vifnslb-element-horizontal { 
    transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */ 
    position: relative; 
    overflow: hidden; 
    animation-name: slideHorizontal; 
    animation-iteration-count: infinite; 
    animation-timing-function: linear; 
    display: flex; 
    width: max-content; 
    min-width: 200%; 
} 

.vifnslb-bar-horizontal { 
    width: 50%; 
}


@keyframes slideVertical { 
    100% { 
        transform: translateY(-50%); 
    } 
} 

.vifnslb-container-vertical { 
    height: 100%; 
    overflow: hidden; 
}

.vifnslb-element-vertical { 
    transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */ 
    position: relative; 
    overflow: hidden; 
    animation-name: slideVertical; 
    animation-iteration-count: infinite; 
    animation-timing-function: linear; 
    display: flex; 
    flex-direction: column;
    height: max-content; 
    min-height: 200%; 
} 

.vifnslb-bar-vertical { 
    height: 50%; 
}
</style>