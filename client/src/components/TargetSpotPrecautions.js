import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Show = styled.div`
  .language-toggle {
    display: flex;
    justify-content: flex-start;  /* Align to the left */
    margin-top: 30px;
    margin-left: 40px;  /* Adjust margin for left alignment */
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
  direction: ltr;  /* Change from rtl to ltr for left-to-right text */
  text-align: left;  /* Align text to the left for Tamil/English */
`;


const English = styled.section``;

export default function TargetSpotPrecautions() {
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
            onColor="#6d8c54" // Customize the color when the switch is on
            offColor="#f1cf69" // Customize the color when the switch is off
            checkedIcon={false} // Hide the checked (on) icon
            uncheckedIcon={false} // Hide the unchecked (off) icon
            height={24} // Set the height of the switch
            width={55}
          />
        </div>
      </Show>

      <English style={{ display: isUrdu ? "none" : "block" }}>
        <Container>
          <Heading>Cotton Target Spot Disease</Heading>
          <Description>
            <strong>Description:</strong> Cotton Target Spot Disease is a fungal
            infection that affects cotton plants. The disease causes circular
            lesions with a distinct target-like appearance on the leaves,
            leading to reduced plant health and yield loss.
          </Description>
          <Subheading>Symptoms:</Subheading>
          The following symptoms are characteristic of Cotton Target Spot
          Disease:
          <List>
            <ListItem>
              Circular lesions on cotton leaves with concentric rings.
            </ListItem>
            <ListItem>Yellowing of leaves surrounding the lesions.</ListItem>
            <ListItem>Leaf defoliation in severe cases.</ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton Target Spot Disease is caused by the fungal pathogens of the
          genus <em>Corynespora</em>. The disease spreads through spores and can
          survive in plant debris and soil.
          <Subheading>Impact on Crops:</Subheading>
          The disease can lead to reduced photosynthetic capacity, premature
          defoliation, and ultimately, decreased cotton yield.
          <Subheading>Prevention and Management:</Subheading>
          To manage and control Cotton Target Spot Disease, consider the
          following strategies:
          <List>
            <ListItem>
              <strong>1. Crop Rotation:</strong> Practice crop rotation to
              reduce the build-up of disease pathogens in the soil.
            </ListItem>
            <ListItem>
              <strong>2. Fungicide Application:</strong> Apply fungicides
              containing Triadimefon, Pyraclostrobin, or Azoxystrobin as per
              recommended guidelines to protect plants from infection.
            </ListItem>
            <ListItem>
              <strong>3. Sanitation:</strong> Remove and destroy infected plant
              debris to prevent the spread of the disease.
            </ListItem>
            <ListItem>
              <strong>4. Proper Irrigation:</strong> Avoid overhead irrigation,
              as wet leaves can promote disease development. Use drip irrigation
              if possible.
            </ListItem>
            <ListItem>
              <strong>5. Resistant Varieties:</strong> Plant cotton varieties
              that have shown resistance or tolerance to Target Spot Disease.
            </ListItem>
            <ListItem>
              <strong>6. Monitoring:</strong> Regularly monitor cotton fields
              for any signs of the disease to implement timely control measures.
            </ListItem>
          </List>
          <Subheading>Fertilizers:</Subheading>
          <List>
            <ListItem>
              Calcium Nitrate: Supplies calcium, an essential nutrient that can
              enhance plant tolerance to certain diseases.
            </ListItem>
            <ListItem>
              Calcium Ammonium Nitrate: Provides a balanced combination of
              calcium and nitrogen to support overall plant health.
            </ListItem>
          </List>
          <Subheading>Pesticides:</Subheading>
          <List>
            <ListItem>
              Triadimefon: A systemic fungicide effective against various fungal
              diseases, including Target Spot Disease.
            </ListItem>
            <ListItem>
              Pyraclostrobin: A broad-spectrum fungicide that provides
              preventive and curative control against fungal pathogens.
            </ListItem>
            <ListItem>
              Azoxystrobin: A fungicide known for its preventive and curative
              properties against foliar diseases in cotton.
            </ListItem>
          </List>
          <Subheading>Weather and Environmental Considerations:</Subheading>
          <List>
            <ListItem>
              Adjust the timing and rates of fungicide applications based on
              weather conditions. Avoid applications during periods of heavy
              rain to prevent wash-off and ensure better efficacy.
            </ListItem>
          </List>
          <Subheading>Local Regulations and Safety:</Subheading>
          <p>
            Always follow local regulations and safety guidelines regarding the
            use of fertilizers and pesticides.
          </p>
          <p>
            Use personal protective equipment (PPE) and proper application
            techniques when handling and applying fertilizers and pesticides.
          </p>
          <p>
            It is essential to follow the recommended application rates and
            timings to avoid any negative effects on the environment and
            non-target organisms. Consult with agricultural experts or local
            extension services for proper usage guidelines and safety
            precautions.
          </p>
        </Container>
      </English>
      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container>
  <Heading>பட்டா குறிச்சொல் நோய் (Cotton Target Spot Disease)</Heading>
  <Description>
    <strong>விளக்கம்:</strong> பட்டா குறிச்சொல் நோய் என்பது பரிதவிப்பான ஒரு தொற்றுநோய் ஆகும், இது பட்டா செடிகளை பாதிக்கும். இந்த நோய் இலைகளில் மைய சுற்றுகளுடன் வட்டமான காயங்களை உருவாக்குகிறது, இதனால் செடியின் ஆரோக்கியம் குறையும் மற்றும் உற்பத்தியில் நஷ்டம் ஏற்படுகிறது.
  </Description>
  <Subheading>அறிகுறிகள்:</Subheading>
  பட்டா குறிச்சொல் நோயின் தனித்துவமான அறிகுறிகள் பின்வருமாறு உள்ளன:
  <List>
    <ListItem>இலைகளில் மைய சுற்றுகளுடன் வட்டமான காயங்கள்.</ListItem>
    <ListItem>காயங்களின் சுற்றியுள்ள பகுதிகளில் இலைகளின் மஞ்சள் நிறம்.</ListItem>
    <ListItem>அரிதான நிலையில், இலைகள் உருண்டுவிடுகின்றன.</ListItem>
  </List>
  <Subheading>காரணங்கள்:</Subheading>
  பட்டா குறிச்சொல் நோய், கீழ்காணும் வகையான பரிதவிப்புள்ள பிள்ளைகள் (பூஞ்சிகள்) காரணமாக ஏற்படுகிறது. இந்த நோய் பூஞ்சிகளின் துணையால் பரவுகிறது மற்றும் செடிகளின் இலைகளிலும் நிலத்திலும் நீண்ட காலம் இருக்கும்.
  <Subheading>செடியின் பாதிப்புகள்:</Subheading>
  இந்த நோய் செடிகளின் கதிர்வாயின் திறனைக் குறைத்து, இலைகளை சிதைக்குமென்று மற்றும் இறுதியில் பட்டா உற்பத்தியில் குறைபாடுகளை ஏற்படுத்த முடியும்.
  <Subheading>பரிகாசமும் மேலாண்மையும்:</Subheading>
  பட்டா குறிச்சொல் நோயை கட்டுப்படுத்துவதற்கான நடவடிக்கைகள் பின்வருமாறு உள்ளன:
  <List>
    <ListItem>
      <strong>1. பயிர் பரிமாற்றம்:</strong> நிலத்தில் நோயின் பிள்ளைகளின் பாதிப்புகளை குறைக்க பயிர் பரிமாற்றம் செய்யவும்.
    </ListItem>
    <ListItem>
      <strong>2. பூஞ்சிகொல்லி பரிகாசம்:</strong> டிராடிமிஃபான், பைராக்ளோஸ்டர்பின் அல்லது ஐசோக்ஸ்டிராபின் போன்ற பூஞ்சிகொல்லி மருந்துகளை பயன்படுத்தி செடிகளை தொற்றிலிருந்து பாதுகாப்பது.
    </ListItem>
    <ListItem>
      <strong>3. சுத்தம் செய்யும் நடவடிக்கைகள்:</strong> நோயுள்ள செடியின் பகுப்புகளை அகற்றி நோயின் பரவலைத் தடுப்பது.
    </ListItem>
    <ListItem>
      <strong>4. சரியான நீர்ப்பாசனம்:</strong> சூரிய ஒளியில் நீர்ப்பாசனம் தவிர்த்து, பின் நீர்ப்பாசனம் அல்லது டிரிப் நீர்ப்பாசனம் பயன்படுத்தவும்.
    </ListItem>
    <ListItem>
      <strong>5. எதிர்ப்பு வகைகள்:</strong> பட்டா குறிச்சொல் நோயை எதிர்க்கும் திறன் அல்லது பொறுமை கொண்ட பட்டா வகைகளை தேர்ந்தெடுக்கவும்.
    </ListItem>
    <ListItem>
      <strong>6. கண்காணிப்பு:</strong> பட்டா தளம் உள்ள நோயின் அறிகுறிகள் அல்லது பாதிப்புகளை அடிக்கடி பரிசோதித்து, உடனடியாக கட்டுப்பாட்டு நடவடிக்கைகள் மேற்கொள்ளவும்.
    </ListItem>
  </List>
  <Subheading>உரங்கள்:</Subheading>
  <List>
    <ListItem>
      கல்சியம் நைட்ரேட்: கல்சியத்தை வழங்கி, சில நோய்களுக்கு எதிராக செடிகளின் பாதுகாப்பு திறனை அதிகரிக்க உதவும்.
    </ListItem>
    <ListItem>
      கல்சியம் அமோனியம் நைட்ரேட்: கல்சியம் மற்றும் நைட்ரஜனைச் சேர்த்திருக்கும் உரம், செடிகளின் முழு ஆரோக்கியத்தை ஆதரிக்கும்.
    </ListItem>
  </List>
  <Subheading>பூச்சிக்கொல்லி பரிகாசம்:</Subheading>
  <List>
    <ListItem>
      டிராடிமிஃபான்: பட்டா குறிச்சொல் நோய் உட்பட பல பூஞ்சிகொல்லி நோய்களுக்கு எதிராக பயனுள்ள பூஞ்சிகொல்லி.
    </ListItem>
    <ListItem>
      பைராக்ளோஸ்டர்பின்: பரந்த பரப்பில் பயன்படும் பூஞ்சிகொல்லி, இது பூஞ்சிகளுக்கு எதிராக முன்னறிவிப்பு செய்கின்றது.
    </ListItem>
    <ListItem>
      ஐசோக்ஸ்டிராபின்: பட்டாவில் உள்ள இலை நோய்களுக்கு எதிராக முன்னறிவிப்பு மற்றும் சிகிச்சை வழிகாட்டும் பூஞ்சிகொல்லி.
    </ListItem>
  </List>
  <Subheading>காலநிலை மற்றும் சுற்றுச்சூழல் காரணிகள்:</Subheading>
  <List>
    <ListItem>
      காலநிலை மாற்றங்களைப் பொறுத்து, பூஞ்சிகொல்லி பரிகாசங்கள் செய்யப்படும் நேரமும் நிலவும் வெப்பநிலையும் பொருந்தும்படி அமைக்கவும். மழை அதிகமாக இருந்தால் பரிகாசங்களை தவிர்க்கவும்.
    </ListItem>
  </List>
  <Subheading>உள்ளூர் ஒழுங்குகள் மற்றும் பாதுகாப்பு நடவடிக்கைகள்:</Subheading>
  <p>
    பூச்சிக்கொல்லி மற்றும் வேதியியல் பூச்சிக்கொல்லி பயன்படுத்துவதற்கான உள்ளூர் ஒழுங்குகள் மற்றும் பாதுகாப்பு நடைமுறைகளை பின்பற்றுவது அவசியம்.
  </p>
  <p>
    பூச்சிக்கொல்லி மற்றும் வேதியியல் பூச்சிக்கொல்லியை கையாளும் போது, தனிப்பட்ட பாதுகாப்பு உபகரணங்கள் (பிபிஇ) மற்றும் சரியான பயன்பாட்டு தொழில்நுட்பங்களை பயன்படுத்தவும்.
  </p>
  <p>
    சுற்றுச்சூழலும், மற்றவர்கள் மீது நேர்மறை பாதிப்புகளைத் தவிர்க்கும் வகையில், அனைத்து பரிகாச முறைமைகளையும் பின்பற்றவும். பரிகாச முறைமைகள் மற்றும் பாதுகாப்பு வழிமுறைகள் குறித்து விவசாய ஆலோசகர் அல்லது உள்ளூர் விரிவாக்க சேவைகளுடன் ஆலோசிக்கவும்.
  </p>
</Container>

      </Urdu>
    </>
  );
}
