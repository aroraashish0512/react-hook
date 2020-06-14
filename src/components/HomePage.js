import React, { useState, useEffect } from 'react';
import RedirectLinks from './RedirectLinks';

// function HomePageComponent() {
const HomePageComponent = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  useEffect(() => {
      fetch('https://swapi.co/api/people/').then(response => {
        // console.log(response.json());
        // window.console.log(response);
        const responseObj = response.json();
        console.log(responseObj.PromiseValue);
        if (responseObj.results) {
          console.log(responseObj.results);
        }
      }).catch(error => {
        setGreeting('test');

        window.console.log(typeof error);
        console.log(error, 'failed api');
      });
  }, []);

  const textFieldChange = (e, val) => {
    window.console.log(e, val, '31');
  }

  // setGreeting = () => {
  //   greeting = 'test';
  // }

  // state = {
  //   signUp: {
  //   },
  //   test: 'test'
  // };

  return (
    <div>
      <RedirectLinks></RedirectLinks>
      {/* <p>{state.test}</p> */}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <span>{greeting}</span>

      <input id="firstname" name="firstname" type="text" className="form-control" placeholder="First Name *" onChange={(e) => textFieldChange(e, 'firstname')} />
    </div>
  );
}

export default HomePageComponent;



// import React, { Component } from 'react';
// import RedirectLinks from './RedirectLinks';

// export default class HomePageComponent extends Component {
//     constructor() {
//         super();
//     }

//     render() {
//         return(
//             <React.Fragment>
//                 <RedirectLinks></RedirectLinks>
//                 <h1>Home Page</h1>
//         <p>{Math.floor(Math.random() * 30)}</p>
//             </React.Fragment>
//         )
//     }
// }

// import React, { useState } from 'react';
// import RedirectLinks from './RedirectLinks';

// const HomePageComponent = () => {
//      // const [count, setCount] = useState(0);

//      return (
//        <div>
//            <RedirectLinks></RedirectLinks>
//          {/* <p>You clicked {count} times</p>
//          <button onClick={() => setCount(count + 1)}>
//          Click me
//         </button> */}
//       </div>
//     );
//   }

//   export default HomePageComponent;