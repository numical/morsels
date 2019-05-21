# Security TLA's
* three (or 4)(or 5) letter acronyms

## CORS
* Cross Origin Resource Sharing
* protects the **client**
* relies on the User Agent (browser)
* implemented via HTTP headers
* standard approach to relaxing the [same origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) of the web security model
* simplistically:
    - the client requesting sends an ```Origin: www.example.com```
    - the server serving the requested resource sending ```Access-Control-Allow-Origin: www.example.com```
    - if they match the browser allows it
* in reality:
    - a few more [headers](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#Headers) possible
    - for many categories of request a 'preflight' HTTP ```OPTIONS``` request is first needed  
    
    
## CSP
* Content Security Policy
* protects the **client**
* relies on the User Agent (browser)   
* implemented via HTTP headers 
* defines [what](https://commons.wikimedia.org/wiki/File:ContentSecurityPolicy3_diagram.png) is allowed to run on the served page
    - html, javascript, css. media sources
    - what javascript can run, what forms can do 
    - and more...
* simplistically:
    - the server returns ```Content-Security-Policy: XXX``` ([examples](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#Examples_Common_use_cases))
* added wrinkles:
    - always want to turn inline scripts and only allow your own servers as sources
    - unless you must use analytics
    - reporting via ```report-uri``` directive
        - or even ```Content-Security-Policy-Report-Only```)
    - nonces: not advised but a mitigating factor if inline scripts must be allowed  
      (```<script nonce="myperrequestsuperrandomsecret">``` + ```Content-Security-Policy: script-src 'nonce-myperrequestsuperrandomsecret'```)

## CSRF      
* Cross Site Request Forgery
* 'hijacks' a current user's security to action something on a target website
* by example:
    - www.securebank.com has API: ```GET http://securebank.com/transfer?to=XXX&amount=YYY```
    - user logs into the bank's website and authenticates
    - on another browser tab the user then clicks an anchor ```<a href="http://securebank.com/transfer?to=evilAccount&amount=1000000">```
    - da-dah!
* whole family of approaches 
* poor mitigation
    - do not use ```GET```s (but ```POST```s are just a javascript away...)(and forms do not need even that)
    - HTTP ```Referer``` - but privacy concerns
* better solutions
    - require authentication info in each request 
    - e.g. cookie-to-header token:
        - a cookie sent with ```csrf-token=mypersessionsuperrandomsecret```
        - due to same origin policy this can only be read by Javascript from the same origin
        - then the Javascript must add an HTTP header ```X-Csrf-token: mypersessionsuperrandomsecret``` to any XHR call it makes
        - server checks these two match
    - there are [many others](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md)
    - but all can be circumvented if
        - an XSS attack
        - an unnecessarily permissive CSP policy
 
## OWASP
The definitive resource:
* [Home](https://www.owasp.org/index.php/Main_Page)
* [Cheat Sheets](https://github.com/OWASP/CheatSheetSeries#cheat-sheets-index) indexed in various ways
 
## XSS
* Cross Site Scripting
* Injecting javascript onto pages to bypass [same origin policy](https://en.wikipedia.org/wiki/Same-origin_policy)
* Whole ranges of techniques - social engineering;
* Appropriately a whole range of mitigating mechanisms from simple (HTML encoding) to techniques listed above.

 
