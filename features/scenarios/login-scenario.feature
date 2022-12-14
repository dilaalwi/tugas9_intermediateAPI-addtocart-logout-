@FeatureA
Feature: Heroku app Login Scenario

  @AddToCart @Positive @smoke @C001
  Scenario: Add Item to Cart
    Given I am on the front page
    When I try to login with username "hendri.antomy" and password "1234"
    Then I am successfully logged in with username "hendri.antomy"
    When I add these items to cart :
      | itemName          | quantity |
      | Samsung galaxy s6 |        1 |
      | Nokia lumia 1520  |        1 |
      | Nexus 6           |        1 |
      | Sony vaio i7      |        1 |

  @Login @Positive @C002
  Scenario: Login with valid data
    Given I am on the front page
    When I try to login with username "hendri.antomy" and password "1234"
    Then I am successfully logged in with username "hendri.antomy"

  @Logout
  Scenario: Logout 
  Given I am on the front page
  When I try to login with username "hendri.antomy" and password "1234"
  Then I am successfully logged in with username "hendri.antomy"
  When I try to logout 
  Then I am successfully logout


