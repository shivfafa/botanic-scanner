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

export default function TungroPrecautions() {
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
    <Heading>Rice Tungro Disease (பருப்பு தொங்குரு நோய்)</Heading>
    <Description>
      <strong>Description:</strong> Rice Tungro Disease is a viral disease
      primarily transmitted by leafhoppers that affects rice plants. The virus
      causes yellowing of leaves, stunting of plant growth, and reduced grain
      formation, leading to significant yield losses.
    </Description>
    <Subheading>Symptoms (அறிகுறிகள்):</Subheading>
    <List>
      <ListItem>Yellowing and drying of young leaves.</ListItem>
      <ListItem>
        Stunting of plants, resulting in reduced plant vigor.
      </ListItem>
      <ListItem>
        In severe cases, the formation of "hopper burn" due to leafhopper
        feeding.
      </ListItem>
      <ListItem>
        Reduced grain formation and overall poor yield.
      </ListItem>
    </List>
    <Subheading>Causes (காரணம்):</Subheading>
    Rice Tungro Disease is caused by a complex of viruses that are primarily
    transmitted by green leafhoppers (Nephotettix spp.).
    <Subheading>Impact on Crops (பயிர்கள் மீது தாக்கங்கள்):</Subheading>
    Rice Tungro Disease can cause severe yield losses, leading to economic
    hardship for rice farmers. The disease affects both the quantity and
    quality of the rice harvest.
    <Subheading>Prevention and Management (தடுக்கல் மற்றும் மேலாண்மை):</Subheading>
    While complete eradication of Rice Tungro Disease may not be possible,
    several measures can help manage and minimize its impact:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties (எதிர்ப்பு வகைகள்):</strong> Planting rice
        varieties with resistance to Rice Tungro can reduce disease severity.
      </ListItem>
      <ListItem>
        <strong>2. Elimination of Host Plants (உணவுப் பொருள் செடியின் வெளியீடு):</strong>{" "}
        Remove and destroy any nearby alternative host plants that may harbor
        the virus or the leafhopper vector.
      </ListItem>
      <ListItem>
        <strong>3. Seed Treatment (விதை சிகிச்சை):</strong> Treat rice seeds with
        Imidacloprid, Thiamethoxam, Clothianidin, or other appropriate
        pesticides to reduce the chance of transmission from infected seeds.
      </ListItem>
      <ListItem>
        <strong>4. Biological Control (உயிரியல் கட்டுப்பாடு):</strong> Encourage the
        presence of natural predators and parasites of leafhoppers to control
        their population.
      </ListItem>
      <ListItem>
        <strong>5. Vector Control (விக்டர் கட்டுப்பாடு):</strong> Apply appropriate
        insecticides to control leafhoppers and prevent their spread of the
        virus.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (சந்தைகள் மற்றும் புழுங்கி மருந்துகளின் பயன்பாடு):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of Rice Tungro Disease. Proper application of fertilizers and
    targeted use of pesticides can improve the overall health of the rice
    plants and control the leafhopper vector.
    <Description>
      <strong>Fertilizers (சந்தை):</strong>
      <List>
        <ListItem>
          Magnesium Sulfate: Provides magnesium, an essential nutrient for plant
          photosynthesis and enzyme activation.
        </ListItem>
        <ListItem>
          Magnesium Nitrate: Supplies nitrogen and magnesium for healthy plant
          growth.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (பசுமை மருந்துகள்):</strong>
      <List>
        <ListItem>
          Seed treatment with Imidacloprid: Controls insect pests, including the
          leafhopper vector, during early stages of plant growth.
        </ListItem>
        <ListItem>
          Seed treatment with Thiamethoxam: Provides protection against
          leafhoppers and reduces virus transmission from infected seeds.
        </ListItem>
        <ListItem>
          Seed treatment with Clothianidin: Offers systemic protection against
          insect pests, including leafhoppers.
        </ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Rice Tungro (சோளம் டாங்க்ரோவின் உடனடி அடையாளம்):</Subheading>
    <List>
      <ListItem>
        Monitor rice fields regularly for the presence of leafhoppers and
        yellowing symptoms.
      </ListItem>
      <ListItem>
        If detected early, take immediate action to prevent the spread of the
        disease.
      </ListItem>
    </List>
    <Subheading>Severe Rice Tungro Outbreak (சோளம் டாங்க்ரோவின் தீவிர பரவல்):</Subheading>
    <List>
      <ListItem>
        In case of a severe Rice Tungro outbreak, seek assistance from
        agricultural experts or extension services for appropriate pest
        management strategies.
      </ListItem>
    </List>
    <Subheading>Weather and Environmental Factors (பருவநிலை மற்றும் சுற்றுச்சூழல் காரணிகள்):</Subheading>
    <strong>Fertilizers (உரங்கள்):</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. Take into account factors like excessive rainfall, which may
        affect nutrient availability in the soil.
      </ListItem>
    </List>
    <strong>Pesticides (பசுமை மருந்துகள்):</strong>
    <List>
      <ListItem>
        Apply insecticides proactively when conditions are favorable for
        leafhopper activity and virus transmission.
      </ListItem>
    </List>
    <Subheading>Local Regulations and Safety (உள்ளூர் ஒழுங்குகளும் பாதுகாப்பு நடவடிக்கைகளும்):</Subheading>
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
  <Heading>சோளம் டாங்க்ரோவின் நோய் (Rice Tungro Disease)</Heading>
  <Description>
    <strong>விளக்கம்:</strong> சோளம் டாங்க்ரோ நோய் என்பது ஒரு வைரஸ் நோயாகும், இது முக்கியமாக பத்திரித்தல் ஆயிலாளர்களின் மூலமாக சோளம் தாவரங்களை பாதிக்கிறது. இந்த வைரஸ் இலைகளின் எளிதில் வளைந்து விடுவதையும், தாவரத்தின் வளர்ச்சி தடைபட்டுவிடுவதையும் உருவாக்குகிறது, இதனால் பயிரின் ஆளுகையில் குறைபாடு மற்றும் தான்களின் உருவாக்கத்தில் குறைபாடு ஏற்படுகிறது, இது பயிரின் முடிவுகளில் சேதத்தை ஏற்படுத்துகிறது.
  </Description>
  <Subheading>ஆலமைகள் (Symptoms):</Subheading>
  <List>
    <ListItem>இலைகளின் வளைந்துகொள்வதும் குருட்டும் ஆகுவதும்.</ListItem>
    <ListItem>தாவரங்கள் சுருங்கி, அவற்றின் ஆரோக்கியம் பாதிக்கப்படுவது.</ListItem>
    <ListItem>கடுமையான நிலைகளில், பத்திரித்தல் ஆயிலாளர்களின் குத்தும் காரணமாக "ஹாப்பர் பர்ன்" உருவாகும்.</ListItem>
    <ListItem>தான்களின் உருவாக்கத்தில் குறைபாடு மற்றும் பயிரின் மொத்த குறைபாடு.</ListItem>
  </List>
  <Subheading>காரணங்கள் (Causes):</Subheading>
  சோளம் டாங்க்ரோ நோய் என்பது குறிப்பிட்ட வைரசுகளின் மூலமாக ஏற்படும் ஒரு நோய் ஆகும், இது முக்கியமாக பசும்பத்திரித்தல் ஆயிலாளர்கள் (Nephotettix spp.) மூலம் பரவுகிறது.
  <Subheading>பயிர்களுக்கான தாக்கங்கள் (Impact on Crops):</Subheading>
  சோளம் டாங்க்ரோ நோயின் காரணமாக பயிர்களின் இழப்பு குறைகிறது, இது சோளத்தின் அளவும் தரமும் பாதிக்கிறது.
  <Subheading>தடுக்க மற்றும் மேலாண்மை (Prevention and Management):</Subheading>
  சோளம் டாங்க்ரோ நோயின் முழுமையான போக்கு இருக்க முடியாது, ஆனால் சில முன்னெச்சரிக்கை நடவடிக்கைகளின் மூலம் இதன் தாக்கங்களை குறைக்க முடியும்:
  <List>
    <ListItem>
      <strong>1. எதிர்ப்பு வகைகள் (Resistant Varieties):</strong> சோளம் டாங்க்ரோ நோய்க்கு எதிர்ப்பு உள்ள சோளம் வகைகளை பயிரிடுங்கள்.
    </ListItem>
    <ListItem>
      <strong>2. வரவேற்பு தாவரங்களை நீக்குதல் (Elimination of Host Plants):</strong> பாதிக்கப்பட்ட வைரசுகளோ அல்லது பத்திரித்தல் ஆயிலாளர்களின் வேக்டர் அருகிலுள்ள பரிமாண தாவரங்களை கீறி அழிக்கவும்.
    </ListItem>
    <ListItem>
      <strong>3. விதை சிகிச்சை (Seed Treatment):</strong> சோளம் விதைகளை Imidacloprid, Thiamethoxam, Clothianidin அல்லது பிற பொருத்தமான பூச்சி நாசினி பிசின்களுடன் சிகிச்சை செய்கின்றனர், இதனால் வைரஸ் பரவுவதை தடுக்க முடியும்.
    </ListItem>
    <ListItem>
      <strong>4. जैविक नियंत्रण (Biological Control):</strong> பத்திரித்தல் ஆயிலாளர்களின் இயற்கையான நச்சுகளை மற்றும் எதிரி உயிரினங்களின் அடையாளங்களை அதிகரிக்கவும், அவற்றின் எண்ணிக்கையை கட்டுப்படுத்தவும்.
    </ListItem>
    <ListItem>
      <strong>5. வேக்டர் கட்டுப்பாடு (Vector Control):</strong> வைரஸின் பரவலை தடுக்க பொருத்தமான பூச்சி நாசினி பயன்பாட்டை செய்க.
    </ListItem>
  </List>
  <Subheading>கோடிகள் மற்றும் பூச்சி நாசினி பயன்பாடு (Fertilizer and Pesticide Use):</Subheading>
  கோடிகள் மற்றும் பூச்சி நாசினி பயன்பாடு சோளம் டாங்க்ரோ நோயை கட்டுப்படுத்தவும், அதன் தாக்கங்களை குறைக்கவும் உதவுகிறது. கோடிகளை சரியான முறையில் பயன்படுத்தி, பூச்சி நாசினி கொண்டு செயல் படுத்துவதன் மூலம் சோளம் தாவரத்தின் முழுமையான ஆரோக்கியத்தை மேம்படுத்த முடியும்.
  <Description>
    <strong>கோடிகள் (Fertilizers):</strong>
    <List>
      <ListItem>
        மெக்னேசியம் சல்பேட்: தாவரங்களின் புகைப்படத் சித்திரங்களை மற்றும் எண்சைம் செயல்பாட்டை தேவையான கனிமங்களை வழங்குகிறது.
      </ListItem>
      <ListItem>
        மெக்னேசியம் நைட்ரேட்: சரியான தாவர வளர்ச்சிக்கு நைட்ரோஜன் மற்றும் மெக்னேசியம் வழங்குகிறது.
      </ListItem>
    </List>
  </Description>
  <Description>
    <strong>பூச்சி நாசினி (Pesticides):</strong>
    <List>
      <ListItem>
        Imidacloprid மூலம் விதை சிகிச்சை: தாவரங்களின் ஆரம்ப வளர்ச்சி நிலைகளில் பூச்சிகள், பத்திரித்தல் ஆயிலாளர்கள் மற்றும் பிற பூச்சிகளைக் கட்டுப்படுத்துகிறது.
      </ListItem>
      <ListItem>
        Thiamethoxam மூலம் விதை சிகிச்சை: பத்திரித்தல் ஆயிலாளர்களின் இயற்கையான எதிரிகள் மற்றும் தற்போதைய நோயின் பரவலை தடுக்கும்.
      </ListItem>
      <ListItem>
        Clothianidin மூலம் விதை சிகிச்சை: பத்திரித்தல் ஆயிலாளர்களிடமிருந்து மற்றும் பிற பூச்சிகளிடமிருந்து பாதுகாப்பு வழங்குகிறது.
      </ListItem>
    </List>
  </Description>
  <Subheading>சோளம் டாங்க்ரோ நோயின் ஆரம்ப அறிதல் (Early Detection of Rice Tungro):</Subheading>
  <List>
    <ListItem>
      சோளம் வயல்களைக் குறும்படமாக பரிசோதிக்கவும், பத்திரித்தல் ஆயிலாளர்களின் எத்தனை மற்றும் இலைகளின் வளைவுக் குறியீட்டுகளை கண்டறியவும்.
    </ListItem>
    <ListItem>
      ஆரம்ப அறிதல் நடந்துவிட்டால், உடனடியாக குறைபாடுகள் பரவாமல் தடுக்க செயற்கை முறைகளை பின்பற்றவும்.
    </ListItem>
  </List>
  <Subheading>சோளம் டாங்க்ரோ நோயின் தீவிர பரவல் (Severe Rice Tungro Outbreak):</Subheading>
  <List>
    <ListItem>
      சோளம் டாங்க்ரோ நோயின் தீவிர பரவல் நடந்துவிட்டால், வேளாண்மை நிபுணர்களோ அல்லது விரிவாக்க சேவைகளோ மூலம், பாதிக்கப்பட்ட பூச்சி நாசினி மேலாண்மைக்கு உதவி பெறவும்.
    </ListItem>
  </List>
  <Subheading>வானிலை மற்றும் சூழல் காரணி (Weather and Environmental Factors):</Subheading>
  <strong>கோடிகள் (Fertilizers):</strong>
  <List>
    <ListItem>
      வானிலை அடிப்படையில், சரியான கோடியின் அமைப்பு மற்றும் தரவுகளை சரிசெய்யவும். மிகப்பெரிய மழையை முன் சிந்தனை செய்து, மண்ணில் உள்ள கனிமத் திறனை கணக்கில் எடுத்துக் கொள்ளவும்.
    </ListItem>
  </List>
  <strong>பூச்சி நாசினி (Pesticides):</strong>
  <List>
    <ListItem>
      பத்திரித்தல் ஆயிலாளர்களின் இருப்பின், வைரஸ் பரவலை தடுக்கும் போது சரியான நேரத்தில் பூச்சி நாசினி பயன்படுத்தவும்.
    </ListItem>
  </List>
  <Subheading>உள்ளூர் சட்டங்கள் மற்றும் பாதுகாப்பு நடைமுறைகள் (Local Regulations and Safety):</Subheading>
  <p>
    எப்பொழுதும், கோடிகள் மற்றும் பூச்சி நாசினி பயன்பாட்டு உள்ளூர் சட்டங்கள் மற்றும் பாதுகாப்பு நடைமுறைகளை பின்பற்றவும்.
  </p>
  <p>
    கோடிகள் மற்றும் பூச்சி நாசினிகளை கையாளும்போது, பரிசோதிக்கப்பட்ட பாதுகாப்பு உபகரணங்களுடன் பயன்பாடு செய்யவும்.
  </p>
  <p>
    சுற்றுச்சூழலிலும், இலக்கா இல்லாத உயிரினங்களும் பாதிக்கப்படாமல், பரிந்துரைக்கப்பட்ட நிபுணர்களுடன் ஆலோசிக்கவும்.
  </p>
</Container>

</Urdu>

    </>
  );
}
