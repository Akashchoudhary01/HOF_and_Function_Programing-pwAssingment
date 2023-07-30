function isValidURL(url) {
    const pattern = /^https?:\/\/[a-zA-Z0-9-._]+[.][a-zA-Z]+$/;
    return pattern.test(url);
  }
  
  // Test cases
  const urlsToCheck = [
    "https://learn.pwskills.com/lesson/For-each,-map,-filter-reduce-every,-find,-sort/64059502182c6780a24c4e4c/course/Full-Stack-web-development-1.0/63a2ecf58899439c8d7ebdc6",
    "https://learn.pwskills.com",
    "http://www.example.com",
    "https://www.example.com",
    "http://123.example.com",
    "https://hello.world",
    "http://127.0.0.1",
    "ftp://www.example.com",
    "https://invalid url.com",
    "http://www.example",
    "https://www_example.com",
    "https://drive.google.com/file/d/1Xoy9EwDYKSC5QQZ541xAaNkzbNkeREE1/view",
  ];
  
  urlsToCheck.forEach(url => {
    if (isValidURL(url)) {
      console.log(`'${url}' is a valid URL.`);
    } else {
      console.log(`'${url}' is NOT a valid URL.`);
    }
  });
  