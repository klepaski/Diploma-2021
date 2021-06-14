const COUNTRIES = [{"Code": "AF", "Name": "Afghanistan"},{"Code": "AX", "Name": "\u00c5land Islands"},{"Code": "AL", "Name": "Albania"},{"Code": "DZ", "Name": "Algeria"},{"Code": "AS", "Name": "American Samoa"},{"Code": "AD", "Name": "Andorra"},{"Code": "AO", "Name": "Angola"},{"Code": "AI", "Name": "Anguilla"},{"Code": "AQ", "Name": "Antarctica"},{"Code": "AG", "Name": "Antigua and Barbuda"},{"Code": "AR", "Name": "Argentina"},{"Code": "AM", "Name": "Armenia"},{"Code": "AW", "Name": "Aruba"},{"Code": "AU", "Name": "Australia"},{"Code": "AT", "Name": "Austria"},{"Code": "AZ", "Name": "Azerbaijan"},{"Code": "BS", "Name": "Bahamas"},{"Code": "BH", "Name": "Bahrain"},{"Code": "BD", "Name": "Bangladesh"},{"Code": "BB", "Name": "Barbados"},{"Code": "BY", "Name": "Belarus"},{"Code": "BE", "Name": "Belgium"},{"Code": "BZ", "Name": "Belize"},{"Code": "BJ", "Name": "Benin"},{"Code": "BM", "Name": "Bermuda"},{"Code": "BT", "Name": "Bhutan"},{"Code": "BO", "Name": "Bolivia, Plurinational State of"},{"Code": "BQ", "Name": "Bonaire, Sint Eustatius and Saba"},{"Code": "BA", "Name": "Bosnia and Herzegovina"},{"Code": "BW", "Name": "Botswana"},{"Code": "BV", "Name": "Bouvet Island"},{"Code": "BR", "Name": "Brazil"},{"Code": "IO", "Name": "British Indian Ocean Territory"},{"Code": "BN", "Name": "Brunei Darussalam"},{"Code": "BG", "Name": "Bulgaria"},{"Code": "BF", "Name": "Burkina Faso"},{"Code": "BI", "Name": "Burundi"},{"Code": "KH", "Name": "Cambodia"},{"Code": "CM", "Name": "Cameroon"},{"Code": "CA", "Name": "Canada"},{"Code": "CV", "Name": "Cape Verde"},{"Code": "KY", "Name": "Cayman Islands"},{"Code": "CF", "Name": "Central African Republic"},{"Code": "TD", "Name": "Chad"},{"Code": "CL", "Name": "Chile"},{"Code": "CN", "Name": "China"},{"Code": "CX", "Name": "Christmas Island"},{"Code": "CC", "Name": "Cocos (Keeling) Islands"},{"Code": "CO", "Name": "Colombia"},{"Code": "KM", "Name": "Comoros"},{"Code": "CG", "Name": "Congo"},{"Code": "CD", "Name": "Congo, the Democratic Republic of the"},{"Code": "CK", "Name": "Cook Islands"},{"Code": "CR", "Name": "Costa Rica"},{"Code": "CI", "Name": "C\u00f4te d'Ivoire"},{"Code": "HR", "Name": "Croatia"},{"Code": "CU", "Name": "Cuba"},{"Code": "CW", "Name": "Cura\u00e7ao"},{"Code": "CY", "Name": "Cyprus"},{"Code": "CZ", "Name": "Czech Republic"},{"Code": "DK", "Name": "Denmark"},{"Code": "DJ", "Name": "Djibouti"},{"Code": "DM", "Name": "Dominica"},{"Code": "DO", "Name": "Dominican Republic"},{"Code": "EC", "Name": "Ecuador"},{"Code": "EG", "Name": "Egypt"},{"Code": "SV", "Name": "El Salvador"},{"Code": "GQ", "Name": "Equatorial Guinea"},{"Code": "ER", "Name": "Eritrea"},{"Code": "EE", "Name": "Estonia"},{"Code": "ET", "Name": "Ethiopia"},{"Code": "FK", "Name": "Falkland Islands (Malvinas)"},{"Code": "FO", "Name": "Faroe Islands"},{"Code": "FJ", "Name": "Fiji"},{"Code": "FI", "Name": "Finland"},{"Code": "FR", "Name": "France"},{"Code": "GF", "Name": "French Guiana"},{"Code": "PF", "Name": "French Polynesia"},{"Code": "TF", "Name": "French Southern Territories"},{"Code": "GA", "Name": "Gabon"},{"Code": "GM", "Name": "Gambia"},{"Code": "GE", "Name": "Georgia"},{"Code": "DE", "Name": "Germany"},{"Code": "GH", "Name": "Ghana"},{"Code": "GI", "Name": "Gibraltar"},{"Code": "GR", "Name": "Greece"},{"Code": "GL", "Name": "Greenland"},{"Code": "GD", "Name": "Grenada"},{"Code": "GP", "Name": "Guadeloupe"},{"Code": "GU", "Name": "Guam"},{"Code": "GT", "Name": "Guatemala"},{"Code": "GG", "Name": "Guernsey"},{"Code": "GN", "Name": "Guinea"},{"Code": "GW", "Name": "Guinea-Bissau"},{"Code": "GY", "Name": "Guyana"},{"Code": "HT", "Name": "Haiti"},{"Code": "HM", "Name": "Heard Island and McDonald Islands"},{"Code": "VA", "Name": "Holy See (Vatican City State)"},{"Code": "HN", "Name": "Honduras"},{"Code": "HK", "Name": "Hong Kong"},{"Code": "HU", "Name": "Hungary"},{"Code": "IS", "Name": "Iceland"},{"Code": "IN", "Name": "India"},{"Code": "ID", "Name": "Indonesia"},{"Code": "IR", "Name": "Iran, Islamic Republic of"},{"Code": "IQ", "Name": "Iraq"},{"Code": "IE", "Name": "Ireland"},{"Code": "IM", "Name": "Isle of Man"},{"Code": "IL", "Name": "Israel"},{"Code": "IT", "Name": "Italy"},{"Code": "JM", "Name": "Jamaica"},{"Code": "JP", "Name": "Japan"},{"Code": "JE", "Name": "Jersey"},{"Code": "JO", "Name": "Jordan"},{"Code": "KZ", "Name": "Kazakhstan"},{"Code": "KE", "Name": "Kenya"},{"Code": "KI", "Name": "Kiribati"},{"Code": "KP", "Name": "Korea, Democratic People's Republic of"},{"Code": "KR", "Name": "Korea, Republic of"},{"Code": "KW", "Name": "Kuwait"},{"Code": "KG", "Name": "Kyrgyzstan"},{"Code": "LA", "Name": "Lao People's Democratic Republic"},{"Code": "LV", "Name": "Latvia"},{"Code": "LB", "Name": "Lebanon"},{"Code": "LS", "Name": "Lesotho"},{"Code": "LR", "Name": "Liberia"},{"Code": "LY", "Name": "Libya"},{"Code": "LI", "Name": "Liechtenstein"},{"Code": "LT", "Name": "Lithuania"},{"Code": "LU", "Name": "Luxembourg"},{"Code": "MO", "Name": "Macao"},{"Code": "MK", "Name": "Macedonia, the Former Yugoslav Republic of"},{"Code": "MG", "Name": "Madagascar"},{"Code": "MW", "Name": "Malawi"},{"Code": "MY", "Name": "Malaysia"},{"Code": "MV", "Name": "Maldives"},{"Code": "ML", "Name": "Mali"},{"Code": "MT", "Name": "Malta"},{"Code": "MH", "Name": "Marshall Islands"},{"Code": "MQ", "Name": "Martinique"},{"Code": "MR", "Name": "Mauritania"},{"Code": "MU", "Name": "Mauritius"},{"Code": "YT", "Name": "Mayotte"},{"Code": "MX", "Name": "Mexico"},{"Code": "FM", "Name": "Micronesia, Federated States of"},{"Code": "MD", "Name": "Moldova, Republic of"},{"Code": "MC", "Name": "Monaco"},{"Code": "MN", "Name": "Mongolia"},{"Code": "ME", "Name": "Montenegro"},{"Code": "MS", "Name": "Montserrat"},{"Code": "MA", "Name": "Morocco"},{"Code": "MZ", "Name": "Mozambique"},{"Code": "MM", "Name": "Myanmar"},{"Code": "NA", "Name": "Namibia"},{"Code": "NR", "Name": "Nauru"},{"Code": "NP", "Name": "Nepal"},{"Code": "NL", "Name": "Netherlands"},{"Code": "NC", "Name": "New Caledonia"},{"Code": "NZ", "Name": "New Zealand"},{"Code": "NI", "Name": "Nicaragua"},{"Code": "NE", "Name": "Niger"},{"Code": "NG", "Name": "Nigeria"},{"Code": "NU", "Name": "Niue"},{"Code": "NF", "Name": "Norfolk Island"},{"Code": "MP", "Name": "Northern Mariana Islands"},{"Code": "NO", "Name": "Norway"},{"Code": "OM", "Name": "Oman"},{"Code": "PK", "Name": "Pakistan"},{"Code": "PW", "Name": "Palau"},{"Code": "PS", "Name": "Palestine, State of"},{"Code": "PA", "Name": "Panama"},{"Code": "PG", "Name": "Papua New Guinea"},{"Code": "PY", "Name": "Paraguay"},{"Code": "PE", "Name": "Peru"},{"Code": "PH", "Name": "Philippines"},{"Code": "PN", "Name": "Pitcairn"},{"Code": "PL", "Name": "Poland"},{"Code": "PT", "Name": "Portugal"},{"Code": "PR", "Name": "Puerto Rico"},{"Code": "QA", "Name": "Qatar"},{"Code": "RE", "Name": "R\u00e9union"},{"Code": "RO", "Name": "Romania"},{"Code": "RU", "Name": "Russian Federation"},{"Code": "RW", "Name": "Rwanda"},{"Code": "BL", "Name": "Saint Barth\u00e9lemy"},{"Code": "SH", "Name": "Saint Helena, Ascension and Tristan da Cunha"},{"Code": "KN", "Name": "Saint Kitts and Nevis"},{"Code": "LC", "Name": "Saint Lucia"},{"Code": "MF", "Name": "Saint Martin (French part)"},{"Code": "PM", "Name": "Saint Pierre and Miquelon"},{"Code": "VC", "Name": "Saint Vincent and the Grenadines"},{"Code": "WS", "Name": "Samoa"},{"Code": "SM", "Name": "San Marino"},{"Code": "ST", "Name": "Sao Tome and Principe"},{"Code": "SA", "Name": "Saudi Arabia"},{"Code": "SN", "Name": "Senegal"},{"Code": "RS", "Name": "Serbia"},{"Code": "SC", "Name": "Seychelles"},{"Code": "SL", "Name": "Sierra Leone"},{"Code": "SG", "Name": "Singapore"},{"Code": "SX", "Name": "Sint Maarten (Dutch part)"},{"Code": "SK", "Name": "Slovakia"},{"Code": "SI", "Name": "Slovenia"},{"Code": "SB", "Name": "Solomon Islands"},{"Code": "SO", "Name": "Somalia"},{"Code": "ZA", "Name": "South Africa"},{"Code": "GS", "Name": "South Georgia and the South Sandwich Islands"},{"Code": "SS", "Name": "South Sudan"},{"Code": "ES", "Name": "Spain"},{"Code": "LK", "Name": "Sri Lanka"},{"Code": "SD", "Name": "Sudan"},{"Code": "SR", "Name": "Suriname"},{"Code": "SJ", "Name": "Svalbard and Jan Mayen"},{"Code": "SZ", "Name": "Swaziland"},{"Code": "SE", "Name": "Sweden"},{"Code": "CH", "Name": "Switzerland"},{"Code": "SY", "Name": "Syrian Arab Republic"},{"Code": "TW", "Name": "Taiwan, Province of China"},{"Code": "TJ", "Name": "Tajikistan"},{"Code": "TZ", "Name": "Tanzania, United Republic of"},{"Code": "TH", "Name": "Thailand"},{"Code": "TL", "Name": "Timor-Leste"},{"Code": "TG", "Name": "Togo"},{"Code": "TK", "Name": "Tokelau"},{"Code": "TO", "Name": "Tonga"},{"Code": "TT", "Name": "Trinidad and Tobago"},{"Code": "TN", "Name": "Tunisia"},{"Code": "TR", "Name": "Turkey"},{"Code": "TM", "Name": "Turkmenistan"},{"Code": "TC", "Name": "Turks and Caicos Islands"},{"Code": "TV", "Name": "Tuvalu"},{"Code": "UG", "Name": "Uganda"},{"Code": "UA", "Name": "Ukraine"},{"Code": "AE", "Name": "United Arab Emirates"},{"Code": "GB", "Name": "United Kingdom"},{"Code": "US", "Name": "United States"},{"Code": "UM", "Name": "United States Minor Outlying Islands"},{"Code": "UY", "Name": "Uruguay"},{"Code": "UZ", "Name": "Uzbekistan"},{"Code": "VU", "Name": "Vanuatu"},{"Code": "VE", "Name": "Venezuela, Bolivarian Republic of"},{"Code": "VN", "Name": "Viet Nam"},{"Code": "VG", "Name": "Virgin Islands, British"},{"Code": "VI", "Name": "Virgin Islands, U.S."},{"Code": "WF", "Name": "Wallis and Futuna"},{"Code": "EH", "Name": "Western Sahara"},{"Code": "YE", "Name": "Yemen"},{"Code": "ZM", "Name": "Zambia"},{"Code": "ZW", "Name": "Zimbabwe"}]

