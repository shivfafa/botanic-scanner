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

export default function GrayLeafPrecautions() {
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
          <Heading>Gray Leaf Spot (மக்கா இருண்ட இலைகள் கறை)</Heading>
          <Description>
            <strong>Description (விவரம் ):</strong> Gray leaf spot, also known as
            Cercospora zeae-maydis, is a foliar fungal disease that affects corn
            plants. The disease is caused by the fungus Cercospora zeae-maydis,
            which infects the leaves of corn. Gray leaf spot appears as small,
            rectangular or elliptical lesions with gray centers and dark brown
            borders on the leaves. These lesions tend to enlarge and coalesce,
            leading to significant damage if not managed properly.
            <Subheading>Symptoms (அறிகுறிகள்):</Subheading>
            The symptoms of gray leaf spot disease include:
          </Description>
          <List>
            <ListItem>
              Formation of small, rectangular or elliptical lesions with gray
              centers and dark brown borders on the leaves.
            </ListItem>
            <ListItem>
              Lesions may coalesce, leading to larger areas of damaged tissue on
              the leaves.
            </ListItem>
            <ListItem>Yellowing of the areas surrounding the lesions.</ListItem>
            <ListItem>
              Premature senescence and death of affected leaves in severe cases.
            </ListItem>
            <ListItem>
              Reduced photosynthetic capacity and potential yield loss.
            </ListItem>
          </List>
          <Subheading>Causes (காரணம்):</Subheading>
          Gray leaf spot is caused by the fungus Cercospora zeae-maydis. The
          fungus thrives in warm and humid conditions, making it more prevalent
          during periods of high moisture and moderate temperatures.
          <Subheading>Impact on Crops:</Subheading>
          Gray leaf spot can have significant negative effects on corn crops.
          The disease reduces the photosynthetic area of the plant, affecting
          its ability to produce energy and nutrients. Severe infections can
          lead to premature defoliation, reduced grain fill, and ultimately,
          reduced crop yield and quality.
          <Subheading>Prevention and Management:</Subheading>
          While complete eradication of gray leaf spot may not be possible,
          various preventive and management strategies can help control its
          spread and minimize its impact on corn crops. These measures include:
          <List>
            <ListItem>
              <strong>1. Resistant Varieties:</strong> Plant corn varieties that
              show resistance to gray leaf spot disease. Resistant plants can
              tolerate the infection better and may exhibit milder symptoms.
            </ListItem>
            <ListItem>
              <strong>2. Crop Rotation:</strong> Practice crop rotation with
              non-host plants to break the disease cycle and reduce the buildup
              of the fungus in the soil.
            </ListItem>
            <ListItem>
              <strong>3. Fungicides:</strong> Apply fungicides containing active
              ingredients like Azoxystrobin, Propiconazole, or Trifloxystrobin
              as preventive measures. Consult agricultural experts for proper
              fungicide selection and application guidelines.
            </ListItem>
            <ListItem>
              <strong>4. Proper Irrigation:</strong> Avoid overhead irrigation
              and minimize leaf wetness to create unfavorable conditions for the
              fungus to grow and spread.
            </ListItem>
            <ListItem>
              <strong>5. Timely Harvest:</strong> Harvest mature corn plants
              promptly to reduce the chances of the disease spreading from
              infected to healthy plants.
            </ListItem>
          </List>
          <Subheading>
            Fertilizer and Pesticide Use (சந்தைகள் மற்றும் புழுங்கி மருந்துகளின் பயன்பாடு):
          </Subheading>
          The use of fertilizers and pesticides can play a role in managing gray
          leaf spot disease. Proper application of fertilizers can enhance the
          plant's overall health and resilience, while targeted fungicide use
          can help control the spread of the disease. Consider the following
          fertilizers and pesticides for managing gray leaf spot:
          <Description>
            <strong>Fertilizers (சந்தை):</strong>
            <List>
              <ListItem>
                Potassium Sulfate: Provides essential potassium, supporting the
                plant's resistance to diseases and overall vigor.
              </ListItem>
              <ListItem>
                Potassium Nitrate: Supplies necessary potassium and nitrogen for
                healthy foliage and improved plant growth.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides (பருத்தி நசுக்கி):</strong>
            <List>
              <ListItem>
                Azoxystrobin: A systemic fungicide effective against gray leaf
                spot and other fungal diseases, providing preventive and
                curative control.
              </ListItem>
              <ListItem>
                Propiconazole: A protective and systemic fungicide that helps
                prevent and control gray leaf spot infections.
              </ListItem>
              <ListItem>
                Trifloxystrobin: Offers broad-spectrum protection against
                various fungal diseases, including gray leaf spot.
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>Early Detection of Gray Leaf Spot:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Increase the application of potassium-based fertilizers, such as
                Potassium Sulfate or Potassium Nitrate, to support the corn's
                recovery and strengthen its resistance to disease.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Apply a targeted fungicide like Azoxystrobin, Propiconazole, or
                Trifloxystrobin immediately after detecting gray leaf spot
                symptoms. Early intervention can prevent the spread of the
                disease to other plants and minimize damage.
              </ListItem>
            </List>
            <Subheading>Severe Gray Leaf Spot Outbreak:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Use a balanced fertilizer that includes essential nutrients like
                potassium, nitrogen, and phosphorus to support the overall
                health of the corn plants, as severe infections can deplete the
                plant's nutrient reserves.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                In cases of severe gray leaf spot outbreaks, consult with
                agricultural experts or extension services for appropriate
                pesticide recommendations. They may suggest a combination of
                systemic and protective fungicides to manage the disease
                effectively.
              </ListItem>
            </List>
            <Subheading>Disease Resistance and Crop Rotation:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Incorporate organic matter and compost into the soil to improve
                its health and fertility, which can indirectly enhance the
                plant's disease resistance.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Rotate pesticides with different modes of action to reduce the
                risk of developing resistance in the fungal population.
                Implement crop rotation practices to break the disease cycle and
                minimize the recurrence of gray leaf spot.
              </ListItem>
            </List>

            <Subheading>Weather and Environmental Factors:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Adjust the timing and rates of fertilizer applications based on
                weather conditions. During periods of excessive rainfall,
                consider reducing nitrogen applications to prevent leaching and
                potential environmental issues.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Monitor weather forecasts and disease risk alerts to apply
                fungicides proactively when conditions are favorable for gray
                leaf spot development.
              </ListItem>
            </List>
            <Subheading>Local Regulations and Safety:</Subheading>

            <p>
              Always follow local regulations and safety guidelines regarding
              the use of fertilizers and pesticides.
            </p>
            <p>
              Use personal protective equipment (PPE) and proper application
              techniques when handling and applying fertilizers and pesticides.
            </p>
          </Description>
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container>
          <Heading>மக்காவில் கிரே லீஃப் ஸ்பாட் (Gray Leaf Spot)</Heading>
          <Description>
            <strong>விளக்கம் (Description):</strong> மக்கையில் கிரே லீஃப் ஸ்பாட், இது
            Cercospora zeae-maydis என அழைக்கப்படும், ஒரு சீரற்ற நோய் ஆகும்
            இது மக்கையின் பசுக்களைக் கெடுக்கின்றது. இந்த நோய், Cercospora zeae-maydis
            என்ற பசுகை உண்டாக்கிய பச்சை நுண்ணூடியது மூலம் ஏற்படும். கிரே லீஃப் ஸ்பாட்
            பசுக்களிலுள்ள சிறிய, நீளமான அல்லது முட்டையாக்கங்களின் வடிவத்தில் தோன்றுகிறது,
            அவற்றின் நடுவில் கிரே நிற மையங்களும், கருப்பு பழுப்பு தடைகளும் காணப்படுகின்றன.
            இந்த லெஸியங்களை சரியான முறையில் கட்டுப்படுத்தாத 경우, அவை ஒன்றிணைந்து மக்கையை
            கெடுக்கின்றன.
            <Subheading>அலமாற்றங்கள் (Symptoms):</Subheading>
            கிரே லீஃப் ஸ்பாட் நோயின் அறிகுறிகளுக்கு உள்ளடக்கம்:
          </Description>
          <List>
            <ListItem>
              பசுக்களில் சிறிய, நீளமான அல்லது முட்டையாக்கமான லெஸியங்கள் உருவாகும்,
              அவற்றின் நடுவில் கிரே நிற மையங்களும், கருப்பு பழுப்பு தடைகளும் காணப்படுகின்றன.
            </ListItem>
            <ListItem>
              லெஸியங்கள் ஒன்று சேர்ந்து, பசுக்களின் பாதிக்கப்பட்ட பகுதிகளின் அளவை
              பெருக்குகின்றன.
            </ListItem>
            <ListItem>பசுக்களின் பாதிக்கப்பட்ட பகுதிகளின் சுற்றிலும் மஞ்சள் நிறம் காணப்படுகின்றது.</ListItem>
            <ListItem>
              கடுமையான நிலையில், பாதிக்கப்பட்ட பசுக்கள் விரைவில் கருப்பு மாறி, பசுக்கள்
              உடைந்து விடுகின்றன.
            </ListItem>
            <ListItem>
              பாதிக்கப்பட்ட பசுக்களின் புகைப்படம் மற்றும் வழுக்கல் திறனில் குறைபாடு.
            </ListItem>
          </List>
          <Subheading>காரணம் (Causes):</Subheading>
          கிரே லீஃப் ஸ்பாட் நோயின் காரணமாக, Cercospora zeae-maydis என்ற பசுகை
          உள்ளது. இந்த பசுகை சூடான மற்றும் ஈரமான காலநிலைகளில் சிறந்த முறையில்
          வளரும், இதனால் இந்த நோய் மழை மற்றும் மத்தியில் உள்ள வெப்பநிலைப் பரிமாணங்களில்
          அதிகமாக காணப்படுகின்றது.
          <Subheading>பயிர்களுக்கு பாதிப்பு (Impact on Crops):</Subheading>
          கிரே லீஃப் ஸ்பாட் மக்கையின் பயிர்களில் குறைபாட்டை தீவிரமாக உணர்த்துகிறது.
          இந்த நோய் பசுக்களினுடைய பகுதியின் புகைப்பட மூலமாக குறைக்கின்றது,
          இதனால் பசுக்களின் சக்தியும் திறனும் பாதிக்கின்றது. கடுமையான பரவலால் பசுக்கள் விரைவில்
          கருப்பு மாறி, விதைகள் மெத்தையாவதற்கு குறைபாடு ஏற்படுகிறது, இதனால் மக்கையின்
          மற்ற பாகங்களின் அளவு மற்றும் தரம் பாதிக்கின்றது.
          <Subheading>
            தடுப்பு மற்றும் மேலாண்மை (Prevention and Management):
          </Subheading>
          கிரே லீஃப் ஸ்பாட் நோயை முற்றிலும் அழிக்க முடியாது, ஆனால் இதன் பரவலை
          கட்டுப்படுத்துவதற்கும், மக்கையின் பயிர்களுக்கு இதன் பாதிப்புகளை குறைப்பதற்கும்
          பல தடுப்பு மற்றும் மேலாண்மைகள் பயன்படுத்தப்படலாம். இந்தத் திட்டங்கள் கீழே
          கொடுக்கப்பட்டுள்ளன:
          <List>
            <ListItem>
              <strong>1. எதிர்ப்பு பயிர்கள்:</strong> மக்கையின் அவ்வகையில்
              கிரே லீஃப் ஸ்பாட் நோயின் எதிர்ப்பு காணப்படும் வகைகளை நடவேண்டும்.
              எதிர்ப்பு பயிர்கள் இந்த நோயின் பாதிப்புகளை சிறப்பாக சுமக்கின்றன மற்றும்
              சில அறிகுறிகள் காணப்படும்.
            </ListItem>
            <ListItem>
              <strong>2. பயிர்கள் மாற்றம்:</strong> பயிர்கள் மாற்றத்தை பயன்படுத்தி,
              மண்ணில் பசுகை அதிகரிக்கும் அளவைக் குறைத்து, பாதிப்பை தவிர்க்கலாம்.
            </ListItem>
            <ListItem>
              <strong>3. பசுகை எதிர்க்கும் மூலப்பொருட்களை பயன்படுத்தல்:</strong> பசுகை
              எதிர்க்கும் மூலப்பொருட்களை பிரிமிடிவ் தலையீடாக பயன்படுத்துங்கள்.
              இந்த உபகரணங்கள் பசுக்களின் பரவலை தடுக்கும் மற்றும் குறைக்கும் உதவி செய்கின்றன.
            </ListItem>
            <ListItem>
              <strong>4. சரியான நீர் செரிவு:</strong> பயிர்களை அதிக நீர்வெள்ளத்தில்
              தவிர்க்கவும் மற்றும் பசுக்களின் வளர்ச்சி மற்றும் பரவலை தடுக்கவும் பசுக்களின்
              ஈரமாக்கும் எண்ணிக்கைகளை குறைக்கவும்.
            </ListItem>
            <ListItem>
              <strong>5. முறையான அறுவடை:</strong> பசுக்களில் பாதிக்கப்பட்ட பயிர்களை
              முறையான நேரத்தில் அறுவடை செய்யுங்கள், அதனால் நோய் பாதிக்கப்பட்ட பசுக்களை
              அத்துடன் பரவ விடாமல் காக்கலாம்.
            </ListItem>
          </List>
          <Subheading>
            உரமும் பூச்சிக்கொல்லி பொருட்கள் (Fertilizer and Pesticide Use):
          </Subheading>
          உரங்களும் பூச்சிக்கொல்லி பொருட்களும் கிரே லீஃப் ஸ்பாட் நோயின் மேலாண்மையில்
          முக்கிய பங்கு வகிக்கின்றன. சரியான உரம் பயன்பாட்டினால், பசுக்களின் நிலையான
          ஆரோக்கியம் மற்றும் பலப்படுத்தல் மேம்படும், மேலும் பூச்சிக்கொல்லி பொருட்களின்
          குறியீட்டுடன் நோயின் பரவலை கட்டுப்படுத்த உதவும். கிரே லீஃப் ஸ்பாட் மேலாண்மையில்
          கீழ்காணும் உரங்கள் மற்றும் பூச்சிக்கொல்லி பொருட்கள்:
          <Description>
            <strong>உரங்கள் (Fertilizers):</strong>
            <List>
              <ListItem>
                பொட்டாஷியம் சல்பேட்: பசுக்களுக்கு தேவையான பொட்டாஷியம் வழங்கி,
                நோய்களுக்கு எதிர்ப்பு மற்றும் பசுக்களின் குறைபாடுகளை நீக்குகின்றது.
              </ListItem>
              <ListItem>
                பொட்டாஷியம் நைட்ரேட்: சரியான பசுக்களுக்கான பொட்டாஷியம் மற்றும்
                நைட்ரஜன் வழங்கி, பசுக்களின் ஆரோக்கியத்தை மேம்படுத்துகிறது.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>பூச்சிக்கொல்லி பொருட்கள் (Pesticides):</strong>
            <List>
              <ListItem>
                Azoxystrobin: கிரே லீஃப் ஸ்பாட் மற்றும் பிற பசுகை நோய்களுக்கு எதிராக
                செயல்படும் பூச்சிக்கொல்லி பொருள், இது தடுப்பு மற்றும் சிகிச்சை
                கட்டுப்பாட்டை வழங்குகிறது.
              </ListItem>
              <ListItem>
                Propiconazole: கிரே லீஃப் ஸ்பாட் எதிரான பாதுகாப்பு மற்றும்
                பூச்சிக்கொல்லி பொருள், இது நோயின் பரவலைத் தடுக்கும்.
              </ListItem>
              <ListItem>
                Trifloxystrobin: கிரே லீஃப் ஸ்பாட் மற்றும் பிற பசுகை நோய்களுக்கு
                எதிரான பரந்த செயல்பாட்டுடன் பூச்சிக்கொல்லி பொருள்.
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>
              கிரே லீஃப் ஸ்பாட் நோயின் விரைவான அடையாளம் (Early Detection of Gray Leaf Spot):
            </Subheading>
            <strong>உரங்கள் (Fertilizers):</strong>
            <List>
              <ListItem>
                கிரே லீஃப் ஸ்பாட் நோயின் விரைவான அடையாளத்தை கண்டறிந்தவுடன்,
                பொட்டாஷியம் சல்பேட் அல்லது பொட்டாஷியம் நைட்ரேட் போன்ற உரங்களை
                அதிகரித்து மக்கையின் மேம்பாட்டை ஆதரிக்க முடியும்.
              </ListItem>
            </List>
            <strong>பூச்சிக்கொல்லி பொருட்கள் (Pesticides):</strong>
            <List>
              <ListItem>
                கிரே லீஃப் ஸ்பாட் நோயின் விரைவான அடையாளம் கண்டவுடன், தெளிவான
                அறிகுறிகளை கொண்ட பசுக்களுக்கு உடனடியாக Azoxystrobin, Propiconazole
                அல்லது Trifloxystrobin போன்ற பூச்சிக்கொல்லி பொருட்களை பயன்படுத்தவும்.
                இது பரவலைத் தடுக்க உதவும்.
              </ListItem>
            </List>
            <Subheading>
              கடுமையான கிரே லீஃப் ஸ்பாட் பரவல் (Severe Gray Leaf Spot Outbreak):
            </Subheading>
            <strong>உரங்கள் (Fertilizers):</strong>
            <List>
              <ListItem>
                கடுமையான கிரே லீஃப் ஸ்பாட் பரவலின் பின்னர், பசுக்களுக்கு
                முழுமையான ஆரோக்கியத்தை வழங்க உரங்களை சேர்க்கவும், ஏனெனில்
                கடுமையான தொற்றால் பசுக்கள் நிலைத்திருக்க முடியாது.
              </ListItem>
            </List>
            <strong>பூச்சிக்கொல்லி பொருட்கள் (Pesticides):</strong>
            <List>
              <ListItem>
                கடுமையான கிரே லீஃப் ஸ்பாட் பரவலில், விவசாய நிபுணர்களிடமிருந்து
                சரியான பூச்சிக்கொல்லி பொருட்களின் பரிந்துரைகளை பெறவும்.
              </ListItem>
            </List>
            <Subheading>
              நோய்க்கான எதிர்ப்பு மற்றும் பயிர்களின் மாற்றம் (Disease Resistance and Crop
              Rotation):
            </Subheading>
            <strong>உரங்கள் (Fertilizers):</strong>
            <List>
              <ListItem>
                மண்ணின் ஆரோக்கியம் மற்றும் வளங்களை மேம்படுத்த குறைந்த அளவு உரங்கள்
                மற்றும் கம்போஸ்ட் சேர்க்கவும், இது பசுக்களுக்கு எதிர்ப்பு திறனைக்
                குறைக்கும்.
              </ListItem>
            </List>
            <strong>பூச்சிக்கொல்லி பொருட்கள் (Pesticides):</strong>
            <List>
              <ListItem>
                பூச்சிக்கொல்லி பொருட்களின் வித்தியாசமான செயல்பாடுகளுடன் கைக்கொள்ளு
                பூச்சிக்கொல்லி பொருட்களை உண்டாக்குவது, நோய் பரவலை குறைக்கும்.
              </ListItem>
            </List>
            <Subheading>
              காலநிலை மற்றும் சுற்றுச்சூழல் காரணிகள் (Weather and Environmental Factors):
            </Subheading>
            <strong>உரங்கள் (Fertilizers):</strong>
            <List>
              <ListItem>
                காலநிலைகளுக்கு ஏற்ப உரங்களின் பயன்பாட்டை தணித்து வரவேண்டும்.
              </ListItem>
            </List>
            <strong>பூச்சிக்கொல்லி பொருட்கள் (Pesticides):</strong>
            <List>
              <ListItem>
                காலநிலை வழிமுறைகளுக்கு ஏற்ப பூச்சிக்கொல்லி பொருட்களின் பரவலை
                கண்காணிக்கவும்.
              </ListItem>
            </List>
            <Subheading>
              உள்ளூர் நெறிமுறைகள் மற்றும் பாதுகாப்பு (Local Regulations and Safety):
            </Subheading>
            <p>
              பூச்சிக்கொல்லி பொருட்கள் மற்றும் உரங்களின் பயன்பாட்டிற்கு உள்ளூர்
              நெறிமுறைகளையும் பாதுகாப்பு விதிகளையும் பின்பற்றுங்கள்.
            </p>
            <p>
              பாதுகாப்பான முறையில் பணியாற்றுவதற்கான பொருட்கள் மற்றும் பாதுகாப்பு
              நெறிமுறைகள் பயன்படுத்துங்கள்.
            </p>
          </Description>
        </Container>
      </Urdu>
    </>
  );
}
