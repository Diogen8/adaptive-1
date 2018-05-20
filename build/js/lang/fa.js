/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.77
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a,b){"use strict";a.formUtils.registerLoadedModule("lang/fa"),a(b).bind("validatorsLoaded",function(){a.formUtils.LANG={errorTitle:"ثبت فرم با مشکل مواجه شد!",requiredField:"شما همه فیلدهای ضروری را تکمیل نکرده اید",requiredFields:"شما فیلد ضروری را تکمیل نکرده اید",badTime:"زمان درستی را وارد نکرده اید",badEmail:"آدرس ایمیل را به درستی وارد نکرده اید",badTelephone:"شماره تلفن وارد شده معتبر نیست",badSecurityAnswer:"شما به سوال امنیتی درست پاسخ نداده اید",badDate:"تاریخ درستی را وارد نکرده اید",lengthBadStart:"مقدار وارد شده باید ",lengthBadEnd:" حرف باشد.",lengthTooLongStart:"مقدار ورودی بیشتر از ",lengthTooShortStart:"مقدار ورودی کمتر از ",notConfirmed:"ورودی ها یکسان نیستند",badDomain:"آدرس دامنه به درستی وارد نشده است",badUrl:"آدرس اینترنتی به درستی وارد نشده است",badCustomVal:"مقدار ورودی نادرست است",andSpaces:" و فاصله خالی ",badInt:"مقدار ورودی باید عدد باشد",badSecurityNumber:"شماره امنیت اجتماعی شما معتبر نیست",badUKVatAnswer:"شماره مالیاتی شما درست نیست",badStrength:"کلمه عبور به قدر کافی مستحکم نیست",badNumberOfSelectedOptionsStart:"شما باید حداقل  ",badNumberOfSelectedOptionsEnd:" پاسخ را انتخاب کنید",badAlphaNumeric:"مقدار ورودی می تواند حروف و شماره باشد ",badAlphaNumericExtra:" و ",wrongFileSize:"حجم فایل انتخابی زیاد است. (حداکثر %s)",wrongFileType:"فقط فایل های با فرمت %s مجاز هستند",groupCheckedRangeStart:"لطفا بین ",groupCheckedTooFewStart:"لطفا حداقل ",groupCheckedTooManyStart:"لطفا حداکثر ",groupCheckedEnd:" گزینه انتخاب کنید",badCreditCard:"شماره کارت اعتباری معتبر نیست",badCVV:"کد شناسایی سی وی وی معتبر نیست",wrongFileDim:"ابعاد تصویر صحیح نیست,",imageTooTall:"حداکثر طول تصویر",imageTooWide:"حداکثر عرض تصویر",imageTooSmall:"تصویر خیلی کوچک است",min:"حداقل",max:"حداکثر",imageRatioNotAccepted:"نسبت ابعاد تصویر مناسب نیست"}})}(a,window)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYW5nL2ZhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBGaWxlIGdlbmVyYXRlZCBieSBHcnVudCAtLSBkbyBub3QgbW9kaWZ5XHJcbiAqICBKUVVFUlktRk9STS1WQUxJREFUT1JcclxuICpcclxuICogIEB2ZXJzaW9uIDIuMy43N1xyXG4gKiAgQHdlYnNpdGUgaHR0cDovL2Zvcm12YWxpZGF0b3IubmV0L1xyXG4gKiAgQGF1dGhvciBWaWN0b3IgSm9uc3NvbiwgaHR0cDovL3ZpY3RvcmpvbnNzb24uc2VcclxuICogIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuIWZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCJqcXVlcnlcIikpOmIoYS5qUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKGEpeyFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2EuZm9ybVV0aWxzLnJlZ2lzdGVyTG9hZGVkTW9kdWxlKFwibGFuZy9mYVwiKSxhKGIpLmJpbmQoXCJ2YWxpZGF0b3JzTG9hZGVkXCIsZnVuY3Rpb24oKXthLmZvcm1VdGlscy5MQU5HPXtlcnJvclRpdGxlOlwi2KvYqNiqINmB2LHZhSDYqNinINmF2LTaqdmEINmF2YjYp9is2Ycg2LTYryFcIixyZXF1aXJlZEZpZWxkOlwi2LTZhdinINmH2YXZhyDZgduM2YTYr9mH2KfbjCDYttix2YjYsduMINix2Kcg2KraqdmF24zZhCDZhtqp2LHYr9mHINin24zYr1wiLHJlcXVpcmVkRmllbGRzOlwi2LTZhdinINmB24zZhNivINi22LHZiNix24wg2LHYpyDYqtqp2YXbjNmEINmG2qnYsdiv2Ycg2KfbjNivXCIsYmFkVGltZTpcItiy2YXYp9mGINiv2LHYs9iq24wg2LHYpyDZiNin2LHYryDZhtqp2LHYr9mHINin24zYr1wiLGJhZEVtYWlsOlwi2KLYr9ix2LMg2KfbjNmF24zZhCDYsdinINio2Ycg2K/Ysdiz2KrbjCDZiNin2LHYryDZhtqp2LHYr9mHINin24zYr1wiLGJhZFRlbGVwaG9uZTpcIti02YXYp9ix2Ycg2KrZhNmB2YYg2YjYp9ix2K8g2LTYr9mHINmF2LnYqtio2LEg2YbbjNiz2KpcIixiYWRTZWN1cml0eUFuc3dlcjpcIti02YXYpyDYqNmHINiz2YjYp9mEINin2YXZhtuM2KrbjCDYr9ix2LPYqiDZvtin2LPYriDZhtiv2KfYr9mHINin24zYr1wiLGJhZERhdGU6XCLYqtin2LHbjNiuINiv2LHYs9iq24wg2LHYpyDZiNin2LHYryDZhtqp2LHYr9mHINin24zYr1wiLGxlbmd0aEJhZFN0YXJ0Olwi2YXZgtiv2KfYsSDZiNin2LHYryDYtNiv2Ycg2KjYp9uM2K8gXCIsbGVuZ3RoQmFkRW5kOlwiINit2LHZgSDYqNin2LTYry5cIixsZW5ndGhUb29Mb25nU3RhcnQ6XCLZhdmC2K/Yp9ixINmI2LHZiNiv24wg2KjbjNi02KrYsSDYp9iyIFwiLGxlbmd0aFRvb1Nob3J0U3RhcnQ6XCLZhdmC2K/Yp9ixINmI2LHZiNiv24wg2qnZhdiq2LEg2KfYsiBcIixub3RDb25maXJtZWQ6XCLZiNix2YjYr9uMINmH2Kcg24zaqdiz2KfZhiDZhtuM2LPYqtmG2K9cIixiYWREb21haW46XCLYotiv2LHYsyDYr9in2YXZhtmHINio2Ycg2K/Ysdiz2KrbjCDZiNin2LHYryDZhti02K/ZhyDYp9iz2KpcIixiYWRVcmw6XCLYotiv2LHYsyDYp9uM2YbYqtix2YbYqtuMINio2Ycg2K/Ysdiz2KrbjCDZiNin2LHYryDZhti02K/ZhyDYp9iz2KpcIixiYWRDdXN0b21WYWw6XCLZhdmC2K/Yp9ixINmI2LHZiNiv24wg2YbYp9iv2LHYs9iqINin2LPYqlwiLGFuZFNwYWNlczpcIiDZiCDZgdin2LXZhNmHINiu2KfZhNuMIFwiLGJhZEludDpcItmF2YLYr9in2LEg2YjYsdmI2K/bjCDYqNin24zYryDYudiv2K8g2KjYp9i02K9cIixiYWRTZWN1cml0eU51bWJlcjpcIti02YXYp9ix2Ycg2KfZhdmG24zYqiDYp9is2KrZhdin2LnbjCDYtNmF2Kcg2YXYudiq2KjYsSDZhtuM2LPYqlwiLGJhZFVLVmF0QW5zd2VyOlwi2LTZhdin2LHZhyDZhdin2YTbjNin2KrbjCDYtNmF2Kcg2K/Ysdiz2Kog2YbbjNiz2KpcIixiYWRTdHJlbmd0aDpcItqp2YTZhdmHINi52KjZiNixINio2Ycg2YLYr9ixINqp2KfZgduMINmF2LPYqtit2qnZhSDZhtuM2LPYqlwiLGJhZE51bWJlck9mU2VsZWN0ZWRPcHRpb25zU3RhcnQ6XCLYtNmF2Kcg2KjYp9uM2K8g2K3Yr9in2YLZhCAgXCIsYmFkTnVtYmVyT2ZTZWxlY3RlZE9wdGlvbnNFbmQ6XCIg2b7Yp9iz2K4g2LHYpyDYp9mG2KrYrtin2Kgg2qnZhtuM2K9cIixiYWRBbHBoYU51bWVyaWM6XCLZhdmC2K/Yp9ixINmI2LHZiNiv24wg2YXbjCDYqtmI2KfZhtivINit2LHZiNmBINmIINi02YXYp9ix2Ycg2KjYp9i02K8gXCIsYmFkQWxwaGFOdW1lcmljRXh0cmE6XCIg2YggXCIsd3JvbmdGaWxlU2l6ZTpcItit2KzZhSDZgdin24zZhCDYp9mG2KrYrtin2KjbjCDYstuM2KfYryDYp9iz2KouICjYrdiv2Kfaqdir2LEgJXMpXCIsd3JvbmdGaWxlVHlwZTpcItmB2YLYtyDZgdin24zZhCDZh9in24wg2KjYpyDZgdix2YXYqiAlcyDZhdis2KfYsiDZh9iz2KrZhtivXCIsZ3JvdXBDaGVja2VkUmFuZ2VTdGFydDpcItmE2LfZgdinINio24zZhiBcIixncm91cENoZWNrZWRUb29GZXdTdGFydDpcItmE2LfZgdinINit2K/Yp9mC2YQgXCIsZ3JvdXBDaGVja2VkVG9vTWFueVN0YXJ0Olwi2YTYt9mB2Kcg2K3Yr9in2qnYq9ixIFwiLGdyb3VwQ2hlY2tlZEVuZDpcIiDar9iy24zZhtmHINin2YbYqtiu2KfYqCDaqdmG24zYr1wiLGJhZENyZWRpdENhcmQ6XCLYtNmF2KfYsdmHINqp2KfYsdiqINin2LnYqtio2KfYsduMINmF2LnYqtio2LEg2YbbjNiz2KpcIixiYWRDVlY6XCLaqdivINi02YbYp9iz2KfbjNuMINiz24wg2YjbjCDZiNuMINmF2LnYqtio2LEg2YbbjNiz2KpcIix3cm9uZ0ZpbGVEaW06XCLYp9io2LnYp9ivINiq2LXZiNuM2LEg2LXYrduM2K0g2YbbjNiz2KosXCIsaW1hZ2VUb29UYWxsOlwi2K3Yr9in2qnYq9ixINi32YjZhCDYqti12YjbjNixXCIsaW1hZ2VUb29XaWRlOlwi2K3Yr9in2qnYq9ixINi52LHYtiDYqti12YjbjNixXCIsaW1hZ2VUb29TbWFsbDpcItiq2LXZiNuM2LEg2K7bjNmE24wg2qnZiNqG2qkg2KfYs9iqXCIsbWluOlwi2K3Yr9in2YLZhFwiLG1heDpcItit2K/Yp9qp2KvYsVwiLGltYWdlUmF0aW9Ob3RBY2NlcHRlZDpcItmG2LPYqNiqINin2KjYudin2K8g2KrYtdmI24zYsSDZhdmG2KfYs9ioINmG24zYs9iqXCJ9fSl9KGEsd2luZG93KX0pOyJdLCJmaWxlIjoibGFuZy9mYS5qcyJ9