const LANGUAGES = [
    {
        "Name":"English",
        "nativeName":"English"
    },
    {
        "Name":"Russian",
        "nativeName":"русский язык"
    },
    {
        "Name":"German",
        "nativeName":"Deutsch"
    },
    {
        "Name":"French",
        "nativeName":"français, langue française"
    },
    {
        "Name":"Korean",
        "nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"
    },
    {
        "Name":"Spanish; Castilian",
        "nativeName":"español, castellano"
    },
    {
        "Name":"Chinese",
        "nativeName":"中文 (Zhōngwén), 汉语, 漢語"
    },
    {
        "Name":"Abkhaz",
        "nativeName":"аҧсуа"
    },
    {
        "Name":"Afar",
        "nativeName":"Afaraf"
    },
    {
        "Name":"Afrikaans",
        "nativeName":"Afrikaans"
    },
    {
        "Name":"Akan",
        "nativeName":"Akan"
    },
    {
        "Name":"Albanian",
        "nativeName":"Shqip"
    },
    {
        "Name":"Amharic",
        "nativeName":"አማርኛ"
    },
    {
        "Name":"Arabic",
        "nativeName":"العربية"
    },
    {
        "Name":"Aragonese",
        "nativeName":"Aragonés"
    },
    {
        "Name":"Armenian",
        "nativeName":"Հայերեն"
    },
    {
        "Name":"Assamese",
        "nativeName":"অসমীয়া"
    },
    {
        "Name":"Avaric",
        "nativeName":"авар мацӀ, магӀарул мацӀ"
    },
    {
        "Name":"Avestan",
        "nativeName":"avesta"
    },
    {
        "Name":"Aymara",
        "nativeName":"aymar aru"
    },
    {
        "Name":"Azerbaijani",
        "nativeName":"azərbaycan dili"
    },
    {
        "Name":"Bambara",
        "nativeName":"bamanankan"
    },
    {
        "Name":"Bashkir",
        "nativeName":"башҡорт теле"
    },
    {
        "Name":"Basque",
        "nativeName":"euskara, euskera"
    },
    {
        "Name":"Belarusian",
        "nativeName":"Беларуская"
    },
    {
        "Name":"Bengali",
        "nativeName":"বাংলা"
    },
    {
        "Name":"Bihari",
        "nativeName":"भोजपुरी"
    },
    {
        "Name":"Bislama",
        "nativeName":"Bislama"
    },
    {
        "Name":"Bosnian",
        "nativeName":"bosanski jezik"
    },
    {
        "Name":"Breton",
        "nativeName":"brezhoneg"
    },
    {
        "Name":"Bulgarian",
        "nativeName":"български език"
    },
    {
        "Name":"Burmese",
        "nativeName":"ဗမာစာ"
    },
    {
        "Name":"Catalan; Valencian",
        "nativeName":"Català"
    },
    {
        "Name":"Chamorro",
        "nativeName":"Chamoru"
    },
    {
        "Name":"Chechen",
        "nativeName":"нохчийн мотт"
    },
    {
        "Name":"Chichewa; Chewa; Nyanja",
        "nativeName":"chiCheŵa, chinyanja"
    },
    {
        "Name":"Chuvash",
        "nativeName":"чӑваш чӗлхи"
    },
    {
        "Name":"Cornish",
        "nativeName":"Kernewek"
    },
    {
        "Name":"Corsican",
        "nativeName":"corsu, lingua corsa"
    },
    {
        "Name":"Cree",
        "nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"
    },
    {
        "Name":"Croatian",
        "nativeName":"hrvatski"
    },
    {
        "Name":"Czech",
        "nativeName":"česky, čeština"
    },
    {
        "Name":"Danish",
        "nativeName":"dansk"
    },
    {
        "Name":"Divehi; Dhivehi; Maldivian;",
        "nativeName":"ދިވެހި"
    },
    {
        "Name":"Dutch",
        "nativeName":"Nederlands, Vlaams"
    },
    {
        "Name":"Esperanto",
        "nativeName":"Esperanto"
    },
    {
        "Name":"Estonian",
        "nativeName":"eesti, eesti keel"
    },
    {
        "Name":"Ewe",
        "nativeName":"Eʋegbe"
    },
    {
        "Name":"Faroese",
        "nativeName":"føroyskt"
    },
    {
        "Name":"Fijian",
        "nativeName":"vosa Vakaviti"
    },
    {
        "Name":"Finnish",
        "nativeName":"suomi, suomen kieli"
    },
    {
        "Name":"Fula; Fulah; Pulaar; Pular",
        "nativeName":"Fulfulde, Pulaar, Pular"
    },
    {
        "Name":"Galician",
        "nativeName":"Galego"
    },
    {
        "Name":"Georgian",
        "nativeName":"ქართული"
    },
    {
        "Name":"Greek, Modern",
        "nativeName":"Ελληνικά"
    },
    {
        "Name":"Guaraní",
        "nativeName":"Avañeẽ"
    },
    {
        "Name":"Gujarati",
        "nativeName":"ગુજરાતી"
    },
    {
        "Name":"Haitian; Haitian Creole",
        "nativeName":"Kreyòl ayisyen"
    },
    {
        "Name":"Hausa",
        "nativeName":"Hausa, هَوُسَ"
    },
    {
        "Name":"Hebrew (modern)",
        "nativeName":"עברית"
    },
    {
        "Name":"Herero",
        "nativeName":"Otjiherero"
    },
    {
        "Name":"Hindi",
        "nativeName":"हिन्दी, हिंदी"
    },
    {
        "Name":"Hiri Motu",
        "nativeName":"Hiri Motu"
    },
    {
        "Name":"Hungarian",
        "nativeName":"Magyar"
    },
    {
        "Name":"Interlingua",
        "nativeName":"Interlingua"
    },
    {
        "Name":"Indonesian",
        "nativeName":"Bahasa Indonesia"
    },
    {
        "Name":"Interlingue",
        "nativeName":"Originally called Occidental; then Interlingue after WWII"
    },
    {
        "Name":"Irish",
        "nativeName":"Gaeilge"
    },
    {
        "Name":"Igbo",
        "nativeName":"Asụsụ Igbo"
    },
    {
        "Name":"Inupiaq",
        "nativeName":"Iñupiaq, Iñupiatun"
    },
    {
        "Name":"Ido",
        "nativeName":"Ido"
    },
    {
        "Name":"Icelandic",
        "nativeName":"Íslenska"
    },
    {
        "Name":"Italian",
        "nativeName":"Italiano"
    },
    {
        "Name":"Inuktitut",
        "nativeName":"ᐃᓄᒃᑎᑐᑦ"
    },
    {
        "Name":"Japanese",
        "nativeName":"日本語 (にほんご／にっぽんご)"
    },
    {
        "Name":"Javanese",
        "nativeName":"basa Jawa"
    },
    {
        "Name":"Kalaallisut, Greenlandic",
        "nativeName":"kalaallisut, kalaallit oqaasii"
    },
    {
        "Name":"Kannada",
        "nativeName":"ಕನ್ನಡ"
    },
    {
        "Name":"Kanuri",
        "nativeName":"Kanuri"
    },
    {
        "Name":"Kashmiri",
        "nativeName":"कश्मीरी, كشميري‎"
    },
    {
        "Name":"Kazakh",
        "nativeName":"Қазақ тілі"
    },
    {
        "Name":"Khmer",
        "nativeName":"ភាសាខ្មែរ"
    },
    {
        "Name":"Kikuyu, Gikuyu",
        "nativeName":"Gĩkũyũ"
    },
    {
        "Name":"Kinyarwanda",
        "nativeName":"Ikinyarwanda"
    },
    {
        "Name":"Kirghiz, Kyrgyz",
        "nativeName":"кыргыз тили"
    },
    {
        "Name":"Komi",
        "nativeName":"коми кыв"
    },
    {
        "Name":"Kongo",
        "nativeName":"KiKongo"
    },
    {
        "Name":"Kurdish",
        "nativeName":"Kurdî, كوردی‎"
    },
    {
        "Name":"Kwanyama, Kuanyama",
        "nativeName":"Kuanyama"
    },
    {
        "Name":"Latin",
        "nativeName":"latine, lingua latina"
    },
    {
        "Name":"Luxembourgish, Letzeburgesch",
        "nativeName":"Lëtzebuergesch"
    },
    {
        "Name":"Luganda",
        "nativeName":"Luganda"
    },
    {
        "Name":"Limburgish, Limburgan, Limburger",
        "nativeName":"Limburgs"
    },
    {
        "Name":"Lingala",
        "nativeName":"Lingála"
    },
    {
        "Name":"Lao",
        "nativeName":"ພາສາລາວ"
    },
    {
        "Name":"Lithuanian",
        "nativeName":"lietuvių kalba"
    },
    {
        "Name":"Luba-Katanga",
        "nativeName":""
    },
    {
        "Name":"Latvian",
        "nativeName":"latviešu valoda"
    },
    {
        "Name":"Manx",
        "nativeName":"Gaelg, Gailck"
    },
    {
        "Name":"Macedonian",
        "nativeName":"македонски јазик"
    },
    {
        "Name":"Malagasy",
        "nativeName":"Malagasy fiteny"
    },
    {
        "Name":"Malay",
        "nativeName":"bahasa Melayu, بهاس ملايو‎"
    },
    {
        "Name":"Malayalam",
        "nativeName":"മലയാളം"
    },
    {
        "Name":"Maltese",
        "nativeName":"Malti"
    },
    {
        "Name":"Māori",
        "nativeName":"te reo Māori"
    },
    {
        "Name":"Marathi (Marāṭhī)",
        "nativeName":"मराठी"
    },
    {
        "Name":"Marshallese",
        "nativeName":"Kajin M̧ajeļ"
    },
    {
        "Name":"Mongolian",
        "nativeName":"монгол"
    },
    {
        "Name":"Nauru",
        "nativeName":"Ekakairũ Naoero"
    },
    {
        "Name":"Navajo, Navaho",
        "nativeName":"Diné bizaad, Dinékʼehǰí"
    },
    {
        "Name":"Norwegian Bokmål",
        "nativeName":"Norsk bokmål"
    },
    {
        "Name":"North Ndebele",
        "nativeName":"isiNdebele"
    },
    {
        "Name":"Nepali",
        "nativeName":"नेपाली"
    },
    {
        "Name":"Ndonga",
        "nativeName":"Owambo"
    },
    {
        "Name":"Norwegian Nynorsk",
        "nativeName":"Norsk nynorsk"
    },
    {
        "Name":"Norwegian",
        "nativeName":"Norsk"
    },
    {
        "Name":"Nuosu",
        "nativeName":"ꆈꌠ꒿ Nuosuhxop"
    },
    {
        "Name":"South Ndebele",
        "nativeName":"isiNdebele"
    },
    {
        "Name":"Occitan",
        "nativeName":"Occitan"
    },
    {
        "Name":"Ojibwe, Ojibwa",
        "nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
    {
        "Name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
        "nativeName":"ѩзыкъ словѣньскъ"
    },
    {
        "Name":"Oromo",
        "nativeName":"Afaan Oromoo"
    },
    {
        "Name":"Oriya",
        "nativeName":"ଓଡ଼ିଆ"
    },
    {
        "Name":"Ossetian, Ossetic",
        "nativeName":"ирон æвзаг"
    },
    {
        "Name":"Panjabi, Punjabi",
        "nativeName":"ਪੰਜਾਬੀ, پنجابی‎"
    },
    {
        "Name":"Pāli",
        "nativeName":"पाऴि"
    },
    {
        "Name":"Persian",
        "nativeName":"فارسی"
    },
    {
        "Name":"Polish",
        "nativeName":"polski"
    },
    {
        "Name":"Pashto, Pushto",
        "nativeName":"پښتو"
    },
    {
        "Name":"Portuguese",
        "nativeName":"Português"
    },
    {
        "Name":"Quechua",
        "nativeName":"Runa Simi, Kichwa"
    },
    {
        "Name":"Romansh",
        "nativeName":"rumantsch grischun"
    },
    {
        "Name":"Kirundi",
        "nativeName":"kiRundi"
    },
    {
        "Name":"Romanian, Moldavian, Moldovan",
        "nativeName":"română"
    },
    {
        "Name":"Sanskrit (Saṁskṛta)",
        "nativeName":"संस्कृतम्"
    },
    {
        "Name":"Sardinian",
        "nativeName":"sardu"
    },
    {
        "Name":"Sindhi",
        "nativeName":"सिन्धी, سنڌي، سندھی‎"
    },
    {
        "Name":"Northern Sami",
        "nativeName":"Davvisámegiella"
    },
    {
        "Name":"Samoan",
        "nativeName":"gagana faa Samoa"
    },
    {
        "Name":"Sango",
        "nativeName":"yângâ tî sängö"
    },
    {
        "Name":"Serbian",
        "nativeName":"српски језик"
    },
    {
        "Name":"Scottish Gaelic; Gaelic",
        "nativeName":"Gàidhlig"
    },
    {
        "Name":"Shona",
        "nativeName":"chiShona"
    },
    {
        "Name":"Sinhala, Sinhalese",
        "nativeName":"සිංහල"
    },
    {
        "Name":"Slovak",
        "nativeName":"slovenčina"
    },
    {
        "Name":"Slovene",
        "nativeName":"slovenščina"
    },
    {
        "Name":"Somali",
        "nativeName":"Soomaaliga, af Soomaali"
    },
    {
        "Name":"Southern Sotho",
        "nativeName":"Sesotho"
    },
    {
        "Name":"Sundanese",
        "nativeName":"Basa Sunda"
    },
    {
        "Name":"Swahili",
        "nativeName":"Kiswahili"
    },
    {
        "Name":"Swati",
        "nativeName":"SiSwati"
    },
    {
        "Name":"Swedish",
        "nativeName":"svenska"
    },
    {
        "Name":"Tamil",
        "nativeName":"தமிழ்"
    },
    {
        "Name":"Telugu",
        "nativeName":"తెలుగు"
    },
    {
        "Name":"Tajik",
        "nativeName":"тоҷикӣ, toğikī, تاجیکی‎"
    },
    {
        "Name":"Thai",
        "nativeName":"ไทย"
    },
    {
        "Name":"Tigrinya",
        "nativeName":"ትግርኛ"
    },
    {
        "Name":"Tibetan Standard, Tibetan, Central",
        "nativeName":"བོད་ཡིག"
    },
    {
        "Name":"Turkmen",
        "nativeName":"Türkmen, Түркмен"
    },
    {
        "Name":"Tagalog",
        "nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
    },
    {
        "Name":"Tswana",
        "nativeName":"Setswana"
    },
    {
        "Name":"Tonga (Tonga Islands)",
        "nativeName":"faka Tonga"
    },
    {
        "Name":"Turkish",
        "nativeName":"Türkçe"
    },
    {
        "Name":"Tsonga",
        "nativeName":"Xitsonga"
    },
    {
        "Name":"Tatar",
        "nativeName":"татарча, tatarça, تاتارچا‎"
    },
    {
        "Name":"Twi",
        "nativeName":"Twi"
    },
    {
        "Name":"Tahitian",
        "nativeName":"Reo Tahiti"
    },
    {
        "Name":"Uighur, Uyghur",
        "nativeName":"Uyƣurqə, ئۇيغۇرچە‎"
    },
    {
        "Name":"Ukrainian",
        "nativeName":"українська"
    },
    {
        "Name":"Urdu",
        "nativeName":"اردو"
    },
    {
        "Name":"Uzbek",
        "nativeName":"zbek, Ўзбек, أۇزبېك‎"
    },
    {
        "Name":"Venda",
        "nativeName":"Tshivenḓa"
    },
    {
        "Name":"VietNamese",
        "nativeName":"Tiếng Việt"
    },
    {
        "Name":"Volapük",
        "nativeName":"Volapük"
    },
    {
        "Name":"Walloon",
        "nativeName":"Walon"
    },
    {
        "Name":"Welsh",
        "nativeName":"Cymraeg"
    },
    {
        "Name":"Wolof",
        "nativeName":"Wollof"
    },
    {
        "Name":"Western Frisian",
        "nativeName":"Frysk"
    },
    {
        "Name":"Xhosa",
        "nativeName":"isiXhosa"
    },
    {
        "Name":"Yiddish",
        "nativeName":"ייִדיש"
    },
    {
        "Name":"Yoruba",
        "nativeName":"Yorùbá"
    },
    {
        "Name":"Zhuang, Chuang",
        "nativeName":"Saɯ cueŋƅ, Saw cuengh"
    }
]


let modifyC = () => {
    let listCountries = []

    listCountries.push({label: 'United Arab Emirates', value: 'United Arab Emirates'})
    listCountries.push({label: 'Saudi Arabia', value: 'Saudi Arabia'})
    
    COUNTRIES.map((item, key) => {
        if(item['Name'] !== 'United Arab Emirates' && item['Name'] !== 'Saudi Arabia')
        listCountries.push({label: item['Name'], value: item['Name']})
    })
    return listCountries
}

let modifyL = () => {
    let listLanguages = []
    LANGUAGES.map((item, key) => {
        listLanguages.push({label: item['Name'], value: item['Name']})
    })
    return listLanguages
}


exports.listCountries = modifyC()

// exports.listCountries = [
//     {value: 'United Arab Emirates', label: 'United Arab Emirates'},
//     {value: 'Saudi Arabia', label: 'Saudi Arabia'}
// ]


exports.listLanguages = modifyL()
