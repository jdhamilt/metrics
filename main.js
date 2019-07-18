/* QUICK CHANGE VARIABLES 
var descriptionTitle1 = 'DHITS Demo A';
var descriptionTitle2 = 'DHITS Demo B';
var descriptionTitle3 = 'DHITS Demo C';
var descriptionTitle4 = 'DHITS Demo D';


// images from img folder
var image1 = 'gauge.png';
var image2 = 'dha7.png';
var image3 = 'single-axis.png';
var image4 = 'trendline2.png';
*/

var kunalTest = 'tetVar'
var descriptionTitle1 = 'DHITS Demo: Chicago Crime Statistics';
var descriptionTitle2 = 'DHITS Demo: IMS Quater2 Dashbord';
var descriptionTitle3 = 'DHITS Demo: IMS Dashboard';
var descriptionTitle4 = 'DHITS Demo: D2D Dashboard';

// images from img folder
var image1 = 'globe.png';
var image2 = 'schedule.png';
var image3 = 'single-axis.png';
var image4 = 'trendline2.png';

// for mesoc deployments, feFolder will need to contain /app as well
var feFolder = 'SemossWebAppUI',
    eriADEngineId = '29b1dcf4-538f-437b-8b93-98feec7f53ae'
    imsPerformanceEngineId = '29b1dcf4-538f-437b-8b93-98feec7f53ae',
    mJADInsight = '5c02ae7f-df54-4b7f-a5a2-85d601b874af',
    imsTaskVarInsight = '5c02ae7f-df54-4b7f-a5a2-85d601b874af',
    imsPerformanceInsight = '5c02ae7f-df54-4b7f-a5a2-85d601b874af',
    imsHistoricalInsight = '',
    historicalTrackingEngineId = '',
    d2dProgressInsight = '';





//check if user is using Chrome or a different browser
if (window.navigator.userAgent.indexOf('Chrome') === -1) {
    alert('We recommend using Google Chrome or Microsoft Edge to view the Dashboards');
}

//first we check if a hash exists to either openHome or openInsight
//if a hash exist, we loop through the title and match it to the title of an insight
window.onload = function () {
    checkHash();
}

// event listener functions

function checkHash() {
    if (window.location.hash) {
        var nomatch = true;
        for (var j = 0; j < insights.length; j++) {
            if (insights[j].descriptionTitle.toLowerCase().split(' ').join('-') == window.location.hash.substr(1)) {
                openInsight(j);
                nomatch = false;
            }
        }
        if (nomatch) {
            openHome();
        }
    } else {
        openHome();
    }
}

var closeModal = function (e) {
    var modal = document.getElementById('modal');
    var box = document.getElementById('description-box');
    var inner = document.getElementById('inner-modal');
    if (modal.className === 'open') {
        modal.className = 'closed';
        box.className = 'closed';
        box.innerHTML = '';
        inner.className = 'closed';
    }
};
var openModal = function (e) {
    var insightIdx = this.id.split('-')[2],
        modal = document.getElementById('modal'),
        box = document.getElementById('description-box'),
        inner = document.getElementById('inner-modal');

    modal.className = 'open';
    inner.className = 'open';
    box.className = 'open';

    box.innerHTML = insights[insightIdx].description;

};

var openMenu = function () {
    document.getElementById('header-middle').className = 'header-middle open';
};

var closeMenu = function () {
    document.getElementById('header-middle').className = 'header-middle close';
};


var openInsight = function (insightIndex) {
    var playbookHtml = '';
    playbookHtml += '<div class="insight-box">';
    playbookHtml += '<div class="insight-box-right">';
    playbookHtml += '<div id="' + insights[insightIndex].descriptionTitle.toLowerCase().split(' ').join('-') + '"><h3>' + insights[insightIndex].descriptionTitle + '<i class="fa fa-info-circle" id="insight-main-' + insightIndex + '"></i></h3></div>';
    playbookHtml += '</div>';
    playbookHtml += '<div class="insight-box-left">';
    playbookHtml += '<iframe id="iframeHolder" onload="hideLoading()" style="background-color: #FFFFFF;" src="' + insights[insightIndex].url + '"></iframe>';
    playbookHtml += '<div id="iframeLoading"><div class = "gifHolder"><img class="loadingGif" src="img/loading9.svg"></div></div>';
    playbookHtml += '</div>';
    playbookHtml += '</div>';
    document.getElementById('playbookContent').innerHTML = playbookHtml;
    document.getElementById('insight-main-' + insightIndex + '').addEventListener('click', openModal);
    closeMenu();
    window.location.hash = insights[insightIndex].descriptionTitle.toLowerCase().split(' ').join('-');
};

