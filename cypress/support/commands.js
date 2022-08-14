Cypress.Commands.add("deleteDatabase", () => {
  cy.request("DELETE", "http://localhost:5000/delete/all")
});

Cypress.Commands.add("createUser", () => {
  const data = {
    "username": "funji23",
    "email": "funji23@gmail.com",
    "password": "senha123",
    "confirmPassword": "senha123",
    "profileImage": "https://infoenem.com.br/wp-content/uploads/2017/10/fungos.jpeg"
  }

  cy.request("POST", "http://localhost:5000/signup", data);
  cy.wrap(data).as("userData");
});

Cypress.Commands.add("login", () => {
  cy.createUser().then( () => {
    window.localStorage.setItem('token', '123456');
    window.localStorage.setItem('username', 'funji123');
    window.localStorage.setItem('profileImage', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97ab2fcc-bf4a-41df-bba6-1a9f66856414/dek7d4j-bff53eb7-1433-48ae-a395-747edebc100b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3YWIyZmNjLWJmNGEtNDFkZi1iYmE2LTFhOWY2Njg1NjQxNFwvZGVrN2Q0ai1iZmY1M2ViNy0xNDMzLTQ4YWUtYTM5NS03NDdlZGViYzEwMGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CmwJZshFh1l7kTtsu-NbmbuPnF8D_72Xwlw6AXYV-e4');
  })
});