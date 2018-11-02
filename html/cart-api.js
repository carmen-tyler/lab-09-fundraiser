let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cartApi = {
    get() {
        const json = localStorage.getItem('cart');
        if(json) {
            cart = JSON.parse(json);
        }
        return cart;
    },
    add(cookie) {
        const orderItem = cart.find(item => {
            return item.name === cookie.name;
        });
        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            cart.push({
                name: cookie.name,
                quantity: 1
            });
        }
        saveCart();
    }
};

export default cartApi;