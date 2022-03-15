
import Intro from '../components/intro';
import Trust from '../components/trust';
import Carousel from '../components/carousel';
import Reviews from '../components/reviews';
import AboutUs from '../components/aboutUs';
import Infos from '../components/infos';
import How from '../components/how';
import Delivery from '../components/Delivery';
import Save from '../components/Save'
import Methods from '../components/methods';
import Blank from '../components/blank';

//-------------------------------------------------

//import "intro" ilustration 
import good_company from '../images/home/good_company.png';
//import "brands that trust us" logo's
import medibank_logo from '../images/home/Group 4098.png';
import westpac_logo from '../images/home/layer1.png';
import mastercard_logo from '../images/home/Mastercard-logo.png';
import woolworths_logo from '../images/home/woolworths-logo.png';
import australianGov_logo from '../images/home/Group 4110.png';
//import "porcess" illustrations
import our_process from '../images/home/Group 3910.png';
import our_process_a from '../images/home/Group 3910a.png';
import our_process_b from '../images/home/Group 3910d.png';
import our_process_c from '../images/home/Group 3910b.png';
import our_process_d from '../images/home/Group 3910c.png';
//import "reviews" images
import octopus_icon from '../images/home/octopus.svg'
import main_review_img from '../images/home/docusign-xo3fdXgTJP8-unsplash.png'
import small_review_img_a from '../images/home/daria-pimkina-tYaccl19A3Q-unsplash.png'
import small_review_img_b from '../images/home/linkedin-sales-solutions-pAtA-1.png'
import small_review_img_c from '../images/home/linkedin-sales-solutions-pAtA8xe iVM-unsplash.png'
//import "aboutUs" images
import main_aboutUs from '../images/home/Group 33.png';
import topic_aboutUs_a from '../images/home/Group 4113.png';
import topic_aboutUs_b from '../images/home/Group 4116.png';
import topic_aboutUs_c from '../images/home/Group 4114.png';
import topic_aboutUs_d from '../images/home/Group 4117.png';
import topic_aboutUs_e from '../images/home/Group 4115.png';
import topic_aboutUs_f from '../images/home/Group 4118.png';
//import "info's" images and decorations
import main_infosDecoration from '../images/home/Group 62.png';
import topic_infosDecoration_a from '../images/home/Group 22.png';
import topic_infosDecoration_b from '../images/home/Group 34.png';
import topic_infosImage_a from '../images/home/pexels-thisisengineering-3861970@2x.png'
import topic_infosImage_b from '../images/home/pexels-michael-burrows-7148031@2x.png'
import topic_infosImage_c from '../images/home/pexels-fox-1595391@2x.png'
import topic_infosImage_d from '../images/home/ux-indonesia-8mikJ83LmSQ-unsplash@2x.png'
//import "how" icons
import how_topicIcon_a from '../images/home/Path 5432.png';
import how_topicIcon_b from '../images/home/Group 3921.png';
import how_topicIcon_c from '../images/home/Path 5676.png';
import how_topicIcon_d from '../images/home/Group 3923.png';
import how_topicIcon_e from '../images/home/Group 3920.png';
import how_topicIcon_f from '../images/home/Group 3922.png';
//import "delivery" illustration 
import delivery_illustration from '../images/home/Group 4119.png';
//import "save" ilustrations and icons
import save_illustration from '../images/home/Group 4066.png';
import save_buttonIcon from '../images/home/Group 3927.png';
import save_topicIcon_a from '../images/home/Group 4120.png';
import save_topicIcon_b from '../images/home/Group 4121.png';
import save_topicIcon_c from '../images/home/video-camera.png';
import save_topicIcon_d from '../images/home/agile.png';
import save_topicIcon_e from '../images/home/Group 4124.png';
//import "methods" icons
import methods_icon_a from '../images/home/telephone.svg';
import methods_icon_b from '../images/home/orbit.svg';

//-------------------------------------------------

//"brands that trust us" logos
const companys = [
    woolworths_logo,
    australianGov_logo,
    medibank_logo,
    westpac_logo,
    mastercard_logo
  ];
//"our process" carousel slides
  const process_slides = [
    {image:our_process, title:"Call our experts for free", text:"Our team in trained to understand your needs and help improve your website's UX"},
    {image:our_process_a, title:"Call our friends for free", text:"you guys like to understand your needs and help improve your website's UX"},
    {image:our_process_b, title:"Call our helpers for free", text:"Help me understand your needs and improve"},
    {image:our_process_c, title:"Call ourselves for free", text:" help improve your website's UX"},
    {image:our_process_d, title:"Call me back for free", text:" trained to understand your needs "}
  ];
//"reviews" texts and images
  const main_review = {
    icon:octopus_icon,
    title:"Reviews & Testimonials",
    image:main_review_img,
    score:4.7,
    name:"Google Reviews",
    bold_text:"Lorem ipsum dolor sit amet, sonsectetur adipiseing alit. ",
    text: "Ut vel est nec nisl hendrerit molestie. Vestibulum vestibulum finibus accurnsan. Praesent commodo.",
  };
  const small_reviews = [
    {image:small_review_img_a,
      quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name:"Amanda Smith",
      position:"Head of Research at Ford Company"},
    {image:small_review_img_b,
      quote:"In exercitation ipsum dolor consequat et eiusmod duis.",
      name:"Amanda Smith",
      position:"Janitor at The Mall Next Door"},
    {image:small_review_img_c,
      quote:"Dolore voluptate eu amet ullamco cupidatat eiusmod.",
      name:"Amanda Smith",
      position:"Head of Design Systems at Rockfeller Inc."}
  ];

