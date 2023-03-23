//REQUEST HEADERS
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0

//RESPONSE HEADDER
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY

Representation headers include: Content-Type, Content-Encoding, Content-Language, and Content-Location.
The payload headers include: Content-Length, Content-Range, Trailer, and Transfer-Encoding.

=>>XSS ATTACK UI SOLUTION
1. Chrome	and IE have a built-in	feature	which uses heuristics to detect	potential cross-site scripting	attacks.
2. httponly" cookies.the attacker can still	issue requests that contain a user's cookies (CSRF).
3. Privilege separation: Use a separate domain for untrusted	content.
4. Content sanitization: Take untrusted	content and encode it in a way that constrains how it can be interpreted.
5. Content Security Policy (CSP):	Allows a web server to	tell the browser	which kinds of resources	can be	loaded, and	the	allowable origins for those	resources.
6. X-Content-TypeOptions: nosniff

//COUNTER APPLICATION
import React, { useState, useEffect } from "react";

export default function App() {
    const val = isNaN(localStorage.getItem('count'))
        ? 0 : localStorage.getItem('count');
    const [count, setCount] = useState(parseInt(val));
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
        if (count === 0) setDisabled(true);
        else setDisabled(false);
    }, [count]);

    return (
        <div className="App">
            <button
                disabled={disabled}
                onClick={() => setCount(count - 1)}>
                -
            </button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

// CLASS COMPONENT WITH CONSTRUCTOR
import React, { Component } from "react";
class App extends Component {
    constructor () {
        super();
        this.state = {
            name: "John",
            countA: 0,
        };
    }

    handleClick = () => {
        let newCount = this.state.countA + 1;
        this.setState({
            countA: newCount
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>age {this.state.countA}</p>
                <button onClick={this.handleClick}>Increase Age</button>
            </div>
        );
    }
}

export default App;


//FEATURE FLAGS
import React from "react";
const fetchFeatures = async () => {
    const features = {
        isGooglePayEnabled: true,
        isApplePayEnabled: false
    };

    return Promise.resolve({ features });
};

const FeatureFlags = React.createContext({});
export const FeatureFlagsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [features, setFeatures] = React.useState({});

    React.useEffect(() => {
        (async () => {
            try {
                const data = await fetchFeatures();
                if (data.features) {
                    setFeatures(data.features);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <FeatureFlags.Provider value={{ features }}>
            {isLoading ? "Loading..." : children}
        </FeatureFlags.Provider>
    );
};

const useFeatureFlags = () => React.useContext(FeatureFlags);

export default function App() {
    const { features } = useFeatureFlags();
    const handleClick = () => alert("Payment successful!");
    return (
        <main className="app">
            <section className="screen">
                <h3>$ 99.99</h3>
                <>
                    <button className="btn" onClick={handleClick}>
                        Credit Card
                    </button>
                    {features.isApplePayEnabled && (
                        <button className="btn" onClick={handleClick}>
                            Apple Pay
                        </button>
                    )}
                    {features.isGooglePayEnabled && (
                        <button className="btn" onClick={handleClick}>
                            Google Pay
                        </button>
                    )}
                </>
            </section>
        </main>
    );
}
state is managed by the component itself and can be updated using the setState() function. 
state can be modified by the component and is used to manage the internal state of the component.
Changes in the state trigger a re - render of the component and its children.

    props(short for "properties") are passed to a component by its parent component and are read - only,
        meaning that they cannot be modified by the component itself. 
props can be used to configure the behavior of a component and to pass data between components.

    ADVANTAGES
Reusable Components
Performance Enhancement
The Support of Handy Tools
Scope for Testing the Codes
Reduced Coding
Community Support
Scalable and clean abstraction
Virtual DOM
React Native
Redux

DISADVANTAGES
heavy application
webpack babel
versions
JSX as a barrier

1.normalize CSS reset
    < link rel =”stylesheet” href =”assets / styles / normalize.css”>
        2. 
– Chrome or opera uses “-WebKit -” prefix in CSS
– Firefox uses “-Moz -”
– Microsoft “-ms -”
3.
HTML / CSS Validation Issue WCAG W3
Modernizer library instead of browser detection
4. 
Using Untrusted Cross Browser Libraries and Frameworks
5. 
The absence of the DOCTYPE or its incorrect usage will force the browser to switch
 to quirks mode.It means that the browser will do its best to layout the page
  that is considered to be old or created against web standards.

React Snap - After build create stating pages with meta tags
Helmet
Server Side rendering using Next or hybrid

< picture >
    <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
        <source media="(min-width:465px)" srcset="img_white_flower.jpg">
            <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
            </picture>
