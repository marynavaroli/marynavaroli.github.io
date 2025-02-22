
let edup = document.getElementById('edup');

function expandUlEdu (event) {
    const element = event.target;
    element.style.transform = 'rotate(45deg)';
    element.style.display = "none";
        if ( document.documentElement.clientWidth < 625 && element.style.gridRow !== '8 / span 1') {      
            element.style.gridRow = '8 / span 1';
            edup.style.gridRow = '8 / span 3';
            edup.style.height = '446px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 624 && document.documentElement.clientWidth < 826 && element.style.gridRow !== '5 / span 1') {
            element.style.gridRow = '5 / span 1';
            edup.style.gridRow = '5 / span 3';
            edup.style.height = '330px';
            element.style.marginTop = '50px';
            edup.style.marginTop = '50px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 824 && document.documentElement.clientWidth < 976 && element.style.gridRow !== '5 / span 1') {
            element.style.gridRow = '5 / span 1';
            edup.style.gridRow = '5 / span 3';
            edup.style.height = '302px';
            element.style.marginTop = '52px';
            edup.style.marginTop = '52px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 975 && element.style.gridRow !== '7 / span 1') {
            element.style.gridRow = '7 / span 1';
            edup.style.gridRow = '7 / span 5';
            edup.style.height = '371px';
            element.style.marginTop = '30px';
            edup.style.marginTop = '30px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else {
            element.style.display = "none";
            setTimeout(()=>{
                element.style.gridRow = '';
                edup.style.gridRow = '';
                element.style.display = "inline-block";
              }, 500);
            element.style.transform = '';
            element.style.height = '';
            edup.style.height = '';
            element.style.marginTop = '';
            edup.style.marginTop = '';
        }   
}

let educlick = document.getElementById('eduup');

educlick.addEventListener('click', expandUlEdu);

function highlightArrowEdu (event) {
    educlick.style.borderColor = 'rgba(148, 249, 212, 0.85)';
}

function unHighlightArrowEdu (event) {
    educlick.style.border = '';
}

let eduHover = document.getElementById('edup');

eduHover.addEventListener('mouseover', highlightArrowEdu);
eduHover.addEventListener('mouseout', unHighlightArrowEdu);
educlick.addEventListener('mouseover', highlightArrowEdu);
educlick.addEventListener('mouseout', unHighlightArrowEdu);



let workp = document.getElementById('workp');

function expandUlWork (event) {
    const element = event.target;
    element.style.transform = 'rotate(45deg)';
    element.style.display = "none";
        if ( document.documentElement.clientWidth < 625 && element.style.gridRow !== '13 / span 1') {      
            element.style.gridRow = '13 / span 1';
            workp.style.gridRow = '13 / span 3';
            workp.style.height = '446px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 624 && document.documentElement.clientWidth < 826 && element.style.gridRow !== '8 / span 1') {
            element.style.gridRow = '8 / span 1';
            workp.style.gridRow = '8 / span 3';
            workp.style.height = '330px';
            element.style.marginTop = '50px';
            workp.style.marginTop = '50px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 824 && document.documentElement.clientWidth < 976 && element.style.gridRow !== '8 / span 1') {
            element.style.gridRow = '8 / span 1';
            workp.style.gridRow = '8 / span 3';
            workp.style.height = '302px';
            element.style.marginTop = '52px';
            workp.style.marginTop = '52px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 975 && element.style.gridRow !== '12 / span 1') {
            element.style.gridRow = '12 / span 1';
            workp.style.gridRow = '12 / span 5';
            workp.style.height = '371px';
            element.style.marginTop = '30px';
            workp.style.marginTop = '30px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else {
            setTimeout(()=>{
                element.style.display = "inline-block";
                element.style.gridRow = '';
                workp.style.gridRow = '';
              }, 500);
            element.style.transform = '';
            element.style.height = '';
            workp.style.height = '';
            element.style.marginTop = '';
            workp.style.marginTop = '';
        }
}

