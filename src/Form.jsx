
import { useDispatch,useSelector } from 'react-redux'
import { fetchData,addData } from './redux/AddformSlice'



const Form = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state)=>state.form.data)
  const loading = useSelector((state)=>state.form.loading)
  const returnedData = useSelector((state)=>state.form.returnedData)
  const handleChange = (e)=>{
     const {name,value} = e.target
     dispatch(addData({...formData,[name]:value}))
  }

  const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(fetchData(formData))
  }  

  
  
  return (
    <div className='bg-danger p-5 d-flex justify-content-center' style={{height:"100px" , width:"200px"}}>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={formData.name} onChange={handleChange} />
        <input type="number" name='age' value={formData.age} onChange={handleChange} />
        <input type="email" name='email' value={formData.email} onChange = {handleChange} />
        <button type='submit'>submit</button>
      </form>
      {
        !loading && returnedData &&
        <div>
          <h1>{returnedData.name}</h1>
          <h2>{returnedData.age}</h2>
          <h3>{returnedData.email}</h3>
        </div>
      }
    </div>
  )
}

export default Form