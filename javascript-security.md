# Javascript Security

## Scope
* __not__ user security (aka authentication / authorisation) but how to secure your application

## Best Practices
* [OWASP](https://www.owasp.org)
* protect your code
  - npm ```audit``` (node security platform)
  - software composition analysis and open source audits (Black Duck)
  - static analysis (Coverity)
* protect the client
  - user agent (aka browser) mechanisms
  - XSS
  - CSP & CORS
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



## Runtime - Client

[Arxan](https://www.arxan.com/)
security by obscurity

## Runtime - Server

## Runtime - Comms
Understand what protects the server and what protects the client.
