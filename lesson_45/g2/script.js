const auth = async () => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    })
  })
  const data = await response.json();
  localStorage.setItem("accessToken", data.accessToken)
};

auth();

const button = document.getElementById('create_client')
button.addEventListener('click', async () => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch('https://yourdomain.com/client/add', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    }
    // body: JSON.stringify({
    //   username: 'emilys',
    //   password: 'emilyspass',
    //   expiresInMins: 30,
    // })
  })
  console.log(token);
});