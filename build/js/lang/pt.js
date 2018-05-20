/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.77
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a,b){"use strict";a.formUtils.registerLoadedModule("lang/pt"),a(b).bind("validatorsLoaded",function(){a.formUtils.LANG={errorTitle:"O formulário não pode ser enviado!",requiredField:"Campo de preenchimento obrigatório",requiredFields:"Você ainda não preencheu todos os campos obrigatórios",badTime:"A hora digitada não é válida",badEmail:"O e-mail digitado não é válido",badTelephone:"O telefone digitado não é válido",badSecurityAnswer:"A pergunta de segurança não foi respondida corretamente",badDate:"A data digitada não é válida",lengthBadStart:"Sua resposta deve incluir entre ",lengthBadEnd:" caracteres",lengthTooLongStart:"Sua resposta tem mais que ",lengthTooShortStart:"Sua resposta tem menos que",notConfirmed:"As informações digitadas não puderam ser confirmadas",badDomain:"O domínio digitado não é válido",badUrl:"A URL digitada não é válida",badCustomVal:"Os dados digitados não são válidos",andSpaces:" e espaços",badInt:"O número digitado não é válido",badSecurityNumber:"O número de seguro social digitado não é válido",badUKVatAnswer:"O número do VAT digitado não é válido para o Reino Unido",badStrength:"Senha muito fraca",badNumberOfSelectedOptionsStart:"Selecione pelo menos",badNumberOfSelectedOptionsEnd:" alternativa(s)",badAlphaNumeric:"Use somente caracteres alfanuméricos (letras a-z e números)",badAlphaNumericExtra:" e",wrongFileSize:"O arquivo selecionado é maior que o tamanho máximo permitido (%s)",wrongFileType:"Somente arquivos %s são permitidos",groupCheckedRangeStart:"Por favor, escolha entre ",groupCheckedTooFewStart:"Por favor, escolha pelo menos ",groupCheckedTooManyStart:"Por favor, escolhe no máximo ",groupCheckedEnd:" alternativa(s)",badCreditCard:"O número de cartão de crédito digitado não é válido",badCVV:"O código de segurança do cartão de crédito não é válido",wrongFileDim:"As dimensões da imagem não são válidas",imageTooTall:"a imagem não pode ser mais alta que ",imageTooWide:"a imagem não pode ser mais larga que ",imageTooSmall:"a imagem é muito pequena",min:"min",max:"max",imageRatioNotAccepted:"A proporção da imagem (largura x altura) não é válida",badBrazilTelephoneAnswer:"O número de telefone digitado é inválido",badBrazilCEPAnswer:"O CEP digitado é inválido",badBrazilCPFAnswer:"O CPF digitado é inválido"}})}(a,window)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYW5nL3B0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBGaWxlIGdlbmVyYXRlZCBieSBHcnVudCAtLSBkbyBub3QgbW9kaWZ5XHJcbiAqICBKUVVFUlktRk9STS1WQUxJREFUT1JcclxuICpcclxuICogIEB2ZXJzaW9uIDIuMy43N1xyXG4gKiAgQHdlYnNpdGUgaHR0cDovL2Zvcm12YWxpZGF0b3IubmV0L1xyXG4gKiAgQGF1dGhvciBWaWN0b3IgSm9uc3NvbiwgaHR0cDovL3ZpY3RvcmpvbnNzb24uc2VcclxuICogIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuIWZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCJqcXVlcnlcIikpOmIoYS5qUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKGEpeyFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2EuZm9ybVV0aWxzLnJlZ2lzdGVyTG9hZGVkTW9kdWxlKFwibGFuZy9wdFwiKSxhKGIpLmJpbmQoXCJ2YWxpZGF0b3JzTG9hZGVkXCIsZnVuY3Rpb24oKXthLmZvcm1VdGlscy5MQU5HPXtlcnJvclRpdGxlOlwiTyBmb3JtdWzDoXJpbyBuw6NvIHBvZGUgc2VyIGVudmlhZG8hXCIscmVxdWlyZWRGaWVsZDpcIkNhbXBvIGRlIHByZWVuY2hpbWVudG8gb2JyaWdhdMOzcmlvXCIscmVxdWlyZWRGaWVsZHM6XCJWb2PDqiBhaW5kYSBuw6NvIHByZWVuY2hldSB0b2RvcyBvcyBjYW1wb3Mgb2JyaWdhdMOzcmlvc1wiLGJhZFRpbWU6XCJBIGhvcmEgZGlnaXRhZGEgbsOjbyDDqSB2w6FsaWRhXCIsYmFkRW1haWw6XCJPIGUtbWFpbCBkaWdpdGFkbyBuw6NvIMOpIHbDoWxpZG9cIixiYWRUZWxlcGhvbmU6XCJPIHRlbGVmb25lIGRpZ2l0YWRvIG7Do28gw6kgdsOhbGlkb1wiLGJhZFNlY3VyaXR5QW5zd2VyOlwiQSBwZXJndW50YSBkZSBzZWd1cmFuw6dhIG7Do28gZm9pIHJlc3BvbmRpZGEgY29ycmV0YW1lbnRlXCIsYmFkRGF0ZTpcIkEgZGF0YSBkaWdpdGFkYSBuw6NvIMOpIHbDoWxpZGFcIixsZW5ndGhCYWRTdGFydDpcIlN1YSByZXNwb3N0YSBkZXZlIGluY2x1aXIgZW50cmUgXCIsbGVuZ3RoQmFkRW5kOlwiwqBjYXJhY3RlcmVzXCIsbGVuZ3RoVG9vTG9uZ1N0YXJ0OlwiU3VhIHJlc3Bvc3RhIHRlbSBtYWlzIHF1ZSBcIixsZW5ndGhUb29TaG9ydFN0YXJ0OlwiU3VhIHJlc3Bvc3RhIHRlbSBtZW5vcyBxdWVcIixub3RDb25maXJtZWQ6XCJBcyBpbmZvcm1hw6fDtWVzIGRpZ2l0YWRhcyBuw6NvIHB1ZGVyYW0gc2VyIGNvbmZpcm1hZGFzXCIsYmFkRG9tYWluOlwiTyBkb23DrW5pbyBkaWdpdGFkbyBuw6NvIMOpIHbDoWxpZG9cIixiYWRVcmw6XCJBIFVSTCBkaWdpdGFkYSBuw6NvIMOpIHbDoWxpZGFcIixiYWRDdXN0b21WYWw6XCJPcyBkYWRvcyBkaWdpdGFkb3MgbsOjbyBzw6NvIHbDoWxpZG9zXCIsYW5kU3BhY2VzOlwiwqBlIGVzcGHDp29zXCIsYmFkSW50OlwiTyBuw7ptZXJvIGRpZ2l0YWRvIG7Do28gw6kgdsOhbGlkb1wiLGJhZFNlY3VyaXR5TnVtYmVyOlwiTyBuw7ptZXJvIGRlIHNlZ3VybyBzb2NpYWwgZGlnaXRhZG8gbsOjbyDDqSB2w6FsaWRvXCIsYmFkVUtWYXRBbnN3ZXI6XCJPIG7Dum1lcm8gZG8gVkFUIGRpZ2l0YWRvIG7Do28gw6kgdsOhbGlkbyBwYXJhIG8gUmVpbm8gVW5pZG9cIixiYWRTdHJlbmd0aDpcIlNlbmhhIG11aXRvIGZyYWNhXCIsYmFkTnVtYmVyT2ZTZWxlY3RlZE9wdGlvbnNTdGFydDpcIlNlbGVjaW9uZSBwZWxvIG1lbm9zXCIsYmFkTnVtYmVyT2ZTZWxlY3RlZE9wdGlvbnNFbmQ6XCLCoGFsdGVybmF0aXZhKHMpXCIsYmFkQWxwaGFOdW1lcmljOlwiVXNlIHNvbWVudGUgY2FyYWN0ZXJlcyBhbGZhbnVtw6lyaWNvcyAobGV0cmFzIGEteiBlIG7Dum1lcm9zKVwiLGJhZEFscGhhTnVtZXJpY0V4dHJhOlwiwqBlXCIsd3JvbmdGaWxlU2l6ZTpcIk8gYXJxdWl2byBzZWxlY2lvbmFkbyDDqSBtYWlvciBxdWUgbyB0YW1hbmhvIG3DoXhpbW8gcGVybWl0aWRvICglcylcIix3cm9uZ0ZpbGVUeXBlOlwiU29tZW50ZSBhcnF1aXZvcyAlcyBzw6NvIHBlcm1pdGlkb3NcIixncm91cENoZWNrZWRSYW5nZVN0YXJ0OlwiUG9yIGZhdm9yLCBlc2NvbGhhIGVudHJlIFwiLGdyb3VwQ2hlY2tlZFRvb0Zld1N0YXJ0OlwiUG9yIGZhdm9yLCBlc2NvbGhhIHBlbG8gbWVub3MgXCIsZ3JvdXBDaGVja2VkVG9vTWFueVN0YXJ0OlwiUG9yIGZhdm9yLCBlc2NvbGhlIG5vIG3DoXhpbW8gXCIsZ3JvdXBDaGVja2VkRW5kOlwiwqBhbHRlcm5hdGl2YShzKVwiLGJhZENyZWRpdENhcmQ6XCJPIG7Dum1lcm8gZGUgY2FydMOjbyBkZSBjcsOpZGl0byBkaWdpdGFkbyBuw6NvIMOpIHbDoWxpZG9cIixiYWRDVlY6XCJPIGPDs2RpZ28gZGUgc2VndXJhbsOnYSBkbyBjYXJ0w6NvIGRlIGNyw6lkaXRvIG7Do28gw6kgdsOhbGlkb1wiLHdyb25nRmlsZURpbTpcIkFzIGRpbWVuc8O1ZXMgZGEgaW1hZ2VtIG7Do28gc8OjbyB2w6FsaWRhc1wiLGltYWdlVG9vVGFsbDpcImEgaW1hZ2VtIG7Do28gcG9kZSBzZXIgbWFpcyBhbHRhIHF1ZSBcIixpbWFnZVRvb1dpZGU6XCJhIGltYWdlbSBuw6NvIHBvZGUgc2VyIG1haXMgbGFyZ2EgcXVlIFwiLGltYWdlVG9vU21hbGw6XCJhIGltYWdlbSDDqSBtdWl0byBwZXF1ZW5hXCIsbWluOlwibWluXCIsbWF4OlwibWF4XCIsaW1hZ2VSYXRpb05vdEFjY2VwdGVkOlwiQSBwcm9wb3LDp8OjbyBkYSBpbWFnZW0gKGxhcmd1cmEgeCBhbHR1cmEpIG7Do28gw6kgdsOhbGlkYVwiLGJhZEJyYXppbFRlbGVwaG9uZUFuc3dlcjpcIk8gbsO6bWVybyBkZSB0ZWxlZm9uZSBkaWdpdGFkbyDDqSBpbnbDoWxpZG9cIixiYWRCcmF6aWxDRVBBbnN3ZXI6XCJPIENFUCBkaWdpdGFkbyDDqSBpbnbDoWxpZG9cIixiYWRCcmF6aWxDUEZBbnN3ZXI6XCJPIENQRiBkaWdpdGFkbyDDqSBpbnbDoWxpZG9cIn19KX0oYSx3aW5kb3cpfSk7Il0sImZpbGUiOiJsYW5nL3B0LmpzIn0=