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
  direction: ltr;  /* Change from rtl to ltr for left-to-right text */
  text-align: left;  /* Align text to the left for Tamil/English */
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
          <Heading>Healthy Sugarcane (صحت مند گنا)</Heading>
          <Description>
            <strong>Description (விவரம்):</strong> Healthy sugarcane plants are
            vital for achieving a high-quality and abundant sugarcane yield.
            These plants exhibit robust growth and possess certain
            characteristics that indicate their well-being. Ensuring the health
            of sugarcane is essential for maximizing productivity and sugar
            content.
            <Subheading>Characteristics of Healthy Sugarcane:</Subheading>
            Healthy sugarcane plants display the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant green leaves without any visible lesions, spots, or
              discolorations.
            </ListItem>
            <ListItem>
              Strong and thick canes that can support the weight of the plant
              and resist lodging.
            </ListItem>
            <ListItem>
              Uniform and rapid growth of the plant, with consistent height and
              cane development.
            </ListItem>
            <ListItem>
              Absence of wilting or drooping leaves, indicating sufficient water
              uptake.
            </ListItem>
            <ListItem>
              Well-developed roots that facilitate nutrient absorption and
              overall plant stability.
            </ListItem>
            <ListItem>
              Adequate spacing between plants, allowing each plant to access
              sunlight and nutrients efficiently.
            </ListItem>
          </List>
          <Subheading>Maintaining Sugarcane Health:</Subheading>
          To ensure sugarcane plants remain healthy, farmers should implement
          the following practices:
          <List>
            <ListItem>
              <strong>1. Proper Irrigation:</strong> Maintain a consistent and
              appropriate irrigation schedule to ensure the sugarcane receives
              adequate water without waterlogging the soil.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, especially nitrogen, phosphorus, and potassium, through
              suitable fertilizers and soil amendments.
            </ListItem>
            <ListItem>
              <strong>3. Weed Control:</strong> Keep the sugarcane field free
              from weeds, as they compete with the crop for nutrients and can
              harbor pests and diseases.
            </ListItem>
            <ListItem>
              <strong>4. Pest and Disease Monitoring:</strong> Regularly inspect
              sugarcane plants for signs of pests or diseases and take prompt
              action to prevent their spread.
            </ListItem>
            <ListItem>
              <strong>5. Harvesting at the Right Time:</strong> Harvest
              sugarcane at the appropriate maturity to ensure maximum sugar
              content and yield.
            </ListItem>
            <ListItem>
              <strong>6. Soil Health:</strong> Maintain soil health through
              organic matter addition and sustainable farming practices,
              promoting better nutrient availability for the crop.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy sugarcane is the backbone of a successful sugarcane harvest.
          By employing proper agricultural practices and giving due attention to
          its well-being, farmers can enhance the productivity and quality of
          their sugarcane crops, contributing to a thriving sugarcane industry.
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container>
  <Heading>சர்க்கரையின் ஆரோக்கியம் (Healthy Sugarcane)</Heading>
  <Description>
    <strong>விளக்கம் (Description):</strong> ஆரோக்கியமான சர்க்கரைப் பூதங்கள் அதிக அளவில் தானியைக் கடத்துவதற்கும் அதிக உற்பத்தி பெறுவதற்கும் மிகவும் முக்கியமானவை. இவை வலிமையான மற்றும் நிலைத்த வளர்ச்சி மற்றும் பண்புகளைக் கொண்டுள்ளன, இவை அதன் ஆரோக்கியத்திற்கான அறிகுறிகளாகும். சர்க்கரையின் ஆரோக்கியத்தை பராமரிப்பது உற்பத்தி மற்றும் சர்க்கரையின் அளவுக்கான முக்கியமானது.
    <Subheading>ஆரோக்கியமான சர்க்கரையின் பண்புகள்:</Subheading>
    ஆரோக்கியமான சர்க்கரையின் பூதங்கள் பின்வரும் பண்புகளை வெளிப்படுத்துகின்றன:
  </Description>
  <List>
    <ListItem>இலைகள் பச்சை நிறத்திலும் எந்தப் பகுதியும் மசகு, முத்திரைகள் அல்லது நிற மாற்றங்கள் இல்லாமல் இருக்கின்றன.</ListItem>
    <ListItem>வலிமையான மற்றும் கூரான தானிகள், இவை செடிகளின் எடை மற்றும் தொங்கும் நிலையை எதிர்கொள்ளும் திறன் உள்ளன.</ListItem>
    <ListItem>ஒரே மாதிரி மற்றும் விரைவான செடி வளர்ச்சி, இது ஒரு உயரம் மற்றும் தானியின் வளர்ச்சி நிலையான வெளிப்பாட்டைக் காட்டுகின்றது.</ListItem>
    <ListItem>இலைகள் விழும்போது அல்லது மடிந்த போது இல்லாமல், இது போதுமான நீரின் ஆதாரத்தை வெளிப்படுத்துகிறது.</ListItem>
    <ListItem>அழகான கிளைகள், இது சர்க்கரையை மேம்படுத்தும் மற்றும் செடியின் வலிமையை வழங்கும்.</ListItem>
    <ListItem>செடிகளுக்கு இடையே போதுமான இடைவெளி, இதனால் ஒவ்வொரு செடியும் சூரிய ஒளியையும் பசும் பொருளையும் எவ்வித போட்டியின்றி பெற முடிகிறது.</ListItem>
  </List>
  <Subheading>சர்க்கரையின் ஆரோக்கியத்தை பராமரித்தல்:</Subheading>
  சர்க்கரையின் பூதங்களை ஆரோக்கியமாக வைத்திருக்க விவசாயிகள் பின்வரும் நடவடிக்கைகளை மேற்கொள்ள வேண்டும்:
  <List>
    <ListItem>
      <strong>1. சரியான நீர்ப்பாசனம்:</strong> நிலம் ஈரமானால் மீண்டும் வேறு நீர் சேர்க்காமல் சரியான மற்றும் நிலையான நீர்ப்பாசனம் வழங்கவும்.
    </ListItem>
    <ListItem>
      <strong>2. சத்துக்களின் மேலாண்மை:</strong> சரியான உரங்கள் மற்றும் நிலத்தில் உள்ள முக்கியமான சத்துக்கள், குறிப்பாக நைட்ரஜன், பாஸ்பரஸ் மற்றும் பொட்டாசியம் மூலம் வழங்கப்பட வேண்டும்.
    </ListItem>
    <ListItem>
      <strong>3. வேர் மேலாண்மை:</strong> நிலத்தை மாசுபாட்டினால் சுத்தமாக வைத்திருப்பதன் மூலம், இது சர்க்கரையின் மூலப்பொருளுடன் போட்டியிடாது மற்றும் விரைவில் பூச்சிகளையும் நோய்களைத் தடுக்க உதவும்.
    </ListItem>
    <ListItem>
      <strong>4. பூச்சிகள் மற்றும் நோய்களின் கண்காணிப்பு:</strong> சர்க்கரையின் பூதங்களை பூச்சிகள் அல்லது நோய்கள் பற்றிய அறிகுறிகளுக்கு வழக்கமாக பரிசோதனை செய்யவும், அவற்றை வேகமாக கண்டறிந்தால் உடனே நடவடிக்கைகள் எடுக்கவும்.
    </ListItem>
    <ListItem>
      <strong>5. பருவ நேர கண்காணிப்பு:</strong> சர்க்கரையை அதிக அளவு சர்க்கரையின் உள்ளடக்கம் பெறுவதற்காக உரிய முறையில் அறுக்க அனுமதிக்கவும்.
    </ListItem>
    <ListItem>
      <strong>6. நிலத்தின் ஆரோக்கியம்:</strong> நிலத்தின் ஆரோக்கியத்தை வேளாண்மை ஆதாரங்களின் மூலம் மேம்படுத்தவும், உழுதல் முறைகளை பயன்படுத்தி நிலத்தின் சத்துக்களை அதிகரிக்கவும்.
    </ListItem>
  </List>
  <Subheading>சுருக்கம்:</Subheading>
  ஆரோக்கியமான சர்க்கரையுடன் விவசாயிகள் வெற்றிகரமான பயிர் விளைவுகளை அடைவதற்கான அடித்தளத்தை உருவாக்குகின்றனர். சரியான நிலத்துடன் நிலையான வேளாண் முறைகளை மேற்கொண்டு, அவ்வப்போது உள்ள சிக்கல்களை சரி செய்து, விவசாயிகள் சர்க்கரையின் ஆரோக்கியம் மற்றும் உற்பத்தி தரத்தை உறுதி செய்ய முடியும், இது சர்க்கரையின் வர்த்தகத்துறையில் வளர்ச்சியை உறுதி செய்யும்.
</Container>

      </Urdu>
    </>
  );
}
