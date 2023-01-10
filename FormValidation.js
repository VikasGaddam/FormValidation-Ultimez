import React,{useState} from 'react'

const FormValidation = () => {
    const [myName, setmyName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [decs, setDecs] = useState("")
    const [newEntry, setnewEntry] = useState([])

    // const myData =(e)=>{
    //     setmyName(e.target.value)

    // }


const submitData =(e)=>{
    e.preventDefault()
    if(myName && mobile && email && password && decs){

  
    const newData = {myName,mobile,email,password,decs};
    setnewEntry([...newEntry,newData])
    setmyName("");
    setMobile("");
    setEmail("");
    setPassword("");
    setDecs("");
}else{
    alert("Please fill the above form");
}




}


  return (
        <>
        <div className="container text-center text-white bg-dark" >
            <form onSubmit={submitData}>
                <div>
                    <input type="text" placeholder='ProductName' value={myName} onChange={(e)=>setmyName(e.target.value)} className='w-50 my-3 py-1'/>
                </div>
                <div>
                    <input type="text" placeholder='OriginalPrice' value={mobile} onChange={(e)=>setMobile(e.target.value)} className='w-50 my-3 py-1' />
                </div>
                <div>
                    <input type="text" placeholder='SalePrice' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-50 my-3 py-1' />
                </div>
                <div>
                    <input type="text" placeholder='ProductType' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-50 my-3 py-1' />
                </div>
                <div>
                    <input type="text" placeholder='Description' value={decs} onChange={(e)=>setDecs(e.target.value)} className='w-50 my-3 py-1' />
                </div>
                <button className='btn btn-light mb-2' type='submit'> Submit</button>
            </form>
        </div>
        </>
  )
}

export default FormValidation