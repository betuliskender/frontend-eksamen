const api = "http://localhost:3000/"
// Husk at Endpoint variabel skal slutte på "/" Eksempel: restaurants/

export const ApiGet = async (endpoint, setState) => {
  try {
    const data = await fetch( api + endpoint)
    const json = await data.json()
    
    setState(json)    
  } 
  catch (error) {
    console.error(error)
  }
}

export const ApiPut = async (endpoint, onChange, obj) => {
  try {
    const options = makeOptions("PUT", obj)
    const data = await fetch(api + endpoint + obj.id, options)
    const json = await data.json()
    
    onChange()        
  } 
  catch (error) {
    console.error(error)
  }
}

export const ApiPost = async (endpoint, onChange, obj) => {
  try {
    const options = makeOptions("POST", obj)
    const data = await fetch(api + endpoint, options)
    const json = await data.json()
    
    onChange()    
  } 
  catch (error) {
    console.error(error)
  }
}

export const ApiDelete = async (endpoint, onChange, obj) => {
  try {    
    const options = makeOptions("DELETE")
    const data = await fetch(api + endpoint + obj.id, options)
    const json = await data.json()
    
    onChange()    
  } 
  catch (error) {
    console.error(error)
  }
}

function makeOptions(method, body) {
    const opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
  }