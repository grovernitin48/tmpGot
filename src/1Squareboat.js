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