var openHome = function () {
    var homepage = '',
        numPerRow = 4;
    insights.forEach(function (insight, idx) {
        if (idx % numPerRow === 0) {
            homepage += '<div class="insight-preview-row">';
        }

        homepage += '<a onclick="openInsight(' + idx + ');" class="insight-click">';
        // homepage += '<div class="insight-preview-container">';
        homepage += '<div class="insight-preview">';
        homepage += '<div class="insight-preview-title"><h3>';
        homepage += insight.descriptionTitle;
        homepage += '</h3></div>';
        homepage += '<div class="insight-preview-image">';
        homepage += '<img src="' + insight.image + '">';
        homepage += '</div>';
        homepage += '<div class="insight-preview-description">';
        homepage += insight.shortdescription;
        homepage += '</div>';
        // homepage += '</div>';
        homepage += '</div>';
        homepage += '</a>';

        if (idx % numPerRow === (numPerRow - 1)) {
            homepage += '</div>';
        }
    });
    document.getElementById('playbookContent').innerHTML = homepage;
    //remove hash from URL

    window.location.hash = window.location.hash.substr(0, 0);
}



var mJAD_DESCRIPTION = '<h2 style="text-align:center;">mJAD Migration Statistics Dashboard</h2>';
mJAD_DESCRIPTION += '<p>Welcome to the mJAD. Migration Statistics Dashboard. On this page, you are able to:<p>';
mJAD_DESCRIPTION += '<ol><li>View summary mJAD Statistics</li>';
mJAD_DESCRIPTION += '<li>Filter mJAD Statistics by Service and/or Region</li>';
mJAD_DESCRIPTION += '<li>View mJAD Statistics for the selected Service(s) and Region(s), with % Migrated statistics filtered on the selections</li>';
mJAD_DESCRIPTION += '<li>View mJAD object details (Total Active Objects, mJAD, Legacy, etc.)</li>';
mJAD_DESCRIPTION += '<li>View the count of mJAD and Legacy objects for each selected Service, filtered on selected Region(s)</li>';
mJAD_DESCRIPTION += '<li>Export Identifier mJAD object details to CSV</li></ol>';


var TASK_VAR_DESCRIPTION = '<h2 style="text-align:center;">IMS Task Variance Dashboard</h2>';
TASK_VAR_DESCRIPTION += '<p>Welcome to the IMS Task Variance Dashboard. On this page, you are able to:<p>';
TASK_VAR_DESCRIPTION += '<ol><li>For tasks completed in Q2, view Average Actual Task Duration against the Average Task Target Duration</li>';
TASK_VAR_DESCRIPTION += '<li>View Actual Duration against Target Duration for each site that completed a task in Q2</li>';


var PERFORMANCE_DESCRIPTION = '<h2 style="text-align:center;">IMS Performance Dashboard</h2>';
PERFORMANCE_DESCRIPTION += '<p>Welcome to the IMS Performance Dashboard. On this page, you are able to:<p>';
PERFORMANCE_DESCRIPTION += '<ol><li>View completion status of tasks for each site, including the Fiscal Year or Quarter in which each task was completed</li>';
PERFORMANCE_DESCRIPTION += '<li>View a task’s Actual Duration against Target Duration by Fiscal Year or Quarter for each site that completed the task</li>';

// Please keep the descriptionTitle and shortDescription as close to the same # of characters as possible

var insights = [{
            "descriptionTitle": descriptionTitle1,
            "shortdescription": "This dashboard shows the migration status of objects to the mJAD down to the site level. All data is real-time and can be filtered by Service or Region.",
            "description": mJAD_DESCRIPTION,
            "url": "http://dhacluster-proxy-962e3c61-1924685-wdc04.lb.bluemix.net:30828/SemossWeb/#!/insight?type=multi&engine=51ec8011-a654-4785-97f3-39bdf5ee15df&id=d444c057-d2aa-45b8-93aa-2d9f25289ac1",
            "image": 'img/' + image1
        },
        {

            "descriptionTitle": descriptionTitle2,
            "shortdescription": "This dashboard describes the task variance from the IMS for Quarter 2 by comparing the baseline duration to the actual duration.",
            "description": TASK_VAR_DESCRIPTION,
            "url": window.location.origin + '/' + feFolder + '/#!/insight?type=multi&engine=' + imsPerformanceEngineId + '&id=' + imsHistoricalInsight,
            "image": 'img/' + image2
        },
        {

            "descriptionTitle": descriptionTitle3,
            "shortdescription": "This dashboard compares the historical variance for tasks across sites segmented by fiscal year and uses the IMS published on the previous Friday.",
            "description": PERFORMANCE_DESCRIPTION,
            "url": window.location.origin + '/' + feFolder + '/#!/insight?type=multi&engine=' + imsPerformanceEngineId + '&id=' + imsPerformanceInsight,
            "image": 'img/' + image3
        },
        {

            "descriptionTitle": descriptionTitle4,
            "shortdescription": "This dashboard shows the trendline of a sites D2D completion over time by compiling the IMS on a weekly basis, broken down by site.",
            "description": PERFORMANCE_DESCRIPTION,
            "url": window.location.origin + '/' + feFolder + '/#!/insight?type=multi&engine=' + historicalTrackingEngineId + '&id=' + d2dProgressInsight,
            "image": 'img/' + image4
        }
		
    ],
    playbookHtml = '',
    titles = [],
    tableOfContentsHtml = '<ul class="toc-list"><li><a style="cursor: pointer; text-decoration: underline;" onclick="openHome(); closeMenu();">Home</a></li>';


