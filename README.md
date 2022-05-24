## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Community Workshops Project

## Workshops Page
    
1. Hardcoding HTML:
A `<button>` to add participants

2. Render mock-up (Hardcode):
`<div>` to contain the created elements, `<h3>` For Workshop Title, `<ul>` to hold the list of participants, `<li>` for each participant/contact

3. CSS/Styling: Basic styling to format the page

## Display functionality
1. Link supabase to `fetch-utils.js`

2. Create a `getWorkshops` function in `fetch-utils.js` to call your database

3. TDD basic `renderFunction` that displays the workshop, and participants attached to that workshop

4. Write a `displayWorkshops` async function that will loop through database rows, and create necessary elements for each workshop

5. `addEventListener` to the add participants `<button>` to redirect to add-participants page

## Add Participants Page

1. Hardcode form in HTML for name, contact info, and `<select>` dropdown for workshops

2. Add `onLoad()` function that calls `getWorkshops` and add options to the dropdown, that sets the value of the option to the row ID, and sets the text content of the option to the name of the Workshop.

3. Add `createParticipant` function in `fetch-utils.js` to add row to supabase table

4. Add form event listener

## Delete Participant
1. Add `deleteParticipant(id)` function in `fetch-utils.js`

2. Add dynamic event listener to the participant `<li>`, and call `displayWorkshops` to refresh the page






1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
