<template>
    <div :class="'c-feedback ' + classType" v-if="isActive" @click="hide">{{message}}</div>
</template>
<script>
export default {
    name: "Feedback",
    data() {
        return {
            isActive: true
        }
    },
    props: [
        'message',
        'classType'
    ],
    methods: {
        hide() {
            this.isActive = true;
        }
    }
}
</script>