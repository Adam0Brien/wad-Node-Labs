export const login = (username, password) => {
    return fetch('/api/users', {
        mode: 'cors',
        credentials: 'include',
        proxy: 'http://localhost:8080',
        method: 'POST',
        body: JSON.stringify({username: username, password:password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch;
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        method: 'POST',
        body: JSON.stringify({username: username, password: password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };