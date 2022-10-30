import './profile.css'
import  temple from'../../assets/temple.jpg'

const Profile = () => {
  return (
    <section id='profile'>
        <img src={temple} alt="temple" id='profile__img'/>
        <h4 id='twitter'><a href="https://twitter.com/temple_snowden" target="_blank" rel="noopener noreferrer">Temple_Snowden</a></h4>
        <p id='slack'>Temple</p>
    </section>
  )
}

export default Profile