import React, {useState} from 'react';


const Pets = ({pet}) => {

  const [vaccinated, setVaccinated] = useState(pet.isVaccinated)
  const [res, setRes] = useState(true)

  function submit() {
    setVaccinated(prevVaccinated => !prevVaccinated)
    setRes(false)
    

    fetch('/api/pets/', {
    method: 'POST',
    headers: {
      'Accept': 'application=json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: pet.name,
      isVaccinated: !vaccinated,
    })

    })
    .then(response => setRes(true))
    .catch(error => setRes(false))
  }

  return (
    <div className="Pet">
      <p>{pet.animal}</p>
      <p className="petName">{pet.name} is vaccinated:</p>
      <p>
        {vaccinated ? 'true' : 'false'}
        </p>
   
      <button onClick={() => (submit())} className="button">button</button>
      
    </div>
  )
}

export default Pets
