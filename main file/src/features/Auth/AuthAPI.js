// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new  Promise(async(resolve) =>{
    const res=await fetch("http://localhost:8080/users",{
      method:'POST',
      body: JSON.stringify(userData),
      headers:{'content-type': 'application/json'}
    });
    const data=await res.json()
    resolve({data})
})
}


export function updateUser(update) {
  return new  Promise(async(resolve) =>{
    const res=await fetch("http://localhost:8080/users/"+update.id,{
      method:'PATCH',
      body: JSON.stringify(update),
      headers:{'content-type': 'application/json'}
    });
    const data=await res.json()
    resolve({data})
})
}


export function checkUser(loginInfo) {
  const email=loginInfo.email
  const password=loginInfo.password
  return new  Promise(async(resolve,reject) =>{
    const res=await fetch("http://localhost:8080/users?email="+email);
    const data=await res.json()

    console.log(data);
    if(data.length){
      if(password===data[0].password){
        resolve({data:data[0]})
        console.log(data);
      }else{
        reject({message:"Wrong Password"})
      }
    }
    else{
      reject({message:"User not found"})
    }
})
}
