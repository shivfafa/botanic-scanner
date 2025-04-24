import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Show = styled.div`
  .language-toggle {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-right: 40px;
  }
`;

const Container = styled.div`
  max-width: 700px;
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

export default function CottonHealthPrecautions() {
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
              color: "black",
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
          <Heading>Healthy Cotton (பருத்தியின் ஆரோக்கியம்)</Heading>
          <Description>
            <strong>Description:</strong> Healthy cotton plants are vital for a
            successful cotton crop. These plants exhibit robust growth and are
            free from significant diseases. They have lush green leaves and
            sturdy stems, contributing to efficient photosynthesis and nutrient
            uptake. Maintaining the health of cotton plants is crucial for
            achieving high yields and premium quality cotton.
            <Subheading>Characteristics of Healthy Cotton:</Subheading>
            Healthy cotton plants demonstrate the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant and lush green leaves without any visible signs of pests
              or diseases.
            </ListItem>
            <ListItem>
              Strong and well-developed stems capable of supporting bolls
              effectively.
            </ListItem>
            <ListItem>
              Uniform and consistent growth with well-distributed branches and
              bolls.
            </ListItem>
            <ListItem>
              Absence of wilting or drooping leaves, indicating sufficient water
              supply.
            </ListItem>
            <ListItem>
              Well-formed and fully matured bolls with healthy, fluffy cotton
              fibers.
            </ListItem>
            <ListItem>
              Proper spacing between plants to allow optimal sunlight exposure
              and airflow.
            </ListItem>
          </List>
          <Subheading>Maintaining Cotton Health:</Subheading>
          To ensure the health of cotton plants, farmers should implement the
          following practices:
          <List>
            <ListItem>
              <strong>1. Adequate Watering:</strong> Maintain a consistent and
              appropriate irrigation schedule to meet the water demands of
              cotton plants throughout their growth stages.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, including nitrogen, phosphorus, and potassium, through
              fertilizers and soil amendments to support healthy growth and
              fiber development.
            </ListItem>
            <ListItem>
              <strong>3. Pest and Disease Control:</strong> Regularly monitor
              cotton plants for signs of pests and diseases. Timely intervention
              with appropriate measures can prevent damage and improve plant
              health.
            </ListItem>
            <ListItem>
              <strong>4. Weed Management:</strong> Implement effective weed
              control strategies to reduce competition for nutrients and water,
              ensuring cotton plants receive adequate resources for growth.
            </ListItem>
            <ListItem>
              <strong>5. Climate Adaptation:</strong> Be aware of weather
              conditions and adjust farming practices accordingly to minimize
              risks posed by extreme weather events.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy cotton plants lay the foundation for a successful cotton
          harvest. By adopting proper agricultural practices and promptly
          addressing any issues, farmers can ensure the well-being and
          productivity of their cotton crops.
        </Container>
      </English>
      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container>
  <Heading>பருத்தியின் ஆரோக்கியம் (Healthy Cotton)</Heading>
  <Description>
    <strong>விவரம் (Description):</strong> ஆரோக்கியமான பருத்திச் செடிகள் விவசாயிகளுக்கு மிகவும் முக்கியமானவை, ஏனெனில் நல்ல பருத்தி விளைச்சலை பெற உதவுகின்றன. இச்செடிகள் வலுவான வளர்ச்சியுடன், முக்கிய நோய்கள் இல்லாமல் காணப்படுகின்றன. அவற்றின் இலைகள் பசுமையுடன் காணப்படுவதுடன், வலுவான தண்டுகளும் உள்ளன, இது செயல்படும் ஒளிச்சேர்க்கைக்கும் ஊட்டச்சத்து எடுத்துக்கொள்ளுதலுக்கும் உதவுகின்றது. பருத்திச் செடிகளின் ஆரோக்கியம் பயிரின் வளர்ச்சிக்கும் நேரடி உயர்தர பருத்தி பெறுதலுக்கும் முக்கியமாகும்.
    <Subheading>ஆரோக்கியமான பருத்தியின் பண்புகள்:</Subheading>
    ஆரோக்கியமான பருத்திச் செடிகள் பின்வரும் பண்புகளைக் காண்பிக்கின்றன:
  </Description>
  <List>
    <ListItem>
      பிரகாசமான மற்றும் பசுமையான இலைகள், பூச்சிகள் அல்லது நோய்களின் எந்த அறிகுறிகளும் இல்லாமல்.
    </ListItem>
    <ListItem>
      வலுவான மற்றும் அழகான தண்டுகள், பருத்தி கொட்டைகளை உறுதியாக தாங்கக்கூடியவை.
    </ListItem>
    <ListItem>
      சீரான மற்றும் தொடர்ச்சியான வளர்ச்சி, கிளைகள் மற்றும் கொட்டைகள் சிறப்பாகப் பகிரப்பட்டிருக்கும்.
    </ListItem>
    <ListItem>
      சுருங்கிய அல்லது வளைந்த இலைகள் இல்லாதிருத்தல், இது போதுமான நீர் வழங்கலைக் காட்டுகிறது.
    </ListItem>
    <ListItem>
      அழகான மற்றும் முழுமையாக பழுத்த பருத்தி கொட்டைகள், இதில் சிறந்த தரமான நார் இருக்கும்.
    </ListItem>
    <ListItem>
      செடிகளுக்கிடையே போதுமான இடைவெளி, இதனால் ஒவ்வொரு செடியும் சூரிய ஒளி மற்றும் காற்றைப் பெற முடிகிறது.
    </ListItem>
  </List>
  <Subheading>பருத்தியின் ஆரோக்கியத்தைப் பாதுகாப்பது:</Subheading>
  பருத்திச் செடிகளின் ஆரோக்கியத்தை உறுதி செய்ய விவசாயிகள் பின்வரும் நடவடிக்கைகளை எடுக்க வேண்டும்:
  <List>
    <ListItem>
      <strong>1. பொருத்தமான பாசனம்:</strong> பருத்திச் செடிகளின் வளர்ச்சி அனைத்து கட்டங்களிலும் தேவையான நீர் அளவை உறுதி செய்ய தொடர்ந்து மற்றும் சரியான பாசன முறையை அமல்படுத்துங்கள்.
    </ListItem>
    <ListItem>
      <strong>2. ஊட்டச்சத்து மேலாண்மை:</strong> உரம் மற்றும் மண்ணின் வளத்தினூடாக தேவையான மூலப்பொருட்களை வழங்கி, சரியான வளர்ச்சிக்கும் நார்களின் மேம்பாட்டுக்கும் ஆதரவு அளிக்கவும்.
    </ListItem>
    <ListItem>
      <strong>3. பூச்சி மற்றும் நோய் கட்டுப்பாடு:</strong> பருத்திச் செடிகளை பூச்சிகள் மற்றும் நோய்களின் அறிகுறிகளுக்காக சீராக ஆய்வு செய்யுங்கள். சரியான தலையீடுகள் மூலம் தடுக்கும் மற்றும் செடிகளின் ஆரோக்கியத்தை மேம்படுத்த முடியும்.
    </ListItem>
    <ListItem>
      <strong>4. களை மேலாண்மை:</strong> வலுவான பருத்தி வளர்ச்சிக்காக திறமையான களி கட்டுப்பாட்டு நடவடிக்கைகளை எடுக்க வேண்டும், இதனால் செடிகள் நீர் மற்றும் ஊட்டச்சத்து போன்ற வளங்களை இழப்பதிலிருந்து பாதுகாக்கப்படுவார்கள்.
    </ListItem>
    <ListItem>
      <strong>5. காலநிலை மாற்றங்களுக்கு ஏற்ப பொருந்துதல்:</strong> காலநிலை நிலைகளை கருத்தில் கொண்டு, விவசாய முறைகளை அதற்கேற்ப மாற்றுங்கள், இதனால் கடுமையான காலநிலை காரணமாக ஏற்படக்கூடிய அபாயங்கள் குறைவடையும்.
    </ListItem>
  </List>
  <Subheading>சுருக்கமாக:</Subheading>
  ஆரோக்கியமான பருத்திச் செடிகள் ஒரு வெற்றிகரமான அறுவடைக்கு அடிப்படை அமைப்பாக இருக்கின்றன. சரியான வேளாண்மை நடைமுறைகளை பின்பற்றி மற்றும் உடனடியாக ஏற்படும் சிக்கல்களுக்கு தீர்வு வழங்குவதன் மூலம், விவசாயிகள் பருத்தி விளைச்சலின் ஆரோக்கியத்தையும் திறனையும் உறுதி செய்ய முடியும்.
</Container>

      </Urdu>
    </>
  );
}
