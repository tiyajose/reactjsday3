import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';
function App() {


  var districts = [ 
    {
      "id":1,
    "title":"kasargod",
    "Decsription" : "Kasaragod is known as the land of gods, forts, rivers, hills and beautiful beaches. The fort at Bekal is the largest and best preserved in the State",
  "img":"./img/kasaragodmap.jpg"  
},
 {
  "id":2,
  "title":"Kannur",
  "Decsription": "Kannur was an important trading center in the 12th century with active business connections with Persia and Arabia. It served as the British military headquarters on India's west coast until 1887.",
"img":"/img/kanr.jpg",

},
{
"id" : 3,
"title" :"kozhikode",
"Decsription":"Kozhikode is the largest urban area in the state and 195th largest urban area in the world. During classical antiquity and the Middle Ages, Kozhikode was dubbed the “City of Spices” for its role as the major trading point of Eastern spices.",
"img": "/img/kozhikode.gif"
},
{
  "id" : 4,
"title" :"Wayanad",
"Decsription":"Historians are of the view that organised human life existed in these parts, at least ten centuries before Christ. Countless evidences about New Stone Age civilisation can be seen on the hills of Wayanad.",
"img": "/img/WYD.jpg"
},
{"id" : 5,
"title" :"Malappuram",
"Decsription":" In earlier times, Malappuram was the head quarters of European and British troops and later it became the head quarters of the Malabar Special Police (M.S.P). This place has still the ruins of an ancient fort built by Tippu Sultan.",
"img": "/img/kozhikode.gif"
},
{"id" : 6,
"title" :"Palakkad",
"Decsription":"Palakkad is famous for the ancient Palakkad Fort, which is in the heart of the city and was captured and rebuilt by Hyder Ali in 1766. The city is about 347 kilometres (216 mi) northeast of the state capital, Thiruvananthapuram.",
"img": "/img/Palakkad.jpg"
},

{
  "id" : 7,
"title" :"Thrissur",
"Decsription":"Thrissur is known as the cultural capital of Kerala, and the land of Poorams. The district is known for its ancient temples, churches, and mosques.",
"img": "https://images.moneycontrol.com/static-mcnews/2020/04/Thrissur-Pooram-770x433.jpg?impolicy=website&width=770&height=431f"
},

];



  return (
   

    <Container>
      <Alert.Heading>DISTRICTS OF KERALA</Alert.Heading>
        <Row>
          {
            districts.map((districts,index)=>{
              return(

        
        <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
   <CloseButton aria-label="Hide" />
      <Card.Img variant="top" src={districts.img}/>
      <Card.Body>

      
        <Card.Title>{districts.title}</Card.Title>
        <Card.Text>{districts.Decsription}
        </Card.Text>
        
        <Button variant="primary">click!</Button>
     </Card.Body>
    </Card>
    </Col>
              )
            }
            )
          }
    </Row>
    </Container>
  );
}

export default App;