// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderSelectOptions, renderWorkshop } from '../render-utils.js';

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

test('function should render new option to dropdown', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<option value="1">How to Outsmart Meddling Kids</option>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderSelectOptions({
        id: 1,
        name: 'How to Outsmart Meddling Kids',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

