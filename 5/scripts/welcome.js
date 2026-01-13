const urlParams = new URLSearchParams(window.location.search);

const data = {
    title: urlParams.get('title'),
    name: urlParams.get('name'),
    age: urlParams.get('age'),
    email: urlParams.get('email'),
    mobile: urlParams.get('mobile'),
    address: urlParams.get('address'),
    gender: urlParams.get('gender')
};

const displayCard = document.querySelector('#displayCard');

displayCard.innerHTML += `
    <p><span>Welcome,</span> ${data.title}. ${data.name}</p>
    <p><span>Email:</span> ${data.email}</p>
    <p><span>Mobile:</span> ${data.mobile}</p>
    <p><span>Gender:</span> ${data.gender}</p>
    <p><span>Address:</span> ${data.address}</p>
`;