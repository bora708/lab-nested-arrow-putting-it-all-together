function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const login = (passwordAttempt) => {
    // If account is already locked
    if (attemptCount >= 3) {
      return "Account is locked due to too many failed attempts.";
    }

    // Increase attempt count
    attemptCount++;

    // Check if password is correct
    if (passwordAttempt === userInfo.password) {
      return `Login successful. Welcome, ${userInfo.username}!`;
    }

    // Lock account after 3 failed attempts
    if (attemptCount >= 3) {
      return "Account locked after 3 failed attempts.";
    }

    // Otherwise, tell user how many attempts are left
    return `Incorrect password. You have ${3 - attemptCount} attempt(s) left.`;
  };

  return login;
}


// Example test (you can keep or remove depending on instructions)
const user = {
  username: "Bora",
  password: "1234"
};

const loginTracker = createLoginTracker(user);

console.log(loginTracker("0000"));
console.log(loginTracker("1111"));
console.log(loginTracker("2222"));
console.log(loginTracker("1234"));


// Export for testing
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

