import { MigrationInterface, QueryRunner } from "typeorm";

export class hymnsTableCreatedAndPopulated1668973188318
  implements MigrationInterface
{
  name = "hymnsTableCreatedAndPopulated1668973188318";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "hymns" ("hymnId" character varying NOT NULL, "hymnNumber" character varying NOT NULL, "hymnTitle" character varying, "hymnAuthor" character varying, "hymnComposer" character varying, "originalTitle" character varying, CONSTRAINT "PK_4d11347e7f582a8d6b12cbdd397" PRIMARY KEY ("hymnId"))`
    );
    await queryRunner.query(`
                INSERT INTO "hymns" ("hymnId", "hymnNumber", "hymnTitle")
                VALUES ('FDpludwY46U','1','Santo Santo Santo!'),('u4c66cbU9-c','2','Ó Adorai O Senhor'),('BpMD-UziYbc','3','O Deus Eterno Reina'),('hfH_dQpEMhk','4','Louvor ao Trino Deus'),('e6r1kYZJ1hg','5','Jubilosos Te Adoramos'),('gUX4rONKdeI','6','Nós Te Adoramos'),('jRo9W3iHhLc','7','Sejas Louvado'),('W0Ha0nqpVtY','8','Ó Deus de Amor'),('d-Jm5BqIHms','9','Santo, Santo, Pai Bondoso'),('XafjwXQ7OF8','10','O Senhor Está Aqui!'),('7UlUMa8dlBg','11','Maior que Tudo'),('2WLfNPD0uhw','12','Vinde, Povo do Senhor'),('xAzZsKdefi0','13','Louvamos Te, Ó Deus'),('KARmqJz3Ktg','14','Louvemos o Rei'),('lVBzxAcXTVk','15','Tu És fiel, Senhor'),('724USSpz4ls','16','Sublime Amor'),('1fkhW76iKSs','17','Deus é Nosso Pai Amado'),('5Zm_BUpeWHI','18','Deus é Nosso Pai Celeste'),('MnBH-e_BpZQ','19','A Deus Demos Glória'),('4C23Lx1lwso','20','Grande é o Senhor'),('BjHv6tOnhn0','21','Eu Te Amo, Ó Deus'),('BwISjJU028U','22','A Tí Toda Glória'),('0LeRHv_eCgk','23','Louvai A Cristo'),('AlTWVhSsndI','24','Rei dos Reis'),('T5jU2aXD0cI','25','Jeus Sempre Te Amo'),('qQuZ30_VVbU','26','Saudai o Nome de Jesus'),('xlkwuGo10Os','27','Com Glória Coroai'),('DRYgNLQNjmU','28','Lindo És, Meu Mestre'),('rDqhjaMUu8I','29','O Amor De Jesus'),('SvLmewB4-tc','30','Sempre Vencendo'),('LL5Pak4zcuA','31','Jesus Tu És A Minha Vida'),('pnjg15RB6f8','32','Brilha Jesus'),('8hKR6ohrexE','33','A Esperança É'),('i_1znegpxLI','34','Precioso Nome'),('KAu7WO38klQ','35','Ele É Exaltado'),('h2zY2yqEhH8','36','Por Seu Imenso Amor'),('PRVP3fMMOJ8','37','Cristo'),('Sju2hLQ6hKU','38','A Tí Rendemos Glória'),('aARgwr11kt4','39','Glória Ao Rei do Amor'),('AEIOZHynZ10','40','Concede-Nos o Espírito'),('BaJF1Tg3CJM','41','Chuvas de Bênçãos'),('GHr5fUzMD-8','42','Vive Em Mim'),('q7ckGf7nsU4','43','Vem, Santo Espírito, Agora'),('niiUqUc9j1s','44','O Santo Espírito'),('zoxr6xrtoa8','45','Suave Espírito'),('Vwpc1inHrwA','46','Dia de Chuva'),('5pCbe4IUoSQ','47','Cheio Do Espírito'),('dq4XfQZJrbg','48','O Poder Do Espírito'),('YiYxrq_0LuI','49','Que Firme Alicerce'),('s8iTxsqiiqM','50','Alicerce Seguro'),('k-O7d-lvwtE','51','Dá-me a Bíblia'),('ZKGM3HzpOZo','52','Novas de Amor e Vida'),('hNdx9bWb_0s','53','Que Diz a Bíblia'),('2rH9XgY6SGQ','54','Unidos Pela Palavra'),('L81Mjny13d4','55','Tua Palavra'),('5-PCVhz6uzg','56','Nossa Inspiração'),('86bzYwgHtG4','57','A Palavra do Senhor'),('uNq843-YAvo','58','O Pão da Vida'),('ogxYKQWtuCo','59','Por Belezas Naturais'),('2khAUPUJ5VM','60','Ao Deus De Abraão Louvai'),('EUHb7-depCY','61','Vós Criaturas do Senhor'),('gwi_gzBwl98','62','Quão Grande És tu'),('xopoI-il52Y','63','O Mundo é de Meu Deus'),('Dh24lTXOorc','64','Vaso Novo'),('38nr_ig4oYk','65','Das mãos do Criador'),('1XYJWYHuZdg','66','Não Há Outro Igual A Você'),('IN0WMRcnYq4','67','Restaura Em Mim'),('98rSocNlrtw','68','Restaura'),('4XkYx2_xuPA','69','Obrigado, Bom Pai'),('vs4fs-zc66M','70','A Real Bandeira'),('wQFi-aVjuo0','71','Vitória em Cristo'),('0QqmaJAVCss','72','Firme Nas Promessas'),('r130BsOP1Cs','73','Castelo Forte'),('pDF_yaObO8M','74','Grande Comandante'),('1k3ayNZz8jQ','75','Fé é a Vitória'),('-0M7gBeQI78','76','Vencedor Cada Dia'),('3-mP_nKu8yQ','77','Ó Cristãos, Avante!'),('JzD8Fe1ICcw','78','Um Vencedor'),('EbHIw7hpduI','79','Noite De Paz'),('j_LfpCFhM1o','80','Soou Em Meio a Noite'),('kkHG9hyVZFI','81','Surgem Anjos Proclamando'),('RDNxaHfPnLE','82','Num Berço de Palha'),('j3eoiJdeg9k','83','Canção da Manjedoura'),('eNDUTp27XrI','84','Ó Vinde, Adoremos'),('C3cAaEQRlSg','85','Estrela de Luz'),('G4KswVUWNM8','86','Nasce Jesus'),('GVg5Enb5OU4','87','Belém, Bendita És'),('HXHaY7MkNoI','88','Cristo Nasceu'),('02SEzuF8Yeg','89','Natal! Feliz Natal!'),('UiF50HoVxmQ','90','Glória ao Rei que Vos Nasceu'),('manYe2ql8Kg','91','Ó Noite Santa'),('neN3QmMPIf4','92','Onde Estavam?'),('Lp2_WQaM8KQ','93','Nasceu O Salvador'),('jgwICRa17Ts','94','Vestido em Linho'),('Pwa7fRMbURU','95','Amor que por Amor Desceste'),('qJXgvVGefyc','96','Foi Amor'),('KXB43Rs8SyU','97','Por Que Me Amou Assim'),('pcShGyOHlig','98','Conta-me a História de Cristo'),('nkGGdNovUXg','99','Conta-me a Velha História'),('LgbciTZ1VwM','100','A Doce História'),('yey65PRKnwY','101','Seu Maravilhoso Olhar'),('xXSfV9DBfuU','102','Ó Vem, Emanuel!'),('uARK7ATNd94','103','Rude Cruz'),('6dOjCNKG3H8','104','Na Senda do Calvário'),('HRIFTOPGfQo','105','Oh! Fronte Ensanguentada!'),('PjPkdT0RdVg','106','Cristo no Horto'),('1LBGWEG23uc','107','Na Cruz Morri Por Ti'),('LYPwUpwFqJU','108','Foi por Você Também'),('xoUiEda5iJM','109','Houve Alguém'),('RRpKJGGwcXE','110','Monte do Calvário'),('2wRdBPHruHU','111','Ao Ver a Cruz'),('QvcJtKyiJaQ','112','Cordeiro de Deus'),('5EB_afTMfPc','113','Stavas Lá?'),('Jxim-KyuzMw','114','Cristo Já Ressuscitou'),('3uF79G1Wwjw','115','Preciosa Graça'),('Kfplvg2IX6w','116','Maravilhosa Graça'),('kQbEAjwxHXU','117','Infinita Graça'),('p0HlgYN5D6Q','118','Imenso Amor'),('cS1Nl3pkS6g','119','Graça de Deus'),('pb6P7_xmUQs','120','Graça'),('1d_Sj5oJk2k','121','Por Um Pecador Qual Eu'),('zJqNjxb-7SI','122','Só um passo'),('IMJRhe3K1EA','123','Seu Sangue Tem Poder'),('VlxR27Iy9LQ','124','Deixa a Luz do Céu Entrar'),('t0ehkXbVZvw','125','A Terna Voz do Salvador'),('1SBM9-TndOU','126','Foge Para o Monte'),('DMdabK3IbAU','127','Vida em Olhar'),('FHqRzJ1Pj0Q','128','Se Tu Buscares a Jesus'),('R3J8A4uVooQ','129','Deixa Entrar o Rei da Glória'),('KeUClZbg8Uk','130','Jesus esta Esperando'),('U1MtpuMnAK8','131','Manso e Suave'),('WLANtS8injM','132','Pra Quem Nada Tem'),('1kM5QluWwqc','133','O Vem, Aflito'),('hXrjWCkDmpY','134','Junto à Cruz'),('f9VL-sdtUHg','135','Vinde às Águas'),('20XieWKvvvA','136','Quero Estar ao Pé da Cruz'),('m2XiTAFMXJ0','137','Pai, Eu Me Achego a Ti'),('NTBQm-5nTZ0','138','Tal Qual Estou'),('9SHy1_R9Rx4','139','Sou de Jesus Agora'),('80eW16boEDg','140','Ao Pé da Cruz de Cristo'),('0xi3zUDft6g','141','Cristo Tocou-me'),('QbgZAOmi0lc','142','Perdão, Poder e Paz'),('Jxr4l1rb47Q','143','Ao Olhar pra Cruz'),('ENC3wRLqSWY','144','Foi na Cruz'),('BAVvAtp5I7M','145','É Jesus O Salvador'),('Cp1MchLAT4Q','146','Eu Não Sou Mais Eu'),('Lw5boxvR22k','147','Jesus Me Transformou'),('gmYPdCt9IlM','148','Jesus Achou-me'),('yi08qQYUizE','149','Pedras'),('H6uJzMKrSF8','150','Ó Jesus, Habita em Mim'),('J-LrXdce3BQ','151','Amor Glorioso'),('PugB4piaHHo','152','A Voz de Jesus'),('Qc_6UoL0Y2g','153','O Que Penso de Meu Mestre'),('E1wkziOywHE','154','Alvo Mais que a Neve'),('RZ7z3wlZ6w0','155','Meu Calice Transborda'),('Tse3sRoZjUY','156','Remido'),('xf46ZtpsWFU','157','Jesus Me Remiu'),('3bsZ_hMpaG8','158','Creio em Milagres'),('OZHToenZk6k','159','Um Novo Nome Lá na Glória'),('UFgPVxywUzk','160','Crescendo em Graça'),('d2TGxq6cUdc','161','Salva-me Também'),('lNnC4Lj998s','162','Sou de Jesus'),('_G5qqB7zbx4','163','Para o Céu Por Jesus Irei'),('6_dlUP46mEQ','164','Meu Nome em Suas Mãos'),('X4VP_cLQCSY','165','Hoje Sou Feliz'),('h7uQpNUh9Cw','166','Caminhando'),('ajWDH9CUcXU','167','Tão Triste Eu Andava'),('tsPbzFTxyD8','168','Eu Achei'),('Dyd6mAe1LoI','169','Salvo em Jesus'),('ZdBnuWtqR0c','170','Oh, Que Belo Hino Deus Me Deu!'),('OvOiXTDTiIk','171','Com Cristo No Meu Coração'),('qY07MGsAkZ0','172','Ando Sempre Alegre'),('1AaW6xXABWM','173','Que Prazer é Ser de Cristo'),('AbkpBk1b3Rc','174','Que Consolo e Paz!'),('7SuzQVHTvb8','175','De Ti Careço, Ó Deus'),('UM42XBG0EoY','176','Nunca Desanimes'),('fwvoO_TPhwY','177','Conduze-me, Meu Mestre'),('WHCMQjeWqVs','178','Deus Cuidara de Ti'),('tA4BbhaEKeA','179','Eu Sei Em Quem Eu Creio'),('WBXKUyPkNqo','180','Nunca te Deixarei'),('Ti-3MEfiTHQ','181','Cuidara de Mim Também'),('ubclOJpcEgc','182','Eu Pertenço ao meu Rei'),('1JIetpF0Ihk','183','Oh, Não Temas, Sou Contigo'),('z3FtUwqdEU4','184','Quero Ter Jesus Comigo'),('RvM8AvWDnSQ','185','Cada Momento'),('Qqp1ZZi1wSw','186','O Mestre, O Mar Se'),('485b67iCENY','187','Refugio em temporal'),('cRUWUT-jwYc','188','Minha Esperança'),('EHbbpkoLJ5U','189','Deus Sabe, Deus Ouve, Deus Vê'),('NxdttzyFf2o','190','Pertenço a Cristo'),('TZnLhvVG68Y','191','Olha com Fé Para Cima'),('HUY6sJkScBQ','192','Brilho Celeste'),('pheGcnEq8p8','193','Sob Suas Asas'),('UabnP6pgbTc','194','Tem Fé em Deus'),('A4izEhw2FLE','195','Minha Fé Bem Segura Está'),('Dsy2ouhHzIs','196','Ao Jesus me Tomar a Mão'),('Xmna0YjSQ-s','197','Sou Feliz com Jesus'),('J0dZy3WKJCc','198','Deus Vos Guarde'),('V6AW8M1Jg-0','199','Ao Passares Pelas Águas'),('V37Xhq3pVj8','200','Nunca me Deixar'),('kUuN3BnJnaI','201','Dia a Dia'),('kQWEGODrfKc','202','Não Ando Só'),('TqplFQwwgGM','203','Abrigo na Rocha'),('llDMZ7vVsQU','204','Meu Divino Protetor'),('x097Y9HQpL4','205','Ergo os Meus Olhos'),('aWL-qItB_uY','206','Fixa Teus Olhos no Mestre'),('t9Pp34pZ1AQ','207','Confiei no Meu Senhor'),('u_D5Tk3qn1Y','208','Confia em Deus'),('ZTX7-BadhSc','209','Todas as Coisas Contribuem'),('3axUf7ybwqA','210','Sempre Confiante'),('vBfU_89IE44','211','Jesus Meu Guia É'),('6NYekrMlTQY','212','Bendita Segurança'),('ILnsDgw5E30','213','Não Me Esqueci de Ti'),('RylJ4GK3r0k','214','Não Há o Que Temer'),('dhYaXaT7SBQ','215','A Única Saída '),('OAjs3XGoNS8','216','Pode Cair o Mundo'),('BCeuEXUiNas','217','Fé dos Nossos Pais'),('yF9207i7eQQ','218','Ouve-nos, Pastor Divino'),('S8Xd30MZcNY','219','Da Igreja o'),('ddnROB-Iagk','220','Fortalece Tua Igreja'),('Gd-0ohdm-PI','221','Somos Igreja'),('ttA_S0UZpCI','222','Somos Um'),('cWZK-r9LP2I','223','Há Um Dever'),('bENSL9Ox2LU','224','Mensagem ao Mundo'),('6VG21tjg0bM','225','Dai-nos Luz'),('DcKQcVY394U','226','Cristo Nos Conclama'),('IfM3j1Zbkh0','227','Se Cristo For Comigo'),('ZzFbbopH8Vo','228','Onde Quer Que Seja'),('oE4qRzuFjk4','229','Trabalho Cristão'),('Sv1Mk5f8Gm4','230','Ao Mundo Vou Contar'),('NWbx4RI3mAg','231','Trabalhar e Orar'),('PNeCs4J9jfE','232','Jesus Precisa de Ti'),('s8nEm0RjysI','233','Brilha Por Cristo em Teu Viver'),('6T8ajgIR4Mk','234','Hoje Ajuda a Alguém'),('6gOhEHoEcGA','235','Somos Teus, Senhor'),('qAu0J5_yhqg','236','Transbordando em Amor'),('fI_xWfXjWcg','237','A Colheita'),('SEEy-WPicdc','238','Oração Pela Missão'),('irEOEYk8ZkI','239','Geração Esperança'),('Rv0F4c4C-Wg','240','Brilhar por Ti'),('tSDeT4aYMlY','241•','Todo Semelhante Meu'),('olcB1p-umdQ','242','Benditos Laços'),('ZHK2rdtAjTs','243','Jesus, Pastor Amado'),('Q1aD3qdatVI','244','O Vem a Igreja Comigo'),('ZrnPn--2-C0','245','Lado a Lado'),('blOjsarznsQ','246','Em Família'),('LCRzBt65wQA','247','Unidos em Cristo'),('zpfmhV1bkS8','248','Encontros'),('RGvKiqTibOc','249','Oh! Que Belos Hinos!'),('AH39bafXKrE','250','A Jesus Seguir eu Quero'),('ZHzaGAfdoCM','251','Meu Jesus Esta Chamando'),('BvKZVC9cK9Q','252','Volto ao Lar'),('7Ci4QNv-pKA','253','Importa Renascer'),('VxOMU2J_ZAI','254','Agora Posso Ver'),('vf3jfoQFP3U','255','As Águas Batismais'),('DEIsgr6rAXU','256','A Ceia do Senhor'),('LSLQ7w4we1M','257','Senhor, Tu nos Convidas'),('VbPvb63MO7E','258','A Última Ceia'),('nWIsUdDHHmc','259','Em Memória de Ti'),('c4JUrBiNjas','260','Em Memória de Mim'),('OOCiWJTMvkI','261','Quem se Dispõe a Ir'),('PEUoGbpsQo4','262','Irei Aonde Jesus Mandar'),('eC_SG8HxQ_4','263','Mãos'),('MGgZCcpZIYE','264','Envio a Ti'),('MTnD-Y7pjZA','265','Faz Me Um Servo'),('Wdz8uN0DPFY','266','No Serviço do Meu Rei'),('qShdC3CEHN0','267','As Searas Maduras'),('maPqiR2yjy0','268','Compensa Servir a Jesus'),('ROWbiKrX-1U','269','Sal da Terra'),('tLhObj3zj-c','270','Vaso de Benção'),('Kr-tDldyFmQ','271','Vaso de Honra'),('c9f7n3Ro6_Y','272','Através de Nós'),('cgNzy67c04E','273','A Escola Sabatina'),('XdXaEhP6LjU','274','O Encontro'),('As-X-j6HRdE','275','Hino dos Aventureiros'),('0v1ihqB0gpI','276','Hino dos Desbravadores'),('r9KpN18SQDg','277','Bem Aventurança'),('sXZgMQKfLfk','278','A Voz de Deus'),('7XEXWM9JX0E','279','A Verdade Brilhará'),('O4pIdHTqSlM','280','O Espírito de Profecia'),('4B2i8A9v4qc','•','Filhos da Promessa'),('64erEGHX6tg','282','Em Sua Presença'),('lXpmeNNeztI','283','Crer e Observar'),('UBzEdvwvAQY','284','Obedecer é Melhor'),('qNqAq54JUxg','285','Eu Amo a Tua Lei'),('179Ih-iPnk0','286','Tua Lei'),('qkiZ-pjlcqs','287','A Lei de Deus'),('ndQK0QjLHlU','288','Fiel a Toda Prova'),('DnJh2Iu9_4Y','289','A Tua Lei'),('EhZFepZ47yY','290','Do Santo Sábado És Senhor'),('rHs4oa1_D9Q','291','Sábado do Meu Senhor'),('_EJR05GlhLQ','292','Sábado'),('V7Qx617dQQU','293','O Sábado Chegou'),('5w3Xrdf5i_0','294','Lembre-se do Sábado'),('5BB1MAN3g1I','295','Sábado Bendito'),('JGnzZ3eY5Xg','296','Bem-vindo o Sábado'),('25cPKkUP8go','297','Dia de Esperança'),('diMJD80zr30','298','Deus Fez o Sábado Para Mim'),('2jlp0c_gOck','299','Dia Santo'),('HZxnyB3lJ-k','300','Tempo de Ser Santo'),('X6AAFwBkfEM','301','Toma, Ó Deus, Meu Coração'),('bzXmFmM4CTM','302','Tudo Entregarei'),('FlkCgkhQ5CI','303','Minha Entrega'),('wAW5aQOksIg','304','Que Te Darei, Meu Mestre'),('nYohbTMsyfo','305','Sobre o Altar'),('hwSVlpmYTWM','306','Eis-Nos Prontos'),('ai_AQ1CwA2A','307','Conta as Bênçãos'),('lCz31f0wvvI','308','Faze Como Daniel'),('J-JW7ALhif8','309','Em Tuas Mãos'),('vylQz82zkKE','310','Entrega'),('CVC5EOg8pCM','311','Inteiramente Fiel'),('g9B7YsUgUNM','312','Nas Tuas Mãos'),('pI6-8Jet0YU','313','Tudo Para Deus'),('TlArU2RQ2YY','314','Se Ele Não For o Primeiro'),('jBfNNgtMVUA','315','A Cristo Eu Amo'),('5RRcpOBlXeA','316','Achei Um Grande Amigo'),('_8yIJOzF0rw','317','Amigo Mui Precioso'),('hrtXSRc5Ces','318','Cantarei de Meu Jesus'),('s99navSSdWM','319','Cristo é Tudo Para Mim'),('Wl9Xe0a1WRI','320','Eu Te Amo, Meu Mestre'),('4OR2dSNYuXk','321','Jesus é Melhor'),('WmkAm7Eog80','322','Jesus Me Guia'),('ti8OJHZqvUs','323','Há Um Amigo'),('VyKaiFCoIXA','324','Jesus Teu Nome Satisfaz'),('v76WHJ132HI','325','Ao Bondoso Deus'),('CsPuhdOn8ko','326','Manancial de Toda Bênção'),('1ibGBe9svTw','327','Nao Há Amigo Igual A Cristo'),('AW5sH1Z4XYs','328','Meu Deus e Eu'),('0SoM9vhYIwc','329','Não Ha Nome Mais Amável'),('mQblvleLL40','330','O Melhor Amigo'),('ol-pFzHphIQ','331','Nome Precioso'),('1dA0FMuuftU','332','Tudo És Pra Mim'),('MeeNmIEjLVs','333','Oh! Que Amigo em Cristo Temos'),('JCYBqVqtKGQ','334','Oh, Eu Amo a Cristo!'),('WOpYIxGYvK0','335','Precioso e Jesus Para Mim'),('2QuelXhYD8w','336','Salmo dos Salmos'),('6qSurkv7NNM','337','Amor Nos Faz Contentes'),('SuB1C8QF8RM','338','Deus Não Se Cansa de Amar'),('9VR9YnK2D04','339','Eu Sou Um Pobre Peregrino'),('s0qMxW-q6BY','340','Sou Forasteiro Aqui'),('aG7uBv3mnsg','341','Magoas'),('6nJvSdQk0es','342','Eu Não Te Deixarei'),('D60qJG7tseU','343','Meu Refugio Está no Monte'),('y_tr7ucTMHY','344','Confiarei'),('Xm1zBfeI-RY','345','Novo Dia Chegara'),('K0dtLwEBX3Q','346','Como Agradecer'),('yRp9mr9TgcA','347','Obrigado'),('On65YomkD4g','348','Graças'),('cnHNKIuzMVk','349','Gratidão'),('rYV_vBMei_A','350','Senhor Jesus, Muito Obrigado'),('Qo1T9ZuepmY','351','Jesus, Muito Obrigado'),('EeFroE51w8Y','352','Luz Bendita, Luz Gloriosa'),('QTuACjQAEqQ','353','É Prazer Servir A Cristo'),('pb4tGtxy9yE','354','Paz'),('rL9g1Vr1jWs','355','Sempre Alegre'),('veBLWvLwvQ8','356','Tenho Um Hino Em Meu Coração'),('Z6as5nyLYa8','357','Bendita Hora de Oração'),('PJlt94VhU_M','358','Só Com Teu Deus'),('-p9a4BxDUdE','359','Lugar de Paz'),('lUaHAM1HZdQ','360','Deus ouve, Deus Responde'),('DCRsK6diXAE','361','Deus Nos Ouvirá'),('7M1qS8d9a8E','362','O Melhor Lugar do Mundo'),('xp-d4CRRylI','363','O Jardim de Oração'),('D7NLGP2-GLc','364','Que Tempo Já Faz'),('p9DHQ5v2LgE','365','Santa Hora de Oração'),('SnSVCN7Vuzk','366','No Jardim'),('FkaoRqCR1Qc','367','Falar Com Deus'),('fk-hDs89Z8I','368','Ao Teu Lado Quero Andar'),('9eU0EyNyVNk','369','Seguindo a Jesus'),('WW-CwdrG7Zo','370','Bem Junto a Cristo'),('9eUp7OZe4NA','371','Cada Vez Mais Puro'),('20rnfeAocEo','372','Abre, Senhor, Os Olhos Meus'),('2Os83OCiqo4','373','Deixa-me Contigo Andar'),('dtSsQXZeSqQ','374','Contigo, O Deus, Almejo Andar'),('EyOkqnp-boI','375','Canção da Vida'),('iHocK6sFQG4','376','Cristo, Da-nos Tua Paz'),('-pYZX4k5weo','377','Mais de Cristo'),('8S4HBQ8vSKY','378','Mais Perto Quero Estar'),('_g7rOev2ybA','379','Fala Á Minh alma'),('hfvTjhIT-DQ','380','Sonda-me, Ó Deus'),('yEIIRYcw480','381','Teu Divinal Amor'),('zdqCReoBjNA','382','Minha Oração'),('_Y7x4rwunTM','383','Em Mim Vem Habitar'),('kcyghSL8dwc','384','O Teu Querer'),('wScrNQt-IhU','385','Música Celeste'),('Z4MGD-mnSHo','386','Abre Os Olhos Meus'),('MSXFfVqU2Rk','387','Jesus, Não Eu'),('-cigdfK-ktk','388','Se Minha Vida'),('3JfsZZoCK-I','389','Minha Cruz'),('6r_JxU0owC8','390','Pegadas'),('4CfXjMoe2fA','391','Queremos Dar Louvor'),('WZ0HCgbQ01Y','392','Ser Igual a Cristo'),('rzb8Y3fZ7Uw','393','Vem Comigo Habitar'),('k6Am9NI-3q0','394','De Hoje Em Diante'),('8N1zAktFoA0','395','Vem Brilhar'),('DNfjGf8qDWo','396','Vem Brilhar Em Mim'),('AFnJNK48Iv0','397','Eu Só Quero Estar Onde Estás'),('VHhO_p0Gzyo','398','Pai, Vive Em Mim'),('9tzUlynVPgA','399','O Céu e Jesus'),('Pl6dhdohExc','400','Mais semelhante A Jesus'),('Dg2XiFULn3Q','401','Quero Ter Jesus'),('dwzZKr4SKHY','402','Perto de Jesus'),('4ol-obmlzBU','403','Renova-me'),('Av4LvfAjdXg','404','Sempre de Jesus'),('SmRxjG7xW58','405','Vem, ó Senhor'),('fLiSJdTA5Vk','406','Pés na Terra, Olhos no Céu'),('mekkPPhTwUc','407','O Poder do Amor'),('UiDXm0Y1CfI','408','Abençoa Este Lar'),('qUFlef2oVRM','409','Amor no Lar'),('rR3jNanhKwk','410','Vem Entre Nós Morar'),('rioiyg_5IMs','411','Bem de Manhã'),('GU587FZB_gk','412','Bem Cedinho Sempre Busco'),('7ApmhZKVsXM','413','Vigiar e Orar'),('L-F7Sp7UcOk','414','Desponta o Sol'),('HkgZhA4sbic','415','Luzes da Aurora'),('BRdz-QVlbKI','416','Surge a Alvorada'),('RGeooJu7TUw','417','Perto do Lar'),('iB5SSn4k-WM','418','Finda o Dia'),('dHXwemIP94U','419','Prece Vespertina'),('Ty7iOct_PI8','420','Hora Feliz do Pôr do Sol'),('5EQpR-6uEcU','421','Oração Para Uma Criança'),('W54JbWI39UQ','422','Presente de Valor'),('kyG5DTHJRn4','423','Não os Impeçais'),('a0liyVeKGDg','424','Canção Para Meu Bebê'),('9xNmt3L6D5U','425','Ouço o Clamor do Bom Pastor'),('70R4mbhB-y4','426','Cristo Ama as Criancinhas'),('LCkv535v4Ok','427','Venham, Crianças'),('pJtick2YMPs','428','Joias Preciosas'),('xXaDj2PGEDs','429','Quando o Livro Aberto For'),('37DO5uB7IOQ','430','O Juízo'),('DmKmlupo91M','431','Vem o Grande Dia'),('SFDn0TVl730','432','Sangue Precioso de Cristo'),('yuVlG81PVDo','433','Sumo Sacerdote'),('M7kip2r_8Tk','434','Santuário'),('wJQ3LvUaMds','435','Acima do Céu'),('DHokCgyDV-0','436','E Me Fareis Um Santuário'),('cmb52hp8Ud4','437','Chegou a Hora'),('AQMm1y35sXM','438','Quando For Chamado'),('aMEZCGynCn0','439','Quando Deus Fizer Chamada'),('VuxpSoj5eGA','440','Breve Jesus Voltará'),('U4ym16En8xc','441','Vencendo Vem Jesus'),('CuF-oo0p7Es','442','Jesus Voltará'),('qg-7IQvW8Lg','443','Cristo Virá Outra Vez'),('VjksTL6-lQs','444','Oh! Que Esperança!'),('OMtRXZcDzbo','445','O Rei Já Perto Está'),('lEvc-Vmcyyc','446','Cristo Vem'),('3_kr1ba7voQ','447','Vigiai, Cristãos'),('wHq55SJU4ZE','448','Nós o Veremos'),('9g089j2I4Fs','449','Quando o Rei Vier'),('mMZfaASuBbI','450','Guarda, Vê Se Muito Falta'),('SRcgXW3fg7I','451','Grande Alegria'),('e4FoHTZzNrQ','452','Cristo Não Tarda Voltar'),('EOn959r8A4k','453','Anunciai Pelas Montanhas'),('16KaC4dDaeE','454','A Manhã Gloriosa'),('F6QAsBXj284','455','Verei Jesus'),('PE-O2EmOUkk','456','Bela Manhã'),('mODTk_0iNWE','457','Jesus Vem Logo'),('wH6SLP6wEMY','458','Não Tardará'),('00FyQOvinS4','459','Cada Dia Mais Perto'),('v4FahDb_EuM','460','Decidi Olhar Para o Amanhã'),('BkwPPB2tjOI','461','Jesus Precisa Voltar'),('7GMgx-h-vCw','462','Será de Manhã'),('2Ms2z4tj1EU','463','Espero a Manhã Radiosa'),('c9JfsHZ5Ark','464','Não Desistir'),('uZ2pD2W0DXM','465','O Dia Não Sei'),('2wem-qNP3yg','466','Um Pouco Mais'),('PHRLFJoaIXQ','467','Até Quando'),('pmHkUUEsbPM','468','Quase no Lar'),('3AFtQj-ZbXU','469','Enquanto Ele Não Vem'),('GAEJzMMk2WQ','470','Rocha Eterna'),('0doKHQReQH4','471','Porque Ele Vive'),('TmkQmQ04aQk','472','Ó Alegrai-vos, Filhos de Sião'),('3eJVVZc_Dss','473','Morte e Ressurreição'),('JgMloBodNr0','474','Eu Espero'),('7Kszrnmsozg','475','Se Não Houver Amanhã'),('varJ50douf4','476','Hei de Ver'),('4zeJehRh790','477','Face a Face'),('49eMmsTDmgQ','478','Sim, Glória Haverá no Final'),('1p34cF7xJo0','479','Herdeiro do Reino'),('COAEdwOHpn0','480','O Eterno Lar'),('x7wEQ7q-_xM','481','No Celeste Lar Glorioso'),('kn0zFi5orMU','482','Junto ao Rio Jordão'),('US64k5we5s0','483','Vamos Ver Jesus Ali'),('e6n44rxIuME','484','Além do Céu Azul'),('_o3lA-GuZdI','485','Estrelas Terei'),('EmNa2mC1REU','486','Até Então'),('szamXjWAEso','487','Primeiro Quero Ver Meu Salvador'),('_xNrYww0OBY','488','Eu Vou Para o Céu'),('jAxb3hDo4x8','489','Cristo Foi Preparar Um Lugar'),('8A0dsuOgLyg','490','Tão Grato Me é Lembrar'),('Co7KPOxg-5k','491','Há Um Rio Cristalino'),('V4Ve-KPG6mQ','492','Lar Feliz'),('ddjCguUcCU4','493','Almejo o Lar'),('ILf6xg2sqhQ','494','Doce Lar'),('yqvOpAcE_EE','495','Glória Perene'),('iAAbWePVmEo','496','Além do Rio'),('0d0q6B-BuUA','497','Inda é Longe Canaã'),('OV4K75Rb-OI','498','Lindo País'),('FZPXeVnQqYs','499','Mansão Sobre o Monte'),('Ua3zsO9-2X8','500','Oh! Nunca Separar'),('FlHMYuWZK0g','501','Para Além das Montanhas'),('RduBykShWsE','502','Saudade'),('uGY2V-go_x4','503','Vale do Éden, Formoso'),('JKzMvlzTQIs','504','Mais Perto Deste Lar'),('D_tT_5jcnU0','505','Muito Além do Sol'),('6X1wkIN-Cis','506','Eu Não Preciso Mais Sonhar'),('kaM0Z4YIuTo','507','Jamais Se Diz Adeus Ali'),('19pEqRVMq-I','508','Cristo Fez Tudo Muito Bom'),('MVST2oE5nBE','509','A Criação'),('X8hHMFhz2Pc','510','Aquarela do Senhor'),('-3419VrV8Vk','511','Eu Sou Uma Obra de Arte'),('geb2ugQWBis','512','Cada Dia'),('elh4QZ-Fij4','513','Ver Jesus Em Você'),('2w8AGdqCM0s','514','Fruto da Criação'),('wXIENxBI5mA','515','Sabe Quantas Estrelinhas'),('HjTn64jPYYQ','516','Grande Artista'),('mg2bP7sg-QM','517','Meu Deus é Tão Grande'),('444SonCfdPE','518','O Dia Em Que Deus Criou O Mundo'),('ojukNBX0xRs','519','O Amigo Do Coração'),('GqqgbpjsANo','520','Cristo é o Número 1'),('97vtuS9WXZc','521','O Espírito Santo'),('cjw0Xd-BcIg','522','Eu Quero Esse Poder'),('7lR9ngghlhs','523','Sim, Cristo Me Ama'),('qQz-1FXuAmk','524','Jesus Me Quer Bem'),('fm8Jh_12bGs','525','Deus Sempre Me Ama'),('yFMFvbRS0Mw','526','Quem Orou Três Vezes'),('h2_xAmV7XqA','527','Aonde Quer Que Eu Vá'),('vh79qX7CK0c','528','Quando Estou Com Medo'),('Kzc35-5a-W0','529','Se Deus é Por Nós'),('z_ULuJComU8','530','Lâmpada Para Os Meus Pés'),('Rb5zqe-xg7s','531','A Bíblia'),('hWX79JHd_Sk','532','Louvem A Jesus'),('g9Y0GTrC8Yk','533','Louvai-o'),('be6uoFLAuCE','534','Eu Digo Não'),('wSoey4BKe1Y','535','Santa Lei De Deus'),('YHfVrIMkgYg','536','São Dez Os Mandamentos'),('QSFP2EvOtk8','537','Sábado, O Dia Mais Feliz'),('kRjHUS_Ix4s','538','Dia Especial'),('r3pH5zs7aeY','539','Deus Mandou O Sol Brilhar'),('EfwQIFIdlWQ','540','Quero Bem Alegre Obedecer'),('OTYzVyXbdKw','541','Cria Em Mim, ó Deus'),('_6a8tqjCZ3w','542','Vem, Ó Jesus'),('_9TmgYS-BsU','543','É Bom Ter Jesus no Coração'),('NLwqMcTD8lU','544','Entrega Teu Caminho ao Senhor'),('I1D2ayYAKL0','545','Sou Feliz'),('u9tMVmwsn2w','546','Quero Servir A Jesus'),('iTfgnKEIbXM','547','Eu Sei Porque Nasci'),('A6KuXacY6MU','548','O Milagre da Vida'),('rQQEt6UslBI','549','Eu Sou Importante'),('Qt4e8OzK9k0','550','Deus Tem Um Plano Pra Mim'),('Wn5nj616hNI','551','Minha Pequenina Luz'),('uMw9alCBJGg','552','Meus Talentos Vou Usar'),('SjB4E02wpRM','553','Minha Vida é Uma Viagem'),('Xlva_BqXBgk','554','Sou Aventureiro'),('OesQovAZ38Y','555','Um Lugar Feliz é o Céu'),('TqM_jI_P2pI','556','Lá No Céu'),('G2fo6bPBLxU','557','O Céu'),('9w4e6ncQG6U','558','O Senhor Esta Em Seu Templo'),('pzA0pwlEP_s','559','Sinto a Presença do Senhor'),('tDUVFIYYClg','560','A Glória da Tua Presença'),('7PCyZUfniNI','561','Santo Somente é o Senhor'),('RIcHuu1eM00','562','Santo És, Senhor'),('KstVYG1eZLo','563','Sua Glória'),('WcbKoNxbg6E','564','Vamos Adorar'),('5fH_OdoULJ8','565','Adoração'),('gHgPE5cBZsk','566','Oh! Adorai'),('-O3V4eXegCA','567','Intróito'),('c5rmDJAwbmo','568','Invocação'),('h3Pn338Jbkc','569','Nosso Maravilhoso Deus'),('DU-gqqyFXhQ','570','Maravilhoso Deus'),('9MI2kh8VZFM','571','Tu És Digno'),('6XKBBbizSwU','572','Ofertório'),('IBj_6ya7xas','573','Venho Te Adorar'),('M4e58v4OYAk','574','Teu é Nosso Coração'),('Pl5UNPjWuQc','575','Entrego a Ti'),('Mo9jmUk1geA','576','Humildade e Gratidão'),('qNSke7mqfpU','577','Quero Me Entregar'),('x7PXEUXWd_c','578','Humilde Oração'),('ruwejYHFrso','579','Ao Orarmos, Senhor'),('DM6XV-Xa-Q8','580','Oração de Súplica'),('XlKHkTRrxdY','581','Ouve Nos, Senhor'),('DdIqNGYts1M','582','Pai, Venho a Ti'),('mCDRltoQyRU','583','Entregamos em Tuas Mãos'),('x21h3AlUjTk','584','Prece de Gratidão'),('lBRMAtNr-F8','585','Vem, Espírito Santo'),('nw9MZZ4yXhg','586','Venham Todos'),('0Lps7KHmebA','587a','Chegou a Hora de Adorar ao Senhor-A'),('GP8qu83lWls','587b','Chegou a Hora de Adorar ao Senhor-B'),('YfhkVkDCUzA','588','Deixai Vir a Mim os Pequeninos'),('KC11ybPhXuk','589','Fala, Senhor'),('TwLx_8N9Rh8','590','Queremos Te Pedir'),('aJ39JaQeOa4','591','Estejas Conosco'),('fiUau4pkV9Q','592','Graça, Amor e Comunhão'),('qz4_paWtw8g','593','Amigo, Não Saia Sem Cristo'),('fluE6tBTu6M','594','Bênção Final'),('sRZHnhpdE10','595','A Benção'),('e9GVzfcn-n8','596','Vem, Senhor'),('HNp73M6vd5o','597','Santo Lugar'),('jsAz9HOKXjU','598','Que Deus Te Abençoe'),('hbDJN08OQ6I','599','Que o Senhor Nos Abençoe!'),('hER6dGJKpqY','600','Em Paz eu Vou')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "hymns"`);
  }
}