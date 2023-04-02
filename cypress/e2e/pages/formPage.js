class formPage{
    element = {
        firstName: '#firstName',
        lastName: '#lastName',
        email: '#userEmail',
        mobile: '#userNumber',
        address: '#currentAddress',  
              
    }
    
    typeName (firstName,lastName){
        cy.get(this.element.firstName).type(firstName);
        cy.get(this.element.lastName).type(lastName);
    }

    typeEmail(email){
        cy.get(this.element.email).type(email);
    }

    typeMobile(mobile){
        cy.get(this.element.mobile).type(mobile)
    }

    typeAddress(address){
        cy.get(this.element.address).type(address)
    }

    }

module.exports = new formPage();