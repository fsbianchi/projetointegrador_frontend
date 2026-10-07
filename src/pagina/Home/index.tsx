import '../../stylo_css/stylo.css'
import Post from '../../componentes/Post';

function Home() {
    return(
        <div>            
            <div className='home-master'>
                <div className='home-post'>
                    <input type="text" placeholder='O QUE VOCÊ ESTÁ PENSANDO?' />
                    <button className='btn-postar'>POSTAR</button>
                </div>

            </div>


            <div className='home-detalhes'>

                <Post />
                <Post />
                <Post />
                
                

            </div>
            
   
            
        </div>
    )
}
export default Home;
