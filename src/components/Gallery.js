import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Gallery = () => {
  const [names, setNames] = useState([]);

  //   // useEffect(() => {
  //   //   fetch("postgres://localhost:5432/pets")
  //   //     .then((response) => response.json())
  //   //     .then((data) => setNames(data))
  //   //     console.log(names)
  //   //     .catch((error) => console.error("Error fetching names:", error));
  //   // }, []);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch(`http://localhost:3000/pets`);

  //       const resData = await response.json();

  //       setNames(resData);
  //     };

  //     fetchData();
  //   }, []);
  //   return (
  //     <div>
  //       <h1>Name List</h1>
  //       <p></p>
  //       <ul>
  //         {names.map(
  //           (name) => console.log(name)
  //           // <li key={index}>{name.name}</li>
  //         )}
  //       </ul>
  //       {/* no .map CSS driven gallery*/}
  //       <div class="AllPets">
  //         <div class="pet">
  //           <img
  //             // img hook here
  //             alt="Cat"
  //             class="petPic"
  //           />
  //           <a href="" class="Name">
  //             {/* Their name as a clickable link, pet id hook goes above in href */}
  //             {/* pet name hook goes here */}
  //           </a>
  //           <h2 class="line2">{/* Their weight or age hook can go here */}</h2>
  //         </div>
  //         <div class="pet">
  //           <img
  //             // img hook here
  //             alt="Cat"
  //             class="petPic"
  //           />
  //           <a href="" class="Name">
  //             {/* Their name as a clickable link, pet id hook goes above in href */}
  //             {/* pet name hook goes here */}
  //           </a>
  //           <h2 class="line2">{/* Their weight or age hook can go here */}</h2>
  //         </div>
  //         <div class="pet">
  //           <img
  //             // img hook here
  //             alt="Cat"
  //             class="petPic"
  //           />
  //           <a href="" class="Name">
  //             {/* Their name as a clickable link, pet id hook goes above in href */}
  //             {/* pet name hook goes here */}
  //           </a>
  //           <h2 class="line2">{/* Their weight or age hook can go here */}</h2>
  //         </div>
  //         <div class="pet">
  //           <img
  //             // img hook here
  //             alt="Cat"
  //             class="petPic"
  //           />
  //           <a href="" class="Name">
  //             {/* Their name as a clickable link, pet id hook goes above in href */}
  //             {/* pet name hook goes here */}
  //           </a>
  //           <h2 class="line2">{/* Their weight or age hook can go here */}</h2>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Gallery;

  //no .map bootstrap driven gallery
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/pets`);

      const resData = await response.json();

      setNames(resData);
    };

    fetchData();
  }, []);

  return (
    <div style={{ margin: "auto" }}>
      <Container style={{ marginTop: "50px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row>
            {/* image hook goes in src below */}
            <Col xs=".5">
              <Image
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src=""
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>{/* name hook*/}</h5>
              <p>{/* age or weight hook*/}</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            {/* image hook goes in src below */}
            <Col xs=".5">
              <Image
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src=""
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>{/* name hook*/}</h5>
              <p>{/* age or weight hook*/}</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            {/* image hook goes in src below */}
            <Col xs=".5">
              <Image
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src=""
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>{/* name hook*/}</h5>
              <p>{/* age or weight hook*/}</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            {/* image hook goes in src below */}
            <Col xs=".5">
              <Image
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src=""
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>{/* name hook*/}</h5>
              <p>{/* age or weight hook*/}</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            {/* image hook goes in src below */}
            <Col xs=".5">
              <Image
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src=""
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bold" }}>{/* name hook*/}</h5>
              <p>{/* age or weight hook*/}</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Gallery;
