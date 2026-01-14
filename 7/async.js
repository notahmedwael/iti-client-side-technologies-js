fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.container');
        data.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user-card';
            userDiv.innerHTML = `
                <div>${user.name}</div>
            `;

            userDiv.addEventListener('click', () => {
                loadPosts(user.id, userDiv);
            })

            container.appendChild(userDiv);
        });
    })
    .catch(error => console.error('Error fetching user data:', error));

async function loadPosts(userId, element) {
    const postDisplay = document.querySelector('.posts-card');

    document.querySelectorAll('.user-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');

    postDisplay.innerHTML = `<p>Loading Posts &#x1F634;</p>`

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();

        postDisplay.innerHTML = `<h2>Posts by ${element.innerText}</h2>`;
        
        posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.innerHTML = `
                <h4 class="post-title">${post.title}</h4>
                <p class="post-body">
                    ${post.body}
                </p>
            `;
            postDisplay.appendChild(postItem);
        });
    } catch (error) {
        postDisplay.innerHTML = `<p>Error loading posts &#x1F614 </p>`
    }
}