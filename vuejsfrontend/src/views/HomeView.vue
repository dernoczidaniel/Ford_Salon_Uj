<script>
import HomePcView from '../components/HomePcView.vue';
import HomeMobile from '../MobileViews/Home.vue'

export default {
    methods: {
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        }
    },
    components: {
        HomePcView,
        HomeMobile
    }
}

</script>

<template>
    <div v-if="!isMobile()">
        <desktop>
            <HomePcView></HomePcView>
        </desktop>
    </div>
    <div v-else>
        <mobile>
            <HomeMobile></HomeMobile>
        </mobile>
    </div>
</template>