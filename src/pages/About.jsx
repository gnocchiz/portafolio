
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="red-gradient_text font-semibold drop-shadow"> Luka </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Ik ben een enthousiaste student die
onlangs naar Nederland ben gekomen
om als persoon te groeien en om het
land leren kennen. Nu ben ik bezig met
de opleiding mbo4
softwareontwikkelaar.
Ik kijk ernaar uit om in de toekomst te
werken als programmeur in een
uitdagende en inspirerende omgeving.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        
        <div className="mt-16 flex flex-wrap gap-12">
        <img src="../html.png" alt="HTML" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
          <img src="../public/css.png" alt="CSS" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
          <img src="../public/js.png" alt="JavaScript" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
          <img src="../public/react.png" alt="React" style={{ maxWidth: '100px', maxHeight: '80px',marginTop:'18px' }}/>
        </div>

      </div>
    </section>
  )
}

export default About
