import Blank from '../components/blank';
import Title from '../components/title';
import SubPages from '../components/subPages';
import Choices from '../components/choices';
import CompareTable from '../components/compareTable';
import Offer from '../components/offer';

//import "subPages" ilustrations
import subPages_illustration_a from '../images/services/Group 5240@2x.png';
import subPages_illustration_b from '../images/services/Group 4515@2x.png';
import subPages_illustration_c from '../images/services/Group 4549@2x.png';

//import "offer" button icons
import offer_icon_a from '../images/services/Group 4046.svg';

//"subPages" text
const subPages =[
        {illustration:subPages_illustration_a,text:"Full Service User Testing"},
        {illustration:subPages_illustration_b,text:"Videos / Survey"},
        {illustration:subPages_illustration_c,text:"Rapid User Testing"},
]
//"compareTable" text and contents;
const compareTable_title = "Compare our services";
const compareTable_text = "See below the differences between services to evaluate which type of report is ideal for your current needs.";

const compareTable_contents = [
    ["Services", "Rapid User Testing", "Videos/Surveys", "Full Service User Testing"],
    ["Targeted recruitment of test participants",true,true,true],
    ["Testing script co-design",true,true,true],
    ["Post-test survey co-design",true,true,true],
    ["Written survey report",true,true,true],
    ["Survey analysis",true,true,true],
    ["Insights and recommendations drawn from user video analysis",false,true,true],
    ["Assessment and categorisation of usability problems into a severity framework",false,true,true],
    ["Video-highlighting tool",false,false,true],
    ["Visual annotation of findings",false,false,true],
];

//"choices" texts
const choices = [
    {text:"All good?",button:"Choose a service now"},
    {text:"Not deadset?",button:"Talk to an expert",color:"#6d42ed"}
]

//"Offer"texts & icons
const offer_title ="You can also request <br/> a demo *before deciding*";
const offer_subtitle ="";
const offer_buttons =[
    {icon:offer_icon_a,text:"Request a demo"}
];


function Services() {
    return (
        <div className='flexAll'>
            <Title main_title='Services' text='Our services are divided into three formats to ensure you get the user testing report you need.'/>
            <SubPages subPages={subPages}/>
            <CompareTable compareTable_Contents={compareTable_contents} compareTable_title={compareTable_title} compareTable_text={compareTable_text} />
            <Choices choices={choices}/>
            <Offer title={offer_title} buttons={offer_buttons}/>
            {/* <Blank/> */}
        </div>
    )
}

export default Services;