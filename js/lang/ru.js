/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.77
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a,b){"use strict";a.formUtils.registerLoadedModule("lang/ru"),a(b).bind("validatorsLoaded",function(){a.formUtils.LANG={errorTitle:"Ошибка отправки формы!",requiredField:"Это обязательное поле",requiredFields:"Вы задали не все обязательные поля",badTime:"Вы задали некорректное время",badEmail:"Вы задали некорректный e-mail",badTelephone:"Вы задали некорректный номер телефона",badSecurityAnswer:"Вы задали некорректный ответ на секретный вопрос",badDate:"Вы задали некорректную дату",lengthBadStart:"Значение должно быть в диапазоне",lengthBadEnd:" символов",lengthTooLongStart:"Значение длинее, чем ",lengthTooShortStart:"Значение меньше, чем ",notConfirmed:"Введённые значения не могут быть подтверждены",badDomain:"Некорректное значение домена",badUrl:"Некорретный URL",badCustomVal:"Введённое значение неверно",andSpaces:" и пробелы ",badInt:"Значение - не число",badSecurityNumber:"Введённый защитный номер - неправильный",badUKVatAnswer:"Некорректный UK VAT номер",badStrength:"Пароль не достаточно надёжен",badNumberOfSelectedOptionsStart:"Вы должны выбрать как минимум ",badNumberOfSelectedOptionsEnd:" ответов",badAlphaNumeric:"Значение должно содержать только числа и буквы ",badAlphaNumericExtra:" и ",wrongFileSize:"Загружаемый файл слишком велик (максимальный размер %s)",wrongFileType:"Принимаются файлы следующих типов %s",groupCheckedRangeStart:"Выберите между ",groupCheckedTooFewStart:"Выберите как минимум ",groupCheckedTooManyStart:"Выберите максимум из ",groupCheckedEnd:" элемент(ов)",badCreditCard:"Номер кредитной карты некорректен",badCVV:"CVV номер некорректно",wrongFileDim:"Неверные размеры графического файла,",imageTooTall:"изображение не может быть уже чем",imageTooWide:"изображение не может быть шире чем",imageTooSmall:"изображение слишком мало",min:"минимум",max:"максимум",imageRatioNotAccepted:"Изображение с таким соотношением сторон не принимается",badBrazilTelephoneAnswer:"Введённый номер телефона неправильный",badBrazilCEPAnswer:"CEP неправильный",badBrazilCPFAnswer:"CPF неправильный"}})}(a,window)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYW5nL3J1LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBGaWxlIGdlbmVyYXRlZCBieSBHcnVudCAtLSBkbyBub3QgbW9kaWZ5XHJcbiAqICBKUVVFUlktRk9STS1WQUxJREFUT1JcclxuICpcclxuICogIEB2ZXJzaW9uIDIuMy43N1xyXG4gKiAgQHdlYnNpdGUgaHR0cDovL2Zvcm12YWxpZGF0b3IubmV0L1xyXG4gKiAgQGF1dGhvciBWaWN0b3IgSm9uc3NvbiwgaHR0cDovL3ZpY3RvcmpvbnNzb24uc2VcclxuICogIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuIWZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCJqcXVlcnlcIikpOmIoYS5qUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKGEpeyFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2EuZm9ybVV0aWxzLnJlZ2lzdGVyTG9hZGVkTW9kdWxlKFwibGFuZy9ydVwiKSxhKGIpLmJpbmQoXCJ2YWxpZGF0b3JzTG9hZGVkXCIsZnVuY3Rpb24oKXthLmZvcm1VdGlscy5MQU5HPXtlcnJvclRpdGxlOlwi0J7RiNC40LHQutCwINC+0YLQv9GA0LDQstC60Lgg0YTQvtGA0LzRiyFcIixyZXF1aXJlZEZpZWxkOlwi0K3RgtC+INC+0LHRj9C30LDRgtC10LvRjNC90L7QtSDQv9C+0LvQtVwiLHJlcXVpcmVkRmllbGRzOlwi0JLRiyDQt9Cw0LTQsNC70Lgg0L3QtSDQstGB0LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Ri9C1INC/0L7Qu9GPXCIsYmFkVGltZTpcItCS0Ysg0LfQsNC00LDQu9C4INC90LXQutC+0YDRgNC10LrRgtC90L7QtSDQstGA0LXQvNGPXCIsYmFkRW1haWw6XCLQktGLINC30LDQtNCw0LvQuCDQvdC10LrQvtGA0YDQtdC60YLQvdGL0LkgZS1tYWlsXCIsYmFkVGVsZXBob25lOlwi0JLRiyDQt9Cw0LTQsNC70Lgg0L3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLGJhZFNlY3VyaXR5QW5zd2VyOlwi0JLRiyDQt9Cw0LTQsNC70Lgg0L3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INC+0YLQstC10YIg0L3QsCDRgdC10LrRgNC10YLQvdGL0Lkg0LLQvtC/0YDQvtGBXCIsYmFkRGF0ZTpcItCS0Ysg0LfQsNC00LDQu9C4INC90LXQutC+0YDRgNC10LrRgtC90YPRjiDQtNCw0YLRg1wiLGxlbmd0aEJhZFN0YXJ0Olwi0JfQvdCw0YfQtdC90LjQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LIg0LTQuNCw0L/QsNC30L7QvdC1XCIsbGVuZ3RoQmFkRW5kOlwiINGB0LjQvNCy0L7Qu9C+0LJcIixsZW5ndGhUb29Mb25nU3RhcnQ6XCLQl9C90LDRh9C10L3QuNC1INC00LvQuNC90LXQtSwg0YfQtdC8IFwiLGxlbmd0aFRvb1Nob3J0U3RhcnQ6XCLQl9C90LDRh9C10L3QuNC1INC80LXQvdGM0YjQtSwg0YfQtdC8IFwiLG5vdENvbmZpcm1lZDpcItCS0LLQtdC00ZHQvdC90YvQtSDQt9C90LDRh9C10L3QuNGPINC90LUg0LzQvtCz0YPRgiDQsdGL0YLRjCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90YtcIixiYWREb21haW46XCLQndC10LrQvtGA0YDQtdC60YLQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQtNC+0LzQtdC90LBcIixiYWRVcmw6XCLQndC10LrQvtGA0YDQtdGC0L3Ri9C5IFVSTFwiLGJhZEN1c3RvbVZhbDpcItCS0LLQtdC00ZHQvdC90L7QtSDQt9C90LDRh9C10L3QuNC1INC90LXQstC10YDQvdC+XCIsYW5kU3BhY2VzOlwiINC4INC/0YDQvtCx0LXQu9GLIFwiLGJhZEludDpcItCX0L3QsNGH0LXQvdC40LUgLSDQvdC1INGH0LjRgdC70L5cIixiYWRTZWN1cml0eU51bWJlcjpcItCS0LLQtdC00ZHQvdC90YvQuSDQt9Cw0YnQuNGC0L3Ri9C5INC90L7QvNC10YAgLSDQvdC10L/RgNCw0LLQuNC70YzQvdGL0LlcIixiYWRVS1ZhdEFuc3dlcjpcItCd0LXQutC+0YDRgNC10LrRgtC90YvQuSBVSyBWQVQg0L3QvtC80LXRgFwiLGJhZFN0cmVuZ3RoOlwi0J/QsNGA0L7Qu9GMINC90LUg0LTQvtGB0YLQsNGC0L7Rh9C90L4g0L3QsNC00ZHQttC10L1cIixiYWROdW1iZXJPZlNlbGVjdGVkT3B0aW9uc1N0YXJ0Olwi0JLRiyDQtNC+0LvQttC90Ysg0LLRi9Cx0YDQsNGC0Ywg0LrQsNC6INC80LjQvdC40LzRg9C8IFwiLGJhZE51bWJlck9mU2VsZWN0ZWRPcHRpb25zRW5kOlwiINC+0YLQstC10YLQvtCyXCIsYmFkQWxwaGFOdW1lcmljOlwi0JfQvdCw0YfQtdC90LjQtSDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINGC0L7Qu9GM0LrQviDRh9C40YHQu9CwINC4INCx0YPQutCy0YsgXCIsYmFkQWxwaGFOdW1lcmljRXh0cmE6XCIg0LggXCIsd3JvbmdGaWxlU2l6ZTpcItCX0LDQs9GA0YPQttCw0LXQvNGL0Lkg0YTQsNC50Lsg0YHQu9C40YjQutC+0Lwg0LLQtdC70LjQuiAo0LzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGA0LDQt9C80LXRgCAlcylcIix3cm9uZ0ZpbGVUeXBlOlwi0J/RgNC40L3QuNC80LDRjtGC0YHRjyDRhNCw0LnQu9GLINGB0LvQtdC00YPRjtGJ0LjRhSDRgtC40L/QvtCyICVzXCIsZ3JvdXBDaGVja2VkUmFuZ2VTdGFydDpcItCS0YvQsdC10YDQuNGC0LUg0LzQtdC20LTRgyBcIixncm91cENoZWNrZWRUb29GZXdTdGFydDpcItCS0YvQsdC10YDQuNGC0LUg0LrQsNC6INC80LjQvdC40LzRg9C8IFwiLGdyb3VwQ2hlY2tlZFRvb01hbnlTdGFydDpcItCS0YvQsdC10YDQuNGC0LUg0LzQsNC60YHQuNC80YPQvCDQuNC3IFwiLGdyb3VwQ2hlY2tlZEVuZDpcIiDRjdC70LXQvNC10L3RgijQvtCyKVwiLGJhZENyZWRpdENhcmQ6XCLQndC+0LzQtdGAINC60YDQtdC00LjRgtC90L7QuSDQutCw0YDRgtGLINC90LXQutC+0YDRgNC10LrRgtC10L1cIixiYWRDVlY6XCJDVlYg0L3QvtC80LXRgCDQvdC10LrQvtGA0YDQtdC60YLQvdC+XCIsd3JvbmdGaWxlRGltOlwi0J3QtdCy0LXRgNC90YvQtSDRgNCw0LfQvNC10YDRiyDQs9GA0LDRhNC40YfQtdGB0LrQvtCz0L4g0YTQsNC50LvQsCxcIixpbWFnZVRvb1RhbGw6XCLQuNC30L7QsdGA0LDQttC10L3QuNC1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDRg9C20LUg0YfQtdC8XCIsaW1hZ2VUb29XaWRlOlwi0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0YjQuNGA0LUg0YfQtdC8XCIsaW1hZ2VUb29TbWFsbDpcItC40LfQvtCx0YDQsNC20LXQvdC40LUg0YHQu9C40YjQutC+0Lwg0LzQsNC70L5cIixtaW46XCLQvNC40L3QuNC80YPQvFwiLG1heDpcItC80LDQutGB0LjQvNGD0LxcIixpbWFnZVJhdGlvTm90QWNjZXB0ZWQ6XCLQmNC30L7QsdGA0LDQttC10L3QuNC1INGBINGC0LDQutC40Lwg0YHQvtC+0YLQvdC+0YjQtdC90LjQtdC8INGB0YLQvtGA0L7QvSDQvdC1INC/0YDQuNC90LjQvNCw0LXRgtGB0Y9cIixiYWRCcmF6aWxUZWxlcGhvbmVBbnN3ZXI6XCLQktCy0LXQtNGR0L3QvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwINC90LXQv9GA0LDQstC40LvRjNC90YvQuVwiLGJhZEJyYXppbENFUEFuc3dlcjpcIkNFUCDQvdC10L/RgNCw0LLQuNC70YzQvdGL0LlcIixiYWRCcmF6aWxDUEZBbnN3ZXI6XCJDUEYg0L3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5XCJ9fSl9KGEsd2luZG93KX0pOyJdLCJmaWxlIjoibGFuZy9ydS5qcyJ9