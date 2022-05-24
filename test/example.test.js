// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderWorkshop } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshops"><h2>Workshop Title</h2></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({
        id: 1,
        name: 'Workshop Title',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
