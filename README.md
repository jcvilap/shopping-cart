# shopping-cart
Sample product/shopping cart app built with ReactJS, Redux, Material Design and ES6 

Create 3 pages with the following:

  - HomePage (Product List): make an API call, and list all 100 products from the following: [API] 
  - Individual Product Page: (each product linked from home list). Should have 'add to cart' button/link somewhere on page.
  - Shopping Cart: should be able to view Items which have been placed in the cart. For this step, this can be generated from a hard-coded model. Shopping Cart page should also provide a total dollar amount of all items * quantity in the cart.
  - Add functionality to add/remove items from the Cart (cart model should no longer be hard coded)
  - Add ability to filter Product List page with a search term (search name, description, color, etc.)
  - Add ability to filter Product List page by items on sale
  - Add ability to sort the Product List by price  
  - Persist shopping cart across sessions  
  - Add 'related products' to the individual product page (perhaps via color, brand, name, description, etc.)

[API]: <https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=3z6a6dd2jyfjtrpkhdbsaayk&sort=bestSellingRank.asc&show=bestSellingRank,color,customerReviewAverage,image,name,onSale,percentSavings,regularPrice,salePrice,shortDescription,sku,thumbnailImage,longDescription&pageSize=100&format=json>

#### Rest API documentation:
```https://bestbuyapis.github.io/api-documentation/?javascript```