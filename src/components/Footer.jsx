import './Footer.scss'

function Footer() {
  return (
    <div className="footer-c">
        <img src="public/Sitco_Logo_White.png" alt="" />

        <div>
            <p>950 Denison Street, Unit 17, Markham, Ontario, L3R 3K5, Canada</p>
            <div className='footer-links-c'>
                <p><b>Tel:</b> 905.475.6544</p>
                <p><b>Fax:</b> 905.475.6684</p> 
                <p><b>Email:</b> info@sitco.ca</p>
            </div>
        </div>
        
        <p>© 2024 SITCO Precision Machining Company Ltd. All Rights Reserved.</p>
    </div>
  )
}

export default Footer