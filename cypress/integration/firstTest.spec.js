// describe("Mobile phone replenishment", () => {

//     context("Replenishment less then the allowed around", () => {
//         it("show error: Minimum amount of the replenishment 1 UAH", () => {});
//     });

// });

it('By ID', () => {
    cy.visit("http://www.facebook.com/")
    cy.get('#email')
});

it('By Class', () => {
    cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
    cy.get('.ds-input')
});

it('By Tag', () => {
    cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
    cy.get('nav')
});

it('By Tag value', () => {
    cy.visit("http://www.facebook.com/")
    cy.get('[name="pass"]')
});

it('By different Tags', () => {
    cy.visit("http://www.facebook.com/")
    cy.get('[data-testid=open-registration-form-button][role="button"]')
});

it('By different Tags', () => {
    cy.visit("http://www.facebook.com/")
    cy.get('[data-testid=open-registration-form-button][role="button"]')
});