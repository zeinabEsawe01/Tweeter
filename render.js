

const Renderer = function(){
    $( "#posts" ).empty();
    const renderPosts = function(posts){
        for (let post of posts){
             let newPost = (`<div class="post" id="${post.id}">${post.text}</div>`)
                $("#posts").append(newPost)
                let dComments = `<div id="${post.id}"></div>`
                $(`#${post.id}`).append(dComments)
                for(let comment of post.comments){
                    let newComment = (`<div class="comments" id="${comment.id}"><span class="delete-comment">X</span> ${comment.text}</div>`)
                    $(`#${post.id}`).append(newComment)
                }
                let input = `<input class="input" type="text" placeholder="got somthing to say?">`
                let addbutton = `<button class="buttons">Comment</button><br><br>`
                $(`#${post.id}`).append(input)
                $(`#${post.id}`).append(addbutton)
                $(`#${post.id}`).append(`<button class="delete">Delete Post</button>`)
                console.log(post);
            }
            
            }
return {
    renderPosts: renderPosts
}

    }

