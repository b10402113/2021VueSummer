
const hexUrl = 'https://vue3-course-api.hexschool.io/'
let btn = document.querySelector('.loginBtn');

btn.addEventListener('click', function () {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    if (!checkEmailAndPassword(username, password)) {
        alert('請輸入正確的email 及password!')
    };
    axios.post(`${hexUrl}admin/signin`, { username, password }).then((res) => {
        if (res.data.success == false) {
            alert(res.data.message);
            return;
        }
        const { expired, token } = res.data;
        document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
        window.location = 'productList.html';

    }).catch(err => {
        alert('系統出錯了')
    }
    );
})




var checkEmailAndPassword = function (username, password) {
    return username && password;
}