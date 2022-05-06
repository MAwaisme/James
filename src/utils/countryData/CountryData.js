const countryArray = [
    {
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Aland Islands",
        "dial_code": "+358",
        "code": "AX"
    },
    {
        "name": "Albania",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "dial_code": "+213",
        "code": "DZ"
    },
    {
        "name": "AmericanSamoa",
        "dial_code": "+1684",
        "code": "AS"
    },
    {
        "name": "Andorra",
        "dial_code": "+376",
        "code": "AD"
    },
    {
        "name": "Angola",
        "dial_code": "+244",
        "code": "AO"
    },
    {
        "name": "Anguilla",
        "dial_code": "+1264",
        "code": "AI"
    },
    {
        "name": "Antarctica",
        "dial_code": "+672",
        "code": "AQ"
    },
    {
        "name": "Antigua and Barbuda",
        "dial_code": "+1268",
        "code": "AG"
    },
    {
        "name": "Argentina",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "Armenia",
        "dial_code": "+374",
        "code": "AM"
    },
    {
        "name": "Aruba",
        "dial_code": "+297",
        "code": "AW"
    },
    {
        "name": "Australia",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "Austria",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "dial_code": "+1242",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "dial_code": "+880",
        "code": "BD"
    },
    {
        "name": "Barbados",
        "dial_code": "+1246",
        "code": "BB"
    },
    {
        "name": "Belarus",
        "dial_code": "+375",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "dial_code": "+32",
        "code": "BE"
    },
    {
        "name": "Belize",
        "dial_code": "+501",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "dial_code": "+229",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "dial_code": "+1441",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "Brazil",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "dial_code": "+246",
        "code": "IO"
    },
    {
        "name": "Brunei Darussalam",
        "dial_code": "+673",
        "code": "BN"
    },
    {
        "name": "Bulgaria",
        "dial_code": "+359",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "dial_code": "+226",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "dial_code": "+237",
        "code": "CM"
    },
    {
        "name": "Canada",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "dial_code": "+238",
        "code": "CV"
    },
    {
        "name": "Cayman Islands",
        "dial_code": "+ 345",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "dial_code": "+236",
        "code": "CF"
    },
    {
        "name": "Chad",
        "dial_code": "+235",
        "code": "TD"
    },
    {
        "name": "Chile",
        "dial_code": "+56",
        "code": "CL"
    },
    {
        "name": "China",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "dial_code": "+61",
        "code": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "dial_code": "+61",
        "code": "CC"
    },
    {
        "name": "Colombia",
        "dial_code": "+57",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "dial_code": "+269",
        "code": "KM"
    },
    {
        "name": "Congo",
        "dial_code": "+242",
        "code": "CG"
    },
    {
        "name": "Congo, The Democratic Republic of the Congo",
        "dial_code": "+243",
        "code": "CD"
    },
    {
        "name": "Cook Islands",
        "dial_code": "+682",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "dial_code": "+506",
        "code": "CR"
    },
    {
        "name": "Cote d'Ivoire",
        "dial_code": "+225",
        "code": "CI"
    },
    {
        "name": "Croatia",
        "dial_code": "+385",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "dial_code": "+53",
        "code": "CU"
    },
    {
        "name": "Cyprus",
        "dial_code": "+357",
        "code": "CY"
    },
    {
        "name": "Czech Republic",
        "dial_code": "+420",
        "code": "CZ"
    },
    {
        "name": "Denmark",
        "dial_code": "+45",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "dial_code": "+253",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "dial_code": "+1767",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "dial_code": "+1849",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "dial_code": "+593",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "dial_code": "+20",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "dial_code": "+503",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "dial_code": "+240",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "dial_code": "+291",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "dial_code": "+372",
        "code": "EE"
    },
    {
        "name": "Ethiopia",
        "dial_code": "+251",
        "code": "ET"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "dial_code": "+500",
        "code": "FK"
    },
    {
        "name": "Faroe Islands",
        "dial_code": "+298",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "dial_code": "+679",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "dial_code": "+358",
        "code": "FI"
    },
    {
        "name": "France",
        "dial_code": "+33",
        "code": "FR"
    },
    {
        "name": "French Guiana",
        "dial_code": "+594",
        "code": "GF"
    },
    {
        "name": "French Polynesia",
        "dial_code": "+689",
        "code": "PF"
    },
    {
        "name": "Gabon",
        "dial_code": "+241",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "dial_code": "+220",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "dial_code": "+995",
        "code": "GE"
    },
    {
        "name": "Germany",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "dial_code": "+233",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "dial_code": "+350",
        "code": "GI"
    },
    {
        "name": "Greece",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "dial_code": "+1473",
        "code": "GD"
    },
    {
        "name": "Guadeloupe",
        "dial_code": "+590",
        "code": "GP"
    },
    {
        "name": "Guam",
        "dial_code": "+1671",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "dial_code": "+502",
        "code": "GT"
    },
    {
        "name": "Guernsey",
        "dial_code": "+44",
        "code": "GG"
    },
    {
        "name": "Guinea",
        "dial_code": "+224",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "dial_code": "+245",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "dial_code": "+595",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "dial_code": "+509",
        "code": "HT"
    },
    {
        "name": "Holy See (Vatican City State)",
        "dial_code": "+379",
        "code": "VA"
    },
    {
        "name": "Honduras",
        "dial_code": "+504",
        "code": "HN"
    },
    {
        "name": "Hong Kong",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "India",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "dial_code": "+98",
        "code": "IR"
    },
    {
        "name": "Iraq",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "Isle of Man",
        "dial_code": "+44",
        "code": "IM"
    },
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Italy",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "dial_code": "+1876",
        "code": "JM"
    },
    {
        "name": "Japan",
        "dial_code": "+81",
        "code": "JP"
    },
    {
        "name": "Jersey",
        "dial_code": "+44",
        "code": "JE"
    },
    {
        "name": "Jordan",
        "dial_code": "+962",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "dial_code": "+77",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "dial_code": "+254",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "dial_code": "+686",
        "code": "KI"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "dial_code": "+850",
        "code": "KP"
    },
    {
        "name": "Korea, Republic of South Korea",
        "dial_code": "+82",
        "code": "KR"
    },
    {
        "name": "Kuwait",
        "dial_code": "+965",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "dial_code": "+996",
        "code": "KG"
    },
    {
        "name": "Laos",
        "dial_code": "+856",
        "code": "LA"
    },
    {
        "name": "Latvia",
        "dial_code": "+371",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "dial_code": "+961",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "dial_code": "+266",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "dial_code": "+231",
        "code": "LR"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "dial_code": "+218",
        "code": "LY"
    },
    {
        "name": "Liechtenstein",
        "dial_code": "+423",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "dial_code": "+370",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "dial_code": "+352",
        "code": "LU"
    },
    {
        "name": "Macao",
        "dial_code": "+853",
        "code": "MO"
    },
    {
        "name": "Macedonia",
        "dial_code": "+389",
        "code": "MK"
    },
    {
        "name": "Madagascar",
        "dial_code": "+261",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "dial_code": "+265",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "dial_code": "+60",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "dial_code": "+960",
        "code": "MV"
    },
    {
        "name": "Mali",
        "dial_code": "+223",
        "code": "ML"
    },
    {
        "name": "Malta",
        "dial_code": "+356",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "dial_code": "+692",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "dial_code": "+596",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "dial_code": "+222",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "dial_code": "+230",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "dial_code": "+262",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "dial_code": "+52",
        "code": "MX"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "dial_code": "+691",
        "code": "FM"
    },
    {
        "name": "Moldova",
        "dial_code": "+373",
        "code": "MD"
    },
    {
        "name": "Monaco",
        "dial_code": "+377",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "dial_code": "+976",
        "code": "MN"
    },
    {
        "name": "Montenegro",
        "dial_code": "+382",
        "code": "ME"
    },
    {
        "name": "Montserrat",
        "dial_code": "+1664",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "dial_code": "+212",
        "code": "MA"
    },
    {
        "name": "Mozambique",
        "dial_code": "+258",
        "code": "MZ"
    },
    {
        "name": "Myanmar",
        "dial_code": "+95",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "dial_code": "+264",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "dial_code": "+674",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "dial_code": "+977",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "dial_code": "+31",
        "code": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "dial_code": "+599",
        "code": "AN"
    },
    {
        "name": "New Caledonia",
        "dial_code": "+687",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "dial_code": "+64",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "dial_code": "+505",
        "code": "NI"
    },
    {
        "name": "Niger",
        "dial_code": "+227",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "dial_code": "+234",
        "code": "NG"
    },
    {
        "name": "Niue",
        "dial_code": "+683",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "dial_code": "+672",
        "code": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "dial_code": "+1670",
        "code": "MP"
    },
    {
        "name": "Norway",
        "dial_code": "+47",
        "code": "NO"
    },
    {
        "name": "Oman",
        "dial_code": "+968",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "dial_code": "+92",
        "code": "PK"
    },
    {
        "name": "Palau",
        "dial_code": "+680",
        "code": "PW"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "dial_code": "+970",
        "code": "PS"
    },
    {
        "name": "Panama",
        "dial_code": "+507",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "dial_code": "+675",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "dial_code": "+595",
        "code": "PY"
    },
    {
        "name": "Peru",
        "dial_code": "+51",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "dial_code": "+63",
        "code": "PH"
    },
    {
        "name": "Pitcairn",
        "dial_code": "+872",
        "code": "PN"
    },
    {
        "name": "Poland",
        "dial_code": "+48",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "dial_code": "+351",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "dial_code": "+1939",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "dial_code": "+974",
        "code": "QA"
    },
    {
        "name": "Romania",
        "dial_code": "+40",
        "code": "RO"
    },
    {
        "name": "Russia",
        "dial_code": "+7",
        "code": "RU"
    },
    {
        "name": "Rwanda",
        "dial_code": "+250",
        "code": "RW"
    },
    {
        "name": "Reunion",
        "dial_code": "+262",
        "code": "RE"
    },
    {
        "name": "Saint Barthelemy",
        "dial_code": "+590",
        "code": "BL"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dial_code": "+290",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "dial_code": "+1869",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "dial_code": "+1758",
        "code": "LC"
    },
    {
        "name": "Saint Martin",
        "dial_code": "+590",
        "code": "MF"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "dial_code": "+508",
        "code": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "dial_code": "+1784",
        "code": "VC"
    },
    {
        "name": "Samoa",
        "dial_code": "+685",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "dial_code": "+378",
        "code": "SM"
    },
    {
        "name": "Sao Tome and Principe",
        "dial_code": "+239",
        "code": "ST"
    },
    {
        "name": "Saudi Arabia",
        "dial_code": "+966",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "dial_code": "+221",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "dial_code": "+381",
        "code": "RS"
    },
    {
        "name": "Seychelles",
        "dial_code": "+248",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "dial_code": "+232",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "dial_code": "+65",
        "code": "SG"
    },
    {
        "name": "Slovakia",
        "dial_code": "+421",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "dial_code": "+386",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "dial_code": "+677",
        "code": "SB"
    },
    {
        "name": "Somalia",
        "dial_code": "+252",
        "code": "SO"
    },
    {
        "name": "South Africa",
        "dial_code": "+27",
        "code": "ZA"
    },
    {
        "name": "South Sudan",
        "dial_code": "+211",
        "code": "SS"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "dial_code": "+500",
        "code": "GS"
    },
    {
        "name": "Spain",
        "dial_code": "+34",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "dial_code": "+94",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "dial_code": "+249",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "dial_code": "+597",
        "code": "SR"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "dial_code": "+47",
        "code": "SJ"
    },
    {
        "name": "Swaziland",
        "dial_code": "+268",
        "code": "SZ"
    },
    {
        "name": "Sweden",
        "dial_code": "+46",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "dial_code": "+41",
        "code": "CH"
    },
    {
        "name": "Syrian Arab Republic",
        "dial_code": "+963",
        "code": "SY"
    },
    {
        "name": "Taiwan",
        "dial_code": "+886",
        "code": "TW"
    },
    {
        "name": "Tajikistan",
        "dial_code": "+992",
        "code": "TJ"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "dial_code": "+255",
        "code": "TZ"
    },
    {
        "name": "Thailand",
        "dial_code": "+66",
        "code": "TH"
    },
    {
        "name": "Timor-Leste",
        "dial_code": "+670",
        "code": "TL"
    },
    {
        "name": "Togo",
        "dial_code": "+228",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "dial_code": "+690",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "dial_code": "+676",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "dial_code": "+1868",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "dial_code": "+216",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "dial_code": "+90",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "dial_code": "+993",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "dial_code": "+1649",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "dial_code": "+688",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "dial_code": "+256",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "dial_code": "+380",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "dial_code": "+971",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "dial_code": "+44",
        "code": "GB"
    },
    {
        "name": "United States",
        "dial_code": "+1",
        "code": "US"
    },
    {
        "name": "Uruguay",
        "dial_code": "+598",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "dial_code": "+998",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "dial_code": "+678",
        "code": "VU"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dial_code": "+58",
        "code": "VE"
    },
    {
        "name": "Vietnam",
        "dial_code": "+84",
        "code": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "dial_code": "+1284",
        "code": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "dial_code": "+1340",
        "code": "VI"
    },
    {
        "name": "Wallis and Futuna",
        "dial_code": "+681",
        "code": "WF"
    },
    {
        "name": "Yemen",
        "dial_code": "+967",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "dial_code": "+260",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "dial_code": "+263",
        "code": "ZW"
    }
]

