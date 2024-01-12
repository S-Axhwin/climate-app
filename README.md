API calls 
Create a var which contains the url of the api
Inside useEffect Hook create a async function and fetch the date from app using fetch method inside the async function by await keyword to wait for the promise to happened by the fetch method
	●	after the function call check the date by login in the console
	●	after the function call, call another function fetchDate outside the function
	●	pass an empty arr so that the function is called only when the page gets reloaded not when some state changes
	●	the promise returned by the api is not json so to convert the result i.e promise returned by the fetch method by <promise>.json()
	●	even through if we log the promise we get the promise only not in json formate.
	●	so basically the log should happened after the json object is created so the syntax goes like
   			result.json().then(json => { log(json)})
