const headers = {
  "Content-Type": "application/json",
  // "Authorization": "Bearer " + process.env.APIKEY,
}

export const handler = async (event) => {
  const response = await fetch('https://www.amazon.com', 
    {
      "method": "GET", //can be POST
      "headers" : headers, 
      // body: JSON.stringify({. //include body information with POST request
      //   "key": value})
    })
    
  const output = await response.text() //.json();
  console.log(output)
  console.log('response: ', output)
  
  // return response to Connect
  // needs to be key/value pairs
  return {
    result: output
  }
};
