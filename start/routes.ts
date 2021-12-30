/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/:id", async ({ response, request }) => {
  const number = request.param("id");
  function isPrime(number) {
    let startTime = new Date();
    let endTime = new Date();
    let isPrime = true;
    for (let i = 3; i < number; i++) {
      //it is not a prime break the loop,
      // see how long it took
      if (number % i === 0) {
        endTime = new Date();
        isPrime = false;
        break;
      }
    }

    if (isPrime) endTime = new Date();

    return {
      number: number,
      isPrime: isPrime,
      time: endTime.getTime() - startTime.getTime(),
    };
  }

  response.json(isPrime(number));
});
