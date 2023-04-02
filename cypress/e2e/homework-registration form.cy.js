Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import formPage from './pages/formPage'

describe('Register Form Test', () => {

  beforeEach(() => { 
    cy.visit ('https://demoqa.com/automation-practice-form')
    
  })  
  
  it('TC-001', () => {
    formPage.typeName("Quynh","Le");
    formPage.typeEmail("abcd@gmail.com");
    formPage.typeMobile("1234567890");
    formPage.typeAddress("123ABCDEFG");
    cy.get('[type="radio"]').check('Male', {force:true})
    cy.wait(1000)
    cy.get('[type="radio"]').check('Female', {force:true}).should('have.value', 'Female')   
    cy.wait(1000)   
    cy.get('[type="checkbox"]').check({force:true})  
    cy.wait(1000)   
    cy.get('[type=submit]').click({force: true})      
    cy.wait(3000)     
       
  })  

  it('TC-002', () => {      
        
    cy.get('[type=submit]').click({force: true})      
    cy.wait(3000)
  }) 

  it('TC-003', () => {
      
    formPage.typeName("Quynh","Le");
    formPage.typeMobile("1234567890");
    cy.get('[type="radio"]').check('Male', {force:true})
    cy.wait(1000)
    cy.get('[type="radio"]').check('Female', {force:true}).should('have.value', 'Female') 
    cy.wait(1000)     
    cy.get('[type=submit]').click({force: true})     
    cy.wait(3000)
  }) 

  it('TC-004', () => {
      
    formPage.typeName("Quynh><+-_","Le<>+&");
    formPage.typeEmail("abcd@gmai");
    formPage.typeMobile("1234567");
    cy.get('[type="radio"]').check('Male', {force:true})
    cy.wait(1000)
    cy.get('[type="radio"]').check('Female', {force:true}).should('have.value', 'Female') 
    cy.wait(1000)  
    cy.get('[type=submit]').click({force: true})    
 
  }) 

});





      

   