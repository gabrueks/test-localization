![Travis CI](https://travis-ci.com/gabrueks/typescript-template.svg?branch=master)
<h1>Hello!</h1><h3>~~English~~</h3>

Node.js + Typescript + MongoDB

The **Typescript** helps in your .js projects to be more
To start, you should clone the repository using the following command: <br>
``` git clone https://github.com/gabrueks/test-localization ```
<br>

<h3>Now that we have the code on our machines</h3>
There are two options on running the template, locally or in containers docker (wich is also locally, but it's different, you know). I used docker-compose to run a **MongoDB** instance and a **Node.js** server without problems.

<h3>Now, go to your project folder</h3>

To run in docker, you have two options

1: by Makefile (Unix systems)
Run the command:
```
make
```

2: By docker-compose, run the command:
```
docker-compose build
docker-compose up
```

To run locally, you need to run **MongoDB** on your machine an run the commands:
```
npm install
npm start
```

<h2>First service</h2>
Make a post on `http://localhost:8080/api/v1/create`
<h4>Payload example</h4>
```javascript {
	"tradingName": "test",
	"ownerName": "gabriel",
	"document": "45757063882",
	"coverageArea": {
		"type": "multiPolygon",
		"coordinates": [
                [
                   [
                      [
                         -43.36556,
                         -22.99669
                      ],
                      [
                         -43.36539,
                         -23.01928
                      ],
                      [
                         -43.26583,
                         -23.01802
                      ],
                      [
                         -43.25724,
                         -23.00649
                      ],
                      [
                         -43.23355,
                         -23.00127
                      ],
                      [
                         -43.2381,
                         -22.99716
                      ],
                      [
                         -43.23866,
                         -22.99649
                      ],
                      [
                         -43.24063,
                         -22.99756
                      ],
                      [
                         -43.24634,
                         -22.99736
                      ],
                      [
                         -43.24677,
                         -22.99606
                      ],
                      [
                         -43.24067,
                         -22.99381
                      ],
                      [
                         -43.24886,
                         -22.99121
                      ],
                      [
                         -43.25617,
                         -22.99456
                      ],
                      [
                         -43.25625,
                         -22.99203
                      ],
                      [
                         -43.25346,
                         -22.99065
                      ],
                      [
                         -43.29599,
                         -22.98283
                      ],
                      [
                         -43.3262,
                         -22.96481
                      ],
                      [
                         -43.33427,
                         -22.96402
                      ],
                      [
                         -43.33616,
                         -22.96829
                      ],
                      [
                         -43.342,
                         -22.98157
                      ],
                      [
                         -43.34817,
                         -22.97967
                      ],
                      [
                         -43.35142,
                         -22.98062
                      ],
                      [
                         -43.3573,
                         -22.98084
                      ],
                      [
                         -43.36522,
                         -22.98032
                      ],
                      [
                         -43.36696,
                         -22.98422
                      ],
                      [
                         -43.36717,
                         -22.98855
                      ],
                      [
                         -43.36636,
                         -22.99351
                      ],
                      [
                         -43.36556,
                         -22.99669
                      ]
                   ]
                ]
             ]
	},
	"address": {
		"type": "Point",
		"coordinates": [
			-43.297337,
            -23.013538
        ]
	}
} ```

<h2>Second service</h2>
Make a get on `http://localhost:8080/api/v1/get-pdv/40` (40 is a example, you can search for any).

<h2>Third service</h2>
WIP

<h3>If you have any tip, doubt or possible improvement, PR this repository (or create an issue) or send me an e-mail on gabriel03899@hotmail.com</h3>
