
describe('автотесты для формы логина и пароля', function () {
   it('восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#exitMessageButton > .exitIcon');
    })
})

 {
   it('Позитивный кейс авторизации', function () {
      cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
       cy.get('#loginButton');
       cy.contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon')
    })
}

 {
   it('Авторизация. Неверный пароль', function () {
      cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
       cy.get('#loginButton');
       cy.contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon')
    })
}

 {
   it('Валидация', function () {
      cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLovE2');
        cy.get('#loginButton').click();
       cy.get('#loginButton');
       cy.contains('Нужно исправить проблему валидации');
       cy.get('#exitMessageButton > .exitIcon')
    })
}

 {
   it('Авторизация. Неверный логин', function () {
      cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.com');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
       cy.get('#loginButton');
       cy.contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon')
    })
}