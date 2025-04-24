import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Show = styled.div`
  .language-toggle {
    /* position: "fixed";
   top:"10px";
   right: "10px";  */
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-right: 40px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  padding: 60px 90px;
  font-family: Arial, sans-serif;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Heading = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkgreen};
  /* margin-top: 80px; */
`;

const Subheading = styled.h2`
  color: ${({ theme }) => theme.colors.yellow};
  margin-top: 50px;
`;

const Description = styled.p`
  text-align: justify;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Urdu = styled.section`
  direction: rtl;
  text-align: right;
`;

const English = styled.section``;

export default function BacterialPrecautions() {
  const [isUrdu, setIsUrdu] = useState(false);

  const handleToggleLanguage = () => {
    setIsUrdu((prevIsUrdu) => !prevIsUrdu);
  };
  return (
    <>
      <Show>
        <div className="language-toggle">
          <label
            htmlFor="language-switch"
            style={{
              marginRight: "8px",
              fontSize: "20px",
              fontWeight: "500px",
              // backgroundColor: '#6d8c54',
              color: "black",
              // padding: '8px 12px',
              // borderRadius: '20px',
              cursor: "pointer",
            }}
          >
            <span>{isUrdu ? "தமிழ்" : "English"}</span>
          </label>
          <Switch
            id="language-switch"
            onChange={handleToggleLanguage}
            checked={isUrdu}
            onColor="#6d8c54" 
            offColor="#f1cf69" 
            checkedIcon={false}
            uncheckedIcon={false} 
            height={24} 
            width={55}
          />
        </div>
      </Show>

      <English style={{ display: isUrdu ? "none" : "block" }}>
        <Container>
          <Heading>Cotton Bacterial Blight (படிவி பாக்டீரியா நோய்)</Heading>
          <Description>
            <strong>Description:</strong> Cotton Bacterial Blight is a plant
            disease caused by the bacterium Xanthomonas citri subsp.
            malvacearum. It primarily affects cotton plants and can result in
            significant yield losses and economic damage for cotton farmers.
            <Subheading>Symptoms:</Subheading>
            Cotton Bacterial Blight may exhibit the following symptoms:
          </Description>
          <List>
            <ListItem>Angular water-soaked lesions on leaves.</ListItem>
            <ListItem>Lesions surrounded by yellow halos.</ListItem>
            <ListItem>Wilting and browning of infected leaves.</ListItem>
            <ListItem>Dark streaks on stems and veins.</ListItem>
            <ListItem>Bacterial ooze on lesions under high humidity.</ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton Bacterial Blight is caused by the bacterium Xanthomonas citri
          subsp. malvacearum. The disease can spread through infected seeds,
          plant debris, contaminated tools, and wind-driven rain or irrigation
          water.
          <Subheading>Impact on Crops:</Subheading>
          Cotton Bacterial Blight can lead to substantial yield losses, reduced
          fiber quality, and increased production costs for farmers due to the
          need for disease management and control measures.
          <Subheading>Prevention and Management:</Subheading>
          To prevent and manage Cotton Bacterial Blight, consider implementing
          the following strategies:
          <List>
            <ListItem>
              <strong>1. Use Disease-Free Seeds:</strong> Plant certified
              disease-free cotton seeds to avoid introducing the pathogen to
              your fields.
            </ListItem>
            <ListItem>
              <strong>2. Crop Rotation:</strong> Practice crop rotation with
              non-host plants to break the disease cycle and reduce the buildup
              of the pathogen in the soil.
            </ListItem>
            <ListItem>
              <strong>3. Sanitation:</strong> Remove and destroy infected plant
              debris to minimize the spread of the bacteria.
            </ListItem>
            <ListItem>
              <strong>4. Avoid Overhead Irrigation:</strong> Use drip or furrow
              irrigation methods instead of overhead irrigation to reduce water
              splashing and bacterial spread.
            </ListItem>
            <ListItem>
              <strong>5. Copper-Based Fungicides:</strong> Copper-based
              fungicides can help suppress the spread of the disease when
              applied preventively or at the first sign of symptoms.
            </ListItem>
            <ListItem>
              <strong>6. Antibiotics:</strong> Streptomycin and Kasugamycin are
              antibiotics that can be used for controlling bacterial diseases in
              cotton. Follow the recommended application guidelines and be
              cautious about antibiotic resistance.
            </ListItem>
            <ListItem>
              <strong>7. Resistant Varieties:</strong> Consider planting cotton
              varieties that are resistant to Cotton Bacterial Blight, where
              available.
            </ListItem>
            <ListItem>
              <strong>8. Weather Monitoring:</strong> Be vigilant during periods
              of high humidity and rain, as these conditions favor disease
              development. Adjust management practices accordingly during such
              periods.
            </ListItem>
          </List>
          <Subheading>Fertilizers:</Subheading>
          <Description>
            Cotton crops may benefit from the following fertilizers:
          </Description>
          <List>
            <ListItem>
              Muriate of Potash: Provides potassium, which is essential for
              overall plant health and helps improve drought tolerance.
            </ListItem>
            <ListItem>
              Potassium Nitrate: Supplies potassium, which supports overall
              plant health and helps plants withstand stressors.
            </ListItem>
          </List>
          <Subheading>Pesticides:</Subheading>
          <Description>
            Consider using the following pesticides to manage Cotton Bacterial
            Blight:
          </Description>
          <List>
            <ListItem>
              Copper-Based Fungicides: Copper-based fungicides can help suppress
              the spread of the disease when applied preventively or at the
              first sign of symptoms.
            </ListItem>
            <ListItem>
              Streptomycin: An antibiotic that can be used to control bacterial
              diseases in cotton. Follow the recommended application guidelines.
            </ListItem>
            <ListItem>
              Kasugamycin: Another antibiotic effective against bacterial
              pathogens in cotton. Use as directed.
            </ListItem>
          </List>
          <Subheading>Consultation:</Subheading>
          <p>
            For severe outbreaks or specific recommendations, consult with
            agricultural experts or local extension services for appropriate
            pesticide use and management practices.
          </p>
          <Subheading>Adherence to Safety Guidelines:</Subheading>
          <p>
            Always adhere to local regulations and safety guidelines regarding
            the use of fertilizers and pesticides.
          </p>
          <p>
            When handling and applying fertilizers and pesticides, use personal
            protective equipment (PPE) and follow proper application techniques.
          </p>
          <p>
            Following recommended application rates and timings is crucial to
            avoid negative effects on the environment and non-target organisms.
            Consult with agricultural experts or local extension services for
            proper usage guidelines and safety precautions.
          </p>
        </Container>
      </English>
      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container> 
      <Heading>பருத்தி பாக்டீரியா ப்ளைட் (Cotton Bacterial Blight)</Heading>  
          <Description>  
            <strong>விளக்கம்:</strong> பருத்தி பாக்டீரியா ப்ளைட் என்பது Xanthomonas citri subsp. malvacearum என்ற பாக்டீரியாவால் ஏற்படும் ஒரு தாவர நோயாகும். இது குறிப்பாக பருத்தி செடிகளை பாதிக்கிறது மற்றும் பருத்தி விவசாயிகளுக்கு பெரும் இழப்புகளையும் பொருளாதார சேதத்தையும் ஏற்படுத்தக்கூடியது.  
            <Subheading>அறிகுறிகள்:</Subheading>  
            பருத்தி பாக்டீரியா ப்ளைட் பின்வரும் அறிகுறிகளைக் கொண்டிருக்கலாம்:  
          </Description>  
          <List>  
            <ListItem>இலைகளில் கோணவடிவ நீர்மையுள்ள கொப்புளங்கள்.</ListItem>  
            <ListItem>கொப்புளங்களைச் சுற்றி மஞ்சள் வளையங்கள்.</ListItem>  
            <ListItem>பாதிக்கப்பட்ட இலைகள் வாடி பழுப்பு நிறமாதல்.</ListItem>  
            <ListItem>தண்டுகள் மற்றும் நரம்புகளில் கருப்பு கோடுகள்.</ListItem>  
            <ListItem>அதிக ஈரப்பதத்தில் பாக்டீரியா பிசின் வெளியீடு.</ListItem>  
          </List>  
          <Subheading>காரணங்கள்:</Subheading>  
          பருத்தி பாக்டீரியா ப்ளைட் Xanthomonas citri subsp. malvacearum என்ற பாக்டீரியாவால் ஏற்படுகிறது. இந்த நோய் பாதிக்கப்பட்ட விதைகள், தாவர எச்சங்கள், மாசுபட்ட கருவிகள் மற்றும் காற்று மூலம் பரவும் மழை அல்லது பாசன நீர் மூலம் பரவலாம்.  
          <Subheading>தாவரங்களில் விளைவுகள்:</Subheading>  
          பருத்தி பாக்டீரியா ப்ளைட் பருத்தி உற்பத்தியில் குறைப்பு, நார்த்தரம் குறைதல் மற்றும் நோய் மேலாண்மை மற்றும் கட்டுப்பாட்டு நடவடிக்கைகளின் தேவை காரணமாக விவசாயிகளுக்கு அதிக பொருளாதார சுமையை ஏற்படுத்துகிறது.  
          <Subheading>தடுப்பு மற்றும் மேலாண்மை:</Subheading>  
          பருத்தி பாக்டீரியா ப்ளைட் எதிர்ப்பிற்கு பின்வரும் முறைகளைப் பின்பற்றவும்:  
          <List>  
            <ListItem>  
              <strong>1. நோயற்ற விதைகளைப் பயன்படுத்துதல்:</strong> நோயற்ற பருத்தி விதைகளை நடவு செய்யவும், இதனால் பாக்டீரியா செடிகளில் நுழையாது.  
            </ListItem>  
            <ListItem>  
              <strong>2. பயிர் சுழற்சி:</strong> பருத்தி அல்லாத பயிர்களுடன் சுழற்சி முறையைப் பின்பற்றவும். இது நோய் சுழற்சியை முறித்து மண்ணில் பாக்டீரியா அளவைக் குறைக்கும்.  
            </ListItem>  
            <ListItem>  
              <strong>3. சுத்தம்:</strong> பாதிக்கப்பட்ட செடிகள் மற்றும் எச்சங்களை அகற்றவும். இது பாக்டீரியா பரவலைக் குறைக்கும்.  
            </ListItem>  
            <ListItem>  
              <strong>4. மேலிருந்து பாசனம் தவிர்த்தல்:</strong> நீர்த்தெளிப்பு பாசனத்தைத் தவிர்த்து, சொட்டு அல்லது அகழி பாசன முறைகளைப் பயன்படுத்தவும்.  
            </ListItem>  
            <ListItem>  
              <strong>5. மேம்பாடு:</strong> புதிய மற்றும் மேம்பட்ட வகைகளைப் பயன்படுத்தவும்.  
            </ListItem>  
            <ListItem>  
              <strong>6. சரியான நிலத்தைத் தேர்ந்தெடுத்தல்:</strong> பருத்தி நோய்களுக்கு எதிர்ப்புத் திறன் கொண்ட நிலங்களைத் தேர்ந்தெடுக்கவும்.  
            </ListItem>  
          </List>  
          <Subheading>உரங்கள் மற்றும் பூச்சிக்கொல்லிகள்:</Subheading>  
          பருத்தி பாக்டீரியா ப்ளைட் எதிர்ப்பிற்கான உரங்கள் மற்றும் பூச்சிக்கொல்லிகள்:  
          <Description>  
            <strong>உரங்கள்:</strong>  
            <List>  
              <ListItem>  
                பொட்டாசியம் மூரியேட்: பொட்டாசியம் குறைபாட்டை நிவர்த்தி செய்யும் குறிப்பிட்ட உரம்.  
              </ListItem>  
              <ListItem>  
                பொட்டாசியம் நைட்ரேட்: பொட்டாசியத்தை வழங்கும் திறனுள்ள உரம்.  
              </ListItem>  
            </List>  
          </Description>  
          <Description>  
            <strong>பூச்சிக்கொல்லிகள்:</strong>  
            <List>  
              <ListItem>  
                மெடிக்கோபாக்ஸ் அல்லது காப்பராக்சிக்ளோரைட்: பாக்டீரியா பிசின் எதிர்ப்பிற்கான பூச்சிக்கொல்லி.  
              </ListItem>  
              <ListItem>  
                ஸ்ட்ரெப்டோமைசின்: பாக்டீரியா எதிர்ப்பிற்கான மற்றொரு பூச்சிக்கொல்லி.  
              </ListItem>  
              <ListItem>  
                காஸுகமைசின்: பாக்டீரியா எதிர்ப்பிற்கான மற்றொரு பயனுள்ள பூச்சிக்கொல்லி.  
              </ListItem>  
            </List>  
          </Description>  
          <Subheading>பருத்தி பாக்டீரியா ப்ளைட் விரைவில் கண்டறிதல்:</Subheading>  
          <List>  
            <ListItem>  
              நோய் தென்படும்போதே மெடிக்கோபாக்ஸ், ஸ்ட்ரெப்டோமைசின் அல்லது காஸுகமைசின் போன்ற பூச்சிக்கொல்லிகளைப் பயன்படுத்தவும். விரைவான தலையீடு பாக்டீரியா பரவலைத் தடுக்கும்.  
            </ListItem>  
          </List>  
          <Subheading>கடுமையான பருத்தி பாக்டீரியா ப்ளைட் பாதிப்பு:</Subheading>  
          <List>  
            <ListItem>  
              கடுமையான பாதிப்பு ஏற்பட்டால், விவசாய வல்லுநர்களுடன் தொடர்பு கொள்ளவும். அவர்கள் பொருத்தமான முறையான மற்றும் தொடர்பு பூச்சிக்கொல்லிகளைப் பரிந்துரைக்கலாம்.  
            </ListItem>  
          </List>  
          <Subheading>பொருள் மேலாண்மை மற்றும் பயிர் சுழற்சி வழிமுறைகள்:</Subheading>  
          <List>  
            <ListItem>  
              பயிர் சுழற்சி முறைகளைப் பின்பற்றி நோய் சுழற்சியை முறிக்கவும்.  
            </ListItem>  
            <ListItem>  
              பொருட்களை சரியாகப் பயன்படுத்துவதும் பாதுகாப்பு முன்னெச்சரிக்கைகளைக் கடைப்பிடிப்பதும் முக்கியம். விவசாய வல்லுநர்களின் ஆலோசனையைப் பெறவும்.  
            </ListItem>  
          </List>  
        </Container>  
      </Urdu>
    </>
  );
}
