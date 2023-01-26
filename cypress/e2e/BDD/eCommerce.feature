Feature: End To End Item Checkout Validation

    Regression Test         
    
    @Regression
    Scenario: Add Item and Total Sum Validation with Submit And Thank You Mes.
    Given Navigate To The Ecommerce Page
    When I Add Items To Cart
    And Validate The Total Price
    Then Select Country And Verify Thank You Message

    @Smoke
    Scenario: data Driven Testing validation using cucumber.
    Given Navigate To The Ecommerce Page
    When  Add Name and Email and Select Item
    |Name | Email|
    |Sudh |sudh@gmail.com|
    And Validate The Total Price
    Then Select Country And Verify Thank You Message
    