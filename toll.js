class Toll {
    constructor(id,vcategory,date, cost) {
        this.id = id;
        this.vcategory=vcategory;
        this.cost=cost;
        this.date=date;
        // this.ccategory = ccategory;
    }
}
class TollManager {
    product = [];
    getData() {
        if (localStorage.getItem("product") != undefined) {
            this.product= JSON.parse(localStorage.getItem("product"));
        }
    }
    addNewExpense(ex) {
        this.getData();
        this.product.push(ex);
        // console.log(ex);
        // console.log(this.product);
        localStorage.setItem("product", JSON.stringify(this.product));
    }
    getAllExpenses() {
         this.getData(); 
         return this.product; 
    }
}