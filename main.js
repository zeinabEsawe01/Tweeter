const postsDiv= $( "#posts" )

const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

/**
 * adding new post when the div of <post> is clicked
 */
function addingPost(){
    let inpPost = $("#input").val()
    tweeter.addPost(inpPost)
    postsDiv.empty();
    renderer.renderPosts(tweeter.getPosts())
    $("#input").val("")
}

/**
 * deleting a post when the button of <delete> is clicked
 */
$("#posts").on('click' , ".delete" ,function(){
    let deletedPostId = $(this).closest(".post").attr("id")
    tweeter.removePost(deletedPostId)
    postsDiv.empty();
    renderer.renderPosts(tweeter.getPosts())
})

/**
 * adding comment when the button of <comment> is clicked
 */
$("#posts").on('click', ".buttons", function(){
    let inputComment = $(this).closest("div").find("input").val()
    let postId = $(this).closest("div").attr("id")
    postsDiv.empty();
    tweeter.addComment(inputComment , postId)
    renderer.renderPosts(tweeter.getPosts())
})


/**
 * removing comment when the button of <comment> is clicked
 */

$("#posts").on('click' , "span" ,function(){
    let deletedcommentId = $(this).closest("div").attr("id")
    let postId = $(this).closest(".post").attr("id")
    tweeter.removeComment(postId,deletedcommentId)
    postsDiv.empty();
    renderer.renderPosts(tweeter.getPosts())
})
