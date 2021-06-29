let cardContainer = "<div class='card-container'>";
const content = document.querySelector('.content');
const loadUsers = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(users=> {
        users.forEach(user => {
            let card = "<div class='card'>"+
                          "<div class= 'card-image'>"+
                            "<img src='./images/woocommerce-placeholder.png' alt='img placeholder'>"+
                          "</div>";
            let name = `<p class='name'"><img class='icons' src='./images/name.png' alt='email'> ${user.name}</p>`;
            let email = `<p class='email'><img class='icons' src='./images/email.png' alt='email'> ${user.email}</p>`;
            let getPosts = `<a class='get-posts' href='posts.html?userId=${user.id}'>Get Posts</a>`
            let completeCard = card + name + email + getPosts + "</div>";
            cardContainer+= completeCard;
        });
        cardContainer+="</div>";
        content.innerHTML = cardContainer;
    })
}
loadUsers();