let workclick = document.getElementById('workup');

workclick.addEventListener('click', expandUlWork);

function highlightArrowWork (event) {
    workclick.style.borderColor = 'rgba(148, 249, 212, 0.85)';
}

function unHighlightArrowWork (event) {
    workclick.style.border = '';
}

let workHover = document.getElementById('workp');

workHover.addEventListener('mouseover', highlightArrowWork);
workHover.addEventListener('mouseout', unHighlightArrowWork);
workclick.addEventListener('mouseover', highlightArrowWork);
workclick.addEventListener('mouseout', unHighlightArrowWork);




let hobbyp = document.getElementById('hobbyp');

function expandUlHobby (event) {
    const element = event.target;
    element.style.transform = 'rotate(45deg)';
    element.style.display = "none";
        if ( document.documentElement.clientWidth < 625 && element.style.gridRow !== '18 / span 1') {      
            element.style.gridRow = '18 / span 1';
            hobbyp.style.gridRow = '18 / span 3';
            hobbyp.style.height = '446px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 624 && document.documentElement.clientWidth < 826 && element.style.gridRow !== '11 / span 1') {
            element.style.gridRow = '11 / span 1';
            hobbyp.style.gridRow = '11 / span 3';
            hobbyp.style.height = '350px';
            element.style.marginTop = '30px';
            hobbyp.style.marginTop = '30px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 824 && document.documentElement.clientWidth < 976 && element.style.gridRow !== '11 / span 1') {
            element.style.gridRow = '11 / span 1';
            hobbyp.style.gridRow = '11 / span 3';
            hobbyp.style.height = '324px';
            element.style.marginTop = '30px';
            hobbyp.style.marginTop = '30px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else if (document.documentElement.clientWidth > 975 && element.style.gridRow !== '17 / span 1') {
            element.style.gridRow = '17 / span 1';
            hobbyp.style.gridRow = '17 / span 5';
            hobbyp.style.height = '371px';
            element.style.marginTop = '30px';
            hobbyp.style.marginTop = '30px';
            setTimeout(()=>{
                element.style.display = "inline-block";
              }, 500);
        } else {
            setTimeout(()=>{
                element.style.gridRow = '';
                hobbyp.style.gridRow = '';
                element.style.display = "inline-block";
              }, 500);
            element.style.transform = '';
            element.style.height = '';
            hobbyp.style.height = '';
            element.style.marginTop = '';
            hobbyp.style.marginTop = '';
    }   
}

let hobbyclick = document.getElementById('hobbyup');

hobbyclick.addEventListener('click', expandUlHobby);

function highlightArrowHobby (event) {
    hobbyclick.style.borderColor = 'rgba(148, 249, 212, 0.85)';
}

function unHighlightArrowHobby (event) {
    hobbyclick.style.border = '';
}

let hobbyHover = document.getElementById('hobbyp');

hobbyHover.addEventListener('mouseover', highlightArrowHobby);
hobbyHover.addEventListener('mouseout', unHighlightArrowHobby);
hobbyclick.addEventListener('mouseover', highlightArrowHobby);
hobbyclick.addEventListener('mouseout', unHighlightArrowHobby);



function resetLists(event) {
    educlick.style.transform = '';
    educlick.style.gridRow = '';
    edup.style.gridRow = '';
    educlick.style.height = '';
    edup.style.height = '';
    educlick.style.marginTop = '';
    edup.style.marginTop = '';
    workclick.style.transform = '';
    workclick.style.gridRow = '';
    workp.style.gridRow = '';
    workclick.style.height = '';
    workp.style.height = '';
    workclick.style.marginTop = '';
    workp.style.marginTop = '';
    hobbyclick.style.transform = '';
    hobbyclick.style.gridRow = '';
    hobbyp.style.gridRow = '';
    hobbyclick.style.height = '';
    hobbyp.style.height = '';
    hobbyclick.style.marginTop = '';
    hobbyp.style.marginTop = '';
}

window.addEventListener('resize', resetLists);