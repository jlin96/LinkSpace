export const fetchPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts'
    })
}

export const fetchPost = (postId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`
    })
}

export const createPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: {post}
    })
}

export const updatePost = (post) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: {post}
    })
}

export const deletePost = (postId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}`
    })
}

export const userPost = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/posts`
    })
}

export const photoPost = (formData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: formData,
        contentType: false,
        processData: false
    })
}