/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.77
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a,b){"use strict";a.formUtils.registerLoadedModule("lang/ka"),a(b).bind("validatorsLoaded",function(){a.formUtils.LANG={errorTitle:"ფორმა ვერ გაიგზავნა!",requiredField:"ველის შევსება სავალდებულოა",requiredFields:"თქვენ არ შეგივსიათ ყველა სავალდებულო ველი",badTime:"თქვენ მიუთითეთ არასწორი დრო",badEmail:"თქვენ მიუთითეთ არასწორი ელ.ფოსტის მისამართი",badTelephone:"თქვენ მიუთითეთ არასწორი ტელეფონის ნომერი",badSecurityAnswer:"თქვენ გაეცით არასწორი პასუხი უსაფრთხოების კითხვას",badDate:"თქვენ მიუთითეთ არასწორი თარიღი",lengthBadStart:"ველის მნიშვნელობის სიგრძე უნდა იყოს ",lengthBadEnd:" შუალედში",lengthTooLongStart:"ველის მნიშვნელობის სიგრძე უნდა იყოს მაქსიმუმ ",lengthTooShortStart:"ველის მნიშვნელობის სიგრძე უნდა იყოს მინიმუმ ",notConfirmed:"ველის მნიშვნელობები ვერ დადასტურდა",badDomain:"არასწორი დომენის მისამართი",badUrl:"ველის მნიშვნელობა არ არის მართებული URL მისამართი",badCustomVal:"ველის მნიშვნელობა არ არის მართებული",andSpaces:" და გამოტოვებები ",badInt:"ველის მნიშვნელობა არ არის მართებული რიცხვი",badStrength:"პაროლი არ არის საკმარისად ძლიერი (კარგი)",badNumberOfSelectedOptionsStart:"თქვენ უნდა აირჩიოთ სულ მცირე ",badNumberOfSelectedOptionsEnd:" პასუხი",badAlphaNumeric:"ველის მნიშვნელობა უნდა შეიცავდეს მხოლოდ ციფრებსა და ასოებს ",badAlphaNumericExtra:" და ",wrongFileSize:"ფაილი, რომლის ატვირთვასაც ცდილობთ არის ძალიან დიდი (დასაშვებია მაქსიმუმ %s)",wrongFileType:"დასაშვებია მხოლოდ შემდეგი გაფართოების ფაილები: %s",groupCheckedRangeStart:"გთხოვთ, აირჩიოთ ",groupCheckedTooFewStart:"გთხოვთ, აირჩიოთ სულ მცირე ",groupCheckedTooManyStart:"გთხოვთ, აირჩიოთ მაქსიმუმ ",groupCheckedEnd:" პუნქტი",badCreditCard:"საკრედიტო ბარათის ნომერი არ არის მართებული",badCVV:"CVV კოდი არ არის მართებული",wrongFileDim:"არამართებული სურათის ზომები,",imageTooTall:"სურათი არ უნდა იყოს უფრო გრძელი ვიდრე",imageTooWide:"სურათი არ უნდა იყოს უფრო ფართე ვიდრე",imageTooSmall:"სურათი არის ძალიან პატარა",min:"მინიმუმ",max:"მაქსიმუმ",imageRatioNotAccepted:"სურათის სიგრძისა და სიგანის ეს თანაფარდობა დაუშვებელია",badBrazilTelephoneAnswer:"მითითებული ტელეფონის ნომერი არ არის მართებული",badreCaptcha:"დაადასტურეთ, რომ არ ხართ რობოტი",passwordComplexityStart:"პაროლი უნდა შეიცავდეს მინიმუმ ",passwordComplexitySeparator:", ",passwordComplexityUppercaseInfo:" დიდი ასო(ები)",passwordComplexityLowercaseInfo:" პატარა ასო(ები)",passwordComplexitySpecialCharsInfo:" სპეციალური სიმბოლო(ები)",passwordComplexityNumericCharsInfo:" რიცხვითი მნიშვნელობა(ები)",passwordComplexityEnd:"."}})}(a,window)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYW5nL2thLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBGaWxlIGdlbmVyYXRlZCBieSBHcnVudCAtLSBkbyBub3QgbW9kaWZ5XHJcbiAqICBKUVVFUlktRk9STS1WQUxJREFUT1JcclxuICpcclxuICogIEB2ZXJzaW9uIDIuMy43N1xyXG4gKiAgQHdlYnNpdGUgaHR0cDovL2Zvcm12YWxpZGF0b3IubmV0L1xyXG4gKiAgQGF1dGhvciBWaWN0b3IgSm9uc3NvbiwgaHR0cDovL3ZpY3RvcmpvbnNzb24uc2VcclxuICogIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuIWZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCJqcXVlcnlcIikpOmIoYS5qUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKGEpeyFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2EuZm9ybVV0aWxzLnJlZ2lzdGVyTG9hZGVkTW9kdWxlKFwibGFuZy9rYVwiKSxhKGIpLmJpbmQoXCJ2YWxpZGF0b3JzTG9hZGVkXCIsZnVuY3Rpb24oKXthLmZvcm1VdGlscy5MQU5HPXtlcnJvclRpdGxlOlwi4YOk4YOd4YOg4YOb4YOQIOGDleGDlOGDoCDhg5Lhg5Dhg5jhg5Lhg5bhg5Dhg5Xhg5zhg5AhXCIscmVxdWlyZWRGaWVsZDpcIuGDleGDlOGDmuGDmOGDoSDhg6jhg5Thg5Xhg6Hhg5Thg5Hhg5Ag4YOh4YOQ4YOV4YOQ4YOa4YOT4YOU4YOR4YOj4YOa4YOd4YOQXCIscmVxdWlyZWRGaWVsZHM6XCLhg5fhg6Xhg5Xhg5Thg5wg4YOQ4YOgIOGDqOGDlOGDkuGDmOGDleGDoeGDmOGDkOGDlyDhg6fhg5Xhg5Thg5rhg5Ag4YOh4YOQ4YOV4YOQ4YOa4YOT4YOU4YOR4YOj4YOa4YOdIOGDleGDlOGDmuGDmFwiLGJhZFRpbWU6XCLhg5fhg6Xhg5Xhg5Thg5wg4YOb4YOY4YOj4YOX4YOY4YOX4YOU4YOXIOGDkOGDoOGDkOGDoeGDrOGDneGDoOGDmCDhg5Phg6Dhg51cIixiYWRFbWFpbDpcIuGDl+GDpeGDleGDlOGDnCDhg5vhg5jhg6Phg5fhg5jhg5fhg5Thg5cg4YOQ4YOg4YOQ4YOh4YOs4YOd4YOg4YOYIOGDlOGDmi7hg6Thg53hg6Hhg6Lhg5jhg6Eg4YOb4YOY4YOh4YOQ4YOb4YOQ4YOg4YOX4YOYXCIsYmFkVGVsZXBob25lOlwi4YOX4YOl4YOV4YOU4YOcIOGDm+GDmOGDo+GDl+GDmOGDl+GDlOGDlyDhg5Dhg6Dhg5Dhg6Hhg6zhg53hg6Dhg5gg4YOi4YOU4YOa4YOU4YOk4YOd4YOc4YOY4YOhIOGDnOGDneGDm+GDlOGDoOGDmFwiLGJhZFNlY3VyaXR5QW5zd2VyOlwi4YOX4YOl4YOV4YOU4YOcIOGDkuGDkOGDlOGDquGDmOGDlyDhg5Dhg6Dhg5Dhg6Hhg6zhg53hg6Dhg5gg4YOe4YOQ4YOh4YOj4YOu4YOYIOGDo+GDoeGDkOGDpOGDoOGDl+GDruGDneGDlOGDkeGDmOGDoSDhg5nhg5jhg5fhg67hg5Xhg5Dhg6FcIixiYWREYXRlOlwi4YOX4YOl4YOV4YOU4YOcIOGDm+GDmOGDo+GDl+GDmOGDl+GDlOGDlyDhg5Dhg6Dhg5Dhg6Hhg6zhg53hg6Dhg5gg4YOX4YOQ4YOg4YOY4YOm4YOYXCIsbGVuZ3RoQmFkU3RhcnQ6XCLhg5Xhg5Thg5rhg5jhg6Eg4YOb4YOc4YOY4YOo4YOV4YOc4YOU4YOa4YOd4YOR4YOY4YOhIOGDoeGDmOGDkuGDoOGDq+GDlCDhg6Phg5zhg5Phg5Ag4YOY4YOn4YOd4YOhIFwiLGxlbmd0aEJhZEVuZDpcIiDhg6jhg6Phg5Dhg5rhg5Thg5Phg6jhg5hcIixsZW5ndGhUb29Mb25nU3RhcnQ6XCLhg5Xhg5Thg5rhg5jhg6Eg4YOb4YOc4YOY4YOo4YOV4YOc4YOU4YOa4YOd4YOR4YOY4YOhIOGDoeGDmOGDkuGDoOGDq+GDlCDhg6Phg5zhg5Phg5Ag4YOY4YOn4YOd4YOhIOGDm+GDkOGDpeGDoeGDmOGDm+GDo+GDmyBcIixsZW5ndGhUb29TaG9ydFN0YXJ0Olwi4YOV4YOU4YOa4YOY4YOhIOGDm+GDnOGDmOGDqOGDleGDnOGDlOGDmuGDneGDkeGDmOGDoSDhg6Hhg5jhg5Lhg6Dhg6vhg5Qg4YOj4YOc4YOT4YOQIOGDmOGDp+GDneGDoSDhg5vhg5jhg5zhg5jhg5vhg6Phg5sgXCIsbm90Q29uZmlybWVkOlwi4YOV4YOU4YOa4YOY4YOhIOGDm+GDnOGDmOGDqOGDleGDnOGDlOGDmuGDneGDkeGDlOGDkeGDmCDhg5Xhg5Thg6Ag4YOT4YOQ4YOT4YOQ4YOh4YOi4YOj4YOg4YOT4YOQXCIsYmFkRG9tYWluOlwi4YOQ4YOg4YOQ4YOh4YOs4YOd4YOg4YOYIOGDk+GDneGDm+GDlOGDnOGDmOGDoSDhg5vhg5jhg6Hhg5Dhg5vhg5Dhg6Dhg5fhg5hcIixiYWRVcmw6XCLhg5Xhg5Thg5rhg5jhg6Eg4YOb4YOc4YOY4YOo4YOV4YOc4YOU4YOa4YOd4YOR4YOQIOGDkOGDoCDhg5Dhg6Dhg5jhg6Eg4YOb4YOQ4YOg4YOX4YOU4YOR4YOj4YOa4YOYIFVSTCDhg5vhg5jhg6Hhg5Dhg5vhg5Dhg6Dhg5fhg5hcIixiYWRDdXN0b21WYWw6XCLhg5Xhg5Thg5rhg5jhg6Eg4YOb4YOc4YOY4YOo4YOV4YOc4YOU4YOa4YOd4YOR4YOQIOGDkOGDoCDhg5Dhg6Dhg5jhg6Eg4YOb4YOQ4YOg4YOX4YOU4YOR4YOj4YOa4YOYXCIsYW5kU3BhY2VzOlwiIOGDk+GDkCDhg5Lhg5Dhg5vhg53hg6Lhg53hg5Xhg5Thg5Hhg5Thg5Hhg5ggXCIsYmFkSW50Olwi4YOV4YOU4YOa4YOY4YOhIOGDm+GDnOGDmOGDqOGDleGDnOGDlOGDmuGDneGDkeGDkCDhg5Dhg6Ag4YOQ4YOg4YOY4YOhIOGDm+GDkOGDoOGDl+GDlOGDkeGDo+GDmuGDmCDhg6Dhg5jhg6rhg67hg5Xhg5hcIixiYWRTdHJlbmd0aDpcIuGDnuGDkOGDoOGDneGDmuGDmCDhg5Dhg6Ag4YOQ4YOg4YOY4YOhIOGDoeGDkOGDmeGDm+GDkOGDoOGDmOGDoeGDkOGDkyDhg6vhg5rhg5jhg5Thg6Dhg5ggKOGDmeGDkOGDoOGDkuGDmClcIixiYWROdW1iZXJPZlNlbGVjdGVkT3B0aW9uc1N0YXJ0Olwi4YOX4YOl4YOV4YOU4YOcIOGDo+GDnOGDk+GDkCDhg5Dhg5jhg6Dhg6nhg5jhg53hg5cg4YOh4YOj4YOaIOGDm+GDquGDmOGDoOGDlCBcIixiYWROdW1iZXJPZlNlbGVjdGVkT3B0aW9uc0VuZDpcIiDhg57hg5Dhg6Hhg6Phg67hg5hcIixiYWRBbHBoYU51bWVyaWM6XCLhg5Xhg5Thg5rhg5jhg6Eg4YOb4YOc4YOY4YOo4YOV4YOc4YOU4YOa4YOd4YOR4YOQIOGDo+GDnOGDk+GDkCDhg6jhg5Thg5jhg6rhg5Dhg5Xhg5Phg5Thg6Eg4YOb4YOu4YOd4YOa4YOd4YOTIOGDquGDmOGDpOGDoOGDlOGDkeGDoeGDkCDhg5Phg5Ag4YOQ4YOh4YOd4YOU4YOR4YOhIFwiLGJhZEFscGhhTnVtZXJpY0V4dHJhOlwiIOGDk+GDkCBcIix3cm9uZ0ZpbGVTaXplOlwi4YOk4YOQ4YOY4YOa4YOYLCDhg6Dhg53hg5vhg5rhg5jhg6Eg4YOQ4YOi4YOV4YOY4YOg4YOX4YOV4YOQ4YOh4YOQ4YOqIOGDquGDk+GDmOGDmuGDneGDkeGDlyDhg5Dhg6Dhg5jhg6Eg4YOr4YOQ4YOa4YOY4YOQ4YOcIOGDk+GDmOGDk+GDmCAo4YOT4YOQ4YOh4YOQ4YOo4YOV4YOU4YOR4YOY4YOQIOGDm+GDkOGDpeGDoeGDmOGDm+GDo+GDmyAlcylcIix3cm9uZ0ZpbGVUeXBlOlwi4YOT4YOQ4YOh4YOQ4YOo4YOV4YOU4YOR4YOY4YOQIOGDm+GDruGDneGDmuGDneGDkyDhg6jhg5Thg5vhg5Phg5Thg5Lhg5gg4YOS4YOQ4YOk4YOQ4YOg4YOX4YOd4YOU4YOR4YOY4YOhIOGDpOGDkOGDmOGDmuGDlOGDkeGDmDogJXNcIixncm91cENoZWNrZWRSYW5nZVN0YXJ0Olwi4YOS4YOX4YOu4YOd4YOV4YOXLCDhg5Dhg5jhg6Dhg6nhg5jhg53hg5cgXCIsZ3JvdXBDaGVja2VkVG9vRmV3U3RhcnQ6XCLhg5Lhg5fhg67hg53hg5Xhg5csIOGDkOGDmOGDoOGDqeGDmOGDneGDlyDhg6Hhg6Phg5og4YOb4YOq4YOY4YOg4YOUIFwiLGdyb3VwQ2hlY2tlZFRvb01hbnlTdGFydDpcIuGDkuGDl+GDruGDneGDleGDlywg4YOQ4YOY4YOg4YOp4YOY4YOd4YOXIOGDm+GDkOGDpeGDoeGDmOGDm+GDo+GDmyBcIixncm91cENoZWNrZWRFbmQ6XCIg4YOe4YOj4YOc4YOl4YOi4YOYXCIsYmFkQ3JlZGl0Q2FyZDpcIuGDoeGDkOGDmeGDoOGDlOGDk+GDmOGDouGDnSDhg5Hhg5Dhg6Dhg5Dhg5fhg5jhg6Eg4YOc4YOd4YOb4YOU4YOg4YOYIOGDkOGDoCDhg5Dhg6Dhg5jhg6Eg4YOb4YOQ4YOg4YOX4YOU4YOR4YOj4YOa4YOYXCIsYmFkQ1ZWOlwiQ1ZWIOGDmeGDneGDk+GDmCDhg5Dhg6Ag4YOQ4YOg4YOY4YOhIOGDm+GDkOGDoOGDl+GDlOGDkeGDo+GDmuGDmFwiLHdyb25nRmlsZURpbTpcIuGDkOGDoOGDkOGDm+GDkOGDoOGDl+GDlOGDkeGDo+GDmuGDmCDhg6Hhg6Phg6Dhg5Dhg5fhg5jhg6Eg4YOW4YOd4YOb4YOU4YOR4YOYLFwiLGltYWdlVG9vVGFsbDpcIuGDoeGDo+GDoOGDkOGDl+GDmCDhg5Dhg6Ag4YOj4YOc4YOT4YOQIOGDmOGDp+GDneGDoSDhg6Phg6Thg6Dhg50g4YOS4YOg4YOr4YOU4YOa4YOYIOGDleGDmOGDk+GDoOGDlFwiLGltYWdlVG9vV2lkZTpcIuGDoeGDo+GDoOGDkOGDl+GDmCDhg5Dhg6Ag4YOj4YOc4YOT4YOQIOGDmOGDp+GDneGDoSDhg6Phg6Thg6Dhg50g4YOk4YOQ4YOg4YOX4YOUIOGDleGDmOGDk+GDoOGDlFwiLGltYWdlVG9vU21hbGw6XCLhg6Hhg6Phg6Dhg5Dhg5fhg5gg4YOQ4YOg4YOY4YOhIOGDq+GDkOGDmuGDmOGDkOGDnCDhg57hg5Dhg6Lhg5Dhg6Dhg5BcIixtaW46XCLhg5vhg5jhg5zhg5jhg5vhg6Phg5tcIixtYXg6XCLhg5vhg5Dhg6Xhg6Hhg5jhg5vhg6Phg5tcIixpbWFnZVJhdGlvTm90QWNjZXB0ZWQ6XCLhg6Hhg6Phg6Dhg5Dhg5fhg5jhg6Eg4YOh4YOY4YOS4YOg4YOr4YOY4YOh4YOQIOGDk+GDkCDhg6Hhg5jhg5Lhg5Dhg5zhg5jhg6Eg4YOU4YOhIOGDl+GDkOGDnOGDkOGDpOGDkOGDoOGDk+GDneGDkeGDkCDhg5Phg5Dhg6Phg6jhg5Xhg5Thg5Hhg5Thg5rhg5jhg5BcIixiYWRCcmF6aWxUZWxlcGhvbmVBbnN3ZXI6XCLhg5vhg5jhg5fhg5jhg5fhg5Thg5Hhg6Phg5rhg5gg4YOi4YOU4YOa4YOU4YOk4YOd4YOc4YOY4YOhIOGDnOGDneGDm+GDlOGDoOGDmCDhg5Dhg6Ag4YOQ4YOg4YOY4YOhIOGDm+GDkOGDoOGDl+GDlOGDkeGDo+GDmuGDmFwiLGJhZHJlQ2FwdGNoYTpcIuGDk+GDkOGDkOGDk+GDkOGDoeGDouGDo+GDoOGDlOGDlywg4YOg4YOd4YObIOGDkOGDoCDhg67hg5Dhg6Dhg5cg4YOg4YOd4YOR4YOd4YOi4YOYXCIscGFzc3dvcmRDb21wbGV4aXR5U3RhcnQ6XCLhg57hg5Dhg6Dhg53hg5rhg5gg4YOj4YOc4YOT4YOQIOGDqOGDlOGDmOGDquGDkOGDleGDk+GDlOGDoSDhg5vhg5jhg5zhg5jhg5vhg6Phg5sgXCIscGFzc3dvcmRDb21wbGV4aXR5U2VwYXJhdG9yOlwiLCBcIixwYXNzd29yZENvbXBsZXhpdHlVcHBlcmNhc2VJbmZvOlwiIOGDk+GDmOGDk+GDmCDhg5Dhg6Hhg50o4YOU4YOR4YOYKVwiLHBhc3N3b3JkQ29tcGxleGl0eUxvd2VyY2FzZUluZm86XCIg4YOe4YOQ4YOi4YOQ4YOg4YOQIOGDkOGDoeGDnSjhg5Thg5Hhg5gpXCIscGFzc3dvcmRDb21wbGV4aXR5U3BlY2lhbENoYXJzSW5mbzpcIiDhg6Hhg57hg5Thg6rhg5jhg5Dhg5rhg6Phg6Dhg5gg4YOh4YOY4YOb4YOR4YOd4YOa4YOdKOGDlOGDkeGDmClcIixwYXNzd29yZENvbXBsZXhpdHlOdW1lcmljQ2hhcnNJbmZvOlwiIOGDoOGDmOGDquGDruGDleGDmOGDl+GDmCDhg5vhg5zhg5jhg6jhg5Xhg5zhg5Thg5rhg53hg5Hhg5Ao4YOU4YOR4YOYKVwiLHBhc3N3b3JkQ29tcGxleGl0eUVuZDpcIi5cIn19KX0oYSx3aW5kb3cpfSk7Il0sImZpbGUiOiJsYW5nL2thLmpzIn0=