//"about Us" texts and images
const aboutUs_main ={
  title:"About Us",
  text:"We are an Australian-owned company that uses real Australian testers to improve your website's usability.",
  image:main_aboutUs,
}
const aboutUs_topics =[
  {image:topic_aboutUs_a, text:"+6,000 user tests performed"},
  {image:topic_aboutUs_b, text:"100% Australian Testers"},
  {image:topic_aboutUs_c, text:"friendly customer support"},
  {image:topic_aboutUs_d, text:"+6 years of experience"},
  {image:topic_aboutUs_e, text:"Tailored-made tests"},
  {image:topic_aboutUs_f, text:"+10,000 qualified testers"},
] 

//"infos" texts and images
const infos_main ={
  title:"Get the support your team needs with our fresh insight",
  paragraph:"Your team will get the best support from us, with a fresh insight into your website's UX to tell you if you're on the right path.",
  decoration:main_infosDecoration,
}
const infos_topics =[
  {image:topic_infosImage_a,
    decoration:topic_infosDecoration_a,
    title:"Expert UX researchers",
    paragraph:"Get the most efficient website user testing report. Our senior experts will help you optimize your website's UX.",
    button:"Talk to a UX Specialist",},
  {image:topic_infosImage_b,
    decoration:topic_infosDecoration_b,
    title:"Friendly customer support and efficient feedback",
    paragraph:"You will promptly get all the answers about your user testing process to help you understand your results.",
    button:"Get the Best Support",},
  {image:topic_infosImage_c,
    decoration:topic_infosDecoration_a,
    title:"Integrate with your team",
    paragraph:"If you already have a user testing team, we can work with them to give fresh eyes to your website's UX.",
    button:"Get a new Insight",},
  {image:topic_infosImage_d,
    decoration:topic_infosDecoration_b,
    title:"Fast results",
    paragraph:"Make more money with better UX and save time with our simplified user testing service.",
    button:"Save Time and Money",}
] 

//"how" texts and images
const how_topics = [
  {icon:how_topicIcon_a, text:"Your data is safe with us"},
  {icon:how_topicIcon_b, text:"Critical thinking"},
  {icon:how_topicIcon_c, text:"Large tester database"},
  {icon:how_topicIcon_d, text:"Australian owned and operated"},
  {icon:how_topicIcon_e, text:"Clear outcomes"},
  {icon:how_topicIcon_f, text:"Testers that match the profile of your website users"},
]
const how_header = {
  title:"How we work",
  paragraph:"You don't have to try to read your customer's mind anymore. We show you what your customer thinks about your website and give you the solutions."
}

//"Delivery" text and images
const delivery_topics = [
  {text:"List of usability problems"},
  {text:"Net Promoter Score (NPS)"},
  {text:"Actionable solutions"},
  {text:"System Usability Scale (SUS)"},
  {text:"Key findings"},
  {text:"Video testimonials"}
]
const delivery_header = {
  title:"Our delivery",
  paragraph:"Get easy-to-read written and video reports to improve your company results"
} 

//"Save" text and images
const save_topics = [
  {icon:save_topicIcon_a, text:"Fast turnaround"},
  {icon:save_topicIcon_b, text:"Guarantee 100% of your money"},
  {icon:save_topicIcon_c, text:"Save time with video reports"},
  {icon:save_topicIcon_d, text:"Shortened tests"},
  {icon:save_topicIcon_e, text:"Cost-effective solution for your website"},
]
const save_main = {
  title:"Save time and money",
  paragraph:"Poor user experience can make your company lose money. We will give you a cost-effective user testing service to improve your website usability.",
  illustration:save_illustration,
  button:save_buttonIcon
}

//"methods" text and images
const methods_buttons = [
  {icon:methods_icon_a, text:"Book a free call", color:"orange"},
  {icon:methods_icon_b, text:"Check our Services",color:"purple"},
]
const methods_main = {
  title:"Have a squiz at our methods",
  subtitle:"See how fast you can receive results.",
}

function Home() {

    return (
        <div className='flexAll'> 
            <Intro image={good_company}/>
            <Trust companys={companys}/>
            <div className='normal'>
              <Carousel slides={process_slides}/>
            </div>
            
            <Reviews small_reviews={small_reviews} main_review={main_review}/>
            <AboutUs aboutUs_main={aboutUs_main} aboutUs_topics={aboutUs_topics}/>
            <Infos info_main={infos_main} info_topics={infos_topics} />
            <How how_header={how_header} how_topics={how_topics}/>
            <Delivery delivery_topics={delivery_topics} delivery_header={delivery_header} delivery_illustration={delivery_illustration}/>
            <Save save_topics={save_topics} save_main={save_main}/>
            <Methods methods_main={methods_main} methods_buttons={methods_buttons}/>
            
        </div>
    );
}

export default Home;
