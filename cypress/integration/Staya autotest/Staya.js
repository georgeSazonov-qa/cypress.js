
describe('Авторизация', function () {
   it('Авторизация и проверка заказов', function () {
        cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click();
       cy.get('.auth-form > form > [type="email"]').type('tig_oksid@mail.ru');
       cy.get('.auth-form > form > [type="password"]').type('TerraNova1');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.contains('Мои заказы');
    })
})

{
   it('Авторизация с неверным паролем', function () {
        cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click();
       cy.get('.auth-form > form > [type="email"]').type('tig_oksid@mail.ru');
       cy.get('.auth-form > form > [type="password"]').type('TerraNova2');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.get('.error-label')
    })
}



