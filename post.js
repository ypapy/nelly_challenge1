let cardContainer = "<div class='card-container'>";
const content = document.querySelector('.content');
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const userPosts = id=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(res => res.json())
    .then(posts => {
        console.log(posts)
        posts.forEach(post => {
            let card = "<div class='card'>"+
                          "<div class= 'card-image'>"+
                            "<img src='./images/woocommerce-placeholder.png' alt='img placeholder'>"+
                          "</div>";
            let postDiv = `<div class='post'>`;
            let title = `<h5>${post.title}</h5>`
            postDiv += title + `</div>`;
            let readMore = `<a class='read-more' href='post.html?postId=${post.id}'>Read</a>`;
            let completeCard = card + postDiv + readMore + "</div>";
            cardContainer+= completeCard;
        });
        cardContainer+="</div>";
        content.innerHTML = cardContainer;
    });
}

userPosts(userId);
