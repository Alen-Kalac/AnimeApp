import './index.scss'
import AboutCard from './AboutCard'

function AboutUsPage() {
 
  return (
    <>
    <div className='about-us-full-page'>
      <div className="container">
       <div>
       <AboutCard 
       img={'https://avatars.githubusercontent.com/u/117202634?v=4'}
       name='Demir Subasic'
       miniDescription="React Developer"
       description='Demir works in center NIT as a Web developer.'
       instaLink={'https://www.instagram.com/subasic01_/'}
       gitLink={'https://github.com/demirsubasic2001'}
       linkedLink={'https://www.linkedin.com/in/demir-subasic-711b1b270/'}
       />
       </div>

       <div>
       <AboutCard 
       img={'https://avatars.githubusercontent.com/u/117202256?v=4'}
       name='Alen Kalac'
       miniDescription="React Developer"
       description='Alen works in center NIT as a Web developer.'
       instaLink={'https://www.instagram.com/alenkalac/'}
       gitLink={'https://github.com/Alen-Kalac'}
       linkedLink={'https://www.linkedin.com/in/alen-kala%C4%8D-40339a286/'}
       />
       </div>


       <div>
       <AboutCard 
       img={'https://avatars.githubusercontent.com/u/119134550?v=4'}
       name='Edin Mavric'
       miniDescription="React Developer"
       description='Edin works in center NIT as a Web developer.'
       instaLink={'https://www.instagram.com/edin.mavric/'}
       gitLink={'https://github.com/edinmavric'}
       linkedLink={'https://www.linkedin.com/in/edin-mavric-926116265/'}
       />
       </div>
      </div>
      <div className="under-container">
      <div>
       <AboutCard 
       img={'https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.18169-9/13254514_134836966931374_9221669805065892780_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vhcbK-liebQAX8ZYTnH&_nc_ht=scontent.fbeg1-1.fna&oh=00_AfBm-cS04WWMI7GlxGtsIxUhMBSuVWodXfVWkpnQYMGk9w&oe=64FA140D'}
       name='Umer Sacirovic'
       miniDescription="React Developer"
       description='Umer works in center NIT as a Web developer.'
       instaLink={'https://www.instagram.com/'}
       gitLink={'https://github.com/umersacirovic2006'}
       linkedLink={'https://www.linkedin.com/in/umer-sacirovic-569698275/'}
       />
       </div>

       <div>
       <AboutCard 
       img={'https://avatars.githubusercontent.com/u/121257473?v=4'}
       name='Ensar Vragic'
       miniDescription="React Developer"
       description='Ensar works in center NIT as a Web developer.'
       instaLink={'https://www.instagram.com/'}
       gitLink={'https://github.com/ensarvragic'}
       linkedLink={'https://www.linkedin.com/in/ensar-vragic-073aa9263/'}
       />
       </div>
      </div>
    </div>
    </>
  )
}

export default AboutUsPage
