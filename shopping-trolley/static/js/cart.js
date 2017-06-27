var vm = new Vue({
    el:"#app",
    data:{
        totalMoney:0,
        productList: []
    },
    filters:{

    },
    mounted: function () {
        this.cartView();
    },
    methods:{
        cartView: function () {
            var _this = this;
            this.$http.get("/static/data/cartData.json").then(function (res) {
                _this.productList = res.data.result.list;
                _this.totalMoney = res.data.result.totalMoney;
            });
        }
    }
});