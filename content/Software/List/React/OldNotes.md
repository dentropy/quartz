---
id: iTINuj8s5NxX39Rb7ZZHQ
title: OldNotes
desc: ''
updated: 1629949065859
created: 1628956843765
---

# React
From File knowledge.WebDev.React.Brainstorming.FirstWebAppIdeas.org
-------------------------------------------------------------------

*   Basic apps
    
    *   I can have an app that can increment and decrement
        
    *   I can have text input change text in a different section
        
        *   When certin conditions met in text box do something else like change background color
    *   Make a stupid TODO app
        
*   Real projects
    
    *   Make my bookmark app

From File knowledge.WebDev.React.Brainstorming.InitalBrainstorming.org
----------------------------------------------------------------------

*   Make an app that uses rect in the front end
    
*   What is bable and how do I use it
    
*   Explain and give exmaple of JSX being better than just javascript
    
*   Come up with something simple to implement
    
    *   Click a button reveal an image

From File knowledge.WebDev.React.Brainstorming.org
--------------------------------------------------

From File knowledge.WebDev.React.Priotities.org
-----------------------------------------------

TODO
----

*   Finish Section 2 of the Udemy Course
*   Make something simple myself in React

Scoping
-------

*   I need to scope out a bunch of projects I can easily build with React
    
    *   Bookmark manager
    *   Hangman
    *   Markdown Editor thing
    *   Basic code highlighting
    *   Messaging app
    *   Blog
    *   Forumn
*   Let's make a Hangman game
    
    *   I need to design the componets
    

Reminders
---------

*   Two JSX calls next to each other need a div around them
*   How to add react to just the web page `html <!-- The core React library --> <script src`"[https://fb.me/react-0.14.1.js](https://fb.me/react-0.14.1.js)"></script> <!-- The ReactDOM Library --> <script src="api/images/91gYbURKcn4a/[https://fb.me/react-dom-0.14.1.js](https://fb.me/react-dom-0.14.1.js)"></script>=
*   But then you also need bable `html <!DOCTYPE html> <html> <head> <title>Learn Game Development at ZENVA.com</title> <!-- Just for basic styling. --> <link rel`"stylesheet" href="#root/rvIGPhoPJnJf" /> <script src="api/images/91gYbURKcn4a/[https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.js](https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.js)"></script> <script src="api/images/91gYbURKcn4a/[https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.js](https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.js)"></script> <script src="api/images/91gYbURKcn4a/[https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js](https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js)"></script> </head> <body> <div id="content"></div> <script type="text/babel" src="api/images/Gc8BcOu65Au9/main.js"></script> </body> </html>=

From File knowledge.WebDev.React.ProjectDiary.20180912.WhatHappened.org
-----------------------------------------------------------------------

*   12:09
    
    *   I challenge myself to write an increment and decrement react application
*   13:01
    
    *   I found boiler plate that I like and plan to use in the future
    *   I read through the code and took control of all the components in the application
    *   Next I need to finish the increment and decrement application

From File knowledge.WebDev.React.ProjectDiary.20180914.ExplainReduxTodoApp.org
------------------------------------------------------------------------------

*   Explain how the redux TODO app works
    
    *   There are components, containers, actions and reducers
