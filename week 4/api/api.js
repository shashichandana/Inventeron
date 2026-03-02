const loadBtn = document.getElementById("loadBtn");
const userContainer = document.getElementById("userContainer");

let usersData = [];

loadBtn.addEventListener("click", fetchUsers);

async function fetchUsers() {
    try {
        loadBtn.disabled = true;
        loadBtn.textContent = 'Loading...';

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error('Network response was not ok');

        const data = await res.json();
        usersData = data;

        renderUsers(usersData);
        loadBtn.textContent = 'Load Users';
    } catch (err) {
        console.error(err);
        loadBtn.textContent = 'Load Users';
        alert('Failed to load users. See console for details.');
    } finally {
        loadBtn.disabled = false;
    }
}

function renderUsers(list) {
    userContainer.innerHTML = '';
    if (!list || list.length === 0) {
        userContainer.innerHTML = '<p class="status">No users found.</p>';
        return;
    }

    const frag = document.createDocumentFragment();
    list.forEach(user => {
        const card = document.createElement('article');
        card.className = 'user-card';

        card.innerHTML = `
            <h3>${escapeHtml(user.name)}</h3>
            <p><strong>Email:</strong> ${escapeHtml(user.email)}</p>
            <p><strong>Address:</strong> ${escapeHtml(user.address.city)}, ${escapeHtml(user.address.street)}</p>
        `;

        frag.appendChild(card);
    });

    userContainer.appendChild(frag);
}

function escapeHtml(str){
    if (!str && str !== 0) return '';
    return String(str).replace(/[&<>"']/g, function(m){
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m];
    });
}