export default countryArray

export const currencyArray = [{
    "symbol": "$",
    "name": "US Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "USD",
    "name_plural": "US dollars"
}, {
    "symbol": "CA$",
    "name": "Canadian Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "CAD",
    "name_plural": "Canadian dollars"
}, {
    "symbol": "€",
    "name": "Euro",
    "symbol_native": "€",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "EUR",
    "name_plural": "euros"
}, {
    "symbol": "AED",
    "name": "United Arab Emirates Dirham",
    "symbol_native": "د.إ.‏",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "AED",
    "name_plural": "UAE dirhams"
}, {
    "symbol": "Af",
    "name": "Afghan Afghani",
    "symbol_native": "؋",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "AFN",
    "name_plural": "Afghan Afghanis"
}, {
    "symbol": "ALL",
    "name": "Albanian Lek",
    "symbol_native": "Lek",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "ALL",
    "name_plural": "Albanian lekë"
}, {
    "symbol": "AMD",
    "name": "Armenian Dram",
    "symbol_native": "դր.",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "AMD",
    "name_plural": "Armenian drams"
}, {
    "symbol": "AR$",
    "name": "Argentine Peso",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "ARS",
    "name_plural": "Argentine pesos"
}, {
    "symbol": "AU$",
    "name": "Australian Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "AUD",
    "name_plural": "Australian dollars"
}, {
    "symbol": "man.",
    "name": "Azerbaijani Manat",
    "symbol_native": "ман.",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "AZN",
    "name_plural": "Azerbaijani manats"
}, {
    "symbol": "KM",
    "name": "Bosnia-Herzegovina Convertible Mark",
    "symbol_native": "KM",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "BAM",
    "name_plural": "Bosnia-Herzegovina convertible marks"
}, {
    "symbol": "Tk",
    "name": "Bangladeshi Taka",
    "symbol_native": "৳",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "BDT",
    "name_plural": "Bangladeshi takas"
}, {
    "symbol": "BGN",
    "name": "Bulgarian Lev",
    "symbol_native": "лв.",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "BGN",
    "name_plural": "Bulgarian leva"
}, {
    "symbol": "BD",
    "name": "Bahraini Dinar",
    "symbol_native": "د.ب.‏",
    "decimal_digits": 3,
    "rounding": 0,
    "code": "BHD",
    "name_plural": "Bahraini dinars"
}, {
    "symbol": "FBu",
    "name": "Burundian Franc",
    "symbol_native": "FBu",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "BIF",
    "name_plural": "Burundian francs"
}, {
    "symbol": "BN$",
    "name": "Brunei Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "BND",
    "name_plural": "Brunei dollars"
}, {
    "symbol": "Bs",
    "name": "Bolivian Boliviano",
    "symbol_native": "Bs",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "BOB",
    "name_plural": "Bolivian bolivianos"
}, {
    "symbol": "R$",
    "name": "Brazilian Real",
    "symbol_native": "R$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "BRL",
    "name_plural": "Brazilian reals"
}, {
    "symbol": "BWP",
    "name": "Botswanan Pula",
    "symbol_native": "P",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "BWP",
    "name_plural": "Botswanan pulas"
}, {
    "symbol": "BYR",
    "name": "Belarusian Ruble",
    "symbol_native": "BYR",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "BYR",
    "name_plural": "Belarusian rubles"
}, {
    "symbol": "BZ$",
    "name": "Belize Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "BZD",
    "name_plural": "Belize dollars"
}, {
    "symbol": "CDF",
    "name": "Congolese Franc",
    "symbol_native": "FrCD",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "CDF",
    "name_plural": "Congolese francs"
}, {
    "symbol": "CHF",
    "name": "Swiss Franc",
    "symbol_native": "CHF",
    "decimal_digits": 2,
    "rounding": 0.05,
    "code": "CHF",
    "name_plural": "Swiss francs"
}, {
    "symbol": "CL$",
    "name": "Chilean Peso",
    "symbol_native": "$",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "CLP",
    "name_plural": "Chilean pesos"
}, {
    "symbol": "CN¥",
    "name": "Chinese Yuan",
    "symbol_native": "CN¥",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "CNY",
    "name_plural": "Chinese yuan"
}, {
    "symbol": "CO$",
    "name": "Colombian Peso",
    "symbol_native": "$",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "COP",
    "name_plural": "Colombian pesos"
}, {
    "symbol": "₡",
    "name": "Costa Rican Colón",
    "symbol_native": "₡",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "CRC",
    "name_plural": "Costa Rican colóns"
}, {
    "symbol": "CV$",
    "name": "Cape Verdean Escudo",
    "symbol_native": "CV$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "CVE",
    "name_plural": "Cape Verdean escudos"
}, {
    "symbol": "Kč",
    "name": "Czech Republic Koruna",
    "symbol_native": "Kč",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "CZK",
    "name_plural": "Czech Republic korunas"
}, {
    "symbol": "Fdj",
    "name": "Djiboutian Franc",
    "symbol_native": "Fdj",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "DJF",
    "name_plural": "Djiboutian francs"
}, {
    "symbol": "Dkr",
    "name": "Danish Krone",
    "symbol_native": "kr",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "DKK",
    "name_plural": "Danish kroner"
}, {
    "symbol": "RD$",
    "name": "Dominican Peso",
    "symbol_native": "RD$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "DOP",
    "name_plural": "Dominican pesos"
}, {
    "symbol": "DA",
    "name": "Algerian Dinar",
    "symbol_native": "د.ج.‏",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "DZD",
    "name_plural": "Algerian dinars"
}, {
    "symbol": "Ekr",
    "name": "Estonian Kroon",
    "symbol_native": "kr",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "EEK",
    "name_plural": "Estonian kroons"
}, {
    "symbol": "EGP",
    "name": "Egyptian Pound",
    "symbol_native": "ج.م.‏",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "EGP",
    "name_plural": "Egyptian pounds"
}, {
    "symbol": "Nfk",
    "name": "Eritrean Nakfa",
    "symbol_native": "Nfk",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "ERN",
    "name_plural": "Eritrean nakfas"
}, {
    "symbol": "Br",
    "name": "Ethiopian Birr",
    "symbol_native": "Br",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "ETB",
    "name_plural": "Ethiopian birrs"
}, {
    "symbol": "£",
    "name": "British Pound Sterling",
    "symbol_native": "£",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "GBP",
    "name_plural": "British pounds sterling"
}, {
    "symbol": "GEL",
    "name": "Georgian Lari",
    "symbol_native": "GEL",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "GEL",
    "name_plural": "Georgian laris"
}, {
    "symbol": "GH₵",
    "name": "Ghanaian Cedi",
    "symbol_native": "GH₵",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "GHS",
    "name_plural": "Ghanaian cedis"
}, {
    "symbol": "FG",
    "name": "Guinean Franc",
    "symbol_native": "FG",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "GNF",
    "name_plural": "Guinean francs"
}, {
    "symbol": "GTQ",
    "name": "Guatemalan Quetzal",
    "symbol_native": "Q",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "GTQ",
    "name_plural": "Guatemalan quetzals"
}, {
    "symbol": "HK$",
    "name": "Hong Kong Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "HKD",
    "name_plural": "Hong Kong dollars"
}, {
    "symbol": "HNL",
    "name": "Honduran Lempira",
    "symbol_native": "L",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "HNL",
    "name_plural": "Honduran lempiras"
}, {
    "symbol": "kn",
    "name": "Croatian Kuna",
    "symbol_native": "kn",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "HRK",
    "name_plural": "Croatian kunas"
}, {
    "symbol": "Ft",
    "name": "Hungarian Forint",
    "symbol_native": "Ft",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "HUF",
    "name_plural": "Hungarian forints"
}, {
    "symbol": "Rp",
    "name": "Indonesian Rupiah",
    "symbol_native": "Rp",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "IDR",
    "name_plural": "Indonesian rupiahs"
}, {
    "symbol": "₪",
    "name": "Israeli New Sheqel",
    "symbol_native": "₪",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "ILS",
    "name_plural": "Israeli new sheqels"
}, {
    "symbol": "Rs",
    "name": "Indian Rupee",
    "symbol_native": "টকা",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "INR",
    "name_plural": "Indian rupees"
}, {
    "symbol": "IQD",
    "name": "Iraqi Dinar",
    "symbol_native": "د.ع.‏",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "IQD",
    "name_plural": "Iraqi dinars"
}, {
    "symbol": "IRR",
    "name": "Iranian Rial",
    "symbol_native": "﷼",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "IRR",
    "name_plural": "Iranian rials"
}, {
    "symbol": "Ikr",
    "name": "Icelandic Króna",
    "symbol_native": "kr",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "ISK",
    "name_plural": "Icelandic krónur"
}, {
    "symbol": "J$",
    "name": "Jamaican Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "JMD",
    "name_plural": "Jamaican dollars"
}, {
    "symbol": "JD",
    "name": "Jordanian Dinar",
    "symbol_native": "د.أ.‏",
    "decimal_digits": 3,
    "rounding": 0,
    "code": "JOD",
    "name_plural": "Jordanian dinars"
}, {
    "symbol": "¥",
    "name": "Japanese Yen",
    "symbol_native": "￥",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "JPY",
    "name_plural": "Japanese yen"
}, {
    "symbol": "Ksh",
    "name": "Kenyan Shilling",
    "symbol_native": "Ksh",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "KES",
    "name_plural": "Kenyan shillings"
}, {
    "symbol": "KHR",
    "name": "Cambodian Riel",
    "symbol_native": "៛",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "KHR",
    "name_plural": "Cambodian riels"
}, {
    "symbol": "CF",
    "name": "Comorian Franc",
    "symbol_native": "FC",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "KMF",
    "name_plural": "Comorian francs"
}, {
    "symbol": "₩",
    "name": "South Korean Won",
    "symbol_native": "₩",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "KRW",
    "name_plural": "South Korean won"
}, {
    "symbol": "KD",
    "name": "Kuwaiti Dinar",
    "symbol_native": "د.ك.‏",
    "decimal_digits": 3,
    "rounding": 0,
    "code": "KWD",
    "name_plural": "Kuwaiti dinars"
}, {
    "symbol": "KZT",
    "name": "Kazakhstani Tenge",
    "symbol_native": "тңг.",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "KZT",
    "name_plural": "Kazakhstani tenges"
}, {
    "symbol": "LB£",
    "name": "Lebanese Pound",
    "symbol_native": "ل.ل.‏",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "LBP",
    "name_plural": "Lebanese pounds"
}, {
    "symbol": "SLRs",
    "name": "Sri Lankan Rupee",
    "symbol_native": "SL Re",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "LKR",
    "name_plural": "Sri Lankan rupees"
}, {
    "symbol": "Lt",
    "name": "Lithuanian Litas",
    "symbol_native": "Lt",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "LTL",
    "name_plural": "Lithuanian litai"
}, {
    "symbol": "Ls",
    "name": "Latvian Lats",
    "symbol_native": "Ls",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "LVL",
    "name_plural": "Latvian lati"
}, {
    "symbol": "LD",
    "name": "Libyan Dinar",
    "symbol_native": "د.ل.‏",
    "decimal_digits": 3,
    "rounding": 0,
    "code": "LYD",
    "name_plural": "Libyan dinars"
}, {
    "symbol": "MAD",
    "name": "Moroccan Dirham",
    "symbol_native": "د.م.‏",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "MAD",
    "name_plural": "Moroccan dirhams"
}, {
    "symbol": "MDL",
    "name": "Moldovan Leu",
    "symbol_native": "MDL",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "MDL",
    "name_plural": "Moldovan lei"
}, {
    "symbol": "MGA",
    "name": "Malagasy Ariary",
    "symbol_native": "MGA",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "MGA",
    "name_plural": "Malagasy Ariaries"
}, {
    "symbol": "MKD",
    "name": "Macedonian Denar",
    "symbol_native": "MKD",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "MKD",
    "name_plural": "Macedonian denari"
}, {
    "symbol": "MMK",
    "name": "Myanma Kyat",
    "symbol_native": "K",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "MMK",
    "name_plural": "Myanma kyats"
}, {
    "symbol": "MOP$",
    "name": "Macanese Pataca",
    "symbol_native": "MOP$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "MOP",
    "name_plural": "Macanese patacas"
}, {
    "symbol": "MURs",
    "name": "Mauritian Rupee",
    "symbol_native": "MURs",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "MUR",
    "name_plural": "Mauritian rupees"
}, {
    "symbol": "MX$",
    "name": "Mexican Peso",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "MXN",
    "name_plural": "Mexican pesos"
}, {
    "symbol": "RM",
    "name": "Malaysian Ringgit",
    "symbol_native": "RM",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "MYR",
    "name_plural": "Malaysian ringgits"
}, {
    "symbol": "MTn",
    "name": "Mozambican Metical",
    "symbol_native": "MTn",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "MZN",
    "name_plural": "Mozambican meticals"
}, {
    "symbol": "N$",
    "name": "Namibian Dollar",
    "symbol_native": "N$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "NAD",
    "name_plural": "Namibian dollars"
}, {
    "symbol": "₦",
    "name": "Nigerian Naira",
    "symbol_native": "₦",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "NGN",
    "name_plural": "Nigerian nairas"
}, {
    "symbol": "C$",
    "name": "Nicaraguan Córdoba",
    "symbol_native": "C$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "NIO",
    "name_plural": "Nicaraguan córdobas"
}, {
    "symbol": "Nkr",
    "name": "Norwegian Krone",
    "symbol_native": "kr",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "NOK",
    "name_plural": "Norwegian kroner"
}, {
    "symbol": "NPRs",
    "name": "Nepalese Rupee",
    "symbol_native": "नेरू",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "NPR",
    "name_plural": "Nepalese rupees"
}, {
    "symbol": "NZ$",
    "name": "New Zealand Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "NZD",
    "name_plural": "New Zealand dollars"
}, {
    "symbol": "OMR",
    "name": "Omani Rial",
    "symbol_native": "ر.ع.‏",
    "decimal_digits": 3,
    "rounding": 0,
    "code": "OMR",
    "name_plural": "Omani rials"
}, {
    "symbol": "B/.",
    "name": "Panamanian Balboa",
    "symbol_native": "B/.",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "PAB",
    "name_plural": "Panamanian balboas"
}, {
    "symbol": "S/.",
    "name": "Peruvian Nuevo Sol",
    "symbol_native": "S/.",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "PEN",
    "name_plural": "Peruvian nuevos soles"
}, {
    "symbol": "₱",
    "name": "Philippine Peso",
    "symbol_native": "₱",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "PHP",
    "name_plural": "Philippine pesos"
}, {
    "symbol": "PKRs",
    "name": "Pakistani Rupee",
    "symbol_native": "₨",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "PKR",
    "name_plural": "Pakistani rupees"
}, {
    "symbol": "zł",
    "name": "Polish Zloty",
    "symbol_native": "zł",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "PLN",
    "name_plural": "Polish zlotys"
}, {
    "symbol": "₲",
    "name": "Paraguayan Guarani",
    "symbol_native": "₲",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "PYG",
    "name_plural": "Paraguayan guaranis"
}, {
    "symbol": "QR",
    "name": "Qatari Rial",
    "symbol_native": "ر.ق.‏",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "QAR",
    "name_plural": "Qatari rials"
}, {
    "symbol": "RON",
    "name": "Romanian Leu",
    "symbol_native": "RON",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "RON",
    "name_plural": "Romanian lei"
}, {
    "symbol": "din.",
    "name": "Serbian Dinar",
    "symbol_native": "дин.",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "RSD",
    "name_plural": "Serbian dinars"
}, {
    "symbol": "RUB",
    "name": "Russian Ruble",
    "symbol_native": "руб.",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "RUB",
    "name_plural": "Russian rubles"
}, {
    "symbol": "RWF",
    "name": "Rwandan Franc",
    "symbol_native": "FR",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "RWF",
    "name_plural": "Rwandan francs"
}, {
    "symbol": "SR",
    "name": "Saudi Riyal",
    "symbol_native": "ر.س.‏",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "SAR",
    "name_plural": "Saudi riyals"
}, {
    "symbol": "SDG",
    "name": "Sudanese Pound",
    "symbol_native": "SDG",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "SDG",
    "name_plural": "Sudanese pounds"
}, {
    "symbol": "Skr",
    "name": "Swedish Krona",
    "symbol_native": "kr",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "SEK",
    "name_plural": "Swedish kronor"
}, {
    "symbol": "S$",
    "name": "Singapore Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "SGD",
    "name_plural": "Singapore dollars"
}, {
    "symbol": "Ssh",
    "name": "Somali Shilling",
    "symbol_native": "Ssh",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "SOS",
    "name_plural": "Somali shillings"
}, {
    "symbol": "SY£",
    "name": "Syrian Pound",
    "symbol_native": "ل.س.‏",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "SYP",
    "name_plural": "Syrian pounds"
}, {
    "symbol": "฿",
    "name": "Thai Baht",
    "symbol_native": "฿",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "THB",
    "name_plural": "Thai baht"
}, {
    "symbol": "DT",
    "name": "Tunisian Dinar",
    "symbol_native": "د.ت.‏",
    "decimal_digits": 3,
    "rounding": 0,
    "code": "TND",
    "name_plural": "Tunisian dinars"
}, {
    "symbol": "T$",
    "name": "Tongan Paʻanga",
    "symbol_native": "T$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "TOP",
    "name_plural": "Tongan paʻanga"
}, {
    "symbol": "TL",
    "name": "Turkish Lira",
    "symbol_native": "TL",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "TRY",
    "name_plural": "Turkish Lira"
}, {
    "symbol": "TT$",
    "name": "Trinidad and Tobago Dollar",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "TTD",
    "name_plural": "Trinidad and Tobago dollars"
}, {
    "symbol": "NT$",
    "name": "New Taiwan Dollar",
    "symbol_native": "NT$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "TWD",
    "name_plural": "New Taiwan dollars"
}, {
    "symbol": "TSh",
    "name": "Tanzanian Shilling",
    "symbol_native": "TSh",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "TZS",
    "name_plural": "Tanzanian shillings"
}, {
    "symbol": "₴",
    "name": "Ukrainian Hryvnia",
    "symbol_native": "₴",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "UAH",
    "name_plural": "Ukrainian hryvnias"
}, {
    "symbol": "USh",
    "name": "Ugandan Shilling",
    "symbol_native": "USh",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "UGX",
    "name_plural": "Ugandan shillings"
}, {
    "symbol": "$U",
    "name": "Uruguayan Peso",
    "symbol_native": "$",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "UYU",
    "name_plural": "Uruguayan pesos"
}, {
    "symbol": "UZS",
    "name": "Uzbekistan Som",
    "symbol_native": "UZS",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "UZS",
    "name_plural": "Uzbekistan som"
}, {
    "symbol": "Bs.F.",
    "name": "Venezuelan Bolívar",
    "symbol_native": "Bs.F.",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "VEF",
    "name_plural": "Venezuelan bolívars"
}, {
    "symbol": "₫",
    "name": "Vietnamese Dong",
    "symbol_native": "₫",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "VND",
    "name_plural": "Vietnamese dong"
}, {
    "symbol": "FCFA",
    "name": "CFA Franc BEAC",
    "symbol_native": "FCFA",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "XAF",
    "name_plural": "CFA francs BEAC"
}, {
    "symbol": "CFA",
    "name": "CFA Franc BCEAO",
    "symbol_native": "CFA",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "XOF",
    "name_plural": "CFA francs BCEAO"
}, {
    "symbol": "YR",
    "name": "Yemeni Rial",
    "symbol_native": "ر.ي.‏",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "YER",
    "name_plural": "Yemeni rials"
}, {
    "symbol": "R",
    "name": "South African Rand",
    "symbol_native": "R",
    "decimal_digits": 2,
    "rounding": 0,
    "code": "ZAR",
    "name_plural": "South African rand"
}, {
    "symbol": "ZK",
    "name": "Zambian Kwacha",
    "symbol_native": "ZK",
    "decimal_digits": 0,
    "rounding": 0,
    "code": "ZMK",
    "name_plural": "Zambian kwachas"
}]

