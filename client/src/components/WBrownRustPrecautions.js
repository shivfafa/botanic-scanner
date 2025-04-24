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

export default function WBrownRustPrecautions() {
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
<Heading>Wheat Brown Rust (கோதுமை பழுப்பு காளான் நோய்)</Heading>


  Wheat brown rust, also known as wheat leaf rust or Puccinia triticina, is a common fungal disease that affects wheat crops. The disease can cause significant damage to wheat plants, leading to reduced yields and economic losses for farmers. Understanding the symptoms, causes, and management strategies for wheat brown rust is essential for effective disease control.


<Subheading>Symptoms (அறிகுறிகள் ):</Subheading>
Wheat brown rust can be identified by the following symptoms:

Small, round to oval-shaped, brown or reddish-brown pustules on the leaves, stems, and even the spikes of the wheat plant.
These pustules are filled with rust-colored spores, giving the disease its characteristic appearance.
As the disease progresses, the pustules may merge, causing extensive rusting on the plant surface.
Severe infections can lead to premature yellowing and drying of infected leaves, reducing the plant's photosynthetic capacity.
<Subheading>Causes (காரணம்  ):</Subheading>
Wheat brown rust is caused by the fungus Puccinia triticina. The fungus primarily spreads through airborne spores, which can be carried over long distances by wind currents. Warm and humid weather conditions create a favorable environment for the disease to develop and spread rapidly. Additionally, the disease can survive on crop residues and volunteer wheat plants, contributing to its recurrence in subsequent growing seasons.

<Subheading>Prevention and Management:</Subheading>
While complete eradication of wheat brown rust may be challenging, several preventive measures and management strategies can help minimize its impact and protect wheat crops.

<List>
  <ListItem>
    <strong>1. Crop Rotation:</strong> Practice crop rotation to disrupt the disease cycle and reduce the buildup of rust spores in the soil.
  </ListItem>
  <ListItem>
    <strong>2. Resistant Varieties:</strong> Plant wheat varieties that have been bred for resistance to brown rust. Resistant varieties can significantly reduce the disease's severity.
  </ListItem>
  <ListItem>
    <strong>3. Timely Planting:</strong> Planting wheat early in the season allows the crop to establish before the disease's peak infection period, reducing its susceptibility.
  </ListItem>
  <ListItem>
    <strong>4. Fungicides:</strong> Fungicide applications can be effective in managing brown rust outbreaks. However, their use should be based on monitoring the disease's presence and severity, following recommended guidelines and safety precautions.
  </ListItem>
  <ListItem>
    <strong>5. Removal of Infected Debris:</strong> Practice good field sanitation by removing and destroying infected crop residues and volunteer wheat plants to reduce the disease's carryover.
  </ListItem>
  <ListItem>
    <strong>6. Monitoring:</strong> Regularly monitor wheat fields for early signs of rust infection to implement timely control measures.
  </ListItem>
</List>
<Subheading>Fertilizers:</Subheading>
Proper fertilization plays a crucial role in supporting wheat plant health and boosting their natural resistance to diseases like brown rust. The following fertilizers can be beneficial for wheat crops:

<List>
  <ListItem>
    <strong>1. Urea:</strong> Provides essential nitrogen for overall plant growth and development.
  </ListItem>
  <ListItem>
    <strong>2. Ammonium Nitrate:</strong> Supplies nitrogen, promoting healthy foliage and plant vigor.
  </ListItem>
  <ListItem>
    <strong>3. Calcium Nitrate:</strong> Enhances calcium availability, which is vital for cell wall strength and disease resistance.
  </ListItem>
</List>
<Subheading>Pesticides:</Subheading>
In cases where brown rust infections are severe and impacting wheat yields significantly, targeted pesticide applications may be considered. The following pesticides can help manage wheat brown rust:

<List>
  <ListItem>
    <strong>1. Propiconazole:</strong> A systemic fungicide effective against rust diseases in wheat.
  </ListItem>
  <ListItem>
    <strong>2. Tebuconazole:</strong> Provides protective and curative action against rust infections.
  </ListItem>
  <ListItem>
    <strong>3. Trifloxystrobin + Prothioconazole:</strong> A combination fungicide offering broad-spectrum disease control, including rusts.
  </ListItem>
</List>
<Subheading>Note:</Subheading>
It is crucial to follow the recommended dosage, application timings, and safety guidelines when using fertilizers and pesticides to avoid negative impacts on the environment, beneficial organisms, and human health. Consult with agricultural experts or local extension services for specific guidance tailored to your region and crop conditions.

By implementing preventive measures, proper fertilization, and targeted pesticide applications when necessary, farmers can effectively manage wheat brown rust and protect their wheat crops from substantial losses. Regular scouting and monitoring of fields are essential to detect and address rust infections early, preventing further spread and minimizing damage.
</Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
<Container>
  <Heading>கோதுமை பழுப்பு உறை நோய் (Wheat Brown Rust)</Heading>

  <Description>
    கோதுமை பழுப்பு உறை நோய் என்பது ஒரு பொதுவான பூஞ்சை நோயாகும், இது கோதுமை விளைவுகளை பாதிக்கக்கூடியதாய் இருந்து, விவசாயிகளுக்கு பொருளாதார இழப்பை ஏற்படுத்தக்கூடும். இந்த நோயின் அறிகுறிகள், காரணங்கள் மற்றும் நிர்வாக முறைகள் குறித்து புரிந்து கொள்வது, பயிர்களை திறம்பட கையாள உதவும்.
  </Description>

  <Subheading>அறிகுறிகள் (Symptoms):</Subheading>
  <Description>
    கோதுமை பழுப்பு உறை நோயின் அறிகுறிகள் பின்வருமாறு:
    <List>
      <ListItem>இலைகள், தண்டு மற்றும் தொப்பிகளில் சிறிய, சுற்றுவட்டமான பழுப்பு அல்லது சிவப்பு பழுப்பு மாசுகள்.</ListItem>
      <ListItem>இந்த மாசுகள் பழுப்பு நிறம் கொண்ட உயிரணுக்களால் நிரப்பப்பட்டிருக்கும், இது நோயின் தனித்துவமான தோற்றத்தை தரும்.</ListItem>
      <ListItem>நோய் மேம்பட்ட நிலையில், இந்த மாசுகள் ஒன்றாக இணைந்து, தாவர மேற்பரப்பில் பழுப்பு நிறமான பகுதியாக தெரியும்.</ListItem>
      <ListItem>தீவிர தொற்றின் போது, பாதிக்கப்பட்ட இலைகள் மஞ்சள் நிறமாக மாறி உலரக்கூடும், இது தாவரத்தின் தோற்றத்தை பாதிக்கலாம்.</ListItem>
    </List>
  </Description>

  <Subheading>காரணங்கள் (Causes):</Subheading>
  <Description>
    கோதுமை பழுப்பு உறை நோய் "Puccinia triticina" என்ற பூஞ்சை காரணமாக ஏற்படுகிறது. இது காற்றின் மூலம் பரவக்கூடியது, அதனால் இது தூர இடங்களுக்கும் பரவக்கூடும். சூடான மற்றும் ஈரமான வானிலை இந்த நோயின் விரைவான பரவலுக்கு உகந்த சூழலை ஏற்படுத்துகிறது. மேலும், வயலில் மீதமுள்ள பழைய பயிர்கள் மற்றும் தானியங்கி கோதுமை தாவரங்களும் இந்த நோயின் தொடர்ந்த தாக்கத்திற்கு வழிவகுக்கும்.
  </Description>

  <Subheading>தடுப்பு மற்றும் மேலாண்மை (Prevention and Management):</Subheading>
  <Description>
    இந்த நோயை முழுமையாக ஒழிக்க முடியாது, ஆனால் சில பாதுகாப்பு மற்றும் மேலாண்மை நடவடிக்கைகள் மூலம் அதன் தாக்கத்தை குறைத்து விளைவுகளை பாதுகாக்கலாம்:
    <List>
      <ListItem><strong>1. பயிர் மாற்றம்:</strong> நோயின் சுழற்சியை முடக்க மற்றும் மண்ணில் உயிரணுக்களின் சேர்வை குறைக்க பயிர் மாற்றத்தை செயல்படுத்தவும்.</ListItem>
      <ListItem><strong>2. நோய் எதிர்ப்பு வகைகள்:</strong> பழுப்பு நோயை எதிர்க்கக்கூடிய கோதுமை வகைகளை தேர்வு செய்யவும்.</ListItem>
      <ListItem><strong>3. சரியான நேரத்தில் விதைப்பு:</strong> சீசன் ஆரம்பத்திலேயே விதைப்பு செய்வதால் நோய் பரவலுக்கான நேரத்தை குறைக்க முடியும்.</ListItem>
      <ListItem><strong>4. பூஞ்சைநாசினி (Fungicide):</strong> நோய் தீவிரமானால், பூஞ்சைநாசினிகளை பரிசீலிக்கலாம், ஆனால் அவற்றின் பயன்பாடு முன்னேற்ற நிலை மற்றும் பாதுகாப்பு வழிகாட்டல்களை பின்பற்றவேண்டும்.</ListItem>
      <ListItem><strong>5. பாதிக்கப்பட்ட பாகங்களை அகற்று:</strong> வயலை சுத்தமாக வைத்திருங்கள் மற்றும் பழைய நோய்காரியங்களை அகற்றுங்கள்.</ListItem>
      <ListItem><strong>6. கண்காணிப்பு:</strong> கோதுமை வயல்களை முறையாக கண்காணிக்கவும், ஆரம்ப கட்ட அறிகுறிகளை அடையாளம் கண்டு உடனடி நடவடிக்கைகளை எடுக்கவும்.</ListItem>
    </List>
  </Description>

  <Subheading>உரங்கள் (Fertilizers):</Subheading>
  <Description>
    உரங்களின் சரியான தேர்வு கோதுமை தாவரங்களின் ஆரோக்கியத்திற்கும் நோய் எதிர்ப்பு திறனிற்கும் உதவுகிறது:
    <List>
      <ListItem><strong>1. யூரியா:</strong> தாவர வளர்ச்சிக்கு தேவையான நைட்ரஜனை வழங்குகிறது.</ListItem>
      <ListItem><strong>2. அமோனியம் நைட்ரேட்:</strong> பச்சை இலை வளர்ச்சிக்கும் தாவர சக்திக்கும் உதவும்.</ListItem>
      <ListItem><strong>3. கல்சியம் நைட்ரேட்:</strong> செல்வால் உறுதிப்படுத்தும் கல்சியம் உற்பத்திக்கு உதவுகிறது.</ListItem>
    </List>
  </Description>

  <Subheading>பூச்சி நாசினிகள் (Pesticides):</Subheading>
  <Description>
    பழுப்பு உறை நோயின் தீவிரம் அதிகமானால், கீழ்காணும் பூச்சி நாசினிகள் பயன்படலாம்:
    <List>
      <ListItem><strong>1. Propiconazole:</strong> கோதுமை பழுப்பு உறை போன்ற நோய்களுக்கு பயனுள்ள பூஞ்சைநாசினி.</ListItem>
      <ListItem><strong>2. Tebuconazole:</strong> பாதுகாப்பு மற்றும் சிகிச்சை நடவடிக்கைகளுக்குப் பயனுடையது.</ListItem>
      <ListItem><strong>3. Trifloxystrobin + Prothioconazole:</strong> பரந்த நோய்களை கையாளும் திறன் கொண்ட சேர்க்கை பூஞ்சைநாசினி.</ListItem>
    </List>
  </Description>

  <Subheading>குறிப்பு (Note):</Subheading>
  <Description>
    உரங்கள் மற்றும் பூச்சி நாசினிகளைப் பயன்படுத்தும் போது, பரிந்துரைக்கப்பட்ட அளவு, பயன்பாட்டு முறைகள் மற்றும் பாதுகாப்பு வழிகாட்டல்களை பின்பற்றுவது அவசியம். இது சுற்றுச்சூழல், பயனுள்ள உயிரினங்கள் மற்றும் மனித சுகாதாரத்தை பாதுகாக்க உதவும். உள்ளூர் வேளாண் வல்லுநர்களிடம் ஆலோசனை பெற்று உங்கள் பகுதிக்கேற்ப சிறப்பான வழிகாட்டல்களை பின்பற்றுங்கள்.
    பாதுகாப்பு நடவடிக்கைகள், சரியான உரங்கள் மற்றும் தேவையானபோது பூச்சி நாசினிகளைப் பயன்படுத்துவதன் மூலம், விவசாயிகள் பழுப்பு உறை நோயை திறம்படக் கையாளலாம் மற்றும் விளைவுகளை பாதுகாக்கலாம். வயல்களை அடிக்கடி பார்வையிட்டு கண்காணிப்பது முக்கியம், இது ஆரம்பத்திலேயே நோயைக் கண்டறிந்து பரவுவதைத் தடுக்கும்.
  </Description>
</Container>

</Urdu>

    </>
  );
}

