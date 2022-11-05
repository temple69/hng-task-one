import './links.css'
import { Link } from 'react-router-dom'
const Links = () => {
  return (
    <ul>
        <li><a href="https://twitter.com/temple_snowden" id='twitter'>Twitter Link</a></li>
        <li><a href="https://training.zuri.team/" id="btn__zuri">Zuri Link</a></li>
        <li><a href="http://books.zuri.team" id="books">Zuri Books</a></li>
        <li><a href="https://books.zuri.team/python-for-beginners?ref_id=temple" id="book__python">Python Books</a></li>
        <li><a href="https://background.zuri.team" id="pitch">Background Check For Coders</a></li>
        <li><a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a></li>
        <li><Link to="contact" id='contact'>Contact Me</Link></li>
    </ul>
  )
}

export default Links