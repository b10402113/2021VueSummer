const app = {
    data: {
        productList: [],
        apiUrl: 'https://vue3-course-api.hexschool.io/api',
        apiPath: 'ezshop'
    },
    getProductList(page = 1) {
        const url = `${this.data.apiUrl}/${this.data.apiPath}/products?page=${page}`;
        axios.get(url).then(res => {
            if (res.data.success != true) {
                alert(res.data.message);
            }
            console.log(res.data);
            this.productList = res.data.products;
            this.renderData();
        })
    },
    verifyToken(cookie) {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        if (!token) {
            alert('請您先進行登入');
            window.location = 'login.html';
        }
        axios.defaults.headers.common.Authorization = token;
    },
    renderData() {
        const table = document.querySelector('#productList');
        let str = '';
        this.productList.forEach((item, index) => {
            console.log(item);
            str += `
            <tr>
            <td>${item.title}</td>
            <td width="120">
            ${item.origin_price}
            </td>
            <td width="120">
            ${item.price}
            </td>
            <td width="100">
            <div class="form-check form-switch">
            <input class="form-check-input enableSwitch" type="checkbox" data-id="${index}" ${item.is_enabled ? "checked" : ""
                } data-action="status" data-id="${index}">
            <label class="form-check-label" for="${index}">${item.is_enabled ? "啟用" : "未啟用"
                }</label>
            </td>
            <td width="120">
              <button type="button" class="btn btn-sm btn-outline-danger move deleteBtn" data-action="remove" data-id="${item.id}"> 刪除 </button>
            </td>
          </tr>
            `
        })
        table.innerHTML = str;
        let deleBtns = document.querySelectorAll('.deleteBtn');
        deleBtns.forEach((btn) => btn.addEventListener("click", this.remove.bind(this)));

    }
    ,
    remove(e) {
        var id = e.target.dataset.id;
        const deleteUrl = `${this.data.apiUrl}/${this.data.apiPath}/admin/product/${id}`;
        axios.delete(deleteUrl).then((res) => {
            alert('刪除成功')
            this.getProductList();

        })
    },
    init() {
        this.verifyToken(document.cookie);
        this.getProductList();
    }

}
app.init();