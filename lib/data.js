
//fetch posts
const fetchPosts = async () => {

    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();
}


