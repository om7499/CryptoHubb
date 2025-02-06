import React,{useState} from 'react'
import useNewsService from '../hooks/useNewsService'
import { NavLink } from 'react-router-dom';

const News = () => {
   // State for category selection
   const [category, setCategory] = useState('entertainment');
   // fetching the news from api
   //let category="entertainment"
   const {news,isloading,isError}=useNewsService(category);

  // Handle category change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

   if(isloading){
     return <h3>loading...</h3>
   }
   if(isError){
     return <h3>error..</h3>
   }
  return (
    <>
     {/* Category Selector */}
     <div className="mb-3">
     <label className="form-label"><strong>Select News Category:</strong></label>
     <select className="form-select" value={category} onChange={handleCategoryChange}>
       <option value="entertainment">Entertainment</option>
       <option value="sports">Sports</option>
       <option value="technology">Technology</option>
       <option value="business">Business</option>
       <option value="health">Health</option>
     </select>
   </div>

    {/* all news Section */}
    <div className='row gy-2'>
    {
      news.map((n)=>(
        <div className='col-lg-6 'key={n.publishedAt}>
          <div className='d-flex justify-content-center align-content-center' >
          <div>
            <div className="card shadow border border-primary" >
            <div>
               <img src={n.image} className='img-fluid my-3 mx-auto'style={{height:"300px"}} alt="" />
               </div>
              </div>
              <div className='p-3'>
                    <h2 >{n.title.slice(0,40)}...</h2>
                    <p>
                      <span className='text-primary'><i className="bi bi-calendar-day-fill"></i> {n.publishedAt}</span>
                      <span className='mx-3 text-primary'><i className="bi bi-chat-fill"></i> 2 Comments</span>
                      {/* <span className='text-primary'><i className="bi bi-person-fill"></i> Nine Theme</span> */}
                    </p>
                    <div className=''>
                      <p>{n.description.slice(0,130)}...
                      </p>
                      <button className='btn btn-outline-primary '><NavLink to={n.url} className="nav-link">Read more➡️</NavLink> </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
      ))
    }
  </div>

  </>
  )
}

export default News
