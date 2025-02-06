import React from 'react'
import { Avatar, List,Divider, Typography  } from 'antd';
import { NavLink } from 'react-router-dom';
import News from '../components/news/componets/News';
//import News from '../components/news/componets/News';
const commentdata = [
  {
    title: 'JohnDoe23 –',
    description :"Great insights! I’ve been following the crypto market for a while, and your analysis is spot on. Keep up the good work!"
  },
  {
    title: 'BlockchainGeek –',
    description:"This article really helped me understand the latest trends. Do you think Bitcoin will hit a new all-time high this year?"
  },
  {
    title: 'HodlMaster – ',
    description :"I appreciate the detailed breakdown. Can you cover more on emerging altcoins in your next post?"
  },
  {
    title: 'DeFiExplorer –',
    description:"Awesome read! I’ve been thinking about investing in Ethereum—would love your thoughts on its long-term potential"
  },
  {
    title: 'SatoshiFan –',
    description:"Finally, a blog that explains crypto without all the complicated jargon. Thanks for making it easy to understand!"
  },
];

const Categoriesdata = [
  'entertainment',
  'sports',
  'technology',
  'business',
  'health',
  'Bitcoin (4)',
  'Blockchain (2)',
  'Blokchain (1)',
  'Cryptocurrency (1)',
  'ICO (1)',
  'News (1)',
  'Uncategorized (1)'
];

const Archivesdata = [
  'October 2018',
  'September 2018',
  
];

const metadata = [
  'Log in',
  'Entries feed',
  'Comments feed',
  'WordPress.org'
];

const Blog = () => {
  return (
    <>
       {/* Hero section */}
    <div className='py-5 shadow bordr border-bottom border-info'>
      <div className="absolute inset-0 left-0 right-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="text-center relative z-10 px-4">
        <p className="text-4xl fw-bold mb-3 text-info fs-1">Welcome to Blog's</p>
        <p className="text-lg mb-4">Stay updated with the latest trends in Blockchain, Cryptocurrency, and ICOs.</p>
        <NavLink to="/blog" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
          <button className='btn btn-outline-info'>Explore Articles</button>
        </NavLink>
      </div>
    </div>
    
    <div className='container mt-3 mb-5'> 
       <div className='row bg-white rounded-2 py-4'>
            {/* News start */}
          <div  className='col-12 col-sm-12 col-md-8 col-lg-8 border'>
             <News/>
          </div>

            {/* Recent comment section */}
          <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
          <div className=' p-4'>
            <h3>Recent Comments</h3>
          <List
            itemLayout="horizontal"
            dataSource={commentdata}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
          </div>
          <div className='px-4'>
          <h3>Categories</h3>
            <div className='my-3'>
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={Categoriesdata}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
            </div> 
          </div>

          <div className='px-4'>
          <h3>Archives</h3>
            <div className='my-3'>
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={Archivesdata}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
            </div> 
          </div>

          </div>

         
       </div>
    </div>
    </>
  )
}

export default Blog
