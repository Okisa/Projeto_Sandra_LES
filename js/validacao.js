
function valida(){
          d = document.formulario;
		  
		 //validar nome
         if (d.nome.value == "" || d.nome.value.length < 3){
            alert("O campo nome deve ser preenchido!");
            d.nome.focus();
            return false;
          }
          
		//validar email
        if (d.emailpessoal.value == "" || d.emailpessoal.value.indexOf('@')==-1 || d.emailpessoal.value.indexOf('.')==-1){
			alert("O campo e-mail comercial deve ser preenchido corretamente!");
            d.emailpessoal.focus();
            return false;
        }   
		
		if (d.emailcomercial.value == "" || d.emailcomercial.value.indexOf('@')==-1 || d.emailcomercial.value.indexOf('.')==-1){
            alert("O campo e-mail comercial deve ser preenchido corretamente!");
            d.emailcomercial.focus();
            return false;
        }       

        //validar telefone
        if (d.telefone.value == ""){
            alert ("O campo telefone deve ser preenchido!");
            d.telefone.focus();
            return false;
         }
		 
		 
        if (d.telefonecomercial.value == ""){
            alert ("O campo telefone comercial deve ser preenchido!");
            d.telefonecomercial.focus();
            return false;
         }
		 
		//validar cargo		         
		if (d.cargo.value == "" || d.cargo.value.length < 2){
                     alert("O campo cargo deve ser ser preenchido corretamente");
                     d.cargo.focus();
					 return false;
        }
		
		//validar empresa atual
		if (d.empresaatual.value == "" || d.empresa.value.length < 2){
                     alert("O campo empresa deve ser ser preenchido corretamente.");
                     d.empresa.focus();
                    return false;
		}		 		
				 
 }
 
 
 function validaRadio() {
		d = document.formulario;
		
		//validar indicação
		if (d.indicado[0].checked == false 
		&& d.indicado[1].checked == false) 
		{
			alert("Por favor, selecione a indicação");
			return false;
		}
		
		if (d.indicado[1].checked == true && d.indicadooutro.value == ""){
			alert("Por favor, preencha a indicação");
			d.indicadooutro.focus();
			return false;
		}
		
		if (d.cursointeresse.value == "Escolher")		{
			alert("Por favor, selecione o curso de interesse");
			return false;
		}
		
		//validar disponibilidade
		if (d.disponibilidade[0].checked == false
		&& d.disponibilidade[1].checked == false
		&& d.disponibilidade[2].checked == false
		&& d.disponibilidade[3].checked == false)
		{
			alert("Por favor, selecione a disponibilidade na semana");
			return false;
		}
		
		//validar unidade preferencial
		if (d.unidade[0].checked == false
		&& d.unidade[1].checked == false
		&& d.unidade[2].checked == false
		&& d.unidade[3].checked == false)
		{
			alert("Por favor, selecione a unidade preferencial");
			return false;
		}
		
		if (d.unidade[3].checked == true && d.outraunidade.value == ""){
			alert("Por favor, preencha a unidade");
			d.indicadooutro.focus();
			return false;
		}
				
		
  
		 /* if (d.privacidade.checked == false){
			  alert('Você deve concordar com os termos de privacidade!');
			  return false;
		  }}*/
		return true;
		
}


function mascaraTel(campoTel){
	var tel = campoTel.value;
	var regex = /[a-z!#$%&'*+,./:;?@[\\\]_`{|}~]/gi;
	campoTel.value = campoTel.value.replace(regex, "");
	if(tel.length == 1){
		tel = '(' + tel;
		document.formulario.tel.value = tel;
		return true;
	} else if(tel.length == 3){
		tel = tel + ')';
		document.formulario.tel.value = tel;
		return true;
	} else if(tel.length == 8){
		tel = tel + '-';
		document.formulario.tel.value = tel;
		return true;
	} else return true;
}


function mascaraLetra(campoLetra){
	var regex = /[0-9!#$%&'()*+,-./:;?@[\\\]_`{|}~]/g;
	campoLetra.value = campoLetra.value.replace(regex, "");
	return true;
}

function funidioma (){
	if (d.checkingles.checked == true){			
		d.ingles[0].disabled = false;
		d.ingles[1].disabled = false;
		d.ingles[2].disabled = false;	
		d.ingles[3].disabled = false;		
	}
	
	if (d.checkespanhol.checked == true){			
		d.espanhol[0].disabled = false;
		d.espanhol[1].disabled = false;
		d.ingles[2].disabled = false;	
		d.espanhol[3].disabled = false;			
	}
	
	if (d.checkoutralingua.checked == true && d.niveloutro.value != ""){			
		d.outralingua[0].disabled = false;
		d.outralingua[1].disabled = false;
		d.ingles[2].disabled = false;	
		d.outralingua[3].disabled = false;			
	}
	
	if (d.checkoutralingua.checked == true && d.niveloutro.value == ""){			
		alert("O idioma deve ser preenchido");
        d.niveloutro.focus();
        return false;	
	}
	
}
