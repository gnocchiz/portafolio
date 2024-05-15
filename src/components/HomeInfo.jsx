import { Link } from "react-router-dom";


const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-white py-4 px-8 text-black mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 red-gradient_text'>Luka</span>
        👋
        <br />
        A Web Developer from the Netherlands
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Studied on my own and in school, <br /> picked up many skills along the way
        </p>

        <Link to='/about' className=' neo-btn'>
          Learn more
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to gain experience. <br /> Curious about it?
        </p>

        <Link to='/projects' className=' neo-btn'>
          Visit my portfolio
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need someone young and with potential? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-btn'>
        Let's talk
        
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;