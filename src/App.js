import './App.css';
import Card from './Components/Card.js'

function App() {
  return (
    <div className="App">
      <Card
        imgSrc="https://picsum.photos/300/200"
        alt="Card Image"
        title="Card Title"
        description="This is the card description. You can add more details about the card here."
        buttonText="Learn More"
        link="cardPage"
      />
      <Card
        imgSrc="https://picsum.photos/300/200"
        alt="Card Image"
        buttonText="Learn More"
        link="cardPage"
      />
      <Card
        alt="Card Image"
        title="Card Title"
        description="This is the card description. You can add more details about the card here."
        buttonText="Learn More"
        link="cardPage"
      />
      <Card
        imgSrc="https://picsum.photos/300/200"
        alt="Card Image"
        title="Card Title"
        buttonText="Learn More"
        link="cardPage"
      />
    </div>
  );
}

export default App;
