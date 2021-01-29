<template>
    <div>
        
        <table class="table mt-4">
            <thead>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="100">是否啟用</th>
                <th width="80">編輯</th>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        
        
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
                    if(response.data.success){
                        
                        console.log('response',response.data.success);
                    }
                    
                    console.log('response',response.data.success);
                })
                
            }
        },
        created(){
            this.getList();   
        },
    }
    
</script>