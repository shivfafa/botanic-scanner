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
          <Heading>Healthy Rice Plants</Heading>
          <Description>
            <strong>Description:</strong> Healthy rice plants are essential for
            achieving a high-quality and abundant rice yield. These plants
            exhibit robust growth and possess certain characteristics that
            indicate their well-being. Ensuring the health of rice plants is
            crucial for maximizing productivity and grain quality.
            <Subheading>Characteristics of Healthy Rice Plants:</Subheading>
            Healthy rice plants display the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant green leaves without any visible lesions, spots, or
              discolorations.
            </ListItem>
            <ListItem>
              Strong and sturdy stems that can support the weight of the
              panicles and resist lodging.
            </ListItem>
            <ListItem>
              Uniform and dense panicle formation, with consistent grain filling
              and development.
            </ListItem>
            <ListItem>
              Absence of wilting or drooping leaves, indicating sufficient water
              uptake.
            </ListItem>
            <ListItem>
              Well-established root system that facilitates nutrient absorption
              and overall plant stability.
            </ListItem>
            <ListItem>
              Adequate spacing between plants, allowing each plant to access
              sunlight and nutrients efficiently.
            </ListItem>
          </List>
          <Subheading>Maintaining Rice Plant Health:</Subheading>
          To ensure rice plants remain healthy, farmers should implement the
          following practices:
          <List>
            <ListItem>
              <strong>1. Proper Irrigation:</strong> Maintain a consistent and
              appropriate irrigation schedule to ensure the rice plants receive
              adequate water without waterlogging the soil.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, especially nitrogen, phosphorus, and potassium, through
              suitable fertilizers and soil amendments.
            </ListItem>
            <ListItem>
              <strong>3. Weed Control:</strong> Keep the rice fields free from
              weeds, as they compete with the crop for nutrients and can harbor
              pests and diseases.
            </ListItem>
            <ListItem>
              <strong>4. Pest and Disease Monitoring:</strong> Regularly inspect
              rice plants for signs of pests or diseases and take prompt action
              to prevent their spread.
            </ListItem>
            <ListItem>
              <strong>5. Harvesting at the Right Time:</strong> Harvest rice at
              the appropriate maturity to ensure maximum grain quality and
              yield.
            </ListItem>
            <ListItem>
              <strong>6. Soil Health:</strong> Maintain soil health through
              organic matter addition and sustainable farming practices,
              promoting better nutrient availability for the crop.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy rice plants are crucial for a successful rice harvest. By
          employing proper agricultural practices and giving due attention to
          their well-being, farmers can enhance the productivity and quality of
          their rice crops, contributing to a thriving rice industry.
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container>
  <Heading>பருமனான அரிசி தாவரங்கள்</Heading>
  <Description>
    <strong>விவரக்குறிப்பு:</strong> அரிசி தாவரங்களின் ஆரோக்கியம் மிக முக்கியமானது, ஏனென்றால் இது சிறந்த மற்றும் அதிக உற்பத்தி பெறுவதற்கு உதவுகிறது. இவை வலுவான மற்றும் நிலையான வளர்ச்சியையும், அதன் ஆரோக்கியம் குறித்த அறிகுறிகளையும் கொண்டுள்ளன. அரிசி தாவரங்களின் ஆரோக்கியத்தை பாதுகாக்க இது உற்பத்தி மற்றும் அதன் பயனை அதிகரிக்க மிகவும் முக்கியமானது.
    <Subheading>ஆரோக்கியமான அரிசி தாவரங்களின் பண்புகள்:</Subheading>
    ஆரோக்கியமான அரிசி தாவரங்கள் பின்வரும் பண்புகளை காட்டு முறையில் காட்டுகின்றன:
  </Description>
  <List>
    <ListItem>பத்திகள் பச்சை மற்றும் எந்தவொரு வறுமை, குற்றச்சாட்டு அல்லது நிற மாற்றமின்றி இருக்கும்.</ListItem>
    <ListItem>வலுவான மற்றும் நிலையான தண்டு, இது பினிக்கிளின் சுமையை எடுக்கும் மற்றும் தொங்குவதற்கு எதிர்ப்பு காட்டும்.</ListItem>
    <ListItem>ஒற்றுமை மற்றும் வலுவான பினிக்கிளின் அமைப்பு, இது நிலையான தானிய நிறைவு மற்றும் வளர்ச்சியை குறிக்கும்.</ListItem>
    <ListItem>வளைந்த அல்லது திரண்ட பத்திகளின் இல்லாத நிலை, இது போதுமான நீரை உறிஞ்சுவதைக் குறிக்கிறது.</ListItem>
    <ListItem>அழகான வேட்டைகள், இது ஊட்டச்சத்துகளை உறிஞ்சுவதற்கும் தாவரத்தின் வலுவை தருவதற்கும் உதவுகிறது.</ListItem>
    <ListItem>தாவரங்களுக்கு இடையே போதுமான இடம், இது ஒவ்வொரு தாவரமும் சூரியன் வெளிச்சத்தை மற்றும் ஊட்டச்சத்துகளை எவ்வித போக்கும் இல்லாமல் பெற முடியும்.</ListItem>
  </List>
  <Subheading>அரிசி தாவரங்களின் ஆரோக்கியத்தை பாதுகாக்கும்:</Subheading>
  அரிசி தாவரங்களின் ஆரோக்கியத்தை பாதுகாக்க விவசாயிகளால் பின்வரும் நடவடிக்கைகள் எடுக்கப்பட வேண்டும்:
  <List>
    <ListItem>
      <strong>1. சரியான நீர்ப்பாசனம்:</strong> நிலம் நீரிழிவு இல்லாமல் சரியான நீர்ப்பாசனத்தை அமைத்து அளிக்கவும்.
    </ListItem>
    <ListItem>
      <strong>2. ஊட்டச்சத்து மேலாண்மை:</strong> உரம் மற்றும் மண் உற்பத்தி வளங்களை, குறிப்பாக நைட்ரஜன், பொஸ்பரஸ் மற்றும் பொட்டாஷியத்தை சரியான உரம் மற்றும் மண் மூலங்களிலிருந்து வழங்கவும்.
    </ListItem>
    <ListItem>
      <strong>3. வேட்டையின் மேலாண்மை:</strong> மண்ணை கழிவுகளிலிருந்து சுத்தமாக வைத்திருங்கள், ஏனென்றால் அவை அரிசிக்கான ஊட்டச்சத்துகளுடன் போட்டியிடுகின்றன மற்றும் தொல்லைகள் மற்றும் நோய்களை பரப்பக்கூடியவை.
    </ListItem>
    <ListItem>
      <strong>4. பொறியாளர்கள் மற்றும் நோய்கள் கண்காணிப்பு:</strong> அரிசி தாவரங்களை பொறியாளர்களோ அல்லது நோய்களின் அறிகுறிகள் காண்பதற்கு பரிசோதனை செய்து அவற்றை விரைவில் கண்டறிந்து, பரப்பாவதை அல்லது குறைக்க நடவடிக்கைகள் எடுக்கும்.
    </ListItem>
    <ListItem>
      <strong>5. பருவ நிலை பரிசோதனை:</strong> அதிகபட்ச தானிய உற்பத்தி மற்றும் பயனைக் குறிக்க, அரிசி பசுந்தொடர்புகளை சிறப்பாக அறியவும்.
    </ListItem>
    <ListItem>
      <strong>6. மண் ஆரோக்கியம்:</strong> மண் ஆரோக்கியத்தை, நிலவின் வளங்களை அதிகரித்து, நிலையான விவசாய நடவடிக்கைகளை கொண்டு மேம்படுத்தவும்.
    </ListItem>
  </List>
  <Subheading>சுருக்கமாக:</Subheading>
  ஆரோக்கியமான அரிசி விவசாயத்தின் வெற்றியின் அடிப்படை ஆகும். சரியான நிலைபேறான விவசாய நடவடிக்கைகளை மேற்கொண்டு, விவசாயிகள் அரிசி பயிரின் ஆரோக்கியம் மற்றும் தானிய உற்பத்தியை மேம்படுத்த முடியும், இது அரிசி வணிகத் துறையை மேம்படுத்தும்.
</Container>

      </Urdu>
    </>
  );
}