export const languagesArray = [
    {
        "code": "aa",
        "name": "Afar",
        "native": "Afar"
    },
    {
        "code": "ab",
        "name": "Abkhazian",
        "native": "Аҧсуа"
    },
    {
        "code": "af",
        "name": "Afrikaans",
        "native": "Afrikaans"
    },
    {
        "code": "ak",
        "name": "Akan",
        "native": "Akana"
    },
    {
        "code": "am",
        "name": "Amharic",
        "native": "አማርኛ"
    },
    {
        "code": "an",
        "name": "Aragonese",
        "native": "Aragonés"
    },
    {
        "code": "ar",
        "name": "Arabic",
        "native": "العربية",
        "rtl": 1
    },
    {
        "code": "as",
        "name": "Assamese",
        "native": "অসমীয়া"
    },
    {
        "code": "av",
        "name": "Avar",
        "native": "Авар"
    },
    {
        "code": "ay",
        "name": "Aymara",
        "native": "Aymar"
    },
    {
        "code": "az",
        "name": "Azerbaijani",
        "native": "Azərbaycanca / آذربايجان"
    },
    {
        "code": "ba",
        "name": "Bashkir",
        "native": "Башҡорт"
    },
    {
        "code": "be",
        "name": "Belarusian",
        "native": "Беларуская"
    },
    {
        "code": "bg",
        "name": "Bulgarian",
        "native": "Български"
    },
    {
        "code": "bh",
        "name": "Bihari",
        "native": "भोजपुरी"
    },
    {
        "code": "bi",
        "name": "Bislama",
        "native": "Bislama"
    },
    {
        "code": "bm",
        "name": "Bambara",
        "native": "Bamanankan"
    },
    {
        "code": "bn",
        "name": "Bengali",
        "native": "বাংলা"
    },
    {
        "code": "bo",
        "name": "Tibetan",
        "native": "བོད་ཡིག / Bod skad"
    },
    {
        "code": "br",
        "name": "Breton",
        "native": "Brezhoneg"
    },
    {
        "code": "bs",
        "name": "Bosnian",
        "native": "Bosanski"
    },
    {
        "code": "ca",
        "name": "Catalan",
        "native": "Català"
    },
    {
        "code": "ce",
        "name": "Chechen",
        "native": "Нохчийн"
    },
    {
        "code": "ch",
        "name": "Chamorro",
        "native": "Chamoru"
    },
    {
        "code": "co",
        "name": "Corsican",
        "native": "Corsu"
    },
    {
        "code": "cr",
        "name": "Cree",
        "native": "Nehiyaw"
    },
    {
        "code": "cs",
        "name": "Czech",
        "native": "Česky"
    },
    {
        "code": "cu",
        "name": "Old Church Slavonic / Old Bulgarian",
        "native": "словѣньскъ / slověnĭskŭ"
    },
    {
        "code": "cv",
        "name": "Chuvash",
        "native": "Чăваш"
    },
    {
        "code": "cy",
        "name": "Welsh",
        "native": "Cymraeg"
    },
    {
        "code": "da",
        "name": "Danish",
        "native": "Dansk"
    },
    {
        "code": "de",
        "name": "German",
        "native": "Deutsch"
    },
    {
        "code": "dv",
        "name": "Divehi",
        "native": "ދިވެހިބަސް",
        "rtl": 1
    },
    {
        "code": "dz",
        "name": "Dzongkha",
        "native": "ཇོང་ཁ"
    },
    {
        "code": "ee",
        "name": "Ewe",
        "native": "Ɛʋɛ"
    },
    {
        "code": "el",
        "name": "Greek",
        "native": "Ελληνικά"
    },
    {
        "code": "en",
        "name": "English",
        "native": "English"
    },
    {
        "code": "eo",
        "name": "Esperanto",
        "native": "Esperanto"
    },
    {
        "code": "es",
        "name": "Spanish",
        "native": "Español"
    },
    {
        "code": "et",
        "name": "Estonian",
        "native": "Eesti"
    },
    {
        "code": "eu",
        "name": "Basque",
        "native": "Euskara"
    },
    {
        "code": "fa",
        "name": "Persian",
        "native": "فارسی",
        "rtl": 1
    },
    {
        "code": "ff",
        "name": "Peul",
        "native": "Fulfulde"
    },
    {
        "code": "fi",
        "name": "Finnish",
        "native": "Suomi"
    },
    {
        "code": "fj",
        "name": "Fijian",
        "native": "Na Vosa Vakaviti"
    },
    {
        "code": "fo",
        "name": "Faroese",
        "native": "Føroyskt"
    },
    {
        "code": "fr",
        "name": "French",
        "native": "Français"
    },
    {
        "code": "fy",
        "name": "West Frisian",
        "native": "Frysk"
    },
    {
        "code": "ga",
        "name": "Irish",
        "native": "Gaeilge"
    },
    {
        "code": "gd",
        "name": "Scottish Gaelic",
        "native": "Gàidhlig"
    },
    {
        "code": "gl",
        "name": "Galician",
        "native": "Galego"
    },
    {
        "code": "gn",
        "name": "Guarani",
        "native": "Avañe'ẽ"
    },
    {
        "code": "gu",
        "name": "Gujarati",
        "native": "ગુજરાતી"
    },
    {
        "code": "gv",
        "name": "Manx",
        "native": "Gaelg"
    },
    {
        "code": "ha",
        "name": "Hausa",
        "native": "هَوُسَ",
        "rtl": 1
    },
    {
        "code": "he",
        "name": "Hebrew",
        "native": "עברית",
        "rtl": 1
    },
    {
        "code": "hi",
        "name": "Hindi",
        "native": "हिन्दी"
    },
    {
        "code": "ho",
        "name": "Hiri Motu",
        "native": "Hiri Motu"
    },
    {
        "code": "hr",
        "name": "Croatian",
        "native": "Hrvatski"
    },
    {
        "code": "ht",
        "name": "Haitian",
        "native": "Krèyol ayisyen"
    },
    {
        "code": "hu",
        "name": "Hungarian",
        "native": "Magyar"
    },
    {
        "code": "hy",
        "name": "Armenian",
        "native": "Հայերեն"
    },
    {
        "code": "hz",
        "name": "Herero",
        "native": "Otsiherero"
    },
    {
        "code": "ia",
        "name": "Interlingua",
        "native": "Interlingua"
    },
    {
        "code": "id",
        "name": "Indonesian",
        "native": "Bahasa Indonesia"
    },
    {
        "code": "ie",
        "name": "Interlingue",
        "native": "Interlingue"
    },
    {
        "code": "ig",
        "name": "Igbo",
        "native": "Igbo"
    },
    {
        "code": "ii",
        "name": "Sichuan Yi",
        "native": "ꆇꉙ / 四川彝语"
    },
    {
        "code": "ik",
        "name": "Inupiak",
        "native": "Iñupiak"
    },
    {
        "code": "io",
        "name": "Ido",
        "native": "Ido"
    },
    {
        "code": "is",
        "name": "Icelandic",
        "native": "Íslenska"
    },
    {
        "code": "it",
        "name": "Italian",
        "native": "Italiano"
    },
    {
        "code": "iu",
        "name": "Inuktitut",
        "native": "ᐃᓄᒃᑎᑐᑦ"
    },
    {
        "code": "ja",
        "name": "Japanese",
        "native": "日本語"
    },
    {
        "code": "jv",
        "name": "Javanese",
        "native": "Basa Jawa"
    },
    {
        "code": "ka",
        "name": "Georgian",
        "native": "ქართული"
    },
    {
        "code": "kg",
        "name": "Kongo",
        "native": "KiKongo"
    },
    {
        "code": "ki",
        "name": "Kikuyu",
        "native": "Gĩkũyũ"
    },
    {
        "code": "kj",
        "name": "Kuanyama",
        "native": "Kuanyama"
    },
    {
        "code": "kk",
        "name": "Kazakh",
        "native": "Қазақша"
    },
    {
        "code": "kl",
        "name": "Greenlandic",
        "native": "Kalaallisut"
    },
    {
        "code": "km",
        "name": "Cambodian",
        "native": "ភាសាខ្មែរ"
    },
    {
        "code": "kn",
        "name": "Kannada",
        "native": "ಕನ್ನಡ"
    },
    {
        "code": "ko",
        "name": "Korean",
        "native": "한국어"
    },
    {
        "code": "kr",
        "name": "Kanuri",
        "native": "Kanuri"
    },
    {
        "code": "ks",
        "name": "Kashmiri",
        "native": "कश्मीरी / كشميري",
        "rtl": 1
    },
    {
        "code": "ku",
        "name": "Kurdish",
        "native": "Kurdî / كوردی",
        "rtl": 1
    },
    {
        "code": "kv",
        "name": "Komi",
        "native": "Коми"
    },
    {
        "code": "kw",
        "name": "Cornish",
        "native": "Kernewek"
    },
    {
        "code": "ky",
        "name": "Kirghiz",
        "native": "Kırgızca / Кыргызча"
    },
    {
        "code": "la",
        "name": "Latin",
        "native": "Latina"
    },
    {
        "code": "lb",
        "name": "Luxembourgish",
        "native": "Lëtzebuergesch"
    },
    {
        "code": "lg",
        "name": "Ganda",
        "native": "Luganda"
    },
    {
        "code": "li",
        "name": "Limburgian",
        "native": "Limburgs"
    },
    {
        "code": "ln",
        "name": "Lingala",
        "native": "Lingála"
    },
    {
        "code": "lo",
        "name": "Laotian",
        "native": "ລາວ / Pha xa lao"
    },
    {
        "code": "lt",
        "name": "Lithuanian",
        "native": "Lietuvių"
    },
    {
        "code": "lu",
        "name": "Luba-Katanga",
        "native": "Tshiluba"
    },
    {
        "code": "lv",
        "name": "Latvian",
        "native": "Latviešu"
    },
    {
        "code": "mg",
        "name": "Malagasy",
        "native": "Malagasy"
    },
    {
        "code": "mh",
        "name": "Marshallese",
        "native": "Kajin Majel / Ebon"
    },
    {
        "code": "mi",
        "name": "Maori",
        "native": "Māori"
    },
    {
        "code": "mk",
        "name": "Macedonian",
        "native": "Македонски"
    },
    {
        "code": "ml",
        "name": "Malayalam",
        "native": "മലയാളം"
    },
    {
        "code": "mn",
        "name": "Mongolian",
        "native": "Монгол"
    },
    {
        "code": "mo",
        "name": "Moldovan",
        "native": "Moldovenească"
    },
    {
        "code": "mr",
        "name": "Marathi",
        "native": "मराठी"
    },
    {
        "code": "ms",
        "name": "Malay",
        "native": "Bahasa Melayu"
    },
    {
        "code": "mt",
        "name": "Maltese",
        "native": "bil-Malti"
    },
    {
        "code": "my",
        "name": "Burmese",
        "native": "မြန်မာစာ"
    },
    {
        "code": "na",
        "name": "Nauruan",
        "native": "Dorerin Naoero"
    },
    {
        "code": "nb",
        "name": "Norwegian Bokmål",
        "native": "Norsk bokmål"
    },
    {
        "code": "nd",
        "name": "North Ndebele",
        "native": "Sindebele"
    },
    {
        "code": "ne",
        "name": "Nepali",
        "native": "नेपाली"
    },
    {
        "code": "ng",
        "name": "Ndonga",
        "native": "Oshiwambo"
    },
    {
        "code": "nl",
        "name": "Dutch",
        "native": "Nederlands"
    },
    {
        "code": "nn",
        "name": "Norwegian Nynorsk",
        "native": "Norsk nynorsk"
    },
    {
        "code": "no",
        "name": "Norwegian",
        "native": "Norsk"
    },
    {
        "code": "nr",
        "name": "South Ndebele",
        "native": "isiNdebele"
    },
    {
        "code": "nv",
        "name": "Navajo",
        "native": "Diné bizaad"
    },
    {
        "code": "ny",
        "name": "Chichewa",
        "native": "Chi-Chewa"
    },
    {
        "code": "oc",
        "name": "Occitan",
        "native": "Occitan"
    },
    {
        "code": "oj",
        "name": "Ojibwa",
        "native": "ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"
    },
    {
        "code": "om",
        "name": "Oromo",
        "native": "Oromoo"
    },
    {
        "code": "or",
        "name": "Oriya",
        "native": "ଓଡ଼ିଆ"
    },
    {
        "code": "os",
        "name": "Ossetian / Ossetic",
        "native": "Иронау"
    },
    {
        "code": "pa",
        "name": "Panjabi / Punjabi",
        "native": "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
    },
    {
        "code": "pi",
        "name": "Pali",
        "native": "Pāli / पाऴि"
    },
    {
        "code": "pl",
        "name": "Polish",
        "native": "Polski"
    },
    {
        "code": "ps",
        "name": "Pashto",
        "native": "پښتو",
        "rtl": 1
    },
    {
        "code": "pt",
        "name": "Portuguese",
        "native": "Português"
    },
    {
        "code": "qu",
        "name": "Quechua",
        "native": "Runa Simi"
    },
    {
        "code": "rm",
        "name": "Raeto Romance",
        "native": "Rumantsch"
    },
    {
        "code": "rn",
        "name": "Kirundi",
        "native": "Kirundi"
    },
    {
        "code": "ro",
        "name": "Romanian",
        "native": "Română"
    },
    {
        "code": "ru",
        "name": "Russian",
        "native": "Русский"
    },
    {
        "code": "rw",
        "name": "Rwandi",
        "native": "Kinyarwandi"
    },
    {
        "code": "sa",
        "name": "Sanskrit",
        "native": "संस्कृतम्"
    },
    {
        "code": "sc",
        "name": "Sardinian",
        "native": "Sardu"
    },
    {
        "code": "sd",
        "name": "Sindhi",
        "native": "सिनधि"
    },
    {
        "code": "se",
        "name": "Northern Sami",
        "native": "Sámegiella"
    },
    {
        "code": "sg",
        "name": "Sango",
        "native": "Sängö"
    },
    {
        "code": "sh",
        "name": "Serbo-Croatian",
        "native": "Srpskohrvatski / Српскохрватски"
    },
    {
        "code": "si",
        "name": "Sinhalese",
        "native": "සිංහල"
    },
    {
        "code": "sk",
        "name": "Slovak",
        "native": "Slovenčina"
    },
    {
        "code": "sl",
        "name": "Slovenian",
        "native": "Slovenščina"
    },
    {
        "code": "sm",
        "name": "Samoan",
        "native": "Gagana Samoa"
    },
    {
        "code": "sn",
        "name": "Shona",
        "native": "chiShona"
    },
    {
        "code": "so",
        "name": "Somalia",
        "native": "Soomaaliga"
    },
    {
        "code": "sq",
        "name": "Albanian",
        "native": "Shqip"
    },
    {
        "code": "sr",
        "name": "Serbian",
        "native": "Српски"
    },
    {
        "code": "ss",
        "name": "Swati",
        "native": "SiSwati"
    },
    {
        "code": "st",
        "name": "Southern Sotho",
        "native": "Sesotho"
    },
    {
        "code": "su",
        "name": "Sundanese",
        "native": "Basa Sunda"
    },
    {
        "code": "sv",
        "name": "Swedish",
        "native": "Svenska"
    },
    {
        "code": "sw",
        "name": "Swahili",
        "native": "Kiswahili"
    },
    {
        "code": "ta",
        "name": "Tamil",
        "native": "தமிழ்"
    },
    {
        "code": "te",
        "name": "Telugu",
        "native": "తెలుగు"
    },
    {
        "code": "tg",
        "name": "Tajik",
        "native": "Тоҷикӣ"
    },
    {
        "code": "th",
        "name": "Thai",
        "native": "ไทย / Phasa Thai"
    },
    {
        "code": "ti",
        "name": "Tigrinya",
        "native": "ትግርኛ"
    },
    {
        "code": "tk",
        "name": "Turkmen",
        "native": "Туркмен / تركمن"
    },
    {
        "code": "tl",
        "name": "Tagalog / Filipino",
        "native": "Tagalog"
    },
    {
        "code": "tn",
        "name": "Tswana",
        "native": "Setswana"
    },
    {
        "code": "to",
        "name": "Tonga",
        "native": "Lea Faka-Tonga"
    },
    {
        "code": "tr",
        "name": "Turkish",
        "native": "Türkçe"
    },
    {
        "code": "ts",
        "name": "Tsonga",
        "native": "Xitsonga"
    },
    {
        "code": "tt",
        "name": "Tatar",
        "native": "Tatarça"
    },
    {
        "code": "tw",
        "name": "Twi",
        "native": "Twi"
    },
    {
        "code": "ty",
        "name": "Tahitian",
        "native": "Reo Mā`ohi"
    },
    {
        "code": "ug",
        "name": "Uyghur",
        "native": "Uyƣurqə / ئۇيغۇرچە"
    },
    {
        "code": "uk",
        "name": "Ukrainian",
        "native": "Українська"
    },
    {
        "code": "ur",
        "name": "Urdu",
        "native": "اردو",
        "rtl": 1
    },
    {
        "code": "uz",
        "name": "Uzbek",
        "native": "Ўзбек"
    },
    {
        "code": "ve",
        "name": "Venda",
        "native": "Tshivenḓa"
    },
    {
        "code": "vi",
        "name": "Vietnamese",
        "native": "Tiếng Việt"
    },
    {
        "code": "vo",
        "name": "Volapük",
        "native": "Volapük"
    },
    {
        "code": "wa",
        "name": "Walloon",
        "native": "Walon"
    },
    {
        "code": "wo",
        "name": "Wolof",
        "native": "Wollof"
    },
    {
        "code": "xh",
        "name": "Xhosa",
        "native": "isiXhosa"
    },
    {
        "code": "yi",
        "name": "Yiddish",
        "native": "ייִדיש",
        "rtl": 1
    },
    {
        "code": "yo",
        "name": "Yoruba",
        "native": "Yorùbá"
    },
    {
        "code": "za",
        "name": "Zhuang",
        "native": "Cuengh / Tôô / 壮语"
    },
    {
        "code": "zh",
        "name": "Chinese",
        "native": "中文"
    },
    {
        "code": "zu",
        "name": "Zulu",
        "native": "isiZulu"
    }
]

