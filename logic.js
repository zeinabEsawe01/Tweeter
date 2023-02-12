

const Tweeter = function(){
    const _posts = [
        
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        
    ]
    let postIdCounter = 3
    let commentIdCounter = 7 

    const getPosts = function(){
        return _posts
    }
    
    const addPost = function(postText){
        let newPost = {
            text: postText,
            id: "p"+postIdCounter,
            comments: [
            ]
        
        }
        _posts.push(newPost)
        postIdCounter++
    }
    
    const removePost = function(postId){
        for (let index in _posts) {
            if(_posts[index].id == postId){
                _posts.splice(index,1)
            }
            
        }
    }

    const addComments = function(comment , postId){
        let newComment = {
            id: "c"+commentIdCounter,
            text: comment
        }
        for (let index of _posts) {
           // console.log(index);
            for (const i in index) {
                if(index[i] == postId){
                    index.comments.push(newComment)
                    commentIdCounter++
                }
            }
    }
}

    const removeComment = function(postId , commentId){
        for (let index of _posts) {
            if(index.id == postId){
             for (const i in index.comments) {
                if(index.comments[i].id == commentId){
                    index.comments.splice(i,1)
                }  
                    }
                }    
            }
        }
    return{
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComments,
        removeComment: removeComment

    }    
}



