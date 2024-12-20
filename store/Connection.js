const MYROUTEDATA=`ROUTECSS(localStorage.getItem('Styles'));
ROUTECSS(localStorage.getItem('AppStyles'));
ROUTECSS(localStorage.getItem('Classes'));
ROUTECSS(localStorage.getItem('CloudStyles'));
ROUTECSS(localStorage.getItem('Colors'));
ROUTECSS(localStorage.getItem('TemplateStyles'));
ROUTECSS(localStorage.getItem('StylesOne'));
ROUTECSS(localStorage.getItem('StylesTwo'));
ROUTECSS(localStorage.getItem('StylesThree'));
ROUTECSS(localStorage.getItem('StylesFour'));
ROUTECSS(localStorage.getItem('StylesFive'));
ROUTEJS(localStorage.getItem('Apis'));
ROUTEJS(localStorage.getItem('AppFunctions'));
ROUTEJS(localStorage.getItem('FunctionsOne'));
ROUTEJS(localStorage.getItem('FunctionTwo'));
ROUTEJS(localStorage.getItem('FunctionThree'));
ROUTEJS(localStorage.getItem('FunctionFour'));
ROUTEJS(localStorage.getItem('FunctionFive'));
ROUTEJS(localStorage.getItem('CloudFunctions'));
ROUTEJS(localStorage.getItem('Components'));
ROUTEJS(localStorage.getItem('Constants'));
ROUTEJS(localStorage.getItem('Functions'));
ROUTEJS(localStorage.getItem('Json'));
ROUTEJS(localStorage.getItem('Library'));
ROUTEJS(localStorage.getItem('Links'));
ROUTEJS(localStorage.getItem('Module'));
ROUTEJS(localStorage.getItem('Plugins'));
ROUTEJS(localStorage.getItem('TemplateFunctions'));
ROUTEJS(localStorage.getItem('Templates'));
ROUTEJS(localStorage.getItem('Jsoni'));
ROUTEJS(localStorage.getItem('JsonOne'));
ROUTEJS(localStorage.getItem('JsonTwo'));
ROUTEJS(localStorage.getItem('JsonThree'));
ROUTEJS(localStorage.getItem('JsonFour'));
ROUTEJS(localStorage.getItem('JsonFive'));
ROUTEJS(localStorage.getItem('AppVersion'));
ROUTEJS(localStorage.getItem('Assets'));
ROUTEJS(localStorage.getItem('Icons'));
ROUTEJS(localStorage.getItem('SpecialFunctions'));
ROUTEJS(localStorage.getItem('Main'));
ROUTEJS(localStorage.getItem('Major'));
ROUTECSS(localStorage.getItem('SpecialStyles'));
ROUTEJS(localStorage.getItem('MyAssets'));`;

