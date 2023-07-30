function isValidLinkedInProfile(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return pattern.test(url);
  }
  
  // Test cases
  const profileURLsToCheck = [
    "https://www.linkedin.com/in/akashchoudhary",
    "https://www.linkedin.com/in/akash-choudhary-82548b262/",
    "https://www.linkedin.com/in/user-12345678901234567890",
    "https://www.linkedin.com/in/abc1",
    "https://www.linkedin.com/in/invalid@user",
    "https://www.linkedin.com/in/longusernamethatiswaytoolongtobevalid12345",
  ];
  
  profileURLsToCheck.forEach(url => {
    if (isValidLinkedInProfile(url)) {
      console.log(`'${url}' is a valid LinkedIn profile URL.`);
    } else {
      console.log(`'${url}' is NOT a valid LinkedIn profile URL.`);
    }
  });
  