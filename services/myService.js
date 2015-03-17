/**
 * Created by massimo on 11/3/14.
 */

myApp.service('myService', function($http, $q){

    this.field1 = [
        {
            "_id": "546d37029ad57d77e7dc5555",
            "index": 0,
            "guid": "a1b41647-12c2-4cf4-b90d-1d50bde5fe7c",
            "isActive": false,
            "balance": "$3,790.69",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "blue",
            "name": "Isabella Skinner",
            "gender": "female",
            "company": "XTH",
            "email": "isabellaskinner@xth.com",
            "phone": "+1 (852) 572-2420",
            "address": "827 Meserole Avenue, Remington, District Of Columbia, 2794",
            "about": "Minim aliquip labore adipisicing consectetur dolore et labore excepteur deserunt adipisicing consequat amet id veniam. Consequat cillum dolore excepteur voluptate consectetur ea id aliquip consectetur amet. Officia nostrud occaecat exercitation non aliqua consectetur.\r\n",
            "registered": "2014-10-30T21:35:45 +05:00",
            "latitude": -4.068269,
            "longitude": 16.081263,
            "tags": [
                "occaecat",
                "est",
                "aliquip",
                "voluptate",
                "consequat",
                "cillum",
                "ea"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Long Cabrera"
                },
                {
                    "id": 1,
                    "name": "Juanita Summers"
                },
                {
                    "id": 2,
                    "name": "Myra Barnett"
                }
            ],
            "greeting": "Hello, Isabella Skinner! You have 8 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "546d370269951b3684a907e8",
            "index": 1,
            "guid": "f3df7dd0-a05b-4e1f-89dc-61e8f3c55956",
            "isActive": false,
            "balance": "$3,746.41",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "green",
            "name": "Glenn Mcmahon",
            "gender": "male",
            "company": "SONGBIRD",
            "email": "glennmcmahon@songbird.com",
            "phone": "+1 (916) 488-2697",
            "address": "677 Ocean Court, Ventress, South Carolina, 5775",
            "about": "Non eiusmod fugiat voluptate sint velit cupidatat sit cupidatat labore velit dolor. Excepteur elit ea enim ea elit do labore nostrud nisi deserunt in. Dolor sint dolore ut sit eiusmod Lorem non irure aute eiusmod aliqua labore anim do. Ut non proident ullamco cillum ea. Sit mollit Lorem sunt reprehenderit. Sunt cillum cillum magna est ipsum aliqua aliquip.\r\n",
            "registered": "2014-10-15T08:06:08 +05:00",
            "latitude": -23.993755,
            "longitude": 159.480601,
            "tags": [
                "eu",
                "nisi",
                "pariatur",
                "incididunt",
                "ut",
                "consequat",
                "anim"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Stevens Carney"
                },
                {
                    "id": 1,
                    "name": "Noel Mcneil"
                },
                {
                    "id": 2,
                    "name": "Vance Orr"
                }
            ],
            "greeting": "Hello, Glenn Mcmahon! You have 2 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "546d3702efebc7371c227b55",
            "index": 2,
            "guid": "45813070-22d5-4625-ba22-20c73af62b97",
            "isActive": false,
            "balance": "$2,657.18",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "eyeColor": "brown",
            "name": "Naomi Foreman",
            "gender": "female",
            "company": "XUMONK",
            "email": "naomiforeman@xumonk.com",
            "phone": "+1 (907) 531-2178",
            "address": "414 Russell Street, Sexton, Connecticut, 1852",
            "about": "Enim velit deserunt et cillum esse proident dolore ex consequat. Ex id quis officia nostrud occaecat adipisicing do sit officia dolor sint deserunt duis ullamco. Velit aliquip quis in commodo incididunt eiusmod consequat veniam irure veniam ea et proident. Aute magna ut consequat nostrud. Excepteur consectetur anim in esse pariatur ut incididunt. Reprehenderit ipsum nulla ullamco enim. Non est minim quis ea excepteur.\r\n",
            "registered": "2014-04-28T12:26:00 +05:00",
            "latitude": 23.181762,
            "longitude": 134.924069,
            "tags": [
                "consectetur",
                "dolor",
                "elit",
                "dolore",
                "elit",
                "elit",
                "ut"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Frank Chandler"
                },
                {
                    "id": 1,
                    "name": "Dana Wilkins"
                },
                {
                    "id": 2,
                    "name": "Cardenas Cortez"
                }
            ],
            "greeting": "Hello, Naomi Foreman! You have 3 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "546d37023ca28d978ff4e85d",
            "index": 3,
            "guid": "065ea122-4add-4e37-8431-2c755fa576c1",
            "isActive": false,
            "balance": "$1,914.92",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "eyeColor": "blue",
            "name": "Arline Bowman",
            "gender": "female",
            "company": "MOTOVATE",
            "email": "arlinebowman@motovate.com",
            "phone": "+1 (902) 564-2387",
            "address": "362 Woodbine Street, Needmore, Georgia, 125",
            "about": "Laboris Lorem do incididunt ullamco ex exercitation dolor duis sint cillum aliquip nulla pariatur quis. Irure Lorem ut aliquip nulla est sunt dolor minim sit minim cillum dolor aute incididunt. Ut culpa aliqua eu et esse esse magna sint nulla. Officia cillum veniam cupidatat nostrud culpa commodo nostrud reprehenderit elit. Quis commodo labore occaecat dolore aute veniam pariatur sint. Voluptate minim non velit reprehenderit dolore. Commodo voluptate elit anim nostrud.\r\n",
            "registered": "2014-10-17T10:59:42 +05:00",
            "latitude": 40.504253,
            "longitude": 23.52819,
            "tags": [
                "tempor",
                "sunt",
                "magna",
                "irure",
                "culpa",
                "esse",
                "elit"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Rena Blanchard"
                },
                {
                    "id": 1,
                    "name": "Corinne Salas"
                },
                {
                    "id": 2,
                    "name": "French Kelly"
                }
            ],
            "greeting": "Hello, Arline Bowman! You have 5 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "546d3702de90e0fa4b2768ce",
            "index": 4,
            "guid": "e91787e4-9324-4802-b1a4-aba1b8783c1c",
            "isActive": false,
            "balance": "$3,045.94",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "green",
            "name": "Mercer Baker",
            "gender": "male",
            "company": "ZOID",
            "email": "mercerbaker@zoid.com",
            "phone": "+1 (972) 486-3198",
            "address": "900 Havens Place, Gouglersville, New York, 2778",
            "about": "Esse cillum aute culpa ipsum cupidatat pariatur nulla fugiat cillum elit do. Dolore in nulla consectetur enim officia. Nisi commodo dolore laboris consectetur tempor enim deserunt velit magna et exercitation esse consectetur reprehenderit. Ex consequat quis tempor culpa laborum ad dolore. Esse adipisicing incididunt voluptate nostrud tempor. Sit consequat dolore excepteur nulla consequat nisi veniam pariatur nisi amet.\r\n",
            "registered": "2014-07-04T03:30:18 +05:00",
            "latitude": -8.13978,
            "longitude": -98.95329,
            "tags": [
                "sunt",
                "nisi",
                "officia",
                "sint",
                "quis",
                "elit",
                "do"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Sandra Patel"
                },
                {
                    "id": 1,
                    "name": "Hood Ferrell"
                },
                {
                    "id": 2,
                    "name": "David Dillard"
                }
            ],
            "greeting": "Hello, Mercer Baker! You have 5 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "546d37026708750b38902d86",
            "index": 5,
            "guid": "614233c9-02d3-482b-8378-f3c642ce91a0",
            "isActive": true,
            "balance": "$1,257.93",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "green",
            "name": "Maude Terrell",
            "gender": "female",
            "company": "DYNO",
            "email": "maudeterrell@dyno.com",
            "phone": "+1 (874) 503-3891",
            "address": "811 Reed Street, Coventry, Virgin Islands, 7733",
            "about": "Cupidatat eiusmod nulla occaecat reprehenderit consequat. Elit deserunt consequat sit eu veniam. Labore ea anim ullamco commodo proident dolore ut velit laboris labore. In occaecat occaecat mollit aliquip deserunt deserunt laboris veniam eu reprehenderit id adipisicing. Cillum voluptate minim sunt nostrud enim minim aliquip ea.\r\n",
            "registered": "2014-02-15T07:49:25 +06:00",
            "latitude": 57.859198,
            "longitude": 166.894709,
            "tags": [
                "velit",
                "laboris",
                "amet",
                "ex",
                "nostrud",
                "commodo",
                "est"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Holcomb Walsh"
                },
                {
                    "id": 1,
                    "name": "Elizabeth Gilmore"
                },
                {
                    "id": 2,
                    "name": "Victoria Park"
                }
            ],
            "greeting": "Hello, Maude Terrell! You have 2 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "546d37021aa3cf058000036b",
            "index": 6,
            "guid": "62bea2bf-7a61-4384-a014-4109fcc601ed",
            "isActive": false,
            "balance": "$1,290.82",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "eyeColor": "green",
            "name": "Marla Weaver",
            "gender": "female",
            "company": "ESSENSIA",
            "email": "marlaweaver@essensia.com",
            "phone": "+1 (834) 500-3714",
            "address": "335 Newkirk Placez, Hall, Michigan, 4383",
            "about": "Sint laboris quis ea ex aliquip magna eu eiusmod elit. Magna veniam culpa ex dolor culpa ut. Labore duis dolore culpa voluptate irure deserunt qui excepteur.\r\n",
            "registered": "2014-04-19T10:00:41 +05:00",
            "latitude": -24.381629,
            "longitude": -109.636722,
            "tags": [
                "irure",
                "incididunt",
                "cupidatat",
                "cillum",
                "labore",
                "ullamco",
                "anim"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Golden Sharpe"
                },
                {
                    "id": 1,
                    "name": "Gates Rice"
                },
                {
                    "id": 2,
                    "name": "Knight Calderon"
                }
            ],
            "greeting": "Hello, Marla Weaver! You have 10 unread messages.",
            "favoriteFruit": "apple"
        }
    ];

    this.load = function(){

        var deferred = $q.defer();
        var url = 'http://127.0.0.1:8080/test/webresources/myresource/';

        $http.get(url).success(function(data, status){

                deferred.resolve(data);

            }

        ).error(function(data, status){

                deferred.reject(data);

            });

        return deferred.promise;

    }

});