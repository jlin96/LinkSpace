export const fetchFriendRequests = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/friend_requests`
    })
}

export const createFriendRequest = (friend_request) => {
    return $.ajax({
        method: 'POST',
        url: `/api/friend_requests`,
        data: {friend_request}
    })
}

export const updateFriendRequest = (friend_request) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/friend_requests/${friend_request.id}`,
        data: {friend_request}
    })
}

export const deleteFriendRequest = (friend_request_id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/friend_requests/${friend_request_id}`
    })
}