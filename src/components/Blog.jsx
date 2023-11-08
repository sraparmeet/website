import React from 'react'
import SubHeader from './SubHeader.jsx'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
    <SubHeader/>
    <section className="blog-content">
        <div className="row">
        <div className="blog-left">
            <h2>Heading - XYZ</h2>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit amet nisl non justo malesuada fermentum. Donec eget felis dolor. Suspendisse condimentum vestibulum ex ac cursus.</p>
            
            <img src={require("../images/blog-home.jpg")}/>
            {/* Photo by Kindel Media: https://www.pexels.com/photo/couple-standing-in-front-of-their-house-7579042/ */}
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit amet nisl non justo malesuada fermentum. Donec eget felis dolor. Suspendisse condimentum vestibulum ex ac cursus. Nam pharetra viverra efficitur. Sed pellentesque luctus arcu, quis finibus nibh luctus mattis. Vivamus diam turpis, pellentesque vel magna sit amet, sollicitudin efficitur tortor. Etiam ornare lacinia iaculis. Cras nec dui eu nibh pharetra condimentum. Vestibulum ultrices sapien vitae arcu varius volutpat. Integer rhoncus a massa ut aliquam. Sed aliquet, nibh non dictum ullamcorper, orci arcu posuere tortor, vitae ultrices nulla tortor nec sapien. Vestibulum ac nibh at leo maximus molestie.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit amet nisl non justo malesuada fermentum. Donec eget felis dolor. Suspendisse condimentum vestibulum ex ac cursus. Nam pharetra viverra efficitur. Sed pellentesque luctus arcu, quis finibus nibh luctus mattis. Vivamus diam turpis, pellentesque vel magna sit amet, sollicitudin efficitur tortor. Etiam ornare lacinia iaculis. Cras nec dui eu nibh pharetra condimentum.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit amet nisl non justo malesuada fermentum. Donec eget felis dolor. Suspendisse condimentum vestibulum ex ac cursus. Nam pharetra viverra efficitur. Sed pellentesque luctus arcu.</p>
        </div>
            
        <div className="blog-right">
            
            
            <h3>Blogs</h3>
            <div>
                <Link to="#"><span>Super Visa Insurance</span></Link>
            </div>
            <div>
                <span>RRSP (Registered Retirement Savings Plans)</span>
            </div>
            <div>
                <span>RESP (Registered Education Savings Plans)</span>
            </div>
            <div>
                <span>Life Insurance</span>
            </div>
            <div>
                <span>Disability Insurance</span>
            </div>
            <div>
                <span>Mortgage Insurance</span>
            </div>
            <div>
                <span>Critical Illness Insurance</span>
            </div> 
            </div>    
        </div>
    </section>
      
    </>
  )
}

export default Blog
