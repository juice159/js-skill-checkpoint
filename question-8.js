// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
// Question 8: Fetching User List from Server
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json()) 
      .then(data => {
        const newUsers = data.map(user => user.name);
  
        
        console.log(newUsers);
      })
      .catch((error) => console.log(error))
  }
  
  
  fetchUsers();
  


