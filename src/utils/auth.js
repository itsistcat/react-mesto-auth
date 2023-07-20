const url = 'https://auth.nomoreparties.co';
// TODO: оптимизировать код (DRY)

export function registerUser(email, password) {
  return fetch(`${url}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })

  })
    .then((res) => {
      try {
        console.log(res);
        if (res.ok) {
          return res.json();
        };
      } catch (err) {
        return (err)
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export function authorizeUser(email, password) {
    return fetch(`${url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          const token = data.token;
          localStorage.setItem('jwt', token);
  
          return token;
        };
      })
      .catch(err => console.log(err))
  };
  
  export function getContent(token) {
    return fetch(`${url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(res => res.json())
      .then(data => data)
  };