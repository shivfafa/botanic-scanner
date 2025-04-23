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

export default function HispaPrecautions() {
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
            <span>{isUrdu ? "اردو" : "English"}</span>
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
    <Heading>Rice Hispa Disease (சாவல் ஹிஸ்பா நோய்)</Heading>
    <Description>
      <strong>Description (விளக்கம்):</strong> Rice Hispa, scientifically known as
      Dicladispa armigera, is a common insect pest that affects rice plants.
      The adult Hispa beetles feed on the leaves of rice plants, while the
      larvae cause damage by mining inside the leaves. Severe infestations can
      lead to significant yield losses in rice crops.
    </Description>
    <Subheading>Symptoms (சிக்னல்கள்):</Subheading>
    The symptoms of Rice Hispa disease include:
    <List>
      <ListItem>Presence of small, elongated holes on the leaves.</ListItem>
      <ListItem>
        White or transparent windowpane-like patches caused by larval feeding.
      </ListItem>
      <ListItem>Curled or rolled leaves due to damage.</ListItem>
      <ListItem>
        In severe cases, defoliation and reduced growth of rice plants.
      </ListItem>
    </List>
    <Subheading>Causes (காரணம்):</Subheading>
    Rice Hispa is caused by the feeding activities of the Hispa beetles and
    their larvae on rice plants.
    <Subheading>Impact on Crops (பயிர்கள் மீது தாக்கங்கள்):</Subheading>
    Rice Hispa infestations can lead to reduced photosynthetic activity and
    stunted growth of rice plants, resulting in decreased yield and poor grain
    quality.
    <Subheading>Prevention and Management (தடுக்கல் மற்றும் மேலாண்மை):</Subheading>
    Several measures can help manage and minimize the impact of Rice Hispa
    disease:
    <List>
      <ListItem>
        <strong>1. Monitoring:</strong> Regularly inspect rice fields for early
        signs of Hispa infestation and take prompt action if detected.
      </ListItem>
      <ListItem>
        <strong>2. Biological Control:</strong> Encourage natural predators
        like spiders, ladybugs, and parasitoid wasps that feed on Hispa beetles
        and larvae.
      </ListItem>
      <ListItem>
        <strong>3. Cultural Practices:</strong> Adopt practices like clean
        cultivation, proper field drainage, and removal of weed hosts to
        minimize Hispa populations.
      </ListItem>
      <ListItem>
        <strong>4. Chemical Control:</strong> When Hispa populations exceed
        economic thresholds, use pesticides to control the infestation. Apply
        pesticides during the early stages of the pest's life cycle for better
        efficacy.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (உரங்களை மற்றும் பூச்சி விரட்டி பயன்பாடு):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of Rice Hispa disease. Proper application of fertilizers and
    targeted use of pesticides can improve the overall health of the rice
    plants and control the infestation.
    <Description>
      <strong>Fertilizers (உரங்கள்):</strong>
      <List>
        <ListItem>
          Muriate of Potash: Supplies potassium, essential for plant
          development and overall growth.
        </ListItem>
        <ListItem>
          Potassium Nitrate: Provides nitrogen and potassium for healthy plant
          growth.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (புழு ஒழிப்பான்):</strong>
      <List>
        <ListItem>
          Carbaryl: An effective insecticide used for controlling Rice Hispa.
        </ListItem>
        <ListItem>
          Imidacloprid: A systemic insecticide that targets sucking insects
          like Hispa beetles.
        </ListItem>
        <ListItem>
          Fipronil: Provides broad-spectrum control against various pests,
          including Rice Hispa.
        </ListItem>
        <ListItem>
          Thiamethoxam: A neonicotinoid insecticide effective against Hispa
          beetles and larvae.
        </ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Rice Hispa (چاول کی ہسپا کی جلد شناخت):</Subheading>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        Apply a targeted insecticide like Carbaryl or Imidacloprid immediately
        after detecting Rice Hispa symptoms. Early intervention can prevent the
        infestation from spreading and causing significant damage.
      </ListItem>
    </List>
    <Subheading>Severe Rice Hispa Infestation (چاول کی ہسپا کی شدید واقعت):</Subheading>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        In cases of severe Rice Hispa infestations, consult with agricultural
        experts or extension services for appropriate pesticide
        recommendations. They may suggest a combination of insecticides to
        manage the infestation effectively.
      </ListItem>
    </List>
    <Subheading>Biological Control (حیاتیاتی ناظمہ بندی):</Subheading>
    <List>
      <ListItem>
        Promote the presence of natural enemies like spiders, ladybugs, and
        parasitoid wasps that feed on Rice Hispa beetles and larvae.
      </ListItem>
    </List>
    <Subheading>Cultural Practices (ثقافتی تراکیب):</Subheading>
    <List>
      <ListItem>
        Implement practices like clean cultivation, proper field drainage, and
        removal of weed hosts to reduce Hispa populations in rice fields.
      </ListItem>
    </List>
    <Subheading>Chemical Control (کیمیائی ناظمہ بندی):</Subheading>
    <List>
      <ListItem>
        Apply pesticides containing Carbaryl, Imidacloprid, Fipronil, or
        Thiamethoxam during the early stages of Hispa infestation when the pest
        is more vulnerable.
      </ListItem>
    </List>
    <Subheading>Local Regulations and Safety (مقامی ضوابط اور حفاظتی تدابیر):</Subheading>
    <p>
      Always follow local regulations and safety guidelines regarding the use
      of fertilizers and pesticides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques
      when handling and applying fertilizers and pesticides.
    </p>
    <p>
      It is essential to follow the recommended application rates and timings
      to avoid any negative effects on the environment and non-target
      organisms. Consult with agricultural experts or local extension services
      for proper usage guidelines and safety precautions.
    </p>
  </Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
<Container>
    <Heading>பொட்டு தானிய ஹிஸ்பா நோய் (Rice Hispa Disease)</Heading>
    <Description>
      <strong>விளக்கம் (Description):</strong> பொட்டு தானிய ஹிஸ்பா, அறிவியல் ரீதியில் 
      டிகிளாடெஸ்பா ஆர்மிக்ரா என அழைக்கப்படுகிறது, இது பொட்டு தானிய செடிகளுக்கு தாக்கம்
      செய்யும் பொதுவான பூச்சி நோயாகும். பெரிய ஹிஸ்பா பூச்சிகள் பொட்டு தானிய இலைகளை கசக்கின்றன,
      அதே நேரத்தில் பூச்சிகளின் லார்வாக்கள் இலைகளில் தோண்டி தீங்குகொடுக்கின்றன. கடுமையான தொற்றில்
      பொட்டு தானிய விளைவே பாதிக்கப்பட்டு, பலனாகக் குறைகின்றது.
    </Description>
    <Subheading>அழிகைகள் (Symptoms):</Subheading>
    பொட்டு தானிய ஹிஸ்பா நோயின் அழிகைகளில் அடிப்படையாக உள்ளன:
    <List>
      <ListItem>இலையில் சிறிய, நீண்ட குத்திகள்.</ListItem>
      <ListItem>
        பூச்சிகளின் லார்வாவை உள்ளடக்கிய வெள்ளை அல்லது தெளிவான குறுக்கான வட்டங்கள்.
      </ListItem>
      <ListItem>பாதிப்பால் இலைகள் மடிக்கப்படுகின்றன.</ListItem>
      <ListItem>கடுமையான தொற்றில் இலைகள் வெட்டப்படுவதால் செடியின் வளர்ச்சி குறைகின்றது.</ListItem>
    </List>
    <Subheading>காரணங்கள் (Causes):</Subheading>
    பொட்டு தானிய ஹிஸ்பாவின் காரணம் ஹிஸ்பா பூச்சிகளும் அவற்றின் லார்வாக்கள்
    பொட்டு தானிய செடிகளுக்கு உணவு எடுக்கும்.
    <Subheading>விளைவரிசையில் தாக்கம் (Impact on Crops):</Subheading>
    பொட்டு தானிய ஹிஸ்பா பூச்சிகளின் தாக்கம், பொட்டு தானிய விளைவே பசுமையாகக் குறைந்து
    செடியின் வளர்ச்சியை பாதிப்பதாக உள்ளது, இதனால் விளைவு குறைந்து, தானியத்தின் தரம்
    சரியில்லாமல் அமைந்துவிடும்.
    <Subheading>தடை மற்றும் மேலாண்மை (Prevention and Management):</Subheading>
    பொட்டு தானிய ஹிஸ்பா நோயின் தாக்கத்தை குறைக்க பல வழிமுறைகள் பின்பற்றப்படலாம்:
    <List>
      <ListItem>
        <strong>1. கண்காணிப்பு (Monitoring):</strong> பொட்டு தானிய மைதானங்களை நேர்முகமாக
        கண்காணித்து, ஹிஸ்பா பூச்சிகளின் தொடக்க அறிகுறிகளை அடையாளம் காண்பது மற்றும்
        விரைவாக நடவடிக்கைகள் எடுக்கப்படலாம்.
      </ListItem>
      <ListItem>
        <strong>2. உயிரியல் கட்டுப்பாடு (Biological Control):</strong> ஹிஸ்பா பூச்சிகளையும்
        அவற்றின் லார்வாக்களையும் எதிர்க்கும் உயிரியல் எதிரிகளான ஈக்கள், முருகுகள் மற்றும்
        பச்சைத் தேசங்களை ஊக்குவிக்கவும்.
      </ListItem>
      <ListItem>
        <strong>3. வேளாண்மைக் வழிமுறைகள் (Cultural Practices):</strong> பொட்டு தானிய மைதானங்களில்
        ஹிஸ்பா பூச்சிகளின் எண்ணிக்கையை குறைக்கும் வகையில் சுத்தப்படுத்தல், சரியான மண்
        கழிவு மற்றும் புள்ளிகளின் உபயோகங்களைக் கண்டறிந்து நடைமுறை செய்யவும்.
      </ListItem>
      <ListItem>
        <strong>4. இரசாயன கட்டுப்பாடு (Chemical Control):</strong> ஹிஸ்பா பூச்சிகளின் எண்ணிக்கை
        பொருளாதார முறையில் அதிகரித்தால், அவற்றை கட்டுப்படுத்த pesticide பயன்பாட்டைப் பயன்படுத்தவும்.
        பூச்சிகளின் உயிரியல் முறை முதன்முதலில் pesticide பயன்படுத்தினால் அவற்றின் தாக்கத்தை
        குறைக்க முடியும்.
      </ListItem>
    </List>
    <Subheading>உழவன் மற்றும் பூச்சி மருந்து பயன்பாடு (Fertilizer and Pesticide Use):</Subheading>
    உழவன் மற்றும் பூச்சி மருந்துகளின் பயன்படுத்துதலால் பொட்டு தானிய ஹிஸ்பா நோயின்
    தாக்கங்களை குறைக்க முடியும். உழவன் மற்றும் நோக்கப்பட்ட பூச்சி மருந்துகளின் பயன்பாடு
    பொட்டு தானிய செடிகளின் பொதுவான சுகாதாரத்தை மேம்படுத்தும் மற்றும் பூச்சிகளின் தாக்கங்களை
    கட்டுப்படுத்த உதவலாம்.
    <Description>
      <strong>உழவன் (Fertilizers):</strong>
      <List>
        <ListItem>
          மியூரியட் ஆஃப் பொட்டாஷ்: செடிகளின் வளர்ச்சி மற்றும் பூக்கும் வகையில்
          தேவையான பொட்டாஷியம் வழங்குகிறது.
        </ListItem>
        <ListItem>
          பொட்டாஷியம் நைட்ரேட்: சரியான செடி வளர்ச்சிக்கான நைட்ரோஜன் மற்றும்
          பொட்டாஷியம் வழங்குகிறது.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>பூச்சி மருந்து (Pesticides):</strong>
      <List>
        <ListItem>
          கார்பரல்: பொட்டு தானிய ஹிஸ்பாவின் கட்டுப்பாட்டுக்கான செயல்பாடான பூச்சி மருந்து.
        </ListItem>
        <ListItem>
          இமிடாகலோபிரிட்: ஹிஸ்பா பூச்சிகளுக்கு எதிராக ஒரு சிஸ்டெமிக் பூச்சி மருந்து.
        </ListItem>
        <ListItem>
          ஃபிப்ரோனில்: பொட்டு தானிய ஹிஸ்பாவுடன் பல்வேறு பூச்சிகளுக்கு எதிராக பெரும்பாலான
          செயல்திறன் செய்கிறது.
        </ListItem>
        <ListItem>
          தியாமெத்தோக்சாம்: ஹிஸ்பா பூச்சிகளுக்கும் அதன் லார்வாக்களுக்கும் எதிராக ஒரு நைகோடினாய்டு
          பூச்சி மருந்து.
        </ListItem>
      </List>
    </Description>
    <Subheading>பொட்டு தானிய ஹிஸ்பா நொயியின் தொடக்க அறிகுறி (Early Detection of Rice Hispa):</Subheading>
    <strong>பூச்சி மருந்து (Pesticides):</strong>
    <List>
      <ListItem>
        பொட்டு தானிய ஹிஸ்பாவின் அறிகுறிகள் கண்டறியப்பட்டதும் உடனடியாக கார்பரல் அல்லது
        இமிடாகலோபிரிட் போன்ற நோக்கப்பட்ட பூச்சி மருந்துகளைப் பயன்படுத்தவும். விரைவான நடவடிக்கைகள்
        பூச்சிகளின் தாக்கங்களை தடுப்பதுடன், பாதிப்புகளை குறைக்க உதவும்.
      </ListItem>
    </List>
    <Subheading>பொட்டு தானிய ஹிஸ்பாவின் தீவிர தாக்கம் (Severe Rice Hispa Infestation):</Subheading>
    <strong>பூச்சி மருந்து (Pesticides):</strong>
    <List>
      <ListItem>
        கடுமையான பொட்டு தானிய ஹிஸ்பா பூச்சிகளின் தாக்கங்களில், விவசாய நிபுணர்களை அல்லது
        நீட்டிப்பு சேவைகளை தொடர்பு கொண்டு தகுந்த பூச்சி மருந்து பரிந்துரைகளை பெறவும்.
        அவர்கள் கூறுவார்கள், எந்த விதமான பூச்சி மருந்துகளின் வகைகளுடன் ஹிஸ்பா பூச்சிகளுக்கு
        ஏற்ப சூழ்நிலை அமைத்து, நோயை மேற்பார்வை செய்ய.
      </ListItem>
    </List>
    <Subheading>உயிரியல் கட்டுப்பாடு (Biological Control):</Subheading>
    <List>
      <ListItem>
        ஹிஸ்பா பூச்சிகளுக்கு மற்றும் அவற்றின் லார்வாக்களுக்கான உயிரியல் எதிரிகளான ஈக்கள்,
        முருகுகள் மற்றும் பச்சைத் தேசங்களை ஊக்குவிக்கவும்.
      </ListItem>
    </List>
    <Subheading>வேளாண்மைக் வழிமுறைகள் (Cultural Practices):</Subheading>
    <List>
      <ListItem>
        பொட்டு தானிய மைதானங்களில் ஹிஸ்பா பூச்சிகளின் எண்ணிக்கையை குறைக்கும் வகையில்
        சுத்தப்படுத்தல், சரியான மண் கழிவு மற்றும் புள்ளிகளின் உபயோகங்களை கண்டறிந்து
        நடைமுறை செய்யவும்.
      </ListItem>
    </List>
    <Subheading>இரசாயன கட்டுப்பாடு (Chemical Control):</Subheading>
    <List>
      <ListItem>
        ஹிஸ்பா பூச்சிகளின் எண்ணிக்கை பொருளாதார முறையில் அதிகரித்தால், கார்பரல்,
        இமிடாகலோபிரிட், ஃபிப்ரோனில் அல்லது தியாமெத்தோக்சாம் போன்ற பூச்சி மருந்துகளை
        பயன்படுத்தவும்.
      </ListItem>
    </List>
    <Subheading>உள்ளூரமைப்பு விதிகள் மற்றும் பாதுகாப்பு நடைமுறைகள் (Local Regulations and Safety):</Subheading>
    <p>
      உழவன் மற்றும் பூச்சி மருந்துகளின் பயன்பாட்டில் உள்ளூரமைப்பு விதிகள் மற்றும்
      பாதுகாப்பு நடைமுறைகளை கவனத்தில் வைக்கவும்.
    </p>
    <p>
      உழவன் மற்றும் பூச்சி மருந்துகளின் பயன்படுத்துதலின் போது தனிப்பட்ட பாதுகாப்பு உபகரணங்கள் (PPE)
      மற்றும் சரியான செயல்பாட்டு தொழில்நுட்பங்களைப் பயன்படுத்தவும்.
    </p>
    <p>
      சுற்றுச்சூழல் மற்றும் கைவிடப்பட்ட உயிரிகளின் மீது கெட்ட தாக்கம் ஏற்படாமல்
      கண்காணிப்பது முக்கியம். உள்ளூர் விவசாய நிபுணர்களிடமிருந்து பாதுகாப்பு மற்றும்
      பயன்பாட்டு பரிந்துரைகள் பெறவும்.
    </p>
</Container>

</Urdu>

    </>
  );
}
