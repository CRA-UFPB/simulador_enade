function confirmar(){
    let cursoSEL = (curso).value;
    document.getElementById('cursoSel').innerHTML = (curso).value;

    if      (cursoSEL == "ADJO"){cursoSEL = ADJO = ["ADMINISTRAÇÃO","13395","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",1,"0413A01","Campus I",0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "ADBA"){cursoSEL = ADBA = ["ADMINISTRAÇÃO","13455","Bacharelado","Presencial","Em atividade","CCHSA","Bananeiras",1,"0413A01","Campus III",0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "ADMA"){cursoSEL = ADMA = ["ADMINISTRAÇÃO","1440696","Bacharelado","Presencial","Em atividade","CCAE","Mamanguape",1,"0413A01","Campus IV",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "ADPU"){cursoSEL = ADPU = ["Administração Pública","1203263","Bacharelado","EAD","Em atividade","(EAD)","Diversos municípios",1,"0413A02","NSA",0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0]}
    else if (cursoSEL == "AGCO"){cursoSEL = AGCO = ["AGROECOLOGIA","1167933","Bacharelado","Presencial","Em atividade","CCHSA","Bananeiras",0,"0811A01","Campus III",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "AGIN"){cursoSEL = AGIN = ["AGROINDÚSTRIA","80589","Bacharelado","Presencial","Em atividade","CCHSA","Bananeiras",0,"0811A02","Campus III",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "AGNO"){cursoSEL = AGNO = ["AGRONOMIA","13454","Bacharelado","Presencial","Em atividade","CCA","Areia",1,"0811A04","Campus II",1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "ALIM"){cursoSEL = ALIM = ["ALIMENTOS","1127907","Tecnológico","Presencial","Em atividade","CTDR","Mangabeira",0,"0721A01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "ANTR"){cursoSEL = ANTR = ["ANTROPOLOGIA","107348","Bacharelado","Presencial","Em atividade","CCAE","Rio Tinto",0,"0312A01","Campus IV",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "ARQT"){cursoSEL = ARQT = ["ARQUITETURA E URBANISMO","13427","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0731A02","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "ARQV"){cursoSEL = ARQV = ["ARQUIVOLOGIA","113621","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",0,"0322A01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "AVLI"){cursoSEL = AVLI = ["ARTES VISUAIS","107438","Licenciatura","Presencial","Em atividade","CCTA","João Pessoa",1,"0114A02","Campus I",0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "AVBA"){cursoSEL = AVBA = ["ARTES VISUAIS","107440","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",0,"0213A03","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "BIBL"){cursoSEL = BIBL = ["BIBLIOTECONOMIA","13396","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",0,"0322B01","Campus I",0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "BIOM"){cursoSEL = BIOM = ["BIOMEDICINA","1399139","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",1,"0914B01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "BIOT"){cursoSEL = BIOT = ["BIOTECNOLOGIA","1189062","Bacharelado","Presencial","Em atividade","Cbiotec","João Pessoa",0,"0512B02","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "CCBA"){cursoSEL = CCBA = ["CIÊNCIA DA COMPUTAÇÃO","13401","Bacharelado","Presencial","Em atividade","CI","Mangabeira",1,"0614C01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1]}
    else if (cursoSEL == "CCLI"){cursoSEL = CCLI = ["CIÊNCIA DA COMPUTAÇÃO","98984","Licenciatura","Presencial","Em atividade","CCAE","Rio Tinto",1,"0114C05","Campus IV",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "CDIA"){cursoSEL = CDIA = ["CIÊNCIA DE DADOS E INTELIGÊNCIA ARTIFICIAL","1503759","Bacharelado","Presencial","Em atividade","CI","Mangabeira",0,"0617C01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "CDNE"){cursoSEL = CDNE = ["CIÊNCIA DE DADOS PARA NEGÓCIOS","1564470","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",0,"0617C01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "CAGL"){cursoSEL = CAGL = ["CIÊNCIAS AGRÁRIAS","13457","Licenciatura","Presencial","Em atividade","CCHSA","Bananeiras",0,"0114C01","Campus III",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "CAGB"){cursoSEL = CAGB = ["Ciências Agrárias","113701","Bacharelado","EAD","Em atividade","(EAD)","Diversos municípios",0,"0114C01","NSA",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "CIAT"){cursoSEL = CIAT = ["CIÊNCIAS ATUARIAIS","1127039","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",0,"0542C01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "CBLJ"){cursoSEL = CBLJ = ["CIÊNCIAS BIOLÓGICAS","13399","Licenciatura","Presencial","Em atividade","CCEN","João Pessoa",1,"0114B01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "CBLA"){cursoSEL = CBLA = ["CIÊNCIAS BIOLÓGICAS","97767","Licenciatura","Presencial","Em atividade","CCA","Areia",1,"0114B01","Campus II",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "CBLE"){cursoSEL = CBLE = ["Ciências Biológicas","113699","Licenciatura","EAD","Em atividade","(EAD)","Diversos municípios",1,"0114B01","NSA",0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "CBBJ"){cursoSEL = CBBJ = ["CIÊNCIAS BIOLÓGICAS","313399","Bacharelado","Presencial","Em atividade","CCEN","João Pessoa",1,"0511B01","Campus I",0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1]}
    else if (cursoSEL == "CBBA"){cursoSEL = CBBA = ["CIÊNCIAS BIOLÓGICAS","397767","Bacharelado","Presencial","Em atividade","CCA","Areia",1,"0511B01","Campus II",0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1]}
    else if (cursoSEL == "CCJO"){cursoSEL = CCJO = ["CIÊNCIAS CONTÁBEIS","13397","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",1,"0411C01","Campus I",0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "CCMA"){cursoSEL = CCMA = ["CIÊNCIAS CONTÁBEIS","98976","Bacharelado","Presencial","Em atividade","CCAE","Mamanguape",1,"0411C01","Campus IV",0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "CRLI"){cursoSEL = CRLI = ["CIÊNCIAS DAS RELIGIÕES","116826","Licenciatura","Presencial","Em atividade","CE","João Pessoa",0,"0411C01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "CRBA"){cursoSEL = CRBA = ["CIÊNCIAS DAS RELIGIÕES","1162838","Bacharelado","Presencial","Em atividade","CE","João Pessoa",0,"0221C01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "CEBA"){cursoSEL = CEBA = ["CIÊNCIAS ECONÔMICAS","13394","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",1,"0311E01","Campus I",0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "CSBA"){cursoSEL = CSBA = ["CIÊNCIAS SOCIAIS","13459","Bacharelado","Presencial","Em atividade","CCHLA","João Pessoa",1,"0312C02","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0]}
    else if (cursoSEL == "CSLI"){cursoSEL = CSLI = ["CIÊNCIAS SOCIAIS","1110230","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",1,"0114C03","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "CINE"){cursoSEL = CINE = ["CINEMA E AUDIOVISUAL","1166771","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",0,"0211C01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "COMP"){cursoSEL = COMP = ["Computação ","1203266","Licenciatura","EAD","Em atividade","(EAD)","Diversos municípios",1,"0114C05","NSA",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "CMDI"){cursoSEL = CMDI = ["COMUNICAÇÃO EM MÍDIAS DIGITAIS","1125641","Bacharelado","Presencial","Em atividade","CCHLA","João Pessoa",0,"0211P05","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "DANC"){cursoSEL = DANC = ["DANÇA","1191007","Licenciatura","Presencial","Em atividade","CCTA","João Pessoa",0,"0114D01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]}
    else if (cursoSEL == "DESI"){cursoSEL = DESI = ["DESIGN","107352","Bacharelado","Presencial","Em atividade","CCAE","Rio Tinto",1,"0212D02","Campus IV",0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0]}
    else if (cursoSEL == "DIJP"){cursoSEL = DIJP = ["DIREITO","13398","Bacharelado","Presencial","Em atividade","CCJ","João Pessoa",1,"0421D01","Campus I",0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "DISR"){cursoSEL = DISR = ["DIREITO","1110415","Bacharelado","Presencial","Em atividade","CCJ","Santa Rita",1,"0421D01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "ECOL"){cursoSEL = ECOL = ["ECOLOGIA","98980","Bacharelado","Presencial","Em atividade","CCAE","Rio Tinto",0,"0521E01","Campus IV",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "ECAM"){cursoSEL = ECAM = ["EDUCAÇÃO DO CAMPO","1695471","Segunda Licenciatura","Presencial","novo","CE","João Pessoa",0,"S/ROT","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "EEIN"){cursoSEL = EEIN = ["EDUCAÇÃO ESPECIAL INCLUSIVA","1696989","Licenciatura","Presencial","Em atividade","CCHSA","Bananeiras",0,"S/ROT","Campus III",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "EFLI"){cursoSEL = EFLI = ["EDUCAÇÃO FÍSICA","13423","Licenciatura","Presencial","Em atividade","CCS","João Pessoa",1,"0114E03","Campus I",1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "EFBA"){cursoSEL = EFBA = ["EDUCAÇÃO FÍSICA","122288","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",1,"0915E01","Campus I",1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0]}
    else if (cursoSEL == "ENFE"){cursoSEL = ENFE = ["ENFERMAGEM","44258","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",1,"0913E01","Campus I",1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "EAMB"){cursoSEL = EAMB = ["ENGENHARIA AMBIENTAL","113615","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0712E01","Campus I",0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "ECIV"){cursoSEL = ECIV = ["ENGENHARIA CIVIL","13429","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0732E01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "EALI"){cursoSEL = EALI = ["ENGENHARIA DE ALIMENTOS","13428","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0721E01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "ECOM"){cursoSEL = ECOM = ["ENGENHARIA DE COMPUTAÇÃO","1127164","Bacharelado","Presencial","Em atividade","CI","Mangabeira",1,"0714E04","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "EERE"){cursoSEL = EERE = ["ENGENHARIA DE ENERGIAS RENOVÁVEIS","1189063","Bacharelado","Presencial","Em atividade","CEAR","João Pessoa",1,"0713E04","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "EMAT"){cursoSEL = EMAT = ["ENGENHARIA DE MATERIAIS","113617","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0722E01","Campus I",0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "EPRO"){cursoSEL = EPRO = ["ENGENHARIA DE PRODUÇÃO","122934","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0725E02","Campus I",0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "EPME"){cursoSEL = EPME = ["ENGENHARIA DE PRODUÇÃO MECÂNICA","19563","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0725E02","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "ENGR"){cursoSEL = ENGR = ["ENGENHARIA DE ROBÔS","1723160","Bacharelado","Presencial","Em atividade","CI","Mangabeira",0,"0788P01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "EELE"){cursoSEL = EELE = ["ENGENHARIA ELÉTRICA","113609","Bacharelado","Presencial","Em atividade","CEAR","João Pessoa",1,"0713E05","Campus I",0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "EMEC"){cursoSEL = EMEC = ["ENGENHARIA MECÂNICA","13430","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0713E05","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "EQUI"){cursoSEL = EQUI = ["ENGENHARIA QUÍMICA","113604","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0711E05","Campus I",0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1]}
    else if (cursoSEL == "ESTA"){cursoSEL = ESTA = ["ESTATÍSTICA","43454","Bacharelado","Presencial","Em atividade","CCEN","João Pessoa",0,"0542E01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "FARM"){cursoSEL = FARM = ["FARMÁCIA","13421","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",1,"0916F01","Campus I",1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "FILI"){cursoSEL = FILI = ["FILOSOFIA","13409","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",1,"0114F01","Campus I",0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "FIBA"){cursoSEL = FIBA = ["FILOSOFIA","313409","Bacharelado","Presencial","Em atividade","CCHLA","João Pessoa",1,"0223F01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0]}
    else if (cursoSEL == "FISL"){cursoSEL = FISL = ["FÍSICA","13400","Licenciatura","Presencial","Em atividade","CCEN","João Pessoa",1,"0114F02","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "FISB"){cursoSEL = FISB = ["FÍSICA","313400","Bacharelado","Presencial","Em atividade","CCEN","João Pessoa",1,"0533F01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "FISI"){cursoSEL = FISI = ["FISIOTERAPIA","13422","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",1,"0915F01","Campus I",1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "FONO"){cursoSEL = FONO = ["FONOAUDIOLOGIA","122918","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",1,"0915F02","Campus I",0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "GAST"){cursoSEL = GAST = ["GASTRONOMIA","5001240","Bacharelado","Presencial","Em atividade","CTDR","Mangabeira",0,"1013G01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "GEOL"){cursoSEL = GEOL = ["GEOGRAFIA","13406","Licenciatura","Presencial","Em atividade","CCEN","João Pessoa",1,"0114G01","Campus I",0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "GEOB"){cursoSEL = GEOB = ["GEOGRAFIA","313406","Bacharelado","Presencial","Em atividade","CCEN","João Pessoa",1,"0312G01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0]}
    else if (cursoSEL == "GESS"){cursoSEL = GESS = ["GESTÃO EM SAÚDE","1697518","Tecnológico","EAD","Em atividade","CPT-ETS","Diversos municípios",0,"0413G03","NSA",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "GPTE"){cursoSEL = GPTE = ["GESTÃO PÚBLICA","1125642","Tecnológico","Presencial","Em extinção","CCSA","João Pessoa",1,"0413G12","Campus I",0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0]}
    else if (cursoSEL == "GPBA"){cursoSEL = GPBA = ["GESTÃO PÚBLICA","1363988","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",0,"0413G12","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "HIST"){cursoSEL = HIST = ["HISTÓRIA","13415","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",1,"0114H01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "HMSC"){cursoSEL = HMSC = ["HISTÓRIA - MOVIMENTOS SOCIAIS DO CAMPO","80600","Licenciatura","Presencial","Em extinção","CCHLA","João Pessoa",0,"0114H01","Campus I",0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]}
    else if (cursoSEL == "HOTE"){cursoSEL = HOTE = ["HOTELARIA","100220","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",0,"1015H01","Campus I",0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "JOGD"){cursoSEL = JOGD = ["JOGOS DIGITAIS","1722890","Tecnológico","Presencial","Em atividade","CCHLA","João Pessoa",0,"0681J01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "JORN"){cursoSEL = JORN = ["JORNALISMO","1268219","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",1,"0321J01","Campus I",0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "LELJ"){cursoSEL = LELJ = ["LETRAS - ESPANHOL","107553","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",0,"0115L02","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]}
    else if (cursoSEL == "LELE"){cursoSEL = LELE = ["Letras - Espanhol ","1261913","Licenciatura","EAD","Em atividade","(EAD)","Diversos municípios",0,"0115L02","NSA",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]}
    else if (cursoSEL == "LFLJ"){cursoSEL = LFLJ = ["LETRAS - FRANCÊS","107552","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",0,"0115L03","Campus I",0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "LILJ"){cursoSEL = LILJ = ["LETRAS - INGLÊS","107549","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",1,"0115L04","Campus I",0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "LILE"){cursoSEL = LILE = ["Letras - Inglês","1261910","Licenciatura","EAD","Em atividade","(EAD)","Diversos municípios",1,"0115L04","NSA",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "LCLA"){cursoSEL = LCLA = ["LETRAS - LETRAS CLÁSSICAS (GREGO E LATIM)","116830","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",0,"0115L08","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "LLIB"){cursoSEL = LLIB = ["Letras - Libras","1126690","Licenciatura","EAD","Em atividade","(EAD)","Diversos municípios",0,"0115L18","NSA",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "LPLJ"){cursoSEL = LPLJ = ["LETRAS - LÍNGUA PORTUGUESA","107548","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",1,"0115L13","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "LPLM"){cursoSEL = LPLM = ["LETRAS - LÍNGUA PORTUGUESA","5000898","Licenciatura","Presencial","Em atividade","CCAE","Mamanguape",1,"0115L13","Campus IV",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "LPLE"){cursoSEL = LPLE = ["Letras - Português","109954","Licenciatura","EAD","Em atividade","(EAD)","Diversos municípios",1,"0115L13","NSA",0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1]}
    else if (cursoSEL == "LEAN"){cursoSEL = LEAN = ["LÍNGUAS ESTRANGEIRAS APLICADAS ÀS NEGOCIAÇÕES INTERNACIONAIS","122928","Bacharelado","Presencial","Em atividade","CCHLA","João Pessoa",0,"0288P01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "MLJP"){cursoSEL = MLJP = ["MATEMÁTICA","13402","Licenciatura","Presencial","Em atividade","CCEN","João Pessoa",1,"0114M01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "MATR"){cursoSEL = MATR = ["MATEMÁTICA","99045","Licenciatura","Presencial","Em atividade","CCAE","Rio Tinto",1,"0114M01","Campus IV",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "MLEA"){cursoSEL = MLEA = ["Matemática","109948","Licenciatura","EAD","Em atividade","(EAD)","Diversos municípios",1,"0114M01","NSA",0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "MBJP"){cursoSEL = MBJP = ["MATEMÁTICA","313402","Bacharelado","Presencial","Em atividade","CCEN","João Pessoa",1,"0541M01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "MCBA"){cursoSEL = MCBA = ["MATEMÁTICA COMPUTACIONAL","1162837","Bacharelado","Presencial","Em extinção","CI","Mangabeira",0,"0541M02","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "MEDI"){cursoSEL = MEDI = ["MEDICINA","13424","Bacharelado","Presencial","Em atividade","CCM","João Pessoa",1,"0912M01","Campus I",1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1]}
    else if (cursoSEL == "MEDV"){cursoSEL = MEDV = ["MEDICINA VETERINÁRIA","113709","Bacharelado","Presencial","Em atividade","CCA","Areia",1,"0841M01","Campus II",0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "MBAC"){cursoSEL = MBAC = ["MÚSICA","26564","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",0,"0215M01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "MLIC"){cursoSEL = MLIC = ["MÚSICA","97039","Licenciatura","Presencial","Em atividade","CCTA","João Pessoa",1,"0114M02","Campus I",0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "MBPO"){cursoSEL = MBPO = ["MÚSICA BRASILEIRA POPULAR ","1719013","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",0,"0215M01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "MRBF"){cursoSEL = MRBF = ["MÚSICA REGÊNCIA DE BANDAS E FANFARRAS","123241","Sequencial","Presencial","Em extinção","CCTA","João Pessoa",0,"0215M01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "NUTR"){cursoSEL = NUTR = ["NUTRIÇÃO","13425","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",1,"0915N01","Campus I",1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "ODON"){cursoSEL = ODON = ["ODONTOLOGIA","13426","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",1,"0911O01","Campus I",1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]}
    else if (cursoSEL == "PLJP"){cursoSEL = PLJP = ["PEDAGOGIA","13418","Licenciatura","Presencial","Em atividade","CE","João Pessoa",1,"0113P01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "PLMA"){cursoSEL = PLMA = ["PEDAGOGIA","107356","Licenciatura","Presencial","Em atividade","CCAE","Mamanguape",1,"0113P01","Campus IV",0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "PLBA"){cursoSEL = PLBA = ["PEDAGOGIA","109626","Licenciatura","Presencial","Em atividade","CCHSA","Bananeiras",1,"0113P01","Campus III",0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "PLEA"){cursoSEL = PLEA = ["Pedagogia ","109950","Licenciatura","EAD","Em atividade","(EAD)","Diversos municípios",1,"0113P01","NSA",0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "PEDC"){cursoSEL = PEDC = ["PEDAGOGIA - EDUCAÇÃO DO CAMPO","122924","Licenciatura","Presencial","Em atividade","CE","João Pessoa",1,"0113E01","Campus I",0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0]}
    else if (cursoSEL == "PMSC"){cursoSEL = PMSC = ["PEDAGOGIA - MOVIMENTOS SOCIAIS DO CAMPO","113707","Licenciatura","Presencial","Em atividade","CE","João Pessoa",0,"0113E01","Campus I",0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "PSUC"){cursoSEL = PSUC = ["PRODUÇÃO SUCROALCOOLEIRA","1127165","Tecnológico","Presencial","Em atividade","CTDR","Mangabeira",0,"0721P03","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "PSBA"){cursoSEL = PSBA = ["PSICOLOGIA","13413","Bacharelado","Presencial","Em atividade","CCHLA","João Pessoa",1,"0313P01","Campus I",0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "PSLI"){cursoSEL = PSLI = ["PSICOLOGIA","26565","Licenciatura","Presencial","Em atividade","CCHLA","João Pessoa",0,"0114P01","Campus I",0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "PSPE"){cursoSEL = PSPE = ["PSICOPEDAGOGIA","122926","Bacharelado","Presencial","Em atividade","CE","João Pessoa",0,"0111P02","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "QLJP"){cursoSEL = QLJP = ["QUÍMICA","13404","Licenciatura","Presencial","Em atividade","CCEN","João Pessoa",1,"0114Q01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "QBJP"){cursoSEL = QBJP = ["QUÍMICA","313404","Bacharelado","Presencial","Em atividade","CCEN","João Pessoa",1,"0531Q01","Campus I",0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1]}
    else if (cursoSEL == "QLAR"){cursoSEL = QLAR = ["QUÍMICA","1161324","Licenciatura","Presencial","Em atividade","CCA","Areia",1,"0114Q01","Campus II",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1]}
    else if (cursoSEL == "QBAR"){cursoSEL = QBAR = ["QUÍMICA","5000897","Bacharelado","Presencial","Em atividade","CCA","Areia",1,"0531Q01","Campus II",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1]}
    else if (cursoSEL == "QIND"){cursoSEL = QIND = ["QUÍMICA INDUSTRIAL","13431","Bacharelado","Presencial","Em atividade","CT","João Pessoa",1,"0531Q02","Campus I",0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "RADI"){cursoSEL = RADI = ["RADIALISMO","1268221","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",0,"0321R01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "RELI"){cursoSEL = RELI = ["RELAÇÕES INTERNACIONAIS","1126958","Bacharelado","Presencial","Em atividade","CCSA","João Pessoa",1,"0312R01","Campus I",0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0]}
    else if (cursoSEL == "RELP"){cursoSEL = RELP = ["RELAÇÕES PÚBLICAS","1268257","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",0,"0414R01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "SEXB"){cursoSEL = SEXB = ["SECRETARIADO EXECUTIVO - BILÍNGUE","98982","Bacharelado","Presencial","Em atividade","CCAE","Mamanguape",1,"0415S01","Campus IV",0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0]}
    else if (cursoSEL == "SSOC"){cursoSEL = SSOC = ["SERVIÇO SOCIAL","13417","Bacharelado","Presencial","Em atividade","CCHLA","João Pessoa",1,"0923S01","Campus I",1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0]}
    else if (cursoSEL == "SINF"){cursoSEL = SINF = ["SISTEMAS DE INFORMAÇÃO","107360","Bacharelado","Presencial","Em atividade","CCAE","Rio Tinto",1,"0615S02","Campus IV",0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1]}
    else if (cursoSEL == "TLIC"){cursoSEL = TLIC = ["TEATRO","107456","Licenciatura","Presencial","Em atividade","CCTA","João Pessoa",0,"0114T01","Campus I",0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]}
    else if (cursoSEL == "TBAC"){cursoSEL = TBAC = ["TEATRO","407456","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",0,"0215T01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "TOCU"){cursoSEL = TOCU = ["TERAPIA OCUPACIONAL","1123330","Bacharelado","Presencial","Em atividade","CCS","João Pessoa",0,"0915T01","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "TRAD"){cursoSEL = TRAD = ["TRADUÇÃO","122930","Bacharelado","Presencial","Em atividade","CCHLA","João Pessoa",0,"0231L22","Campus I",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    else if (cursoSEL == "TURI"){cursoSEL = TURI = ["TURISMO","19562","Bacharelado","Presencial","Em atividade","CCTA","João Pessoa",1,"1015T01","Campus I",0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0]}
    else if (cursoSEL == "ZOOT"){cursoSEL = ZOOT = ["ZOOTECNIA","13403","Bacharelado","Presencial","Em atividade","CCA","Areia",1,"0811Z01","Campus II",1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0]} 

document.getElementById("enquad").innerHTML ="<hr>Curso selecionado:<br>"+cursoSEL[0]+"/"+cursoSEL[1]+"/"+ cursoSEL[2]+"/"+cursoSEL[3]+"/"+cursoSEL[5]+"/"+cursoSEL[6]+"<hr>"

    let enquad2 ="";
    let edicao ="";
    let periodo = (periodoIng).value;
    let participa ="";
    let registro = 

        "<p class='enquadramento'>O curso foi avaliado na edição Enade selecionada.</p>" + 
        "<p class='registrar'>Verifique se o(a) estudante estava habilitado para ser inscrito como concluinte " + 
        "(conferir as condições de habilitação no edital da respectiva edição, período de inscrições e o calendário acadêmico da UFPB).<br>" +
        "Se o(a) estudante estava habilitado, verifique na plataforma Enade se foi inscrito e se consta no Relatório de Regularidade. " + 
        "Em caso positivo, registre:</p>" +
        "<p class='registro'>Habilitado ao ENADE na edição :ano: com realização de prova em :data: e regularidade atribuída pelo INEP.<br></p>" +
        "<p class='registro'>Data da Prova/Regularização: (inserir a data da prova)</p>" +
        "<p class='registrar'>Mas, se o(a) estudante não estava habilitado por qualquer uma das razões previstas em edital, registrar:<p/>" +
        "<p class='registro'>Não habilitado ao ENADE na edição :ano: em razão do calendário do ciclo avaliativo. Registro em :data:.<br>" +
        "<p class='registro'>Data da Prova/Regularização: (inserir a data em que o registro estiver sendo feito)</p>" +
        "<p class='registrar'>Se o(a) estudante estava habilitado mas não foi inscrito, assinar declaração de responsabilidade da IES no sistema ENADE e depois registrar:</p>" +
        "<p class='registro'>Regularidade do ENADE :ano: atribuída pelo INEP em :data:, após assinatura de Declaração de Responsabilidade da IES.<br>" +
        "<p class='registro'>Data da Prova/Regularização: (inserir a data em que o registro estiver sendo feito)</p>"

    let registro2 =

        "<p class='enquadramento'>O curso não foi avaliado na edição Enade selecionada.</p>" +
        "<p class='registrar'>Neste caso, registrar:</p><p class='registro'>Não habilitado ao ENADE na edição :ano: em razão do calendário do ciclo avaliativo. Registro em :data:.<br></p>" +
        "<p class='registro'>Data da Prova/Regularização: (inserir a data em que o registro estiver sendo feito)</p>"

    let registro3 = 

        "<p class='enquadramento'>Registrar:</p>" + 
        "<p class='registro'>Não habilitado ao ENADE na edição :ano: em razão da natureza do Projeto Pedagógico do Curso. Registro em :data:.<br></p>"+
        "<p class='registro'>Data da Prova/Regularização: (inserir a data em que o registro estiver sendo feito)</p>"   
    
    document.getElementById("periodo").innerHTML = "<hr>" + "Período de conclusão selecionado: " + (periodoIng).value;

    if (cursoSEL[7] == 0 && cursoSEL[10] == 0 && cursoSEL[11] == 0 && cursoSEL[12] == 0 && cursoSEL[13] == 0 && 
        cursoSEL[14] == 0 && cursoSEL[15] == 0 && cursoSEL[16] == 0 && cursoSEL[17] == 0 && cursoSEL[18] == 0 && 
        cursoSEL[19] == 0 && cursoSEL[20] == 0 && cursoSEL[21] == 0 && cursoSEL[22] == 0 && cursoSEL[23] == 0 && 
        cursoSEL[24] == 0 && cursoSEL[25] == 0 && cursoSEL[26] == 0 && cursoSEL[27] == 0 && cursoSEL[28] == 0 &&
        cursoSEL[29] == 0 && cursoSEL[30] == 0 && ["Campus I", "Campus II", "Campus III", "Campus IV", "NSA"].includes(cursoSEL[9]))
    {
        enquad2 = "O curso selecionado não participa do Enade<br>"
        document.getElementById("enquad2").innerHTML = enquad2;
        participa = 0 

    if      (periodo == "2004.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
        
    else if (periodo == "2004.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
          
    else if (periodo == "2004.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
            
    else if (periodo == "2004.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
            
    else if (periodo == "2004.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}

    /*O FRAGMENTO ACIMA FOI CORRIGIDO EM 01/06/2026 ÀS 14H42*/
        
    document.getElementById("edicao").innerHTML = "Edição enade concluinte: " + edicao +"<hr>";

    document.getElementById("edicaoEnade").innerHTML = "Ano de ingresso: " + edicao + "<hr>"+ "<br>" + `<div class="menu">
        <a href="enade_concluinte.html">CONCLUINTE</a>
        <a href="index.html">PÁG. INICIAL</a>
        </div>`;

    document.getElementById("registro").innerHTML = registro3;
    }
    
    else if(cursoSEL[7] == "Não(!)" && ["Campus I", "Campus II", "Campus III", "Campus IV", "NSA"].includes(cursoSEL[9]))
    {

    enquad2 = "O curso selecionado não é avaliado pelo Enade em razão do Projeto Pedagógico do Curso<br>Para registros anteriores a 2013, consultar a CRA<br>"
    document.getElementById("enquad2").innerHTML = enquad2;
    participa = 0
    
    if      (periodo == "2004.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus I" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    
    else if (periodo == "2004.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus II" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}

    else if (periodo == "2004.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus III" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}

    else if (periodo == "2004.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus IV" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    
    else if (periodo == "2004.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2004.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2005.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2006.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2007.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2008.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2009.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2010.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2011.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2012.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2013.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2014.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2015.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2016.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2017.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2018.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2019.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2020.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2021.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2022.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2023.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2024.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2025.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.1" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    else if (periodo == "2026.2" && cursoSEL[9] == "NSA" && participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro3;}
    
    /*O FRAGMENTO ACIMA FOI CORRIGIDO EM 30/06/2026 ÀS 10H52*/
        
    document.getElementById("edicao").innerHTML = "Edição enade concluinte: " + edicao +"<hr>" + "<br>";

    document.getElementById("edicaoEnade").innerHTML = "Ano de ingresso: " + edicao + "<hr>" + "<br>" + `<div class="menu">
        <a href="enade_concluinte.html">CONCLUINTE</a>
        <a href="index.html">PÁG. INICIAL</a>
        </div>`;

    document.getElementById("registro").innerHTML = registro3;
    }

    else {
        
    enquad2 = "O curso selecionado participa do Enade<br>"
    document.getElementById("enquad2").innerHTML = enquad2;
    document.getElementById("registro").innerHTML = registro3;
    participa = 1

    if      (periodo == "2004.1" && cursoSEL[9] == "Campus I" && cursoSEL[10]&& participa == 1){edicao = 2004; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.1" && cursoSEL[9] == "Campus I" && cursoSEL[10]&& participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus I" && cursoSEL[10]&& participa == 1){edicao = 2004; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.2" && cursoSEL[9] == "Campus I" && cursoSEL[10]&& participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus I" && cursoSEL[11]&& participa == 1){edicao = 2005; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.1" && cursoSEL[9] == "Campus I" && cursoSEL[11]&& participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus I" && cursoSEL[11]&& participa == 1){edicao = 2005; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.2" && cursoSEL[9] == "Campus I" && cursoSEL[11]&& participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus I" && cursoSEL[12]&& participa == 1){edicao = 2006; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.1" && cursoSEL[9] == "Campus I" && cursoSEL[12]&& participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus I" && cursoSEL[12]&& participa == 1){edicao = 2006; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.2" && cursoSEL[9] == "Campus I" && cursoSEL[12]&& participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus I" && cursoSEL[13]&& participa == 1){edicao = 2007; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.1" && cursoSEL[9] == "Campus I" && cursoSEL[13]&& participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus I" && cursoSEL[13]&& participa == 1){edicao = 2007; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.2" && cursoSEL[9] == "Campus I" && cursoSEL[13]&& participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus I" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.1" && cursoSEL[9] == "Campus I" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus I" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.2" && cursoSEL[9] == "Campus I" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus I" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.1" && cursoSEL[9] == "Campus I" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus I" && cursoSEL[15]&& participa == 1){edicao = 2009; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.2" && cursoSEL[9] == "Campus I" && cursoSEL[15]&& participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus I" && cursoSEL[15]&& participa == 1){edicao = 2009; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.1" && cursoSEL[9] == "Campus I" && cursoSEL[15]&& participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus I" && cursoSEL[16]&& participa == 1){edicao = 2010; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.2" && cursoSEL[9] == "Campus I" && cursoSEL[16]&& participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus I" && cursoSEL[16]&& participa == 1){edicao = 2010; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.1" && cursoSEL[9] == "Campus I" && cursoSEL[16]&& participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus I" && cursoSEL[17]&& participa == 1){edicao = 2011; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.2" && cursoSEL[9] == "Campus I" && cursoSEL[17]&& participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus I" && cursoSEL[17]&& participa == 1){edicao = 2011; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.1" && cursoSEL[9] == "Campus I" && cursoSEL[17]&& participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus I" && cursoSEL[18]&& participa == 1){edicao = 2012; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.2" && cursoSEL[9] == "Campus I" && cursoSEL[18]&& participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus I" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.1" && cursoSEL[9] == "Campus I" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus I" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.2" && cursoSEL[9] == "Campus I" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus I" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.1" && cursoSEL[9] == "Campus I" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus I" && cursoSEL[20]&& participa == 1){edicao = 2014; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.2" && cursoSEL[9] == "Campus I" && cursoSEL[20]&& participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus I" && cursoSEL[21]&& participa == 1){edicao = 2015; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.1" && cursoSEL[9] == "Campus I" && cursoSEL[21]&& participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus I" && cursoSEL[21]&& participa == 1){edicao = 2015; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.2" && cursoSEL[9] == "Campus I" && cursoSEL[21]&& participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus I" && cursoSEL[22]&& participa == 1){edicao = 2016; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.1" && cursoSEL[9] == "Campus I" && cursoSEL[22]&& participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus I" && cursoSEL[22]&& participa == 1){edicao = 2016; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.2" && cursoSEL[9] == "Campus I" && cursoSEL[22]&& participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus I" && cursoSEL[23]&& participa == 1){edicao = 2017; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.1" && cursoSEL[9] == "Campus I" && cursoSEL[23]&& participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus I" && cursoSEL[23]&& participa == 1){edicao = 2017; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.2" && cursoSEL[9] == "Campus I" && cursoSEL[23]&& participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus I" && cursoSEL[24]&& participa == 1){edicao = 2018; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.1" && cursoSEL[9] == "Campus I" && cursoSEL[24]&& participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus I" && cursoSEL[24]&& participa == 1){edicao = 2018; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.2" && cursoSEL[9] == "Campus I" && cursoSEL[24]&& participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus I" && cursoSEL[25]&& participa == 1){edicao = 2019; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.1" && cursoSEL[9] == "Campus I" && cursoSEL[25]&& participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus I" && cursoSEL[25]&& participa == 1){edicao = 2019; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.2" && cursoSEL[9] == "Campus I" && cursoSEL[25]&& participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus I" && cursoSEL[26]&& participa == 1){edicao = 2020; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.1" && cursoSEL[9] == "Campus I" && cursoSEL[26]&& participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus I" && cursoSEL[26]&& participa == 1){edicao = 2020; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.2" && cursoSEL[9] == "Campus I" && cursoSEL[26]&& participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus I" && cursoSEL[27]&& participa == 1){edicao = 2021; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.1" && cursoSEL[9] == "Campus I" && cursoSEL[27]&& participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus I" && cursoSEL[27]&& participa == 1){edicao = 2021; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.2" && cursoSEL[9] == "Campus I" && cursoSEL[27]&& participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus I" && cursoSEL[28]&& participa == 1){edicao = 2022; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.1" && cursoSEL[9] == "Campus I" && cursoSEL[28]&& participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus I" && cursoSEL[28]&& participa == 1){edicao = 2022; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.2" && cursoSEL[9] == "Campus I" && cursoSEL[28]&& participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus I" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.1" && cursoSEL[9] == "Campus I" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus I" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.2" && cursoSEL[9] == "Campus I" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus I" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.1" && cursoSEL[9] == "Campus I" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus I" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.2" && cursoSEL[9] == "Campus I" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus I" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.1" && cursoSEL[9] == "Campus I" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus I" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.2" && cursoSEL[9] == "Campus I" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus I" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.1" && cursoSEL[9] == "Campus I" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus I" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.2" && cursoSEL[9] == "Campus I" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}
    
    /*TRECHO ACIMA CORRIGIDO EM 30/05/2026 - 12H19*/
    
    else if (periodo == "2004.1" && cursoSEL[9] == "Campus II" && cursoSEL[10]&& participa == 1){edicao = 2004; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.1" && cursoSEL[9] == "Campus II" && cursoSEL[10]&& participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus II" && cursoSEL[10]&& participa == 1){edicao = 2004; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.2" && cursoSEL[9] == "Campus II" && cursoSEL[10]&& participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus II" && cursoSEL[11]&& participa == 1){edicao = 2005; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.1" && cursoSEL[9] == "Campus II" && cursoSEL[11]&& participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus II" && cursoSEL[11]&& participa == 1){edicao = 2005; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.2" && cursoSEL[9] == "Campus II" && cursoSEL[11]&& participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus II" && cursoSEL[12]&& participa == 1){edicao = 2006; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.1" && cursoSEL[9] == "Campus II" && cursoSEL[12]&& participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus II" && cursoSEL[12]&& participa == 1){edicao = 2006; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.2" && cursoSEL[9] == "Campus II" && cursoSEL[12]&& participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus II" && cursoSEL[13]&& participa == 1){edicao = 2007; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.1" && cursoSEL[9] == "Campus II" && cursoSEL[13]&& participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus II" && cursoSEL[13]&& participa == 1){edicao = 2007; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.2" && cursoSEL[9] == "Campus II" && cursoSEL[13]&& participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus II" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.1" && cursoSEL[9] == "Campus II" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus II" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.2" && cursoSEL[9] == "Campus II" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus II" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.1" && cursoSEL[9] == "Campus II" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus II" && cursoSEL[15]&& participa == 1){edicao = 2009; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.2" && cursoSEL[9] == "Campus II" && cursoSEL[15]&& participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus II" && cursoSEL[15]&& participa == 1){edicao = 2009; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.1" && cursoSEL[9] == "Campus II" && cursoSEL[15]&& participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus II" && cursoSEL[16]&& participa == 1){edicao = 2010; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.2" && cursoSEL[9] == "Campus II" && cursoSEL[16]&& participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus II" && cursoSEL[16]&& participa == 1){edicao = 2010; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.1" && cursoSEL[9] == "Campus II" && cursoSEL[16]&& participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus II" && cursoSEL[17]&& participa == 1){edicao = 2011; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.2" && cursoSEL[9] == "Campus II" && cursoSEL[17]&& participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus II" && cursoSEL[17]&& participa == 1){edicao = 2011; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.1" && cursoSEL[9] == "Campus II" && cursoSEL[17]&& participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus II" && cursoSEL[18]&& participa == 1){edicao = 2012; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.2" && cursoSEL[9] == "Campus II" && cursoSEL[18]&& participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus II" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.1" && cursoSEL[9] == "Campus II" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus II" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.2" && cursoSEL[9] == "Campus II" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus II" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.1" && cursoSEL[9] == "Campus II" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus II" && cursoSEL[20]&& participa == 1){edicao = 2014; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.2" && cursoSEL[9] == "Campus II" && cursoSEL[20]&& participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus II" && cursoSEL[21]&& participa == 1){edicao = 2015; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.1" && cursoSEL[9] == "Campus II" && cursoSEL[21]&& participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus II" && cursoSEL[21]&& participa == 1){edicao = 2015; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.2" && cursoSEL[9] == "Campus II" && cursoSEL[21]&& participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus II" && cursoSEL[22]&& participa == 1){edicao = 2016; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.1" && cursoSEL[9] == "Campus II" && cursoSEL[22]&& participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus II" && cursoSEL[22]&& participa == 1){edicao = 2016; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.2" && cursoSEL[9] == "Campus II" && cursoSEL[22]&& participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus II" && cursoSEL[23]&& participa == 1){edicao = 2017; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.1" && cursoSEL[9] == "Campus II" && cursoSEL[23]&& participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus II" && cursoSEL[23]&& participa == 1){edicao = 2017; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.2" && cursoSEL[9] == "Campus II" && cursoSEL[23]&& participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus II" && cursoSEL[24]&& participa == 1){edicao = 2018; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.1" && cursoSEL[9] == "Campus II" && cursoSEL[24]&& participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus II" && cursoSEL[24]&& participa == 1){edicao = 2018; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.2" && cursoSEL[9] == "Campus II" && cursoSEL[24]&& participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus II" && cursoSEL[25]&& participa == 1){edicao = 2019; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.1" && cursoSEL[9] == "Campus II" && cursoSEL[25]&& participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus II" && cursoSEL[25]&& participa == 1){edicao = 2019; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.2" && cursoSEL[9] == "Campus II" && cursoSEL[25]&& participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus II" && cursoSEL[26]&& participa == 1){edicao = 2020; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.1" && cursoSEL[9] == "Campus II" && cursoSEL[26]&& participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus II" && cursoSEL[26]&& participa == 1){edicao = 2020; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.2" && cursoSEL[9] == "Campus II" && cursoSEL[26]&& participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus II" && cursoSEL[27]&& participa == 1){edicao = 2021; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.1" && cursoSEL[9] == "Campus II" && cursoSEL[27]&& participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus II" && cursoSEL[27]&& participa == 1){edicao = 2021; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.2" && cursoSEL[9] == "Campus II" && cursoSEL[27]&& participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus II" && cursoSEL[28]&& participa == 1){edicao = 2022; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.1" && cursoSEL[9] == "Campus II" && cursoSEL[28]&& participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus II" && cursoSEL[28]&& participa == 1){edicao = 2022; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.2" && cursoSEL[9] == "Campus II" && cursoSEL[28]&& participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus II" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.1" && cursoSEL[9] == "Campus II" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus II" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.2" && cursoSEL[9] == "Campus II" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus II" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.1" && cursoSEL[9] == "Campus II" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus II" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.2" && cursoSEL[9] == "Campus II" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus II" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.1" && cursoSEL[9] == "Campus II" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus II" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.2" && cursoSEL[9] == "Campus II" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus II" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.1" && cursoSEL[9] == "Campus II" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus II" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.2" && cursoSEL[9] == "Campus II" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}    

    /*TRECHO ACIMA CORRIGIDO EM 01/06/2026 - 07H14*/
    
    else if (periodo == "2004.1" && cursoSEL[9] == "Campus III" && cursoSEL[10]&& participa == 1){edicao = 2004; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.1" && cursoSEL[9] == "Campus III" && cursoSEL[10]&& participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus III" && cursoSEL[10]&& participa == 1){edicao = 2004; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.2" && cursoSEL[9] == "Campus III" && cursoSEL[10]&& participa == 0){edicao = 2004; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus III" && cursoSEL[11]&& participa == 1){edicao = 2005; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.1" && cursoSEL[9] == "Campus III" && cursoSEL[11]&& participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus III" && cursoSEL[11]&& participa == 1){edicao = 2005; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.2" && cursoSEL[9] == "Campus III" && cursoSEL[11]&& participa == 0){edicao = 2005; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus III" && cursoSEL[12]&& participa == 1){edicao = 2006; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.1" && cursoSEL[9] == "Campus III" && cursoSEL[12]&& participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus III" && cursoSEL[12]&& participa == 1){edicao = 2006; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.2" && cursoSEL[9] == "Campus III" && cursoSEL[12]&& participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus III" && cursoSEL[13]&& participa == 1){edicao = 2007; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.1" && cursoSEL[9] == "Campus III" && cursoSEL[13]&& participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus III" && cursoSEL[13]&& participa == 1){edicao = 2007; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.2" && cursoSEL[9] == "Campus III" && cursoSEL[13]&& participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus III" && cursoSEL[14]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;} else if (periodo == "2008.1" && cursoSEL[9] == "Campus III" && cursoSEL[14]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus III" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.2" && cursoSEL[9] == "Campus III" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus III" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.1" && cursoSEL[9] == "Campus III" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus III" && cursoSEL[15]&& participa == 1){edicao = 2009; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.2" && cursoSEL[9] == "Campus III" && cursoSEL[15]&& participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus III" && cursoSEL[15]&& participa == 1){edicao = 2009; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.1" && cursoSEL[9] == "Campus III" && cursoSEL[15]&& participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus III" && cursoSEL[16]&& participa == 1){edicao = 2010; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.2" && cursoSEL[9] == "Campus III" && cursoSEL[16]&& participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus III" && cursoSEL[16]&& participa == 1){edicao = 2010; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.1" && cursoSEL[9] == "Campus III" && cursoSEL[16]&& participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus III" && cursoSEL[17]&& participa == 1){edicao = 2011; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.2" && cursoSEL[9] == "Campus III" && cursoSEL[17]&& participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus III" && cursoSEL[17]&& participa == 1){edicao = 2011; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.1" && cursoSEL[9] == "Campus III" && cursoSEL[17]&& participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus III" && cursoSEL[18]&& participa == 1){edicao = 2012; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.2" && cursoSEL[9] == "Campus III" && cursoSEL[18]&& participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus III" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.1" && cursoSEL[9] == "Campus III" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus III" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.2" && cursoSEL[9] == "Campus III" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus III" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.1" && cursoSEL[9] == "Campus III" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus III" && cursoSEL[20]&& participa == 1){edicao = 2014; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.2" && cursoSEL[9] == "Campus III" && cursoSEL[20]&& participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus III" && cursoSEL[21]&& participa == 1){edicao = 2015; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.1" && cursoSEL[9] == "Campus III" && cursoSEL[21]&& participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus III" && cursoSEL[21]&& participa == 1){edicao = 2015; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.2" && cursoSEL[9] == "Campus III" && cursoSEL[21]&& participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus III" && cursoSEL[22]&& participa == 1){edicao = 2016; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.1" && cursoSEL[9] == "Campus III" && cursoSEL[22]&& participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus III" && cursoSEL[22]&& participa == 1){edicao = 2016; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.2" && cursoSEL[9] == "Campus III" && cursoSEL[22]&& participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus III" && cursoSEL[23]&& participa == 1){edicao = 2017; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.1" && cursoSEL[9] == "Campus III" && cursoSEL[23]&& participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus III" && cursoSEL[23]&& participa == 1){edicao = 2017; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.2" && cursoSEL[9] == "Campus III" && cursoSEL[23]&& participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus III" && cursoSEL[24]&& participa == 1){edicao = 2018; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.1" && cursoSEL[9] == "Campus III" && cursoSEL[24]&& participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus III" && cursoSEL[24]&& participa == 1){edicao = 2018; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.2" && cursoSEL[9] == "Campus III" && cursoSEL[24]&& participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus III" && cursoSEL[25]&& participa == 1){edicao = 2019; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.1" && cursoSEL[9] == "Campus III" && cursoSEL[25]&& participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus III" && cursoSEL[25]&& participa == 1){edicao = 2019; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.2" && cursoSEL[9] == "Campus III" && cursoSEL[25]&& participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus III" && cursoSEL[26]&& participa == 1){edicao = 2020; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.1" && cursoSEL[9] == "Campus III" && cursoSEL[26]&& participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus III" && cursoSEL[26]&& participa == 1){edicao = 2020; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.2" && cursoSEL[9] == "Campus III" && cursoSEL[26]&& participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus III" && cursoSEL[27]&& participa == 1){edicao = 2021; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.1" && cursoSEL[9] == "Campus III" && cursoSEL[27]&& participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus III" && cursoSEL[27]&& participa == 1){edicao = 2021; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.2" && cursoSEL[9] == "Campus III" && cursoSEL[27]&& participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus III" && cursoSEL[28]&& participa == 1){edicao = 2022; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.1" && cursoSEL[9] == "Campus III" && cursoSEL[28]&& participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus III" && cursoSEL[28]&& participa == 1){edicao = 2022; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.2" && cursoSEL[9] == "Campus III" && cursoSEL[28]&& participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus III" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.1" && cursoSEL[9] == "Campus III" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus III" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.2" && cursoSEL[9] == "Campus III" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus III" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.1" && cursoSEL[9] == "Campus III" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus III" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.2" && cursoSEL[9] == "Campus III" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus III" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.1" && cursoSEL[9] == "Campus III" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus III" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.2" && cursoSEL[9] == "Campus III" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus III" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.1" && cursoSEL[9] == "Campus III" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus III" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.2" && cursoSEL[9] == "Campus III" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}

    /*TRECHO ACIMA CORRIGIDO EM 01/06/2026 - 07H28*/
        
    else if (periodo == "2004.1" && cursoSEL[9] == "Campus IV" && cursoSEL[10]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.1" && cursoSEL[9] == "Campus IV" && cursoSEL[10]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2004.2" && cursoSEL[9] == "Campus IV" && cursoSEL[10]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.2" && cursoSEL[9] == "Campus IV" && cursoSEL[10]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.1" && cursoSEL[9] == "Campus IV" && cursoSEL[11]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.1" && cursoSEL[9] == "Campus IV" && cursoSEL[11]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.2" && cursoSEL[9] == "Campus IV" && cursoSEL[11]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.2" && cursoSEL[9] == "Campus IV" && cursoSEL[11]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.1" && cursoSEL[9] == "Campus IV" && cursoSEL[12]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.1" && cursoSEL[9] == "Campus IV" && cursoSEL[12]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.2" && cursoSEL[9] == "Campus IV" && cursoSEL[12]&& participa == 1){edicao = 2006; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.2" && cursoSEL[9] == "Campus IV" && cursoSEL[12]&& participa == 0){edicao = 2006; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.1" && cursoSEL[9] == "Campus IV" && cursoSEL[13]&& participa == 1){edicao = 2007; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.1" && cursoSEL[9] == "Campus IV" && cursoSEL[13]&& participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.2" && cursoSEL[9] == "Campus IV" && cursoSEL[13]&& participa == 1){edicao = 2007; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.2" && cursoSEL[9] == "Campus IV" && cursoSEL[13]&& participa == 0){edicao = 2007; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.1" && cursoSEL[9] == "Campus IV" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.1" && cursoSEL[9] == "Campus IV" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.2" && cursoSEL[9] == "Campus IV" && cursoSEL[14]&& participa == 1){edicao = 2008; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.2" && cursoSEL[9] == "Campus IV" && cursoSEL[14]&& participa == 0){edicao = 2008; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.1" && cursoSEL[9] == "Campus IV" && cursoSEL[15]&& participa == 1){edicao = 2009; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.1" && cursoSEL[9] == "Campus IV" && cursoSEL[15]&& participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.2" && cursoSEL[9] == "Campus IV" && cursoSEL[15]&& participa == 1){edicao = 2009; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.2" && cursoSEL[9] == "Campus IV" && cursoSEL[15]&& participa == 0){edicao = 2009; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.1" && cursoSEL[9] == "Campus IV" && cursoSEL[16]&& participa == 1){edicao = 2010; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.1" && cursoSEL[9] == "Campus IV" && cursoSEL[16]&& participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.2" && cursoSEL[9] == "Campus IV" && cursoSEL[16]&& participa == 1){edicao = 2010; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.2" && cursoSEL[9] == "Campus IV" && cursoSEL[16]&& participa == 0){edicao = 2010; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.1" && cursoSEL[9] == "Campus IV" && cursoSEL[17]&& participa == 1){edicao = 2011; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.1" && cursoSEL[9] == "Campus IV" && cursoSEL[17]&& participa == 0){edicao = 2011; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.2" && cursoSEL[9] == "Campus IV" && cursoSEL[18]&& participa == 1){edicao = 2012; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.2" && cursoSEL[9] == "Campus IV" && cursoSEL[18]&& participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.1" && cursoSEL[9] == "Campus IV" && cursoSEL[18]&& participa == 1){edicao = 2012; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.1" && cursoSEL[9] == "Campus IV" && cursoSEL[18]&& participa == 0){edicao = 2012; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.2" && cursoSEL[9] == "Campus IV" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.2" && cursoSEL[9] == "Campus IV" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.1" && cursoSEL[9] == "Campus IV" && cursoSEL[19]&& participa == 1){edicao = 2013; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.1" && cursoSEL[9] == "Campus IV" && cursoSEL[19]&& participa == 0){edicao = 2013; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.2" && cursoSEL[9] == "Campus IV" && cursoSEL[20]&& participa == 1){edicao = 2014; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.2" && cursoSEL[9] == "Campus IV" && cursoSEL[20]&& participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.1" && cursoSEL[9] == "Campus IV" && cursoSEL[20]&& participa == 1){edicao = 2014; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.1" && cursoSEL[9] == "Campus IV" && cursoSEL[20]&& participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.2" && cursoSEL[9] == "Campus IV" && cursoSEL[20]&& participa == 1){edicao = 2014; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.2" && cursoSEL[9] == "Campus IV" && cursoSEL[20]&& participa == 0){edicao = 2014; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.1" && cursoSEL[9] == "Campus IV" && cursoSEL[21]&& participa == 1){edicao = 2015; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.1" && cursoSEL[9] == "Campus IV" && cursoSEL[21]&& participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.2" && cursoSEL[9] == "Campus IV" && cursoSEL[21]&& participa == 1){edicao = 2015; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.2" && cursoSEL[9] == "Campus IV" && cursoSEL[21]&& participa == 0){edicao = 2015; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.1" && cursoSEL[9] == "Campus IV" && cursoSEL[22]&& participa == 1){edicao = 2016; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.1" && cursoSEL[9] == "Campus IV" && cursoSEL[22]&& participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.2" && cursoSEL[9] == "Campus IV" && cursoSEL[22]&& participa == 1){edicao = 2016; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.2" && cursoSEL[9] == "Campus IV" && cursoSEL[22]&& participa == 0){edicao = 2016; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.1" && cursoSEL[9] == "Campus IV" && cursoSEL[23]&& participa == 1){edicao = 2017; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.1" && cursoSEL[9] == "Campus IV" && cursoSEL[23]&& participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.2" && cursoSEL[9] == "Campus IV" && cursoSEL[23]&& participa == 1){edicao = 2017; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.2" && cursoSEL[9] == "Campus IV" && cursoSEL[23]&& participa == 0){edicao = 2017; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.1" && cursoSEL[9] == "Campus IV" && cursoSEL[24]&& participa == 1){edicao = 2018; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.1" && cursoSEL[9] == "Campus IV" && cursoSEL[24]&& participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.2" && cursoSEL[9] == "Campus IV" && cursoSEL[24]&& participa == 1){edicao = 2018; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.2" && cursoSEL[9] == "Campus IV" && cursoSEL[24]&& participa == 0){edicao = 2018; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.1" && cursoSEL[9] == "Campus IV" && cursoSEL[25]&& participa == 1){edicao = 2019; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.1" && cursoSEL[9] == "Campus IV" && cursoSEL[25]&& participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.2" && cursoSEL[9] == "Campus IV" && cursoSEL[25]&& participa == 1){edicao = 2019; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.2" && cursoSEL[9] == "Campus IV" && cursoSEL[25]&& participa == 0){edicao = 2019; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.1" && cursoSEL[9] == "Campus IV" && cursoSEL[26]&& participa == 1){edicao = 2020; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.1" && cursoSEL[9] == "Campus IV" && cursoSEL[26]&& participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.2" && cursoSEL[9] == "Campus IV" && cursoSEL[26]&& participa == 1){edicao = 2020; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.2" && cursoSEL[9] == "Campus IV" && cursoSEL[26]&& participa == 0){edicao = 2020; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.1" && cursoSEL[9] == "Campus IV" && cursoSEL[27]&& participa == 1){edicao = 2021; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.1" && cursoSEL[9] == "Campus IV" && cursoSEL[27]&& participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.2" && cursoSEL[9] == "Campus IV" && cursoSEL[27]&& participa == 1){edicao = 2021; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.2" && cursoSEL[9] == "Campus IV" && cursoSEL[27]&& participa == 0){edicao = 2021; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.1" && cursoSEL[9] == "Campus IV" && cursoSEL[28]&& participa == 1){edicao = 2022; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.1" && cursoSEL[9] == "Campus IV" && cursoSEL[28]&& participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.2" && cursoSEL[9] == "Campus IV" && cursoSEL[28]&& participa == 1){edicao = 2022; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.2" && cursoSEL[9] == "Campus IV" && cursoSEL[28]&& participa == 0){edicao = 2022; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.1" && cursoSEL[9] == "Campus IV" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.1" && cursoSEL[9] == "Campus IV" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.2" && cursoSEL[9] == "Campus IV" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.2" && cursoSEL[9] == "Campus IV" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.1" && cursoSEL[9] == "Campus IV" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.1" && cursoSEL[9] == "Campus IV" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.2" && cursoSEL[9] == "Campus IV" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.2" && cursoSEL[9] == "Campus IV" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.1" && cursoSEL[9] == "Campus IV" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.1" && cursoSEL[9] == "Campus IV" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.2" && cursoSEL[9] == "Campus IV" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.2" && cursoSEL[9] == "Campus IV" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.1" && cursoSEL[9] == "Campus IV" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.1" && cursoSEL[9] == "Campus IV" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.2" && cursoSEL[9] == "Campus IV" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.2" && cursoSEL[9] == "Campus IV" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}

    /*TRECHO ACIMA CORRIGIDO EM 01/06/2026 - 09H22*/
        
    else if (periodo == "2004.1" && cursoSEL[9] == "NSA" && cursoSEL[10]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.1" && cursoSEL[9] == "NSA" && cursoSEL[10]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2004.2" && cursoSEL[9] == "NSA" && cursoSEL[10]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2004.2" && cursoSEL[9] == "NSA" && cursoSEL[10]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.1" && cursoSEL[9] == "NSA" && cursoSEL[11]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.1" && cursoSEL[9] == "NSA" && cursoSEL[11]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2005.2" && cursoSEL[9] == "NSA" && cursoSEL[11]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2005.2" && cursoSEL[9] == "NSA" && cursoSEL[11]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.1" && cursoSEL[9] == "NSA" && cursoSEL[12]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.1" && cursoSEL[9] == "NSA" && cursoSEL[12]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2006.2" && cursoSEL[9] == "NSA" && cursoSEL[12]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2006.2" && cursoSEL[9] == "NSA" && cursoSEL[12]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.1" && cursoSEL[9] == "NSA" && cursoSEL[13]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.1" && cursoSEL[9] == "NSA" && cursoSEL[13]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2007.2" && cursoSEL[9] == "NSA" && cursoSEL[13]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2007.2" && cursoSEL[9] == "NSA" && cursoSEL[13]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.1" && cursoSEL[9] == "NSA" && cursoSEL[14]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.1" && cursoSEL[9] == "NSA" && cursoSEL[14]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2008.2" && cursoSEL[9] == "NSA" && cursoSEL[14]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2008.2" && cursoSEL[9] == "NSA" && cursoSEL[14]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.1" && cursoSEL[9] == "NSA" && cursoSEL[15]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.1" && cursoSEL[9] == "NSA" && cursoSEL[15]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2009.2" && cursoSEL[9] == "NSA" && cursoSEL[15]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2009.2" && cursoSEL[9] == "NSA" && cursoSEL[15]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.1" && cursoSEL[9] == "NSA" && cursoSEL[16]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.1" && cursoSEL[9] == "NSA" && cursoSEL[16]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2010.2" && cursoSEL[9] == "NSA" && cursoSEL[16]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2010.2" && cursoSEL[9] == "NSA" && cursoSEL[16]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.1" && cursoSEL[9] == "NSA" && cursoSEL[17]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.1" && cursoSEL[9] == "NSA" && cursoSEL[17]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2011.2" && cursoSEL[9] == "NSA" && cursoSEL[17]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2011.2" && cursoSEL[9] == "NSA" && cursoSEL[17]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.1" && cursoSEL[9] == "NSA" && cursoSEL[18]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.1" && cursoSEL[9] == "NSA" && cursoSEL[18]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2012.2" && cursoSEL[9] == "NSA" && cursoSEL[18]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2012.2" && cursoSEL[9] == "NSA" && cursoSEL[18]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.1" && cursoSEL[9] == "NSA" && cursoSEL[19]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.1" && cursoSEL[9] == "NSA" && cursoSEL[19]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2013.2" && cursoSEL[9] == "NSA" && cursoSEL[19]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2013.2" && cursoSEL[9] == "NSA" && cursoSEL[19]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.1" && cursoSEL[9] == "NSA" && cursoSEL[20]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.1" && cursoSEL[9] == "NSA" && cursoSEL[20]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2014.2" && cursoSEL[9] == "NSA" && cursoSEL[20]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2014.2" && cursoSEL[9] == "NSA" && cursoSEL[20]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.1" && cursoSEL[9] == "NSA" && cursoSEL[21]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.1" && cursoSEL[9] == "NSA" && cursoSEL[21]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2015.2" && cursoSEL[9] == "NSA" && cursoSEL[21]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2015.2" && cursoSEL[9] == "NSA" && cursoSEL[21]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.1" && cursoSEL[9] == "NSA" && cursoSEL[22]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.1" && cursoSEL[9] == "NSA" && cursoSEL[22]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2016.2" && cursoSEL[9] == "NSA" && cursoSEL[22]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2016.2" && cursoSEL[9] == "NSA" && cursoSEL[22]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.1" && cursoSEL[9] == "NSA" && cursoSEL[23]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.1" && cursoSEL[9] == "NSA" && cursoSEL[23]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2017.2" && cursoSEL[9] == "NSA" && cursoSEL[23]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2017.2" && cursoSEL[9] == "NSA" && cursoSEL[23]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.1" && cursoSEL[9] == "NSA" && cursoSEL[24]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.1" && cursoSEL[9] == "NSA" && cursoSEL[24]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2018.2" && cursoSEL[9] == "NSA" && cursoSEL[24]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2018.2" && cursoSEL[9] == "NSA" && cursoSEL[24]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.1" && cursoSEL[9] == "NSA" && cursoSEL[25]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.1" && cursoSEL[9] == "NSA" && cursoSEL[25]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2019.2" && cursoSEL[9] == "NSA" && cursoSEL[25]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2019.2" && cursoSEL[9] == "NSA" && cursoSEL[25]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.1" && cursoSEL[9] == "NSA" && cursoSEL[26]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.1" && cursoSEL[9] == "NSA" && cursoSEL[26]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2020.2" && cursoSEL[9] == "NSA" && cursoSEL[26]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2020.2" && cursoSEL[9] == "NSA" && cursoSEL[26]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.1" && cursoSEL[9] == "NSA" && cursoSEL[27]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.1" && cursoSEL[9] == "NSA" && cursoSEL[27]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2021.2" && cursoSEL[9] == "NSA" && cursoSEL[27]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2021.2" && cursoSEL[9] == "NSA" && cursoSEL[27]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.1" && cursoSEL[9] == "NSA" && cursoSEL[28]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.1" && cursoSEL[9] == "NSA" && cursoSEL[28]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2022.2" && cursoSEL[9] == "NSA" && cursoSEL[28]&& participa == 1){edicao = "0000"; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2022.2" && cursoSEL[9] == "NSA" && cursoSEL[28]&& participa == 0){edicao = "0000"; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.1" && cursoSEL[9] == "NSA" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.1" && cursoSEL[9] == "NSA" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2023.2" && cursoSEL[9] == "NSA" && cursoSEL[29]&& participa == 1){edicao = 2023; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2023.2" && cursoSEL[9] == "NSA" && cursoSEL[29]&& participa == 0){edicao = 2023; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.1" && cursoSEL[9] == "NSA" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.1" && cursoSEL[9] == "NSA" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2024.2" && cursoSEL[9] == "NSA" && cursoSEL[30]&& participa == 1){edicao = 2024; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2024.2" && cursoSEL[9] == "NSA" && cursoSEL[30]&& participa == 0){edicao = 2024; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.1" && cursoSEL[9] == "NSA" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.1" && cursoSEL[9] == "NSA" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2025.2" && cursoSEL[9] == "NSA" && cursoSEL[31]&& participa == 1){edicao = 2025; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2025.2" && cursoSEL[9] == "NSA" && cursoSEL[31]&& participa == 0){edicao = 2025; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.1" && cursoSEL[9] == "NSA" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.1" && cursoSEL[9] == "NSA" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}
    else if (periodo == "2026.2" && cursoSEL[9] == "NSA" && cursoSEL[32]&& participa == 1){edicao = 2026; document.getElementById("registro").innerHTML = registro;}	else if (periodo == "2026.2" && cursoSEL[9] == "NSA" && cursoSEL[32]&& participa == 0){edicao = 2026; document.getElementById("registro").innerHTML = registro2;}

    /*TRECHO ACIMA CORRIGIDO EM 01/06/2026 - 09H33*/
        
    document.getElementById("edicao").innerHTML = "Edição enade concluinte: " + edicao + "<hr>";
    document.getElementById("edicaoEnade").innerHTML = "Ano da Edição ENADE Concluinte: " + edicao + "<hr>"+ "<br>" +` <div class="menu">
    <a href="enade_ingressante.html">INGRESSANTE</a>
    <a href="index.html">PÁG. INICIAL</a>`; 
    }
}
