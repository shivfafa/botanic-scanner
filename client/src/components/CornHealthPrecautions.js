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

export default function CornHealthPrecautions() {
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
            <span>{isUrdu ? "اردو" : "English"}</span>
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
          <Heading>Healthy Corn (مکئی کی صحت)</Heading>
          <Description>
            <strong>Description (تفصیل):</strong> Healthy corn plants are free
            from any major diseases and exhibit vigorous growth and development.
            These plants have vibrant green leaves and strong stalks, which
            contribute to optimal photosynthesis and nutrient uptake. Healthy
            corn is crucial for achieving high crop yield and quality.
            <Subheading>Characteristics of Healthy Corn:</Subheading>
            Healthy corn plants display the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant green leaves without any visible lesions or
              discolorations.
            </ListItem>
            <ListItem>
              Strong and sturdy stalks that can support the weight of the plants
              and ears.
            </ListItem>
            <ListItem>
              Lush and even growth of the plant, with consistent height and leaf
              development.
            </ListItem>
            <ListItem>
              Absence of wilting or drooping leaves, indicating sufficient water
              uptake.
            </ListItem>
            <ListItem>
              Well-developed ears with healthy kernels that are fully filled.
            </ListItem>
            <ListItem>
              Adequate spacing between plants, allowing each plant to access
              sunlight and nutrients without competition.
            </ListItem>
          </List>
          <Subheading>Maintaining Corn Health:</Subheading>
          To ensure corn plants remain healthy, farmers should implement the
          following practices:
          <List>
            <ListItem>
              <strong>1. Proper Irrigation:</strong> Maintain a consistent and
              appropriate irrigation schedule to prevent both under-watering and
              over-watering. Adequate water supply is crucial for corn's growth
              and health.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, including nitrogen, phosphorus, and potassium, through
              fertilizers and soil amendments. Balanced nutrition supports
              corn's overall health and disease resistance.
            </ListItem>
            <ListItem>
              <strong>3. Pest and Disease Monitoring:</strong> Regularly inspect
              corn plants for any signs of pests or diseases. Early detection
              allows for timely intervention and prevents the spread of issues.
            </ListItem>
            <ListItem>
              <strong>4. Crop Rotation:</strong> Practice crop rotation with
              non-host plants to reduce the risk of disease buildup in the soil
              and improve soil health.
            </ListItem>
            <ListItem>
              <strong>5. Weather Considerations:</strong> Be mindful of weather
              conditions and adapt farming practices accordingly to mitigate
              potential risks posed by extreme weather events.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy corn is the foundation for a successful harvest. By following
          proper agricultural practices and promptly addressing any issues,
          farmers can ensure the well-being and productivity of their corn
          crops.
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container>
  <Heading>சோளத்தின் ஆரோக்கியம் (Healthy Corn)</Heading>
  <Description>
    <strong>விவரம் (Description):</strong> ஆரோக்கியமான சோளச் செடிகள் முக்கிய நோய்கள் இல்லாமல் காணப்படுகின்றன மற்றும் அவை வேகமாக வளரக்கூடிய தன்மையைக் கொண்டிருக்கின்றன. இச்செடிகள் பச்சை இலைகளும் வலுவான தண்டுகளும் கொண்டவை, இது சிறந்த ஒளிச்சேர்க்கைக்கும் ஊட்டச்சத்துகளின் எடுத்துக்கொள்ளுதலுக்கும் உதவுகின்றது. சோளத்தின் ஆரோக்கியம், அதிக மொத்த விளைச்சலுக்கும் தரமான உற்பத்திக்கும் முக்கியமாகும்.
    <Subheading>ஆரோக்கியமான சோளத்தின் பண்புகள்:</Subheading>
    ஆரோக்கியமான சோளச் செடிகள் பின்வரும் பண்புகளை காண்பிக்கின்றன:
  </Description>
  <List>
    <ListItem>
      இலைகள் பச்சையாகவும் எந்தக் கறைகள் அல்லது நிறமாற்றமில்லாமல் காணப்படுகின்றன.
    </ListItem>
    <ListItem>
      வலுவான மற்றும் நிலையான தண்டுகள், செடிகளையும் கொம்புகளையும் தாங்கும் திறனுடையவை.
    </ListItem>
    <ListItem>
      செடிகளின் சீரான வளர்ச்சி, இது உயரம் மற்றும் இலை வளர்ச்சியின் தொடர்ச்சியான மேம்பாட்டைக் காட்டுகிறது.
    </ListItem>
    <ListItem>
      சுருங்கிய அல்லது வளைந்த இலைகள் இல்லாதிருத்தல், இது போதுமான நீர் எடுத்துக்கொள்ளலைக் காட்டுகிறது.
    </ListItem>
    <ListItem>சரியான கேர்னல்கள் உள்ள சோளக் கொம்புகள்.</ListItem>
    <ListItem>
      செடிகளுக்கிடையே போதுமான இடைவெளி, இதன்மூலம் ஒவ்வொரு செடியும் சூரிய ஒளி மற்றும் ஊட்டச்சத்துக்களை போட்டியில்லாமல் பெற முடிகிறது.
    </ListItem>
  </List>
  <Subheading>சோளத்தின் ஆரோக்கியத்தைப் பாதுகாப்பது:</Subheading>
  சோளச் செடிகளை ஆரோக்கியமாக வைத்திருக்க விவசாயிகள் பின்வரும் நடவடிக்கைகளை எடுக்க வேண்டும்:
  <List>
    <ListItem>
      <strong>1. சரியான பாசனம்:</strong> தொடர்ந்து மற்றும் பொருத்தமான பாசனம் வழங்குவதற்கான திட்டமிடல். போதுமான நீர் வழங்கல் சோள வளர்ச்சி மற்றும் ஆரோக்கியத்திற்கு முக்கியமானது.
    </ListItem>
    <ListItem>
      <strong>2. ஊட்டச்சத்து மேலாண்மை:</strong> உரம் மற்றும் மண்ணின் வளத்தை ஊக்குவிக்கும் மூலங்களின் வாயிலாக தேவையான மூலப்பொருட்கள் வழங்கப்பட வேண்டும். பொருத்தமான ஊட்டச்சத்து சோளத்தின் ஆரோக்கியத்தை ஆதரிக்கிறது மற்றும் நோய்க்கு எதிரான பாதுகாப்பு வழங்குகிறது.
    </ListItem>
    <ListItem>
      <strong>3. பூச்சி மற்றும் நோய் கண்காணிப்பு:</strong> சோளச் செடிகளை பூச்சிகள் அல்லது நோய்களின் அறிகுறிகளுக்காக முறையான ஆய்வு செய்ய வேண்டும். விரைவான கண்டறிதலால் உடனடி நடவடிக்கைகள் எடுக்கப்படலாம் மற்றும் பிரச்சனை பரவாமல் தடுக்க முடியும்.
    </ListItem>
    <ListItem>
      <strong>4. பயிர் சுழற்சி:</strong> நோய்த் தூண்டக்கூடிய செயற்பாடுகள் குறைவாக உள்ள வேறு பயிர்களுடன் சுழற்சி நடைமுறைப்படுத்துதல், மண்ணில் நோய் பரவல் அபாயத்தை குறைக்கும் மற்றும் மண்ணின் ஆரோக்கியத்தை மேம்படுத்தும்.
    </ListItem>
    <ListItem>
      <strong>5. வானிலை கண்காணிப்பு:</strong> வானிலை நிலையை கருத்தில் கொண்டு விவசாய செயல்முறைகளை ஏற்பதாக மாற்றுங்கள், அதிகமான வானிலை காரணமாக ஏற்படக்கூடிய அபாயங்களை குறைக்க இது உதவும்.
    </ListItem>
  </List>
  <Subheading>சுருக்கமாக:</Subheading>
  ஆரோக்கியமான சோளவளர்ச்சி விவசாயிகளுக்கு முழுக்கால பருவத்தில் வெற்றிகரமான வரமாக அமைகிறது. பொருத்தமான ஊட்டச்சத்து நடைமுறைகளை பின்பற்றுவதன் மூலம் மற்றும் உடனடி நடவடிக்கைகள் மேற்கொள்வதன் மூலம், விவசாயிகள் சோள பயிரின் ஆரோக்கியத்தையும் விளைச்சல் திறனையும் உறுதி செய்ய முடியும்.
</Container>

      </Urdu>
    </>
  );
}
