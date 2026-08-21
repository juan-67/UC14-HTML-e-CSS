const agora = new Date();
const hora              = agoragetHours();
const minutos           = agoragetminutes();
const minutosFormatados = String(minuto).padStart(2,'0');
const horaTexto = '${hora}:${minutosFormatados}';

//2. Selecionar elementos do HTML
const pagina  =document.getElementById('pagina')
const emojiEl =document.getElementById('emoji')
const saudacaoEL =document.getElementById('saudacao')
const horarioEL =document.getElementById('horario')

//3. Variáveis que guardam o resultado
let turno    ='';
let emojiStr ='';
let msg      ='';

//4. Decidir o turno com if/else
if (hora >= 5 && hora < 12) {
        turno  ='manha';
        emojiStr= '';
        msg     ='bom dia!'

    }else if (hora >=12 && hora < 18) {
     turno    ='tarde';
     emojiStr ='';
     msg      ='Boa tarde!';
    
    }else{
        turno = 'madrugada';
        emojiSrt = '';
        msg      = 'Boa madrugada!';
    }

    //5. Aplicar o tema na página
    pagina.classList.add(turno);

    //6t.Colocaro conteúdo nos elemntos
    emojiEl.textContent    =emojiStr;
    saudacaoEL.textContent =msg;
    horarioEL.textcontent  =`são${horatexto}h`;
    
    //7.Log para o desenvolvedor
    console.log('turno: 4{turno} | Hora: ${horaTexto}');