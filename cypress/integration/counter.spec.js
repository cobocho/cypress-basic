describe('counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('플러스 클릭시 count가 1 증가한다.', () => {
    cy.get('.plus-button').click();

    cy.get('.count-display').should('have.value', '11');
  });

  it('count가 12일시 플러스를 눌러도 증가하지 않는다.', () => {
    cy.get('.plus-button').click();
    cy.get('.plus-button').click();
    cy.get('.plus-button').click();

    cy.get('.count-display').should('have.value', '12');
  });

  it('마이너스 클릭시 count가 1 감소한다.', () => {
    cy.get('.minus-button').click();

    cy.get('.count-display').should('have.value', '9');
  });

  it('count가 8일시 마이너스를 눌러도 감소하지 않는다.', () => {
    cy.get('.minus-button').click();
    cy.get('.minus-button').click();
    cy.get('.minus-button').click();

    cy.get('.count-display').should('have.value', '8');
  });
});
