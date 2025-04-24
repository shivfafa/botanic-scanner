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

export default function WheatHealthPrecautions() {
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
          <Heading>Healthy Wheat (சரியான கோதுமை)</Heading>
          <Description>
            <strong>Description:</strong> Healthy wheat plants are essential for
            a successful wheat crop. These plants exhibit vigorous growth and
            are free from significant diseases. They have lush green leaves and
            strong stems, contributing to efficient photosynthesis and nutrient
            uptake. Maintaining the health of wheat plants is crucial for
            achieving high yields and premium quality wheat.
            <Subheading>Characteristics of Healthy Wheat:</Subheading>
            Healthy wheat plants demonstrate the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant and lush green leaves without any visible signs of pests
              or diseases.
            </ListItem>
            <ListItem>
              Strong and well-developed stems capable of supporting the grain
              effectively.
            </ListItem>
            <ListItem>
              Uniform and consistent growth with well-distributed tillers and
              spikelets.
            </ListItem>
            <ListItem>
              Absence of wilting or yellowing leaves, indicating sufficient
              water and nutrient supply.
            </ListItem>
            <ListItem>
              Well-filled and fully matured grain heads with healthy, plump
              wheat kernels.
            </ListItem>
            <ListItem>
              Proper spacing between plants to allow optimal sunlight exposure
              and airflow.
            </ListItem>
          </List>
          <Subheading>Maintaining Wheat Health:</Subheading>
          To ensure the health of wheat plants, farmers should implement the
          following practices:
          <List>
            <ListItem>
              <strong>1. Adequate Watering:</strong> Maintain a consistent and
              appropriate irrigation schedule to meet the water demands of wheat
              plants throughout their growth stages.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, including nitrogen, phosphorus, and potassium, through
              fertilizers and soil amendments to support healthy growth and
              grain development.
            </ListItem>
            <ListItem>
              <strong>3. Pest and Disease Control:</strong> Regularly monitor
              wheat plants for signs of pests and diseases. Timely intervention
              with appropriate measures can prevent damage and improve plant
              health.
            </ListItem>
            <ListItem>
              <strong>4. Weed Management:</strong> Implement effective weed
              control strategies to reduce competition for nutrients and water,
              ensuring wheat plants receive adequate resources for growth.
            </ListItem>
            <ListItem>
              <strong>5. Climate Adaptation:</strong> Be aware of weather
              conditions and adjust farming practices accordingly to minimize
              risks posed by extreme weather events.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy wheat plants lay the foundation for a successful wheat
          harvest. By adopting proper agricultural practices and promptly
          addressing any issues, farmers can ensure the well-being and
          productivity of their wheat crops.
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container>
  <Heading>ஆரோக்கிய கோதுமை (Healthy Wheat)</Heading>
  <Description>
    <strong>விவரம்:</strong> ஆரோக்கியமான கோதுமை செடிகள் வெற்றிகரமான வேளாண்
    உற்பத்திக்குத் தேவையானவை. இவை விரிவாக வளர்ச்சி பெறும் மற்றும் பெரும்பாலான
    நோய்கள் இல்லாதவையாக இருக்கும். இவற்றில் சீரான பச்சை இலைகள் மற்றும் வலுவான
    தண்டுகள் இருக்கும், இது ஒளிச்சேர்க்கை மற்றும் சத்துக்கள் பெறுதலை மேம்படுத்தும்.
    கோதுமை செடிகளின் ஆரோக்கியத்தை பராமரிப்பது நல்ல மகசூல் மற்றும் உயர்தர
    கோதுமையை பெற முக்கியமானது.
    <Subheading>ஆரோக்கிய கோதுமையின் பண்புகள்:</Subheading>
    ஆரோக்கியமான கோதுமை செடிகள் பின்வரும் பண்புகளைக் காண்பிக்கும்:
  </Description>
  <List>
    <ListItem>
      பச்சை இலைகளும் மற்றும் பூச்சி தாக்கங்கள் இல்லாத சீரான இலைகளும்.
    </ListItem>
    <ListItem>
      வலுவான மற்றும் விரிவாக வளரும் தண்டுகள், தானியங்களை நன்றாக தாங்கும்.
    </ListItem>
    <ListItem>
      சமமாகவும் சீராகவும் வளர்ச்சி, தண்டுகள் மற்றும் முளைகளை நன்றாகப் பரப்பும்.
    </ListItem>
    <ListItem>
      மஞ்சள் அல்லது வாடிய இலைகள் இல்லாதது, இது போதுமான நீர்ப்பாசனத்தை
      குறிக்கிறது.
    </ListItem>
    <ListItem>
      நன்கு நிரம்பிய மற்றும் முழுமையாக பழுத்த தானியங்கள், சீரான மற்றும் வட்டமான
      கோதுமை கற்கள்.
    </ListItem>
    <ListItem>
      செடிகளுக்கு இடையே சரியான இடைவெளி, போதுமான வெயிலும் காற்றும்
      கிடைக்கும்.
    </ListItem>
  </List>
  <Subheading>ஆரோக்கிய கோதுமை பாதுகாப்பு:</Subheading>
  ஆரோக்கியமான கோதுமை செடிகளை பாதுகாக்க, விவசாயிகள் பின்வரும் நடைமுறைகளை
  பின்பற்ற வேண்டும்:
  <List>
    <ListItem>
      <strong>1. போதுமான நீர் வழங்கல்:</strong> கோதுமை வளர்ச்சியின் பல்வேறு
      கட்டங்களிலும் சரியான மற்றும் தொடர்ந்த நீர்ப்பாசனத்தை வழங்கும் திட்டத்தை
      பின்பற்றவும்.
    </ListItem>
    <ListItem>
      <strong>2. சத்துகள் மேலாண்மை:</strong> நைட்ரஜன், பாஸ்பரஸ் மற்றும்
      பொட்டாஷ் போன்ற சத்துக்களை வழங்குவதன் மூலம் செடிகளின் வளர்ச்சி மற்றும்
      தானிய வளர்ச்சிக்கு ஆதரவு வழங்கவும்.
    </ListItem>
    <ListItem>
      <strong>3. பூச்சி மற்றும் நோய் மேலாண்மை:</strong> பூச்சிகள் மற்றும் நோய்கள்
      தோன்றும் அறிகுறிகளை அவ்வப்போது கண்காணித்து, சரியான தீர்வுகளை உடனே
      செயல்படுத்த வேண்டும், இது சேதத்தைத் தடுக்கும்.
    </ListItem>
    <ListItem>
      <strong>4. கொடிகள் மேலாண்மை:</strong> கொடிகளை கட்டுப்படுத்துவதன் மூலம்
      கோதுமைக்கு தேவையான சத்துக்கள் மற்றும் நீருக்கான போட்டி குறைக்கப்படுகிறது.
    </ListItem>
    <ListItem>
      <strong>5. காலநிலை அடிப்படையிலான திட்டமிடல்:</strong> காலநிலை
      நிலவரங்களை கண்காணித்து அதற்கேற்ப விதைப்பு மற்றும் பராமரிப்பு முறைகளை
      மாற்ற வேண்டும்.
    </ListItem>
  </List>
  <Subheading>முடிவுரை:</Subheading>
  ஆரோக்கியமான கோதுமை செடிகள் வெற்றிகரமான அறுவடைக்கு அடிப்படை. சரியான
  வேளாண்மை நடைமுறைகளை பின்பற்றுவதன் மூலம் மற்றும் சிக்கல்களை உடனே கையாளுவதன்
  மூலம், விவசாயிகள் அதிக மகசூல் மற்றும் தரமான கோதுமையை உறுதி செய்யலாம்.
</Container>

      </Urdu>
    </>
  );
}
