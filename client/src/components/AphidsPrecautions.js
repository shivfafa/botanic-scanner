import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Show = styled.div`
  .language-toggle {
    /* position: "fixed";
   top:"10px";
   right: "10px";  */
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    margin-left: 40px;
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

export default function AphidsPrecautions() {
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
          <Heading>Cotton Aphids  (பட்டை பறிக்கக்கூடிய பூச்சிகள்)
          </Heading>
          <Description>
            <strong>Description:</strong> Cotton aphids (Aphis gossypii), also
            known as melon aphids, are small sap-sucking insects that infest
            cotton plants. They can rapidly reproduce and colonize cotton
            fields, causing damage to the plants and affecting their overall
            health and productivity.
            <Subheading>Symptoms:</Subheading>
            Infestation of cotton aphids can lead to the following symptoms:
          </Description>
          <List>
            <ListItem>Yellowing and curling of leaves.</ListItem>
            <ListItem>Stunted growth and reduced plant vigor.</ListItem>
            <ListItem>
              Formation of honeydew, a sticky substance, on the leaves.
            </ListItem>
            <ListItem>Premature leaf drop.</ListItem>
            <ListItem>Distorted or deformed cotton bolls.</ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton aphids infest cotton plants to feed on their sap, which can
          weaken the plants and make them susceptible to other diseases and
          environmental stressors.
          <Subheading>Impact on Crops:</Subheading>
          Cotton aphids can cause significant damage to cotton crops, leading to
          reduced yield and economic losses for farmers.
          <Subheading>Prevention and Management:</Subheading>
          To manage and control cotton aphids, consider the following
          strategies:
          <List>
            <ListItem>
              <strong>1. Monitoring:</strong> Regularly inspect cotton fields
              for signs of aphid infestations. Early detection allows for timely
              intervention.
            </ListItem>
            <ListItem>
              <strong>2. Natural Predators:</strong> Encourage the presence of
              natural aphid predators, such as ladybugs and lacewings, to help
              control aphid populations.
            </ListItem>
            <ListItem>
              <strong>3. Reflective Mulch:</strong> Use reflective mulch around
              cotton plants to deter aphids from settling on the plants.
            </ListItem>
            <ListItem>
              <strong>4. Neem Oil:</strong> Apply neem oil, a natural
              insecticide, to control aphid populations. Follow the recommended
              application guidelines.
            </ListItem>
            <ListItem>
              <strong>5. Resistant Varieties:</strong> Consider planting cotton
              varieties that are resistant to aphid infestations.
            </ListItem>
            <ListItem>
              <strong>6. Insecticidal Soaps:</strong> Use insecticidal soaps to
              target and control aphids while minimizing harm to beneficial
              insects.
            </ListItem>
            <ListItem>
              <strong>7. Fertilizers:</strong> Proper fertilization can improve
              plant health and indirectly help in reducing aphid infestations.
              Consider using the following fertilizers:
            </ListItem>
          </List>
          <Description>
            <Subheading>Fertilizers & Pesticides</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Ammonium Sulfate: Supplies nitrogen, which is essential for
                plant growth and development.
              </ListItem>
              <ListItem>
                Potassium Nitrate: Provides potassium, which supports overall
                plant health and helps plants withstand stressors.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Imidacloprid: A systemic insecticide effective against aphids
                and other sucking insects.
              </ListItem>
              <ListItem>
                Acetamiprid: Provides contact and systemic control of aphids.
              </ListItem>
              <ListItem>
                Dinotefuran: A neonicotinoid insecticide with broad-spectrum
                control of pests, including aphids.
              </ListItem>
              <ListItem>
                Thiamethoxam: A systemic insecticide that can control aphids and
                other pests.
              </ListItem>
            </List>
          </Description>
          <Subheading>Early Detection of Cotton Aphids:</Subheading>
          <List>
            <ListItem>
              Apply a targeted insecticide such as imidacloprid, acetamiprid,
              dinotefuran, or thiamethoxam as soon as aphid infestation is
              detected. Early intervention can prevent population explosion and
              reduce damage.
            </ListItem>
          </List>
          <Subheading>Severe Cotton Aphid Infestation:</Subheading>
          <List>
            <ListItem>
              In cases of severe aphid outbreaks, consult with agricultural
              experts or extension services for appropriate pesticide
              recommendations. They may suggest a combination of systemic and
              contact insecticides to manage the infestation effectively.
            </ListItem>
          </List>
          <Subheading>Resistance Management and Crop Rotation:</Subheading>
          <List>
            <ListItem>
              Rotate insecticides with different modes of action to reduce the
              risk of developing resistance in the aphid population. Implement
              crop rotation practices to break the pest's life cycle and
              minimize recurrence.
            </ListItem>
          </List>
          <Subheading>Weather and Environmental Considerations:</Subheading>
          <List>
            <ListItem>
              Adjust the timing and rates of pesticide applications based on
              weather conditions. Avoid applications during periods of heavy
              rain to prevent runoff and potential environmental issues.
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
        <Heading>பட்டையை பறிக்கக்கூடிய பூச்சிகள் (Cotton Aphids)</Heading>
        <Description>
          <strong>விளக்கம்:</strong> காடன் அஃபிட்ஸ் (Aphis gossypii), மெலன் அஃபிட்ஸ் என்ற பெயரிலும் அறியப்படுகின்றன, இது சிறிய சப்-பாலூட்டும் பூச்சிகள் ஆகும், அவை காடன் செடிகளின் சத்து பருகுகின்றன. இவை வேகமாக பெருகி, காடன் வயல்களில் குடியிருக்கும், இதனால் செடிகளுக்கு சேதம் ஏற்படலாம் மற்றும் அவற்றின் வளம் மற்றும் சிக்கலுக்கு பாதிப்பை ஏற்படுத்தலாம்.
          <Subheading>அறிகுறிகள்:</Subheading>
          காடன் அஃபிட்ஸ் தாக்கத்தை காரணமாக பின்வரும் அறிகுறிகள் தோன்றலாம்:
        </Description>

        <List>
        <ListItem>இலைகள் மஞ்சளாகி வளைக்கின்றன.</ListItem>
        <ListItem>மிகவும் வளராத மற்றும் பலவீனமான செடிகள்.</ListItem>
        <ListItem>இலையின் மீது புழுதி போன்ற உப்புத்தன்மையான பொருட்கள் காணப்படுகிறது.</ListItem>
        <ListItem>இலைகள் விரைவில் சிதறும்.</ListItem>
        <ListItem>போலியான அல்லது வளைந்த காடன் பூ.</ListItem>
      </List>
      <Subheading>காரணங்கள்:</Subheading>
      காடன் அஃபிட்ஸ் காடன் செடிகளின் மீது ஓட்டச் செய்யும் பொருட்கள் உணவுக்காக செடிகளுக்கு தாக்கம் ஏற்படுத்துகின்றன, இது செடிகளை பலவீனப்படுத்தி அவற்றை பிற நோய்களும் சுற்றுப்புற சூழலின் தீவிர குறைவுகளுக்கு எதிராக பாதுகாக்கக்கூடியதாக மாற்றும்.
      <Subheading>செடிகளுக்கு தாக்கங்கள்:</Subheading>
      காடன் அஃபிட்ஸ் காடன் வயல்களில் பெரும் சேதத்தை ஏற்படுத்தி, காடன் உற்பத்தியில் குறைபாடுகளை உருவாக்கி விவசாயிகளுக்கு பொருளாதார நஷ்டத்தை உண்டாக்கக்கூடும்.
      <Subheading>முன்னறிவிப்பு மற்றும் நிர்வாகம்:</Subheading>
      காடன் அஃபிட்ஸின் நிர்வாகம் மற்றும் கட்டுப்பாட்டுக்கான பின்வரும் நடவடிக்கைகளை கவனத்தில் எடுத்துக் கொள்ளவும்:
      <List>
      <ListItem>
        <strong>1. கண்காணிப்பு:</strong> காடன் வயல்களை காடன் அஃபிட்ஸ் தாக்கங்களின் அறிகுறிகளுக்காக முறைப்படி பரிசோதிக்கவும். விரைவாக அடையாளம் காண்பதால் உடனடி தலையீடு செய்ய முடியும்.
      </ListItem>
      <ListItem>
        <strong>2. இயற்கை எதிரிகள்:</strong> காடன் அஃபிட்ஸ் அன்றாட பயனுள்ள இயற்கை எதிரிகள், உதாரணமாக லேடி பக் மற்றும் லெஸ் விங்ஸ் போன்றவை, காடன் அஃபிட்ஸ் மக்கள் தொகையை கட்டுப்படுத்த உதவுகின்றன.
      </ListItem>
      <ListItem>
        <strong>3. பிரதிபலிக்கும் மல்ச்:</strong> காடன் செடிகளின் சுற்றிலும் பிரதிபலிக்கும் மல்ச் பயன்படுத்தி, அஃபிட்ஸ் செடிகளின் மீது ஏறத் தவிர்க்கலாம்.
      </ListItem>
      <ListItem>
        <strong>4. நிம் எண்ணெய்:</strong> காடன் அஃபிட்ஸ் கட்டுப்பாட்டிற்கு நிம் எண்ணெய், இயற்கை கீறி மிருகத்தை பயன்படுத்தவும். பரிந்துரைகளை பின்பற்றவும்.
      </ListItem>
      <ListItem>
        <strong>5. எதிர்ப்பு வகைகள்:</strong> அஃபிட்ஸ் தாக்கத்தை எதிர்த்து போராடக்கூடிய பயிர் வகைகளை பயன்படுத்தவும்.
      </ListItem>
      <ListItem>
        <strong>6. பூச்சி நிறுத்தும் சாபன்:</strong> பூச்சி நிறுத்தும் சாபன் பயன்படுத்தி, அஃபிட்ஸ் விரைவாக அகற்றவும்.
      </ListItem>
      <ListItem>
        <strong>7. உரம்:</strong> சரியான உரம் செடிகளின் உடல் நிலையை மேம்படுத்தி, அஃபிட்ஸ் தாக்கங்களை குறைக்க உதவும். கீழ்காணும் உரங்கள் பயன்படுத்தவும்:
      </ListItem>
    </List>

          <Description>
        <strong>உரம்:</strong>
        <List>
          <ListItem>
            அமோனியம் சல்பேட்: செடிகளின் வளர்ச்சி மற்றும் மேம்பாட்டிற்கு அவசியமான நைட்ரஜனை வழங்குகிறது.
          </ListItem>
          <ListItem>
            பொட்டாசியம் நைட்ரேட்: செடிகளின் முழு வாசனை மற்றும் ஆரோக்கியத்தை ஆதரிக்கின்றது, மேலும் செடிகளை பல்வேறு சிரமங்களிலிருந்து பாதுகாக்கின்றது.
          </ListItem>
        </List>
      </Description>

      <Description>
      <strong>புழு மருந்துகள்:</strong>
      <List>
        <ListItem>
          அமோனியம் சல்பேட்: எஃபிட் மற்றும் பிற புழுவிடும் பூச்சிகளை கட்டுப்படுத்தும் ஒரு சிஸ்டமிக் பூச்சி மருந்து.
        </ListItem>
        <ListItem>
          எஸ்டிம்பர்ட்: எஃபிட்-களை கட்டுப்படுத்த தொடர்பு மற்றும் சிஸ்டமிக் கட்டுப்பாட்டை வழங்குகிறது.
        </ListItem>
        <ListItem>
          டைனோ டெபோரின்: ஒரு நியோனிகோடினோயிட் பூச்சி மருந்து, இது பல்வேறு பூச்சிகளை கட்டுப்படுத்துகிறது, எஃபிட்-களையும் அடங்கியுள்ளன.
        </ListItem>
        <ListItem>
          தைமிதோக்சிம்: ஒரு சிஸ்டமிக் பூச்சி மருந்து, இது எஃபிட் மற்றும் பிற பூச்சிகளை கட்டுப்படுத்த முடியும்.
        </ListItem>
      </List>
    </Description>

        <Subheading>கட்டன் எஃபிட்களின் வினாடி தாக்கத்தின் அடிப்படைக் காட்சி:</Subheading>
    <List>
      <ListItem>
        எஃபிட் தாக்கத்தை உடனே அடையாளம் காண்க, அப்போதைய பூச்சி மருந்துகள் என்எம்ஓனியம் சல்பேட், எஸ்டிம்பர்ட், டைனோ டெபோரின், அல்லது தைமிதோக்சிம் போன்றவற்றைப் பயன்படுத்துங்கள். விரைவான அறிகுறி மூலம் துல்லியமான கருத்துக்களை எடுத்துக்கொள்வது, எஃபிட்-களை பிற செடிகளுக்கு பரவாமல் தடுக்கும் மற்றும் சேதத்தை குறைக்கும்.
      </ListItem>
    </List>
    <Subheading>மிகவும் கடுமையான கட்டன் எஃபிட் தாக்கத்திற்கு:</Subheading>
    <List>
      <ListItem>
        கடுமையான எஃபிட் தாக்கம் ஏற்பட்டால், வேளாண் நிபுணர்களோ அல்லது விரிவாக்க சேவைகளோ மூலம் சரியான பூச்சி மருந்துகளை பரிந்துரைக்கவும். அவர்கள் சிஸ்டமிக் மற்றும் தொடர்பு பூச்சி மருந்துகளை இணைத்து பயன்பாட்டைக் பரிந்துரைக்கக்கூடும்.
      </ListItem>
    </List>
    <Subheading>எஃபிட் எதிர்ப்பு மேலாண்மை மற்றும் கட்டன் ஒப்பிடும் விதிமுறைகள்:</Subheading>
    <List>
      <ListItem>
        பூச்சி மருந்துகளின் எதிர்ப்பு இனங்களை மாற்றுவதற்காக, அவற்றை வெவ்வேறு முறைகளுடன் பரிமாற்றம் செய்ய வேண்டும். கட்டன் உற்பத்தி பாதுகாக்கும் வண்ணங்களுடன் தொடர்பான சூழல் தீவிரங்களுக்குப் பொருந்தும் கட்டன் ஒப்பிடும் விதிமுறைகளை பின்பற்றவும்.
      </ListItem>
    </List>

        <Subheading>காலநிலை மற்றும் புவி சூழல் காரணிகள்:</Subheading>
          <List>
            <ListItem>
              காலநிலை நிலவரத்தைப் பொறுத்து பூச்சி மருந்தின் பயன்பாட்டு நேரத்தையும் அளவையும் ஒத்திசைத்தல் செய்யவும். அதிக மழை காலங்களில், பரப்புதல்களைத் தவிர்க்க நைட்ரஜன் அளவுகளை குறைப்பது பற்றி கவலை செய்யவும்.
            </ListItem>
          </List>
          <Subheading>உள்ளூர் விதிமுறைகள் மற்றும் பாதுகாப்பு முன்னெடுப்புகள்:</Subheading>
          <p>
            உரத்தென்றும் பூச்சி மருந்தின் பயன்பாட்டிற்கு உள்ளூர் விதிமுறைகள் மற்றும் பாதுகாப்பு முன்னெடுப்புகளை எப்போதும் பின்பற்ற வேண்டும்.
          </p>
          <p>
            உரத்தென்றும் பூச்சி மருந்துகளை கையாளும் போது, தனிப்பட்ட பாதுகாப்பு உபகரணங்கள் (PPE) மற்றும் சரியான பயன்பாட்டு நுட்பங்களை பயன்படுத்தவும்.
          </p>
          <p>
            சூழலுக்கு மற்றும் குறிக்கோள் அல்லாத தனிநபர்களுக்கான எதிர்மறை விளைவுகளைத் தவிர்க்க, குறிப்பிட்ட பயன்பாட்டு அளவைகள் மற்றும் நேரத்தை கவனத்தில் கொள்ளவும். குறிப்பிட்ட பயன்பாட்டு விதிமுறைகள் மற்றும் பாதுகாப்பு முன்னெடுப்புகளுக்கான பரிந்துரைகளை வேளாண் நிபுணர்கள் அல்லது உள்ளூர் விரிவாக்க சேவைகளிடமிருந்து பெறவும்.
          </p>

        </Container>
      </Urdu>
    </>
  );
}
