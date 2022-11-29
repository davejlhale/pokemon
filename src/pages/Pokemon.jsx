import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import Modal from 'react-modal'
Modal.setAppElement('#root');
const Pokemon = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
      console.log("close")
    }
  
    const [pokemonList, setPokemonList] = useState([]);
    const [apiPage, setApiPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiPage)
                const data = await response.json()
                setPokemonList(data.results);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [apiPage]);


    return (
        <div  className="App" id="app">
            {pokemonList.map((pokemon, index) => {
                return <PokeCard onClick={openModal} key={index} pokemon={pokemon} />
            })}
<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
        </div>
    )
}

export default Pokemon;






