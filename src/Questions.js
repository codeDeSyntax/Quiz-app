const questionBank = [
    {
      id: 1,
      question: 'What does DOM stand for?',
      option1: 'Document Object Model',
      option2: 'Data Object Model',
      option3: 'Document Oriented Model',
      option4: 'Dynamic Object Model',
      answer: 'Document Object Model',
      explanation: 'The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects.'
    },
    {
      id: 2,
      question: 'How do you declare a variable in JavaScript?',
      option1: 'var',
      option2: 'int',
      option3: 'variable',
      option4: 'let',
      answer: 'var',
      explanation: 'In JavaScript, you can use the var keyword to declare variables.'
    },
    {
      id: 3,
      question: 'Which of the following is not a valid JavaScript data type?',
      option1: 'string',
      option2: 'boolean',
      option3: 'character',
      option4: 'number',
      answer: 'character',
      explanation: 'JavaScript has data types like string, number, boolean, but not a specific "character" type.'
    },
    {
      id: 4,
      question: 'What is the purpose of the parseInt() function in JavaScript?',
      option1: 'Converts a string to an integer',
      option2: 'Returns the decimal part of a number',
      option3: 'Rounds a number to the nearest integer',
      option4: 'Parses a string into an array',
      answer: 'Converts a string to an integer',
      explanation: 'The parseInt() function parses a string and returns an integer.'
    },
    {
      id: 5,
      question: 'What does the === operator do in JavaScript?',
      option1: 'Compares values and types',
      option2: 'Assigns a value',
      option3: 'Compares values only',
      option4: 'Checks for equality in a non-strict manner',
      answer: 'Compares values and types',
      explanation: 'The === operator checks both value and type equality, unlike ==, which only checks for value equality.'
    },
    {
      id: 6,
      question: 'How do you comment in JavaScript?',
      option1: '// Single line comment',
      option2: '/* Multi-line comment */',
      option3: '# Comment',
      option4: '-- Comment --',
      answer: '// Single line comment',
      explanation: 'Single-line comments in JavaScript are denoted by //, while multi-line comments are written between /* and */.'
    },
    {
      id: 7,
      question: 'Which keyword is used to define a function in JavaScript?',
      option1: 'func',
      option2: 'function',
      option3: 'define',
      option4: 'method',
      answer: 'function',
      explanation: 'The function keyword is used to define a function in JavaScript.'
    },
    {
      id: 8,
      question: 'What is the purpose of the return statement in a function?',
      option1: 'Exits the function',
      option2: 'Returns a value from the function',
      option3: 'Declares a variable',
      option4: 'Defines a loop',
      answer: 'Returns a value from the function',
      explanation: 'The return statement is used to exit a function and return a value.'
    },
    {
      id: 9,
      question: 'How do you create a loop in JavaScript?',
      option1: 'for loop',
      option2: 'loop()',
      option3: 'repeat loop',
      option4: 'while loop',
      answer: 'for loop',
      explanation: 'The for loop is commonly used for iterating over a sequence of values.'
    },
    {
      id: 10,
      question: 'Which method is used to add an element to the end of an array in JavaScript?',
      option1: 'push()',
      option2: 'addToEnd()',
      option3: 'append()',
      option4: 'insert()',
      answer: 'push()',
      explanation: 'The push() method is used to add an element to the end of an array.'
    },
    {
      id: 11,
      question: 'What does the this keyword refer to in JavaScript?',
      option1: 'The current object',
      option2: 'The global object',
      option3: 'The previous object',
      option4: 'The next object',
      answer: 'The current object',
      explanation: 'In most cases, this refers to the current object in JavaScript.'
    },
    {
      id: 12,
      question: 'How do you prevent a form from submitting in JavaScript?',
      option1: 'event.stop()',
      option2: 'form.prevent()',
      option3: 'event.preventDefault()',
      option4: 'form.cancel()',
      answer: 'event.preventDefault()',
      explanation: 'To prevent a form from submitting, you can use event.preventDefault() in the form submission event.'
    },
    {
      id: 13,
      question: 'What is the purpose of the localStorage object in JavaScript?',
      option1: 'To store data locally on the user\'s browser',
      option2: 'To send data to a server',
      option3: 'To fetch data from an external source',
      option4: 'To store data on the server',
      answer: 'To store data locally on the user\'s browser',
      explanation: 'The localStorage object is used to store key-value pairs locally in a web browser.'
    },
    {
      id: 14,
      question: 'Which method is used to remove the last element from an array in JavaScript?',
      option1: 'removeLast()',
      option2: 'pop()',
      option3: 'deleteLast()',
      option4: 'slice()',
      answer: 'pop()',
      explanation: 'The pop() method removes the last element from an array.'
    },
    {
      id: 15,
      question: 'What is a closure in JavaScript?',
      option1: 'A way to close a browser window',
      option2: 'A function with access to the outer function\'s scope',
      option3: 'A built-in JavaScript function',
      option4: 'A way to end a loop',
      answer: 'A function with access to the outer function\'s scope',
      explanation: 'A closure is a function that has access to variables from its outer (enclosing) scope, even after that scope has finished execution.'
    },
    {
      id: 16,
      question: 'What is the purpose of the setTimeout() function in JavaScript?',
      option1: 'Delays the execution of a function',
      option2: 'Sets the time on the user\'s device',
      option3: 'Measures the time it takes for a function to run',
      option4: 'Sets a timer on an HTML element',
      answer: 'Delays the execution of a function',
      explanation: 'The setTimeout() function is used to execute a function after a specified delay.'
    },
    {
      id: 17,
      question: 'Which keyword is used to declare a constant variable in JavaScript?',
      option1: 'const',
      option2: 'let',
      option3: 'var',
      option4: 'constant',
      answer: 'const',
      explanation: 'The const keyword is used to declare constant variables in JavaScript.'
    },
    {
      id: 18,
      question: 'How do you convert a string to uppercase in JavaScript?',
      option1: 'toUpperCase()',
      option2: 'upper()',
      option3: 'string.uppercase()',
      option4: 'caseUpper()',
      answer: 'toUpperCase()',
      explanation: 'The toUpperCase() method is used to convert a string to uppercase.'
    },
    {
      id: 19,
      question: 'What does AJAX stand for in JavaScript?',
      option1: 'Asynchronous JavaScript and XML',
      option2: 'Advanced JavaScript and XML',
      option3: 'Asynchronous JavaScript and XHTML',
      option4: 'Automated JavaScript and XML',
      answer: 'Asynchronous JavaScript and XML',
      explanation: 'AJAX stands for Asynchronous JavaScript and XML. It is a technique used for creating more dynamic and responsive web applications.'
    },
    {
      id: 20,
      question: 'Which event is triggered when a user clicks on an HTML element in JavaScript?',
      option1: 'onhover',
      option2: 'onmouseover',
      option3: 'onclick',
      option4: 'onsubmit',
      answer: 'onclick',
      explanation: 'The onclick event is triggered when a user clicks on an HTML element.'
    },

    {
        id: 21,
        question: 'Which method is used to find the index of an element in an array in JavaScript?',
        option1: 'findIndex()',
        option2: 'searchIndex()',
        option3: 'locate()',
        option4: 'indexOf()',
        answer: 'indexOf()',
        explanation: 'The indexOf() method is used to find the index of an element in an array in JavaScript.'
      },
      {
        id: 22,
        question: 'What is the purpose of the push() method in JavaScript?',
        option1: 'Remove an element from an array',
        option2: 'Add an element to the beginning of an array',
        option3: 'Sort the elements of an array',
        option4: 'Add an element to the end of an array',
        answer: 'Add an element to the end of an array',
        explanation: 'The push() method is used to add an element to the end of an array in JavaScript.'
      },
      {
        id: 23,
        question: 'What is the result of 5 + "5" in JavaScript?',
        option1: '10',
        option2: '55',
        option3: '25',
        option4: 'Error',
        answer: '55',
        explanation: 'In JavaScript, when you concatenate a string and a number, the result is a string. So, 5 + "5" equals "55".'
      },
      {
        id: 24,
        question: 'Which method is used to remove the first element from an array in JavaScript?',
        option1: 'shift()',
        option2: 'removeFirst()',
        option3: 'deleteFirst()',
        option4: 'unshift()',
        answer: 'shift()',
        explanation: 'The shift() method is used to remove the first element from an array in JavaScript.'
      },
      {
        id: 25,
        question: 'What does the "NaN" stand for in JavaScript?',
        option1: 'Not a Null',
        option2: 'New and Null',
        option3: 'Not a Number',
        option4: 'New and Number',
        answer: 'Not a Number',
        explanation: 'NaN stands for "Not a Number" in JavaScript and is a special value returned when a mathematical operation cannot be performed.'
      },
      {
        id: 26,
        question: 'What is the purpose of the map() method in JavaScript?',
        option1: 'Remove elements from an array',
        option2: 'Create a new array with the results of a function on each element',
        option3: 'Sort elements of an array',
        option4: 'Add elements to an array',
        answer: 'Create a new array with the results of a function on each element',
        explanation: 'The map() method is used to create a new array with the results of a function applied to each element of the original array.'
      },
      {
        id: 27,
        question: 'Which operator is used for exponentiation in JavaScript?',
        option1: '',
        option2: '^',
        option3: '^^',
        option4: '//',
        answer: '',
        explanation: 'The ** operator is used for exponentiation in JavaScript. For example, 2 ** 3 results in 8.'
      },
      {
        id: 28,
        question: 'What is the purpose of the pop() method in JavaScript?',
        option1: 'Remove the last element from an array',
        option2: 'Add elements to the end of an array',
        option3: 'Sort elements of an array',
        option4: 'Remove the first element from an array',
        answer: 'Remove the last element from an array',
        explanation: 'The pop() method is used to remove the last element from an array in JavaScript.'
      },
      {
        id: 29,
        question: 'What is the role of the window object in the browser environment?',
        option1: 'Represents the browser window',
        option2: 'Handles form submissions',
        option3: 'Manages the browser history',
        option4: 'Handles external APIs',
        answer: 'Represents the browser window',
        explanation: 'The window object represents the browser window and provides methods and properties for manipulating it.'
      },
      {
        id: 30,
        question: 'What is the purpose of the Object.keys() method in JavaScript?',
        option1: 'Sorts the keys of an object',
        option2: 'Returns an array of an object\'s own enumerable property names',
        option3: 'Adds new keys to an object',
        option4: 'Removes keys from an object',
        answer: 'Returns an array of an object\'s own enumerable property names',
        explanation: 'The Object.keys() method is used to return an array of an object\'s own enumerable property names.'
      },
      
      {
        id: 31,
        question: 'What is the purpose of the split() method in JavaScript?',
        option1: 'Joins two strings together',
        option2: 'Splits a string into an array of substrings',
        option3: 'Removes spaces from a string',
        option4: 'Reverses the characters of a string',
        answer: 'Splits a string into an array of substrings',
        explanation: 'The split() method is used to split a string into an array of substrings based on a specified delimiter.'
      },
      {
        id: 32,
        question: 'Which event is triggered when an element loses focus in JavaScript?',
        option1: 'onblur',
        option2: 'onfocusout',
        option3: 'onfocus',
        option4: 'onlostfocus',
        answer: 'onblur',
        explanation: 'The onblur event is triggered when an element loses focus in JavaScript.'
      },
      {
        id: 33,
        question: 'What is the purpose of the filter() method in JavaScript?',
        option1: 'Adds elements to an array',
        option2: 'Creates a new array with elements that pass a test',
        option3: 'Sorts elements of an array',
        option4: 'Removes elements from an array',
        answer: 'Creates a new array with elements that pass a test',
        explanation: 'The filter() method is used to create a new array with elements that pass a specified test function.'
      },
      {
        id: 34,
        question: 'Which keyword is used to declare a block scope variable in JavaScript?',
        option1: 'let',
        option2: 'var',
        option3: 'const',
        option4: 'block',
        answer: 'let',
        explanation: 'The let keyword is used to declare a block-scoped variable in JavaScript.'
      },
      {
        id: 35,
        question: 'What does the document.getElementById() method return in JavaScript?',
        option1: 'An HTML element',
        option2: 'A NodeList',
        option3: 'A string',
        option4: 'An object',
        answer: 'An HTML element',
        explanation: 'The document.getElementById() method returns an HTML element with the specified id.'
      },
      {
        id: 36,
        question: 'How do you add a comment in HTML?',
        option1: '<!-- This is a comment -->',
        option2: '// This is a comment',
        option3: '/** This is a comment */',
        option4: '# This is a comment',
        answer: '<!-- This is a comment -->',
        explanation: 'In HTML, comments are added using the <!-- ... --> syntax.'
      },
      {
        id: 37,
        question: 'What is the purpose of the slice() method in JavaScript?',
        option1: 'Adds elements to an array',
        option2: 'Creates a new array with elements that pass a test',
        option3: 'Removes elements from an array',
        option4: 'Extracts a section of an array and returns a new array',
        answer: 'Extracts a section of an array and returns a new array',
        explanation: 'The slice() method is used to extract a section of an array and return a new array without modifying the original array.'
      },
      {
        id: 38,
        question: 'Which operator is used for logical AND in JavaScript?',
        option1: '&&',
        option2: '||',
        option3: '!',
        option4: '&',
        answer: '&&',
        explanation: 'The && operator is used for logical AND in JavaScript. It returns true if both operands are true.'
      },
      {
        id: 39,
        question: 'What is the purpose of the reverse() method in JavaScript?',
        option1: 'Sorts elements of an array',
        option2: 'Reverses the order of elements in an array',
        option3: 'Adds elements to an array',
        option4: 'Removes elements from an array',
        answer: 'Reverses the order of elements in an array',
        explanation: 'The reverse() method is used to reverse the order of elements in an array.'
      },
      {
        id: 40,
        question: 'Which event is triggered when the page has finished loading in JavaScript?',
        option1: 'onload',
        option2: 'onready',
        option3: 'onfinish',
        option4: 'oncomplete',
        answer: 'onload',
        explanation: 'The onload event is triggered when the page has finished loading in JavaScript.'
      },
      {
        id: 41,
        question: 'What is the purpose of the concat() method in JavaScript?',
        option1: 'Joins two strings together',
        option2: 'Combines two arrays into a new array',
        option3: 'Splits a string into an array',
        option4: 'Removes elements from an array',
        answer: 'Combines two arrays into a new array',
        explanation: 'The concat() method is used to combine two arrays into a new array in JavaScript.'
      },
      {
        id: 42,
        question: 'How do you check if a variable is an array in JavaScript?',
        option1: 'isArray()',
        option2: 'typeofArray()',
        option3: 'isTypeArray()',
        option4: 'arrayCheck()',
        answer: 'isArray()',
        explanation: 'The isArray() method is used to check if a variable is an array in JavaScript.'
      },
      {
        id: 43,
        question: 'What is the purpose of the Math.random() method in JavaScript?',
        option1: 'Generates a random number between 0 and 1',
        option2: 'Rounds a number to the nearest integer',
        option3: 'Returns the value of pi',
        option4: 'Calculates the square root of a number',
        answer: 'Generates a random number between 0 and 1',
        explanation: 'The Math.random() method is used to generate a random number between 0 (inclusive) and 1 (exclusive) in JavaScript.'
      },
      {
        id: 44,
        question: 'Which method is used to replace text in a string in JavaScript?',
        option1: 'replaceText()',
        option2: 'swap()',
        option3: 'replaceAll()',
        option4: 'replace()',
        answer: 'replace()',
        explanation: 'The replace() method is used to replace text in a string in JavaScript.'
      },
      {
        id: 45,
        question: 'What is the purpose of the encodeURIComponent() function in JavaScript?',
        option1: 'Encodes a URI component',
        option2: 'Decodes a URI component',
        option3: 'Encodes HTML entities',
        option4: 'Decodes HTML entities',
        answer: 'Encodes a URI component',
        explanation: 'The encodeURIComponent() function is used to encode a URI component in JavaScript.'
      },
      {
        id: 46,
        question: 'Which keyword is used to break out of a loop in JavaScript?',
        option1: 'halt',
        option2: 'exit',
        option3: 'break',
        option4: 'stop',
        answer: 'break',
        explanation: 'The break keyword is used to break out of a loop in JavaScript.'
      },
      {
        id: 47,
        question: 'What is the purpose of the encodeURIComponent() function in JavaScript?',
        option1: 'Encodes a URI component',
        option2: 'Decodes a URI component',
        option3: 'Encodes HTML entities',
        option4: 'Decodes HTML entities',
        answer: 'Encodes a URI component',
        explanation: 'The encodeURIComponent() function is used to encode a URI component in JavaScript.'
      },
      {
        id: 48,
        question: 'Which method is used to sort elements in an array in JavaScript?',
        option1: 'sort()',
        option2: 'order()',
        option3: 'arrange()',
        option4: 'sequence()',
        answer: 'sort()',
        explanation: 'The sort() method is used to sort elements in an array in JavaScript.'
      },
      {
        id: 49,
        question: 'What is the purpose of the toFixed() method in JavaScript?',
        option1: 'Rounds a number to the nearest integer',
        option2: 'Formats a number with a specified number of digits after the decimal point',
        option3: 'Returns the value of pi',
        option4: 'Generates a random number between 0 and 1',
        answer: 'Formats a number with a specified number of digits after the decimal point',
        explanation: 'The toFixed() method is used to format a number with a specified number of digits after the decimal point in JavaScript.'
      },
      {
        id: 50,
        question: 'Which method is used to remove duplicates from an array in JavaScript?',
        option1: 'unique()',
        option2: 'distinct()',
        option3: 'removeDuplicates()',
        option4: 'filterDuplicates()',
        answer: 'filterDuplicates()',
        explanation: 'The filterDuplicates() method can be used to remove duplicates from an array in JavaScript.'
      },
    
      {
        id: 51,
        question: 'Which method is used to convert a string to lowercase in JavaScript?',
        option1: 'toLowerCase()',
        option2: 'lowerCase()',
        option3: 'convertToLower()',
        option4: 'caseToLower()',
        answer: 'toLowerCase()',
        explanation: 'The toLowerCase() method is used to convert a string to lowercase in JavaScript.'
      },
      {
        id: 52,
        question: 'What is the purpose of the Math.floor() method in JavaScript?',
        option1: 'Rounds a number up to the nearest integer',
        option2: 'Rounds a number down to the nearest integer',
        option3: 'Returns the decimal part of a number',
        option4: 'Generates a random number between 0 and 1',
        answer: 'Rounds a number down to the nearest integer',
        explanation: 'The Math.floor() method is used to round a number down to the nearest integer in JavaScript.'
      },
      {
        id: 53,
        question: 'Which method is used to add a class to an HTML element in JavaScript?',
        option1: 'addClass()',
        option2: 'appendClass()',
        option3: 'insertClass()',
        option4: 'setAttribute("class", "classname")',
        answer: 'setAttribute("class", "classname")',
        explanation: 'To add a class to an HTML element in JavaScript, you can use the setAttribute method to set the "class" attribute.'
      },
      {
        id: 54,
        question: 'What is the purpose of the Array.isArray() method in JavaScript?',
        option1: 'Adds elements to an array',
        option2: 'Checks if a variable is an array',
        option3: 'Sorts elements of an array',
        option4: 'Removes elements from an array',
        answer: 'Checks if a variable is an array',
        explanation: 'The Array.isArray() method is used to check if a variable is an array in JavaScript.'
      },
      {
        id: 55,
        question: 'Which event is triggered when the user scrolls the page in JavaScript?',
        option1: 'onscroll',
        option2: 'onmove',
        option3: 'onscrolling',
        option4: 'onpagechange',
        answer: 'onscroll',
        explanation: 'The onscroll event is triggered when the user scrolls the page in JavaScript.'
      },
      {
        id: 56,
        question: 'What is the purpose of the push() method in JavaScript?',
        option1: 'Remove an element from an array',
        option2: 'Add an element to the beginning of an array',
        option3: 'Sort the elements of an array',
        option4: 'Add an element to the end of an array',
        answer: 'Add an element to the end of an array',
        explanation: 'The push() method is used to add an element to the end of an array in JavaScript.'
      },
      {
        id: 57,
        question: 'How do you check if a JavaScript variable is undefined?',
        option1: 'isNull()',
        option2: 'isUndefined()',
        option3: 'typeof variable === "undefined"',
        option4: 'isEmpty()',
        answer: 'typeof variable === "undefined"',
        explanation: 'To check if a JavaScript variable is undefined, you can use the typeof operator and compare it to the string "undefined".'
      },
      {
        id: 58,
        question: 'What is the purpose of the innerHTML property in JavaScript?',
        option1: 'Gets or sets the HTML content of an element',
        option2: 'Gets the text content of an element',
        option3: 'Sets the CSS styles of an element',
        option4: 'Appends a new HTML element to the document',
        answer: 'Gets or sets the HTML content of an element',
        explanation: 'The innerHTML property is used to get or set the HTML content of an element in JavaScript.'
      },
      {
        id: 59,
        question: 'Which method is used to join elements of an array into a string in JavaScript?',
        option1: 'split()',
        option2: 'concat()',
        option3: 'join()',
        option4: 'merge()',
        answer: 'join()',
        explanation: 'The join() method is used to join elements of an array into a string in JavaScript.'
      },
      {
        id: 60,
        question: 'What does the localStorage object store data as in JavaScript?',
        option1: 'String',
        option2: 'Number',
        option3: 'Boolean',
        option4: 'Object',
        answer: 'String',
        explanation: 'The localStorage object stores data as strings in JavaScript.'
      },
      {
        id: 61,
        question: 'Which method is used to get the current date and time in JavaScript?',
        option1: 'getDate()',
        option2: 'currentTime()',
        option3: 'now()',
        option4: 'new Date()',
        answer: 'new Date()',
        explanation: 'The new Date() constructor is used to get the current date and time in JavaScript.'
      },
      {
        id: 62,
        question: 'What is the purpose of the encodeURIComponent() function in JavaScript?',
        option1: 'Encodes a URI component',
        option2: 'Decodes a URI component',
        option3: 'Encodes HTML entities',
        option4: 'Decodes HTML entities',
        answer: 'Encodes a URI component',
        explanation: 'The encodeURIComponent() function is used to encode a URI component in JavaScript.'
      },
      {
        id: 63,
        question: 'Which method is used to convert a string to a number in JavaScript?',
        option1: 'toNumber()',
        option2: 'parseInt()',
        option3: 'convertToNumber()',
        option4: 'numberify()',
        answer: 'parseInt()',
        explanation: 'The parseInt() method is used to convert a string to a number in JavaScript.'
      },
      {
        id: 64,
        question: 'What is the purpose of the isArray() method in JavaScript?',
        option1: 'Adds elements to an array',
        option2: 'Checks if a variable is an array',
        option3: 'Sorts elements of an array',
        option4: 'Removes elements from an array',
        answer: 'Checks if a variable is an array',
        explanation: 'The isArray() method is used to check if a variable is an array in JavaScript.'
      },
      {
        id: 65,
        question: 'How do you declare a constant variable in JavaScript?',
        option1: 'const',
        option2: 'let',
        option3: 'var',
        option4: 'constant',
        answer: 'const',
        explanation: 'The const keyword is used to declare constant variables in JavaScript.'
      },
      {
        id: 66,
        question: 'What is the result of "5" + 3 in JavaScript?',
        option1: '8',
        option2: '53',
        option3: '15',
        option4: 'Error',
        answer: '53',
        explanation: 'In JavaScript, when you concatenate a string and a number, the result is a string. So, "5" + 3 equals "53".'
      },
      {
        id: 67,
        question: 'Which method is used to remove the first element from an array in JavaScript?',
        option1: 'shift()',
        option2: 'removeFirst()',
        option3: 'deleteFirst()',
        option4: 'unshift()',
        answer: 'shift()',
        explanation: 'The shift() method is used to remove the first element from an array in JavaScript.'
      },
      {
        id: 68,
        question: 'What is the purpose of the parseFloat() method in JavaScript?',
        option1: 'Converts a string to an integer',
        option2: 'Converts a string to a floating-point number',
        option3: 'Rounds a number to the nearest integer',
        option4: 'Parses a string into an array',
        answer: 'Converts a string to a floating-point number',
        explanation: 'The parseFloat() method is used to convert a string to a floating-point number in JavaScript.'
      },
      {
        id: 69,
        question: 'Which method is used to check if a string starts with a specified substring in JavaScript?',
        option1: 'startsWith()',
        option2: 'beginWith()',
        option3: 'commenceWith()',
        option4: 'initiateWith()',
        answer: 'startsWith()',
        explanation: 'The startsWith() method is used to check if a string starts with a specified substring in JavaScript.'
      },
      {
        id: 70,
        question: 'What is the purpose of the continue statement in a loop in JavaScript?',
        option1: 'Exits the loop completely',
        option2: 'Skips the current iteration and continues with the next one',
        option3: 'Breaks out of the loop',
        option4: 'Starts a new loop',
        answer: 'Skips the current iteration and continues with the next one',
        explanation: 'The continue statement is used to skip the current iteration and continue with the next one in a loop in JavaScript.'
      },
      {
        id: 71,
        question: 'Which method is used to round a number to the nearest integer in JavaScript?',
        option1: 'round()',
        option2: 'ceil()',
        option3: 'floor()',
        option4: 'integer()',
        answer: 'round()',
        explanation: 'The round() method is used to round a number to the nearest integer in JavaScript.'
      },
      {
        id: 72,
        question: 'What is the purpose of the Math.max() method in JavaScript?',
        option1: 'Returns the maximum value of two numbers',
        option2: 'Generates a random number between 0 and 1',
        option3: 'Returns the maximum value of an array of numbers',
        option4: 'Returns the maximum value of three numbers',
        answer: 'Returns the maximum value of an array of numbers',
        explanation: 'The Math.max() method is used to return the maximum value of an array of numbers in JavaScript.'
      },
      {
        id: 73,
        question: 'Which method is used to remove an element from a specific index in an array in JavaScript?',
        option1: 'removeAtIndex()',
        option2: 'deleteAtIndex()',
        option3: 'splice()',
        option4: 'cut()',
        answer: 'splice()',
        explanation: 'The splice() method is used to remove an element from a specific index in an array in JavaScript.'
      },
      {
        id: 74,
        question: 'What is the purpose of the concat() method in JavaScript?',
        option1: 'Joins two strings together',
        option2: 'Combines two arrays into a new array',
        option3: 'Splits a string into an array',
        option4: 'Removes elements from an array',
        answer: 'Combines two arrays into a new array',
        explanation: 'The concat() method is used to combine two arrays into a new array in JavaScript.'
      },
      {
        id: 75,
        question: 'Which method is used to check if a string ends with a specified substring in JavaScript?',
        option1: 'endsWith()',
        option2: 'finishWith()',
        option3: 'terminateWith()',
        option4: 'completeWith()',
        answer: 'endsWith()',
        explanation: 'The endsWith() method is used to check if a string ends with a specified substring in JavaScript.'
      },
      {
        id: 76,
        question: 'What is the purpose of the Math.sin() method in JavaScript?',
        option1: 'Returns the sine of a number',
        option2: 'Generates a random number between 0 and 1',
        option3: 'Returns the cosine of a number',
        option4: 'Calculates the square root of a number',
        answer: 'Returns the sine of a number',
        explanation: 'The Math.sin() method is used to return the sine of a number in JavaScript.'
      },
      {
        id: 77,
        question: 'Which method is used to convert a number to a string in JavaScript?',
        option1: 'convertToString()',
        option2: 'toString()',
        option3: 'stringify()',
        option4: 'toText()',
        answer: 'toString()',
        explanation: 'The toString() method is used to convert a number to a string in JavaScript.'
      },
      {
        id: 78,
        question: 'What is the purpose of the includes() method in JavaScript?',
        option1: 'Adds elements to an array',
        option2: 'Creates a new array with elements that pass a test',
        option3: 'Checks if an array includes a specific element',
        option4: 'Removes elements from an array',
        answer: 'Checks if an array includes a specific element',
        explanation: 'The includes() method is used to check if an array includes a specific element in JavaScript.'
      },
      {
        id: 79,
        question: 'Which method is used to convert a string to a date object in JavaScript?',
        option1: 'toDate()',
        option2: 'convertToDate()',
        option3: 'stringToDate()',
        option4: 'new Date()',
        answer: 'new Date()',
        explanation: 'The new Date() constructor is used to convert a string to a date object in JavaScript.'
      },
      {
        id: 80,
        question: 'What is the purpose of the Math.abs() method in JavaScript?',
        option1: 'Returns the absolute value of a number',
        option2: 'Generates a random number between 0 and 1',
        option3: 'Returns the square root of a number',
        option4: 'Rounds a number to the nearest integer',
        answer: 'Returns the absolute value of a number',
        explanation: 'The Math.abs() method is used to return the absolute value of a number in JavaScript.'
      },
      
      {
        id: 81,
        question: 'Which method is used to get the length of an array in JavaScript?',
        option1: 'count()',
        option2: 'size()',
        option3: 'length()',
        option4: 'Array.length',
        answer: 'Array.length',
        explanation: 'The length property is used to get the length of an array in JavaScript.'
      },
      {
        id: 82,
        question: 'What is the purpose of the toLowerCase() method in JavaScript?',
        option1: 'Converts a string to uppercase',
        option2: 'Converts a string to lowercase',
        option3: 'Trims leading and trailing spaces',
        option4: 'Splits a string into an array',
        answer: 'Converts a string to lowercase',
        explanation: 'The toLowerCase() method is used to convert a string to lowercase in JavaScript.'
      },
      {
        id: 83,
        question: 'Which method is used to check if a variable is a function in JavaScript?',
        option1: 'isFunction()',
        option2: 'typeof function === "function"',
        option3: 'isCallable()',
        option4: 'functionCheck()',
        answer: 'typeof function === "function"',
        explanation: 'To check if a variable is a function, you can use the typeof operator and compare it to the string "function".'
      },
      {
        id: 84,
        question: 'What is the purpose of the JSON.stringify() method in JavaScript?',
        option1: 'Parses a JSON string',
        option2: 'Converts a JavaScript object to a JSON string',
        option3: 'Decodes a JSON string',
        option4: 'Encodes a JavaScript object',
        answer: 'Converts a JavaScript object to a JSON string',
        explanation: 'The JSON.stringify() method is used to convert a JavaScript object to a JSON-formatted string.'
      },
      {
        id: 85,
        question: 'Which method is used to get the current URL in JavaScript?',
        option1: 'document.location()',
        option2: 'window.currentURL()',
        option3: 'window.location.href',
        option4: 'getCurrentURL()',
        answer: 'window.location.href',
        explanation: 'The window.location.href property is used to get the current URL in JavaScript.'
      },
      {
        id: 86,
        question: 'What is the purpose of the toPrecision() method in JavaScript?',
        option1: 'Rounds a number to a specified number of decimal places',
        option2: 'Converts a number to a string with a specified precision',
        option3: 'Formats a number with a specified number of significant digits',
        option4: 'Trims leading and trailing spaces of a string',
        answer: 'Formats a number with a specified number of significant digits',
        explanation: 'The toPrecision() method is used to format a number with a specified number of significant digits in JavaScript.'
      },
      {
        id: 87,
        question: 'Which method is used to toggle between hiding and showing an HTML element in JavaScript?',
        option1: 'toggle()',
        option2: 'switch()',
        option3: 'display()',
        option4: 'visible()',
        answer: 'toggle()',
        explanation: 'The toggle() method is used to toggle between hiding and showing an HTML element in JavaScript.'
      },
      {
        id: 88,
        question: 'What is the purpose of the toExponential() method in JavaScript?',
        option1: 'Rounds a number to a specified number of decimal places',
        option2: 'Converts a number to a string in exponential notation',
        option3: 'Formats a number with a specified number of significant digits',
        option4: 'Generates a random number between 0 and 1',
        answer: 'Converts a number to a string in exponential notation',
        explanation: 'The toExponential() method is used to convert a number to a string in exponential notation in JavaScript.'
      },
      {
        id: 89,
        question: 'Which method is used to create a new array with the results of calling a provided function on every element in the array in JavaScript?',
        option1: 'map()',
        option2: 'filter()',
        option3: 'reduce()',
        option4: 'forEach()',
        answer: 'map()',
        explanation: 'The map() method is used to create a new array with the results of calling a provided function on every element in the array in JavaScript.'
      },
      {
        id: 90,
        question: 'What is the purpose of the Array.splice() method in JavaScript?',
        option1: 'Adds elements to an array',
        option2: 'Removes elements from an array and, if necessary, inserts new elements in their place',
        option3: 'Sorts elements of an array',
        option4: 'Concatenates two arrays',
        answer: 'Removes elements from an array and, if necessary, inserts new elements in their place',
        explanation: 'The splice() method is used to remove elements from an array and, if necessary, insert new elements in their place in JavaScript.'
      },
      {
        id: 91,
        question: 'Which method is used to create a shallow copy of an array in JavaScript?',
        option1: 'slice()',
        option2: 'copy()',
        option3: 'duplicate()',
        option4: 'clone()',
        answer: 'slice()',
        explanation: 'The slice() method is used to create a shallow copy of an array in JavaScript.'
      },
      {
        id: 92,
        question: 'What is the purpose of the Array.reduce() method in JavaScript?',
        option1: 'Adds elements of an array together',
        option2: 'Creates a new array with elements that pass a test',
        option3: 'Reduces the array to a single value by invoking a provided function for each element',
        option4: 'Sorts elements of an array',
        answer: 'Reduces the array to a single value by invoking a provided function for each element',
        explanation: 'The reduce() method is used to reduce the array to a single value by invoking a provided function for each element in JavaScript.'
      },
      {
        id: 93,
        question: 'Which method is used to remove all elements from an array in JavaScript?',
        option1: 'clear()',
        option2: 'removeAll()',
        option3: 'deleteAll()',
        option4: 'splice(0, array.length)',
        answer: 'splice(0, array.length)',
        explanation: 'To remove all elements from an array, you can use the splice(0, array.length) method in JavaScript.'
      },
      {
        id: 94,
        question: 'What is the purpose of the Array.filter() method in JavaScript?',
        option1: 'Adds elements to an array',
        option2: 'Removes elements from an array',
        option3: 'Creates a new array with elements that pass a test',
        option4: 'Sorts elements of an array',
        answer: 'Creates a new array with elements that pass a test',
        explanation: 'The filter() method is used to create a new array with elements that pass a test in JavaScript.'
      },
      {
        id: 95,
        question: 'Which method is used to convert a string to an array of substrings in JavaScript?',
        option1: 'split()',
        option2: 'cut()',
        option3: 'explode()',
        option4: 'substring()',
        answer: 'split()',
        explanation: 'The split() method is used to convert a string to an array of substrings in JavaScript.'
      },
      {
        id: 96,
        question: 'What is the purpose of the Array.every() method in JavaScript?',
        option1: 'Checks if at least one element of an array passes a test',
        option2: 'Checks if all elements of an array pass a test',
        option3: 'Adds elements of an array together',
        option4: 'Sorts elements of an array',
        answer: 'Checks if all elements of an array pass a test',
        explanation: 'The every() method is used to check if all elements of an array pass a test in JavaScript.'
      },
      {
        id: 97,
        question: 'Which method is used to add or remove elements from the beginning of an array in JavaScript?',
        option1: 'unshift()',
        option2: 'prepend()',
        option3: 'push()',
        option4: 'insert()',
        answer: 'unshift()',
        explanation: 'The unshift() method is used to add or remove elements from the beginning of an array in JavaScript.'
      },
      {
        id: 98,
        question: 'What is the purpose of the Array.indexOf() method in JavaScript?',
        option1: 'Finds the first occurrence of a specified element in an array',
        option2: 'Adds elements to an array',
        option3: 'Sorts elements of an array',
        option4: 'Removes elements from an array',
        answer: 'Finds the first occurrence of a specified element in an array',
        explanation: 'The indexOf() method is used to find the first occurrence of a specified element in an array in JavaScript.'
      },
      {
        id: 99,
        question: 'Which method is used to reverse the order of the elements in an array in JavaScript?',
        option1: 'reverse()',
        option2: 'flip()',
        option3: 'backwards()',
        option4: 'invert()',
        answer: 'reverse()',
        explanation: 'The reverse() method is used to reverse the order of the elements in an array in JavaScript.'
      },
      {
        id: 100,
        question: 'What is the purpose of the Array.some() method in JavaScript?',
        option1: 'Adds elements of an array together',
        option2: 'Checks if at least one element of an array passes a test',
        option3: 'Sorts elements of an array',
        option4: 'Checks if some elements of an array pass a test',
        answer: 'Checks if some elements of an array pass a test',
        explanation: 'The some() method is used to check if at least one element of an array passes a test in JavaScript.'
      },
    

  ];

  export default questionBank;