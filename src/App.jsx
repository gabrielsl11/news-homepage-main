import logo from './images/logo.svg'
import imageWeb3 from './images/image-web-3-desktop.jpg'
import imageGamingGrowth from './images/image-gaming-growth.jpg'
import imageRetroPcs from './images/image-retro-pcs.jpg'
import imageTopLaptops from './images/image-top-laptops.jpg'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const onMenuClick = () => {
    setMenuOpen(!menuOpen)
  };

  return (
    <>
      <nav>
        <img className='logo' src={logo} alt='Logo' />
        <Menu onClick={onMenuClick} className='menu' />
        <ul className={menuOpen ? 'nav open' : 'nav'} >
          <li><a href='/'>Home</a></li>
          <li><a href='/'>New</a></li>
          <li><a href='/'>Popular</a></li>
          <li><a href='/'>Trending</a></li>
          <li><a href='/'>Categories</a></li>
          <X onClick={onMenuClick} size={32} className={menuOpen ? 'x open' : 'x'} />
        </ul>
      </nav>

      <main>
        <div className='main'>
          <img src={imageWeb3} alt='Image' />

          <div>
            <h1>The Bright Future of Web 3.0?</h1>

            <div>
              <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>

        <div className='new'>
          <h1>New</h1>
          <div className='new-item'>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <hr />

          <div className='new-item'>
            <h2>The Downsides of AI Artistry</h2>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>

          <hr />

          <div className='new-item'>
            <h2>Is VC Funding Drying Up?</h2>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>

        <div className='more'>
          <div>
            <img src={imageRetroPcs} alt='Image' />
            <div>
              <h3>01</h3>
              <h4>Reviving Retro PCs</h4>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div>
            <img src={imageTopLaptops} alt='Image' />
            <div>
              <h3>02</h3>
              <h4>Top 10 Laptops of 2022</h4>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div>
            <img src={imageGamingGrowth} alt='Image' />
            <div>
              <h3>03</h3>
              <h4>The Growth of Gaming</h4>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
