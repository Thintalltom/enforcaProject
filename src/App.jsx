
import Navbar from './components/Navbar/Navbar'
import BannerBody from './components/BannerBody/BannerBody'
import Slider from './components/Slider/Slider'
import GrandLayout from './components/GrandLayout'
import LandBanner from './components/LandBanner/LandBanner'
import Services from './components/Services/Services'
import Footer from './components/footer/Footer'

function App() {

  return (
 <GrandLayout>
    <BannerBody />
    <Slider />
    <LandBanner />
    <Services />
    <Footer />
 </GrandLayout>
  )
}

export default App
