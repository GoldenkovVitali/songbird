const mainObject = [
  [
    {
      id: 1,
      name: 'Тибетский улар',
      species: 'Tetraogallus tibetanus',
      description:
              'Голова, шея и участок спины у шеи темно-серые с охристым налётом. Спина покрыта густым чёрным крапом. Брюхо покрыто полосами чёрного и белого цветов, черные полосы уже белых. зоб и грудь беловатого оттенка.  Самка отличается от самца рыжеватым налетом и темными крапинами на голове и шее.',
      image: 'https://live.staticflickr.com/65535/48445413157_23e0355fbb_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC176140-Tibetan%20Snowcock%201%20130610.mp3',
    },
    {
      id: 2,
      name: 'Снежная куропатка',
      species: 'Lerwa lerwa',
      description:
              'У птиц короткие округлые крылья и сильный клюв. У самцов на ногах шпора. Оперение верхней части тела самца и самки, а также головы и шеи полосами чёрно-белого цвета. Нижняя часть тела каштанового цвета. Клюв и ноги кораллового цвета.',
      image: 'https://live.staticflickr.com/7893/47398616552_9a918e0b21_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC266751-Snow%20Partridge1BL2015.mp3',

    },
    {
      id: 3,
      name: 'Жемчужный турач',
      species: 'Francolinus pintadeanus pintadeanus',
      description:
              'Длина тела птицы в среднем составляет 30—34 см, вес — 280—400 г. Самки немного меньше самцов. Жемчужные турачи обитают в Камбодже, Китае, Индии, Лаосе, Мьянме, на Филиппинах, в Таиланде и Вьетнаме. Они интродуцированы на Маврикий, Филиппины, Мадагаскар, в США, Чили и Аргентину[4]. Обитают в субтропических и тропических лесах.',
      image: 'https://live.staticflickr.com/1631/26735662096_e8b5abcabf_h.jpg',
      audio:
              'https://www.xeno-canto.org/sounds/uploaded/DYEJEXGTVP/XC487498-01199%20%E4%B8%AD%E5%8D%8E%E9%B9%A7%E9%B8%AA%20%E6%8C%87%E5%90%8D%E4%BA%9A%E7%A7%8D%20m%20%E6%B7%B1%E5%9C%B3%20%E5%91%A8%E5%93%B2.mp3',
    },
    {
      id: 4,
      name: 'Итагин',
      species: 'Ithaginis cruentus berezowskii',
      description:
              'Самец кровавого фазана достигает длины от 44 до 48 см. Самки несколько меньше и достигают длины от 40 до 42 см. Масса — от 410 до 620 г. Оперение очень мягкое, у птиц обоего пола также имеется хохол, который у самки немного короче. Хвост относительно короткий для фазанов, ступенчатый, состоящий из 14 перьев. Клюв короткий и сильно согнут вниз. Клюв чёрный с красным основанием.',
      image: 'https://live.staticflickr.com/903/26935101897_7642dc11b4_b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC175919-Blood%20Pheasant%202%20130612.mp3',

    },
    {
      id: 5,
      name: 'Немой перепел',
      species: 'Coturnix japonica',
      description:
              'Немой перепел, или японский перепел[1] (лат. Coturnix japonica); некоторыми считается подвидом обыкновенного перепела — лат. Coturnix coturnix japonica), — птица подсемейства куропатковых отряда курообразных. Одомашнен человеком и разводится ради мяса и яиц; используется также как модельный организм в научно-исследовательских (лабораторных) целях.',
      image: 'https://live.staticflickr.com/65535/49384418337_c05193e6b6_k.jpg',
      audio:
              'https://www.xeno-canto.org/sounds/uploaded/YNOAMCSSHX/XC448524-%20180419%20%E5%8C%97%E5%85%AB%E6%BB%A7%20%E4%BD%8E%E7%9F%AE%E7%A8%80%E7%96%8F%E8%8A%A6%E8%8B%87%E5%9C%B0SHADOW_0162S12.mp3',

    },
    {
      id: 6,
      name: 'Глазчатый фазан',
      species: 'Tragopan temminckii',
      description:
              'Глазчатый трагопан длиной 60 см — это коренастая птица с коротким хвостом. У самца красное оперение с серыми и чёрно-белыми пятнами. Беспёрое, голубое лицо обрамлено чёрным цветом. Хохолок, шея и грудь оранжевые. У свисающих подобных лацканам мешков гортани узор состоит из оттенков синего и контрастных красных пятен. От похожего трагопана-сатира он отличается, прежде всего, более светлым синим цветом лица и красной верхней стороной. У самки коричневое оперение с белыми пятнами, очень похожа на самок трагопана-сатира.',
      image: 'https://live.staticflickr.com/5569/14739801336_33a0ed4369_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC265943-Temminck%27s%20Tragopan2FP2015.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Синица',
      species: 'Parus major',
      description:
              'Распространённая птица из семейства синицевых, отряда воробьинообразных. Обитает на всей территории Европы, Ближнего Востока, Центральной и Северной Азии, в некоторых районах Северной Африки. Синица выделяется чёрной головой и шеей, бросающимися в глаза белыми щеками, оливковым верхом и жёлтым низом, с некоторыми вариациями среди многочисленных подвидов. Летом питается преимущественно мелкими насекомыми и другими беспозвоночными. Зимой употребляет в пищу более широкий спектр. ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Parus_major_m.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC416412-180429_04_11.30h_fluiter_belarus_.mp3',

    },
    {
      id: 2,
      name: 'Рябчик',
      species: 'Tetrastes bonasia',
      description:
              'Длина взрослого рябчика с хвостом составляет от 35 до 37 см, размах крыльев от 48 до 54 см. Масса самцов от 327 до 580 г, для самочек от 305 до 560 г. Масса птиц изменяется в зависимости от времени года, максимальных значений она достигает в ноябре-декабре. В течение зимы рябчики теряют вес и весной становятся гораздо меньше по размерам. Голова у рябчика маленькая, клюв короткий, изогнутый, сильный, длиной около 1 см.',
      image: 'https://live.staticflickr.com/1771/43782490572_0832d7bf7b_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234610-Default%20Project.mp3',
    },
    {
      id: 3,
      name: 'Перепел',
      species: 'Coturnix coturnix',
      description:
              'Длина тела взрослой перепелки составляет от 16 до 20 см, масса находится в пределах  80 – 145 г. Оперение охристое, голова, спинка, надхвостье и хвост украшены бурыми поперечными полосами и пятнами, на глазах видна рыжая полоса. Самец отличается тёмно-рыжими щеками и зобом. Горло и область подбородка у него черного цвета. У самочки подбородок и горло охристое, а на животике и боках видны темные пестрины.',
      image: 'https://live.staticflickr.com/65535/48469283026_e11c0e6691_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234682-Default%20Project.mp3',
    },
    {
      id: 4,
      name: 'Свиязь',
      species: 'Mareca penelope',
      description:
              'Это одна из самых крупных неясытей. Её длина достигает 70 см, размах крыльев около 115 см, длина крыла примерно 35–40 см, хвоста 30 см. Главный отличительный признак вида – длинный, клиновидный, с темными полосами хвост: когда сова сидит на дереве, хвост далеко выступает из-под сложенных крыльев. Общая окраска спинной стороны беловато-охристая с бурым продольным рисунком и слабыми поперечными отметинами на больших перьях.',
      image: 'https://quiz.natureid.no/bird/db_media/eBook/507309d70cf72a5a3f7b17593d5697ae0602bc4f.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC484470-2018-07-26%20Heradsvotn%20-%20Kalbaldur%20180726%20Canard%20siffleur%20femelle.mp3',
    },
    {
      id: 5,
      name: 'Тетерев',
      species: 'Lyrurus tetrix',
      description:
              'Тетерев – достаточно крупная птица с маленькой головой и коротким клювом. Самцы по размерам больше, чем самки, длина их тела от 49 до 58 см, масса находится в пределах 1-1,4 кг, а самки в длину достигают от 40 до 45 см, а их вес составляет 0,7-1 кг',
      image: 'https://live.staticflickr.com/7479/15878882580_db9aa701fb_k.jpg',
      audio: 'https://www.xeno-canto.org/476061/download',

    },
    {
      id: 6,
      name: 'Чёрный стриж',
      species: 'Apus apus',
      description:
              'Небольшая  птица рода стрижей семейства стрижины. Чёрный стриж достигает в длину 18 см, размах крыльев — 44 см, длина крыла — 17 см и хвоста — 8 см. Хвост вильчатый, оперение тёмно-бурого цвета с зеленоватым металлическим отливом, по форме стриж похож на ласточку. Подбородок и горло украшены округленным белым пятном; глаза тёмно-бурые, клюв чёрный, лапки — светло-бурые. Оперение самцов и самок не отличается, но птенцы немного светлее взрослых стрижей, а их перья имеют грязно-белые каёмки на концах.',
      image: 'https://go29.ru/wp-content/uploads/2020/02/pochemu-lyudi-nahodyat-budto-skleennyh-chernyh-chizhej2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VHGHWFPCPT/XC575177-Martinet_noir.mp3',
    },
  ],


  [
    {
      id: 1,
      name: 'Глазчатая курица',
      species: 'Leipoa ocellata',
      description:
              'Глазчатая курица длиной примерно 60 см. Самец весит 2 кг, самка — от 1,5 до 2 кг. У птиц сильные ноги и короткий, согнутый клюв. Оперение на голове и шее от коричневого до голубовато-серого. Верхняя часть тела и крылья имеют коричневые и черноватые полосы. Цвет брюха грязно-белый.',
      image: 'https://live.staticflickr.com/65535/47694852182_b300183223_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC407665-Leipoa_ocellata-FL%20Hattah%20NP%2020Oct15%208.04am%20LS117980a.mp3',
    },
    {
      id: 2,
      name: 'Эму',
      species: 'Dromaius novaehollandiae',
      description:
              'Эму (лат. Dromaius novaehollandiae) — птица отряда казуарообразных, крупнейшая австралийская птица. Это вторая по величине птица после страуса. Ранее эму относили к страусообразным (классификация пересмотрена в 1980-е годы). Эму распространён на большей части материка Австралии, хотя избегает густонаселённых районов, густых лесов и засушливых зон.',
      image: 'https://www.naturepl.com/cache/pcache2/01508621.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC287026-emu-drumming-bowra1.mp3',
    },
    {
      id: 3,
      name: 'Полулапчатый гусь',
      species: 'Anseranas semipalmata',
      description:
              'Полулапчатый гусь - единственный вид семейства Anseranatidae отряда гусеобразных птиц. Иногда его классифицируют как отдельный род в семействе утиных (Anatidae). Однако не менее вероятно, что полулапчатый гусь более близко связан с паламедеями (Anhimidae), так как разделяет с ними некоторые свойства. К ним относятся сравнительно длинные лапы, длинная шея и сильно редуцированные плавательные перепонки. Самцы достигают величины 90 см — самки, как правило, несколько мельче.',
      image: 'https://live.staticflickr.com/8156/7465565964_1190f65056_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BFZLBCXHWQ/XC503277-skatg%C3%A5s.mp3',
    },
    {
      id: 4,
      name: 'Чёрный лебедь',
      species: 'Cygnus atratus',
      description:
              'Взрослые особи достигают роста от 110 до 140 см и являются немного меньшими, чем лебедь-шипун, а их вес составляет от 5 до 8 кг. Шея чёрного лебедя наиболее длинная среди лебедей, благодаря 32 шейным позвонкам он может охотиться под водой в более глубоких водоёмах. В полёте шея составляет больше половины всей длины птицы. Оперение и лапы чёрного цвета, белыми являются лишь отдельные перья, спрятанные в глубине. На краях крыльев у чёрных лебедей кудрявые перья. Клюв светящегося красного цвета и украшен белым кольцом у края. Цвет глаз варьирует между оранжевым и светло-коричневым.',
      image: 'https://live.staticflickr.com/633/23715885321_3f29808094_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/FPDBIILGCX/XC495755-MIXPRE-1275_Black%20Swan_20190811_Winspears.mp3',
    },
    {
      id: 5,
      name: 'Кустарниковый большеног',
      species: 'Alectura lathami lathami',
      description:
              'Кустарниковый большеног длиной от 60 до 75 см, размах крыльев 85 см. Это самый крупный вид большеногов в Австралии. Окраска оперения в основном чёрная, нижняя часть тела с крапинами белого цвета. Ноги длинные. Красная голова бесперая. Жёлтая или сине-серая гортань набухает у самца в брачный период.',
      image: 'https://live.staticflickr.com/65535/48254123137_0b3c0c5fa7_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OHGEFOWNMD/XC517533-Brushturkey%2006_42_07.mp3',
    },
    {
      id: 6,
      name: 'Шлемоносный казуар',
      species: 'Casuarius casuarius',
      description:
              'Шлемоносный казуар достигает высоты 1,5 м и веса около 80 кг. На голове казуар имеет вырост, называемый «шлемом», который у самцов крупнее, чем у самок. Массивные трёхпалые ноги этой новогвинейской птицы вооружены большими когтями, особенно длинным является коготь внутреннего (первого) пальца. Этим оружием казуар способен наносить серьёзные раны, так как, защищаясь, наносит мощные удары ногами. Казуары быстро бегают и хорошо прыгают.',
      image: 'https://live.staticflickr.com/4183/34037884620_19bf190a83_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC132934-cassowary.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Калита',
      species: 'Psittacus monachus',
      description:
              'Птица семейства попугаевых. Длина тела 27—30 см, крыла 14—15 см; вес 100 г. Окраска оперения зелёная, грудь бледно-зеленовато-серая с поперечными полосами зелёного цвета. Шея с нижней стороны и передняя часть головы серого цвета, крылья тёмно-бурые, маховые перья синие. Подхвостье желтовато-зелёное. Клюв толстый, соломенного цвета и сильно загнутый. Радужка коричневая. Хвост ступенчатой формы, длиннее крыла, ноги короткие. ',
      image: 'data:image/jpeg;base64,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',
      audio: 'https://dibird.com/media/xeno/369811.mp3',
    },
    {
      id: 2,
      name: 'Калифорнийский перепел',
      species: 'Callipepla californica',
      description:
              'Калифорнийский  перепел характеризуется длиной от 23 до 25 см. Самец и самка окрашены одинаково, оперение самок, тем не менее, немного бледнее, у самца дополнительно присутствует чёрный надгортанник и рисунок лица. Верхняя часть тела и голова серо-бурого цвета. Перья хохла с белыми вершинами. Шея и грудь голубовато-серые. На боковых сторонах коричневатого цвета имеются тонкие, белые продольные полосы. Брюхо и подхвостье жёлто-коричневатые с чёрным чешуйчатым рисунком.',
      image: 'https://live.staticflickr.com/65535/48400199321_3d59cd5ac4_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XEIROMUDEB/XC159657-IAC%202012-09-22%20T09-46-30.mp3',
    },
    {
      id: 3,
      name: 'Белошейная гагара',
      species: 'Gavia pacifica',
      description:
              'В среднем несколько меньше чернозобой гагары, хотя размеры частично перекрываются. Длина крыла 291—302 мм. Взрослые самец и самка летом похожи на чернозобую гагару в летнем наряде, но отличаются светлой, беловатой сверху шеей и затылком. Чёрное пятно на горле и нижней стороне шеи имеет не зелёный или фиолетовый, а пурпурный оттенок. Зимой отличается только по более короткому и более тонкому клюву и более толстой шее.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/PacificLoon24.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC141729-Pacific%20Loon2013-6-12-1.mp3',
    },
    {
      id: 4,
      name: 'Голубокрылый чирок',
      species: 'Spatula discors',
      description:
              'Длина голубокрылого чирка — 40 см, размах крыльев — около 57 см, вес — около 400 г. У него происходит 2 линьки за год и третья линька на первом году жизни. У взрослого самца серовато-голубая голова с белым серпом на лице, светло-коричневое тело с белым пятном сзади и черный хвост. Взрослая самка пестро-коричневая с беловатой областью у основания носа. У обоих полов голубое зеркало и желтые лапы. В полете они особенно стремительно взмахивают крыльями.',
      image: 'https://live.staticflickr.com/7877/46411970304_5e0080e5a6_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WCNFEBIHCJ/XC139897-BWTE001b.mp3',

    },
    {
      id: 5,
      name: 'Американская выпь',
      species: 'Botaurus lentiginosus',
      description:
              'Американская выпь является средней по размеру цаплей с толстым телом и шеей и короткими ногами. Верхняя часть тела коричневого окраса, с мелкими чёрными пятнами, нижняя — чёрно-белая. Шея белого цвета. От выпи европейской её отличают размер и толщина когтей на ногах.',
      image: 'https://live.staticflickr.com/8266/29079238213_2595b35af1_k.jpg',
      audio:
              'https://www.xeno-canto.org/sounds/uploaded/WOKAPEXFUA/XC419704-2018-06-08%20-%20British%20Columbia%20-%20Prince%20George%20-%20MIXPRE-070%20-%20Giscome%20American%20Bittern.mp3',
    },
    {
      id: 6,
      name: 'Большая голубая цапля',
      species: 'Ardea herodias',
      description:
              'Большая голубая цапля является самой крупной цаплей Северной Америки, её полная длина составляет 97—137 см, а вес 2,1—2,5 кг. Средний размах крыльев — 213 см. Крылья длинные, закруглённые. Клюв длинный, на конце имеет коническую форму, окрашен в светло-жёлтый цвет. Хвост короткий. Ноги длинные, зелёные. Шея также длинная. Оперение в верхней части тела серое, на шее имеются белые, чёрные и ржаво-коричневые полосы. У самцов на затылке имеется густой хохолок чёрных перьев. Также самцы несколько крупнее самок.',
      image: 'data:image/jpeg;base64,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',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XEIROMUDEB/XC210695-IAC266%20gbhe.MP3',
    },
  ],
  [
    {
      id: 1,
      name: 'Агами',
      species: 'Agamia agami',
      description:
              'Доколоводная птица из семейства цаплевых. Агами распространены в Центральной и Южной Америке от восточной Мексики до южных границ Амазонии. Обитают на лесных болотах и водно-болотных пространствах в лесистой местности. Ведут скрытный образ жизни, держатся в основном в тени под нависающей над водой сверху растительностью.Птицы гнездятся колониями на покрытиях из ветвей деревьев над водой, при этом рядом могут размещаться до 100 гнёзд. Обычно кладка состоит из двух синих яиц.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Agami_heron_%28Agamia_agami%29_juvenile.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/Agami%20Heron2011-4-10-4.mp3',
    },
    {
      id: 2,
      name: 'Большой тукан токо',
      species: 'Rhamphastos toco',
      description:
              'Крупнейший и один из самых известных видов в семействе туканов. Они обитают в большой части Южной Америки. У большого тукана необыкновенное оперение: тело его черное, воротник, грудь и верхняя часть хвоста белые, а нижняя часть хвоста красная. Вокруг глаза у него тонкая голубая кожа, она окружена оранжевой, более грубой. Но самым выдающимся у него является гигантский желто-оранжевый клюв с красной частью сверху и черным пятном на конце. Язык у этого вида почти такой же длинный, как и клюв, и очень плоский.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Ramphastos_toco_001.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/LNPOUHUARA/XC506061-Toucan%20Toco%203%3ALa%20Leve%CC%81e%3A11-09-19.mp3',
    },
    {
      id: 3,
      name: 'Красный ибис',
      species: 'Eudocimus ruber',
      description:
              'Красный ибис распространён на севере Южной Америки, от западной Венесуэлы через Гайану вплоть до устья Амазонки в Бразилии, а также на острове Тринидад. Его можно встретить в более или менее крупных колониях. Его питание состоит из насекомых, моллюсков, крабов и рыб. Своим серповидным согнутым вниз клювом он ковыряется в мягкой тине, отыскивая червей и крабов.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Scarlet_ibis_arp.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC222844-Scarlet%20Ibis%20B%20401.mp3',
    },
    {
      id: 4,
      name: 'Большая питанга',
      species: 'Pitangus sulphuratus',
      description:
              'Это певчая птица семейства тиранновые. Большая питанга длиной 22 см и весом 63 г. Верхняя сторона коричневого цвета, голова с чёрно-белыми полосами, на макушке жёлтая полоса, горло белое, нижняя сторона жёлтая. Короткий, толстый клюв окрашен в чёрный цвет. Большая питанга гнездится от южного Техаса и Мексики до Аргентины. В Карибском море встречается на Тринидаде, Бермудах и Тобаго. Птица гнездится на открытой лесистой местности с несколькими высокими деревьями, а также вокруг человеческих поселений.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Bem-Te-Vi.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KADPGEQPZI/XC507692-03%20Great%20Kiskadee%20audio.mp3',
    },
    {
      id: 5,
      name: 'Гвианская селенидера',
      species: 'Selenidera piperivora',
      description:
              'Птица семейства тукановых, обитающая в Южной Америке. Длина тела составляет от 32 до 35 см, вес — от 129 до 171 г. вианская селенидера обитает на северо-востоке Южной Америки. Область распространения простирается от Гвианы и Французской Гвианы, а также Суринама до юга Венесуэлы и севера Бразилии. Естественная среда обитания — преимущественно низменные леса. В Венесуэле вид встречается на высоте до 900 м, в Суринаме — от 600 до 800 м над уровнем моря. Птицы живут преимущественно в верхней кроне деревьев влажных и дождевых тропических лесов. ',
      image: 'https://animalreader.ru/wp-content/uploads/2015/10/gvianskaja-selenidera-mesta-obitanija-i-obraz-zhizni-chernoj-pticy-animal-reader.-ru.-Deville.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GKADEITXTH/20101003SELCULcalls.mp3',
    },
    {
      id: 6,
      name: 'Колибри',
      species: 'Trochilidae',
      description:
              ' семейство мелких птиц из отряда стрижеобразных (Apodiformes). Известно более 350 видов, обитающих в Америке от Аляски и Лабрадора до Огненной Земли, многие виды являются эндемиками. Широко распространены в тропических лесах, особенно на среднегорье. Большую часть рациона колибри составляет богатый углеводами сладкий нектар цветковых растений, который они добывают с помощью длинного чувствительного языка. В качестве белковой добавки выступают мелкие членистоногие, которых птицы ловят в воздухе или снимают с листьев и паутины. ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/En_Garde_%2821310837273%29.jpg/800px-En_Garde_%2821310837273%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RIVNLYTULO/XC172516-BEIJA%20FLOR%20RAJADO%20-%20GUARAQUE%C3%87ABA%20-%2010-01-14.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Сенегальская альциона',
      species: 'Halcyon senegalensis',
      description:
              'Птица семейства зимородковых, обитающая в тропической Африке. Сенегальская альциона длиной 23 см. Спина, хвост и крылья ярко синего цвета. Голова, затылок и нижняя сторона белые, а плечи чёрные. Большой клюв красный сверху и чёрный снизу. Ноги красные. Оба пола выглядят похоже, молодые птицы чуть менее красочны. Призывный крик этой птицы — громкая трель.',
      image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Woodland_Kingfisher_%28Halcyon_senegalensis%29_South_Africa.jpg/800px-Woodland_Kingfisher_%28Halcyon_senegalensis%29_South_Africa.jpg',
      audio:
              'https://www.xeno-canto.org/sounds/uploaded/XVXHTBZRRW/XC392045-Woodland%20Kingfisher%20S%2020170313%200624%20SZ%20Hlane%20National%20Park%20Hlane%20Camp%20TW%20LS_5.mp3',
    },
    {
      id: 2,
      name: 'Шилоклювка',
      species: 'Recurvirostra avosetta',
      description:
              'чёрно-белый крупный кулик с изогнутым вверх клювом из семейства шилоклювковых, распространённый на пологих берегах водоёмов с солёной или солоноватой водой в Евразии и Африке. В глаза в первую очередь бросается длинный тонкий клюв, в вершинной половине сильно изогнутый вверх — эта особенность отличает птицу от родственного и сходного по окрасу ходулочника, у которого клюв прямой и более короткий. Шилоклювка к тому же значительно крупнее — её длина составляет 42—46 см, размах крыльев 67—77 см',
      image: 'http://www.ebirds.ru/images/e/142.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/JYPQCEFKAM/XC564882-200520-210701alfaiate.mp3',
    },
    {
      id: 3,
      name: 'Турач коки',
      species: 'Peliperdix coqui coqui',
      description:
              'Выражен половой диморфизм. У самцов красно-коричневая макушка, над глазами и клювом, а также на подбородке, горле, щеках, затылке и по бокам шеи оперение золотистого цвета. Нижняя часть шеи и затылок покрыты полосами чёрно-белого цвета. Верхняя часть тела имеет отчётливый перепелиный рисунок, нижняя часть светло-жёлтая с чёрными полосами. Перья хвоста ржаво-жёлтые. У самок бурая макушка и светло-жёлтое лицо. Пунктирная полоса чёрно-белого цвета тянется от бровей через виски и заканчивается по бокам шеи. Та же самая полоса проходит от уголков клюва вниз. Горло белое, шея, грудь и верхняя часть тела красно-коричневые, стержень перьев белый. Нижняя сторона бледно-жёлтая с чёрными полосами.',
      image: 'https://live.staticflickr.com/4910/45156531754_b72d60dd4b_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC516148-Peliperdix_coqui_nom-FL%20X%20song%20Polokwane%20GameRes%2030Oct19%205.43am%20LS115231a.mp3',
    },
    {
      id: 4,
      name: 'Страус',
      species: 'Struthio camelus',
      description:
              'Африканский страус — самая крупная из современных птиц: высотой до 270 см и массой до 156 кг. Страус имеет плотное телосложение, длинную шею и небольшую уплощённую голову. Клюв прямой и плоский, с роговым «когтем» на надклювье, довольно мягкий. Глаза большие, с густыми ресницами на верхнем веке. Страусы — нелетающие птицы. Для них характерно полное отсутствие киля и слаборазвитая грудная мускулатура; скелет не пневматичен, за исключением бедренных костей. Крылья у страусов недоразвитые; два пальца на них заканчиваются когтями, или шпорами. Задние конечности длинные и сильные, всего с двумя пальцами. Один из пальцев заканчивается подобием рогового копыта — на него птица опирается при беге',
      image: 'https://live.staticflickr.com/8651/29081079126_ea2513599c_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/DNKBTPCMSQ/Ostrich%20RV%202-10.mp3',

    },
    {
      id: 5,
      name: 'Розовый голубь',
      species: 'Nesoenas mayeri',
      description:
              'Редкая птица семейства голубиных. Видовое латинское название дано в честь немецкого физиолога Августа Майер. Единственный современный эндемичный вид голубей острова Маврикий.Розовый голубь достигает длины от 36 до 38 см и весит от 320 до 350 г.  Крылья от тёмно-серого до тёмно-коричневого цвета, первостепенные маховые перья несколько темнее. Веерообразный хвост красно-коричневый. Остальное оперение бледно-розового цвета.',
      image: 'https://live.staticflickr.com/554/19140201239_e32d8420ec_b.jpg',
      audio: 'https://www.xeno-canto.org/463454/download',
    },
    {
      id: 6,
      name: 'Африканский пингвин',
      species: 'Spheniscus demersus',
      description:
              'Пингвины в воде могут развивать скорость до 20 км/ч, нырять глубже 100 м. и задерживать дыхание на 2-3 минуты. В течение кормёжки могут проплывать 70—120 км в океане. Африканский пингвин, сбежавший во время наводнения в Тбилиси 2015 года из местного зоопарка, проплыл 60 км. Питаются в основном мелкой рыбой (мальками сельди, анчоусов, сардин и др.). Основные враги — человек, акулы, чайки (для птенцов), морские котики (как конкурент за добычу и как хищник) и одичавшие кошки (для птенцов и яиц в некоторых колониях).',
      image: 'https://live.staticflickr.com/65535/49204518852_9b69c907a4_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC392704-LS106470%20STONE%20POINT%20African%20Penguin%20calls%20A%20juv%20calls%20A.mp3',
    },
  ],
];

export default mainObject;
