class victory extends Phaser.Scene {
  constructor() {
    super("victory");
  }

  preload() {
    this.load.image("missaoconcluida", "assets/missaoconcluida.png");
  }

  create() {
    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;

    this.add
      .rectangle(
        centerX,
        centerY,
        this.cameras.main.width,
        this.cameras.main.height,
        0x000000,
        1,
      )
      .setDepth(0);

    const victoryImage = this.add
      .image(centerX, centerY, "missaoconcluida")
      .setOrigin(0.5)
      .setDepth(1);

    const imageWidth = victoryImage.width || victoryImage.displayWidth || 1;
    const imageHeight = victoryImage.height || victoryImage.displayHeight || 1;
    const scale = Math.min(
      (this.cameras.main.width * 0.8) / imageWidth,
      (this.cameras.main.height * 0.8) / imageHeight,
      1,
    );
    victoryImage.setScale(scale);

    this.add
      .text(
        centerX,
        centerY - victoryImage.displayHeight / 2 - 50,
        "Você coletou todas as 100 engrenagens!",
        {
          fontFamily: "Arial",
          fontSize: "24px",
          color: "#ffffff",
          align: "center",
        },
      )
      .setOrigin(0.5)
      .setDepth(2);

    this.add
      .text(
        centerX,
        centerY + victoryImage.displayHeight / 2 + 30,
        "Clique para jogar novamente",
        {
          fontFamily: "Arial",
          fontSize: "20px",
          color: "#ffffff",
          align: "center",
        },
      )
      .setOrigin(0.5)
      .setDepth(2);

    this.add
      .zone(centerX, centerY, this.cameras.main.width, this.cameras.main.height)
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("start");
      });
  

    globalThis.google.accounts.id.initialize({
      client_id:
        "331191695151-ku8mdhd76pc2k36itas8lm722krn0u64.apps.googleusercontent.com",
      callback: (res) => {
        if (res.error) {
          console.error(res.error);
        } else {
          axios
            .post(
              "https://feira-de-jogos.dev.br/api/v2/credit",
              {
                product: 68, // id do jogo cadastrado no banco de dados da Feira de Jogos
                value: 180, // crédito em tijolinhos
              },
              {
                headers: {
                  Authorization: `Bearer ${res.credential}`,
                },
              }
            )
            .then(function (response) {
              console.log(response);
              alert("Crédito adicionado!");
            })
            .catch(function (error) {
              console.error(error);
              alert("Erro ao adicionar crédito :(");
            });
        }
      },
    });

    globalThis.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        globalThis.google.accounts.id.prompt();
      }
    });
  }
}

export default victory;
