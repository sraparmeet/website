import React from 'react'
import SubHeader from '../SubHeader.jsx';

// Service Components Folder will consist files that are services sub sections links.
// For Example, this super visa is the sub section link of Services Section
// I have created only one for reference 

const Supervisa = () => {
  return (
    <>
    {/* Subheader is used because it will show this service name on the top of background image */}
    <SubHeader />
      <section className='services-sub-section'>
        <h2>Heading - XYZ</h2>    
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit amet nisl non justo malesuada fermentum. Donec eget felis dolor. Suspendisse condimentum vestibulum ex ac cursus.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit amet nisl non justo malesuada fermentum. Donec eget felis dolor. Suspendisse condimentum vestibulum ex ac cursus. Nam pharetra viverra efficitur. Sed pellentesque luctus arcu, quis finibus nibh luctus mattis. Vivamus diam turpis, pellentesque vel magna sit amet, sollicitudin efficitur tortor. Etiam ornare lacinia iaculis. Cras nec dui eu nibh pharetra condimentum. Vestibulum ultrices sapien vitae arcu varius volutpat. Integer rhoncus a massa ut aliquam. Sed aliquet, nibh non dictum ullamcorper, orci arcu posuere tortor, vitae ultrices nulla tortor nec sapien. Vestibulum ac nibh at leo maximus molestie.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit amet nisl non justo malesuada fermentum. Donec eget felis dolor. Suspendisse condimentum vestibulum ex ac cursus. Nam pharetra viverra efficitur. Sed pellentesque luctus arcu, quis finibus nibh luctus mattis. Vivamus diam turpis, pellentesque vel magna sit amet, sollicitudin efficitur tortor. Etiam ornare lacinia iaculis. Cras nec dui eu nibh pharetra condimentum.</p>
      </section>
    </>
  )
}

export default Supervisa
