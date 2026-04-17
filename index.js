function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    attemptCount++;
    return `Attempt ${attemptCount}: Login failed`;
  };

  return loginAttempt;
}

module.exports = createLoginTracker;
module.exports.createLoginTracker = createLoginTracker;