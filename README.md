# Proiect cloud

Paragraf de introducere: Aplicatie web simpla care aduce informatii oficiale despre domeniile de activitate existente in Romania. Aplicatia utilizeaza 2 servicii în cloud, prin intermediul unui API REST. 


## Descriere Problema
In general, informaţia este o resursa care are o importanta deosebita pentru desfasurarea activitatilor unei persoane/institutii si, in consecinta, necesitatea corectitudinii acesteia este primordiala. 
In zilele noastre, problemele de informare si documentare inca exista, populatia tinzand sa nu verifice veridicitatea informatiilor din online.
Aplicatia dezvoltata vine in ajutorul utilizatorilor pentru a-i pune la curent cu situatia business-ului din Romania, datele pe care le utilizeaza fiind puse la dispozitie chiar de Guvern. 

## Prezentare API-uri utilizate
Aplicatia utilizeaza doua API-uri publice, unul menit sa aduca informatiile comunicate de catre Guvern privind domeniile de activitate populare in Romania (http://demo.datagov.dataware.ro:5000/api/3/action/group_list), iar celalalt faciliteaza navigarea catre o pagina care ofera mai multe detalii despre un anumit domeniu ales de utilizator (http://api.linkpreview.net).

Primul API este pus la dispozitie de un site al Guvernului din Romania pentru dezvoltatorii care doresc să interacționeaze la nivel de cod cu platforma și cu datele conținute. API-ul este unul public, ce nu necesita autentificare si expune toate caracteristicile de bază ale CKAN.

Cel de-al doilea API este pus la dispozitie de LinkPreview si ofera un rezumat formatat JSON cu titlu, descriere și imagini pentru orice adresă URL solicitată. API-ul necesita autentificare printr-un API key si utilizează parametrii de interogare: API key si adresa url pentru care utilizatorul doreste afisarea rezumatului.
## Descriere arhitectura

* Exemple de request/response

Request URL: http://demo.datagov.dataware.ro:5000/api/3/action/group_list
Request Method: GET

Response:
```json
{ "help": "https://192.168.2.10/api/3/action/help_show?name=group_list",
    "success": true,
    "result": [
        "agricultura-silvicultura-si-pescuit",
        "finante",
        "educatie-cultura-si-sport",
        "energie",
        "politica",
        "drept",
        "mediu-inconjurator",
        "nomenclatoare",
        "orase-regiuni",
        "probleme-sociale",
        "relatii-internationale",
        "sanatate",
        "transport",
        "productie-tehnologie-si-cercetare"
    ]
}
```
Request URL: http://api.linkpreview.net/?key=a5a1c94afcb7d06eeb35d488fbaab666&q=https://www.moore.ro/sectors/test-sector

Request Method: GET

Response:
```json
{  "title": "Agricultura, silvicultura si pescuit — MOORE",
    "description": "Sustinem un numar semnificativ de clienti fermieri, fiindu-le alaturi pe parcursul trecererii prin terenul minat ale reglementarilor si asistandu-i in fata schimbarilor inevitabile.",
    "image": "https://www.moore.ro/SiteImages/MooreStephens/dist/logo.png",
    "url": "https://www.moore.ro/sectors/test-sector"
}
```
* Metode HTTP

Metodele HTTP folosite sunt metode GET, acestea fiind utilizate pentru a solicita date dintr-o resursă specificată.

## Erori intalnite
* "429 Too many requests / rate limit exceede" 
![]("/cloud_app-node.js/erori/err1.png")

Am rezolvat aceasta eroare consultand documentatia celui de-al doilea API si observand ca am depasit limita de 60 de accesari pe ora.

* "Error: listen EADDRINUSE: address already in use :::8080"

Am rezolvat aceasta eroare omorand toate procesele existente pe portul folosit de aplicatie, aceste procese putand fi vazute cu comanda: "lsof -i:8080"

* "Mixed Content: The page at was loaded over HTTPS, but requested an insecure resource . This request has been blocked; the content must be served over HTTPS."

![]("/cloud_app-node.js/erori/err2.JPG")
Eroarea aparea doar la incercarea de a deschide aplicatia din Azure App Services. Am incercat sa mut request-ul pe backend, insa nu am reusit sa fac aplicatia functionala si din platforma Azure App Services.
