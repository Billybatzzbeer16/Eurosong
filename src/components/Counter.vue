<template>
    <div>
        Buttoncounter: {{count}}

        <button @click="addOne"> 
            Add 1
        </button>

        <button @click="minOne">
            Min 1
        </button>
    </div>
</template>
<script>
    export default {   
        name: "Counter",
        data() {
            return{
                count: 10
        }
    },
     methods: {
         addOne() {
             this.count++;
        },

        minOne(){
            this.count--;
        }
    }
 }
</script>