export const APPLOAD=()=>{
    fetch('https://script.google.com/macros/s/AKfycby5S_I3_hu6iEB0n8I7cmFZ9liA1kGPpQ-9ewmTcJmkUuMCYY540oaGDwJGE4ADs6tv5w/exec',{
        method:"Post",mode:"cors",body:JSON.stringify({"spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=0#gid=0","sheetName":"AppManager"})
    })
    .then(res=>res.json())
    .then(data =>{
        data.forEach(element => {
            if (element.ID === NAME && !element.AppCredits) {
                localStorage.setItem("Advance",MYROUTEDATA);
                localStorage.setItem('ID',element.ID);
                localStorage.setItem('ProjectName',element.ProjectName);
                localStorage.setItem('AppFunctions',element.Functions);
                localStorage.setItem('FunctionsOne',element.FunctionsOne);
                localStorage.setItem('FunctionTwo',element.FunctionTwo);
                localStorage.setItem('FunctionThree',element.FunctionThree);
                localStorage.setItem('FunctionFour',element.FunctionFour);
                localStorage.setItem('FunctionFive',element.FunctionFive);
                localStorage.setItem('AppStyles',element.Styles);
                localStorage.setItem('StylesOne',element.StylesOne);
                localStorage.setItem('StylesTwo',element.StylesTwo);
                localStorage.setItem('StylesThree',element.StylesThree);
                localStorage.setItem('StylesFour',element.StylesFour);
                localStorage.setItem('StylesFive',element.StylesFive);
                localStorage.setItem('Jsoni',element.Jsoni);
                localStorage.setItem('JsonOne',element.JsonOne);
                localStorage.setItem('JsonTwo',element.JsonTwo);
                localStorage.setItem('JsonThree',element.JsonThree);
                localStorage.setItem('JsonFour',element.JsonFour);
                localStorage.setItem('JsonFive',element.JsonFive);
                localStorage.setItem('AppCredits',element.AppCredits);
                localStorage.setItem('AppVersion',element.AppVersion);
                localStorage.setItem('AppJson',element.AppJson);
                localStorage.setItem('AppDetails',element.AppDetails);
                localStorage.setItem('AppIcon',element.AppIcons);
                localStorage.setItem('CreatedOn',element.CreatedOn);
                fetch('https://script.google.com/macros/s/AKfycby5S_I3_hu6iEB0n8I7cmFZ9liA1kGPpQ-9ewmTcJmkUuMCYY540oaGDwJGE4ADs6tv5w/exec',{
                    method:"Post",mode:"cors",body:JSON.stringify({"spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1kd15tCp1cX6TIUSsm3GcrfxDvOrmqlTNxAaseR8LBhw/edit?gid=0#gid=0","sheetName":"CloudShipping"})
                })
                .then(res=>res.json())
                .then(datata =>{
                    datata.forEach(element => {

                        if (element.ID ==='z34v47yKZ3Xz7oEQEzsbsABnPO4652aKMHEJzGu7GOJuL3MOTHsqWk96jBKq4lkWJRnGuF1F0yPhOLbRW63lbk3PVOQEhseLJaYl') {
                            
                            localStorage.setItem('Functions',element.Functions);
                            localStorage.setItem('Styles',element.Styles);
                            localStorage.setItem('Plugins',element.Plugins);
                            localStorage.setItem('Templates',element.Templates);
                            localStorage.setItem('TemplateStyles',element.TemplateStyles);
                            localStorage.setItem('TemplateFunctions',element.TemplateFunctions);
                            localStorage.setItem('Colors',element.Colors);
                            localStorage.setItem('Classes',element.Classes);
                            localStorage.setItem('Components',element.Components);
                            localStorage.setItem('Json',element.Json);
                            localStorage.setItem('Links',element.Links);
                            localStorage.setItem('Constants',element.Constants);
                            localStorage.setItem('Library',element.Library);
                            localStorage.setItem('Module',element.Module);
                            localStorage.setItem('Assets',element.Assets);
                            localStorage.setItem('Icons',element.Icons);
                            localStorage.setItem('Apis',element.Apis);
                            localStorage.setItem('CloudFunctions',element.CloudFunctions);
                            localStorage.setItem('CloudStyles',element.CloudStyles);
                            localStorage.setItem('ModulesUpdated','Updated');

                            fetch('https://www.e-corpcompanygroup.com/store/Assets.js')
                            .then(res =>res.text())
                            .then(Images =>{
                                localStorage.setItem('MyAssets',Images);
                                setTimeout(() => {
                                    Reload();
                                }, 3000);
                            } )
                            .catch(error=>{
                                console.log(error);
                            })
                        }else{
                            const DIVER=document.querySelector('.body');
                            DIVER.innerHTML=`

                                <br>
                                <h1 class='FailedInfo'>Updates Failed</h1>

                                <br>

                                <p class='lower'>
                                    Updating Failed  To The Latest version And Downloads Of The latest Features.
                                    <br><br>
                                    The Failure Error Is Due to Some Features Are Not Compactable With This App Version .
                                </p>

                                <hr>

                                <p id='green' class='low'>Fix Error</p>

                                <hr>

                                <p class='lower'>
                                    Clear The Device Data Of The App <br><br> Check If Your Device Is To The Latest Version From Our Store
                                <br>
                                Before You Click On Retry</p>

                                <button onclick='Reload()'class='RetryButton'>Retry</button>

                                <br><br>

                                <button onclick='UpdateApp()'class='RetryButton'>Update App</button>

                            `;
                        };

                    }); 
                })
                .catch(error=>{
                    const DIVER=document.querySelector('.body');
                    DIVER.innerHTML=`

                        <br>
                        <h1 class='FailedInfo'>Updates Failed</h1>

                        <br>

                        <p class='lower'>
                            Updating Failed  To The Latest Version And Downloads Of The Latest Features.
                            <br><br>
                            The Failure Error Is Due To lack Of Internet Connection To Your Device.
                        </p>

                        <hr>

                        <p id='green' class='low'>Fix Error</p>

                        <hr>

                        <p class='lower'>
                            Check Your Internet Connection
                            <br><br>
                            Before You Click On Retry</p>
                        <button onclick='Reload()'class='RetryButton'>Retry</button>

                    `;
                 
                });  
            }
        }); 
    })
    .catch(error=>{

        const DIVER=document.querySelector('.body');

        DIVER.innerHTML=`

            <br>
            <h1 class='FailedInfo'>Updates Failed</h1>

            <br>

            <p class='lower'>
                Updating Failed  To The latest Version And Downloads Of The latest features.
                <br><br>
                The failure Error Is Due To Lack Of Internet Connection To Your Device.
            </p>

            <hr>

            <p id='green' class='low'>Fix Error</p>

            <hr>
            
            <p class='lower'>
                Check Your Internet Connection 
                <br><br>
                Before You Click On Retry</p>
            <button onclick='Reload()'class='RetryButton'>Retry</button>
            
        `;
    });   
}
