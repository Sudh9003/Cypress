Feature: End To End Item Checkout Validation

    Regression Test         

    Scenario: Add Item and Total Sum Validation with Submit And Thank You Mes.
    Given Navigate To The Ecommerce Page
    When I Add Items To Cart
    And Validate The Total Price
    Then Select Counntry And Verify Thank You Message