export const timeZones = [
    {
        countryCode: "AF",
        countryName: "Afghanistan",
        timeZones: [
            "Asia/Kabul"
        ],
        UTCOffset: [
            "UTC +04:30"
        ]
    },
    {
        countryCode: "AX",
        countryName: "Aland Islands",
        timeZones: [
            "Europe/Mariehamn"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "AL",
        countryName: "Albania",
        timeZones: [
            "Europe/Tirane"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "DZ",
        countryName: "Algeria",
        timeZones: [
            "Africa/Algiers"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "AS",
        countryName: "American Samoa",
        timeZones: [
            "Pacific/Pago_Pago"
        ],
        UTCOffset: [
            "UTC -11:00"
        ]
    },
    {
        countryCode: "AD",
        countryName: "Andorra",
        timeZones: [
            "Europe/Andorra"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "AO",
        countryName: "Angola",
        timeZones: [
            "Africa/Luanda"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "AI",
        countryName: "Anguilla",
        timeZones: [
            "America/Anguilla"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "AQ",
        countryName: "Antarctica",
        timeZones: [
            "Antarctica/Casey",
            "Antarctica/Davis",
            "Antarctica/DumontDUrville",
            "Antarctica/Mawson",
            "Antarctica/McMurdo",
            "Antarctica/Palmer",
            "Antarctica/Rothera",
            "Antarctica/Syowa",
            "Antarctica/Troll",
            "Antarctica/Vostok"
        ],
        UTCOffset: [
            "UTC +08:00",
            "UTC +07:00",
            "UTC +10:00",
            "UTC +05:00",
            "UTC +12:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC +03:00",
            "UTC +02:00",
            "UTC +06:00"
        ]
    },
    {
        countryCode: "AG",
        countryName: "Antigua and Barbuda",
        timeZones: [
            "America/Antigua"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "AR",
        countryName: "Argentina",
        timeZones: [
            "America/Argentina/Buenos_Aires",
            "America/Argentina/Catamarca",
            "America/Argentina/Cordoba",
            "America/Argentina/Jujuy",
            "America/Argentina/La_Rioja",
            "America/Argentina/Mendoza",
            "America/Argentina/Rio_Gallegos",
            "America/Argentina/Salta",
            "America/Argentina/San_Juan",
            "America/Argentina/San_Luis",
            "America/Argentina/Tucuman",
            "America/Argentina/Ushuaia"
        ],
        UTCOffset: [
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00"
        ]
    },
    {
        countryCode: "AM",
        countryName: "Armenia",
        timeZones: [
            "Asia/Yerevan"
        ],
        UTCOffset: [
            "UTC +04:00"
        ]
    },
    {
        countryCode: "AW",
        countryName: "Aruba",
        timeZones: [
            "America/Aruba"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "AU",
        countryName: "Australia",
        timeZones: [
            "Antarctica/Macquarie",
            "Australia/Adelaide",
            "Australia/Brisbane",
            "Australia/Broken_Hill",
            "Australia/Currie",
            "Australia/Darwin",
            "Australia/Eucla",
            "Australia/Hobart",
            "Australia/Lindeman",
            "Australia/Lord_Howe",
            "Australia/Melbourne",
            "Australia/Perth",
            "Australia/Sydney"
        ],
        UTCOffset: [
            "UTC +11:00",
            "UTC +09:30",
            "UTC +10:00",
            "UTC +09:30",
            "UTC +10:00",
            "UTC +09:30",
            "UTC +08:45",
            "UTC +10:00",
            "UTC +10:00",
            "UTC +10:30",
            "UTC +10:00",
            "UTC +08:00",
            "UTC +10:00"
        ]
    },
    {
        countryCode: "AT",
        countryName: "Austria",
        timeZones: [
            "Europe/Vienna"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "AZ",
        countryName: "Azerbaijan",
        timeZones: [
            "Asia/Baku"
        ],
        UTCOffset: [
            "UTC +04:00"
        ]
    },
    {
        countryCode: "BS",
        countryName: "Bahamas",
        timeZones: [
            "America/Nassau"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "BH",
        countryName: "Bahrain",
        timeZones: [
            "Asia/Bahrain"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "BD",
        countryName: "Bangladesh",
        timeZones: [
            "Asia/Dhaka"
        ],
        UTCOffset: [
            "UTC +06:00"
        ]
    },
    {
        countryCode: "BB",
        countryName: "Barbados",
        timeZones: [
            "America/Barbados"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "BY",
        countryName: "Belarus",
        timeZones: [
            "Europe/Minsk"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "BE",
        countryName: "Belgium",
        timeZones: [
            "Europe/Brussels"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "BZ",
        countryName: "Belize",
        timeZones: [
            "America/Belize"
        ],
        UTCOffset: [
            "UTC -06:00"
        ]
    },
    {
        countryCode: "BJ",
        countryName: "Benin",
        timeZones: [
            "Africa/Porto-Novo"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "BM",
        countryName: "Bermuda",
        timeZones: [
            "Atlantic/Bermuda"
        ],
        UTCOffset: [
            "UTC -03:00"
        ]
    },
    {
        countryCode: "BT",
        countryName: "Bhutan",
        timeZones: [
            "Asia/Thimphu"
        ],
        UTCOffset: [
            "UTC +06:00"
        ]
    },
    {
        countryCode: "BO",
        countryName: "Bolivia",
        timeZones: [
            "America/La_Paz"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "BQ",
        countryName: "Bonaire, Saint Eustatius and Saba",
        timeZones: [
            "America/Kralendijk"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "BA",
        countryName: "Bosnia and Herzegovina",
        timeZones: [
            "Europe/Sarajevo"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "BW",
        countryName: "Botswana",
        timeZones: [
            "Africa/Gaborone"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "BR",
        countryName: "Brazil",
        timeZones: [
            "America/Araguaina",
            "America/Bahia",
            "America/Belem",
            "America/Boa_Vista",
            "America/Campo_Grande",
            "America/Cuiaba",
            "America/Eirunepe",
            "America/Fortaleza",
            "America/Maceio",
            "America/Manaus",
            "America/Noronha",
            "America/Porto_Velho",
            "America/Recife",
            "America/Rio_Branco",
            "America/Santarem",
            "America/Sao_Paulo"
        ],
        UTCOffset: [
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -05:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -04:00",
            "UTC -02:00",
            "UTC -04:00",
            "UTC -03:00",
            "UTC -05:00",
            "UTC -03:00",
            "UTC -03:00"
        ]
    },
    {
        countryCode: "IO",
        countryName: "British Indian Ocean Territory",
        timeZones: [
            "Indian/Chagos"
        ],
        UTCOffset: [
            "UTC +06:00"
        ]
    },
    {
        countryCode: "VG",
        countryName: "British Virgin Islands",
        timeZones: [
            "America/Tortola"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "BN",
        countryName: "Brunei",
        timeZones: [
            "Asia/Brunei"
        ],
        UTCOffset: [
            "UTC +08:00"
        ]
    },
    {
        countryCode: "BG",
        countryName: "Bulgaria",
        timeZones: [
            "Europe/Sofia"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "BF",
        countryName: "Burkina Faso",
        timeZones: [
            "Africa/Ouagadougou"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "BI",
        countryName: "Burundi",
        timeZones: [
            "Africa/Bujumbura"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "KH",
        countryName: "Cambodia",
        timeZones: [
            "Asia/Phnom_Penh"
        ],
        UTCOffset: [
            "UTC +07:00"
        ]
    },
    {
        countryCode: "CM",
        countryName: "Cameroon",
        timeZones: [
            "Africa/Douala"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "CA",
        countryName: "Canada",
        timeZones: [
            "America/Atikokan",
            "America/Blanc-Sablon",
            "America/Cambridge_Bay",
            "America/Creston",
            "America/Dawson",
            "America/Dawson_Creek",
            "America/Edmonton",
            "America/Fort_Nelson",
            "America/Glace_Bay",
            "America/Goose_Bay",
            "America/Halifax",
            "America/Inuvik",
            "America/Iqaluit",
            "America/Moncton",
            "America/Nipigon",
            "America/Pangnirtung",
            "America/Rainy_River",
            "America/Rankin_Inlet",
            "America/Regina",
            "America/Resolute",
            "America/St_Johns",
            "America/Swift_Current",
            "America/Thunder_Bay",
            "America/Toronto",
            "America/Vancouver",
            "America/Whitehorse",
            "America/Winnipeg",
            "America/Yellowknife"
        ],
        UTCOffset: [
            "UTC -05:00",
            "UTC -04:00",
            "UTC -06:00",
            "UTC -07:00",
            "UTC -07:00",
            "UTC -07:00",
            "UTC -06:00",
            "UTC -07:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -03:00",
            "UTC -06:00",
            "UTC -04:00",
            "UTC -03:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -05:00",
            "UTC -05:00",
            "UTC -06:00",
            "UTC -05:00",
            "UTC -02:30",
            "UTC -06:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -07:00",
            "UTC -07:00",
            "UTC -05:00",
            "UTC -06:00"
        ]
    },
    {
        countryCode: "CV",
        countryName: "Cape Verde",
        timeZones: [
            "Atlantic/Cape_Verde"
        ],
        UTCOffset: [
            "UTC -01:00"
        ]
    },
    {
        countryCode: "KY",
        countryName: "Cayman Islands",
        timeZones: [
            "America/Cayman"
        ],
        UTCOffset: [
            "UTC -05:00"
        ]
    },
    {
        countryCode: "CF",
        countryName: "Central African Republic",
        timeZones: [
            "Africa/Bangui"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "TD",
        countryName: "Chad",
        timeZones: [
            "Africa/Ndjamena"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "CL",
        countryName: "Chile",
        timeZones: [
            "America/Punta_Arenas",
            "America/Santiago",
            "Pacific/Easter"
        ],
        UTCOffset: [
            "UTC -03:00",
            "UTC -04:00",
            "UTC -06:00"
        ]
    },
    {
        countryCode: "CN",
        countryName: "China",
        timeZones: [
            "Asia/Shanghai",
            "Asia/Urumqi"
        ],
        UTCOffset: [
            "UTC +08:00",
            "UTC +06:00"
        ]
    },
    {
        countryCode: "CX",
        countryName: "Christmas Island",
        timeZones: [
            "Indian/Christmas"
        ],
        UTCOffset: [
            "UTC +07:00"
        ]
    },
    {
        countryCode: "CC",
        countryName: "Cocos Islands",
        timeZones: [
            "Indian/Cocos"
        ],
        UTCOffset: [
            "UTC +06:30"
        ]
    },
    {
        countryCode: "CO",
        countryName: "Colombia",
        timeZones: [
            "America/Bogota"
        ],
        UTCOffset: [
            "UTC -05:00"
        ]
    },
    {
        countryCode: "KM",
        countryName: "Comoros",
        timeZones: [
            "Indian/Comoro"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "CK",
        countryName: "Cook Islands",
        timeZones: [
            "Pacific/Rarotonga"
        ],
        UTCOffset: [
            "UTC -10:00"
        ]
    },
    {
        countryCode: "CR",
        countryName: "Costa Rica",
        timeZones: [
            "America/Costa_Rica"
        ],
        UTCOffset: [
            "UTC -06:00"
        ]
    },
    {
        countryCode: "HR",
        countryName: "Croatia",
        timeZones: [
            "Europe/Zagreb"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "CU",
        countryName: "Cuba",
        timeZones: [
            "America/Havana"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "CW",
        countryName: "Curaçao",
        timeZones: [
            "America/Curacao"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "CY",
        countryName: "Cyprus",
        timeZones: [
            "Asia/Famagusta",
            "Asia/Nicosia"
        ],
        UTCOffset: [
            "UTC +03:00",
            "UTC +03:00"
        ]
    },
    {
        countryCode: "CZ",
        countryName: "Czech Republic",
        timeZones: [
            "Europe/Prague"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "CD",
        countryName: "Democratic Republic of the Congo",
        timeZones: [
            "Africa/Kinshasa",
            "Africa/Lubumbashi"
        ],
        UTCOffset: [
            "UTC +01:00",
            "UTC +02:00"
        ]
    },
    {
        countryCode: "DK",
        countryName: "Denmark",
        timeZones: [
            "Europe/Copenhagen"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "DJ",
        countryName: "Djibouti",
        timeZones: [
            "Africa/Djibouti"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "DM",
        countryName: "Dominica",
        timeZones: [
            "America/Dominica"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "DO",
        countryName: "Dominican Republic",
        timeZones: [
            "America/Santo_Domingo"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "TL",
        countryName: "East Timor",
        timeZones: [
            "Asia/Dili"
        ],
        UTCOffset: [
            "UTC +09:00"
        ]
    },
    {
        countryCode: "EC",
        countryName: "Ecuador",
        timeZones: [
            "America/Guayaquil",
            "Pacific/Galapagos"
        ],
        UTCOffset: [
            "UTC -05:00",
            "UTC -06:00"
        ]
    },
    {
        countryCode: "EG",
        countryName: "Egypt",
        timeZones: [
            "Africa/Cairo"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "SV",
        countryName: "El Salvador",
        timeZones: [
            "America/El_Salvador"
        ],
        UTCOffset: [
            "UTC -06:00"
        ]
    },
    {
        countryCode: "GQ",
        countryName: "Equatorial Guinea",
        timeZones: [
            "Africa/Malabo"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "ER",
        countryName: "Eritrea",
        timeZones: [
            "Africa/Asmara"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "EE",
        countryName: "Estonia",
        timeZones: [
            "Europe/Tallinn"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "ET",
        countryName: "Ethiopia",
        timeZones: [
            "Africa/Addis_Ababa"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "FK",
        countryName: "Falkland Islands",
        timeZones: [
            "Atlantic/Stanley"
        ],
        UTCOffset: [
            "UTC -03:00"
        ]
    },
    {
        countryCode: "FO",
        countryName: "Faroe Islands",
        timeZones: [
            "Atlantic/Faroe"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "FJ",
        countryName: "Fiji",
        timeZones: [
            "Pacific/Fiji"
        ],
        UTCOffset: [
            "UTC +12:00"
        ]
    },
    {
        countryCode: "FI",
        countryName: "Finland",
        timeZones: [
            "Europe/Helsinki"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "FR",
        countryName: "France",
        timeZones: [
            "Europe/Paris"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "GF",
        countryName: "French Guiana",
        timeZones: [
            "America/Cayenne"
        ],
        UTCOffset: [
            "UTC -03:00"
        ]
    },
    {
        countryCode: "PF",
        countryName: "French Polynesia",
        timeZones: [
            "Pacific/Gambier",
            "Pacific/Marquesas",
            "Pacific/Tahiti"
        ],
        UTCOffset: [
            "UTC -09:00",
            "UTC -09:30",
            "UTC -10:00"
        ]
    },
    {
        countryCode: "TF",
        countryName: "French Southern Territories",
        timeZones: [
            "Indian/Kerguelen"
        ],
        UTCOffset: [
            "UTC +05:00"
        ]
    },
    {
        countryCode: "GA",
        countryName: "Gabon",
        timeZones: [
            "Africa/Libreville"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "GM",
        countryName: "Gambia",
        timeZones: [
            "Africa/Banjul"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "GE",
        countryName: "Georgia",
        timeZones: [
            "Asia/Tbilisi"
        ],
        UTCOffset: [
            "UTC +04:00"
        ]
    },
    {
        countryCode: "DE",
        countryName: "Germany",
        timeZones: [
            "Europe/Berlin",
            "Europe/Busingen"
        ],
        UTCOffset: [
            "UTC +02:00",
            "UTC +02:00"
        ]
    },
    {
        countryCode: "GH",
        countryName: "Ghana",
        timeZones: [
            "Africa/Accra"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "GI",
        countryName: "Gibraltar",
        timeZones: [
            "Europe/Gibraltar"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "GR",
        countryName: "Greece",
        timeZones: [
            "Europe/Athens"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "GL",
        countryName: "Greenland",
        timeZones: [
            "America/Danmarkshavn",
            "America/Godthab",
            "America/Scoresbysund",
            "America/Thule"
        ],
        UTCOffset: [
            "UTC",
            "UTC -02:00",
            "UTC",
            "UTC -03:00"
        ]
    },
    {
        countryCode: "GD",
        countryName: "Grenada",
        timeZones: [
            "America/Grenada"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "GP",
        countryName: "Guadeloupe",
        timeZones: [
            "America/Guadeloupe"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "GU",
        countryName: "Guam",
        timeZones: [
            "Pacific/Guam"
        ],
        UTCOffset: [
            "UTC +10:00"
        ]
    },
    {
        countryCode: "GT",
        countryName: "Guatemala",
        timeZones: [
            "America/Guatemala"
        ],
        UTCOffset: [
            "UTC -06:00"
        ]
    },
    {
        countryCode: "GG",
        countryName: "Guernsey",
        timeZones: [
            "Europe/Guernsey"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "GN",
        countryName: "Guinea",
        timeZones: [
            "Africa/Conakry"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "GW",
        countryName: "Guinea-Bissau",
        timeZones: [
            "Africa/Bissau"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "GY",
        countryName: "Guyana",
        timeZones: [
            "America/Guyana"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "HT",
        countryName: "Haiti",
        timeZones: [
            "America/Port-au-Prince"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "HN",
        countryName: "Honduras",
        timeZones: [
            "America/Tegucigalpa"
        ],
        UTCOffset: [
            "UTC -06:00"
        ]
    },
    {
        countryCode: "HK",
        countryName: "Hong Kong",
        timeZones: [
            "Asia/Hong_Kong"
        ],
        UTCOffset: [
            "UTC +08:00"
        ]
    },
    {
        countryCode: "HU",
        countryName: "Hungary",
        timeZones: [
            "Europe/Budapest"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "IS",
        countryName: "Iceland",
        timeZones: [
            "Atlantic/Reykjavik"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "IN",
        countryName: "India",
        timeZones: [
            "Asia/Kolkata"
        ],
        UTCOffset: [
            "UTC +05:30"
        ]
    },
    {
        countryCode: "ID",
        countryName: "Indonesia",
        timeZones: [
            "Asia/Jakarta",
            "Asia/Jayapura",
            "Asia/Makassar",
            "Asia/Pontianak"
        ],
        UTCOffset: [
            "UTC +07:00",
            "UTC +09:00",
            "UTC +08:00",
            "UTC +07:00"
        ]
    },
    {
        countryCode: "IR",
        countryName: "Iran",
        timeZones: [
            "Asia/Tehran"
        ],
        UTCOffset: [
            "UTC +04:30"
        ]
    },
    {
        countryCode: "IQ",
        countryName: "Iraq",
        timeZones: [
            "Asia/Baghdad"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "IE",
        countryName: "Ireland",
        timeZones: [
            "Europe/Dublin"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "IM",
        countryName: "Isle of Man",
        timeZones: [
            "Europe/Isle_of_Man"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "IL",
        countryName: "Israel",
        timeZones: [
            "Asia/Jerusalem"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "IT",
        countryName: "Italy",
        timeZones: [
            "Europe/Rome"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "CI",
        countryName: "Ivory Coast",
        timeZones: [
            "Africa/Abidjan"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "JM",
        countryName: "Jamaica",
        timeZones: [
            "America/Jamaica"
        ],
        UTCOffset: [
            "UTC -05:00"
        ]
    },
    {
        countryCode: "JP",
        countryName: "Japan",
        timeZones: [
            "Asia/Tokyo"
        ],
        UTCOffset: [
            "UTC +09:00"
        ]
    },
    {
        countryCode: "JE",
        countryName: "Jersey",
        timeZones: [
            "Europe/Jersey"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "JO",
        countryName: "Jordan",
        timeZones: [
            "Asia/Amman"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "KZ",
        countryName: "Kazakhstan",
        timeZones: [
            "Asia/Almaty",
            "Asia/Aqtau",
            "Asia/Aqtobe",
            "Asia/Atyrau",
            "Asia/Oral",
            "Asia/Qyzylorda"
        ],
        UTCOffset: [
            "UTC +06:00",
            "UTC +05:00",
            "UTC +05:00",
            "UTC +05:00",
            "UTC +05:00",
            "UTC +06:00"
        ]
    },
    {
        countryCode: "KE",
        countryName: "Kenya",
        timeZones: [
            "Africa/Nairobi"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "KI",
        countryName: "Kiribati",
        timeZones: [
            "Pacific/Enderbury",
            "Pacific/Kiritimati",
            "Pacific/Tarawa"
        ],
        UTCOffset: [
            "UTC +13:00",
            "UTC +14:00",
            "UTC +12:00"
        ]
    },
    {
        countryCode: "KW",
        countryName: "Kuwait",
        timeZones: [
            "Asia/Kuwait"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "KG",
        countryName: "Kyrgyzstan",
        timeZones: [
            "Asia/Bishkek"
        ],
        UTCOffset: [
            "UTC +06:00"
        ]
    },
    {
        countryCode: "LA",
        countryName: "Laos",
        timeZones: [
            "Asia/Vientiane"
        ],
        UTCOffset: [
            "UTC +07:00"
        ]
    },
    {
        countryCode: "LV",
        countryName: "Latvia",
        timeZones: [
            "Europe/Riga"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "LB",
        countryName: "Lebanon",
        timeZones: [
            "Asia/Beirut"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "LS",
        countryName: "Lesotho",
        timeZones: [
            "Africa/Maseru"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "LR",
        countryName: "Liberia",
        timeZones: [
            "Africa/Monrovia"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "LY",
        countryName: "Libya",
        timeZones: [
            "Africa/Tripoli"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "LI",
        countryName: "Liechtenstein",
        timeZones: [
            "Europe/Vaduz"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "LT",
        countryName: "Lithuania",
        timeZones: [
            "Europe/Vilnius"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "LU",
        countryName: "Luxembourg",
        timeZones: [
            "Europe/Luxembourg"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "MO",
        countryName: "Macao",
        timeZones: [
            "Asia/Macau"
        ],
        UTCOffset: [
            "UTC +08:00"
        ]
    },
    {
        countryCode: "MK",
        countryName: "Macedonia",
        timeZones: [
            "Europe/Skopje"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "MG",
        countryName: "Madagascar",
        timeZones: [
            "Indian/Antananarivo"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "MW",
        countryName: "Malawi",
        timeZones: [
            "Africa/Blantyre"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "MY",
        countryName: "Malaysia",
        timeZones: [
            "Asia/Kuala_Lumpur",
            "Asia/Kuching"
        ],
        UTCOffset: [
            "UTC +08:00",
            "UTC +08:00"
        ]
    },
    {
        countryCode: "MV",
        countryName: "Maldives",
        timeZones: [
            "Indian/Maldives"
        ],
        UTCOffset: [
            "UTC +05:00"
        ]
    },
    {
        countryCode: "ML",
        countryName: "Mali",
        timeZones: [
            "Africa/Bamako"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "MT",
        countryName: "Malta",
        timeZones: [
            "Europe/Malta"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "MH",
        countryName: "Marshall Islands",
        timeZones: [
            "Pacific/Kwajalein",
            "Pacific/Majuro"
        ],
        UTCOffset: [
            "UTC +12:00",
            "UTC +12:00"
        ]
    },
    {
        countryCode: "MQ",
        countryName: "Martinique",
        timeZones: [
            "America/Martinique"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "MR",
        countryName: "Mauritania",
        timeZones: [
            "Africa/Nouakchott"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "MU",
        countryName: "Mauritius",
        timeZones: [
            "Indian/Mauritius"
        ],
        UTCOffset: [
            "UTC +04:00"
        ]
    },
    {
        countryCode: "YT",
        countryName: "Mayotte",
        timeZones: [
            "Indian/Mayotte"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "MX",
        countryName: "Mexico",
        timeZones: [
            "America/Bahia_Banderas",
            "America/Cancun",
            "America/Chihuahua",
            "America/Hermosillo",
            "America/Matamoros",
            "America/Mazatlan",
            "America/Merida",
            "America/Mexico_City",
            "America/Monterrey",
            "America/Ojinaga",
            "America/Tijuana"
        ],
        UTCOffset: [
            "UTC -05:00",
            "UTC -05:00",
            "UTC -06:00",
            "UTC -07:00",
            "UTC -05:00",
            "UTC -06:00",
            "UTC -05:00",
            "UTC -05:00",
            "UTC -05:00",
            "UTC -06:00",
            "UTC -07:00"
        ]
    },
    {
        countryCode: "FM",
        countryName: "Micronesia",
        timeZones: [
            "Pacific/Chuuk",
            "Pacific/Kosrae",
            "Pacific/Pohnpei"
        ],
        UTCOffset: [
            "UTC +10:00",
            "UTC +11:00",
            "UTC +11:00"
        ]
    },
    {
        countryCode: "MD",
        countryName: "Moldova",
        timeZones: [
            "Europe/Chisinau"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "MC",
        countryName: "Monaco",
        timeZones: [
            "Europe/Monaco"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "MN",
        countryName: "Mongolia",
        timeZones: [
            "Asia/Choibalsan",
            "Asia/Hovd",
            "Asia/Ulaanbaatar"
        ],
        UTCOffset: [
            "UTC +08:00",
            "UTC +07:00",
            "UTC +08:00"
        ]
    },
    {
        countryCode: "ME",
        countryName: "Montenegro",
        timeZones: [
            "Europe/Podgorica"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "MS",
        countryName: "Montserrat",
        timeZones: [
            "America/Montserrat"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "MA",
        countryName: "Morocco",
        timeZones: [
            "Africa/Casablanca"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "MZ",
        countryName: "Mozambique",
        timeZones: [
            "Africa/Maputo"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "MM",
        countryName: "Myanmar",
        timeZones: [
            "Asia/Yangon"
        ],
        UTCOffset: [
            "UTC +06:30"
        ]
    },
    {
        countryCode: "NA",
        countryName: "Namibia",
        timeZones: [
            "Africa/Windhoek"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "NR",
        countryName: "Nauru",
        timeZones: [
            "Pacific/Nauru"
        ],
        UTCOffset: [
            "UTC +12:00"
        ]
    },
    {
        countryCode: "NP",
        countryName: "Nepal",
        timeZones: [
            "Asia/Kathmandu"
        ],
        UTCOffset: [
            "UTC +05:45"
        ]
    },
    {
        countryCode: "NL",
        countryName: "Netherlands",
        timeZones: [
            "Europe/Amsterdam"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "NC",
        countryName: "New Caledonia",
        timeZones: [
            "Pacific/Noumea"
        ],
        UTCOffset: [
            "UTC +11:00"
        ]
    },
    {
        countryCode: "NZ",
        countryName: "New Zealand",
        timeZones: [
            "Pacific/Auckland",
            "Pacific/Chatham"
        ],
        UTCOffset: [
            "UTC +12:00",
            "UTC +12:45"
        ]
    },
    {
        countryCode: "NI",
        countryName: "Nicaragua",
        timeZones: [
            "America/Managua"
        ],
        UTCOffset: [
            "UTC -06:00"
        ]
    },
    {
        countryCode: "NE",
        countryName: "Niger",
        timeZones: [
            "Africa/Niamey"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "NG",
        countryName: "Nigeria",
        timeZones: [
            "Africa/Lagos"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "NU",
        countryName: "Niue",
        timeZones: [
            "Pacific/Niue"
        ],
        UTCOffset: [
            "UTC -11:00"
        ]
    },
    {
        countryCode: "NF",
        countryName: "Norfolk Island",
        timeZones: [
            "Pacific/Norfolk"
        ],
        UTCOffset: [
            "UTC +11:00"
        ]
    },
    {
        countryCode: "KP",
        countryName: "North Korea",
        timeZones: [
            "Asia/Pyongyang"
        ],
        UTCOffset: [
            "UTC +09:00"
        ]
    },
    {
        countryCode: "MP",
        countryName: "Northern Mariana Islands",
        timeZones: [
            "Pacific/Saipan"
        ],
        UTCOffset: [
            "UTC +10:00"
        ]
    },
    {
        countryCode: "NO",
        countryName: "Norway",
        timeZones: [
            "Europe/Oslo"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "OM",
        countryName: "Oman",
        timeZones: [
            "Asia/Muscat"
        ],
        UTCOffset: [
            "UTC +04:00"
        ]
    },
    {
        countryCode: "PK",
        countryName: "Pakistan",
        timeZones: [
            "Asia/Karachi"
        ],
        UTCOffset: [
            "UTC +05:00"
        ]
    },
    {
        countryCode: "PW",
        countryName: "Palau",
        timeZones: [
            "Pacific/Palau"
        ],
        UTCOffset: [
            "UTC +09:00"
        ]
    },
    {
        countryCode: "PS",
        countryName: "Palestinian Territory",
        timeZones: [
            "Asia/Gaza",
            "Asia/Hebron"
        ],
        UTCOffset: [
            "UTC +03:00",
            "UTC +03:00"
        ]
    },
    {
        countryCode: "PA",
        countryName: "Panama",
        timeZones: [
            "America/Panama"
        ],
        UTCOffset: [
            "UTC -05:00"
        ]
    },
    {
        countryCode: "PG",
        countryName: "Papua New Guinea",
        timeZones: [
            "Pacific/Bougainville",
            "Pacific/Port_Moresby"
        ],
        UTCOffset: [
            "UTC +11:00",
            "UTC +10:00"
        ]
    },
    {
        countryCode: "PY",
        countryName: "Paraguay",
        timeZones: [
            "America/Asuncion"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "PE",
        countryName: "Peru",
        timeZones: [
            "America/Lima"
        ],
        UTCOffset: [
            "UTC -05:00"
        ]
    },
    {
        countryCode: "PH",
        countryName: "Philippines",
        timeZones: [
            "Asia/Manila"
        ],
        UTCOffset: [
            "UTC +08:00"
        ]
    },
    {
        countryCode: "PN",
        countryName: "Pitcairn",
        timeZones: [
            "Pacific/Pitcairn"
        ],
        UTCOffset: [
            "UTC -08:00"
        ]
    },
    {
        countryCode: "PL",
        countryName: "Poland",
        timeZones: [
            "Europe/Warsaw"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "PT",
        countryName: "Portugal",
        timeZones: [
            "Atlantic/Azores",
            "Atlantic/Madeira",
            "Europe/Lisbon"
        ],
        UTCOffset: [
            "UTC",
            "UTC +01:00",
            "UTC +01:00"
        ]
    },
    {
        countryCode: "PR",
        countryName: "Puerto Rico",
        timeZones: [
            "America/Puerto_Rico"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "QA",
        countryName: "Qatar",
        timeZones: [
            "Asia/Qatar"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "CG",
        countryName: "Republic of the Congo",
        timeZones: [
            "Africa/Brazzaville"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "RE",
        countryName: "Reunion",
        timeZones: [
            "Indian/Reunion"
        ],
        UTCOffset: [
            "UTC +04:00"
        ]
    },
    {
        countryCode: "RO",
        countryName: "Romania",
        timeZones: [
            "Europe/Bucharest"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "RU",
        countryName: "Russia",
        timeZones: [
            "Asia/Anadyr",
            "Asia/Barnaul",
            "Asia/Chita",
            "Asia/Irkutsk",
            "Asia/Kamchatka",
            "Asia/Khandyga",
            "Asia/Krasnoyarsk",
            "Asia/Magadan",
            "Asia/Novokuznetsk",
            "Asia/Novosibirsk",
            "Asia/Omsk",
            "Asia/Sakhalin",
            "Asia/Srednekolymsk",
            "Asia/Tomsk",
            "Asia/Ust-Nera",
            "Asia/Vladivostok",
            "Asia/Yakutsk",
            "Asia/Yekaterinburg",
            "Europe/Astrakhan",
            "Europe/Kaliningrad",
            "Europe/Kirov",
            "Europe/Moscow",
            "Europe/Samara",
            "Europe/Saratov",
            "Europe/Simferopol",
            "Europe/Ulyanovsk",
            "Europe/Volgograd"
        ],
        UTCOffset: [
            "UTC +12:00",
            "UTC +07:00",
            "UTC +09:00",
            "UTC +08:00",
            "UTC +12:00",
            "UTC +09:00",
            "UTC +07:00",
            "UTC +11:00",
            "UTC +07:00",
            "UTC +07:00",
            "UTC +06:00",
            "UTC +11:00",
            "UTC +11:00",
            "UTC +07:00",
            "UTC +10:00",
            "UTC +10:00",
            "UTC +09:00",
            "UTC +05:00",
            "UTC +04:00",
            "UTC +02:00",
            "UTC +03:00",
            "UTC +03:00",
            "UTC +04:00",
            "UTC +04:00",
            "UTC +03:00",
            "UTC +04:00",
            "UTC +03:00"
        ]
    },
    {
        countryCode: "RW",
        countryName: "Rwanda",
        timeZones: [
            "Africa/Kigali"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "BL",
        countryName: "Saint Barthélemy",
        timeZones: [
            "America/St_Barthelemy"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "SH",
        countryName: "Saint Helena",
        timeZones: [
            "Atlantic/St_Helena"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "KN",
        countryName: "Saint Kitts and Nevis",
        timeZones: [
            "America/St_Kitts"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "LC",
        countryName: "Saint Lucia",
        timeZones: [
            "America/St_Lucia"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "MF",
        countryName: "Saint Martin",
        timeZones: [
            "America/Marigot"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "PM",
        countryName: "Saint Pierre and Miquelon",
        timeZones: [
            "America/Miquelon"
        ],
        UTCOffset: [
            "UTC -02:00"
        ]
    },
    {
        countryCode: "VC",
        countryName: "Saint Vincent and the Grenadines",
        timeZones: [
            "America/St_Vincent"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "WS",
        countryName: "Samoa",
        timeZones: [
            "Pacific/Apia"
        ],
        UTCOffset: [
            "UTC +13:00"
        ]
    },
    {
        countryCode: "SM",
        countryName: "San Marino",
        timeZones: [
            "Europe/San_Marino"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "ST",
        countryName: "Sao Tome and Principe",
        timeZones: [
            "Africa/Sao_Tome"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "SA",
        countryName: "Saudi Arabia",
        timeZones: [
            "Asia/Riyadh"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "SN",
        countryName: "Senegal",
        timeZones: [
            "Africa/Dakar"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "RS",
        countryName: "Serbia",
        timeZones: [
            "Europe/Belgrade"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "SC",
        countryName: "Seychelles",
        timeZones: [
            "Indian/Mahe"
        ],
        UTCOffset: [
            "UTC +04:00"
        ]
    },
    {
        countryCode: "SL",
        countryName: "Sierra Leone",
        timeZones: [
            "Africa/Freetown"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "SG",
        countryName: "Singapore",
        timeZones: [
            "Asia/Singapore"
        ],
        UTCOffset: [
            "UTC +08:00"
        ]
    },
    {
        countryCode: "SX",
        countryName: "Sint Maarten",
        timeZones: [
            "America/Lower_Princes"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "SK",
        countryName: "Slovakia",
        timeZones: [
            "Europe/Bratislava"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "SI",
        countryName: "Slovenia",
        timeZones: [
            "Europe/Ljubljana"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "SB",
        countryName: "Solomon Islands",
        timeZones: [
            "Pacific/Guadalcanal"
        ],
        UTCOffset: [
            "UTC +11:00"
        ]
    },
    {
        countryCode: "SO",
        countryName: "Somalia",
        timeZones: [
            "Africa/Mogadishu"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "ZA",
        countryName: "South Africa",
        timeZones: [
            "Africa/Johannesburg"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "GS",
        countryName: "South Georgia and the South Sandwich Islands",
        timeZones: [
            "Atlantic/South_Georgia"
        ],
        UTCOffset: [
            "UTC -02:00"
        ]
    },
    {
        countryCode: "KR",
        countryName: "South Korea",
        timeZones: [
            "Asia/Seoul"
        ],
        UTCOffset: [
            "UTC +09:00"
        ]
    },
    {
        countryCode: "SS",
        countryName: "South Sudan",
        timeZones: [
            "Africa/Juba"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "ES",
        countryName: "Spain",
        timeZones: [
            "Africa/Ceuta",
            "Atlantic/Canary",
            "Europe/Madrid"
        ],
        UTCOffset: [
            "UTC +02:00",
            "UTC +01:00",
            "UTC +02:00"
        ]
    },
    {
        countryCode: "LK",
        countryName: "Sri Lanka",
        timeZones: [
            "Asia/Colombo"
        ],
        UTCOffset: [
            "UTC +05:30"
        ]
    },
    {
        countryCode: "SD",
        countryName: "Sudan",
        timeZones: [
            "Africa/Khartoum"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "SR",
        countryName: "Suriname",
        timeZones: [
            "America/Paramaribo"
        ],
        UTCOffset: [
            "UTC -03:00"
        ]
    },
    {
        countryCode: "SJ",
        countryName: "Svalbard and Jan Mayen",
        timeZones: [
            "Arctic/Longyearbyen"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "SZ",
        countryName: "Swaziland",
        timeZones: [
            "Africa/Mbabane"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "SE",
        countryName: "Sweden",
        timeZones: [
            "Europe/Stockholm"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "CH",
        countryName: "Switzerland",
        timeZones: [
            "Europe/Zurich"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "SY",
        countryName: "Syria",
        timeZones: [
            "Asia/Damascus"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "TW",
        countryName: "Taiwan",
        timeZones: [
            "Asia/Taipei"
        ],
        UTCOffset: [
            "UTC +08:00"
        ]
    },
    {
        countryCode: "TJ",
        countryName: "Tajikistan",
        timeZones: [
            "Asia/Dushanbe"
        ],
        UTCOffset: [
            "UTC +05:00"
        ]
    },
    {
        countryCode: "TZ",
        countryName: "Tanzania",
        timeZones: [
            "Africa/Dar_es_Salaam"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "TH",
        countryName: "Thailand",
        timeZones: [
            "Asia/Bangkok"
        ],
        UTCOffset: [
            "UTC +07:00"
        ]
    },
    {
        countryCode: "TG",
        countryName: "Togo",
        timeZones: [
            "Africa/Lome"
        ],
        UTCOffset: [
            "UTC"
        ]
    },
    {
        countryCode: "TK",
        countryName: "Tokelau",
        timeZones: [
            "Pacific/Fakaofo"
        ],
        UTCOffset: [
            "UTC +13:00"
        ]
    },
    {
        countryCode: "TO",
        countryName: "Tonga",
        timeZones: [
            "Pacific/Tongatapu"
        ],
        UTCOffset: [
            "UTC +13:00"
        ]
    },
    {
        countryCode: "TT",
        countryName: "Trinidad and Tobago",
        timeZones: [
            "America/Port_of_Spain"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "TN",
        countryName: "Tunisia",
        timeZones: [
            "Africa/Tunis"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "TR",
        countryName: "Turkey",
        timeZones: [
            "Europe/Istanbul"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "TM",
        countryName: "Turkmenistan",
        timeZones: [
            "Asia/Ashgabat"
        ],
        UTCOffset: [
            "UTC +05:00"
        ]
    },
    {
        countryCode: "TC",
        countryName: "Turks and Caicos Islands",
        timeZones: [
            "America/Grand_Turk"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "TV",
        countryName: "Tuvalu",
        timeZones: [
            "Pacific/Funafuti"
        ],
        UTCOffset: [
            "UTC +12:00"
        ]
    },
    {
        countryCode: "VI",
        countryName: "U.S. Virgin Islands",
        timeZones: [
            "America/St_Thomas"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "UG",
        countryName: "Uganda",
        timeZones: [
            "Africa/Kampala"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "UA",
        countryName: "Ukraine",
        timeZones: [
            "Europe/Kiev",
            "Europe/Uzhgorod",
            "Europe/Zaporozhye"
        ],
        UTCOffset: [
            "UTC +03:00",
            "UTC +03:00",
            "UTC +03:00"
        ]
    },
    {
        countryCode: "AE",
        countryName: "United Arab Emirates",
        timeZones: [
            "Asia/Dubai"
        ],
        UTCOffset: [
            "UTC +04:00"
        ]
    },
    {
        countryCode: "GB",
        countryName: "United Kingdom",
        timeZones: [
            "Europe/London"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "US",
        countryName: "United States",
        timeZones: [
            "America/Adak",
            "America/Anchorage",
            "America/Boise",
            "America/Chicago",
            "America/Denver",
            "America/Detroit",
            "America/Indiana/Indianapolis",
            "America/Indiana/Knox",
            "America/Indiana/Marengo",
            "America/Indiana/Petersburg",
            "America/Indiana/Tell_City",
            "America/Indiana/Vevay",
            "America/Indiana/Vincennes",
            "America/Indiana/Winamac",
            "America/Juneau",
            "America/Kentucky/Louisville",
            "America/Kentucky/Monticello",
            "America/Los_Angeles",
            "America/Menominee",
            "America/Metlakatla",
            "America/New_York",
            "America/Nome",
            "America/North_Dakota/Beulah",
            "America/North_Dakota/Center",
            "America/North_Dakota/New_Salem",
            "America/Phoenix",
            "America/Sitka",
            "America/Yakutat",
            "Pacific/Honolulu"
        ],
        UTCOffset: [
            "UTC -09:00",
            "UTC -08:00",
            "UTC -06:00",
            "UTC -05:00",
            "UTC -06:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -05:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -05:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -08:00",
            "UTC -04:00",
            "UTC -04:00",
            "UTC -07:00",
            "UTC -05:00",
            "UTC -08:00",
            "UTC -04:00",
            "UTC -08:00",
            "UTC -05:00",
            "UTC -05:00",
            "UTC -05:00",
            "UTC -07:00",
            "UTC -08:00",
            "UTC -08:00",
            "UTC -10:00"
        ]
    },
    {
        countryCode: "UM",
        countryName: "United States Minor Outlying Islands",
        timeZones: [
            "Pacific/Midway",
            "Pacific/Wake"
        ],
        UTCOffset: [
            "UTC -11:00",
            "UTC +12:00"
        ]
    },
    {
        countryCode: "UY",
        countryName: "Uruguay",
        timeZones: [
            "America/Montevideo"
        ],
        UTCOffset: [
            "UTC -03:00"
        ]
    },
    {
        countryCode: "UZ",
        countryName: "Uzbekistan",
        timeZones: [
            "Asia/Samarkand",
            "Asia/Tashkent"
        ],
        UTCOffset: [
            "UTC +05:00",
            "UTC +05:00"
        ]
    },
    {
        countryCode: "VU",
        countryName: "Vanuatu",
        timeZones: [
            "Pacific/Efate"
        ],
        UTCOffset: [
            "UTC +11:00"
        ]
    },
    {
        countryCode: "VA",
        countryName: "Vatican",
        timeZones: [
            "Europe/Vatican"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "VE",
        countryName: "Venezuela",
        timeZones: [
            "America/Caracas"
        ],
        UTCOffset: [
            "UTC -04:00"
        ]
    },
    {
        countryCode: "VN",
        countryName: "Vietnam",
        timeZones: [
            "Asia/Ho_Chi_Minh"
        ],
        UTCOffset: [
            "UTC +07:00"
        ]
    },
    {
        countryCode: "WF",
        countryName: "Wallis and Futuna",
        timeZones: [
            "Pacific/Wallis"
        ],
        UTCOffset: [
            "UTC +12:00"
        ]
    },
    {
        countryCode: "EH",
        countryName: "Western Sahara",
        timeZones: [
            "Africa/El_Aaiun"
        ],
        UTCOffset: [
            "UTC +01:00"
        ]
    },
    {
        countryCode: "YE",
        countryName: "Yemen",
        timeZones: [
            "Asia/Aden"
        ],
        UTCOffset: [
            "UTC +03:00"
        ]
    },
    {
        countryCode: "ZM",
        countryName: "Zambia",
        timeZones: [
            "Africa/Lusaka"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    },
    {
        countryCode: "ZW",
        countryName: "Zimbabwe",
        timeZones: [
            "Africa/Harare"
        ],
        UTCOffset: [
            "UTC +02:00"
        ]
    }
]