# Student Gradebook

A quick demonstration of a student gradebook.

### Prerequisites

Node.js is required.

### Install Dependencies

Install Project Dependencies

```
npm install
```

The app relies on JSON Server to provide a mock API.

```
npm install -g json-server
```

### Run the Application

Start the mock API.

```
json-server db.json --watch
```

Start the app.

```
npm start
```
View the app at [http://localhost:8000](http://localhost:8000).

### Running Unit Tests

```
npm test
```

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```