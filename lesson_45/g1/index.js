const auth = async () => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    }),
  })

  const data = await response.json();
  localStorage.setItem("accessToken", data.accessToken)
};

auth();

const button = document.getElementById('create_client');
button.addEventListener('click', async () => {
  const token = localStorage.getItem("accessToken");

  const response = await fetch('https://dummyjson.com/get_order', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })

  // логика с заками
});


const refresh = () => {
  // вы кидаете refreshToken из куков
  // сравнивает ваш refreshToken с refreshToken в бд
  // отправляем вам новый accessToken
};

// interceptor