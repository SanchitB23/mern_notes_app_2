let variables;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  variables = {
    baseURL: 'http://localhost:8080/'
  }
} else {
  // production code
  variables = {
    baseURL: 'http://localhost:8080/'
  }
}

export default variables
