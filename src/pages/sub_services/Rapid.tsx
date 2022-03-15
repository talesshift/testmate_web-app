import Blank from '../../components/blank';
import Title from '../../components/title';
import SubTitle from '../../components/subTitle';
import WeDeliver from '../../components/weDeliver';
import Carousel from '../../components/carousel';
import Who from '../../components/who';
import Quote from '../../components/quote';

// importing illustrations for "subTitle"
import subTitle_illustration from '../../images/services/Group 4549@2x.png'
// importing images for "weDeliver"
import rapidim from '../../images/services/rapidim.png'
import weDeliver_icon_a from '../../images/home/Group 4113.png'
import weDeliver_icon_b from '../../images/home/Group 4113.png'
import weDeliver_icon_c from '../../images/home/Group 4113.png'
import weDeliver_icon_d from '../../images/home/Group 4113.png'
//import "carousel" illustrations
import our_process from '../../images/home/Group 3910.png';
import our_process_a from '../../images/home/Group 3910a.png';
import our_process_b from '../../images/home/Group 3910d.png';
import our_process_c from '../../images/home/Group 3910b.png';
import our_process_d from '../../images/home/Group 3910c.png';
//import "who" icons
import who_icon_a from '../../images/home/Group 4113.png';
import who_icon_b from '../../images/home/Group 4113.png';
import who_icon_c from '../../images/home/Group 4113.png';
import who_icon_d from '../../images/home/Group 4113.png';
//import "quote" illustration
import quote_illustration from '../../images/services/telescope.png'



// "we deliver" images,icons and text
const weDeliver_topics =[
    {icon:weDeliver_icon_a,title:"Key Findings",text:"We select the 70% most meaningful findings"},
    {icon:weDeliver_icon_b,title:"High quality user tests",text:"We 100% guarantee our testers"},
    {icon:weDeliver_icon_c,title:"Fast turn around",text:"You can receive our rapid report within 3 days"},
    {icon:weDeliver_icon_d,title:"Written-only feedback",text:"Perfect for those who don't need video analysis"},
]
const weDeliver_main ={ 
    title:"What we deliver:",
    image:rapidim,
}
//"our process" carousel slides
const process_slides = [
    {image:our_process, title:"Call our experts for free", text:"Our team in trained to understand your needs and help improve your website's UX"},
    {image:our_process_a, title:"Call our friends for free", text:"you guys like to understand your needs and help improve your website's UX"},
    {image:our_process_b, title:"Call our helpers for free", text:"Help me understand your needs and improve"},
    {image:our_process_c, title:"Call ourselves for free", text:" help improve your website's UX"},
    {image:our_process_d, title:"Call me back for free", text:" trained to understand your needs "}
  ];
//"who" text and icons
const who_items =[
    {icon:who_icon_a,text:"Brands that only desire a *quick turn around report*"},
    {icon:who_icon_b,text:"*Inspiring businesses* that wish for more than just video-only reports"},
    {icon:who_icon_c,text:"Design teams looking for a *fresh eye for their project*"},
    {icon:who_icon_d,text:"Product owners who would *benefit from written survey recommendations*"},
]
const who_title="Who is this service for?";
//"quote" text and ilustration
const quote_text = `“We review all the requirements to understand the test type, number of testers and methodologies to extract maximum learnings.”`

function Services() {
    return (
        <div className={'flexAll rapid'}>
            <Title small_title='Services' main_title='Rapid User Testing'/>
            <SubTitle button='Get to know more' illustration={subTitle_illustration} text='This service is a faster turnaround report that you can receive in a jiffy within 3 days after testing.'/>
            <WeDeliver weDeliver_topics={weDeliver_topics} weDeliver_main={weDeliver_main} />
            <div className='push'><Carousel slides={process_slides}/></div>
            <Who items={who_items} title={who_title}/>
            <Quote text={quote_text} illustration={quote_illustration}/>
            <Blank />
        </div>
    )
}

export default Services;