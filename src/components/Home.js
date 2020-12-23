import facebook from '../images/social-media-icons/facebook.png'
import instagram from '../images/social-media-icons/instagram.png'
import youtube from '../images/social-media-icons/youtube.png'

const Home = () => {
  return (
    <div className='home' id='home'>
      <h1 className='name'>Stratashi</h1>
      <div className='social-media'>
        <a href='https://www.facebook.com/stratashi' target="_blank" rel='noreferrer'><img src={facebook} alt='facebook' /></a>
        <a href='' target="_blank" rel='noreferrer'><img src={instagram} alt='instagram' /></a>
        <a href='https://www.youtube.com/user/Stratashi/featured' target="_blank" rel='noreferrer'><img src={youtube} alt='youtube' /></a>
      </div>
    </div>
  )
};

export default Home;