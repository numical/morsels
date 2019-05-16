# Javascript Security

## How to secure your application:
* protect your code
  - npm ```audit``` (node security platform)
  - software composition analysis and open source audits (Black Duck)
  - static analysis (Coverity)
  - against reverse engineering?
    - not really possible when running **on** clients' machines
    - security by obscurity - [Arxan](https://www.arxan.com/)
* protect the client
  - [user agent (aka browser) mechanisms](web-security.md)
  - CSP & CORS
  - CSRF
  - XSS
* protect the server
  - unintentional code leaks
  - input control
    - Validation
    - Regex
    - SQL Injection
    - Deserialisation
  - sandbox
    - [Intrinsic](https://intrinsic.com/) - like a Java scurity policies on a JVM
* protect the comms
  - SSL

