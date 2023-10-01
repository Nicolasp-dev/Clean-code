/*
  1. Avoid Deep Nesting
  2. Prefer positive checks
  3. Utilize errors
  4. Using Factory Fn

  // GUARDS -> Fail Fast


  Extract control structures  into Functions.

  Embrace errors & Error Handling
  - if something is an error -> Throw a new error.
  - if(!isEmail){
        const error = new Error('message)
        error.code(404)
        throw error;
      }
  - Use Try / Catch
  - Use Guards as errors factories. 

  Avoid "Magic Numbers and String"
  const TYPE_CREDIT_CARD = 'CREDIT_CARD';
  // ...
  if (transaction.type === TYPE_CREDIT_CARD) { ... }
*/

function buildUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

function buildUserByType(name, type) {
  let greetFn;
  if (type === "friendly") {
    greetFn = function () {
      console.log("Hi, nice to meet you!");
    };
  } else if (type === "unfriendly") {
    greetFn = function () {
      console.log("Hm? What do you want?");
    };
  }

  return {
    name: name,
    greet: greetFn,
  };
}

const friendlyUser = buildUserByType("Max", "friendly");
friendlyUser.greet(); // Hi, nice to meet you!

const unfriendlyUser = buildUserByType("Max", "unfriendly");
unfriendlyUser.greet(); // Hm? What do you want?
