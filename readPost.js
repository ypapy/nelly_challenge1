const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
const title = document.querySelector('.post-title');
const body = document.querySelector('.post-body');
const readPost = id=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then( res => res.json())
    .then( data =>{
        
        title.innerHTML = data.title;
        body.innerHTML = data.body;
    });
}

readPost(postId);