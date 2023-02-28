# User Transaction Sorter   
  Count the number of points from a given customer on a rewards program


  ## Project Use
  User routes given in /src/mockApi/mockApi.js: 
  users/all => all user's info
  users/id => one user's info by id

  useTransactions hook found in /src/hooks/useTransactions generates a map of user data with an array of transactions along with their number of points. this is called anywhere we need the user info
  NOTE: create either new hook or optional id arg for the useTransaction hook

  src/App.js contains the view logic. simply click on a user's info to filter it from the responses, allowing for more individual views as well.