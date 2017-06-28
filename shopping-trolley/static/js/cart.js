new Vue({
    el:"#app",
    data:{
        totalMoney:0,
        productList: []
    },
    filters:{
        formatMoney: function (value) {
            return "￥ " + value.toFixed(2);
        }
    },
    mounted: function () {
        this.$nextTick(function (){
            this.cartView();
        });
    },
    methods:{
        cartView: function () {
            let _this = this;
            this.$http.get("/static/data/cartData.json").then((res) => {
                this.productList = res.data.result.list;
                this.totalMoney = res.data.result.totalMoney;
            });
        }
    }
});