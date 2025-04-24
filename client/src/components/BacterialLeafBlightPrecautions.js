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

export default function BacterialLeafBlightPrecautions() {
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
    <Heading>Rice Bacterial Leaf Blight (چاول کی بیکٹیریل پتی بیماری)</Heading>
    <Description>
      <strong>Description:</strong> Rice bacterial leaf blight, caused by the
      bacterium Xanthomonas oryzae pv. oryzae, is a devastating disease that
      affects rice plants. The bacterium infects the rice plants through wounds
      or natural openings, such as stomata. Once inside the plant, it causes
      water-soaked lesions with yellowish-green margins to appear on the leaves.
      As the disease progresses, the lesions expand and turn dark brown, leading
      to the drying and death of affected leaves. Severe infections can result
      in significant yield losses for rice farmers.
      <Subheading>Symptoms:</Subheading>
      The symptoms of rice bacterial leaf blight include:
    </Description>
    <List>
      <ListItem>Water-soaked lesions with yellowish-green margins on leaves.</ListItem>
      <ListItem>Lesions expand and turn dark brown as the disease progresses.</ListItem>
      <ListItem>Drying and death of affected leaves.</ListItem>
      <ListItem>Severe infections can lead to yield losses.</ListItem>
    </List>
    <Subheading>Causes:</Subheading>
    Rice bacterial leaf blight is caused by the bacterium Xanthomonas oryzae pv.
    oryzae. The bacterium enters the rice plant through wounds or natural
    openings, such as stomata. Once inside the plant, it multiplies and spreads
    within the vascular system, leading to the characteristic symptoms of the
    disease.
    <Subheading>Impact on Crops:</Subheading>
    Rice bacterial leaf blight can have significant negative effects on rice
    crops. The disease can lead to reduced photosynthetic capacity of the
    affected leaves, resulting in lower grain filling and reduced yield. Severe
    infections can cause premature plant senescence and complete yield loss in
    some cases.
    <Subheading>Prevention and Management:</Subheading>
    While there is no direct cure for rice bacterial leaf blight once the plant
    is infected, several preventive and management measures can help reduce its
    impact and prevent further spread. These measures include:
    <List>
      <ListItem>
        <strong>1. Use of Disease-Free Seeds:</strong> Planting rice using
        disease-free seeds can help prevent the introduction of the bacterium
        into new fields.
      </ListItem>
      <ListItem>
        <strong>2. Avoid Overhead Irrigation:</strong> Bacterial blight spreads
        through water, so avoiding overhead irrigation can help reduce disease
        spread.
      </ListItem>
      <ListItem>
        <strong>3. Crop Rotation:</strong> Implementing crop rotation practices
        can break the disease cycle and reduce the buildup of the bacterium in
        the soil.
      </ListItem>
      <ListItem>
        <strong>4. Use of Resistant Varieties:</strong> Planting rice varieties
        that are resistant to bacterial leaf blight can provide some protection
        against the disease.
      </ListItem>
      <ListItem>
        <strong>5. Copper-Based Fungicides:</strong> Copper-based fungicides can
        be applied preventively to protect rice plants from bacterial infection.
        Consult agricultural experts for proper fungicide selection and
        application guidelines.
      </ListItem>
      <ListItem>
        <strong>6. Antibiotics:</strong> Streptomycin and kasugamycin are
        antibiotics that can be used to manage bacterial leaf blight. Consult
        agricultural experts for proper antibiotic application guidelines and
        usage restrictions.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use:</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing the
    impact of rice bacterial leaf blight. Proper application of fertilizers can
    improve the overall health of the plants, making them more resilient to
    infections. The following fertilizers and pesticides can be considered:
    <Description>
      <strong>Fertilizers:</strong>
      <List>
        <ListItem>Urea: Provides nitrogen, essential for rice growth and development.</ListItem>
        <ListItem>Ammonium Sulfate: Supplies nitrogen and promotes healthy foliage.</ListItem>
        <ListItem>
          Ammonium Phosphate: Provides phosphorus, essential for root development and overall growth.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides:</strong>
      <List>
        <ListItem>
          Copper-Based Fungicides: Provide preventive protection and control
          bacterial growth on the rice plant's tissues.
        </ListItem>
        <ListItem>
          Streptomycin: An antibiotic effective against bacterial pathogens,
          including Xanthomonas oryzae pv. oryzae.
        </ListItem>
        <ListItem>
          Kasugamycin: An antibiotic that can be used to manage bacterial leaf
          blight in rice plants.
        </ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Rice Bacterial Leaf Blight:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Increase the application of nitrogen-based fertilizers, such as urea or
        ammonium sulfate, to support the rice's recovery and strengthen its
        resistance to disease.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Apply a targeted pesticide like copper-based fungicides or
        kasugamycin immediately after detecting rice bacterial leaf blight
        symptoms. Early intervention can prevent the spread of the disease to
        other plants and minimize damage.
      </ListItem>
    </List>

    <Subheading>Severe Rice Bacterial Leaf Blight Outbreak:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Use a balanced fertilizer that includes essential nutrients like
        nitrogen, phosphorus, and potassium to support the overall health of the
        rice plants, as severe infections can deplete the plant's nutrient
        reserves.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        In cases of severe rice bacterial leaf blight outbreaks, consult with
        agricultural experts or extension services for appropriate pesticide
        recommendations. They may suggest a combination of systemic and
        protective pesticides to manage the disease effectively.
      </ListItem>
    </List>

    <Subheading>Disease Resistance and Crop Rotation:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its
        health and fertility, which can indirectly enhance the plant's disease
        resistance.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Rotate pesticides with different modes of action to reduce the risk of
        developing resistance in the bacterial population. Implement crop
        rotation practices to break the disease cycle and minimize the recurrence
        of rice bacterial leaf blight.
      </ListItem>
    </List>

    <Subheading>Weather and Environmental Factors:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. During periods of excessive rainfall, consider reducing
        nitrogen applications to prevent leaching and potential environmental
        issues.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply pesticides
        proactively when conditions are favorable for rice bacterial leaf blight
        development.
      </ListItem>
    </List>
    <Subheading>Local Regulations and Safety:</Subheading>

    <p>
      Always follow local regulations and safety guidelines regarding the use of
      fertilizers and pesticides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques
      when handling and applying fertilizers and pesticides.
    </p>
    <p>
      It is essential to follow the recommended application rates and timings to
      avoid any negative effects on the environment and non-target organisms.
      Consult with agricultural experts or local extension services for proper
      usage guidelines and safety precautions.
    </p>
  </Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
<Container>
    <Heading>அரிசி பாக்டீரியா இலை நோய் (Rice Bacterial Leaf Blight)</Heading>
    <Description>
      <strong>விளக்கம்:</strong> அரிசி பாக்டீரியா இலை நோய், இது பாக்டீரியம் ஜெந்தோமோனாஸ் ஓரிசே பி.வி. ஓரிசே காரணமாக ஏற்படும், அரிசி தாவரங்களை பாதிக்கும் கடுமையான நோயாகும். பாக்டீரியம் தாவரங்களுக்குள் வாயுவகையிலும் இயற்கை வழிகளிலும், உதாரணமாக சுயமூடி, புகுதிக்குள் சென்று நுழைகிறது. ஒரு முறை தாவரத்தில் நுழைந்த பின், இது இலைகளில் நீர் நிரம்பிய நீல நிறமான படிகள் உருவாக்குகிறது. நோயின் முன்னேற்றம் தவிர்க்கப்படாதபோது, இந்த படிகள் பெரிதாகி கருப்பு நிறம் ஆகி பாதிக்கப்பட்ட இலைகள் உலர்ந்து இறக்கின்றன. கடுமையான தொற்று நிலைகளில், நோய் அதிக உற்பத்தி குறைவுக்கு எச்சரிக்கையாக மாறக்கூடும்.
      <Subheading>பரிகாசங்கள்:</Subheading>
      அரிசி பாக்டீரியா இலை நோயின் பரிகாசங்களில்:
    </Description>
    <List>
      <ListItem>இலைகளில் நீர் நிரம்பிய நீல நிறமான படிகள்.</ListItem>
      <ListItem>நோயின் முன்னேற்றத்துடன், படிகள் பெருகி கருப்பு நிறம் ஆகின்றன.</ListItem>
      <ListItem>பாதிக்கப்பட்ட இலைகள் உலர்ந்து இறக்கின்றன.</ListItem>
      <ListItem>கடுமையான தொற்று நிலைகளில், உற்பத்தி குறைகிறது.</ListItem>
    </List>
    <Subheading>காரணங்கள்:</Subheading>
    அரிசி பாக்டீரியா இலை நோய் பாக்டீரியம் ஜெந்தோமோனாஸ் ஓரிசே பி.வி. ஓரிசே மூலம் ஏற்படுகிறது. இந்த பாக்டீரியம் தாவரங்களில் வாயுவகையிலும் இயற்கை வழிகளிலும் சென்று நுழைகிறது, உதாரணமாக சுயமூடி. ஒரு முறை தாவரத்தில் நுழைந்த பின், இது தாவரத்தின் ரத்தவழிகளில் விரிவடைகிறது, இதனால் நோயின் குறிப்பிட்ட பரிகாசங்கள் தோன்றுகின்றன.
    <Subheading>உற்பத்தி மீது தாக்கங்கள்:</Subheading>
    அரிசி பாக்டீரியா இலை நோய் அரிசி உற்பத்தி மீது பல்வேறு தாக்கங்களை ஏற்படுத்தும். நோய் இலைகளின் செயல்திறனை குறைக்கக்கூடும், இதனால் பச்சை நிறம் குறைந்து உற்பத்தி குறையும். கடுமையான தொற்று நிலைகளில், தாவரத்தின் வளர்ச்சி குறைந்து சில வழிகளில் முழுமையாக உற்பத்தி குறைந்து போகலாம்.
    <Subheading>தடுக்கவும் மற்றும் நிர்வகிக்கவும்:</Subheading>
    அரிசி பாக்டீரியா இலை நோயை தாவரத்தில் நுழைந்த பின்னர் நேரடி சிகிச்சை அளிப்பது இயலாது, ஆனால் அதன் பரப்பை குறைக்க மற்றும் தாக்கத்தை குறைக்க சில தடுக்கவும் நிர்வகிக்கும் நடவடிக்கைகள் உதவியளிக்க முடியும். இவை:
    <List>
      <ListItem>
        <strong>1. நோயற்ற விதைகள் பயன்படுத்தல்:</strong> நோயற்ற விதைகள் பயன்படுத்துவதன் மூலம் புதிய பண்ணைகளில் பாக்டீரியத்தின் நுழைவதைத் தடுக்க முடியும்.
      </ListItem>
      <ListItem>
        <strong>2. மேல் நீராடுவதை தவிர்க்க:</strong> பாக்டீரியா இலை நோய் நீரூட்டலின் மூலம் பரவுகிறது, எனவே மேல் நீராடுவதை தவிர்க்கும் மூலம் நோயின் பரவலை குறைக்க முடியும்.
      </ListItem>
      <ListItem>
        <strong>3. பயிர் சுழற்சி:</strong> பயிர் சுழற்சி நடைமுறைகளை அமல்படுத்துவதன் மூலம் நோயின் பரவலைத் தவிர்க்க முடியும் மற்றும் மண்ணில் பாக்டீரியத்தின் கூடுதலுக்கு தடையளிக்க முடியும்.
      </ListItem>
      <ListItem>
        <strong>4. நிலைத்த நிலை கொண்ட வகைகளை பயன்படுத்தல்:</strong> பாக்டீரியா இலை நோய்க்கு எதிர்ப்பு நிலைத்த நிலை கொண்ட அரிசி வகைகளை பயன்படுத்துவதன் மூலம் நோய்க்கு எதிரான பாதுகாப்பான காலம் அளிக்க முடியும்.
      </ListItem>
      <ListItem>
        <strong>5. காப்பர் அடிப்படையிலான பேசினி:</strong> காப்பர் அடிப்படையிலான பேசினிகளை நோயின் பரவலுக்கு எதிராக முன்னெச்சரிக்கையாக பயன்படுத்த முடியும். சரியான பேசினி தேர்வு மற்றும் பயன்பாட்டுக்கான வழிகாட்டிகளுக்கு விவசாய நிபுணர்களுடன் ஆலோசனை செய்யவும்.
      </ListItem>
      <ListItem>
        <strong>6. இரசாயன எதிர்ப்பு:</strong> இரசாயன எதிர்ப்புகளுக்கு தொற்றை கட்டுப்படுத்த பயன்படுத்த முடியும். ஸ்டிரெப்டோமைசின் மற்றும் கெசோகமைசின் பாக்டீரியா இலை நோயின் தொற்றை கட்டுப்படுத்த பயன்படும். சரியான இரசாயன எதிர்ப்பு பயன்பாட்டு வழிகாட்டிகளுக்கு விவசாய நிபுணர்களுடன் ஆலோசனை செய்யவும்.
      </ListItem>
    </List>
    <Subheading>பண்டி மற்றும் பூச்சி நாசினி பயன்பாடு:</Subheading>
    பண்டி மற்றும் பூச்சி நாசினி பயன்பாட்டினால் அரிசி பாக்டீரியா இலை நோயின் தாக்கங்களை குறைக்க முடியும். சரியான பண்டி பயன்பாடு தாவரங்களின் மொத்த சுகாதாரத்தை மேம்படுத்த முடியும், இதன் மூலம் அவை பல வகையான தொற்றுகளிலிருந்து பாதுகாப்பாக இருக்க முடியும். கீழே குறிப்பிடப்பட்டுள்ள பண்டி மற்றும் பூச்சி நாசினிகள் பயன்படுத்தப்படலாம்:
    <Description>
      <strong>பண்டி:</strong>
      <List>
        <ListItem>யூரியா: தாவரங்களின் வளர்ச்சிக்கு நைட்ரஜன் வழங்குகிறது.</ListItem>
        <ListItem>அமோனியம் ஸல்பேட்: நைட்ரஜன் வழங்குகிறது மற்றும் சரியான பூக்குழுவை ஊக்குவிக்கின்றது.</ListItem>
        <ListItem>அமோனியம் ஃபாஸ்பேட்: கால்சியம் உள்ளடக்கம் அதிகரிக்கின்றது மற்றும் செல் சுவரின் அடிப்படைத் தளம் வலுப்பெறுகிறது.</ListItem>
      </List>
    </Description>
    <Description>
      <strong>பூச்சி நாசினி:</strong>
      <List>
        <ListItem>காப்பர் அடிப்படையிலான பேசினி: அரிசி பாக்டீரியா இலை நோயின் பக்கமாகவும் மற்ற பூச்சி நோய்களுக்கு எதிராகவும் பயனுள்ளது.</ListItem>
        <ListItem>ஸ்டிரெப்டோமைசின்: ஒரு பாதுகாப்பு எதிர்ப்பு ஏட்டியமாக பாக்டீரியியல் தொற்றுகளுக்கு எதிராக தாவரங்களைப் பாதுகாக்கின்றது.</ListItem>
        <ListItem>கெசோகமைசின்: தாவரங்களின் உள்ளக பாதுகாப்பை வழங்குகிறது மற்றும் செல் கட்டமைப்புகளில் பூச்சி நோய்களின் வளர்ச்சியைத் தடுக்கின்றது.</ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>அரிசி பாக்டீரியா இலை நோயை விரைவாக அடையாளம் காண்பது:</Subheading>
      <strong>பண்டி:</strong>
      <List>
        <ListItem>அரிசி பாக்டீரியா இலை நோயின் தாக்கங்களை குறைக்கும் மற்றும் தாவரங்களின் நிலைத்தன்மையை மேம்படுத்துவதற்காக, யூரியா அல்லது அமோனியம் நைட்ரேட்டின் பயன்பாட்டை அதிகரிக்கவும்.</ListItem>
      </List>
      <strong>பூச்சி நாசினி:</strong>
      <List>
        <ListItem>அரிசி பாக்டீரியா இலை நோயின் பரிகாசங்கள் கண்டறியப்பட்ட உடன் உடனே காப்பர் அடிப்படையிலான பேசினி அல்லது ஸ்டிரெப்டோமைசின் மீது அடிப்படையிலான எதிர்ப்பு பயன்படுத்தவும். விரைவான மத்தியமாண்பு மூலம், நோயை பிற தாவரங்களில் பரவாமல் தடுக்கலாம் மற்றும் சேதத்தை குறைக்கலாம்.</ListItem>
      </List>

      <Subheading>கடுமையான அரிசி பாக்டீரியா இலை நோயின் பரவல்:</Subheading>
      <strong>பண்டி:</strong>
      <List>
        <ListItem>கடுமையான அரிசி பாக்டீரியா இலை நோயின் பரவலின் பருவத்தில், நைட்ரஜன், போத்தாசியம், மற்றும் பல அவசியமான ஊட்டச்சத்துகளை சேர்த்து விதைகளின் மொத்த சுகாதாரத்தை மேம்படுத்தவும்.</ListItem>
      </List>
      <strong>பூச்சி நாசினி:</strong>
      <List>
      <ListItem>கடுமையான அரிசி பாக்டீரியா இலை நோயின் பரவல் நிலைகளில், விவசாய நிபுணர்கள் அல்லது விரிவாக்க சேவைகளுடன் ஆலோசனை செய்யவும், சரியான நோய் எதிர்ப்பு மருந்துகள் பெறுவதற்கான பரிந்துரைகளைப் பெறுங்கள். அவர்கள் தாவரங்களின் பண்புகளையும் அவற்றின் சூழலையும் பொருத்து பரிந்துரைகளை வழங்குவார்கள்.</ListItem>
      </List>
    </Description>
  </Container>
</Urdu>;

    </>
  );
}
