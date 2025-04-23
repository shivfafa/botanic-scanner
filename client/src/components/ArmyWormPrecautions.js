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

export default function ArmyWormPrecautions() {
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
          <Heading>Cotton Army Worm (அமாரி பவுன்கட்)</Heading>
          <Description>
            <strong>Description:</strong> The Cotton Army Worm is a destructive
            pest that infests cotton plants. Also known as "عماری بھونکھٹ" in
            local language, these caterpillars can cause significant damage to
            cotton crops, leading to reduced yield and economic losses for
            farmers.
            <Subheading>Symptoms:</Subheading>
            Infestation of Cotton Army Worm can lead to the following symptoms:
          </Description>
          <List>
            <ListItem>Defoliation of cotton plants.</ListItem>
            <ListItem>Visible feeding damage on leaves.</ListItem>
            <ListItem>Reduced plant vigor and stunted growth.</ListItem>
            <ListItem>Complete consumption of cotton bolls.</ListItem>
            <ListItem>
              Feeding marks and holes on cotton buds and flowers.
            </ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton Army Worm caterpillars feed on cotton plants, causing damage to
          leaves, buds, and bolls. Their rapid multiplication can lead to severe
          infestations in cotton fields.
          <Subheading>Impact on Crops:</Subheading>
          The Cotton Army Worm can result in severe defoliation and yield loss,
          impacting the overall health and productivity of cotton crops.
          <Subheading>Prevention and Management:</Subheading>
          To manage and control the Cotton Army Worm, consider the following
          strategies:
          <List>
            <ListItem>
              <strong>1. Monitoring:</strong> Regularly inspect cotton fields
              for signs of Army Worm infestations. Early detection allows for
              timely intervention.
            </ListItem>
            <ListItem>
              <strong>2. Biological Control:</strong> Encourage the presence of
              natural enemies of the Army Worm, such as birds and beneficial
              insects, to help control their populations.
            </ListItem>
            <ListItem>
              <strong>3. Mechanical Control:</strong> Handpick and remove the
              caterpillars from the plants when feasible, especially during
              early stages of infestation.
            </ListItem>
            <ListItem>
              <strong>4. Bt Pesticides:</strong> Use Bacillus thuringiensis
              (Bt), a natural biological pesticide, to target and control the
              Cotton Army Worm. Follow the recommended application guidelines.
            </ListItem>
            <ListItem>
              <strong>5. Emamectin Benzoate:</strong> Apply Emamectin benzoate,
              an insecticide effective against caterpillar pests, including the
              Cotton Army Worm. Follow the recommended dosage and application
              procedures.
            </ListItem>
            <ListItem>
              <strong>6. Proper Hygiene:</strong> Keep the cotton fields and
              surrounding areas clean to minimize favorable conditions for the
              pests to breed and spread.
            </ListItem>
            <ListItem>
              <strong>7. Early Intervention:</strong> Act promptly at the first
              sign of infestation to prevent population explosion and reduce
              damage.
            </ListItem>
          </List>
          <Subheading>Fertilizers:</Subheading>
          <List>
            <ListItem>
              Triple Superphosphate: Supplies phosphorus, an essential nutrient
              for plant growth and development.
            </ListItem>
            <ListItem>
              Monoammonium Phosphate: Provides a balanced combination of
              nitrogen and phosphorus for improved plant health.
            </ListItem>
          </List>
          <Subheading>Pesticides:</Subheading>
          <List>
            <ListItem>
              Bacillus thuringiensis (Bt): A natural biological pesticide
              effective against caterpillar pests, including the Cotton Army
              Worm.
            </ListItem>
            <ListItem>
              Emamectin Benzoate: An insecticide that targets and controls
              caterpillar pests, including the Cotton Army Worm.
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
          <Heading>அமாரி பவுன்கட் (Cotton Army Worm)</Heading>
          <Description>
            <strong>விளக்கம்:</strong> அமாரி பவுன்கட், இது பருத்தி செடிகளின் மீது தாக்குதல் செய்யும் ஒரு அழிவான பூச்சி ஆகும். இந்த பூச்சிகள் உள்ளூர் மொழியில் "அமாரி பவுன்கட்" எனவும் அழைக்கப்படுகின்றன, மேலும் இவை பருத்தி உற்பத்தியில் குறைபாடுகளையும் விவசாயிகளுக்கு பொருளாதார நஷ்டத்தையும் ஏற்படுத்தலாம்.
            <Subheading>அறிகுறிகள்:</Subheading>
            அமாரி பவுன்கட்டின் தாக்குதலினால் கீழ்க்கண்ட அறிகுறிகள் தோன்றலாம்:
          </Description>
          <List>
            <ListItem>பருத்தி செடிகளின் இலைகள் மயங்கி போவது.</ListItem>
            <ListItem>இலைகளில் உணவு பாதிப்புகள்.</ListItem>
            <ListItem>செடிகளின் பலவீனம் மற்றும் நெருக்கடியான வளர்ச்சி.</ListItem>
            <ListItem>பருத்தி பூமிகளின் முழு உணவு அழிவு.</ListItem>
            <ListItem>
              பருத்தி பூமிகளின் திறந்த buds மற்றும் மலர்களில் உணவு பாதிப்புகள் மற்றும் தோண்டல்கள்.
            </ListItem>
          </List>
          <Subheading>காரணங்கள்:</Subheading>
          அமாரி பவுன்கட் பூச்சிகள் பருத்தி செடிகளின் இலைகளை, திறந்த buds மற்றும் பூக்களை சேதப்படுத்துகின்றன. அவற்றின் விரைவான பரவல் பருத்தி பண்ணைகளில் கடுமையான தாக்கத்தை ஏற்படுத்த முடியும்.
          <Subheading>செடிகளின் மீது பாதிப்புகள்:</Subheading>
          அமாரி பவுன்கட்டின் கடுமையான உணவு மற்றும் உற்பத்தி குறைபாடு காரணமாக, இது பருத்தி செடிகளின் மொத்த ஆரோக்கியத்தையும் பரிசுத்தியையும் பாதிக்கலாம்.
          <Subheading>கணிப்பும் மேலாண்மையும்:</Subheading>
          அமாரி பவுன்கட்டை மேலாண்மை செய்ய கீழ்க்கண்ட நடவடிக்கைகளை பின்பற்றவும்:
          <List>
            <ListItem>
              <strong>1. கண்காணிப்பு:</strong> பருத்தி பண்ணைகளை அமாரி பவுன்கட்டின் தாக்குதலுக்கான அறிகுறிகளுக்காக பரிசோதிக்கவும். விரைவில் கண்டறிதல் உடனடி நடவடிக்கையை எடுக்க உதவும்.
            </ListItem>
            <ListItem>
              <strong>2. உயிரியல் கட்டுப்பாடு:</strong> அமாரி பவுன்கட்டின் இயற்கையான பகைகள், உதாரணமாக பறவைகள் மற்றும் பயனுள்ள பூச்சிகள், அவற்றின் கலப்பை கட்டுப்படுத்த உதவ வேண்டும்.
            </ListItem>
            <ListItem>
              <strong>3. இயந்திர கட்டுப்பாடு:</strong> சாத்தியமானால் செடிகளிலிருந்து பூச்சிகளை காப்பாற்றி அகற்று, குறிப்பாக தாக்குதல் ஆரம்ப நிலைகளில்.
            </ListItem>
            <ListItem>
              <strong>4. பி.டி. பூச்சி எதிர்ப்பு:</strong> அமாரி பவுன்கட்டை கட்டுப்படுத்த பாக்லஸ் தொரோங்கியன்ஸ் (பி.டி.), ஒரு இயற்கை உயிரியல் பூச்சி எதிர்ப்பு பொருள் பயன்படுத்தவும். குறிப்பிட்ட வழிகாட்டி வழிமுறைகளை பின்பற்றவும்.
            </ListItem>
            <ListItem>
              <strong>5. எமிமெக்டின் பென்சொவெட்ட:</strong> எமிமெக்டின் பென்சொவெட்ட, ஒரு பூச்சி எதிர்ப்பு நீர்நிலைத்தான், இது அமாரி பவுன்கட்டை உள்பட பல பூச்சிகளை கட்டுப்படுத்துகிறது. குறிப்பிட்ட வழிகாட்டி வழிமுறைகளை பின்பற்றவும்.
            </ListItem>
          </List>
          <Subheading>அமாரி பவுன்கட்டின் கடுமையான உணவுக்கு:</Subheading>
          <List>
            <ListItem>
              கடுமையான தாக்குதலின் போது, விவசாய நிபுணர்களோ அல்லது நீட்டிப்பு சேவைகளோவிட ஆலோசனை பெறவும், பொருத்தமான பூச்சி எதிர்ப்பு பரிந்துரைகள் பெற. அவைகள் கீழ்க்கண்ட இயற்கை மற்றும் இரசாயன பூச்சி எதிர்ப்பு வழிமுறைகளையும் வழங்கலாம், அதனால் அமாரி பவுன்கட்டின் உற்பத்தி கட்டுப்படுத்தப்பட முடியும்.
            </ListItem>
          </List>
          <Subheading>
            எதிர்ப்பு மேலாண்மை மற்றும் பருத்தி ஒப்பீட்டுக்கான வழிமுறைகள்:
          </Subheading>
          <List>
            <ListItem>
              பூச்சி எதிர்ப்பு விதிகளுக்கு எதிராக வளங்கள் மூலம் பூச்சி எதிர்ப்பு முறைகளை மாற்றவும். பருத்தி உற்பத்திக்கான குறிப்பிட்ட சூழலியல் சூட்டுகளுக்கு பாதுகாப்பாக பருத்தி ஒப்பீட்டின் வழிமுறைகளை செயல்படுத்தவும்.
            </ListItem>
          </List>
          <Subheading>வானிலை மற்றும் சூழலியல் காரணிகள்:</Subheading>
          <List>
            <ListItem>
              வானிலை நிலைகளுக்கு ஏற்ப பூச்சி எதிர்ப்பு பயன்பாட்டின் நேரம் மற்றும் விளக்கங்களை அமைக்கவும். மழைக்காலத்தில் பயன்பாட்டை தவிர்க்க முன்னெச்சரிக்கைகள் எடுக்கவும் மற்றும் சூழலியல் பரிந்துரைகளை பின்பற்றவும்.
            </ListItem>
          </List>
          <Subheading>உள்ளூர் விதிகள் மற்றும் பாதுகாப்பு நடவடிக்கைகள்:</Subheading>
          <p>
            பூச்சி எதிர்ப்பு மற்றும் இரசாயன பூச்சி எதிர்ப்பு பயன்பாட்டின் உள்ளூர் விதிகள் மற்றும் பாதுகாப்பு நடவடிக்கைகளை எப்போதும் பின்பற்றுவது முக்கியம்.
          </p>
          <p>
            பூச்சி எதிர்ப்பு மற்றும் இரசாயன பூச்சி எதிர்ப்பு பொருள்களை கையாளும் மற்றும் பயன்படுத்தும் போது தனிப்பட்ட பாதுகாப்பு உபகரணங்கள் (பி.பி.இ) மற்றும் சரியான பயன்பாட்டுத்துறைகள் பயன்படுத்தப்பட வேண்டும்.
          </p>
          <p>
            சூழல் மற்றும் தவறான நோக்கங்கள் பாதிக்கப்படாமல் இருப்பதற்காக குறிப்பிட்ட பயன்பாட்டு விளக்கங்கள் மற்றும் நேரங்களை கவனத்தில் வைக்க வேண்டும். குறிப்பிட்ட பயன்பாட்டு விதிகள் மற்றும் பாதுகாப்பு நடவடிக்கைகளுக்கான ஆலோசனைக்கு விவசாய நிபுணர்களோ அல்லது உள்ளூர் நீட்டிப்பு சேவைகளோவிட ஆலோசனை பெறவும்.
          </p>
        </Container>

      </Urdu>
    </>
  );
}
