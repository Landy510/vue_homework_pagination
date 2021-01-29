<template>
    <div>
        
        暫定訂單列表的頁面
    </div>
</template>


<script>
    import $ from 'jquery';

    export default{
        data(){
            return{}
        },
        methods:{
            getList(page = 1){
                console.log('page',page);
                const vm = this;
                
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${page}`;
                this.$http.get(api).then((response) => {
                   
                    console.log('你好',response.data);
                    
                    console.log('isLoad',vm.isLoad);
                })
            }
        },
        created(){
            this.getList();   
        },
    }
    
</script>