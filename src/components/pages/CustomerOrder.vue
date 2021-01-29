<template>
    <div>
    
    </div>
</template>


<script>
    import $ from 'jquery';
    import pagination from './pagination';

    export default{
        data(){
            return {
                pagination:{},
                products:[],
                tempProduct:{},
                isNew: false,
                isLoading:false,
            }
        },
        methods:{
            getProducts(page = 1){
                const vm = this;
                const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
                vm.isLoading = true;
                this.$http.get(api).then((response) => {
                    console.log('response',response.data);
                    vm.isLoading = false;
                    vm.products = response.data.products;
                    vm.pagination = response.data.pagination;
                })
            },
            
        },
        created(){
            this.getProducts();   
        },
        components:{
            pagination,
        }
    }
    
</script>