for (var i = 0; i < insights.length; i++) {
    titles.push(insights[i].descriptionTitle);
    // build table of contents html
    //add insights description and insight index to URL
    tableOfContentsHtml += '<li><a onclick="openInsight(' + i + ')" href="' + '#' + insights[i].descriptionTitle.toLowerCase().split(' ').join('-') + '">' + insights[i].descriptionTitle + '</a></li>'
}
tableOfContentsHtml += '</ul>';
document.getElementById('insight-list').innerHTML = tableOfContentsHtml;



// add event listeners
// allows use of the back button
window.addEventListener('hashchange', checkHash, false);
document.getElementById('logo').addEventListener('click', openHome);
// document.getElementById('help-me').addEventListener('click', openHelp);
document.getElementById('report-header-text').addEventListener('click', openHome);

var infoEles = document.getElementsByClassName('fa-info-circle');
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', closeModal);
// prevent clicking on modal from closing it
document.getElementById('inner-modal').addEventListener('click', function (e) {
    e.stopPropagation();
});
document.getElementById('header-middle').addEventListener('mouseover', openMenu);
document.getElementById('header-middle').addEventListener('mouseout', closeMenu);
// go back to top
document.getElementById('btt').addEventListener('click', function (e) {
    document.getElementById('body').scrollTop = 0;
});
for (i = 0; i < infoEles.length; i++) {
    infoEles[i].addEventListener('click', openModal);
}


// var openHelp = function () {
//     var homepage = '<div class="help-me-box"><div class="insight-box full-height">';
//     homepage += '<h1>More information on D2D Schedule Dashboards</h1>';
//     homepage += '<p><span class="opener">Purpose and End Users:</span>';
//     homepage += 'The purpose of these dashboards are to provide executive leadership';
//     homepage += ', project managers, and OpsCenter personnel an actionable tool that';
//     homepage += ' visualizes D2D progress to date.</p>';
//     homepage += '<p><span class="opener">Dashboard Experience:</span>';
//     homepage += 'For the greatest user experience, we recommend viewing the D2D Dashboards in Google Chrome. </p>';
//     homepage += '<p><span class="opener">Data Source:</span>';
//     homepage += 'The D2D Schedule Dashboards compiles and ingests data from ';
//     homepage += 'the D2D Integrated Master Schedule (IMS). This schedule contains <br>';
//     homepage += 'status and relevant information about D2D migration progress for all ';
//     homepage += 'MTFs, in terms of phase, task, and GENESIS readiness. ';
//     homepage += '<p><span class="opener">To submit a request to update data in the IMS, please complete the following steps: </span>';
//     homepage += '<ol><li>Open the <a target="_blank" href="https://info.health.mil/hit/iat/D2D_Library/Resources/D2D%20IMS%20Documentation/">AACE SharePoint site</a> and open the <a target="_blank" href="https://info.health.mil/hit/iat/D2D_Library/Resources/D2D%20IMS%20Documentation/">Progress Status Update form</a>.</li>';
//     homepage += '<li>Edit the Progress Status Update form in SharePoint (check out to your Local Drive) ';
//     homepage += 'and highlight your updated tasks.</li>';
//     homepage += '<li>Save these changes, then close and check this form into SharePoint.</li>';
//     homepage += '<li>If the Progress Status Update form does not include the necessary areas/items ';
//     homepage += 'for update, submit your changes to the IMS team &lt;<a target="_blank" href="mailto:dha.ncr.j-6.list.d2d-ims@mail.mil">dha.ncr.j-6.list.d2d-ims@mail.mil</a>&gt;</li>';
//     homepage += '<li>Notify the IMS Team of your update &lt;<a target="_blank" href="mailto:dha.ncr.j-6.list.d2d-ims@mail.mil">dha.ncr.j-6.list.d2d-ims@mail.mil</a>&gt;</li></ol>';
//     homepage += '<p><span class="opener">To submit a help ticket regarding the D2D Schedule Dashboards, <a href="./SEMOSS_Ticket_Submission_Form1.pdf" download>please complete this form.</a></span><br><br>';
//     homepage += 'The D2D Schedule Dashboards are continually being improved. A Remedy account ';
//     homepage += 'is established so that users may centrally submit requests or ';
//     homepage += 'errors.<br>Fill out <a href="./SEMOSS_Ticket_Submission_Form1.pdf" download>this form</a> ';
//     homepage += 'to address any concerns or suggestions.</p>';
//     homepage += '<a class="pointer" onclick="openHome()"><< Go Home</a>';
//     homepage += '<div class="DHASeals"><img src="DHA7.png"></div></div></div>';
//     document.getElementById('playbookContent').innerHTML = homepage;
//     window.location.hash = window.location.hash.substr(0, 0);
// };