*   Answered Questions
    
    *   How do I add an item to the Todo list
        
        *   What data is stoed in the list?
            
            *   A string of text
        *   How does a user input an item into the Todo List?
            
            *   There is a HTML form with a text input and submit button
        *   When the user selects the submit button where does the text of the Todo list item go?
            
            *   [Found on Stack Overflow](https://stackoverflow.com/questions/39029454/what-does-ref-and-node-refer-to-in-react-redux)
            *   There is a `let input` at the top of the AddTodo.js container
        *   How does let work in javascript
            
            *   [Let's you use the variable locally rather than globally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
        *   What happens after the data is trimmed?
            
            *   The text for the todo item is sent to an action
        *   What is an Action?
            
            *   Part of Redux
            
*   Questions
    
    *   How does the data get stored
    *   How does the user view what they just put on the todo list
    *   How do references work in React
    *   What are the edge cases of user input?

From File knowledge.WebDev.React.ProjectDiary.20180914.WhatHappened.org
-----------------------------------------------------------------------

*   09:44
    
    *   Started trying to focus
*   10:26
    
    *   The stephen Grinder course was not doing it for me
        
    *   Review my attempt to make a adder and subtractor
        
        *   Realized I needed Redux to manage state
    *   Went to the Redux documentation and have spent time reviewing their code
        
    *   React is great for passing data to render stuff
        
    *   But when you want to pass data to different parts of an application Redux is great
        
    *   React to Render, Redux to manage data
        
*   10:39
    
    *   Solving for all different user conditions is really hard
    *   I want a server based bookmark manager, I should try and build that
    *   I should be able to make a TODO list from scratch off the top of my head
*   11:11
    
    *   90 Minute sprint complete
        
        *   I pivoted hard
        *   I did something completely different than I was doing last time
        *   I believe my new approach is better
        *   I am annoyed that I do not have any consistency
        *   I need to methodize my learning
        *   Today I tried to build something really simple
        *   I realized I had no clue what I was doing
        *   I dove into the documentation
        *   I found example code and spent a chunk of time reading it
        *   I realized I had too many questions and had to write them down
        *   I then started organizing my questions and questions about the questions
        *   I need to make sure I am asking the right questions
        *   When trying to answer a clear question of value I can break up the problem into more questions of value achieving a higharchy of value

From File knowledge.WebDev.React.ProjectDiary.20180915.WhatHappened.org
-----------------------------------------------------------------------

*   15:56
    
    *   Discovered an amazing Tutorial
        
        *   [managing-your-react-state-with-redux](https://medium.com/the-web-tub/managing-your-react-state-with-redux-affab72de4b1)
    *   So actions just pass data to reducers
        
    *   Reducers have switch statements
        
*   16:01
    
    *   I need to start writing React Redux Applications
        
    *   What is the most simple application I can imagine for React Redux
        
        *   How about a button the changes text on the page
        *   If the text if a certain string the button just changes it to another string
        *   I need a redux, webpack, react boilerplate application
*   16:22
    
    *   Hour and a half sprint is now over
        
        *   I did not define a list of deliverables for the past hour and a half that was a mistake
            
        *   I found myself trying to answer questions rather than just reading, I find this stratagy works pretty well
            
        *   I found myself reading through souce code and asking questions about how it works
            
        *   I feel like my understanding of React Redux is better
            
        *   I feel like something is missing from the past hour and a half
            
            *   I have no purpose, no goal, no roadmap for useing what I am learning
            *   I want to have the most basic possible application that uses redux and react
            *   That's what I will start with next time

From File knowledge.WebDev.React.ProjectDiary.20180916.WhatHappened.org
-----------------------------------------------------------------------

*   20:35
    
    *   Why do I want to Learn React
        
    *   What is the value in learning React
        
    *   How does learning React fit into the big picture
        
    *   What is this weeks sprint for React
        
    *   I can't forget backed and stuff too
        
    *   What about scaling applications
        
    *   Power is knowing what information to ignore
        
    *   I don't really know anything about React
        
    *   By the end of this week I want to have a calculator application completed using Redux
        
    *   By the end of Sunday this time I require this to be done
        
    *   Now what questions do I need to answer in the mean time?
        
    *   I first need to review the Redux examples and understand exactly how they work
        
    *   What about Routes in React
        
        *   That is a can of worms I can not take apart right now
    *   How do I do REST calls in React
        
        *   This is where Redux comes in
    *   Knowing what to ignore is power
        
    *   Calculator app by the end of the week
        
    *   Let's design the thing
        
    *   What do I need to learn in the mean time
        
    *   10 Minutes is up now to review Redux
        
*   20:45
    
    *   [Souce Code](https://github.com/reduxjs/redux/tree/master/examples/counter)
    *   Explain to me how the counter example in Redux works?
    *   Let's start in the src/index.js
    *   What Happens when we remove react-dom?
*   21:08
    
    *   Can I do a double increment?
*   21:17
    
    *   I did it now how do I do negative 2
        
    *   Steps I did to minus 2
        
        *   Create reducer
        *   Add reducer to props of component
        *   Use reducer function inside component itself
    *   How come PropTypes is not even used?
        
*   21:26
    
    *   [Souce Code](https://github.com/reduxjs/redux/tree/master/examples/todos)
    *   Time to jump into the Todo app
    *   The Todo app is way better structured
    *   The entire app component is inside a Provider which is a redux store
    *   Containers hook up to Redux while components don't
    *   I feel like components should not use any actions while containers should
*   21:45
    
    *   What do I want to add to the todo app
    *   How about a time stamp of when the message came in
*   22:21
    
    *   Hour and a half sprint is now complete
        
    *   What did I learn?
        
        *   I want 10 minutes to complete the todo list thing
*   22:28
    
    *   I was able to add the date when adding an item to the ToDo List
    *   The AddTodo.js container triggers an action
    *   The action creates a key value pairs of data
    *   These actions trigger reducers
    *   Go through switch statement to see which part of reducer is activated
    *   Reducer takes in the past state and updates it
    *   The updated states causes react to rerender
    *   The TodoList.js component takes props and passes it to the Todo.js component
    *   The Todo.js component renders the text getting added to the todo list as well as the date

From File knowledge.WebDev.React.ProjectDiary.20180917.WhatHappened.org
-----------------------------------------------------------------------

*   11:23
    
    *   What are the deliverables
    *   I need to build a Calculator applicaion by the end of the week
    *   I should design that now?
    *   Or should I learn more Redux
    *   Time to dive into the todos-with-undo
*   11:44
    
    *   Remember to keep UI state seperate from the Data state
    *   The reducer is a pure function that takes the previous state and an action, and returns the next state.
*   11:46
    
    *   So my idea of getting the data in the Todo inside the reducer is a really bad idea, let's go look at the code
    *   NOT I did it correct, the actions get's the date
    *   ACTIONS ARE PURE FUCNTIONS
    *   The undo redo stuff effects data not the UX side of things
    *   Containers are required to connect to dispatch, redux and props, react
*   11:55
    
    *   Now diving into the Shopping cart application
        
        *   The application is proceduraly generated from data cool
*   12:15
    
    *   I learned about middleware and redux-thunk but that did not help me with the calculator
    *   Can I design a calculator
    *   I think it is time to design said calculator
    *   There are a crap tone of design decisions.......
    *   This needs to be a project
*   12:49
    
    *   What have I learned so far?
        
        *   I need to know more about middleware and I do not understand what it is
            
        *   I have always wanted to make tutorials that teach people everything they need to know as fast as reasonable
            
            *   That is what documentation is, I LOVE GREAT DOCUMENTATION
        *   I should memorize the command pattern, it is how Redux works after all
            
    *   Next Steps
        
        *   Explain what middleware is and check if my understanding is correct if not change it
        *   Explain define command pattern off the top of my head
        *   Take the my-app facebook thing and make it work with Redux
        *   Explain what a route is then go out and learn what it is, what problem it solves, why it is important, and why I would possible use it

From File knowledge.WebDev.React.ProjectDiary.20180918.WhatHappened.org
-----------------------------------------------------------------------

*   20:35
    
    *   Let's discover what middleware is
*   20:46
    
    *   Middleware will come later
*   20:47
    
    *   I should understand design patterns better
    *   What is a command pattern?
*   20:55
    
    *   Let's spend 20 minutes reading the introduction to Redux
        
        *   Always need to anser when, why and how for what happens in application
            
        *   mutation and asynchronicity are hard to keep track of
            
        *   Redux attempts to make state mutations predictable
            
        *   Three Principles of Redux
            
            *   Single souce of truth
                
            *   The state is read only
                
                *   Don't want view or network callbacks writing to the DOM
            *   State is changed only using pure functions
                
                *   Returns new state object that is added to global state
        *   The examples are really well put together and build on one another
            
*   20:55
    
    *   What did I learn
        
        *   I beleive I got a better understanding of the design pattern
        *   I should probably familarize myself with the functional vs object programing paradimes
    *   Let's read through all the examples we have seen so far
        
        *   How do I read through these patterns?
        *   IDK open the code
    *   Counter
        
        *   It all starts in the public folder with a HTML file with a div with id root to mount the entire application
            
        *   In the src directory there is index.js
            
            *   Connects React, React-Dom, and Redux
            *   A redux store is created
            *   Component is rendered and mounted to HTML page
            *   The the store of hooked up to the render part of the application
        *   Questions
            
            *   I do not understand why react-dom is used
                
                *   Otherwise can't mount to normal HTML page
            *   How do we know the counter is set to zero
                
                *   The reducer set it to zero
*   21:29
    
    *   I realized I did not fully understand the simple counter application
    *   Let's design the calcualtor application
*   21:34
    
    *   How do I detect where cursor is on the input
*   21:35
    
    *   This question is a waste of time
*   21:47
    
    *   Been working on the calculator app
    *   Now going to start coding it
*   21:50
    
    *   Wait while about to code I realized I do not have a data structure to store everything in, how does the todo app undo and redo?
    *   Should the user be able to select which calculation they may want to edit?
    *   No we want something simple
    *   Click buttons to edit html tag then submit to calculation
    *   So past calculations input and result, current input is all we need to store
*   22:03
    
    *   Hour and a half sprint is now complete
        
        *   What did I learn?
            
            *   It is not possible to do everything the gnome calculator does because it is not easy to detect what part of an input is being edited, I searched for the google calculator and saw the they did not have the same functionality
            *   The feature set of the gnome calculator was too much
            *   I do not know how onchange input works in javascript
            *   I had to super narrow the scope of the project
            *   I do not know how to set inital state in redux

From File knowledge.WebDev.React.ProjectDiary.20180919.Deliverables.org
-----------------------------------------------------------------------

*   Next Time
    
    *   Research many different types of calculators online and see how they work
    *   Research how onchange works for an input
    *   How do I set inital state in redux
    *   Explain how the TODO app works
    *   Read the code of the other TODO app
    *   Design the actions and reducers and components and come up with more questions
    *   Add something to the TODO app

From File knowledge.WebDev.React.ProjectDiary.20180919.WhatHappened.org
-----------------------------------------------------------------------

*   16:37
    
    *   How do calculators online work?
        
        *   I can replicate a simple dollar store calculator where I only press buttons
*   16:52
    
    *   Currently researching onChange in react
*   17:20
    
    *   I tried to start coding the calculator application, the most simple calculator I could imagine and I got lost not knowing what to do
    *   I need to list what is required for the calculator application
*   17:51
    
    *   I did not really learn anything here today
    *   I still do not really understand React and how I can feed data back into the application from lower level components
    *   I need to think about this in my Reflection later

From File knowledge.WebDev.React.ProjectDiary.20180930.WhatHappened.org
-----------------------------------------------------------------------

*   15:34
    
    *   Time to watch [this video](https://www.youtube.com/watch?v=93p3LxR9xfM)
*   15:48
    
    *   I should have a npm list of packages I like to install
*   15:52
    
    *   I am spending a lot of time installing npm packages
    *   I am trying to figure out how I should follow this tutorial on a single screen
    *   Also I should install XServer, I am going to do do that right now

From File knowledge.WebDev.React.ProjectDiary.28180919.Deliverables.org
-----------------------------------------------------------------------

*   [Watch this](https://www.youtube.com/watch?v=93p3LxR9xfM)

From File knowledge.WebDev.React.ProjectDiary.GettingStarted.org
----------------------------------------------------------------

*   [The Udemy course I bought](https://www.udemy.com/react-redux/)
    
*   Remeber to break up your componets for your app before you start coding anything
    
    *   Componets can even have componets
*   Componets should do one thing and one thing only
    

From File knowledge.WebDev.React.ProjectDiary.org
-------------------------------------------------

From File knowledge.WebDev.React.TutorialsAndResources.org
----------------------------------------------------------

*   Individual Tutorials
    
    *   [survivejs introduction to react](https://survivejs.com/react/getting-started/introduction-to-react/)
        
        *   "React is a JavaScript library that forces you to think in terms of components."
    *   [Learn react in 5 minutes](https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4)
        
    *   [React.js app in 10 minutes](https://medium.freecodecamp.org/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b)
        
        *   [Actual tutorial](https://scrimba.com/p/pbNpTv/c9bWPAp)
        *   [Chat backend service](https://pusher.com/chatkit)
    *   [Scotch.io TODO app](https://scotch.io/tutorials/create-a-simple-to-do-app-with-react)
        
    *   [Message Posting board, not using react npm package](https://github.com/reactjs/react-tutorial)
        
    *   [Great use of github API tutorial on github](https://github.com/mzabriskie/react-example)
        
*   MetaTutorials
    
    *   [Hackr.io, tutorial reviewer and agregator](https://hackr.io/tutorials/learn-react)
    *   [Nice Examples with demos from a single dude](https://dev.to/drminnaar/11-react-examples-2e6d)
    *   [awesome-react github](https://github.com/enaqx/awesome-react#react-general-tutorials)
*   Resouces
    
    *   [Scotch.io](https://scotch.io/)

From File knowledge.WebDev.React.Understanding.Concepts.org
-----------------------------------------------------------

*   Control Field
*   Controlled Element
*   Arrow Function
*   Props

From File knowledge.WebDev.React.Understanding.Glossary.org
-----------------------------------------------------------

*   ES5 / ES6
*   WebPack
*   JSX
*   Component
*   Functional Component
*   Class Component

From File knowledge.WebDev.React.Understanding.org
--------------------------------------------------

Questions
---------

*   What is webpack?
    
*   What is ESlint?
    
*   What is scss
    
    *   Checks for mistakes in your code
*   How does `npm run` work?
    
*   What is npx
    
*   What is yarn
    

### Batch 001

*   What is store in Redux
    
    *   [managing-your-react-state-with-redux](https://medium.com/the-web-tub/managing-your-react-state-with-redux-affab72de4b1)
    *   Talking about action creators, actions, reducers, containter, component
    *   Redux is also called Redux Store
    *   Store if the API surface of redux that let's you manipulate the state of the application
*   How does one trigger an action?
    
    *   There is an actions object that can be called and one can feed data into the action
*   What do actions actually change state
    
    *   The actions themselves just carry data to the reducers
*   What is tripple equal in javascript
    
    *   [Here is an answer](https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a)
*   What is question mark in javascript
    
    *   [Here is an Answer](https://www.digitalocean.com/community/tutorials/how-to-write-conditional-statements-in-javascript)
    *   The question mark is a shorthand if statement
*   What exactly is a pure function
    
    *   [master-the-javascript-interview-what-is-a-pure-function](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
        
    *   They are like systems, inputs and outputs
        
    *   What is a inpure function
        
        *   Whatever depends on time of day is not a pure function
        *   Random number generators are not pure function
        *   Stuff that depends on IO is not a pure function

### Batch 002

*   What is React-DOM and why can't I just use react
    
    *   That is because there is a virtual dom
    *   [COmplicated Stack Overflow answer](https://stackoverflow.com/questions/34114350/react-vs-reactdom)
    *   React-Dom is required for the Web
*   What are the 4 different functions of Redux
    
    *   getState()
    *   dispatch(action)
    *   subscribe(listener)
    *   replaceReducer(nextReducer)
*   What does `() => CODE` do again?
    
    *   This is called an arrow function
    *   [Just go here and take a look](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   What is PropTypes?
    
    *   [Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
    *   Type Chacking when sending props to stuff
*   What is a reference in react and why do we use them?
    
    *   [Documentation](https://reactjs.org/docs/refs-and-the-dom.html#the-ref-callback-attribute)
*   What is a container component?
    
    *   [Read this later](https://medium.com/@learnreact/container-components-c0e67432e005)

### Batch 003

*   What exactly is an action creator?
    
    *   Functions that create actions
*   What is a reducer?
    
    *   Actions describe what happened reducers describe what changes, THEY ARE PURE FUNCTIONS
*   What is this 'redux-undo' package
    
    *   Remember Redux give the entire application a single state
    *   So you can undo different parts of the tree structure
*   What is a command pattern?
    
    *   [Wikipedia](https://en.wikipedia.org/wiki/Command_pattern)
    *   Command, receiver, invoker and client
*   What is middleware
    
    *   [This is what I am talking about](https://redux.js.org/api/applymiddleware)
    *   Deals with the async nature of REST calls
    *   I guess it lets you combine reducers in a way that they have a flow one after another
*   What is redux-thunk
    
    *   It middleware with the async stuff
*   How do I append elements to a list in a system like react
    
    *   Remember redux maps to props which is rendered is rendered in component

### Batch 004

*   What is middleware
    
    *   \[\[[https://redux.js.org/advanced/middleware](https://redux.js.org/advanced/middleware)\]\["middleware is some code you can put between the framework receiving a request, and the framework generating a response."\]\]
    *   This question is not worth my time right now
*   What is a design pattern?
    
    *   I do not quite understand this
    *   This is a research question that needs an hour to itself

From File Problems
------------------

### Initial Problems

*   What file structure do I use?
    
    *   [Documentation](https://reactjs.org/docs/faq-structure.html)
        
    *   [I started with](https://github.com/StephenGrider/ReduxSimpleStarter/tree/master/src)
        
    *   There are many different boilerplate examples
        
        *   [Mega Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
        *   [Metalist](https://www.javascriptstuff.com/react-starter-projects/)\\
    *   This one is my favorite
        
        *   [facebooks](https://github.com/facebook/create-react-app)

From File knowledge.WebDev.React.org
------------------------------------

From File knowledge.WebDev.ReactCalculator.Brainstorming.org
------------------------------------------------------------

*   What is my reference design
    
    *   The basic mode calculator built into the gnome desktop
    *   Written in python
*   Let's just replicate its functionality of gnome desktop calculator
    
    *   Entirely controllable with the keyboard
    *   Entirely controllable with the mouse
    *   Can scroll through history
    *   Can input anything you want then checks if the calculation can actually be made
*   This is pretty complicated, where would I start
    
    *   I could come up with a way to display all the buttons, wait don't waste time just use bootstrap
    *   I need to make sure to plan out the Redux State
    *   I need to have a system diagram of the different ways data flows through the application
*   What are all the different pieces of data I will have to track
    
    *   Past computations and their result
        
    *   A repersentation of the current computation
        
        *   The currnet input position of the current computation
*   How many actions will I require
    
    *   One for every button
    *   Whenever a character is added to the input
    *   One to calculate the answer
*   What npm package dependencies will I require for this application
    
    *   react
    *   react-dom
    *   redux
    *   react-redux
*   What will the boilerplate code be
    
    *   The todos application will by the rederence souce code
    *   I will use facebook's [create-react-app](https://github.com/facebook/create-react-app)

From File knowledge.WebDev.ReactCalculator.Requirements.org
-----------------------------------------------------------

*   Input
    
    *   Keyboard
        
    *   Buttons
        
        *   Number 0-9
        *   Decimal
        *   +, -, \*, division
        *   Undo History
        *   Clear
        *   Equal
        *   Exponent
        *   Square Root
        *   Brackets
        *   Percent, just divides by 100
        *   Back
*   Current Calculation component
    
*   History of calculations component
    
*   Undo and Redo components
    
*   We have two reducers
    
    *   calculations\\~input~
    *   past\\~calculations~

From File knowledge.WebDev.ReactCalculator.RoadMap.org
------------------------------------------------------

*   Come up with all the components and draw them out
    
    *   Calculator
        
        *   Buttons
            
            *   Button
        *   Display
            
        *   Past Calculations
            
*   Explain how redux plays into all of this
    
    *   Redux stores and manages the calculation in the display and past calculations input and output

From File knowledge.WebDev.ReactCalculator.org
----------------------------------------------

Questions {#questions}
----------------------

*   Find where currsor is inside input so that one can use mouse and keyboard
    
    *   Too much for this POC
*   What do the actions look like?
    
    *   They will just have the current string input
*   What actions do we have?
    
    *   Edit input
    *   Calculate Input
*   What reducers do we have?
    
    *   Remove\\~Last~\\~Input~
    *   Append\\~Input~
    *   Calculate Input

Problem Statement
-----------------

*   Build a calculaor using redux and react that simulate as much of the gnome / google calculators as reasonable for learning purposes

From File knowledge.WebDev.ReactRedux.org
-----------------------------------------

From File knowledge.WebDev.ReactRedux.Glossary.org
--------------------------------------------------

*   Component
    
*   Container
    
*   Action Creator
    
    *   Action creators are exactly that---functions that create actions. It's easy to conflate the terms "action" and "action creator", so do your best to use the proper term.
*   Action
    
    *   Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
*   Reducer
    
    *   Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
*   Redux
    
*   State
    
*   Props
    
*   ES6 Syntax
    
    *   New way of doing strings
    *   map instead of for loop
    *   Arrow function
*   ref/reference system
    
*   default functions
    
    *   componentDidMount
*   npm packages
    
    *   react
        
    *   react-dom
        
    *   axios
        
    *   redux
        
    *   redux-promise
        
    *   sparkline
        
    *   lodash
        
        *   Use \\\_ for varable
    *   react-router-dom
        

From File knowledge.WebDev.ReactRedux.PastNotes.20180818.org
------------------------------------------------------------

*   15:04
    
    *   What is my plan?
    *   I need to restart the course
    *   I need to know react badly
    *   I need a plan so I do not burn out
    *   I need to do timed sprints
    *   I have already been sitting at my computer for a while
    *   Remember I need specific goals
    *   Let's do 45 minutes, then 5 minutes logging what I learned
    *   Start the timer now
*   15:05
    
    *   NOTES
        
    *   01:01
        
        *   Problems with Course get help
            
            *   ste.grider@gmail.com
            *   @sg\\~in~\\~sf~
            *   [Github](#root/9qf6r4Gp2VHy)
    *   01:02
        
        *   [This Repo](https://github.com/StephenGrider/ReduxCasts)
    *   01:03
        
        *   What is ES6 / ES5
        *   What is WebPack
        *   What is JSX
    *   01:04
        
        *   [Use this Repo](https://github.com/StephenGrider/ReduxSimpleStarter)
        *   npm install
    *   01:05
        
        *   Reviewing outline of componets visually
        *   npm start, see "React simple starter"
    *   01:06 - A Taste of JSX
        
        *   src folder index.js takes all code from index.js shushes it into a single file and shovles it over to the browser
        *   Componet / view produces HTML
        *   Componet, collection of javascript functions that produce HTML
        *   JSX let's us write what looks like is HTML but is actually javascript
    *   01:07 - More on JSX
        
        *   Why look like HTML
        *   [ES6 REPL](https://babeljs.io/repl/)
        *   JSX way less code then just javascript
        *   Try with basic code, then add more JSX
        
            const App = function() {
                return <div>Hi!</div>
            }
            
        
    *   01:08 - ES6 Import Statements
        
        *   All code is kept in seperate silos
    *   01:09 - ReactDOM vs React
        
        *   React is two libraries React and ReactDOM
    *   01:10 - Difference Between Componet Instances and Componet Classes
        
        *   When you create a componet you are creating a class of the componet

From File knowledge.WebDev.ReactRedux.PastNotes.20180819.org
------------------------------------------------------------

*   13:02
    
    *   01:11
        
        *   One has to render a componet somewhere to the DOM
        *   Arrow function notation `const App = () => { ...`
    *   01:12
        
        *   Talked about high level componet and how they work and are divided up
        *   Made a file for each conponet
    *   01:13
        
        *   [Get youtube V3 API Key](https://console.developers.google.com)
        
            npm install --save youtube-api-search
            
        
*   17:37
    
    *   01:15
        
        *   Define Functional Componet
        *   Define Class componet
    *   01:16
        
        *   Events
            
            *   Two steps, set up event handeler
            *   Beed seperate function type thing to handel event
        *   Define what onChange is in vanilla javascript
            
        *   event.target.value, is the prop handed from the input
            
            *   event contains a lot of information
    *   01:17
        
        *   Functional based componets do not have state, class based componets do
        *   Class based componets have constructors
    *   01:18
        
        *   Learned how to use this.state
        *   In JSX javascript is in {}
    *   01:19
        
        *   Control Fields?
        *   State should tell the input what the value should be
        *   Controled element, something whose value is controlled by state
        *   User change value gotta go figure out what it is, not in react
        *   Use events to update state and have state update the input itself

From File knowledge.WebDev.ReactRedux.PastNotes.20180820.org
------------------------------------------------------------

*   07:48
    
    *   01:20, Breather Review
        
        *   Topics Covered
            
            *   JSX
            *   Componets
            *   State
            *   ES6
            *   Classes
            *   Arrow Functions
            *   Import
            *   Export
    *   02:21, Youtube Search Response
        
        *   Define Downwards Dataflow
        *   Was able to do basic youtube search
    *   02:22, Refactoring Functional Componets to Class Componets
        
        *   Classes have render methods, and a constructor
        *   What is super(props);?
        *   When key and value are the same on a key value store, just use name of variable
    *   02:23, Props
        
        *   Pass data from parent componenet to child component
        *   Passing data means passing props
        *   Not everything is instantaneous
        *   Functional method, everything can be gotten as props
        *   Class component use this.props
        *   Make sure to do everything exactly as said in the video
        *   Remember all data is updated from somewhere
        *   Memorize arrow function syntax

From File knowledge.WebDev.ReactRedux.PastNotes.20180822.org
------------------------------------------------------------

*   10:28
    
    *   02:24
        
        *   Do not use for loops use map
        
            var array = [1, 2, 3]
            array.map(function(number){return number * 2})
            
        
        *   Started calling our own components in component in a component
        *   Have a array.map be a single component
    *   02:25
        
        *   Give each item in a list a ID
        *   Each youtube video from the API has a etag, unique identifier
        *   Remember to add a key to each item in a list
        *   Use {} and get data from state to give the list iteam an ID
    *   02:26
        
        *   const VideoListItem = ({video}) => { is same as const VideoListItem = (props.video) => {
        *   I do not know bootstrap well
        *   I can use whatever javascript I like in a component, such as console.log
    *   02:27
        
        *   Concatinate variables and strings
            
            *   `HelloWorld${YourNameVar}`; / //BACK TICKS
        *   Youtube videos need iframes
            
        *   Seems to always put content inside a div
            
    *   02:28
        
        *   ASYNC PROBLEMS
        *   Put an if statement at top of component to check if correct props object is input
        *   Remember to put the "./" when importing components
*   16:19
    
    *   03:29 - Video Selection
        
        *   Alowed the user to click another video to actually view it
    *   02:30
        
        *   One CSS file per component
        *   Name the top level div in each component a similar name to the name of the component itself
    *   02:31
        
        *   Made the search button work
    *   02:32
        
        *   npm install --save lodash
        *   Use quotation makes when importing npm packages

From File knowledge.WebDev.ReactRedux.PastNotes.20180823.org
------------------------------------------------------------

*   23:21
    
    *   02:33
        
        *   Functional vs Class component
            
        *   State in general
            
            *   Set it up in the constructor
            *   Change state rerender entire component
        *   import and export statements
            
            *   remember the "."/ in the ./
            *   libraries do not have ./
        *   Callbacks
            
            *   Use less callback in Redux
        *   Components have their own state
            
    *   03:34
        
        *   [Redux documentation](https://redux.js.org/)
            
        *   On top of Redux
            
            *   Webpack
            *   Redux Router
            *   React Router
            *   Redux thunk
            *   Hot Reloading
    *   03:35 - What is Redux?
        
        *   Backbone is a framework?
        *   "Predictable state container for javascript applications"
    *   03:36 - More in redux
        
        *   Centralizes all data in a single object
            
        *   Example application is a counter that increments up and down
            
            *   Track number of times buttons have been pressed
    *   03:37 - Even More Redux
        
        *   React control view, redux control data
            
        *   Designing state is the most important part of an application
            
        *   Let's design tinder
            
            *   THink about all the data in state
            *   Think about all the components
        *   Define application state
            
*   23:50
    
    *   04:39
        
        *   What is a Reducer?
            
            *   Function that returns a piece of the application state
        *   function that produce value of our state
            
        *   Create then wire into application
            
    *   04:40
        
        *   Remember to add key whem making a list
        *   There is no real connection between React and Redux
        *   Container, react component with access to state managed by redux
        *   react-redux is a javascript library that bridges React and Redux
        *   What is supposed to be a container what is supposed to be a react component

From File knowledge.WebDev.ReactRedux.PastNotes.20180824.org
------------------------------------------------------------

*   00:11
    
    *   04:41
        
        *   When component needs data from redux make it a container
        *   Only connect most parent component as a container
    *   04:42
        
        *   We need react-redux
*   14:37
    
    *   04:43 - Containers Reducers Review
        
        *   Read through source code
    *   04:44 - Actions and action creators
        
        *   What is a lifecycle of an action
            
            *   Action creator returns an action
            *   An action flows through the reducers
            *   Reducers assembale new state
            *   New state effects containers
    *   04:45 - Building an Action Creator
        
        *   Make actions available on container
            
        *   DO THE DOCUMENTATION
            
            *   Use connect differently
        *   What is this dispatch thing?
            
    *   04:46 - Creating an Action
        
        *   Action component connect to container as prop
            
            *   this.props.selectBook
        *   Actions have two values type and payload
            
        *   Every action must have a type that secribes the purpose of the action `type: 'BOOK_SELECTED', payload: book`
            
    *   04:47 - Consuming Actions in Reducers
        
        *   Reducers are only called when actions occour
            
        *   What is a reducer?
            
            *   "Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes."
        *   Reducer's use switch statements
            
        *   Reducers must never return undefined value
            
        *   In function input can set undefined variables to null like so
            
            *   "(state = null, action)"
        *   Never mutate the current version of state, must always be fresh and clean
            
    *   04:48 - Consuming Actions in Reducers continoued
        
        *   Remember component vs contianer
        *   Wrote a component and turned it into a container
    *   04:49
        
        *   Need to set inital state
        *   It is easy to add data to state using redux and get it in components
    *   04:50 - Reducers and Actiona review
        
        *   Redux is in charge is managing state
            
            *   State is simple javascript object
        *   Component state is very different than application state
            
        *   Reducers
            
            *   Use switch statements
                
                *   So they can return different data depending on what action happened
            *   Get combined with index.js combined Reducers
                
        *   Actions and Action Creators
            
            *   Actions return plain javascript objects
                
                *   Retuire a type
                *   Can have payload or other properties

From File knowledge.WebDev.ReactRedux.PastNotes.20180910.org
------------------------------------------------------------

*   01:18
    
    *   I really need to come up with simple project ideas I can build in react
    *   I really need to test myself on react concepts
    *   I do not really understand what react is

From File knowledge.WebDev.ReactRedux.PastNotes.Pre20180818.Overview.org
------------------------------------------------------------------------

*   Problems with Course get help
    
    *   ste.grider@gmail.com
    *   @sg\\~in~\\~sf~
    *   github.com/stephengrider
*   [First Project](https://github.com/StephenGrider/ReduxCasts)
    
*   We will use webpack and bable
    
*   Componet/View something that produces HTML
    
*   A componet is a bunch of javascript functions that produce HTML
    
*   Comment first then code
    
*   JSX is subsect of javascript that looks like HTML but is still javascript
    
*   ES6 can not be interpreted by the brower
    
*   [Bable REPL](https://babeljs.io/repl/)
    
*   Javascript Modules
    
*   When we create a componet we are creating a class of a componet
    
*   Wrap with < /> to create instance of componet
    
*   One componet per file
    
*   Functional componets are different then class based componets
    
*   Methods still have to render something
    
    *   "every class must have a render function"
*   events
    
    1.  Event Handeler
        
        *   Function ran when event occours
    2.  Send to Element we want to monitor
        
*   Javascript variables in JSX need curly braces
    
*   Use arrow functions rather than creating more methods
    
    *   Arrow functions are badass
*   State
    
    *   Super Complicated
    *   Plain javascript function used to record and react to user events
    *   Each componet has a state object
    *   Functional componets do not have state
*   What is a controled field / control input / control form element
    
    *   State tell input what current value should be
*   Controlled input has its value set by state
    
*   Normally user change something I need to go figure out what it is
    
    *   Not in REACT
*   Read value of input easier than jQuery
    
*   Review
    
    *   JSX
        
    *   Componets
        
        *   Class vs Functional
        *   Class for access to state
        *   Functional componet can contain a class based componet
    *   State
        
    *   ES6
        
        *   Classes
        *   Arrow function
        *   Import and Export
    *   Low surface area compared to backbone or angular
        

From File knowledge.WebDev.ReactRedux.PastNotes.Pre20180818.Section3.org
------------------------------------------------------------------------

*   State requires a class based componet

    var array = [1, 2, 3]
    array.map(function(number) {return number * 2})
    

From File knowledge.WebDev.ReactRedux.README.org
------------------------------------------------

From File knowledge.WebDev.ReactRedux.Section5.Notes.org
--------------------------------------------------------

*   05:51
    
    *   Three purposes of this section
        
        *   Get better with react
        *   Get better with Redux
        *   How to do async requests such as AJAX
    *   Put as much logic as possible in actions and reducers
        
    *   Components are only responsible for displaying data
        
    *   React components DO NOT MAKE AJAX REQUESTS
        
    *   How to deal with application when state changes a crap tone
        
    *   CLONE REDUX SIMPLE STARTER
        
*   05:52
    
    *   Made a basic search container
*   05:53
    
    *   onChange vanilla javascript
        
    *   this
        
        *   Call back functions take an input and may not have the correct context
    *   If you ever pass a call back around and that callback has a reference to this you need to bund the context
        
*   05:54
    
    *   Problem press enter and refresh the screen
        
        *   For on submit
        *   preventDefault
    *   Why form
        
        *   We get a free event handeler
*   05:55
    
    *   [Our API for weather](https://openweathermap.org/forecast5)
        
        *   MY API KEY = 397b9fd9a6b181926d8d3835d9d4ef70
*   05:56
    
    *   What is middlewhere and what does it mean?
        
        *   Middleware takes an action and using type/payload/otherFactor the middlewhere let's the action pass through, stop, or something else before they reac a reducer
        *   Middleware modifies actions before they get to the reducer
        *   [redux-promise package](https://www.npmjs.com/package/redux-promise)
        *   Applying / configuring middlewhere is already done by stephen grinder
*   05:57
    
    *   What is middlewhere?
        
        *   See last lesson
    *   What is an action
        
        *   Things that happen in a web page that lead to it currents state
        *   Action -> reducer -> container -> component
    *   Action Creators need to return an action and actions always need a type
        
    *   npm install --save axios
        
*   05:58
    
    *   When a container needs to interact with an action it needs to interact with Redux
    *   Don't forget to bind context
    *   We will be connecting our searchbar to remix
*   05:59
    
    *   Remember reducers are just functions
    *   Middleware can stop or manipulation actions before they hit a reducer
*   05:60
    
    *   NEVER SET STATE TO ANYTHING
        
        *   use setstate
    *   `.concat` javascript function
        
    
        return state.concat([action.payload.data]) /* same as */ 
        return [ action.payload.data, ...state ];  // [city, city, city] NOT [city, [city, city] ]
        
    
*   05:61
    
    *   Need to make component to render all the city data
    
        { weather } /* same as */
        const weather = state.weather
        
        return { weather } /* same as */
        { weather } === { weather: weather }
        
    
*   05:63
    
    *   Time to learn about [React Sparklines](https://github.com/borisyankov/react-sparklines)
    *   I wonder if MatPlotLib outputs to HTML / CSS/ JS
*   05:64
    
    *   Never copy and paste code unless you really need to
*   05:67
    
    *   What the google maps code does
    
*   READ THE CODE FROM THIS AND PAST PROJECTS AND EXPLAIN IT TO ELIOTE THE MOOSE
    

From File knowledge.WebDev.ReactRedux.Section6.Notes.org
--------------------------------------------------------

*   06:69
    
    *   Redux has application state generated by reducers, state is modified when we call action creators, action creators return actions which flow through middleware and then into reducers, when new state is produced it flows into containers which rerender themselves
    *   We will be learning routes
*   06:70
    
    *   Blog Post in API?
    *   [This](https://reduxblog.herokuapp.com/)
    *   We are using postman
*   06:71
    
    *   NEED TO INSTALL A DIFFERENT PACKAGE THAN IS IN THE VIDEO
    
        npm install --save react-router-dom@4.2.2
        
    
*   06:72
    
    *   What is React Rounter
        
        *   Instead of get page displat page react router intercepts and then changes what components are displayed
        *   There is a history package installed as part of React Router
        *   This is for SPA, Single Page Application
*   06:74
    
    *   Saw example of React Router
        
        *   Need to see more in order to explain what it is and how it works
*   06:75
    
    *   Paths do not need to match components
        
    *   We have three routes
        
        *   /posts/new
        *   _posts_:id
        *   /
*   06:76
    
    *   This is where the super simple route code is
*   06:77
    
    *   The URL itself can store state so you do not have to
    *   Use more objects in the state
*   06:78
    
    *   Let's get started by creating a action creator
*   06:79
    
    *   [JSPlayground](https://stephengrider.github.io/JSPlaygrounds/)
    *   Lodash mapKeys is awesome
    *   React life cycle method
*   REVIEW DATAFLOW OF ALL PAST PROJECT AND MAKE A DIAGRAM TO EXPLAIN HOW IT WORKS IN GOOGLE DRAW
    

From File knowledge.WebDev.ReactRedux.org
-----------------------------------------

Questions {#questions}
----------------------

*   What is React?
*   What is a componet?
*   What is REDUX?
*   What are Props?
*   What is state?
*   How does one use AJAX requests in React?
*   What is Bable?
*   What NPM Packages should I use?
*   What is the difference between const and var?
