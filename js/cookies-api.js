
let cookies = [
    {
        id:'samoa',
        name:'Samoa Cookies',
        description:'Caramel cookies with coconut',
        price:'4.00',
        image:'samoa.png'
    },
    {
        id:'thinmint',
        name:'Thin Mints Cookies',
        description:'Chocolate cookie with mint flavor',
        price:'3.50',
        image:'thinmints.png'
    }
];

function saveCookies() {
    localStorage.setItem('cookies', JSON.stringify(cookies));
}

const cookiesApi = {
    getAll() {
        const json = localStorage.getItem('cookies');
        if(json) {
            cookies = JSON.parse(json);
        }
        return cookies;
    },
    add(cookie) {
        cookies.push(cookie);
        saveCookies();
    }
};
export default cookiesApi;