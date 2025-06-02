import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className="secondaryText">
                    Our vision is to create spaces that empower <br/> individuals and families, making every property a <br/> place where they can truly thrive and feel at home.
                </span>
            </div>
            <div className='flexColStart f-right'>
                <span className="primaryText">Information</span>
                <span className='secondaryText'>Weymouth Street, Bethesda, Maryland, USA</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer