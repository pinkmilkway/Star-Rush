class victory extends Phaser.Scene {
  constructor() {
    super("victory");
  }

  preload() {
    this.load.setPath("assets/");
    // Por enquanto usando gameover.png até ter victory.png
    this.load.image("victory", "gameover.png");
  }

  create() {
    // Fundo
    this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      400,
      200,
      0x000000,
      0.9,
    );

    // Texto de vitória
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 50,
        "PARABÉNS!",
        {
          fontFamily: "Arial",
          fontSize: "48px",
          color: "#ffff00",
          align: "center",
        },
      )
      .setOrigin(0.5);

    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "Você coletou todas as 100 engrenagens!",
        {
          fontFamily: "Arial",
          fontSize: "24px",
          color: "#ffffff",
          align: "center",
        },
      )
      .setOrigin(0.5);

    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 50,
        "Clique para jogar novamente",
        {
          fontFamily: "Arial",
          fontSize: "20px",
          color: "#cccccc",
          align: "center",
        },
      )
      .setOrigin(0.5);

    // Tornar a tela inteira clicável
    this.add
      .zone(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        this.cameras.main.width,
        this.cameras.main.height,
      )
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("start");
      });
  }
}

export default victory;
